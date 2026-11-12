import test from 'node:test';
import assert from 'node:assert/strict';
import {logCatalog,extraLogCatalog,sourceRevision} from '../rewards-dashboard/public/locales/log-catalog-zh-CN.js';
import {chineseLog,chineseLogTag} from '../rewards-dashboard/public/locales/chinese-log.js';
import {logTags} from '../rewards-dashboard/public/locales/log-vocabulary-zh-CN.js';
import {renderLogEntry,exportLogText} from '../rewards-dashboard/public/logDisplay.js';
import {createRequire} from 'node:module';
const {entryToDockerLine}=createRequire(import.meta.url)('../rewards-dashboard/lib/apiClient.js');

test('逐条核对固定版本源码的全部1018种日志、错误与拼接文本及75种补充格式',()=>{
 assert.equal(logCatalog.length,1018);assert.equal(extraLogCatalog.length,75);assert.match(sourceRevision,/^[a-f0-9]{40}$/);
 for(const row of [...logCatalog,...extraLogCatalog]){
  const original=row.en.replace(/\{(\d+)\}/g,'⟦$1⟧'),expected=row.zh.replace(/\{(\d+)\}/g,'⟦$1⟧');
  const result=chineseLog(original);
  assert.equal(result.text,expected,`${row.source}\n${row.en}`);
  assert.ok(!/暂无中文|未收录的诊断|请切换英文/.test(result.text),row.source);
  for(const [,slot] of row.en.matchAll(/\{(\d+)\}/g))assert.ok(result.text.includes(`⟦${slot}⟧`),row.en);
 }
});

test('已知阶段标签逐个翻译，不把具体任务标签全部改成运行记录',()=>{
 assert.ok(Object.keys(logTags).length>=120);
 for(const [tag,label] of Object.entries(logTags))assert.equal(chineseLogTag(tag),label);
 assert.notEqual(chineseLogTag('SEARCH-DETAIL'),chineseLogTag('SEARCH-API-REPORT'));
});

test('真实格式包含原因、嵌套诊断、积分和任务计数时，中文必须保留这些信息',()=>{
 const cases=[
 ['Finished account: demo@example.invalid | pointsGained=51 | previousBalance=19020 | currentBalance=19071 | durationSeconds=2156.2 | status=partial | reason="offer progress unchanged" | activities: 2 completed, 7 incomplete, 2 unavailable, 0 not applicable',['demo@example.invalid','51','19020','19071','2156.2','部分任务未完成','进度','7']],
 ['User data source unavailable | via=node-http | path=/api/getuserinfo | attempt=1/4 | elapsedMs=9250 | remainingMs=27750 | message=Request deadline exceeded',['脚本网络请求','/api/getuserinfo','1/4','9250','27750','截止时间']],
 ['Browser read verified | read=2 | progress=3->6 | pointsGained=3',['浏览器阅读已核实','2','3','6']],
 ['Edge browsing progress | reportsCompleted=4/12 | reportsRemaining=8 | scheduledMinutesCovered=10/30 | nextReportInSeconds=125 | accepted=4 | duplicates=0 | failed=1 | elapsedMinutes=11 | estimatedRemainingMinutes=20',['后台浏览奖励进度','4/12','8','10/30','125','失败：1','20']],
 ['Mobile search quota | completion not confirmed | points earned: unverified | quota unavailable',['手机搜索额度','尚未确认完成','尚未确认','无法读取']],
 ['Visual Search | unavailable (skipped) | points earned: 0 | Not offered in the latest account data; the service did not provide an eligibility reason',['视觉搜索','账号未提供','积分：0','未说明']],
 ['Read to Earn confirmed | reason=read-to-earn-progressed | reportsAccepted=10 | progress=0->30 | pointsGained=30',['阅读赚积分','进度已增长','10','0','30']],
  ['Searching | search=1 | query="测试搜索词" | language=zh | source=wikipedia | progressCheckEvery=4',['搜索词','测试搜索词','语言','中文','词源','维基百科','4']],
 ['Saved desktop session for demo@example.invalid | cookies=12 | origins=2',['电脑端','demo@example.invalid','12','2']],
 ['TOTP failed: page.waitForURL: Timeout 44839ms exceeded.\nCall log:\n  - waiting for navigation until "load"\n    at file:///app/run.js:12:3',['动态验证码','44839','操作跟踪','加载完成','file:///app/run.js:12:3']],
 ];
 for(const [raw,needed] of cases){
  const entry=Object.freeze({level:'warn',title:'ACTIVITY-RESULT',message:raw,raw,receivedAt:'2026-11-13T00:00:00Z'});
  const before=entryToDockerLine(entry),result=chineseLog(raw).text;
  for(const text of needed)assert.ok(result.includes(text),`${raw}\n${result}\nmissing: ${text}`);
  assert.ok(!/暂无中文|切换英文日志|未收录/.test(result));
  assert.ok(!/query=|language=|source=wikipedia|to be visible/.test(result),result);
  renderLogEntry(entry,'zh');exportLogText([entry],true);
  assert.equal(entryToDockerLine(entry),before);assert.equal(exportLogText([entry]),raw);
 }
});

test('搜索词、文章标题和诊断定位信息作为数据原样保留，结构化日志不丢字段',()=>{
 const query='Call log: Timeout progress completed | status=partial';
 const text=chineseLog(`Searching | search=1 | query="${query}" | progressCheckEvery=4`).text;
 assert.ok(text.includes(query),text);
 const input={mode:'browser',desktopSession:'Signs in first. Retains its browser for rendered Rewards tasks; closes when browser work finishes',enabledWorkers:['doDailyCheckIn','doReadToEarn'],pointClaims:'api',status:'partial',completion:{counts:{completed:2,incomplete:7}},query};
 const output=chineseLog(JSON.stringify(input)).text;
 for(const word of ['运行模式','浏览器','先登录电脑端','实际页面积分任务','每日签到','阅读赚积分','接口','部分任务未完成','已完成','未完成','7',query])assert.ok(output.includes(word),output);
});
