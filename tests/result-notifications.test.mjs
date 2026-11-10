import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {resultSettingsHtml,resultChannels} from '../rewards-dashboard/public/views/resultNotificationSettings.js';
import {translate} from '../rewards-dashboard/public/locales/zh-CN.js';
const {ResultNotifications,validateHook,requestFor,summary}=createRequire(import.meta.url)('../rewards-dashboard/lib/resultNotifications.js');
const wecom='https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=test-only-123456';
const ding='https://oapi.dingtalk.com/robot/send?access_token=test-only-123456';
const credentials={wecom:{webhook:wecom},dingtalk:{webhook:ding,secret:'SECtestonly123456',keyword:'Rewards'},telegram:{botToken:'123456:test-only-123456',chatId:'-100123456'},serverchan:{sendKey:'SCTtest-only-123456'}};
function fixture(t,fetchImpl=async u=>({ok:true,status:200,json:async()=>u.includes('telegram')?{ok:true}:u.includes('ftqq')?{code:0}:{errcode:0}})){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'rewards-notify-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
 let now=100000;const n=new ResultNotifications({dir,fetchImpl,now:()=>now});
 return{n,dir,tick:value=>{now=value;},run:{id:1,status:'done',outcome:'partial',startTs:new Date(100000).toISOString(),endTs:new Date(101000).toISOString(),totalAccounts:2,accountsProcessed:2,totalGained:null}};
}
const patch=(ids=Object.keys(credentials),language='zh-CN')=>({language,channels:Object.fromEntries(ids.map(id=>[id,{enabled:true,fields:credentials[id]}]))});
test('四个通知渠道使用官方接口，钉钉签名、Telegram目标和Server酱表单正确',()=>{
 const text='Microsoft Rewards | Run results\nStatus: Partial';
 const w=requestFor('wecom',credentials.wecom,text);assert.equal(w.url,wecom);assert.equal(JSON.parse(w.options.body).text.content,text);
 const d=requestFor('dingtalk',credentials.dingtalk,text,1700000000000);const u=new URL(d.url);
 assert.equal(u.searchParams.get('timestamp'),'1700000000000');
 assert.equal(u.searchParams.get('sign'),crypto.createHmac('sha256','SECtestonly123456').update('1700000000000\nSECtestonly123456').digest('base64'));
 assert.equal(JSON.parse(d.options.body).text.content,'Rewards\n'+text);
 const tg=requestFor('telegram',credentials.telegram,text);assert.equal(tg.url,'https://api.telegram.org/bot123456:test-only-123456/sendMessage');assert.equal(JSON.parse(tg.options.body).chat_id,'-100123456');
 const s=requestFor('serverchan',credentials.serverchan,text);assert.equal(s.url,'https://sctapi.ftqq.com/SCTtest-only-123456.send');assert.equal(new URLSearchParams(s.options.body).get('desp'),text);assert.ok(Array.from(new URLSearchParams(s.options.body).get('title')).length<=32);
 for(const r of [w,d,tg,s])assert.equal(r.options.redirect,'error');
});
test('拒绝非官方Webhook、重复参数、无效令牌，批量保存失败不留下半套配置',t=>{
 for(const bad of [wecom.replace('https:','http:'),wecom.replace('qyapi.weixin.qq.com','localhost'),wecom+'&url=x',wecom+'&key=12345678',ding+'&sign=x'])assert.throws(()=>validateHook(bad,bad.includes('dingtalk')?'dingtalk':'wecom'));
 const {n}=fixture(t);assert.throws(()=>n.configure({...patch(),channels:{...patch().channels,telegram:{enabled:true,fields:{botToken:'bad',chatId:'x'}}}}));assert.equal(n.publicConfig().channels.wecom.enabled,false);
 assert.throws(()=>n.configure({language:'en',channels:{serverchan:{enabled:true,fields:{sendKey:'sctp-unavailable'}}}}));
 assert.throws(()=>n.configure({language:'en',channels:{unknown:{enabled:true}}}));
});
test('保存后隐藏所有凭据，空字段保留，按渠道清除不影响其他渠道',t=>{
 const {n,dir}=fixture(t);n.configure(patch());const json=JSON.stringify(n.publicConfig());assert.ok(!json.includes('test-only'));assert.ok(!json.includes('-100123456'));
 n.configure({language:'en',channels:{telegram:{enabled:true,fields:{botToken:'',chatId:''}}}});assert.equal(n.state.channels.telegram.fields.botToken,credentials.telegram.botToken);
 const restored=new ResultNotifications({dir});assert.equal(restored.state.language,'en');assert.equal(restored.publicConfig().channels.telegram.configured,true);
 n.configure({language:'en',channels:{telegram:{enabled:true,clear:true}}});assert.equal(n.state.channels.telegram.enabled,false);assert.deepEqual(n.state.channels.telegram.fields,{});assert.equal(n.state.channels.wecom.enabled,true);
});
test('旧企微配置仅迁移一次，保留启用状态、去重记录，不修改原文件',t=>{
 const {dir}=fixture(t);const old={enabled:true,webhook:wecom,enabledSince:90000,claimed:[12],lastDelivery:{ok:false,error:'旧的中文错误',at:'test'}};
 fs.writeFileSync(path.join(dir,'wecom.json'),JSON.stringify(old));const n=new ResultNotifications({dir,now:()=>100000});
 assert.equal(n.state.channels.wecom.fields.webhook,wecom);assert.deepEqual(n.state.channels.wecom.claimed,[12]);assert.equal(n.publicConfig().channels.wecom.enabled,true);
 assert.equal(JSON.parse(fs.readFileSync(path.join(dir,'wecom.json'),'utf8')).lastDelivery.error,'旧的中文错误');
 assert.ok(!/[\u4e00-\u9fff]/.test(n.publicConfig().channels.wecom.lastDelivery.error));
 n.configure({language:'en',channels:{wecom:{enabled:false,clear:true}}});assert.equal(new ResultNotifications({dir}).state.channels.wecom.enabled,false);
});
test('每轮每渠道仅发一条，一个渠道失败不妨碍其他渠道，不自动重发',async t=>{
 const sent=[];const {n,tick,run}=fixture(t,async(u,o)=>{sent.push({u,body:o.body});return{ok:true,status:200,json:async()=>u.includes('dingtalk')?{errcode:310000}:u.includes('telegram')?{ok:true}:u.includes('ftqq')?{code:0}:{errcode:0}};});
 n.configure(patch());tick(110000);await n.scan([run],[]);await n.scan([run],[]);assert.equal(sent.length,4);
 for(const id of ['wecom','telegram','serverchan'])assert.equal(n.publicConfig().channels[id].lastDelivery.ok,true);
 assert.equal(n.publicConfig().channels.dingtalk.lastDelivery.ok,false);assert.ok(!JSON.stringify(n.publicConfig()).includes('test-only'));
});
test('跳过历史、仍在运行和启用前记录，重启不补发，关掉的渠道不发送',async t=>{
 let sent=0;const {n,dir,tick,run}=fixture(t,async()=>{sent++;return{ok:true,status:200,json:async()=>({errcode:0})};});
 n.configure(patch(['wecom']));tick(110000);await n.scan([{...run,id:3,endTs:new Date(99000).toISOString()},{...run,id:4,status:'running'},run],[]);assert.equal(sent,1);
 const restart=new ResultNotifications({dir,now:()=>200000,fetchImpl:async()=>{sent++;throw Error('must not call');}});await restart.scan([run,{...run,id:6}],[]);assert.equal(sent,1);
 n.configure({language:'en',channels:{wecom:{enabled:false}}});tick(200000);n.configure({language:'en',channels:{wecom:{enabled:true}}});await n.scan([{...run,id:7}],[]);assert.equal(sent,1);
});
test('HTTP成功但服务商拒绝或缺少成功码时不能记为成功，错误不泄露凭据',async t=>{
 for(const id of Object.keys(credentials)){
  const {n}=fixture(t,async()=>({ok:true,status:200,json:async()=>({ok:false,errcode:400,code:400,error_code:400,errmsg:wecom})}));n.configure(patch([id]));await assert.rejects(()=>n.test(id),/Notification rejected/);
 }
 const {n}=fixture(t,async()=>{throw Error(wecom);});n.configure(patch(['wecom']));await assert.rejects(()=>n.test('wecom'),e=>!e.message.includes('test-only'));
 await assert.rejects(()=>n.test('unknown'),/Unknown result/);
});
test('中英文汇总和测试消息都按通知语言生成，不包含原始错误或凭据',async t=>{
 const bodies=[];const {n,run}=fixture(t,async(u,o)=>{bodies.push(JSON.parse(o.body).text.content);return{ok:true,status:200,json:async()=>({errcode:0})};});
 n.configure(patch(['wecom'],'en'));await n.test('wecom');assert.match(bodies[0],/not a task execution result/);assert.ok(!/[\u4e00-\u9fff]/.test(bodies[0]));
 const accounts=Array.from({length:100},()=>({email:'demo@example.invalid',lastEndAt:run.endTs,lastOutcome:'failed',lastError:'private-token'}));
 for(const lang of ['en','zh-CN']){const body=summary(run,accounts,'Microsoft Rewards',lang);assert.ok(Buffer.byteLength(body)<2000);assert.ok(!body.includes('private-token'));if(lang==='en'){assert.ok(!/[\u4e00-\u9fff]/.test(body));assert.match(body,/Some activities incomplete/);}else assert.match(body,/部分任务未完成/);}
});
test('结果通知表单采用英文原文，全部已知渠道与帮助文字都有中文翻译',()=>{
 const config={language:'en',channels:Object.fromEntries(resultChannels.map(c=>[c.id,{enabled:true,configured:false,savedFields:{}}]))};
 const html=resultSettingsHtml(config);assert.ok(html.includes('Execution result notifications'));assert.ok(!/[\u4e00-\u9fff]/.test(html));
 for(const c of resultChannels){assert.ok(html.includes(`data-result-test="${c.id}"`));for(const f of c.fields){assert.notEqual(translate(f.label),f.label);assert.notEqual(translate(f.hint),f.hint);}}
 const textNodes=html.matchAll(/>([^<>]+)</g);
 for(const [,raw] of textNodes){const text=raw.trim();if(!text||['Telegram','English'].includes(text)||/https?:/.test(text))continue;assert.notEqual(translate(text),text,`missing Chinese: ${text}`);}
 assert.notEqual(translate('Notification rejected (HTTP 200, code 400).'),'Notification rejected (HTTP 200, code 400).');
});
