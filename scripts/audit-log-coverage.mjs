// Read-only audit of a Microsoft Rewards Script checkout. TypeScript is an audit
// tool only; it is not needed by the dashboard or its production image.
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {logCatalog,extraLogCatalog,sourceRevision} from '../rewards-dashboard/public/locales/log-catalog-zh-CN.js';

const [source,compiler]=process.argv.slice(2);
if(!source||!compiler){
 console.error('用法：node scripts/audit-log-coverage.mjs <上游源码目录> <typescript.js绝对路径>');
 process.exit(2);
}
const ts=createRequire(import.meta.url)(path.resolve(compiler)),root=path.resolve(source);
const covered=new Set([...logCatalog,...extraLogCatalog].map(r=>r.en)),missing=new Map(),dynamic=new Set(),observed=new Set();
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):/\.(ts|js|cjs)$/.test(e.name)?[path.join(dir,e.name)]:[]);}
function variants(n){
 if(!n)return [];
 if(ts.isStringLiteralLike(n))return [{parts:[n.text],expr:[]}];
 if(ts.isTemplateExpression(n)){const parts=[n.head.text],expr=[];for(const span of n.templateSpans){expr.push(span.expression.getText());parts.push(span.literal.text);}return [{parts,expr}];}
 if(ts.isParenthesizedExpression(n))return variants(n.expression);
 if(ts.isConditionalExpression(n))return [...variants(n.whenTrue),...variants(n.whenFalse)];
 if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.PlusToken){
  return variants(n.left).flatMap(a=>variants(n.right).map(b=>({parts:[...a.parts.slice(0,-1),a.parts.at(-1)+b.parts[0],...b.parts.slice(1)],expr:[...a.expr,...b.expr]})));
 }
 return [{parts:['',''],expr:[n.getText()]}];
}
for(const file of [...files(path.join(root,'src')),...files(path.join(root,'scripts'))]){
 const sourceFile=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);
 const relative=path.relative(root,file).replaceAll('\\','/');
 function check(node){
  for(const v of variants(node)){
   const text=v.parts.map((s,i)=>s+(i<v.expr.length?`{${i}}`:'')).join('');
   const location=relative+':'+(sourceFile.getLineAndCharacterOfPosition(node.getStart()).line+1);
   if(text==='{0}'){dynamic.add(location+' '+v.expr[0]);continue;}
   if(!/[A-Za-z]{3}/.test(text))continue;
   observed.add(text);if(!covered.has(text))missing.set(text,{source:location,text});
  }
 }
 function visit(n){
  if(ts.isCallExpression(n)){
   const name=n.expression.getText();
   if(/(?:^|\.)logger\.(?:info|warn|error|debug|success|special|event)$/.test(name)||/\.logger\[/.test(name))check(n.arguments[2]);
   if(name==='log')check(n.arguments[1]);
   if(name==='requestError')check(n.arguments[0]);
  }
  if(ts.isNewExpression(n)&&/^(Error|ActivitySkipError|TypeError|RangeError)$/.test(n.expression.getText()))check(n.arguments?.[n.expression.getText()==='ActivitySkipError'?1:0]);
  if(ts.isVariableDeclaration(n)&&/^(message|summary|observation)$/.test(n.name.getText()))check(n.initializer);
  if(ts.isReturnStatement(n)&&n.expression){let p=n.parent;while(p&&!ts.isFunctionDeclaration(p)&&!ts.isMethodDeclaration(p))p=p.parent;if(p&&/^(formatProgress|formatActivityResult|session)$/.test(p.name?.getText()||''))check(n.expression);}
  if(relative==='src/logging/LogMessage.ts'&&ts.isPropertyAssignment(n))check(n.initializer);
  ts.forEachChild(n,visit);
 }
 visit(sourceFile);
}
const revision=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
console.log(JSON.stringify({sourceRevision:revision,reviewedRevision:sourceRevision,matchingRevision:revision===sourceRevision,sourceTexts:observed.size,missing:[...missing.values()],dynamicLocationsNeedingManualReview:dynamic.size},null,2));
// A new source revision requires human review even when literal texts match:
// runtime values, outcome semantics or formatting functions may have changed.
process.exitCode=missing.size||revision!==sourceRevision?1:0;
