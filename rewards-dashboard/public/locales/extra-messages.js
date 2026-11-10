// 补齐后端活动名称、已知错误和容易被组合文案漏掉的状态。
export const extraMessages = Object.fromEntries(`
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
