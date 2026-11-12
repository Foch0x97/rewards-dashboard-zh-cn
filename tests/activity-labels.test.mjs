import test from 'node:test';
import assert from 'node:assert/strict';
import {activityLabel} from '../rewards-dashboard/public/locales/activity-labels-zh-CN.js';
import {chineseLog} from '../rewards-dashboard/public/locales/chinese-log.js';
import {renderLogEntry,exportLogText} from '../rewards-dashboard/public/logDisplay.js';
const ids=[
 ['WW_pcparent_FY27_Duolingo3M_punchcard','多邻国推广任务卡'],
 ['WW_pcparent_RewardsApp_weekly_Exclusive_Novw2_2026_punchcard','积分应用每周专属任务卡'],
 ['ENWW_pcparent_FY27_BingMonthlyPC_Nov_punchcard','必应每月电脑端任务卡'],
];
test('实际日志的三类任务卡显示中文名称，保留原日志及编号的核对入口',()=>{
 for(const [id,label] of ids){
  assert.equal(activityLabel(id),label);
  const raw=`Quest progress | offerId=${id} | progress=4/6`;
  const entry=Object.freeze({level:'debug',title:'PUNCHCARD-PROGRESS',message:raw,raw});
  const zh=chineseLog(raw).text;assert.ok(zh.includes(label));assert.ok(!zh.includes(id));assert.ok(zh.includes('4/6'));
  const html=renderLogEntry(entry,'zh');assert.ok(html.includes(`title="原始活动标识：${id}"`));
  assert.equal(exportLogText([entry]),raw);assert.equal(entry.raw,raw);
  assert.ok(chineseLog(`系列任务进度；活动标识：${id}；进度：?/?`).text.includes(label));
  assert.equal(JSON.parse(chineseLog(JSON.stringify({offerId:id})).text)['活动标识'],label);
 }
 assert.equal(activityLabel('UNRECOGNISED_OFFER_ID'),'UNRECOGNISED_OFFER_ID');
});
test('中文日志不更改搜索词、活动标题里的编号',()=>{
 const id=ids[0][0];
 assert.ok(chineseLog(`Searching | search=1 | query="${id}" | language=zh | source=wikipedia | progressCheckEvery=4`).text.includes(id));
 assert.ok(chineseLog(`Daily set: "${id}" | completed | points earned: 10`).text.includes(id));
});
test('实际残留的连续签到、登录等待和网络错误有明确中文',()=>{
 const samples=[
 ['Bing App Streak completed today | streak=6/7',['必应应用连续签到','连续签到进度：6/7']],
 ['Bing App Streak今天已完成；streak=6/7',['必应应用连续签到今天已完成','连续签到进度：6/7']],
 ['Earnable today | Mobile: unknown | Browser: 0 | App: pending mobile sign-in | user@example.invalid | locale: zh-CN',['等待手机端登录','user@example.invalid']],
 ['今日可获积分；手机端：未知；浏览器：0；应用：等待执行 手机端 sign-in；user@example.invalid；语言地区：简体中文',['等待手机端登录']],
 ['page.goto: net::ERR_CONNECTION_CLOSED at https://www.bing.com/rewards/panelflyout?channel=bingflyout',['网络连接已关闭','net::ERR_CONNECTION_CLOSED','https://www.bing.com/rewards/panelflyout?channel=bingflyout']],
 ];
 for(const [raw,expected] of samples){const text=chineseLog(raw).text;for(const word of expected)assert.ok(text.includes(word),text);assert.ok(!/Bing App Streak|streak=|sign-in| at https/.test(text),text);}
 assert.ok(renderLogEntry({user:'API',message:'Run partial (code 0).',level:'warn'},'zh').includes('控制接口'));
 assert.ok(renderLogEntry({user:'API',message:'Run partial (code 0).',level:'warn'},'original').includes('API'));
});

test('不同月份、周次与年份复用固定名称，无需按日期更新中文名称',()=>{
 for(const month of ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']){
  assert.equal(activityLabel(`WW_pcparent_RewardsApp_weekly_Exclusive_${month}w4_2027_punchcard`),'积分应用每周专属任务卡');
  assert.equal(activityLabel(`ENWW_pcparent_FY28_BingMonthlyPC_${month}_punchcard`),'必应每月电脑端任务卡');
 }
});
