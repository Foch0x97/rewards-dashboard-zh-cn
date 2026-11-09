import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,copyFileSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync,spawnSync} from 'node:child_process';

const anchor = '    <script type="module" src="/app.js"></script>';
function sandbox(t, html) {
  const dir = mkdtempSync(path.join(tmpdir(),'rewards-locale-'));
  t.after(()=>rmSync(dir,{recursive:true,force:true}));
  mkdirSync(path.join(dir,'scripts'));
  mkdirSync(path.join(dir,'rewards-dashboard/public'),{recursive:true});
  copyFileSync(new URL('../scripts/install-locale.mjs',import.meta.url),path.join(dir,'scripts/install-locale.mjs'));
  const file=path.join(dir,'rewards-dashboard/public/index.html');
  writeFileSync(file,html);
  return {dir,file,run:()=>execFileSync(process.execPath,['scripts/install-locale.mjs'],{cwd:dir,encoding:'utf8'})};
}

test('上游入口仍兼容时能恢复语言包，重复执行不重复插入',t=>{
  const s=sandbox(t,`<body>\n${anchor}\n</body>`);
  s.run(); const once=readFileSync(s.file,'utf8'); s.run();
  assert.equal(readFileSync(s.file,'utf8'),once);
  assert.equal(once.split('/locales/bootstrap.js').length,2);
  assert.ok(once.indexOf('/locales/bootstrap.js')<once.indexOf('/app.js'));
});

test('上游改了入口结构时停止，不写入猜测的入口',t=>{
  const original='<script src="/new-entry.js"></script>';
  const s=sandbox(t,original);
  assert.throws(s.run);
  assert.equal(readFileSync(s.file,'utf8'),original);
});

test('上游普通新增可合并；入口冲突可中止且原分支提交不变',t=>{
  const s=sandbox(t,`<body>\n${anchor}\n</body>`);
  const git=(...args)=>execFileSync('git',args,{cwd:s.dir,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
  git('init','-b','main'); git('config','user.name','Local test'); git('config','user.email','test@example.invalid');
  git('add','.'); git('commit','-m','base'); git('branch','upstream');
  s.run(); git('add','.'); git('commit','-m','Chinese entry');
  git('switch','upstream'); writeFileSync(path.join(s.dir,'upstream-feature.txt'),'new feature');
  git('add','.'); git('commit','-m','upstream feature'); git('switch','main');
  git('merge','--no-commit','--no-ff','upstream'); s.run(); git('commit','-m','verified merge');
  assert.ok(readFileSync(s.file,'utf8').includes('/locales/bootstrap.js'));
  const saved=git('rev-parse','HEAD');
  git('switch','upstream'); writeFileSync(s.file,'<body>\n<script src="/new-entry.js"></script>\n</body>');
  git('add','.'); git('commit','-m','upstream rewrites entry'); git('switch','main');
  const merge=spawnSync('git',['merge','--no-commit','--no-ff','upstream'],{cwd:s.dir,encoding:'utf8'});
  assert.notEqual(merge.status,0);
  git('merge','--abort'); assert.equal(git('rev-parse','HEAD'),saved);
  assert.ok(readFileSync(s.file,'utf8').includes('/locales/bootstrap.js'));
});
