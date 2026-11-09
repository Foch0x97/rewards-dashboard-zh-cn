// 人工校订的界面文案。只用于显示，不改变 API 字段、配置值或原始日志。
const copy = `
Overview|总览
Accounts|账号
Logs|日志
Runs|运行记录
Schedule|定时计划
Config|脚本设置
Diagnostics|故障诊断
Activities|活动
Summary|概况
Accounts Overview|账号概况
Rewards Dashboard|Rewards 管理面板
Microsoft Rewards Dashboard|Microsoft Rewards 管理面板
🏅 Rewards Dashboard|🏅 Rewards 管理面板
Skip to main content|跳到主要内容
Dashboard sections|面板导航
Theme|主题
Switch to dark mode|切换深色模式
Switch to light mode|切换浅色模式
Connecting…|正在连接…
Connected|已连接
Disconnected|连接已断开
Dashboard server unreachable|无法连接面板服务
Bot backend offline|脚本服务未连接
Control API token rejected|控制接口密钥验证失败
Control API unavailable|控制接口不可用
Ready|就绪
Idle|空闲
Running|运行中
Running…|运行中…
Starting|正在启动
Starting…|正在启动…
Stopping|正在停止
Stopped|已停止
Interrupted|执行中断
Crashed|异常退出
Stalled|执行停滞
Error|错误
Success|成功
Complete|已完成
Done|已完成
Partial|部分完成
Skipped|已跳过
Pending|待执行
Sleeping|等待启动
Unknown|未知
Unverified|尚未确认
Reported|已上报积分
Not offered|账号未提供此活动
Attention|需要检查
N/A|不适用
On|开启
Off|关闭
Yes|是
No|否
Enabled|已启用
Disabled|已停用
Set|设置
Not set|未设置
None|无
None set|尚未设置
Loading…|正在加载…
No history yet|暂无历史记录
No run today|今天尚未运行
Start run|开始运行
Stop|停止
Restart|重新运行
More actions|更多操作
Force stop (SIGKILL)|强制终止（SIGKILL）
Shut down control API|关闭控制接口
Run started.|已提交运行请求。
Stop signal sent.|已请求停止，正在等待脚本退出。
Restarting…|正在重新运行…
Force stop sent.|已请求强制终止。
Shutdown sent.|已请求关闭控制接口。
Restart the bot? A run in progress will be stopped first.|确定重新运行脚本？正在执行的任务会先被停止。
Force-kill the run (SIGKILL)? It gets no chance to clean up.|确定强制终止？脚本将立即退出，可能来不及保存状态。
Shut the control API down? The dashboard will go offline until you start it again on the bot host.|确定关闭控制接口？关闭后面板将无法控制脚本，需要到脚本所在设备重新启动服务。
Control API restarted — reconnected.|控制接口已重启，连接已恢复。
Login approval needed|需要确认登录
Run only|仅运行此账号
Run selected|运行所选账号
Batch run|批量运行
Select|选择
Select all|全选
Clear selection|取消选择
Selected|已选
Trend|积分趋势
Timeline|时间轴
Heatmap|热力图
Points|积分
Point total|积分余额
Combined balance|总积分余额
Total balance|总积分余额
Total points|总积分
Today's gain|今日积分变化
Today’s gain|今日积分变化
Accounts in error|异常账号
Last run|上次运行
Last Run|上次运行
Run in progress|当前运行进度
Run sleeping|等待随机延迟结束
Every recorded balance, oldest to newest|按时间展示每次记录的积分余额
No point history recorded for this account yet.|此账号还没有积分历史记录。
Configuration|账号配置
Configured in .env|已在 .env 中配置
No — seen in logs only|否，仅在历史日志中出现
Geo locale|账号地区
Language|语言
TOTP secret|动态验证码密钥
Recovery email|备用邮箱
Proxy|代理
Streak protection|连续签到保护
Current streak|当前连续签到天数
Streak|连续签到
Protection days left|剩余保护天数
Lifetime collected|累计获取积分
Statistics|统计信息
Details|详情
Show details|展开详情
Hide details|收起详情
unconfigured|未配置
days unavailable|未取得剩余天数
streak unavailable|未取得连续签到天数
Live logs|实时日志
Level|日志级别
All|全部
Info and up|信息及以上
Warnings and up|警告及以上
Errors only|仅错误
Search|搜索
Filter lines…|搜索日志内容…
Autoscroll|自动滚动
Pause|暂停滚动
Resume|继续显示
Load 2000|加载更多（2000 条）
Download|下载
Clear|清空显示
Waiting for log lines…|等待日志…
No log lines match the current filter.|没有符合筛选条件的日志。
Points per day|每日获取积分
Run history|历史运行记录
Process exits|进程退出记录
Status|状态
Started|开始时间
Duration|耗时
Gained|获取积分
New total|运行后余额
Version|版本
Time|时间
Code|退出码
Signal|退出信号
No runs recorded yet.|暂无运行记录。
No process exits recorded.|暂无进程退出记录。
Automatic runs|自动运行
Two schedulers are available — pick the one that fits your setup|可选择由面板或脚本容器负责定时；只需启用其中一个
Scheduler location|定时由谁执行
This dashboard|面板定时
Bot container (Docker cron)|脚本容器定时（Docker cron）
Cron runs inside the bot container itself — it fires even if this dashboard is offline, and simply doesn't fire while the container is stopped (so there's no missed-run policy to configure).|定时由脚本容器执行，面板关闭也不影响。容器停止期间不会运行，也不会自动补跑。
This scheduler runs inside the dashboard's own process — it needs the dashboard container to be up to fire, but can recover a missed run according to the policy below.|定时由面板执行，需要面板保持运行；停机期间错过的任务，可按下方规则补跑。
⚠ Both schedulers are currently enabled — runs may double-fire. Disable one of them below.|⚠ 两套定时都已启用，可能重复执行。请停用其中一套。
— fire runs on the schedule below|— 按下面的时间自动运行
If a run was missed while the dashboard was offline|面板离线期间错过任务时
Skip it|跳过，不补跑
Run once after startup|启动后补跑一次
Run only within a grace period|仅在允许的补跑时限内执行
Grace period in minutes|允许补跑的时限（分钟）
Excluded accounts|不参与此定时的账号
Loading configured accounts…|正在读取账号…
No configured accounts are available.|没有可用的已配置账号。
Cron expression|Cron 定时表达式
Enter a 5-field cron expression.|请输入五段式 Cron：分钟 小时 日 月 星期。
Daily at 09:00|每天 09:00
Twice daily (09:00, 21:00)|每天两次：09:00、21:00
Every 6 hours|每 6 小时
Every 12 hours|每 12 小时
Weekdays at 08:00|周一至周五 08:00
Skip if already running|已有任务运行时跳过
— don’t start a second run on top of one in progress|— 避免与正在运行的任务重叠
Save schedule|保存定时计划
Discard changes|放弃修改
Current state|当前状态
Next run|下次运行
Last triggered|上次触发时间
Last result|上次触发结果
Timezone|时区
Not scheduled|尚未安排
Not tracked here — see the Runs tab.|此处不记录，请到“运行记录”查看。
Discard unsaved changes and switch scheduler?|切换后会丢弃尚未保存的修改，确定继续？
A scheduled run must include at least one account.|至少保留一个参与运行的账号。
Session management|登录会话
Error captures|出错现场
Clear sessions|清除登录会话
Clear session|清除登录会话
Regenerate sessions|重新生成登录会话
Screenshot|页面截图
Error text|错误信息
HTML dump|页面 HTML
Open|打开
Refresh|刷新
Close|关闭
No diagnostics available.|暂无诊断记录。
No saved sessions.|暂无已保存的登录会话。
Core|基本设置
Workers|任务开关
Search settings|搜索设置
Experimental|实验功能
Logging|日志设置
Webhooks|消息通知
Other settings|其他设置
Headless browser|后台运行浏览器
Run browser invisibly|运行时不显示浏览器窗口。
Continue on bot warning|收到自动化警告后继续运行
Continue on bot warning (legacy spelling)|收到自动化警告后继续运行（旧版键名）
Continue the run after a bot warning|即使页面提示检测到自动化，仍继续本轮任务。
Error diagnostics|保存诊断信息
Save error and unknown-login page diagnostics under diagnostics/|将出错页面和无法识别的登录页面保存到 diagnostics/，便于排查。
Ensure streak protection|自动开启连续签到保护
Ensure streak protection is enabled|尝试开启连续签到保护，并确认开启结果。
Auto-claim punchcard rewards|自动领取任务卡奖励
Auto-claim completed punchcard rewards|任务卡达成后自动领取奖励。
Skip non-point tasks|跳过无积分任务
Skip tasks that award no points|不执行没有积分奖励的任务。
Local queries for ExploreOnBing|探索任务使用本地搜索词
Use the local query list for ExploreOnBing|执行“探索 Bing”任务时使用本地词库。
Daily set|每日三项
Complete daily set|执行每日任务组。
Claim bonus points|领取额外奖励积分
More activities|更多活动
Complete "more activities"|执行 Rewards 页面“更多活动”中的任务。
Punch cards|任务卡
Complete punchcards|执行任务卡中的各项活动。
App promotions|App 活动
Complete app promotions|执行微软移动 App 提供的奖励活动。
Desktop search|电脑搜索
Perform desktop searches|执行电脑端 Bing 搜索任务。
Mobile search|手机搜索
Perform mobile searches|执行手机端 Bing 搜索任务。
Bonus searches|额外搜索
Farm bonus searches beyond the cap|达到常规搜索额度后，继续尝试额外搜索奖励。
Daily check-in|每日签到
Complete daily check-in|领取移动 App 的每日签到奖励。
Read to earn|阅读赚积分
Complete Read-to-Earn|执行阅读文章任务。
Activate search perk|激活搜索加成
Activate the "search Nx more" perk when present (runs after the daily set)|出现“搜索 N 次更多”福利时尝试激活，在每日任务后执行。
Visual search|视觉搜索
Activate the visual-search streak and perform visual searches|激活视觉搜索连续任务并执行图片搜索。
URL reward|访问页面奖励
Complete URL reward activities|执行打开指定页面即可获得奖励的任务。
ExploreOnBing|探索 Bing
Complete ExploreOnBing offers|执行“探索 Bing”搜索活动。
Scroll random results|随机滚动搜索结果
Scroll randomly on results|在搜索结果页随机滚动。
Click random results|随机打开搜索结果
Click random links|随机打开搜索结果中的链接。
Run on zero points|额度为零时仍搜索
Run searches even when no search points remain|即使读到的剩余搜索积分为零，也继续搜索。
Use account locale|按账号地区选词
Use each account's locale when building search queries|根据各账号的地区和语言生成搜索词。
Parallel searching|电脑与手机并行搜索
Run searches in parallel|让电脑端和手机端搜索同时进行。
Cluster search|按主题连续搜索
Cluster each main topic with Bing suggestions|围绕同一主题，结合 Bing 建议词进行搜索。
API search|通过接口搜索
Perform Bing searches over HTTP instead of driving a browser page|通过 HTTP 接口搜索，不操作浏览器页面。
API ExploreOnBing|通过接口执行探索任务
Complete ExploreOnBing offers over HTTP instead of the browser|通过 HTTP 接口执行“探索 Bing”任务。
Block media|阻止加载图片与媒体
Block browser image and media requests to reduce traffic|减少浏览器加载图片、音视频产生的流量。
Edge browsing|Edge 浏览任务
Report the 30-minute Edge browsing activity as a background HTTP task|通过后台 HTTP 请求上报 30 分钟 Edge 浏览活动。
Browser search API report|浏览器搜索后补充接口上报
Send one experimental API search per account after browser searches|浏览器搜索完成后，为每个账号额外发送一次实验性接口搜索。
Debug logs|调试日志
Enable debug logging|记录更详细的调试信息。
Console log filter|控制台日志筛选
Enable console log filtering|只在控制台显示符合规则的日志。
Proxy query engine requests|搜索词来源使用代理
Ignore certificate errors|忽略证书错误
Disable browser TLS certificate verification for intercept proxies|关闭浏览器 TLS 证书校验，仅在明确需要兼容拦截代理时使用。
Discord webhook|Discord 通知
Enable Discord webhook|通过 Discord Webhook 发送通知。
Telegram webhook|Telegram 通知
Enable Telegram webhook|通过 Telegram 机器人发送通知。
ntfy webhook|ntfy 通知
Enable ntfy notifications|通过 ntfy 发送通知。
Webhook log filter|通知日志筛选
Enable webhook log filtering|只推送符合规则的日志，避免每条日志都发送通知。
Session path|登录会话目录
Directory to store browser sessions|保存浏览器登录会话的位置。
Rewards mode|任务执行方式
Browser completes web tasks through rendered controls, checking /earn before remaining flyout activities. API signs in, saves desktop/mobile cookies and closes the browsers; remaining work, including Visual Search, uses HTTP.|浏览器模式通过页面控件完成任务；API 模式先登录并保存电脑、手机会话，再关闭浏览器，通过 HTTP 接口执行后续任务。
Browser|浏览器
Clusters|账号并发组数
Number of concurrent account clusters|同时运行的账号组数量。
Global timeout|操作超时
Timeout for all actions|各操作的超时上限，例如 30sec。
Delay before next account|账号切换间隔
Minimum delay before starting the next configured account|开始下一个账号前至少等待多久。
Maximum delay before starting the next configured account|开始下一个账号前最多等待多久。
Delay between tasks|任务间隔
Minimum delay before starting the next task on the same platform|同一平台开始下个任务前的最短等待时间。
Maximum delay before starting the next task on the same platform|同一平台开始下个任务前的最长等待时间。
Max bonus searches|额外搜索次数上限
Max bonus searches per run (when Bonus searches is on)|启用“额外搜索”后，每轮最多尝试的次数。
Max Explore on Bing attempts|探索任务尝试次数
Max unused search queries tried per Explore on Bing offer|每项探索任务最多尝试多少个尚未用过的搜索词。
Search result visit time|搜索结果停留时间
Time to spend on each search result|打开每条搜索结果后的停留时长。
Delay between searches|搜索间隔
Minimum delay between searches|两次搜索之间至少等待多久。
Maximum delay between searches|两次搜索之间最多等待多久。
Delay for reading|阅读间隔
Minimum delay for reading|阅读任务之间的最短等待时间。
Maximum delay for reading|阅读任务之间的最长等待时间。
Query sources|搜索词来源
Sources used to build the search query pool|从哪些来源获取搜索词。
e.g. google, rss.bbc|例如：google, rss.bbc
Valid: google, wikipedia, wikirandom, hackernews, reddit, local, or rss.<source> (e.g. rss.bbc, rss.googleNews).|可填 google、wikipedia、wikirandom、hackernews、reddit、local，或 rss.来源（如 rss.bbc、rss.googleNews）。
Console filter mode|控制台筛选方式
Filter mode (whitelist/blacklist)|白名单只保留匹配日志；黑名单排除匹配日志。
Whitelist|白名单
Blacklist|黑名单
Console filter levels|控制台日志级别
Log levels to filter|需要匹配的日志级别。
e.g. error, warn|例如：error, warn
Console filter keywords|控制台筛选关键词
Keywords to filter|需要匹配的日志关键词。
e.g. starting account|例如：starting account
Console filter regex patterns|控制台筛选正则
Regex patterns for filtering|用于匹配日志的正则表达式。
e.g. ^Error:|例如：^Error:
Discord webhook URL|Discord Webhook 地址
Telegram bot token|Telegram 机器人令牌
Telegram chat ID|Telegram 会话 ID
Telegram chat id|接收通知的 Telegram 会话 ID。
ntfy server URL|ntfy 服务地址
ntfy topic|ntfy 主题
ntfy auth token|ntfy 访问令牌
ntfy authentication token|访问 ntfy 服务使用的令牌。
ntfy notification title|ntfy 通知标题
Notification title|通知显示的标题。
ntfy tags|ntfy 标签
Notification tags|通知使用的标签。
e.g. bot, notify|例如：bot, notify
ntfy priority|ntfy 优先级
Notification priority (1-5)|通知优先级，范围 1–5。
Webhook filter mode|通知筛选方式
Webhook filter levels|通知日志级别
Webhook filter keywords|通知筛选关键词
Webhook filter regex patterns|通知筛选正则
v5 only|仅适用于 v5
v4 only|仅适用于 v4
Add|添加
Add value…|输入要添加的值…
Already in the list.|该项已在列表中。
Enter a valid number.|请输入有效数字。
Apply recommended filter|使用推荐通知规则
Applying…|正在应用…
Quick settings|常用设置
Raw JSON|原始 JSON
Save JSON|保存 JSON
Reload|重新读取
Reveal secrets|显示敏感配置
Hide secrets|隐藏敏感配置
Read-only|只读
Save changes|保存修改
Save|保存
Cancel|取消
Configuration saved.|配置已保存。
Config saved.|配置已保存。
Missing defaults|缺失的默认配置
Sync defaults|补齐默认配置
Up to date|已是最新
Configuration is up to date.|配置项已齐全。
The bot rejected this config:|脚本拒绝了这份配置：
Confirmed|已确认
Not offered on this account|该账号未提供此活动
Probably not offered (no streak for this account)|可能未提供此活动：账号没有相应连续任务
Listed by Microsoft, but there is no card for it on the page|微软任务列表中存在，但页面上没有对应卡片
Not applicable|不适用
Quota couldn’t be read|未能读取任务额度
Offer data couldn’t be read|未能读取活动数据
Completion not confirmed|尚未确认完成
Claim not confirmed|尚未确认领取成功
Claimable bonus unknown|可领取的额外奖励尚不明确
No progress detected|未检测到进度变化
Couldn’t confirm|未能确认
Script couldn’t pick the right button|脚本未能确定应点击哪个按钮
Control not found on the page|页面上没有找到对应控件
Search attempt limit reached|已达到搜索尝试上限
Earn page pass didn’t finish|奖励页面处理未完成
Step not completed yet|此步骤尚未完成
Failed|失败
Points breakdown|积分明细
Activity|活动
Detail|说明
Streaks & progress|连续任务与进度
points not reported|脚本未上报积分
Some points in this group were not reported by the script|此组部分积分未由脚本明确上报。
The script did not report points for this activity|脚本没有上报此活动的积分。
Estimated from the balance change around this activity. Not verified by the script and not counted in any total.|按活动前后的余额变化估算，脚本尚未核实，不计入汇总。
Collected|本轮获取
Attributed|已归属到活动
Unattributed|尚未归属
Balance|积分余额
Day|日期
Today|今天
Previous day|前一天
Next day|后一天
All accounts|全部账号
Account|账号
Desktop|电脑端
Mobile|手机端
Cookies|Cookie 数量
Updated|更新时间
Platform|平台
Fingerprint|浏览器指纹
No sessions found.|没有找到登录会话。
No diagnostics recorded yet.|暂无出错现场记录。
Delete|删除
Delete record|删除历史记录
Delete account|删除面板记录
Remove from dashboard|移除面板记录
Clear dashboard history|清除面板历史
Days|天数
Notes|说明
Not available|不可用
No data|暂无数据
No data yet|暂无数据
Microsoft Rewards|微软 Rewards
Accounts tracked|已记录账号
Points earned last run|上次运行获取积分
Running now|正在执行
Schedule (2 active)|定时计划（两套均已启用）
profiles|个账号
points|分
errors|个异常
timestamp|记录时间
Settings|设置
Raw config|原始配置
Reload from API|从接口重新读取
Only the fields you actually change are sent|仅提交实际修改的字段
Saves each change automatically. Applies on the next run.|修改后自动保存，在下次运行时生效。
Enable viewing of sensitive secrets. Requires|允许查看敏感配置。需要在控制接口上启用
on the control API.|。
Fetch webhook URLs and tokens from the control API|读取控制接口中的通知地址和访问令牌
Discard unsaved edits and re-fetch config.json from the bot.|放弃未保存的编辑，从脚本重新读取 config.json。
Nothing changed.|没有需要保存的修改。
Log levels to send|允许推送的日志级别。
1 – Min|1 — 最低
2 – Low|2 — 较低
3 – Default|3 — 默认
4 – High|4 — 较高
5 – Max|5 — 最高
Hidden until secrets are revealed|显示敏感配置后才可编辑
🔒 Hidden until secrets are revealed|🔒 显示敏感配置后才可编辑
Only available when the bot is idle.|只能在脚本空闲时操作。
No point history recorded yet.|暂无积分历史记录。
No accounts found.|暂无账号。
No accounts yet.|暂无账号。
No accounts have been seen yet.|尚未读取到账号。
No error captures yet.|暂无出错现场记录。
No exits recorded.|暂无退出记录。
No saved browser sessions.|暂无已保存的浏览器会话。
Last seen|最近读取
Last start|最近开始
Last end|最近结束
Last duration|上次耗时
Last error|最近错误
Slot|账号序号
Email|邮箱
Region|地区
Current balance|当前积分余额
Total collected|累计获取积分
History|历史记录
Configured|已配置
Not configured|未配置
Account details|账号详情
Account selection|账号选择
Select accounts|选择账号
No — seen in logs only|否，仅在日志中出现
Session|会话
Has session|已有登录会话
Has fingerprint|已有浏览器指纹
Browser sessions|浏览器登录会话
No session metadata returned.|没有返回会话信息。
No diagnostic captures returned.|没有返回诊断记录。
Delete from dashboard|删除面板记录
Remove|移除
Full|全部完成
Record|记录
Outcome|执行结果
Show|显示
Hide|隐藏
Details & history|详情与历史
Daily Set|每日三项
More Promotions|更多活动
App Promotions|App 活动
Daily Check-In|每日签到
Read to Earn|阅读赚积分
Desktop Search|电脑搜索
Mobile Search|手机搜索
Bonus Search|额外搜索
Bonus Searches|额外搜索
Visual Search|视觉搜索
Explore on Bing|探索 Bing
Edge Browsing|Edge 浏览
Claim Bonus Points|领取额外奖励积分
Punch Cards|任务卡
Punchcards|任务卡
Streak Protection|连续签到保护
Search Perk|搜索加成
Attribution|积分归属
Estimated|估算
Verified|已核实
Unconfirmed|尚未确认
—|—
selected|个已选
Run selected accounts|运行所选账号
Account status|账号状态
Expand details|展开详情
Collapse details|收起详情
Activity Status|任务完成情况
Migration completes on the first full v5 run|首次完整运行 v5 后显示详情
Appears after the next run|下次运行后显示
Remove this account and its history from the dashboard|删除此账号在面板中的记录和历史
Success streak|连续成功次数
Runs recorded by the API|接口记录的运行次数
Points collected (API history)|历史获取积分（接口记录）
History points loaded|已加载的积分记录
Accounts are configured in the bot’s|账号在微软脚本的以下文件中配置：
). The control API exposes full local email addresses but never sends passwords, recovery addresses, TOTP secrets, or proxy credentials.|）。控制接口会提供完整邮箱地址，但不会传回密码、备用邮箱、动态验证码密钥或代理凭据。
Date range|日期范围
Points collected per day|每日获取积分
14d|14 天
30d|30 天
90d|90 天
Parsed from the bot’s own log output|根据脚本输出的日志整理
How each run the control API launched actually ended|查看控制接口启动的每次运行如何结束
Times are evaluated in the scheduler’s own timezone (dashboard: its|定时按执行端的时区计算：面板使用自身的
; bot container: its own|；脚本容器使用自身的
). If a scheduler's host was offline, the local scheduler applies its missed-run policy at startup — the container scheduler simply didn’t fire.|。执行端离线时，面板会按补跑策略处理错过的任务；脚本容器的定时不会自动补跑。
to|为
on|开启
before enabling a push-notification webhook like ntfy, or you’ll get a notification for every log line, including debug noise. With it enabled, only account start, 2FA codes, and account completion summaries are delivered. Use whitelist mode and the “Webhook filter keywords” field below to customize exactly which notifications you receive.|，再启用 ntfy 等消息通知，否则每条日志（包括调试日志）都会推送。开启后默认仅通知账号开始运行、双重验证代码和完成摘要。可用白名单和下方的「通知筛选关键词」调整推送内容。
More promotions|更多活动
Search on bing|Bing 搜索
Run on start|启动时运行
Clearing sessions can fix most common login issues|遇到登录问题时，可以尝试清除对应账号的会话
Clearing a session logs that account out immediately. It will need to sign in again — and re-approve 2FA if used — on its next run. Only clear a session if you're actually seeing login problems for that account.|清除会话会立即退出该账号。下次运行需要重新登录，启用了双重验证的账号还需再次确认。仅在该账号确实遇到登录问题时使用。
No stored sessions|没有保存的会话
The bot must be idle to clear a session|请先等待脚本空闲，再清除会话
Nothing stored for this account yet|此账号尚无保存的会话
Clearing…|正在清除…
No error captures — nothing has gone wrong badly enough to be worth a screenshot. Captures need|暂无出错现场。如需在出错时保存截图，请在脚本配置中启用
enabled in the bot’s config.|。
No error text captured.|没有保存错误文本。
No error.txt in this capture.|此记录中没有 error.txt。
screenshot|截图
Download dump.html|下载页面快照 dump.html
Confirmed|已确认
Not offered|未提供
Not offered on this account|此账号没有这项任务
Probably not offered (no streak for this account)|可能未提供（此账号没有连续签到记录）
Listed by Microsoft, but there is no card for it on the page|微软列出了任务，但页面上没有对应卡片
Not applicable|不适用
Quota couldn’t be read|未能读取任务额度
Offer data couldn’t be read|未能读取活动信息
Completion not confirmed|尚未确认完成
Claim not confirmed|尚未确认领取
Claimable bonus unknown|可领取的奖励未知
No progress detected|未检测到进度变化
Couldn’t confirm|未能确认
Script couldn’t pick the right button|脚本未能确定应点击哪个按钮
Control not found on the page|页面上未找到操作控件
Search attempt limit reached|已达到搜索尝试次数上限
Earn page pass didn’t finish|积分页面任务未执行完毕
Step not completed yet|此步骤尚未完成
Estimated from the balance change around this activity. Not verified by the script and not counted in any total.|根据任务前后的余额变化估算，脚本尚未核实，未计入任何总数。
Some points in this group were not reported by the script|脚本未上报此组任务的部分积分
The script did not report points for this activity|脚本未上报此任务的积分
Daily Set and More Promos are reported together|每日三项与更多活动合并上报
points not reported|积分未上报
Show items|展开子任务
Hide items|收起子任务
Daily Set / More Promos split|分别统计每日三项与更多活动
per-activity status|各任务的完成状态
mobile search quota|手机搜索额度
search perk|搜索加成
balance estimates|余额估算
Not offered / N/A|未提供 / 不适用
Available at start of run|运行开始时的可获取积分
Not collected|尚未获取
Unattributed|未对应到具体任务
Bot collected|脚本记录的获取积分
Attributed|已对应到具体任务
Balance|积分余额
Streak board|连续签到记录
No streak data was captured for this day.|这一天没有记录到连续签到数据。
Not active|未启用
Daily streak|连续签到天数
Streak protection|连续签到保护
Protection checked|保护状态检查时间
Level|等级
Needs attention|需要检查
Not run|未运行
skipped|已跳过
Basic view|基础信息
Run stopped early|运行提前结束
Latest run skipped|最近一次运行已跳过
The basic view appears after this account’s next run.|此账号下次运行后将显示基础信息。
On v4 it shows points per source, the search split and points available. v5 adds per-activity status, streaks and more.|v4 可显示各来源积分、搜索积分明细及可获取积分；v5 还可显示各任务完成情况、连续签到等信息。
Activity details will appear after this account’s first full v5 run.|此账号首次完整运行 v5 后，将显示任务详情。
Runs from before v5 don’t include the data this table uses, so there is nothing to show yet.|v5 之前的运行记录没有此表所需的数据，因此暂时无法显示。
Loading activity…|正在读取任务详情…
Couldn’t read run history from the script.|未能从脚本读取运行历史。
Account not run: high bot score|账号未运行：自动化风险评分过高
Points breakdown|积分明细
Activity|任务
Detail|说明
Streaks and progress|连续签到与进度
Streaks & progress|连续签到与进度
Day|日期
Rewards day|Rewards 结算日
today’s step|今天的步骤
Show setting description|查看设置说明
Hide setting description|收起设置说明
`;

export const messages = Object.freeze(Object.fromEntries(copy.trim().split('\n').map(line => {
  const separator = line.indexOf('|');
  return [line.slice(0, separator), line.slice(separator + 1)];
})));

// 动态文案也按句意编写；不改写未知业务响应，不做逐词替换。
const patterns = [
  [/^Add (.+)$/, (_, field) => `添加${translate(field)}`],
  [/^(\d+) runs?$/, (_, n) => `${n} 次运行`],
  [/^Level (\d+)$/, (_, n) => `等级 ${n}`],
  [/^Day (\d+)$/, (_, n) => `第 ${n} 天`],
  [/^(\d+) days? left$/, (_, n) => `剩余 ${n} 天`],
  [/^(\d+) of (\d+) done$/, (_, n, total) => `已完成 ${n}/${total}`],
  [/^(\d+) needs? attention$/, (_, n) => `${n} 项需要检查`],
  [/^(\d+) unverifi(?:ed|able)$/, (_, n) => `${n} 项尚未确认`],
  [/^~([\d,]+) pts estimated from balance$/, (_, n) => `按余额变化估算约 ${n} 分`],
  [/^([\d,]+) pts available in the mobile app$/, (_, n) => `手机 App 中可获取 ${n} 分`],
  [/^(PC|Mobile|Bonus|PC searches|Mobile searches|App) ([\d,]+)$/, (_, kind, n) => `${({'PC':'电脑','Mobile':'手机','Bonus':'额外','PC searches':'电脑搜索','Mobile searches':'手机搜索','App':'App'})[kind]} ${n}`],
  [/^Some points were not reported \(about (.+) more estimated from balance changes\)$/, (_, n) => `部分积分未上报，按余额变化估算另有约 ${n} 分`],
  [/^Collected differs from attributed \+ unattributed by (.+)\.$/, (_, n) => `获取积分与各项归属积分之和相差 ${n} 分。`],
  [/^Resets in (.+?)( \(estimated\))?$/, (_, time, est) => `${translate(time)}后重置${est ? '（估算）' : ''}`],
  [/^Reason: (.+)\. Retrying automatically\.$/, (_, reason) => `原因：${reason}。正在自动重试。`],
  [/^Account not run: (.+)$/, (_, why) => `账号未运行：${translate(why)}`],
  [/^Started ACCOUNT_(\d+) only \((.+)\)\.$/, (_, n, email) => `已提交账号 ${n}（${email}）的运行请求。`],
  [/^\+(\d[\d,]*)\s*pts today$/, (_, n) => `今日变化 +${n} 分`],
  [/^next account in ~(\d+)s(.*)$/, (_, n, who) => `约 ${n} 秒后开始下一个账号${who}`],
  [/^starts in (.+) · (.+) delay$/, (_, remain, total) => `${translate(remain)}后开始 · 本轮延迟 ${translate(total)}`],
  [/^([+\-]?[\d,]+) points over (\d+) days$/, (_, n, days) => `最近 ${days} 天共 ${n} 分`],
  [/^(\d+) days? with a run$/, (_, n) => `${n} 天有运行记录`],
  [/^(\d+) days?$/, (_, n) => `${n} 天`],
  [/^Failed: (.+)$/, (_, reason) => `失败：${reason}`],
  [/^Not valid JSON: (.+)$/, (_, reason) => `JSON 格式错误：${reason}`],
  [/^Saved: (.+)$/, (_, what) => `已保存：${what}`],
  [/^(\d+) lines? buffered$/, (_, n) => `已缓存 ${n} 条日志`],
  [/^Resume \((\d+) new\)$/, (_, n) => `继续显示（${n} 条新日志）`],
  [/^Expires in (\d+)s$/, (_, n) => `${n} 秒后失效`],
  [/^Login approval needed for (.+): select number (\d+)\. Expires in 60 seconds\.$/, (_, user, n) => `${user} 需要确认登录，请在验证器中选择 ${n}。有效期 60 秒。`],
  [/^Run only ACCOUNT_(\d+)$/, (_, n) => `仅运行账号 ${n}`],
  [/^Include ACCOUNT_(\d+) in a batch run$/, (_, n) => `将账号 ${n} 加入批量运行`],
  [/^Select ACCOUNT_(\d+) for a batch run$/, (_, n) => `选择账号 ${n} 参与批量运行`],
  [/^Started (\d+)\/(\d+) selected accounts\.$/, (_, n, total) => `已提交 ${n} 个所选账号的运行请求（共 ${total} 个账号）。`],
  [/^Exclude$/, () => '排除'],
  [/^Schedule armed \((.+)\)\.$/, (_, where) => `定时计划已启用（${messages[where] || where}）。`],
  [/^Schedule disabled \((.+)\)\.$/, (_, where) => `定时计划已停用（${messages[where] || where}）。`],
  [/^(\d+) protection days? left$/, (_, n) => `剩余 ${n} 天签到保护`],
  [/^([\d,]+) days? current streak$/, (_, n) => `已连续签到 ${n} 天`],
  [/^([+\-]?[\d,]+)\s*pts today$/, (_, n) => `今日变化 ${n} 分`],
  [/^([+\-]?[\d,.]+) (pts|points)( earned)?$/, (_, n) => `${n} 分`],
  [/^([\d,]+) accounts processed$/, (_, n) => `已处理 ${n} 个账号`],
  [/^(\d+)\/(\d+) accounts$/, (_, n, total) => `账号 ${n}/${total}`],
  [/^(\d+)\/(\d+) done$/, (_, n, total) => `已完成 ${n}/${total}`],
  [/^(\d+) accounts seen$/, (_, n) => `已读取 ${n} 个账号`],
  [/^(\d+) running$/, (_, n) => `${n} 个运行中`],
  [/^(\d+) pending$/, (_, n) => `${n} 个待执行`],
  [/^(\d+) clusters?$/, (_, n) => `${n} 个并发组`],
  [/^Run started for (.+)\.$/, (_, account) => `已提交 ${account} 的运行请求。`],
  [/^Request failed \((\d+)\)$/, (_, code) => `请求失败（HTTP ${code}）`],
  [/^just now$/, () => '刚刚'],
  [/^(\d+)m ago$/, (_, n) => `${n} 分钟前`],
  [/^(\d+)h(?: (\d+)m)? ago$/, (_, h, m) => `${h} 小时${m ? ` ${m} 分钟` : ''}前`],
  [/^(\d+)d(?: (\d+)h)? ago$/, (_, d, h) => `${d} 天${h ? ` ${h} 小时` : ''}前`],
  [/^(\d+)s$/, (_, n) => `${n} 秒`],
  [/^(\d+)m(?: (\d+)s)?$/, (_, m, s) => `${m} 分钟${s ? ` ${s} 秒` : ''}`],
  [/^(\d+)h (\d+)m$/, (_, h, m) => `${h} 小时 ${m} 分钟`],
  [/^Last Run: (.+)$/, (_, value) => `上次运行：${translate(value)}`],
  [/^run starts in (.+)$/, (_, value) => `${translate(value)}后开始`],
  [/^started (.+)$/, (_, value) => `开始于${translate(value)}`],
  [/^next run (.+)$/, (_, value) => `下次运行 ${value}`],
  [/^Delay before next account — (min|max)$/, (_, kind) => `账号切换间隔 — ${kind === 'min' ? '最短' : '最长'}`],
  [/^Delay between tasks — (min|max)$/, (_, kind) => `任务间隔 — ${kind === 'min' ? '最短' : '最长'}`],
  [/^Delay between searches — (min|max)$/, (_, kind) => `搜索间隔 — ${kind === 'min' ? '最短' : '最长'}`],
  [/^Delay for reading — (min|max)$/, (_, kind) => `阅读间隔 — ${kind === 'min' ? '最短' : '最长'}`],
];

export function translate(value) {
  if (typeof value !== 'string') return value;
  const key = value.trim().replace(/\s+/g, ' ');
  const exact = messages[key];
  if (exact !== undefined) return value.replace(value.trim(), exact);
  for (const [pattern, render] of patterns) {
    const match = key.match(pattern);
    if (match) return value.replace(value.trim(), render(...match));
  }
  // 进度条的复合文案由分隔符连接，逐段匹配完整句式。
  if (key.includes(' · ')) {
    const result = key.split(' · ').map(part => translate(part)).join(' · ');
    if (result !== key) return value.replace(value.trim(), result);
  }
  return value;
}
