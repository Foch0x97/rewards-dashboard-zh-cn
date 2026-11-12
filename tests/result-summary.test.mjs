import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {DatabaseSync} from 'node:sqlite';
const require=createRequire(import.meta.url);
const {summary,splitNotificationText}=require('../rewards-dashboard/lib/resultSummary.js');
const {ActivityStore}=require('../rewards-dashboard/lib/activityStore.js');
const run={startTs:'2026-11-12T01:00:00Z',endTs:'2026-11-12T02:00:00Z',status:'done',outcome:'partial',totalGained:3};
const completion={completed:[{activity:'search',platform:'desktop',pointsGained:3,pointsKnown:true},{activity:'daily-set',title:'既有任务',reason:'offer-already-complete',pointsGained:0}],incomplete:[{activity:'daily-check-in',reason:'offer-progress-unchanged',pointsKnown:false},{activity:'search',platform:'desktop',reason:'activity-error'}],unavailable:[{activity:'mobile-search-quota',reason:'quota-unavailable'}],notApplicable:[{activity:'doEnsureStreakProtection',reason:'worker-disabled'}]};
const details=[{email:'example@example.invalid',startedAt:run.startTs,endedAt:run.endTs,account:{status:'partial',collected:3,currentBalance:9102,durationSeconds:90,completion}}];
test('逐账号列出本轮完成、之前完成、问题与跳过，保留未知积分含义',()=>{
 const body=summary(run,[],'Microsoft Rewards','zh-CN',details);
 for(const text of ['exa***ple@example.invalid','部分完成','本次 +3','余额 9102','耗时 1.5','电脑端·搜索任务（+3分）','之前已完成／领取','既有任务','提交后进度未变化','无法读取额度','连续签到保护','未启用此任务'])assert.ok(body.includes(text),text);
 assert.equal((body.match(/电脑端·搜索任务/g)||[]).length,1);
 const unknown=structuredClone(details);unknown[0].account.pointsKnown=false;assert.match(summary(run,[],'Test','zh-CN',unknown),/本次 未知/);
 const zero=structuredClone(details);zero[0].account.collected=0;assert.match(summary(run,[],'Test','zh-CN',zero),/本次 \+0/);
});
test('不把其他轮次结果、原始错误和每日合并表当作本次结果',()=>{
 const other=structuredClone(details);other[0].startedAt='2026-11-12T00:00:00Z';other[0].account.completion.completed[0].title='不应出现';
 assert.ok(!summary(run,[],'Test','zh-CN',other).includes('不应出现'));
 const body=summary(run,[{email:'sample@example.invalid',lastEndAt:run.endTs,lastOutcome:'completed',lastGained:0,lastError:'private-token'}]);
 assert.match(body,/未返回本轮任务明细/);assert.ok(!body.includes('private-token'));
 const omitted=structuredClone(details);omitted[0].account.completion.omitted=2;assert.match(summary(run,[],'Test','zh-CN',omitted),/省略了 2 条/);
 const en=summary(run,[],'Test','en',details.map(e=>({...e,account:{...e.account,completion:{...e.account.completion,completed:[]}}})));
 assert.ok(!/[\u4e00-\u9fff]/.test(en));
});
test('全部任务内容分条而非截断，每条留出标题与渠道关键词空间',()=>{
 const text=Array.from({length:200},(_,i)=>`任务 ${i}：本次完成，获得积分。`).join('\n');
 const chunks=splitNotificationText(text);assert.ok(chunks.length>1);assert.equal(chunks.join('\n'),text);
 for(const chunk of chunks)assert.ok(Buffer.byteLength(chunk)<=1850);
 assert.ok(splitNotificationText('中'.repeat(1500)).every(c=>Buffer.byteLength(c)<=1850));
});
test('SQLite通知快照只提取对应运行，不混入同日其他轮次',()=>{
 const db=new DatabaseSync(':memory:');try{
  const activity=new ActivityStore(db),insert=db.prepare('INSERT INTO run_account_snapshots (run_id,email,ended_at,snapshot) VALUES (?,?,?,?)');
  insert.run('this','sample@example.invalid',run.endTs,JSON.stringify(details[0]));
  insert.run('next','sample@example.invalid','2026-11-12T03:00:00Z',JSON.stringify({...details[0],startedAt:'2026-11-12T02:30:00Z',endedAt:'2026-11-12T03:00:00Z'}));
  assert.equal(activity.notificationAccounts(run).length,1);assert.equal(activity.notificationAccounts(run)[0].startedAt,run.startTs);
 }finally{db.close();}
});
