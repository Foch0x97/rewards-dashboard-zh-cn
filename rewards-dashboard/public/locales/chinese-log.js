// Human-readable display layer. Original entries and webhook matching are untouched.
import {translateLogMessage,segments} from './log-zh-CN.js';
const pairs=text=>Object.fromEntries(text.trim().split('\n').map(line=>{const at=line.indexOf('|');return [line.slice(0,at),line.slice(at+1)];}));
const tasks=pairs(`
Search|搜索任务
Mobile search quota|手机搜索额度
Desktop search quota|电脑搜索额度
Daily set|每日三项
Daily Set|每日三项
More promotions|更多活动
Punchcard child|任务卡子任务
Punchcard|任务卡
Punch Cards|任务卡
Read to Earn|阅读赚积分
Daily Check-In|每日签到
Search perk|搜索加成
Bonus point claim|额外奖励领取
Visual Search|视觉搜索
Streak protection|连续签到保护
Edge browsing|浏览器浏览奖励
App rewards|应用奖励
search|搜索任务
daily-set|每日三项
more-promotions|更多活动
punchcard-child|任务卡子任务
read-to-earn|阅读赚积分
daily-check-in|每日签到
doActivateSearchPerk|搜索加成
doClaimBonusPoints|额外奖励领取
doEnsureStreakProtection|连续签到保护
visual-search|视觉搜索
browser-earn|积分任务页
`);
const terms=pairs(`
completed|已完成
partial|部分任务未完成
confirmed|已确认
unconfirmed|尚未确认
failed|失败
cancelled|已取消
interrupted|已中断
skipped|已跳过
running|正在运行
idle|空闲
unknown|未知
unverified|尚未确认
unavailable|未提供
true|是
false|否
null|未提供
api|接口
browser|浏览器
node-http|脚本网络请求
browser-fetch|浏览器网络请求
rendered|网页识别
desktop|电脑端
mobile|手机端
main|主流程
local|本地词库
google|谷歌
wikipedia|维基百科
rss.googleNews|谷歌新闻订阅
rss.googleNews.local|谷歌新闻本地词库
bing.suggestions|必应搜索建议
zh|中文
zh-cn|简体中文
zh-CN|简体中文
en|英语
en-US|美式英语
CN|中国
LOGIN_REDIRECT|登录跳转
LOGGED_IN|已登录
PASSWORD_INPUT|输入密码
EMAIL_INPUT|输入邮箱
SIGN_IN_METHOD_PICKER|选择登录方式
PASSWORD|密码
AUTHENTICATOR|验证器
EMAIL_CODE|邮箱验证码
SMS|短信验证码
OTP_CODE_ENTRY|输入验证码
EMAIL_VERIFICATION_INPUT|验证邮箱
PASSWORDLESS|免密登录
2FA_TOTP|动态验证码验证
UNKNOWN|暂未识别
ERROR_ALERT|页面错误提示
already-complete|之前已完成
offer-already-complete|之前已完成
already-active|之前已激活
offer-progress-unchanged|提交后进度未变化
quota-unavailable|无法读取额度
quota-available|已读取额度
step-incomplete|子任务未完成
not-offered|账号未提供此活动
claimable-bonus-unknown|无法确认可领取奖励
switch-unavailable|无法确认开关状态
activation-data-unavailable|无法读取活动数据
activity-error|任务执行出错
`);
const fieldNames=pairs(`
accounts|账号数
Accounts|账号数
Clusters|并行进程数
platforms|登录平台
fresh|重新登录
rewardsMode|任务方式
source|数据来源
via|请求方式
currentBalance|当前积分余额
previousBalance|运行前积分余额
responseBalance|响应积分余额
pointsGained|获得积分
accountsProcessed|已处理账号数
runtimeMinutes|耗时（分钟）
durationSeconds|耗时（秒）
geoLocale|账号地区
locale|浏览器语言
language|搜索词语言
cachedRegion|缓存地区
remaining|剩余数量
warnings|警告数
search|搜索次数
report|上报次数
read|阅读次数
progress|进度
status|状态
reason|原因
message|说明
type|请求类型
channel|渠道
offerId|活动标识
transport|请求方式
attempt|尝试次数
waitMs|等待毫秒数
elapsedMs|已耗时（毫秒）
remainingMs|剩余时间（毫秒）
retryInMs|重试等待（毫秒）
edge|浏览器额外积分
desktop|电脑端积分
mobile|手机端积分
bonus|额外积分
total|总计
progressCheckEvery|每几次搜索核对积分
PID|进程号
completed|已完成
incomplete|未完成
unavailable|未提供
notApplicable|不适用
collected|本轮获得积分
oldTotal|运行前总积分
newTotal|运行后总积分
query|搜索词
lastQuery|本批最后搜索词
activity|任务
title|标题
path|接口路径
reloading|重新加载页面
browserReads|浏览器阅读次数
browserReason|浏览器阅读结果
cookies|会话条目数
origins|站点数
offers|活动数
reportable|可上报活动数
streaks|连续签到项目数
streakProtectionEnabled|连续签到保护已启用
streakProtectionRemainingDays|剩余保护天数
streakCounter|连续签到天数
level|账号等级
account|账号
searches|搜索次数
performed|已执行次数
input length|输入长度
`);
const exact=pairs(`
completed|本次已完成
completion not confirmed|尚未确认完成
could not be enabled or verified|未能启用或确认状态
unavailable (skipped)|账号未提供，已跳过
not applicable (skipped)|不适用，已跳过
already completed (skipped)|之前已完成，本次跳过
request sent|已发送请求，结果仍需核实
Read to Earn points earned|阅读积分已到账
Read to Earn API fallback completed|接口备用阅读流程已结束
Browser Read to Earn unavailable; trying the app API instead|浏览器阅读暂不可用，改用应用接口完成阅读
Using Read to Earn API fallback|正在使用阅读接口备用方式
Search summary|搜索结果汇总
User data source unavailable|暂时无法读取账号资料
Page load failed|页面加载失败
Waiting before next search|等待下一次搜索
Waiting before next task|等待下一个任务
Query queue ready|搜索词队列已准备好
Search points earned|搜索积分已到账
No search multiplier is offered to this account|此账号没有提供搜索加成
No streak protection days remain|连续签到保护天数已用完
quota unavailable|无法读取搜索额度
offer progress unchanged|提交后进度未变化
step incomplete|任务卡子任务尚未完成
claimable bonus unknown|无法确认可领取的额外奖励
Fresh Rewards data did not confirm that protection was enabled|刷新资料后仍未确认连续签到保护已启用
Claimable bonus points could not be verified; skipping claim request|无法确认可领取的额外奖励，本次暂不提交领取请求
Snapshot complete|账号资料读取完成
Lock acquired successfully|已取得运行锁
Lock released|已释放运行锁
Starting script...|开始运行脚本
No eligible pending "Daily Set" items in the current data|每日三项当前没有需要继续执行的项目
Finished processing "Daily Set" items|每日三项处理流程已结束
`);
export function diagnosticChinese(value){
 const text=String(value||'');
 if(terms[text])return terms[text];if(exact[text])return exact[text];
 const timeout=text.match(/Timeout ([\d.]+)ms/);
 if(/waitForURL/.test(text))return `等待搜索结果页面跳转超时${timeout?'（约 '+(Number(timeout[1])/1000).toFixed(1)+' 秒）':''}`;
 if(/locator\.|waiting for locator/.test(text))return '等待页面控件出现超时';
 if(/deadline|timed? ?out|Timeout/i.test(text))return '页面或接口请求超时';
 if(/(?:status(?: code)?|HTTP|code)[ =:]*(503|502)/i.test(text))return '服务暂时不可用';
 if(/429|rate.limit/i.test(text))return '服务限制请求频率';
 if(/net::ERR_([A-Z_]+)/.test(text)){const code=text.match(/net::ERR_([A-Z_]+)/)[0];return `浏览器网络请求失败（错误码：${code}）`;}
 if(/bot.score warning/i.test(text))return '微软向账号显示了自动化风险提示，本次跳过';
 if(/permission denied|EACCES/i.test(text))return '权限不足，无法访问所需文件或目录';
 if(/ECONNREFUSED|connection refused/i.test(text))return '目标服务拒绝连接';
 if(/TLS|certificate|SSL/i.test(text))return '安全连接或证书验证失败';
 if(/Error reading response stream/.test(text))return '读取接口响应时连接中断';
 if(/Bing search failed after (\d+) attempt/.test(text))return `必应搜索在重试 ${text.match(/after (\d+)/)[1]} 次后仍未成功`;
 if(/No search multiplier/.test(text))return '账号没有提供搜索加成';
 if(/progress unchanged/.test(text))return '提交后没有检测到进度变化';
 if(/step incomplete/.test(text))return '任务卡子任务尚未完成';
 if(/claimable bonus unknown/.test(text))return '无法确认可领取的额外奖励';
 if(/quota unavailable/.test(text))return '无法读取搜索额度';
 if(/[\u4e00-\u9fff]/.test(text)&&!/[A-Za-z]{4,}/.test(text))return text;
 return '存在未收录的诊断信息，请切换英文日志查看详情';
}
function valueChinese(key,value){
 const v=value.replace(/^"([\s\S]*)"$/,'$1');
 if(['query','lastQuery','title','account','offerId','path','reloading'].includes(key))return v;
 if(['reason','message','browserReason'].includes(key))return diagnosticChinese(v);
 if(/^[-+\d.,/% ]+$/.test(v))return v;
 return terms[v]||tasks[v]||(/^https?:/.test(v)?v:diagnosticChinese(v));
}
function known(text){
 let match;
 if(tasks[text])return tasks[text];if(exact[text])return exact[text];if(terms[text])return terms[text];
 if((match=/^([A-Za-z][A-Za-z0-9 ]*)(=|: )([\s\S]*)$/.exec(text))&&fieldNames[match[1]])return `${fieldNames[match[1]]}：${valueChinese(match[1],match[3])}`;
 if((match=/^points earned: (.+)$/.exec(text)))return `获得积分：${terms[match[1]]||match[1]}`;
 if((match=/^batch pointsGained=(.+)$/.exec(text)))return `本批获得积分：${terms[match[1]]||match[1]}`;
 if((match=/^(Daily set|More promotion|Punchcard child): "([\s\S]*)"$/.exec(text)))return `${tasks[match[1]]||'奖励活动'}：${match[2]}`;
 if((match=/^Search attempt (\d+)\/(\d+) failed(; reloading Bing before retry)?$/.exec(text)))return `第 ${match[1]}/${match[2]} 次搜索失败${match[3]?'，刷新必应后重试':''}`;
 if((match=/^Unknown state at ([^,]+), waiting$/.exec(text)))return `登录页面状态暂未识别，继续等待（页面：${match[1]}）`;
 if((match=/^Run started \(pid (\d+)\)\.$/.exec(text)))return `任务已启动（进程号 ${match[1]}）`;
 if((match=/^Bing searches (?:completed|finished)$/.exec(text)))return '必应搜索已结束';
 if((match=/^Search session error$/.exec(text)))return '搜索流程出错';
 if((match=/^Desktop search failed$/.exec(text)))return '电脑搜索失败';
 if((match=/^Mobile search failed$/.exec(text)))return '手机搜索失败';
 if((match=/^activities: (.+)$/.exec(text)))return '任务统计：'+match[1].replace(/(\d+) (completed|incomplete|unavailable|not applicable)/g,(_,n,status)=>`${n} 项${({completed:'已完成',incomplete:'未完成',unavailable:'未提供','not applicable':'不适用'})[status]}`);
 if(/^v\d[\w.-]*$/.test(text))return '脚本版本：'+text;
 if(/^Bing search failed|waitForURL|^locator\.|Request (?:failed|deadline)|^Error reading/.test(text))return diagnosticChinese(text);
 if((match=/^Rendered Rewards earn page returned status (\d+)$/.exec(text)))return `微软积分任务页返回异常状态 ${match[1]}${/50[23]/.test(match[1])?'，服务暂时不可用':''}`;
 if((match=/^(Fatal error: |Account error: |Microsoft login error: |Error occurred: |Search measurement unavailable ?|Search session error ?)([\s\S]*)$/.exec(text)))return '执行异常：'+diagnosticChinese(match[2]);
 if((match=/^(Account|Desktop|Mobile) flow failed for (\S+): ([\s\S]*)$/.exec(text)))return `账号 ${match[2]} 的${match[1]==='Mobile'?'手机':match[1]==='Desktop'?'电脑':'任务'}流程失败：${diagnosticChinese(match[3])}`;
 if((match=/^(?:TOTP failed|TOTP authentication failed|Failed to fill (?:OTP|TOTP|verification|code|email)(?: input| code)?|Incorrect (?:verification )?code|Worker task crash|An error occurred):?\s*([\s\S]*)$/i.exec(text)))return '执行或验证失败：'+diagnosticChinese(match[1]);
 if((match=/^Available sign-in methods:?\s*(.*)$/.exec(text)))return '可用登录方式：'+match[1].split(/[,| ]+/).filter(Boolean).map(s=>terms[s]||'其他验证方式').join('、');
 const translated=translateLogMessage(text);
 if(translated!==text){
  return translated.replace(/\bMicrosoft Rewards\b/g,'微软积分').replace(/Microsoft Authenticator/g,'微软验证器').replace(/TOTP/g,'动态').replace(/Bing/g,'必应').replace(/Passkey/g,'通行密钥').replace(/KMSI/g,'保持登录').replace(/\bApp\b/g,'应用').replace(/\bStreak\b/g,'连续签到').replace(/chromewebdata/g,'浏览器内部').replace(/\b[A-Z][A-Z_0-9]+\b/g,s=>terms[s]||s);
 }
 if(!/[A-Za-z]{3,}/.test(text))return text;
 return null;
}
export function chineseLog(value){
 let original=String(value??'');
 const wrapped=/^\[[^\]]+\]\s*\[run_daily\.sh\]\s*(.*)$/.exec(original);if(wrapped)original=wrapped[1];
 if(/^\s*[\[{]/.test(original))return {text:'结构化运行数据，请切换英文日志查看完整字段。',known:false};
 const multiline=/[\r\n]|\\n/.test(original),head=original.split(/\r?\n|\\n/)[0];
 let recognized=true;
 const result=segments(multiline?head:original).map(segment=>{const text=known(segment);if(text!==null)return text;recognized=false;return '此条日志暂无中文说明，请切换英文日志查看。';}).join('；');
 return {text:result+(multiline?'\n原始诊断堆栈可在英文日志中查看。':''),known:recognized};
}
export function chineseLogTag(tag){
 if(/^LOGIN|AUTH|SESSION/.test(tag))return '登录与会话';
 if(/SEARCH/.test(tag))return '搜索任务';if(/READ/.test(tag))return '阅读任务';
 if(/ACCOUNT.START/.test(tag))return '账号开始';if(/ACCOUNT.END|ACCOUNT.SKIP/.test(tag))return '账号结果';
 if(/RUN.START/.test(tag))return '本轮开始';if(/RUN.END/.test(tag))return '本轮结果';
 return ({CONTROLLER:'运行控制','ACTIVITY-RESULT':'任务结果','DAILY-SET':'每日三项','TASK-DELAY':'任务等待','GET-DASHBOARD-DATA':'账号资料','EARN-PAGE':'积分任务页',SNAPSHOT:'账号快照',FLOW:'执行流程'})[tag]||'运行记录';
}
