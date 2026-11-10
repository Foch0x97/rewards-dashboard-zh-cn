import test from 'node:test';
import assert from 'node:assert/strict';
import {translateLogMessage as tr} from '../rewards-dashboard/public/locales/log-zh-CN.js';
import {renderLogEntry,logSearchText,exportLogText,preferredLogDisplay} from '../rewards-dashboard/public/logDisplay.js';
import {RECOMMENDED_WEBHOOK_FILTER} from '../rewards-dashboard/public/views/config.js';
import {createRequire} from 'node:module';
const {entryToDockerLine}=createRequire(import.meta.url)('../rewards-dashboard/lib/apiClient.js');

test('中文默认双语，旧纯中文偏好自动升级，保留原文选择且不依赖可用的浏览器存储',()=>{
 assert.equal(preferredLogDisplay({getItem:()=>null}), 'both');
 assert.equal(preferredLogDisplay({getItem:()=> 'zh'}),'both');
 assert.equal(preferredLogDisplay({getItem:()=> 'original'}),'original');
 assert.equal(preferredLogDisplay({getItem:()=> 'both'}),'both');
 assert.equal(preferredLogDisplay({getItem:()=>{throw Error('blocked');}}),'both');
 assert.equal(preferredLogDisplay(null,false),'original');
 const html=renderLogEntry({level:'info',message:'Starting login process',raw:'[INFO] Starting login process'});
 assert.ok(html.includes('开始登录'));assert.ok(html.includes('<pre'));assert.ok(!html.includes('<details'));
});
test('双语渲染和导出不改原始日志管道，推荐通知规则可匹配v4与v5结果',()=>{
 const f=RECOMMENDED_WEBHOOK_FILTER.webhook.webhookLogFilter;
 assert.equal(f.mode,'whitelist');
 for(const message of ['Starting account: demo@example.invalid','Please approve login and select number: 42','Collected 100 points','Finished account: demo@example.invalid | status=partial','Completed account: demo@example.invalid','Completed all accounts | status=partial','Account flow failed for demo@example.invalid: ERR_LOGIN','Run interrupted']){
  const raw=`[2026-11-10T12:00:00Z] [demo@example.invalid] [INFO] MAIN [FLOW] ${message}`;
  const entry=Object.freeze({id:1,receivedAt:'2026-11-10T12:00:00Z',level:'info',message,raw});
  const before=entryToDockerLine(entry);renderLogEntry(entry);exportLogText([entry],true);
  assert.equal(entryToDockerLine(entry),before);assert.equal(entry.raw,raw);
  assert.ok(f.keywords.some(k=>raw.toLowerCase().includes(k.toLowerCase())),message);
 }
 assert.ok(f.keywords.includes('[account-error]'));
});

test('登录和二次验证提示保留确认数字及超时时间',()=>{
 assert.equal(tr('Please approve login and select number: 42'),'请在手机验证器中确认登录，并选择数字 42');
 assert.equal(tr('Still waiting... (5/60 seconds elapsed)'),'仍在等待登录确认，已等待 5/60 秒');
 assert.equal(tr('TOTP secret is required because interactive stdin is unavailable'),'当前运行方式无法接收手动输入的验证码，需要配置 TOTP 密钥');
 assert.equal(tr('No supported non-interactive sign-in method is available; email-code fallback requires interactive stdin'),'没有可用的非交互登录方式；改用邮箱验证码需要在终端手动输入');
});
test('未知错误、JSON和多行堆栈不猜译',()=>{
 for(const raw of ['HTTP 502: a new upstream error','{"status":"completed","message":"Starting login process"}','Error: failed\n    at file:///app/run.js:12:3'])assert.equal(tr(raw),raw);
 const detail='ERR_AUTH https://example.invalid/a?status=partial';
 assert.equal(tr(`Account flow failed for a@example.invalid: ${detail}`),`账号 a@example.invalid 执行失败：${detail}`);
});
test('搜索词和嵌套响应中的分隔符不作为日志字段翻译',()=>{
 const query='lastQuery="Starting login process | status=completed"';
 const payload='payload={"reason":"Searching | status=failed"}';
 const result=tr(`Searching | ${query} | ${payload} | status=partial | pointsGained=unknown`);
 assert.ok(result.startsWith('正在搜索 | '));
 assert.ok(result.includes(query));assert.ok(result.includes(payload));
 assert.ok(result.includes('partial（部分任务未完成）'));assert.ok(result.includes('unknown（未知）'));
 assert.equal(tr("account's state | status=failed"),"account's state | 状态(status)=failed（失败）");
});
test('流程结束不误写成所有任务完成，积分未确认不写成零',()=>{
 assert.equal(tr('Completed all accounts | status=partial'),'所有账号的运行流程已结束 | 状态(status)=partial（部分任务未完成）');
 assert.equal(tr('points earned: unverified'),'获取积分(points earned): unverified（尚未确认）');
 assert.ok(tr('activities: 8 completed, 6 incomplete, 2 unavailable, 3 not applicable').includes('6 incomplete（未完成）'));
});
test('中英文都能搜索，渲染不改动原始记录，默认导出保留原文',()=>{
 const entry=Object.freeze({id:1,level:'info',title:'LOGIN',message:'Starting login process',raw:'[INFO] LOGIN Starting login process'});
 assert.ok(logSearchText(entry).includes('开始登录'));assert.ok(logSearchText(entry).includes('starting login process'));
 const zh=renderLogEntry(entry,'zh');assert.ok(zh.includes('开始登录'));assert.ok(zh.includes('<details'));assert.ok(zh.includes(entry.raw));
 const original=renderLogEntry(entry,'original');assert.ok(original.includes(entry.message));assert.ok(!original.includes('<details'));
 const both=renderLogEntry(entry,'both');assert.ok(both.includes('<pre'));assert.ok(!both.includes('<details'));
 assert.equal(entry.message,'Starting login process');assert.equal(exportLogText([entry]),entry.raw);
 assert.equal(exportLogText([entry],true),entry.raw+'\n[中文说明] 开始登录');
});
test('原文和错误详情中的HTML转义，未识别日志不重复导出',()=>{
 const entry=Object.freeze({level:'error',title:'<img src=x>',message:'Fatal error: <script>alert(1)</script>',raw:'<img onerror=alert(1)>'});
 for(const mode of ['zh','original','both']){
  const html=renderLogEntry(entry,mode);assert.ok(!html.includes('<script>'));assert.ok(!html.includes('<img'));
 }
 assert.equal(exportLogText([{message:'unknown message'}],true),'unknown message');
});
