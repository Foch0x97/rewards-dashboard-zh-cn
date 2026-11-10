// Display-only translations, based on the upstream v5 logger calls.
// Never write translated text back to entries, the API, or the log parser.
const exact = Object.fromEntries(`
Starting login process|开始登录
Password sign-in is available; selecting it|支持密码登录，正在选择
Could not select password sign-in method|无法选择密码登录方式
Selecting Microsoft Authenticator sign-in|正在选择 Microsoft Authenticator 登录
Could not select Microsoft Authenticator|无法选择 Microsoft Authenticator
Sending Microsoft Authenticator request|正在发送 Microsoft Authenticator 登录确认请求
Could not send Microsoft Authenticator request|无法发送 Microsoft Authenticator 登录确认请求
No supported non-interactive sign-in method is available; email-code fallback requires interactive stdin|没有可用的非交互登录方式；改用邮箱验证码需要在终端手动输入
Selecting email-code sign-in|正在选择邮箱验证码登录
Could not select email-code sign-in method|无法选择邮箱验证码登录方式
Recovery email input detected|检测到备用邮箱输入页面
Initiating recovery email handler|开始处理备用邮箱验证
Recovery email handler completed successfully|备用邮箱验证处理流程已结束
Email verification requires a configured password or interactive stdin|邮箱验证需要已配置的密码，或通过终端手动输入
Email verification input detected|检测到邮箱验证输入页面
Email verification input detected; checking alternatives|检测到邮箱验证输入页面，正在检查其他登录方式
Password sign-in option selected|已选择密码登录
Sign-in method picker opened|已打开登录方式选择页
Falling back to interactive email verification|改用需要手动输入的邮箱验证
No usable email verification alternative found|未找到可用的其他邮箱验证方式
chromewebdata error detected, attempting recovery|检测到浏览器错误页面，正在尝试恢复
Recovery navigation completed; checking sign-in state|恢复导航已结束，正在检查登录状态
TOTP 2FA authentication required|需要完成 TOTP 双重验证
TOTP 2FA handler completed successfully|TOTP 双重验证处理流程已结束
Accepting KMSI prompt|正在确认保持登录状态
Could not accept KMSI prompt|无法确认保持登录状态
KMSI prompt accepted|已确认保持登录状态
Skipping Passkey prompt|正在跳过通行密钥提示
Could not skip Passkey prompt|无法跳过通行密钥提示
Passkey prompt skipped|已跳过通行密钥提示
Handling passwordless authentication|正在处理免密登录验证
Passwordless authentication completed successfully|免密登录验证已完成
OTP code entry page detected; trying an available alternative sign-in method|检测到验证码输入页面，正在尝试其他可用登录方式
OTP footer action did not leave the code-entry page; falling back to Back|页面底部操作未能退出验证码页，改用返回按钮
No usable alternative action found on OTP page|验证码页上没有可用的其他操作
Login redirect is still in progress, waiting|登录仍在跳转，继续等待
Requesting app access token|正在请求 App 访问令牌
Please approve login on your authenticator app|请在手机验证器中确认此次登录
Login approval failed or timed out|登录确认失败或等待超时
Login exceeded its 10-minute deadline|登录过程超过 10 分钟，已超时
Login timeout: exceeded maximum iterations|登录状态检查次数已达上限，登录超时
Page closed unexpectedly|页面意外关闭
Successfully logged in|登录成功
Entering email|正在填写账号邮箱
Email entered successfully|已填写账号邮箱
Entering password|正在填写密码
Password entered successfully|已填写密码
Email submitted|已提交账号邮箱
Password submitted|已提交密码
Opening alternative sign-in methods|正在打开其他登录方式
Could not open alternative sign-in methods|无法打开其他登录方式
Continuing with primary sign-in method|继续使用主要登录方式
Could not continue with primary sign-in method|无法继续使用主要登录方式
Page changed after state detection; checking again|页面已发生变化，重新检查登录状态
Password input detected but no password is configured; returning to sign-in methods|页面要求输入密码，但未配置密码，正在返回登录方式选择页
No configured password and no way to return to sign-in methods|未配置密码，且无法返回登录方式选择页
This account has been locked! Remove from config and restart!|此账号已被锁定。请先处理账号锁定，或从配置中移除此账号后重新运行。
Passwordless authentication requested|需要完成免密登录验证
Could not retrieve displayed number|未能读取手机确认所需的数字
Approval detected|检测到登录确认
Login approved successfully|登录已获确认
TOTP 2FA authentication requested|需要完成 TOTP 双重验证
Generated TOTP code from secret|已使用配置的密钥生成 TOTP 验证码
Filled TOTP input|已填写 TOTP 验证码
No TOTP input field found|未找到 TOTP 验证码输入框
Unable to fill TOTP input field|无法填写 TOTP 验证码输入框
TOTP input field not found|未找到 TOTP 验证码输入框
Unable to submit TOTP code|无法提交 TOTP 验证码
TOTP authentication completed successfully|TOTP 双重验证成功
TOTP secret is required because interactive stdin is unavailable|当前运行方式无法接收手动输入的验证码，需要配置 TOTP 密钥
No TOTP secret provided, awaiting manual input|未配置 TOTP 密钥，正在等待手动输入验证码
Manual TOTP input failed or timed out|手动输入 TOTP 验证码失败或超时
Code login authentication requested|需要通过验证码登录
Email-code authentication requires interactive stdin; unavailable in background mode|邮箱验证码登录需要交互输入，当前后台运行方式无法接收验证码
Verification code submitted; waiting for response|已提交验证码，正在等待响应
Verification email submitted; waiting for response|已提交验证邮箱，正在等待响应
Unable to retrieve email code destination|未能读取接收验证码的邮箱
Email verification challenge detected, awaiting email address|需要验证邮箱，正在等待输入邮箱地址
Email accepted, verification code sent|邮箱已通过确认，验证码已发送
Code response received; checking next sign-in state|已收到验证码验证响应，正在检查下一步登录状态
Filling recovery email|正在填写备用邮箱
Recovery email submitted; waiting for response|已提交备用邮箱，正在等待响应
Email recovery authentication flow initiated|开始备用邮箱验证流程
Using configured recovery email|正在使用已配置的备用邮箱
Waiting for page response|正在等待页面响应
Recovery email response received; checking next sign-in state|已收到备用邮箱验证响应，正在检查下一步登录状态
No recovery email provided, will prompt user for input|未配置备用邮箱，需要用户手动输入
Valid recovery email received from user|已收到格式有效的备用邮箱
Replaced crashed Bing tab; continuing searches|已替换崩溃的 Bing 标签页，继续搜索
No main search topics available, skipping|没有可用的搜索主题，跳过搜索
Query queue exhausted, stopping|搜索词队列已用完，停止搜索
No search points to earn, skipping (runOnZeroPoints is disabled)|没有可获取的搜索积分，已跳过（未开启额度为零时仍搜索）
No search points reported, but runOnZeroPoints is enabled, searching anyway|未读取到可获取的搜索积分，但已开启额度为零时仍搜索，继续执行
No eligible pending "Daily Set" items in the current data|当前数据中没有符合条件且尚未完成的每日任务
Finished processing "Daily Set" items|每日任务处理流程已结束
Bing App Streak is already completed today; skipping Daily Check-In|今天已完成 Bing App 连续签到，跳过每日签到
Schedule disabled.|定时计划已停用。
Scheduled run started.|已启动定时任务。
Scheduled run skipped — a run is already in progress.|已有任务运行，本次定时已跳过。
Run cancelled|运行已取消
Run stopped|运行已停止
Run interrupted|运行已中断
Shutting down…|正在关闭…
`.trim().split('\n').map(line => {const i=line.indexOf('|');return [line.slice(0,i),line.slice(i+1)];}));

const patterns = [
 [/^Starting Microsoft Rewards Script$/, () => '开始运行 Microsoft Rewards 脚本'],
 [/^Starting account: (.+)$/, (_, email) => `开始运行账号：${email}`],
 [/^(Completed|Finished) account: (.+)$/, (_, verb, email) => `账号运行已结束：${email}`],
 [/^Completed all accounts$/, () => '所有账号的运行流程已结束'],
 [/^Starting session for (.+)$/, (_, email) => `开始处理 ${email} 的登录会话`],
 [/^Desktop signed in; session saved$/, () => '电脑端已登录，会话已保存'],
 [/^User data loaded$/, () => '已读取账号数据'],
 [/^Creating login sessions$/, () => '开始创建登录会话（不执行积分任务）'],
 [/^Waiting for approval\.\.\. \(timeout after (\d+) seconds\)$/, (_, n) => `正在等待手机上的登录确认，${n} 秒后超时`],
 [/^Still waiting\.\.\. \((\d+)\/(\d+) seconds elapsed\)$/, (_, n, total) => `仍在等待登录确认，已等待 ${n}/${total} 秒`],
 [/^Approval timeout after (\d+) seconds!$/, (_, n) => `等待登录确认超时（${n} 秒）`],
 [/^Approval request expired; sending retry (\d+)\/(\d+)$/, (_, n, total) => `登录确认请求已过期，正在重发 ${n}/${total}`],
 [/^(?:Please )?[Ss]elect number:? (\d+)$/, (_, n) => `请在手机验证器中选择数字 ${n}`],
 [/^Please approve login and select number: (\d+)$/, (_, n) => `请在手机验证器中确认登录，并选择数字 ${n}`],
 [/^(Account|Desktop|Mobile) flow failed for (\S+): (.*)$/, (_, platform, email, detail) => `${platform==='Desktop'?'电脑端':platform==='Mobile'?'手机端':'账号'} ${email} 执行失败：${part(detail)}`],
 [/^Login failed or aborted at state: (.+)$/, (_, state) => `登录失败或已中止，所处状态：${state}`],
 [/^Unhandled state: (.+), continuing$/, (_, state) => `暂未处理登录状态 ${state}，继续检查`],
 [/^points earned: (unverified|-?\d+(?:\.\d+)?)$/, (_, value) => `获取积分(points earned): ${value==='unverified'?'unverified（尚未确认）':value}`],
 [/^activities: (.+)$/, (_, counts) => `活动统计(activities): ${counts.replace(/(\d+) (completed|incomplete|unavailable|not applicable)/g,(_,n,status)=>`${n} ${status}（${({'completed':'已确认完成','incomplete':'未完成','unavailable':'未提供','not applicable':'不适用'})[status]}）`)}`],
 [/^State check iteration (\d+)\/(\d+)$/, (_, n, total) => `检查登录状态 ${n}/${total}`],
 [/^Current state: (.+)$/, (_, state) => `当前登录状态：${state}`],
 [/^Processing state: (.+)$/, (_, state) => `正在处理登录状态：${state}`],
 [/^State transition: (.+) → (.+)$/, (_, from, to) => `登录状态变化：${from} → ${to}`],
 [/^Same state count: (\d+)\/4 for state "(.+)"$/, (_, n, state) => `登录状态 ${state} 已连续出现 ${n}/4 次`],
 [/^Stuck in state "(.+)" for 4 loops, refreshing page$/, (_, state) => `登录状态 ${state} 连续 4 次未变化，正在刷新页面`],
 [/^Available sign-in methods: (.+)$/, (_, methods) => `可用登录方式：${methods}`],
 [/^(Invalid or missing code|Unable to fill TOTP input|Unable to fill code input) \(attempt (\d+)\/(\d+)\)$/, (_, what, n, total) => `${({'Invalid or missing code':'验证码无效或未输入','Unable to fill TOTP input':'无法填写 TOTP 验证码','Unable to fill code input':'无法填写验证码'})[what]}（尝试 ${n}/${total}）`],
 [/^TOTP input failed after (\d+) attempts$/, (_, n) => `尝试 ${n} 次后，TOTP 验证仍未通过`],
 [/^Starting Bing searches$/, () => '开始 Bing 搜索'],
 [/^Searching$/, () => '正在搜索'],
 [/^Starting Read to Earn$/, () => '开始阅读赚积分任务'],
 [/^Started solving "Daily Set" items$/, () => '开始处理每日任务'],
 [/^Read report request failed; checking whether Microsoft still credited it$/, () => '阅读上报请求失败，正在核对微软是否仍已入账'],
 [/^Read to Earn refresh unavailable$/, () => '未能刷新阅读任务状态'],
 [/^Read report processed$/, () => '已处理本次阅读上报'],
 [/^Waiting before next read report$/, () => '等待下一次阅读上报'],
 [/^Daily Check-In request sent; verifying completion$/, () => '已发送每日签到请求，正在核实完成情况'],
 [/^Daily Check-In (balance refresh|offer verification) unavailable$/, (_, part) => `未能${part==='balance refresh'?'刷新签到后的积分余额':'核实签到活动'}`],
 [/^Submission uncertain; verifying without resubmitting$/, () => '提交结果不确定，先核实结果，不重复提交'],
 [/^Daily Check-In absent from iOS baseline; point baseline is unknown$/, () => 'iOS 初始数据中没有签到活动，初始积分未知'],
 [/^Daily Check-In iOS baseline unavailable; point baseline is unknown$/, () => '无法读取 iOS 签到初始数据，初始积分未知'],
 [/^Hit the (\d+)-search ceiling with points still missing$/, (_, n) => `已达到 ${n} 次搜索上限，但仍有积分未确认获得`],
 [/^Search points remaining$/, () => '剩余可获取的搜索积分'],
 [/^batch pointsGained=(.+)$/, (_, n) => `本批次积分变化(pointsGained)=${n}`],
 [/^no confirmed progress (\d+)\/(\d+)$/, (_, n, total) => `本批次未确认到进度增长 ${n}/${total}`],
 [/^search (\d+) done, next measure at (\d+)$/, (_, n, next) => `已执行第 ${n} 次搜索，将在第 ${next} 次重新测量进度`],
 [/^Waiting ([\d.]+) seconds before starting the next account( \(.+\))?$/, (_, n, email) => `等待 ${n} 秒后开始下一个账号${email||''}`],
 [/^Primary process started$/, () => '主进程已启动'],[/^Worker spawned$/, () => '已创建执行进程'],
 [/^Worker (\d+) received (\d+) accounts\.$/, (_, pid, n) => `执行进程 ${pid} 已接收 ${n} 个账号`],
 [/^Worker (.+) disconnected$/, (_, pid) => `执行进程 ${pid} 已断开连接`],
 [/^Run (completed|partial|interrupted|failed|cancelled) \(code (\S+)(?: \/ signal (\S+))?\)\.$/, (_, status, code, signal) => `运行结果：${({completed:'已完成',partial:'部分任务未完成',interrupted:'已中断',failed:'失败',cancelled:'已取消'})[status]}；退出码 ${code}${signal?`；信号 ${signal}`:''}`],
];

// These prefixes say what failed; the supplied diagnostic is intentionally unchanged.
const prefixes = {
 'Fatal error: ':'发生致命错误：','Account error: ':'账号错误：','Error occurred: ':'发生错误：','An error occurred: ':'发生错误：',
 'TOTP failed: ':'TOTP 验证失败：','TOTP authentication failed: ':'TOTP 双重验证失败：','Incorrect code: ':'验证码未通过：',
 'Failed to fill TOTP input: ':'填写 TOTP 验证码失败：','Failed to fill code input: ':'填写验证码失败：','Failed to fill email input: ':'填写邮箱失败：',
 'Worker task crash: ':'账号执行进程异常退出：','Search session error':'搜索流程出错','Search measurement unavailable':'未能测量搜索积分',
 'Bing search tab crashed; a fresh tab is required before continuing':'Bing 搜索标签页崩溃，需要新建标签页后继续',
 'Search-result tab crashed; skipping optional visit':'搜索结果标签页崩溃，跳过本次可选访问',
 'Skipped optional results scroll':'已跳过可选的结果页滚动','Skipped optional result visit':'已跳过可选的搜索结果访问',
 'Control API request timed out':'控制接口请求超时','Microsoft login error: ':'微软登录失败：',
};
const fields = {
 accounts:'账号数',platforms:'登录平台',fresh:'重新登录',rewardsMode:'任务模式',source:'数据来源',
 Accounts:'账号数',Clusters:'并行分组数',
 currentBalance:'当前积分余额',previousBalance:'运行前余额',responseBalance:'响应中的余额',pointsGained:'积分变化',
 accountsProcessed:'已处理账号数',runtimeMinutes:'耗时（分钟）',durationSeconds:'耗时（秒）',
 geoLocale:'账号地区',locale:'浏览器语言',cachedRegion:'缓存地区',remaining:'剩余任务数',warnings:'警告',
 search:'搜索次数',report:'上报次数',progress:'进度',status:'状态',reason:'原因',
 type:'请求类型',channel:'渠道',offerId:'活动标识',transport:'请求方式',attempt:'尝试次数',
 waitMs:'等待毫秒数',edge:'Edge 可获积分',desktop:'电脑可获积分',mobile:'手机可获积分',
 progressCheckEvery:'进度检查间隔',PID:'进程号',completed:'已确认完成',incomplete:'未完成',
 unavailable:'未提供',notApplicable:'不适用',collected:'脚本记录的获取积分',oldTotal:'运行前总余额',newTotal:'运行后总余额',
};

// Split only outside quotes/JSON; never translate or split user queries and error payloads.
function segments(text) {
 const out=[];let start=0,quote=null,escape=false,depth=0;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(escape){escape=false;continue;}
  if(quote){if(c==='\\')escape=true;else if(c===quote)quote=null;continue;}
  if(c==='"'||(c==="'"&&(i===0||/[=:\s]/.test(text[i-1])))){quote=c;continue;}
  if(c==='{'||c==='[')depth++;else if(c==='}'||c===']')depth=Math.max(0,depth-1);
  if(depth===0&&text.slice(i,i+3)===' | '){out.push(text.slice(start,i));start=i+3;i+=2;}
 }
 out.push(text.slice(start));return out;
}
function part(text) {
 if(Object.hasOwn(exact,text))return exact[text];
 for(const [re,render] of patterns){const m=text.match(re);if(m)return render(...m);}
 const field=/^([A-Za-z][A-Za-z0-9]*)(=|: )([\s\S]*)$/.exec(text);
 if(field&&Object.hasOwn(fields,field[1])){
  const meanings={completed:'已完成',partial:'部分任务未完成',interrupted:'已中断',failed:'失败',cancelled:'已取消',confirmed:'已确认',unconfirmed:'尚未确认',skipped:'已跳过',running:'正在运行'};
  const value=field[3];
  const note=field[1]==='status'&&Object.hasOwn(meanings,value)?`（${meanings[value]}）`:value==='unknown'?'（未知）':'';
  return `${fields[field[1]]}(${field[1]})${field[2]}${value}${note}`;
 }
 for(const [en,zh] of Object.entries(prefixes))if(text===en||text.startsWith(en))return zh+text.slice(en.length);
 return text;
}
export function translateLogMessage(value) {
 const text=String(value??'');
 // JSON, stack traces and multiline diagnostics are kept intact.
 if(/[\r\n]/.test(text)||/^\s*[\[{]/.test(text))return text;
 return segments(text).map(part).join(' | ');
}
