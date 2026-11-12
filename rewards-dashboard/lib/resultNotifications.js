"use strict";
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {summary,splitNotificationText}=require('./resultSummary');

const PROVIDERS = {
  wecom: {fields:['webhook'], required:['webhook']},
  dingtalk: {fields:['webhook','secret','keyword'], required:['webhook']},
  telegram: {fields:['botToken','chatId'], required:['botToken','chatId']},
  serverchan: {fields:['sendKey'], required:['sendKey']},
  feishu: {fields:['webhook','secret','keyword'], required:['webhook']},
  pushplus: {fields:['token','topic'], required:['token']},
  bark: {fields:['serverUrl','deviceKey'], required:['deviceKey']},
  gotify: {fields:['serverUrl','token','priority'], required:['serverUrl','token']},
  discord: {fields:['webhook'], required:['webhook']},
  ntfy: {fields:['serverUrl','topic','token','priority'], required:['topic']},
};
const isZh = language => language !== 'en';
function validateHook(value, provider) {
  let u;try{u=new URL(value);}catch{throw Error('Enter a valid notification webhook URL.');}
  if(provider==='feishu'||provider==='discord'){
    const feishu=provider==='feishu';
    const hosts=feishu?['open.feishu.cn','open.larksuite.com']:['discord.com','discordapp.com'];
    const route=feishu?/^\/open-apis\/bot\/v2\/hook\/[A-Za-z0-9_-]{8,200}$/:/^\/api(?:\/v\d+)?\/webhooks\/\d+\/[A-Za-z0-9_-]{10,256}$/;
    if(u.protocol!=='https:'||!hosts.includes(u.hostname)||u.port||!route.test(u.pathname)||u.username||u.password||u.hash||u.search)
      throw Error('Use the official HTTPS webhook URL without extra parameters.');
    return u.href;
  }
  const wecom=provider==='wecom',host=wecom?'qyapi.weixin.qq.com':'oapi.dingtalk.com',endpoint=wecom?'/cgi-bin/webhook/send':'/robot/send',key=wecom?'key':'access_token';
  if(u.protocol!=='https:'||u.hostname!==host||u.port||u.pathname!==endpoint||u.username||u.password||u.hash||
    !/^[A-Za-z0-9_-]{8,200}$/.test(u.searchParams.get(key)||'')||
    [...u.searchParams.keys()].some(k=>k!==key)||u.searchParams.getAll(key).length!==1)
    throw Error('Use the official HTTPS webhook URL without extra parameters.');
  return u.href;
}
function serverBase(value){
  let u;try{u=new URL(value);}catch{throw Error('Enter a valid HTTP or HTTPS notification server URL.');}
  if(!['http:','https:'].includes(u.protocol)||u.username||u.password||u.hash||u.search)throw Error('Use a server base URL without credentials, query parameters or fragments.');
  // Explicit administrator-selected self-hosted endpoints may be on a private LAN.
  return u.href.replace(/\/+$/,'');
}
function validateFields(provider, fields) {
  if(fields.webhook)fields.webhook=validateHook(fields.webhook,provider);
  if(fields.botToken&&!/^\d+:[A-Za-z0-9_-]{10,200}$/.test(fields.botToken))throw Error('Enter a valid Telegram bot token.');
  if(fields.chatId&&!/^(?:-?\d+|@[A-Za-z0-9_]{5,})$/.test(fields.chatId))throw Error('Enter a Telegram chat ID or channel username.');
  if(fields.sendKey&&!/^SCT[A-Za-z0-9_-]{8,200}$/.test(fields.sendKey))throw Error('Enter a ServerChan Turbo SendKey starting with SCT.');
  if(fields.secret&&provider==='dingtalk'&&!/^SEC[A-Za-z0-9]{8,200}$/.test(fields.secret))throw Error('Enter the DingTalk signing secret starting with SEC.');
  if(fields.secret&&provider==='feishu'&&!/^[A-Za-z0-9+/_=-]{8,256}$/.test(fields.secret))throw Error('Enter a valid Feishu signing secret.');
  if(fields.keyword&&(/[\r\n]/.test(fields.keyword)||fields.keyword.length>80))throw Error('Use a single-line bot keyword of up to 80 characters.');
  if(fields.serverUrl)fields.serverUrl=serverBase(fields.serverUrl);
  if(fields.token&&!/^[A-Za-z0-9._~+-]{8,256}$/.test(fields.token))throw Error('Enter a valid notification access token.');
  if(fields.deviceKey&&!/^[A-Za-z0-9_-]{4,256}$/.test(fields.deviceKey))throw Error('Enter a valid Bark device key.');
  if(fields.topic&&provider==='ntfy'&&!/^[A-Za-z0-9_-]{1,64}$/.test(fields.topic))throw Error('Use an ntfy topic with 1 to 64 letters, numbers, underscores or hyphens.');
  if(fields.topic&&provider==='pushplus'&&(/[\r\n]/.test(fields.topic)||fields.topic.length>100))throw Error('Use a PushPlus group code of up to 100 characters.');
  if(fields.priority&&(!/^\d+$/.test(fields.priority)||Number(fields.priority)<(provider==='ntfy'?1:0)||Number(fields.priority)>(provider==='ntfy'?5:10)))throw Error('Use priority 1–5 for ntfy or 0–10 for Gotify.');
  return fields;
}
function requestFor(provider, fields, text, now=Date.now()) {
  const options={method:'POST',redirect:'error',signal:AbortSignal.timeout(10000),headers:{'Content-Type':'application/json'}};
  let url,body;
  if(provider==='wecom'){url=validateHook(fields.webhook,provider);body={msgtype:'text',text:{content:text}};}
  else if(provider==='dingtalk'){
    const u=new URL(validateHook(fields.webhook,provider));
    if(fields.secret){const timestamp=String(now);u.searchParams.set('timestamp',timestamp);u.searchParams.set('sign',crypto.createHmac('sha256',fields.secret).update(timestamp+'\n'+fields.secret).digest('base64'));}
    url=u.href;body={msgtype:'text',text:{content:(fields.keyword?fields.keyword+'\n':'')+text}};
  }else if(provider==='telegram'){
    url=`https://api.telegram.org/bot${fields.botToken}/sendMessage`;body={chat_id:fields.chatId,text};
  }else if(provider==='serverchan'){
    url=`https://sctapi.ftqq.com/${fields.sendKey}.send`;
    options.headers['Content-Type']='application/x-www-form-urlencoded';
    options.body=new URLSearchParams({title:Array.from(text.split('\n')[0]).slice(0,32).join(''),desp:text}).toString();
  }else if(provider==='feishu'){
    url=validateHook(fields.webhook,provider);body={msg_type:'text',content:{text:(fields.keyword?fields.keyword+'\n':'')+text}};
    if(fields.secret){body.timestamp=String(Math.floor(now/1000));body.sign=crypto.createHmac('sha256',body.timestamp+'\n'+fields.secret).update('').digest('base64');}
  }else if(provider==='pushplus'){
    url='https://www.pushplus.plus/send';body={token:fields.token,title:text.split('\n')[0],content:text,template:'txt',...(fields.topic?{topic:fields.topic}:{})};
  }else if(provider==='bark'){
    url=serverBase(fields.serverUrl||'https://api.day.app')+'/push';body={device_key:fields.deviceKey,title:text.split('\n')[0],body:text};
  }else if(provider==='gotify'){
    url=serverBase(fields.serverUrl)+'/message';options.headers['X-Gotify-Key']=fields.token;body={title:text.split('\n')[0],message:text,priority:Number(fields.priority||5)};
  }else if(provider==='discord'){
    const u=new URL(validateHook(fields.webhook,provider));u.searchParams.set('wait','true');url=u.href;body={content:Array.from(text).slice(0,2000).join(''),allowed_mentions:{parse:[]}};
  }else if(provider==='ntfy'){
    url=serverBase(fields.serverUrl||'https://ntfy.sh')+'/';if(fields.token)options.headers.Authorization='Bearer '+fields.token;
    body={topic:fields.topic,title:text.split('\n')[0],message:text,priority:Number(fields.priority||3)};
  }else throw Error('Unknown result notification channel.');
  if(body)options.body=JSON.stringify(body);
  return {url,options};
}
class ResultNotifications {
  constructor({dir,fetchImpl=fetch,now=Date.now,title='Microsoft Rewards'}){
    this.file=path.join(dir,'result-notifications.json');this.fetch=fetchImpl;this.now=now;this.title=title;this.started=now();this.busy=false;
    this.state={version:1,language:'zh-CN',channels:Object.fromEntries(Object.keys(PROVIDERS).map(id=>[id,{enabled:false,fields:{},claimed:[],lastDelivery:null}]))};
    if(fs.existsSync(this.file)){
      const saved=JSON.parse(fs.readFileSync(this.file,'utf8'));
      if(saved.version!==1||!saved.channels||!['en','zh-CN'].includes(saved.language))throw Error('Result notification configuration is invalid.');
      this.state.language=saved.language;
      for(const id of Object.keys(PROVIDERS))if(saved.channels[id])Object.assign(this.state.channels[id],saved.channels[id]);
    }else{
      const old=path.join(dir,'wecom.json');
      if(fs.existsSync(old)){
        const saved=JSON.parse(fs.readFileSync(old,'utf8'));
        const lastDelivery=saved.lastDelivery?{...saved.lastDelivery,...(saved.lastDelivery.error?{error:'Legacy WeCom delivery failed. Send a test for current details.'}:{})}:null;
        this.state.channels.wecom={enabled:!!saved.enabled,fields:{webhook:saved.webhook||''},enabledSince:saved.enabledSince,claimed:saved.claimed||[],lastDelivery};
        this.save(); // Keep the old file untouched; migrate once and preserve delivery history.
      }
    }
  }
  save(){fs.mkdirSync(path.dirname(this.file),{recursive:true});const temp=this.file+'.tmp';fs.writeFileSync(temp,JSON.stringify(this.state),{mode:0o600});fs.renameSync(temp,this.file);fs.chmodSync(this.file,0o600);}
  publicConfig(){return {language:this.state.language,channels:Object.fromEntries(Object.entries(this.state.channels).map(([id,c])=>[id,{enabled:c.enabled,configured:PROVIDERS[id].required.every(k=>!!c.fields[k]),savedFields:Object.fromEntries(PROVIDERS[id].fields.map(k=>[k,!!c.fields[k]])),lastDelivery:c.lastDelivery}]))};}
  configure(patch){
    if(!patch||!['en','zh-CN'].includes(patch.language)||!patch.channels||Array.isArray(patch.channels))throw Error('Invalid result notification settings.');
    const next=structuredClone(this.state);next.language=patch.language;
    for(const [id,p] of Object.entries(patch.channels)){
      if(!Object.hasOwn(PROVIDERS,id)||!p||typeof p.enabled!=='boolean'||(p.fields&&typeof p.fields!=='object'))throw Error('Invalid result notification channel settings.');
      const c=next.channels[id];
      if(p.clear===true){c.enabled=false;c.fields={};continue;}
      for(const k of PROVIDERS[id].fields){
        if(p.fields?.[k]!==undefined){
          if(typeof p.fields[k]!=='string'||p.fields[k].length>1024)throw Error('Invalid notification field value.');
          if(p.fields[k].trim())c.fields[k]=p.fields[k].trim(); // Blank means preserve, never return stored credentials.
        }
      }
      validateFields(id,c.fields);
      if(p.enabled&&!PROVIDERS[id].required.every(k=>!!c.fields[k]))throw Error('Fill in the required fields before enabling this channel.');
      if(p.enabled&&!c.enabled)c.enabledSince=this.now();c.enabled=p.enabled;
    }
    const previous=this.state;this.state=next;try{this.save();}catch{this.state=previous;throw Error('Could not save result notification settings. Check data directory permissions.');}
    return this.publicConfig();
  }
  async send(id,text){
    if(!Object.hasOwn(PROVIDERS,id))throw Error('Unknown result notification channel.');
    const c=this.state.channels[id];if(!PROVIDERS[id].required.every(k=>!!c.fields[k]))throw Error('Save this channel configuration before testing.');
    validateFields(id,{...c.fields});const {url,options}=requestFor(id,c.fields,text,this.now());
    let response,result;try{response=await this.fetch(url,options);}catch{throw Error('Notification request failed or timed out. Check the dashboard network.');}
    try{result=await response.json();}catch{throw Error('Notification provider returned an invalid response.');}
    const accepted={
      telegram:()=>result.ok===true,serverchan:()=>result.code===0,feishu:()=>result.code===0,
      pushplus:()=>result.code===200,bark:()=>result.code===200,
      gotify:()=>Number.isInteger(result.id)&&result.id>0,
      discord:()=>typeof result.id==='string'&&/^\d+$/.test(result.id),
      ntfy:()=>result.event==='message'&&typeof result.id==='string'&&!!result.id,
      wecom:()=>result.errcode===0,dingtalk:()=>result.errcode===0,
    };
    const ok=result&&typeof result==='object'&&!Array.isArray(result)&&accepted[id]();
    if(!response.ok||!ok){const code=result?.error_code??result?.errcode??result?.code;throw Error(`Notification rejected (HTTP ${response.status}, code ${Number.isFinite(code)?code:'unknown'}).`);}
  }
  async test(id){
    const zh=isZh(this.state.language);
    await this.send(id,`${this.title} ${zh?'｜测试通知':'| Test notification'}\n${zh?'通知渠道连接测试。这是测试消息，不是任务执行结果。':'Notification channel test. This is not a task execution result.'}`);
    return {ok:true};
  }
  async scan(runs,accounts,detailsForRun=()=>[]){
    if(this.busy||!Object.values(this.state.channels).some(c=>c.enabled))return;this.busy=true;
    try{
      for(const run of [...runs].reverse()){
        const end=Date.parse(run.endTs);
        if(run.status==='running'||!Number.isFinite(end)||end<this.started||this.now()-end<5000)continue;
        const pending=Object.entries(this.state.channels).filter(([,c])=>c.enabled&&end>=(c.enabledSince||0)&&!c.claimed.includes(run.id));
        if(!pending.length)continue;
        let details=[];try{details=await detailsForRun(run);}catch{console.warn('[notifications] Per-run activity details unavailable; sending an overview with an explicit missing-details note.');}
        const chunks=splitNotificationText(summary(run,accounts,this.title,this.state.language,details));
        for(const [id,c] of pending){
          c.claimed=[...c.claimed,run.id].slice(-500);this.save();
          let partsSent=0;
          try{for(let i=0;i<chunks.length;i++){await this.send(id,(chunks.length>1?`${this.title.slice(0,50)} [${i+1}/${chunks.length}]\n`:'')+chunks[i]);partsSent++;}c.lastDelivery={at:new Date(this.now()).toISOString(),ok:true,runId:run.id,partsSent,partsTotal:chunks.length};}
          catch(e){c.lastDelivery={at:new Date(this.now()).toISOString(),ok:false,runId:run.id,error:e.message,partsSent,partsTotal:chunks.length};}
          this.save();
        }
      }
    }finally{this.busy=false;}
  }
}
module.exports={ResultNotifications,PROVIDERS,validateHook,requestFor,summary};
