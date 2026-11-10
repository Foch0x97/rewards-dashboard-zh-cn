// 补齐后端活动名称、已知错误和容易被组合文案漏掉的状态。
export const extraMessages = Object.fromEntries(`
Execution result notifications|执行结果通知
Send one summary to each enabled channel after a run ends: outcome, accounts, points and duration. These settings are independent of the bot's log notifications.|每轮结束后，向各个已启用的渠道发送一条汇总，包含状态、账号、积分和耗时。此处设置独立于脚本的日志通知。
The dashboard service must stay running. Historical results are not resent after restart; failed deliveries are shown here without automatic retries.|面板服务需保持运行。重启后不补发历史结果；发送失败会显示在这里，不会自动重试。
Notification language|通知内容语言
Simplified Chinese|简体中文
WeCom group bot|企业微信机器人
DingTalk|钉钉
ServerChan Turbo|Server 酱 Turbo
Select a channel to edit its settings. Blank fields keep saved values. To replace optional fields with empty values, clear that channel and configure it again.|勾选渠道后可编辑配置，留空表示保留已保存的值。若要清空选填项，请先清除此渠道配置，再重新填写。
Official documentation|官方文档
WeCom bot webhook URL|企业微信机器人 Webhook 地址
Use the group bot webhook, not an enterprise application secret.|填写群机器人的 Webhook，不是企业应用的 Secret。
DingTalk bot webhook URL|钉钉机器人 Webhook 地址
Paste the original webhook URL. The dashboard generates timestamp and sign when a signing secret is saved.|填写原始 Webhook 地址。配置加签密钥后，面板会自动生成时间戳和签名。
DingTalk signing secret (optional)|钉钉加签密钥（选填）
Fill this in if signing is enabled for the bot.|机器人启用了加签时，填写 SEC 开头的密钥。
DingTalk keyword (optional)|钉钉关键词（选填）
If the bot requires a keyword, it will be prepended to test and result messages.|机器人要求关键词时填写，会加在测试通知和结果通知的开头。
Telegram bot token|Telegram 机器人令牌
Create a bot with BotFather and copy its token.|通过 BotFather 创建机器人，并复制其令牌。
Telegram chat ID|Telegram 会话 ID
Start a chat with the bot first, or add it to the destination group.|先给机器人发送消息，或将它加入目标群组。
ServerChan SendKey|Server 酱 SendKey
Supports ServerChan Turbo keys starting with SCT. ServerChan 3 keys are not supported.|支持 SCT 开头的 Server 酱 Turbo 密钥；暂不支持 Server 酱 3 的密钥。
Saved — leave blank to keep|已保存，留空保留
Channel configuration saved.|已保存此渠道配置。
Channel not configured.|尚未配置此渠道。
Last result delivery: accepted by provider.|上次结果推送：服务商已接受。
Last result delivery: failed.|上次结果推送：失败。
Send test notification|发送测试通知
Clear this channel's saved credentials and disable it|清除此渠道已保存的凭据并停用
Save result notifications|保存结果通知设置
Loading result notification settings…|正在读取结果通知设置…
Could not load result notification settings.|无法读取结果通知设置。
Saving result notification settings…|正在保存结果通知设置…
Result notification settings saved.|结果通知设置已保存。
Save your channel settings before sending a test.|请先保存渠道设置，再发送测试通知。
Sending test notification…|正在发送测试通知…
The provider accepted the test notification. Check the destination chat.|服务商已接受测试通知，请查看目标会话。
Enter a valid notification webhook URL.|请填写有效的通知 Webhook 地址。
Use the official HTTPS webhook URL without extra parameters.|请使用官方 HTTPS Webhook 地址，不要添加额外参数。
Enter a valid Telegram bot token.|请填写有效的 Telegram 机器人令牌。
Enter a Telegram chat ID or channel username.|请填写 Telegram 会话 ID 或频道用户名。
Enter a ServerChan Turbo SendKey starting with SCT.|请填写 SCT 开头的 Server 酱 Turbo SendKey。
Enter the DingTalk signing secret starting with SEC.|请填写 SEC 开头的钉钉加签密钥。
Use a single-line DingTalk keyword of up to 80 characters.|钉钉关键词不能换行，且不能超过 80 个字符。
Unknown result notification channel.|未知的结果通知渠道。
Result notification configuration is invalid.|结果通知配置无效。
Invalid result notification settings.|结果通知设置格式无效。
Invalid result notification channel settings.|结果通知渠道设置无效。
Invalid notification field value.|通知字段值无效。
Fill in the required fields before enabling this channel.|请先填写必填项，再启用此渠道。
Could not save result notification settings. Check data directory permissions.|无法保存结果通知设置，请检查数据目录权限。
Save this channel configuration before testing.|请先保存此渠道配置，再发送测试通知。
Notification request failed or timed out. Check the dashboard network.|通知请求失败或超时，请检查面板容器网络。
Notification provider returned an invalid response.|通知服务商返回了无法识别的响应。
Use a JSON request.|请使用 JSON 请求。
Cross-site notification settings requests are not allowed.|不允许跨站修改通知配置。
Method not allowed.|不支持的请求方式。
Legacy WeCom delivery failed. Send a test for current details.|旧版企微通知发送失败，请发送测试通知获取当前状态。
Searches|搜索任务
Mobile search quota|手机搜索额度
Account run|账号运行
Promotions|奖励活动
More Promos|更多活动
Earn Page|积分任务页
Daily Check-in|每日签到
Bonus Claim|领取额外奖励
App Rewards|App 奖励
Other|其他
Bonus search|额外搜索
Search on Bing|Bing 搜索
Bonus claim|领取额外奖励
Reward claim|领取奖励
App reward|App 奖励
Punch card|任务卡
high bot score|自动化风险评分过高
service rate limit|服务请求触发限流
access rejected|账号访问被拒绝
service rejected account access|服务拒绝了账号访问
No data yet.|暂无数据。
Log display|日志显示
Chinese explanation|中文说明
Original logs|原始日志
Chinese and original|中文与原文
Download original logs|导出原始日志
Download bilingual logs|导出双语日志
Log explanations are generated locally. Unrecognized messages remain unchanged. Original logs are always preserved.|日志在本机按已知句式生成中文说明；未识别的内容保留原文，原始日志始终保留。
Point total over time|积分余额变化趋势
🔑 Login approval needed|🔑 需要确认登录
Syncing…|正在补齐配置…
Config writes are disabled on the control API. Set|控制接口未允许修改配置，请在脚本环境中设置
in the bot’s environment and restart it.|，然后重新启动脚本容器。
The control API refused to reveal secrets. Set|控制接口不允许显示敏感配置。请设置
(and an|，并设置
) on it to enable this.|后再使用此功能。
That change would write|此次修改会将
over a real secret. Enable|写入并覆盖真实密钥。请先启用
on the control API and tick “Reveal secrets” first.|，并勾选“显示敏感配置”后再编辑。
Could not read this scheduler’s current state. It will refresh automatically — if this persists, check that the bot's Control API is reachable and API_ALLOW_SCHEDULE_WRITE is set if you want to edit it from here.|无法读取当前定时器状态，页面会自动重试。如果持续失败，请检查脚本控制接口是否可连接；如需在此修改容器定时，还应设置 API_ALLOW_SCHEDULE_WRITE。
recommended webhook filter|推荐的通知筛选规则
whitelist|白名单
started|已启动
started after dashboard restart|面板重启后已启动任务
skipped (a run was already in progress)|已有任务运行，本次已跳过
skipped (the API already had a run active)|控制接口已有任务运行，本次已跳过
missed run skipped after dashboard restart|面板重启后已跳过错过的任务
Control API request timed out|控制接口请求超时
Control API unreachable|无法连接控制接口
Invalid missed-run policy.|补跑策略无效。
Missed-run grace must be between 1 and 1440 minutes.|补跑时限须在 1–1440 分钟之间。
Excluded accounts must be an array of account indexes.|排除账号须填写为账号序号数组。
Excluded accounts must contain only positive account indexes.|排除账号的序号必须为正整数。
Missing account email|缺少账号邮箱
Invalid diagnostics path|诊断文件路径无效
Request body too large|提交的数据过大
Invalid JSON body|提交的数据不是有效的 JSON
Unknown control action|不支持的控制操作
Not found|未找到请求的内容
Forbidden|没有访问权限
Authentication required|请先登录
request failed|请求失败
Needs 5 fields: minute hour day-of-month month day-of-week.|需要五段式 Cron：分钟 小时 日 月 星期。
Invalid cron expression (needs 5 fields).|Cron 表达式无效，需要填写五段。
Invalid cron expression (5 fields, e.g. "0 9 * * *").|Cron 表达式无效，请填写五段，例如“0 9 * * *”。
Control API rejected our token - CONTROL_API_TOKEN must match the API's API_TOKEN.|控制接口拒绝了令牌，请确认 CONTROL_API_TOKEN 与脚本的 API_TOKEN 一致。
Control API requires a token - set CONTROL_API_TOKEN to the same value as its API_TOKEN.|控制接口要求令牌，请将 CONTROL_API_TOKEN 设为与脚本 API_TOKEN 相同的值。
The bot's Control API does not support remote scheduling. Upgrade the bot image and set API_ALLOW_SCHEDULE_WRITE=true, or use the dashboard's own scheduler instead.|脚本控制接口不支持远程定时。请更新脚本镜像并设置 API_ALLOW_SCHEDULE_WRITE=true，或使用面板定时。
Run completed, but this account's own result was never logged (its worker likely failed silently).|本轮运行已结束，但未记录到此账号的结果；其执行进程可能发生了未上报的故障。
Microsoft bot-score warning detected|检测到微软自动化风险警告
mobile|手机端
desktop|电脑端
App|App
`.trim().split('\n').map(line => {
  const i = line.indexOf('|');
  return [line.slice(0,i),line.slice(i+1)];
}));
