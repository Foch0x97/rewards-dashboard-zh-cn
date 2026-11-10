import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {translate as t} from '../rewards-dashboard/public/locales/zh-CN.js';
import * as U from '../rewards-dashboard/public/util.js';
import {punchcardText, renderActivity} from '../rewards-dashboard/public/views/activityTable.js';
import {lineChart,barChart,buildAccumBarHtml,buildHeatmapHtml} from '../rewards-dashboard/public/charts.js';
const require=createRequire(import.meta.url);
const {GROUPS}=require('../rewards-dashboard/lib/activityModel.js');
const {describeCron}=require('../rewards-dashboard/lib/cron.js');

const cases=[
 ['Microsoft Rewards Dashboard:1.0.0','Microsoft Rewards 管理面板：1.0.0'],
 ['pid 123','进程号 123'],['last exit: code 1 / SIGTERM','上次退出：退出码 1，信号 SIGTERM'],
 ['Removed demo@example.invalid from the dashboard.','已移除 demo@example.invalid 在面板中的记录。'],
 ['Streak protection on','连续签到保护已开启'],
 ['Streak protection is on; 3 protection days left','连续签到保护已开启；剩余 3 天签到保护'],
 ['https://proxy.invalid:8080 (authenticated)','https://proxy.invalid:8080（已配置身份验证）'],
 ['Script reported: partial','脚本上报：部分任务未完成'],
 ['+60 pts · 2 ok · 1 stopped · 1 failed','+60 分 · 2 个成功 · 1 个已停止 · 1 个失败'],
 ['1,234 lines buffered','已缓存 1,234 条日志'],['Buffer filled to 1,234 lines.','已加载，共缓存 1,234 条日志。'],
 ['Saved: 3 fields. Applies on the next run.','已保存：3 个配置项。下次运行生效。'],
 ['Saved: recommended webhook filter. Applies on the next run.','已保存：推荐的通知筛选规则。下次运行生效。'],
 ['Saved: workers.doDailySet → true. Applies on the next run.','已保存：workers.doDailySet → true。下次运行生效。'],
 ['Saved: webhook.keywords → 2 items. Applies on the next run.','已保存：webhook.keywords → 2 项。下次运行生效。'],
 ['— 3 fields added in a recent script update:','— 脚本更新新增了 3 个配置项：'],
 ['Synced 3 fields. Applies on the next run.','已补齐 3 个配置项，下次运行生效。'],
 ['Remove error','移除 error'],['2 captures in /app/diagnostics','2 份故障现场，保存在 /app/diagnostics'],
 ['Screenshot captured when error-20261110 failed','error-20261110 出错时保存的截图'],
 ['mobile · desktop · updated 3m ago','手机端 · 电脑端 · 更新于3 分钟前'],
 ['Sessions cleared for demo@example.invalid.','已清除 demo@example.invalid 的登录会话。'],
 ['6/8 complete','6/8，已完成'],['2 locked','2 项尚未解锁'],['+20 of 50 pts','已获 +20 分，共 50 分'],
 ['Bing: day 3 of 7','Bing：第 3 天，共 7 天'],
 ['Gained, but the script did not tie these to an activity (for example punch card steps)','已获取积分，但脚本未注明对应活动（例如任务卡中的步骤）。'],
 ['Gained, but the script did not tie these to an activity; about 10 lines up with the unreported activities above (balance change)','已获取积分，但脚本未注明对应活动；根据余额变化，其中约 10 分可能来自上述未上报积分的活动。'],
 ['The script reported: service rejected account access. Last attempt 3m ago.','脚本上报：服务拒绝了账号访问。上次尝试：3 分钟前。'],
 ['11月10日 (latest) · +20','11月10日（最近） · +20'],
 ['Run stopped early · service rate limit','运行提前结束 · 服务请求触发限流'],
 ['6/6 reports','已上报 6/6 次'],['On · ? days left','开启 · 剩余天数未知'],
 ['Running… 2h 15m ago','运行中，2 小时 15 分钟前开始'],
 ['11月10日: +20 points','11月10日：+20 分'],
 ['11月10日\n+20 pts\nTotal 1000','11月10日\n+20 分\n总积分 1000'],
 ['Week of 11月10日: +80 pts','11月10日 所在周：+80 分'],
 ['Gap: 2 missed days','缺少 2 天的运行记录'],
 ['11月10日 (today): +20 pts (total: 1000)','11月10日（今天）：+20 分（总积分 1000）'],
 ['started after dashboard restart','面板重启后已启动任务'],
 ['missed run skipped (outside 60-minute grace period)','已跳过错过的任务：超过 60 分钟补跑时限'],
 ['Control API request timed out','控制接口请求超时'],
 ['Run stalled before this account finished','账号尚未执行完毕，本轮运行已停滞'],
 ['11月10日 15:00 (3m ago)','11月10日 15:00（3 分钟前）'],
 ['Daily at 9:00 AM + Every 6 hours','每天 09:00；每 6 小时'],
 ['Reason: Control API request timed out. Retrying automatically.','原因：控制接口请求超时。正在自动重试。'],
];
for(const [source,expected] of cases)test('完整句式：'+source,()=>assert.equal(t(source),expected));

test('所有后端内置活动分类和 v4 标签均有中文',()=>{
 for(const {label} of Object.values(GROUPS)) assert.notEqual(t(label),label,label);
 const source=readFileSync(new URL('../rewards-dashboard/lib/activityModel.js',import.meta.url),'utf8');
 const section=source.slice(source.indexOf('const V4_SOURCES'),source.indexOf('const V4_SKIP_REASONS'));
 for(const m of section.matchAll(/label: "([^"]+)"/g))assert.notEqual(t(m[1]),m[1]);
});
test('后端 Cron 描述覆盖单次、多个时刻、分钟、工作日和周末',()=>{
 for(const [expr,expected] of [['0 9 * * *','每天 09:00'],['0 9,21 * * *','每天 09:00、21:00'],['*/15 * * * *','每 15 分钟'],['0 8 * * 1-5','周一至周五 08:00'],['0 8 * * 0,6','周六、周日 08:00'],['0 9,15,21 * * 1,3','周一, 周三 09:00, 15:00、21:00']])assert.equal(t(describeCron(expr)),expected);
 assert.equal(t(describeCron('0 9 1 * *')),'0 9 1 * *');
});
test('清除会话确认弹窗完整翻译，同时保留邮箱',()=>{
 const msg='Clear stored sessions for demo@example.invalid?\n\nThis logs the account out immediately — it will need to sign back in (and re-approve 2FA if used) on its next run.';
 assert.match(t(msg),/^确定清除 demo@example.invalid 的登录会话？\n\n/);assert.ok(!t(msg).includes('This logs'));
});
test('变量含美元替换符时保持原样，不泄漏替换匹配内容',()=>{
 assert.equal(t('Removed $&@example.invalid from the dashboard.'),'已移除 $&@example.invalid 在面板中的记录。');
 for(const s of ['constructor','__proto__','ACCOUNT_2_EMAIL','http://server.invalid','workers.doDailySet','HTTP 502: upstream unavailable'])assert.equal(t(s),s);
});
test('多个账号同时等待登录确认时，整段提示均为中文',()=>{
 const message='Login approval needed for first@example.invalid: select number 12. Expires in 60 seconds. Login approval needed for second@example.invalid: select number 34. Expires in 60 seconds.';
 const result=t(message);assert.ok(!result.includes('Login approval'));assert.match(result,/first@example.invalid.*12/);assert.match(result,/second@example.invalid.*34/);
});
test('真实任务卡生成结果支持多卡、积分上限和日期',()=>{
 globalThis.document={documentElement:{lang:'zh-CN'}};
 try {
  const html=punchcardText([{title:'Bing',done:8,total:8,points:20,pointsAvailable:50},{title:'Xbox',done:2,total:5,locked:1,asOf:'2026-11-10'}]);
  const result=t(html);
  assert.match(result,/Bing：8\/8，已完成/);assert.match(result,/Xbox：2\/5/);assert.ok(!/locked|complete|as of| of | pts/.test(result),result);
 }finally{delete globalThis.document;}
});
test('中文日期及日志时间不受操作系统英文语言影响，英文模式保留原行为',()=>{
 globalThis.document={documentElement:{lang:'zh-CN'}};U.setTimeZone('Asia/Shanghai');
 try {
  assert.match(U.fmtDateTime('2026-11-10T07:20:00Z'),/11月10日/);
  assert.match(U.fmtTime('2026-11-10T07:20:00Z'),/15:20:00/);
  assert.ok(!/[A-Za-z]/.test(U.fmtTime('2026-11-10T07:20:00Z')));
  assert.match(U.localDateLabel('2026-11-10',{month:'short',day:'numeric'}),/11月/);
  globalThis.document.documentElement.lang='en';assert.match(U.fmtTime('2026-11-10T07:20:00Z'),/Nov.*3:20:00 pm/);
 }finally{delete globalThis.document;U.setTimeZone(null);}
});

function decode(s){return s.replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');}
function texts(html){return [...html.matchAll(/>([^<>]+)</g)].map(m=>decode(m[1])).concat([...html.matchAll(/(?:title|aria-label|alt)="([^"]+)"/g)].map(m=>decode(m[1]))).map(s=>s.trim()).filter(Boolean);}
test('从真实图表输出提取悬浮说明，逐项确认无英文界面残留',()=>{
 globalThis.document={documentElement:{lang:'zh-CN'}};
 try {
  const box={clientWidth:640,innerHTML:''};const date=new Date();const day=date.toISOString().slice(0,10);
  lineChart(box,[{key:day,value:1000}]);let all=texts(box.innerHTML);
  barChart(box,[{key:day,value:20}]);all.push(...texts(box.innerHTML));
  const items=[{dayKey:day,weekKey:day,gained:20,lastTotal:1000}];
  all.push(...texts(buildHeatmapHtml(items)),...texts(buildAccumBarHtml(items,20)));
  for(const text of all){const result=t(text);assert.ok(!/[A-Za-z]{2}/.test(result),`${text} => ${result}`);}
 }finally{delete globalThis.document;}
});
test('从真实活动详情输出核对静态名称、日期、任务卡与未归属积分说明',()=>{
 globalThis.document={documentElement:{lang:'zh-CN'}};
 try {
  const day={day:'2026-11-10',schema:'v5',verdict:{state:'attention',attention:1},groups:[],
   points:{gained:20,attributed:0,unattributed:20,estimatedUnattributed:10,reconciled:true,balanceStart:100,balanceEnd:120},
   punchcards:[{title:'原始任务标题',done:2,total:5,locked:3,points:10,pointsAvailable:30,asOf:'2026-11-10'}],
   streaks:[{label:'Bing',partner:'bing',completedDays:2,totalDays:7,currentDay:2,dailyPoints:[5,5,5,5,5,5,10]}],
   streakProtection:{enabled:true,remainingDays:null,streakCounter:2},level:2};
  const html=renderActivity([day],{email:'demo@example.invalid',expanded:new Set()});
  for(const text of texts(html)){const result=t(text);assert.ok(!/\b(?:locked|complete|as of|Gained|activity|days|day|latest|points|progress)\b/.test(result),`${text} => ${result}`);}
 }finally{delete globalThis.document;}
});
test('PWA 中英文清单、图片替代文字处理及技术标识保护均有入口',()=>{
 const base=new URL('../rewards-dashboard/public/',import.meta.url);
 const zh=JSON.parse(readFileSync(new URL('manifest.zh-CN.json',base),'utf8'));assert.equal(zh.lang,'zh-CN');assert.match(zh.name,/管理面板/);
 const en=JSON.parse(readFileSync(new URL('manifest.json',base),'utf8'));assert.equal(en.name,'Microsoft Rewards Dashboard');
 const boot=readFileSync(new URL('locales/bootstrap.js',base),'utf8');assert.match(boot,/'alt'/);assert.match(boot,/manifest.zh-CN.json/);
});
test('内置的登录、配置和补跑错误不再漏译；未知外部报错保留原样',()=>{
 const source=readFileSync(new URL('../rewards-dashboard/lib/scheduler.js',import.meta.url),'utf8');
 for(const match of source.matchAll(/new Error\(\s*("(?:[^"\\]|\\.)*"|'[^']*')/g)){
  const msg=Function('return '+match[1])();assert.notEqual(t(msg),msg,msg);
 }
 for(const msg of ['Control API rejected our token - CONTROL_API_TOKEN must match the API\'s API_TOKEN.',
  'Missing account email','Invalid diagnostics path','Request body too large','Invalid JSON body',
  'Config writes are disabled on the control API. Set','in the bot’s environment and restart it.',
  'The control API refused to reveal secrets. Set','(and an',') on it to enable this.',
  'That change would write','over a real secret. Enable','on the control API and tick “Reveal secrets” first.'])assert.notEqual(t(msg),msg,msg);
 const raw='SSL_ERROR: unexpected EOF from custom upstream.invalid';assert.equal(t(raw),raw);
});
