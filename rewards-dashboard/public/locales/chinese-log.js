// Browser-only Chinese presentation. Never rewrite stored logs or notification input.
import {logCatalog,extraLogCatalog} from './log-catalog-zh-CN.js';
import {logTerms,logFields,logTags} from './log-vocabulary-zh-CN.js';
import {segments,translateLogMessage} from './log-zh-CN.js';
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const all=[...logCatalog,...extraLogCatalog];
const exact=new Map(all.filter(r=>!(/\{\d+\}/.test(r.en))).map(r=>[r.en,r.zh]));
const templates=all.filter(r=>/\{\d+\}/.test(r.en)).map(r=>{
 const parts=r.en.split(/\{(\d+)\}/g),slots=[];let pattern='^',score=0;
 for(let i=0;i<parts.length;i++){
  if(i%2){slots.push(Number(parts[i]));pattern+=parts[i+1]===''&&i+2<parts.length?'((?:⟦\\d+⟧)|\\S*)':'([\\s\\S]*?)';}
  else{pattern+=escape(parts[i]);score+=parts[i].length;}
 }
 const needle=parts.filter((_,i)=>i%2===0).sort((a,b)=>b.length-a.length)[0]||'';
 return {...r,regex:new RegExp(pattern+'$'),slots,score,needle};
}).filter(rule=>rule.score>=4).sort((a,b)=>b.score-a.score);
const additional={Error:'错误',TypeError:'类型错误',RangeError:'范围错误',SyntaxError:'语法错误',TimeoutError:'超时错误',AbortError:'请求中止',AggregateError:'多个请求错误',unknown:'未知',null:'未提供',undefined:'未提供',true:'是',false:'否',NaN:'非有效数字',...logTerms};
const technical=v=>/^(?:https?:\/\/|file:\/\/|[A-Za-z]:[\\/]|\/[^\s]|[^\s@]+@[^\s@]+\.[^\s@]+$)/.test(v)||/^[-+\d\s.,:/%×→<>?()[\]{}]+$/.test(v)||/^⟦\d+⟧$/.test(v)||/^(?:ERR_[A-Z_]+|[A-Z][A-Z0-9_]{2,}|[a-f\d]{12,}|v?\d+(?:\.\d+)+(?:[-\w.]*)?)$/.test(v);
const wording=[
 [/waiting for locator\((.*?)\) to be (visible|hidden|attached|detached|stable|enabled|editable)/g,(_,target,state)=>'等待定位控件（'+target+'）'+({visible:'可见',hidden:'隐藏',attached:'载入',detached:'移除',stable:'稳定',enabled:'可用',editable:'可编辑'})[state]],
 [/\bTarget page, context or browser has been closed\b/g,'目标页面、浏览器会话或浏览器已关闭'],
 [/\bTimeout ([\d.]+)ms exceeded\.?/g,'等待超过 $1 毫秒，已超时'],
 [/\bNavigation timeout of ([\d.]+) ms exceeded/g,'页面跳转超过 $1 毫秒，已超时'],
 [/\bwaiting for navigation to "([^"]+)"/g,'等待页面跳转至「$1」'],
 [/\bwaiting for navigation until "([^"]+)"/g,'等待页面跳转至「$1」状态'],
 [/\bwaiting for locator\((.*)\)/g,'等待出现定位控件（$1）'],
 [/\bwaiting for (?:element|locator) to be (visible|hidden|attached|detached|stable|enabled|editable)/g,(_,s)=>'等待控件'+({visible:'可见',hidden:'隐藏',attached:'载入',detached:'移除',stable:'稳定',enabled:'可用',editable:'可编辑'})[s]],
 [/\bCall log:\s*/g,'操作跟踪：'],[/\battempting click action\b/g,'正在尝试点击'],
 [/\bwaiting for element to be visible, enabled and stable\b/g,'等待控件可见、可用并且稳定'],
 [/\belement is not visible\b/g,'控件不可见'],[/\belement is not enabled\b/g,'控件未启用'],
 [/\belement is not stable\b/g,'控件位置尚不稳定'],[/\belement is outside of the viewport\b/g,'控件位于可视区域之外'],
 [/\bElement is not attached to the DOM\b/gi,'控件已不在页面中'],
 [/\bscrolling into view if needed\b/g,'需要时滚动至可视区域'],[/\bdone scrolling\b/g,'滚动已完成'],
 [/\bretrying click action\b/g,'正在重试点击'],[/\bintercepts pointer events\b/g,'拦截了鼠标事件'],
 [/\bwaiting (\d+)ms\b/g,'等待 $1 毫秒'],
 [/\bnavigated to "([^"]+)"/g,'已跳转至「$1」'],[/\bnavigation to "([^"]+)"/g,'跳转至「$1」'],
 [/\bnetwork is unreachable\b/gi,'网络不可达'],[/\bConnection refused\b/gi,'连接被拒绝'],
 [/\bconnection reset by peer\b/gi,'连接被对端重置'],[/\bunexpected eof while reading\b/gi,'读取期间连接意外中断'],
 [/\bcertificate verify failed\b/gi,'证书验证失败'],[/\bself[- ]signed certificate\b/gi,'自签名证书'],
 [/\bunable to verify the first certificate\b/gi,'无法验证证书链'],
 [/\bRequest failed with status code (\d+)\b/g,'请求返回异常状态码 $1'],
 [/\bUnexpected token (.+) in JSON at position (\d+)\b/g,'结构化数据第 $2 个位置出现意外字符 $1'],
 [/\bUnexpected end of JSON input\b/g,'结构化数据尚未完整接收'],
 [/\bfetch failed\b/gi,'网络请求失败'],[/\bFailed to fetch\b/g,'获取失败'],
 [/\bPermission denied\b/gi,'权限不足'],[/\bNo such file or directory\b/gi,'文件或目录不存在'],
 [/\bno such table\b/gi,'数据表不存在'],[/\bdatabase is locked\b/gi,'数据库被锁定'],
 [/\bbot[- ]score warning\b/gi,'账号自动化风险警告'],
 [/\bIncorrect password\b/gi,'密码不正确'],[/\bYour account or password is incorrect\b/gi,'账号或密码不正确'],
 [/\bYour account has been locked\b/gi,'账号已被锁定'],[/\bToo many requests\b/gi,'请求过于频繁'],
 [/\bService unavailable\b/gi,'服务暂不可用'],[/\bInternal server error\b/gi,'服务器内部错误'],
 [/\bUnauthorized\b/g,'未获授权'],[/\bForbidden\b/g,'访问被拒绝'],
 [/\bBad Request\b/g,'请求不正确'],[/\bNot Found\b/g,'未找到目标'],
 [/\bUnable to sign in\b/gi,'无法登录'],[/\bPlease try again later\b/gi,'请稍后重试'],
 [/\bSomething went wrong\b/gi,'发生了错误'],[/\bTry again\b/gi,'请重试'],
 [/\bLogin rejected\b/gi,'登录被拒绝'],[/\bthe provided verification code is incorrect\b/gi,'提供的验证码不正确'],
 [/\bpage\.waitForURL\b/g,'等待页面地址跳转'],[/\bpage\.goto\b/g,'打开页面'],
 [/\bpage\.waitForLoadState\b/g,'等待页面加载'],[/\blocator\.waitFor\b/g,'等待页面控件'],
 [/\blocator\.click\b/g,'点击页面控件'],[/\bpage\.click\b/g,'点击页面'],
 [/\bError reading response stream\b/g,'读取响应数据流失败'],
];
const names=Object.keys(additional).sort((a,b)=>b.length-a.length).filter(name=>name.length>=2&&/[A-Za-z]/.test(name)).map(name=>[new RegExp('(?<![\\w@./-])'+escape(name)+'(?![\\w@./-])','g'),additional[name]]);
function inline(value){
 let text=value;
 for(const [re,replacement] of wording)text=text.replace(re,replacement);
 for(const [re,label] of names)text=text.replace(re,()=>label);
 return text;
}
function structure(value,depth=0,key=''){
 if(Array.isArray(value))return value.map(v=>structure(v,depth+1,key));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[logFields[k]||additional[k]||k,structure(v,depth+1,k)]));
 if(typeof value==='string')return preserveKey(key)?value:render(value,depth+1).text;
 return value;
}
const preserveKey=key=>/^(?:email|userName|account|query|lastQuery|title|url|path|offerId|operationId|runId|userAgent|selector|stackFrame)$/i.test(key);
function matchTemplate(text,depth){
 const direct=exact.get(text);if(direct!==undefined)return {text:direct,known:true};
 for(const rule of templates){
  if(rule.needle&&!text.includes(rule.needle))continue;
  const m=rule.regex.exec(text);if(!m)continue;
  const values={};for(let i=0;i<rule.slots.length;i++)values[rule.slots[i]]=m[i+1];
  let known=true;
  const translated=rule.zh.replace(/\{(\d+)\}/g,(_,n)=>{
   const value=values[n]??'';
   if(!value||rule.keep.includes(Number(n))||technical(value))return value;
   const result=render(value,depth+1);known&&=result.known;return result.text;
  });
  return {text:translated,known};
 }
 return null;
}
function render(raw,depth=0){
 const text=String(raw??'');if(!text)return {text,known:true};
 if(depth>10)return {text:inline(text),known:false};
 if(text.startsWith('"')&&text.endsWith('"')){try{const decoded=JSON.parse(text);if(typeof decoded==='string')return render(decoded,depth+1);}catch{}}
 if(exact.has(text))return {text:exact.get(text),known:true};
 if(additional[text]!==undefined)return {text:additional[text],known:true};
 // JSON is rendered in full, with fields and values translated recursively.
 if(/^\s*[\[{]/.test(text)){
  try{return {text:JSON.stringify(structure(JSON.parse(text),depth+1),null,2),known:true};}catch{}
 }
 if(technical(text)&&!/[\s]/.test(text))return {text,known:true};
 const counts=/^activities: (.*)$/.exec(text);
 if(counts)return {text:'任务统计：'+counts[1].replace(/(\d+) (completed|incomplete|unavailable|not applicable)/g,(_,n,status)=>n+' 项'+({completed:'已完成',incomplete:'未完成',unavailable:'未提供','not applicable':'不适用'})[status]),known:true};
 const full=matchTemplate(text,depth);if(full)return full;
 if(/[\r\n]/.test(text)){
  const lines=text.split(/\r?\n/).map(line=>{
   if(/^\s*at\s/.test(line))return {text:line.replace(/^(\s*)at\s/,'$1调用位置：'),known:true};
   const whitespace=line.match(/^\s*/)[0],result=render(line.trim(),depth+1);return {...result,text:whitespace+result.text};
  });return {text:lines.map(l=>l.text).join('\n'),known:lines.every(l=>l.known)};
 }
 const pieces=segments(text);if(pieces.length>1){const results=pieces.map(s=>render(s,depth+1));return{text:results.map(r=>r.text).join('；'),known:results.every(r=>r.known)};}
 const field=/^(\s*(?:[-]\s*)?)([A-Za-z][\w .-]*)(=|:\s*)([\s\S]*)$/.exec(text);
 if(field&&(logFields[field[2]]||additional[field[2]])){
  const result=preserveKey(field[2])?{text:field[4],known:true}:render(field[4],depth+1);
  return {text:field[1]+(logFields[field[2]]||additional[field[2]])+'：'+result.text,known:result.known};
 }
 const stack=/^stack=(.*)$/.exec(text);if(stack)return{text:'调用堆栈：'+stack[1].replace(/ <- /g,' ← '),known:true};
 const generic=/^([^:]+): ([\s\S]*)$/.exec(text);
 if(generic){const a=render(generic[1],depth+1),b=render(generic[2],depth+1);return{text:a.text+'：'+b.text,known:a.known&&b.known};}
 const legacy=translateLogMessage(text);
 const candidate=legacy===text?text:legacy;
 const translated=inline(candidate);
 // Never replace the actual diagnostic with a generic missing-translation notice.
 // Newly introduced external wording stays visible rather than being discarded.
 return {text:translated,known:translated!==text||!/[A-Za-z]{3}/.test(text)};
}
export function chineseLog(value){
 let text=String(value??'');
 text=text.replace(/^\[[^\]]+\]\s*\[run_daily\.sh\]\s*/, '');
 return render(text);
}
export const diagnosticChinese=value=>chineseLog(value).text;
export function chineseLogTag(tag){
 const value=String(tag||'');
 if(logTags[value])return logTags[value];
 if(/LOGIN|AUTH|SESSION|DETECT.STATE/.test(value))return '登录与会话';
 if(/SEARCH/.test(value))return '搜索任务';if(/READ/.test(value))return '阅读任务';
 if(/ACCOUNT.START/.test(value))return '账号开始';if(/ACCOUNT.END|ACCOUNT.SKIP/.test(value))return '账号结果';
 if(/RUN.START/.test(value))return '本轮开始';if(/RUN.END/.test(value))return '本轮结果';
 const labels={CONTROLLER:'运行控制','ACTIVITY-RESULT':'任务结果','DAILY-SET':'每日三项','TASK-DELAY':'任务等待','GET-DASHBOARD-DATA':'账号资料','EARN-PAGE':'积分任务页',SNAPSHOT:'账号快照',FLOW:'执行流程','RUN-PLAN':'运行计划','REWARDS-MODE':'任务模式',PROCESS:'进程管理','ENTRYPOINT':'容器启动','RUN_DAILY.SH':'定时执行','CONFIG-SYNC':'配置同步','EDGE-BROWSING':'后台浏览奖励','CLAIM-BONUS-POINTS':'额外奖励','DAILY-CHECK-IN':'每日签到'};
 return labels[value]||additional[value.toLowerCase()]||'运行记录';
}
