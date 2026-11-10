"use strict";
const fs = require("node:fs");
const path = require("node:path");

function validateWebhook(value) {
  let u;
  try { u = new URL(value); } catch { throw Error("请填写完整的企业微信群机器人 Webhook 地址。"); }
  if (u.protocol !== "https:" || u.hostname !== "qyapi.weixin.qq.com" || u.port ||
      u.pathname !== "/cgi-bin/webhook/send" || u.username || u.password || u.hash ||
      !/^[A-Za-z0-9_-]{8,200}$/.test(u.searchParams.get("key") || "") ||
      [...u.searchParams.keys()].some(k => k !== "key") || u.searchParams.getAll("key").length !== 1) {
    throw Error("仅支持企业微信官方的群机器人 Webhook 地址。");
  }
  return u.href;
}
const states = {completed:"已完成",partial:"部分任务未完成",failed:"失败",cancelled:"已取消",interrupted:"已中断",done:"运行结束",stopped:"已停止",crashed:"异常退出",success:"运行结束",error:"失败",skipped:"已跳过"};
function summary(run, accounts, title = "Microsoft Rewards") {
  const lines = [title + "｜执行结果", "状态：" + (states[run.outcome] || states[run.status] || "结果未确认"),
    `已处理账号：${run.accountsProcessed ?? "未知"} / ${run.totalAccounts ?? "未知"}`,
    `本轮积分变化：${run.totalGained == null ? "未确认" : run.totalGained + " 分"}`,
    `耗时：${run.runtimeMin == null ? "未知" : Math.round(run.runtimeMin * 10) / 10 + " 分钟"}`,
    `结束时间：${run.endTs || "未知"}`];
  const start = Date.parse(run.startTs), end = Date.parse(run.endTs);
  for (const a of accounts) {
    const at = Date.parse(a.lastEndAt);
    if (!(at >= start && at <= end)) continue;
    // Never include raw error messages, tokens or authentication links in notifications.
    const label = String(a.email || a.userName || "账号").replace(/[\r\n]/g, " ");
    lines.push(`${label}：${states[a.lastOutcome] || (a.lastError ? "结果待核对" : "运行结束（未确认全部完成）")}；积分 ${a.lastGained == null ? "未确认" : a.lastGained}`);
  }
  lines.push("运行结束不代表所有活动均已完成；详情请查看面板。");
  let text = lines.join("\n");
  while (Buffer.byteLength(text, "utf8") > 1950) text = text.slice(0, -50);
  return text;
}

class WeCom {
  constructor({dir, fetchImpl = fetch, now = Date.now, title = "Microsoft Rewards"}) {
    this.file = path.join(dir, "wecom.json"); this.fetch = fetchImpl; this.now = now;
    this.title = title; this.started = now(); this.busy = false;
    this.state = {enabled:false, webhook:"", claimed:[], lastDelivery:null};
    if (fs.existsSync(this.file)) {
      try { Object.assign(this.state, JSON.parse(fs.readFileSync(this.file,"utf8"))); }
      catch { throw Error("企业微信通知配置读取失败，请检查 /data/wecom.json。"); }
    }
  }
  save() {
    fs.mkdirSync(path.dirname(this.file), {recursive:true});
    const temp = this.file + ".tmp";
    fs.writeFileSync(temp, JSON.stringify(this.state), {mode:0o600});
    fs.renameSync(temp, this.file);
    fs.chmodSync(this.file, 0o600);
  }
  publicConfig() {
    return {enabled:this.state.enabled, configured:!!this.state.webhook, lastDelivery:this.state.lastDelivery};
  }
  configure(patch) {
    if (typeof patch.enabled !== "boolean") throw Error("启用状态必须为布尔值。");
    const webhook = patch.clear === true ? "" : patch.webhook ? validateWebhook(patch.webhook) : this.state.webhook;
    if (patch.enabled && !webhook) throw Error("请先填写机器人 Webhook。");
    const enabledSince = patch.enabled && !this.state.enabled ? this.now() : this.state.enabledSince;
    this.state = {...this.state, enabled:patch.enabled, webhook, enabledSince}; this.save();
    return this.publicConfig();
  }
  async send(text) {
    if (!this.state.webhook) throw Error("尚未保存机器人 Webhook。");
    const url = validateWebhook(this.state.webhook);
    let response;
    try { response = await this.fetch(url, {method:"POST", redirect:"error", signal:AbortSignal.timeout(10000),
      headers:{"Content-Type":"application/json"}, body:JSON.stringify({msgtype:"text",text:{content:text}})}); }
    catch { throw Error("连接企业微信失败或超时，请检查面板容器的网络。"); }
    let result;
    try { result = await response.json(); } catch { throw Error("企业微信返回了无法识别的响应。"); }
    if (!response.ok || result.errcode !== 0) throw Error(`企业微信发送失败（HTTP ${response.status}，错误码 ${Number.isFinite(result.errcode) ? result.errcode : "未知"}）。`);
  }
  async test() { await this.send(this.title + "｜测试通知\n企业微信机器人连接正常。这是测试消息，不是任务执行结果。"); return {ok:true}; }
  async scan(runs, accounts) {
    if (this.busy || !this.state.enabled) return;
    this.busy = true;
    try {
      for (const run of [...runs].reverse()) {
        const end = Date.parse(run.endTs);
        // Skip historical SSE replays and let the controller's final verdict settle first.
        if (run.status === "running" || !Number.isFinite(end) || end < Math.max(this.started, this.state.enabledSince || 0) || this.now() - end < 5000 || this.state.claimed.includes(run.id)) continue;
        this.state.claimed = [...this.state.claimed,run.id].slice(-500);
        this.save(); // Claim before sending: restarts must not spam duplicate results.
        try {
          await this.send(summary(run, accounts, this.title));
          this.state.lastDelivery = {at:new Date(this.now()).toISOString(),ok:true,runId:run.id};
        } catch (e) {
          this.state.lastDelivery = {at:new Date(this.now()).toISOString(),ok:false,runId:run.id,error:e.message};
        }
        this.save();
      }
    } finally { this.busy = false; }
  }
}
module.exports = {WeCom, validateWebhook, summary};
