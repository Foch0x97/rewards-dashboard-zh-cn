// 只匹配面板自己生成的完整句式。变量（邮箱、路径、错误详情）保持原样。
const outcomes = {completed:'已完成',partial:'部分任务未完成',failed:'失败',cancelled:'已取消',interrupted:'已中断'};
const time24 = text => text.replace(/(\d{1,2}):(\d{2}) (AM|PM)/g, (_, h, m, p) => `${String(Number(h) % 12 + (p === 'PM' ? 12 : 0)).padStart(2,'0')}:${m}`).replace(/,? and /g, '、');
const weekdays = text => text.replace(/Sun|Mon|Tue|Wed|Thu|Fri|Sat/g, d => ({Sun:'周日',Mon:'周一',Tue:'周二',Wed:'周三',Thu:'周四',Fri:'周五',Sat:'周六'})[d]);
const rules = [
  [/^Notification rejected \(HTTP (\d+), code (\d+|unknown)\)\.$/, (_, http, code) => `通知被服务商拒绝（HTTP ${http}，错误码 ${code==='unknown'?'未知':code}）。`],
  [/^(Login approval needed for .+?: select number \d+\. Expires in 60 seconds\.) (Login approval needed for .+)$/, (_, first, rest, t) => `${t(first)} ${t(rest)}`],
  [/^Microsoft Rewards Dashboard:(.+)$/, (_, v) => `Microsoft Rewards 管理面板：${v === 'Development' ? '开发版' : v}`],
  [/^pid (\d+)$/, (_, n) => `进程号 ${n}`],
  [/^last exit: code (\S+)(?: \/ (\S+))?$/, (_, n, signal) => `上次退出：退出码 ${n === 'n/a' ? '未知' : n}${signal ? `，信号 ${signal}` : ''}`],
  [/^(start|stop|restart|shutdown) sent\.$/, (_, action) => `已发送${({start:'启动',stop:'停止',restart:'重新运行',shutdown:'关闭'})[action]}请求。`],
  [/^Removed (.+) from the dashboard\.$/, (_, email) => `已移除 ${email} 在面板中的记录。`],
  [/^Streak protection (on|off)$/, (_, state) => `连续签到保护${state === 'on' ? '已开启' : '已关闭'}`],
  [/^Streak protection is (on|off); (.+)$/, (_, state, days, t) => `连续签到保护${state === 'on' ? '已开启' : '已关闭'}；${t(days)}`],
  [/^(.+) \(authenticated\)$/, (_, address) => `${address}（已配置身份验证）`],
  [/^Script reported: (completed|partial|failed|cancelled|interrupted)$/, (_, result) => `脚本上报：${outcomes[result]}`],
  [/^([\d,]+) (ok|stopped|failed)$/, (_, n, state) => `${n} 个${({ok:'成功',stopped:'已停止',failed:'失败'})[state]}`],
  [/^([\d,]+) lines? buffered$/, (_, n) => `已缓存 ${n} 条日志`],
  [/^Buffer filled to ([\d,]+) lines\.$/, (_, n) => `已加载，共缓存 ${n} 条日志。`],
  [/^Remove (.+)$/, (_, value) => `移除 ${value}`],
  [/^Saved: (.+)\. Applies on the next run\.$/, (_, detail, t) => `已保存：${t(detail)}。下次运行生效。`],
  [/^([\d,]+) fields?$/, (_, n) => `${n} 个配置项`],
  [/^([\w.]+) → ([\d,]+) items?$/, (_, key, n) => `${key} → ${n} 项`],
  [/^(?:— )?([\d,]+) fields? added in a recent script update:$/, (_, n) => `— 脚本更新新增了 ${n} 个配置项：`],
  [/^Synced ([\d,]+) fields?\. Applies on the next run\.$/, (_, n) => `已补齐 ${n} 个配置项，下次运行生效。`],
  [/^([\d,]+) captures? in (.+)$/, (_, n, dir) => `${n} 份故障现场，保存在 ${dir}`],
  [/^Screenshot captured when (.+) failed$/, (_, name) => `${name} 出错时保存的截图`],
  [/^updated (.+)$/, (_, when, t) => `更新于${t(when)}`],
  [/^Sessions cleared for (.+)\.$/, (_, email) => `已清除 ${email} 的登录会话。`],
  [/^Clear stored sessions for (.+)\? This logs the account out immediately — it will need to sign back in \(and re-approve 2FA if used\) on its next run\.$/, (_, email) => `确定清除 ${email} 的登录会话？\n\n该账号会立即退出登录，下次运行需要重新登录；启用了双重验证时，还需再次确认。`],
  [/^(\d+\/\d+) complete$/, (_, progress) => `${progress}，已完成`],
  [/^(\d+) locked$/, (_, n) => `${n} 项尚未解锁`],
  [/^([+\-]?[\d,.]+) of ([\d,.]+) pts$/, (_, gained, total) => `已获 ${gained} 分，共 ${total} 分`],
  [/^(.+): (\d+\/\d+(?: complete)?(?: · .+)?)( \(as of .+\))?$/, (_, title, progress, asOf, t) => `${title}：${t(progress)}${asOf ? t(asOf) : ''}`],
  [/^(.+?) \(as of (.+)\)$/, (_, detail, when, t) => `${t(detail)}（截至 ${when}）`],
  [/^(.+): day (\d+) of (\d+)$/, (_, label, n, total) => `${label}：第 ${n} 天，共 ${total} 天`],
  [/^Gained, but the script did not tie these to an activity \(for example punch card steps\)$/, () => '已获取积分，但脚本未注明对应活动（例如任务卡中的步骤）。'],
  [/^Gained, but the script did not tie these to an activity; about ([\d,]+) lines up with the unreported activities above \(balance change\)$/, (_, n) => `已获取积分，但脚本未注明对应活动；根据余额变化，其中约 ${n} 分可能来自上述未上报积分的活动。`],
  [/^Microsoft showed a bot-score warning on this account, so the script skipped it and attempted no activities\.(?: Last attempt (.+)\.)?$/, (_, when, t) => `微软向此账号显示了自动化风险警告，因此脚本跳过了该账号，未执行任何活动。${when ? `上次尝试：${t(when)}。` : ''}`],
  [/^The script reported: (.+?)\.(?: Last attempt (.+)\.)?$/, (_, reason, when, t) => `脚本上报：${t(reason)}。${when ? `上次尝试：${t(when)}。` : ''}`],
  [/^(.+) \(latest\)( · .+)?$/, (_, date, points, t) => `${date}（最近）${points ? ` · ${t(points.slice(3))}` : ''}`],
  [/^(\d+)\/(\d+) reports$/, (_, n, total) => `已上报 ${n}/${total} 次`],
  [/^\? days? left$/, () => '剩余天数未知'],
  [/^Running… (.+)$/, (_, when, t) => `运行中，${t(when)}开始`],
  [/^(.+) \(((?:\d+m|\d+h(?: \d+m)?|\d+d(?: \d+h)?) ago|just now)\)$/, (_, date, when, t) => `${date}（${t(when)}）`],
  [/^((?:Daily|Weekdays|Weekends|Every|Sun|Mon|Tue|Wed|Thu|Fri|Sat).+) \+ ((?:Daily|Weekdays|Weekends|Every|Sun|Mon|Tue|Wed|Thu|Fri|Sat).+)$/, (_, first, second, t) => `${t(first)}；${t(second)}`],
  [/^(.+): ([+\-]?[\d,.]+) points( \(.+\))?$/, (_, date, n, extra) => `${date}：${n} 分${extra || ''}`],
  [/^(.+) ([+\-]?[\d,.]+) pts Total ([\d,.]+)$/, (_, date, gained, total) => `${date}\n${gained} 分\n总积分 ${total}`],
  [/^Week of (.+): ([+\-]?[\d,.]+) pts$/, (_, date, n) => `${date} 所在周：${n} 分`],
  [/^Gap: (\d+) missed days?$/, (_, n) => `缺少 ${n} 天的运行记录`],
  [/^(.+?)( \(today\))?: ([+\-]?[\d,.]+) pts \(total: ([\d,.]+)\)$/, (_, date, today, n, total) => `${date}${today ? '（今天）' : ''}：${n} 分（总积分 ${total}）`],
  [/^Every (\d+) (minute|hour)s?$/, (_, n, unit) => `每 ${n} ${unit === 'minute' ? '分钟' : '小时'}`],
  [/^Daily at (.+)$/, (_, time) => `每天 ${time24(time)}`],
  [/^Weekdays at (.+)$/, (_, time) => `周一至周五 ${time24(time)}`],
  [/^Weekends at (.+)$/, (_, time) => `周六、周日 ${time24(time)}`],
  [/^((?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)(?:, (?:Sun|Mon|Tue|Wed|Thu|Fri|Sat))*) at (.+)$/, (_, days, time) => `${weekdays(days)} ${time24(time)}`],
  [/^Every (\d+) day\(s\) of the week at (.+)$/, (_, n, time) => `每周按 ${n} 天间隔，在 ${time24(time)} 运行`],
  [/^missed run skipped \(outside (\d+)-minute grace period\)$/, (_, n) => `已跳过错过的任务：超过 ${n} 分钟补跑时限`],
  [/^failed: (.+)$/, (_, error) => `启动失败：${error}`],
  [/^Bad Control API URL: (.+)$/, (_, error) => `控制接口地址无效：${error}`],
  [/^Status unavailable \((.+)\)$/, (_, error) => `无法读取运行状态（${error}）`],
  [/^Control API (\/\S+) -> (\d+)$/, (_, path, code) => `控制接口 ${path} 返回 HTTP ${code}`],
  [/^Run (stalled|stopped|interrupted|crashed) before this account finished$/, (_, state) => `账号尚未执行完毕，本轮运行已${({stalled:'停滞',stopped:'停止',interrupted:'中断',crashed:'异常退出'})[state]}`],
];

export function translateDynamic(key, translate) {
  for (const [pattern, render] of rules) {
    const match = key.match(pattern);
    if (match) return render(...match, translate);
  }
  return null;
}
