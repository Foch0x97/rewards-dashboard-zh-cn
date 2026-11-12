"use strict";
const STATES={completed:['完成','Completed'],partial:['部分完成','Partially completed'],failed:['失败','Failed'],cancelled:['已取消','Cancelled'],interrupted:['已中断','Interrupted'],done:['运行结束','Run ended'],stopped:['已停止','Stopped'],crashed:['异常退出','Crashed'],skipped:['已跳过','Skipped']};
const TASKS={
 search:['搜索任务','Search'], 'desktop-search':['电脑搜索','Desktop search'],'mobile-search':['手机搜索','Mobile search'],
 'mobile-search-quota':['手机搜索额度','Mobile search quota'],'desktop-search-quota':['电脑搜索额度','Desktop search quota'],
 'daily-set':['每日三项','Daily set'],'more-promotions':['更多活动','More promotions'],'punchcards':['任务卡','Punch cards'],
 'punchcard-child':['任务卡子任务','Punch card step'],'read-to-earn':['阅读赚积分','Read to Earn'],'daily-check-in':['每日签到','Daily check-in'],
 'bonus-claim':['额外奖励领取','Bonus point claim'],'claim-bonus-points':['额外奖励领取','Bonus point claim'],
 'search-perk':['搜索加成','Search perk'],'activate-search-perk':['搜索加成','Search perk'],'visual-search':['视觉搜索','Visual search'],
 'bonus-search':['额外搜索','Bonus search'],'bonus-searches':['额外搜索','Bonus searches'],'search-on-bing':['指定词搜索','Search on Bing'],
 'streak-protection':['连续签到保护','Streak protection'],'edge-browsing':['浏览器浏览奖励','Edge browsing'],'app-rewards':['应用奖励','App rewards'],
 'app-promotions':['应用活动','App promotions'],'earn-page':['积分任务页','Earn page'],'account-run':['账号运行','Account run'],
 'url-reward':['访问链接奖励','URL reward'],'punchcard':['任务卡','Punch card'],
 'browser-earn':['积分任务页','Earn page'],'ensure-streak-protection':['连续签到保护','Streak protection'],
};
const REASONS={
 'already-complete':['之前已完成','Already completed'],'offer-already-complete':['之前已完成','Already completed'],
 'already-active':['之前已激活','Already active'],'already-claimed':['之前已领取','Already claimed'],
 'already-completed':['之前已完成','Already completed'],'already-checked-in':['今天已签到','Already checked in today'],
 'quota-complete':['额度已完成','Quota already completed'],'quota-unavailable':['无法读取额度','Could not read quota'],
 'offer-progress-unchanged':['提交后进度未变化','No progress after submission'],'offer-not-confirmed':['未确认完成','Completion unconfirmed'],
 'claim-not-confirmed':['未确认领取成功','Claim unconfirmed'],'claimable-bonus-unknown':['无法确认可领取奖励','Claimable reward unknown'],
 'step-incomplete':['子任务未完成','Step incomplete'],'activation-data-unavailable':['无法读取活动数据','Activity data unavailable'],
 'activation-control-missing':['页面未找到激活按钮','Activation control missing'],'ambiguous-target':['无法确定正确按钮','Ambiguous target'],
 'search-attempt-limit-reached':['搜索重试已达上限','Search retry limit reached'],'activity-error':['执行出错','Activity failed'],
 'offer-not-actionable':['活动暂时无法执行','Activity not actionable'],'offer-hash-unavailable':['活动凭据未提供','Offer credential unavailable'],
 'offer-locked':['活动尚未解锁','Offer locked'],'offer-disabled':['活动已停用','Offer disabled'],
 'offer-not-yet-available':['活动尚未开放','Offer not yet available'],'worker-disabled':['未启用此任务','Worker disabled'],
 'not-offered':['账号未提供此活动','Not offered'],'not-applicable':['不适用此账号','Not applicable'],
 'no-search-perk':['账号没有搜索加成','No search perk'],'quota-available':['已读取额度','Quota available'],
};
const pick=(pair,zh)=>pair?.[zh?0:1];
function reasonText(detail,zh){
 if(REASONS[detail.reason])return pick(REASONS[detail.reason],zh);
 const raw=String(detail.message||detail.reason||'');
 if(/waitForURL|navigation|Timeout|deadline|timed? ?out/i.test(raw))return zh?'页面或接口等待超时':'Page or API timeout';
 if(/429|rate.limit/i.test(raw))return zh?'服务限制请求频率':'Rate limited';
 if(/503|502|service.unavailable/i.test(raw))return zh?'服务暂时不可用':'Service temporarily unavailable';
 if(/bot.score/i.test(raw))return zh?'账号触发自动化风险提示':'Account automation warning';
 if(/token|unauthor|authentication|login/i.test(raw))return zh?'登录或授权未通过':'Sign-in or authorization failed';
 if(/No search multiplier/i.test(raw))return zh?'账号没有搜索加成':'No search multiplier offered';
 if(/No streak protection days remain/i.test(raw))return zh?'保护天数已用完':'No streak protection days remain';
 if(detail.status==='failed')return zh?'执行失败，详情见面板':'Failed; see dashboard for details';
 if(detail.category==='notApplicable')return zh?'不适用或本次跳过，详情见面板':'Not applicable or skipped; see dashboard';
 if(detail.category==='unavailable')return zh?'未提供或暂不可用，详情见面板':'Not offered or unavailable; see dashboard';
 return zh?'结果未确认，详情见面板':'Unconfirmed; see dashboard for details';
}
function maskEmail(value){const [local,domain]=String(value||'').split('@');return domain?`${local.slice(0,3)}***${local.length>6?local.slice(-3):''}@${domain}`:String(value||'').slice(0,80);}
function taskName(d,zh){
 const key=String(d.activity||'').replace(/^do(?=[A-Z])/,'').replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();
 const name=pick(TASKS[key],zh)||(zh?'其他任务':String(d.label||d.activity||'Other activity'));
 const platform=String(d.platform||'').toLowerCase(),prefix=platform==='desktop'?(zh?'电脑端':'Desktop'):platform==='mobile'?(zh?'手机端':'Mobile'):'';
 const title=String(d.title||'').replace(/[\r\n]/g,' ').slice(0,100);
 return `${prefix?prefix+'·':''}${name}${title?'「'+title+'」':''}`;
}
function taskGroups(completion,zh){
 const groups={completed:[],already:[],issues:[],unavailable:[],skipped:[]},items=new Map();
 for(const category of ['completed','incomplete','unavailable','notApplicable'])for(const d of completion?.[category]||[]){
  if(d.activity==='browser-search-api-report')continue; // Reporting telemetry is not a separate task.
  const key=[d.activity,d.platform,d.offerId||d.title||d.label||''].join(':');
  const already=/already|quota-complete/.test(d.reason||'');
  const group=already?'already':category==='completed'?'completed':category==='unavailable'?'unavailable':category==='notApplicable'?'skipped':'issues';
  const prev=items.get(key);if(prev&&prev.group==='completed'&&group!=='completed')continue;
  items.set(key,{...d,category,group});
 }
 for(const d of items.values()){
  const points=d.pointsKnown===false||d.pointsGained==null?null:Number(d.pointsGained);
  const suffix=d.group==='completed'?(points==null?(zh?'（积分未确认）':' (points unconfirmed)'):`（+${points}${zh?'分':' pts'}）`):`（${reasonText(d,zh)}）`;
  groups[d.group].push(taskName(d,zh)+suffix);
 }
 return groups;
}
function summary(run,accounts,title='Microsoft Rewards',language='zh-CN',details=[]){
 const zh=language!=='en',unknown=zh?'未知':'Unknown';
 const lines=[`${title}｜${zh?'执行结果':'Run results'}`,`${zh?'本轮状态':'Run status'}：${pick(STATES[run.outcome||run.status],zh)||unknown}`,`${zh?'本轮积分':'Run points'}：${run.totalGained==null?unknown:'+'+run.totalGained}`];
 const start=Date.parse(run.startTs),end=Date.parse(run.endTs),byEmail=new Map();
 for(const e of details||[]){
  const began=Date.parse(e?.startedAt),ended=Date.parse(e?.endedAt);
  if(e?.email&&e.account&&Math.abs(began-start)<=10000&&ended>=start&&ended<=end+5000)byEmail.set(e.email.toLowerCase(),e);
 }
 const merged=new Map();
 for(const a of accounts||[])if(Date.parse(a.lastEndAt)>=start&&Date.parse(a.lastEndAt)<=end+5000)merged.set(a.email.toLowerCase(),a);
 for(const [email,e] of byEmail){const a=e.account;merged.set(email,{email,lastOutcome:a.status,lastGained:a.pointsKnown===false?null:a.collected,lastPoints:a.currentBalance,lastDurationSec:a.durationSeconds,...merged.get(email)});}
 let index=0;
 for(const [email,a] of merged){
  const detail=byEmail.get(email)?.account,groups=taskGroups(detail?.completion,zh);
  const status=pick(STATES[detail?.status||a.lastOutcome],zh)||(zh?'结果未确认':'Outcome unconfirmed');
  const gained=detail?(detail.pointsKnown===false?null:detail.collected):a.lastGained;
  const balance=detail?.currentBalance??a.lastPoints,duration=detail?.durationSeconds??a.lastDurationSec;
  lines.push('',`${++index}. ${maskEmail(email)}`,`  ${status}｜${zh?'本次':'This run'} ${gained==null?unknown:'+'+gained} ${zh?'积分':'pts'}｜${zh?'余额':'Balance'} ${balance??unknown}`,`  ${zh?'耗时':'Duration'} ${duration==null?unknown:(duration/60).toFixed(1)} ${zh?'分钟':'min'}`);
  if(!detail?.completion||!Object.values(groups).some(v=>v.length))lines.push(zh?'  任务明细：未返回本轮任务明细，不据此判断全部完成。':'  Tasks: no per-run details returned; completion cannot be inferred.');
  else for(const [group,label] of Object.entries({completed:zh?'本次完成':'Completed this run',already:zh?'之前已完成／领取':'Already completed / claimed',issues:zh?'未完成／有问题':'Incomplete / needs attention',unavailable:zh?'未提供／暂不可用':'Not offered / unavailable',skipped:zh?'不适用／已跳过':'Not applicable / skipped'})){
   if(groups[group].length)lines.push(`  ${label}：`,...groups[group].map(x=>'    • '+x));
  }
  const omitted=detail?.completion?.omitted;
  const omittedCount=typeof omitted==='number'?omitted:Object.values(omitted||{}).reduce((n,v)=>n+(Number(v)||0),0);
  if(omittedCount>0)lines.push(zh?`  上游另省略了 ${omittedCount} 条任务明细，无法列出这些任务。`:`  The bot omitted ${omittedCount} task details; those tasks cannot be listed.`);
 }
 if(!index)lines.push(zh?'未取得本轮账号结果，请查看面板。':'No account results available for this run; see dashboard.');
 lines.push('',zh?'运行结束不等于所有任务完成；未知积分不按零分计算。':'A run ending does not mean all tasks completed; unknown points are not treated as zero.');return lines.join('\n');
}
function splitNotificationText(text,maxBytes=1850){
 const chunks=[];let current='';
 for(const line of String(text).split('\n')){
  if(Buffer.byteLength(line,'utf8')>maxBytes){if(current){chunks.push(current);current='';}let piece='';for(const char of line){if(Buffer.byteLength(piece+char,'utf8')>maxBytes){chunks.push(piece);piece='';}piece+=char;}current=piece;continue;}
  if(Buffer.byteLength(current+(current?'\n':'')+line,'utf8')>maxBytes){chunks.push(current);current=line;}else current+=(current?'\n':'')+line;
 }
 if(current)chunks.push(current);return chunks;
}
module.exports={summary,splitNotificationText,taskGroups,reasonText,maskEmail};
