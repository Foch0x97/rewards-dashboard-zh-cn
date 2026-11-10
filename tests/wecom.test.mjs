import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createRequire} from 'node:module';
const {WeCom,validateWebhook,summary} = createRequire(import.meta.url)('../rewards-dashboard/lib/wecom.js');
const hook='https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=test-only-123456';
function fixture(t,fetchImpl=async()=>({ok:true,status:200,json:async()=>({errcode:0})})) {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'rewards-wecom-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
  let now=100000; const w=new WeCom({dir,fetchImpl,now:()=>now});
  return {w,dir,tick:n=>{now=n;},run:{id:1,status:'done',outcome:'partial',startTs:new Date(100000).toISOString(),endTs:new Date(101000).toISOString(),totalAccounts:2,accountsProcessed:2,totalGained:null}};
}
test('Webhook 仅允许官方 HTTPS 接口，拒绝跳转地址与额外参数',()=>{
  assert.equal(validateWebhook(hook),hook);
  for(const v of ['http://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=12345678',hook+'&url=x',hook+'&key=abcdefgh',hook.replace('qyapi.weixin.qq.com','localhost'),hook.replace('webhook/send','message/send')])assert.throws(()=>validateWebhook(v));
});
test('配置持久化、对外隐藏地址、留空保留及清除',t=>{
  const {w,dir}=fixture(t);w.configure({enabled:true,webhook:hook});
  assert.equal(JSON.stringify(w.publicConfig()).includes('test-only'),false);
  w.configure({enabled:true,webhook:''});assert.equal(w.state.webhook,hook);
  assert.equal(new WeCom({dir}).state.webhook,hook);
  w.configure({enabled:false,clear:true});assert.equal(w.state.webhook,'');
});
test('本轮结束后仅发一次，跳过历史、运行中与启用前记录',async t=>{
  const sent=[];const {w,tick,run}=fixture(t,async(u,o)=>{sent.push(JSON.parse(o.body));return{ok:true,status:200,json:async()=>({errcode:0})};});
  w.configure({enabled:true,webhook:hook});tick(110000);
  await w.scan([{...run,id:3,endTs:new Date(99000).toISOString()},{...run,id:4,status:'running'},run],[]);
  await w.scan([run],[]);assert.equal(sent.length,1);assert.match(sent[0].text.content,/部分任务未完成/);assert.match(sent[0].text.content,/未确认/);
  w.configure({enabled:false});tick(200000);w.configure({enabled:true});await w.scan([{...run,id:5}],[]);assert.equal(sent.length,1);
});
test('企业微信错误码不能当作成功，不自动重发刷屏，错误不泄露 key',async t=>{
  let calls=0;const {w,tick,run}=fixture(t,async()=>{calls++;return{ok:true,status:200,json:async()=>({errcode:93000,errmsg:hook})};});
  w.configure({enabled:true,webhook:hook});tick(110000);await w.scan([run],[]);await w.scan([run],[]);
  assert.equal(calls,1);assert.equal(w.publicConfig().lastDelivery.ok,false);assert.equal(JSON.stringify(w.publicConfig()).includes(hook),false);
});
test('测试消息清楚区分执行结果；消息有字节上限且不发送原始错误',async t=>{
  const sent=[];const {w,run}=fixture(t,async(u,o)=>{sent.push(o.body);return{ok:true,status:200,json:async()=>({errcode:0})};});
  w.configure({enabled:false,webhook:hook});await w.test();assert.match(sent[0],/不是任务执行结果/);
  const accounts=Array.from({length:100},()=>({email:'demo@example.invalid',lastEndAt:run.endTs,lastOutcome:'failed',lastError:'secret-token'}));
  const text=summary(run,accounts);assert.ok(Buffer.byteLength(text)<2000);assert.ok(!text.includes('secret-token'));
});
test('重启后不补发历史；网络错误不泄露 Webhook',async t=>{
  const {w,dir,tick,run}=fixture(t,async()=>{throw Error(hook);});
  w.configure({enabled:true,webhook:hook});tick(110000);await w.scan([run],[]);
  assert.ok(!w.publicConfig().lastDelivery.error.includes('test-only'));
  let sent=0;const restarted=new WeCom({dir,now:()=>200000,fetchImpl:async()=>{sent++;return{ok:true,status:200,json:async()=>({errcode:0})};}});
  await restarted.scan([run,{...run,id:2}],[]);assert.equal(sent,0);
});
