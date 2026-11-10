import {escapeHtml as esc,escapeAttr as attr} from '../util.js';

export const resultChannels = [
 {id:'wecom',name:'WeCom group bot',docs:'https://developer.work.weixin.qq.com/document/path/91770',fields:[
  {key:'webhook',label:'WeCom bot webhook URL',hint:'Use the group bot webhook, not an enterprise application secret.',placeholder:'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=…'}]},
 {id:'dingtalk',name:'DingTalk',docs:'https://open.dingtalk.com/document/robots/custom-robot-access',fields:[
  {key:'webhook',label:'DingTalk bot webhook URL',hint:'Paste the original webhook URL. The dashboard generates timestamp and sign when a signing secret is saved.',placeholder:'https://oapi.dingtalk.com/robot/send?access_token=…'},
  {key:'secret',label:'DingTalk signing secret (optional)',hint:'Fill this in if signing is enabled for the bot.',placeholder:'SEC…'},
  {key:'keyword',label:'DingTalk keyword (optional)',hint:'If the bot requires a keyword, it will be prepended to test and result messages.',type:'text'}]},
 {id:'telegram',name:'Telegram',docs:'https://core.telegram.org/bots/api#sendmessage',fields:[
  {key:'botToken',label:'Telegram bot token',hint:'Create a bot with BotFather and copy its token.',placeholder:'123456:…'},
  {key:'chatId',label:'Telegram chat ID',hint:'Start a chat with the bot first, or add it to the destination group.',placeholder:'-100…',type:'text'}]},
 {id:'serverchan',name:'ServerChan Turbo',docs:'https://sct.ftqq.com/sendkey/',fields:[
  {key:'sendKey',label:'ServerChan SendKey',hint:'Supports ServerChan Turbo keys starting with SCT. ServerChan 3 keys are not supported.',placeholder:'SCT…'}]},
 {id:'feishu',name:'Feishu / Lark',docs:'https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot',fields:[
  {key:'webhook',label:'Feishu bot webhook URL',hint:'Use a Feishu or Lark custom bot webhook.',placeholder:'https://open.feishu.cn/open-apis/bot/v2/hook/…'},
  {key:'secret',label:'Feishu signing secret (optional)',hint:'Fill this in if signature verification is enabled for the bot.'},
  {key:'keyword',label:'Feishu keyword (optional)',hint:'The keyword is included in test and result messages if provided.',type:'text'}]},
 {id:'pushplus',name:'PushPlus',docs:'https://www.pushplus.plus/doc/guide/api.html',fields:[
  {key:'token',label:'PushPlus token',hint:'Copy your user token or message token from PushPlus.'},
  {key:'topic',label:'PushPlus group code (optional)',hint:'Leave blank to send to yourself; fill in the group code for group delivery.',type:'text'}]},
 {id:'bark',name:'Bark',docs:'https://bark.day.app/#/tutorial',fields:[
  {key:'deviceKey',label:'Bark device key',hint:'Copy the device key from the Bark app, without the server URL.'},
  {key:'serverUrl',label:'Bark server URL (optional)',hint:'Defaults to https://api.day.app. You may use your self-hosted HTTP or HTTPS base URL.',placeholder:'https://api.day.app',type:'text'}]},
 {id:'gotify',name:'Gotify',docs:'https://gotify.net/docs/pushmsg',fields:[
  {key:'serverUrl',label:'Gotify server URL',hint:'Use the HTTP or HTTPS base URL, including a reverse proxy path if needed.',placeholder:'https://gotify.example.com',type:'text'},
  {key:'token',label:'Gotify application token',hint:'Create an application in Gotify and copy its application token, not a client token.'},
  {key:'priority',label:'Gotify priority (optional)',hint:'Priority 0–10. Defaults to 5.',placeholder:'5',type:'number'}]},
 {id:'discord',name:'Discord',docs:'https://docs.discord.com/developers/resources/webhook#execute-webhook',fields:[
  {key:'webhook',label:'Discord result webhook URL',hint:'Create a webhook in the destination text channel. This sends result summaries independently of bot log notifications.',placeholder:'https://discord.com/api/webhooks/…'}]},
 {id:'ntfy',name:'ntfy',docs:'https://docs.ntfy.sh/publish/',fields:[
  {key:'topic',label:'ntfy result topic',hint:'Subscribe to this topic in ntfy to receive result notifications.',type:'text'},
  {key:'serverUrl',label:'ntfy server URL (optional)',hint:'Defaults to https://ntfy.sh. Use a server base URL, not a topic URL.',placeholder:'https://ntfy.sh',type:'text'},
  {key:'token',label:'ntfy access token (optional)',hint:'Fill this in if publishing to your topic requires an access token.'},
  {key:'priority',label:'ntfy priority (optional)',hint:'Priority 1–5. Defaults to 3.',placeholder:'3',type:'number'}]},
];

export function resultSettingsHtml(config){
 return `<div class="panel-head"><h2>Execution result notifications</h2></div>
 <p class="panel-sub">Send one summary to each enabled channel after a run ends: outcome, accounts, points and duration. These settings are independent of the bot's log notifications.</p>
 <p class="hint">The dashboard service must stay running. Historical results are not resent after restart; failed deliveries are shown here without automatic retries.</p>
 <form data-result-form>
  <div class="field field-item"><label for="result-language">Notification language</label><select id="result-language" name="language" class="input"><option value="zh-CN"${config.language==='zh-CN'?' selected':''}>Simplified Chinese</option><option value="en"${config.language==='en'?' selected':''}>English</option></select></div>
  <div class="switch-grid result-channel-switches">${resultChannels.map(c=>`<label class="switch"><input type="checkbox" name="${c.id}-enabled" data-result-toggle="${c.id}"${config.channels[c.id].enabled?' checked':''}><span>${esc(c.name)}</span></label>`).join('')}</div>
  <p class="hint">Select a channel to edit its settings. Blank fields keep saved values. To replace optional fields with empty values, clear that channel and configure it again.</p>
  <div class="cfg-toggle-groups">${resultChannels.map(c=>{
   const s=config.channels[c.id];
   return `<section class="acc-detail-group" data-result-channel="${c.id}"${s.enabled?'':' hidden'}>
    <h3 class="acc-detail-group-title">${esc(c.name)}</h3><p><a href="${attr(c.docs)}" target="_blank" rel="noopener noreferrer">Official documentation</a></p>
    <div class="field-grid">${c.fields.map(f=>`<label class="field field-item"><span>${esc(f.label)}</span><input name="${c.id}-${f.key}" class="input" type="${f.type||'password'}" autocomplete="off" spellcheck="false" value="" placeholder="${attr(s.savedFields?.[f.key]?'Saved — leave blank to keep':f.placeholder||'')}"><span class="panel-sub">${esc(f.hint)}</span></label>`).join('')}</div>
    <p class="panel-sub">${s.configured?'Channel configuration saved.':'Channel not configured.'}</p>
    ${s.lastDelivery?`<p class="panel-sub"><span>${s.lastDelivery.ok?'Last result delivery: accepted by provider.':'Last result delivery: failed.'}</span> <time>${esc(s.lastDelivery.at)}</time>${s.lastDelivery.error?` <span>${esc(s.lastDelivery.error)}</span>`:''}</p>`:''}
    <div class="form-actions"><button type="button" class="btn" data-result-test="${c.id}">Send test notification</button><label class="check"><input type="checkbox" name="${c.id}-clear"><span>Clear this channel's saved credentials and disable it</span></label></div>
   </section>`;
  }).join('')}</div>
  <div class="form-actions"><button class="btn btn-primary" type="submit">Save result notifications</button></div>
 </form><p role="status" aria-live="polite" data-result-message></p>`;
}
export function mountResultNotifications(root){
 const section=document.createElement('section');section.className='panel result-notifications';root.prepend(section);
 section.innerHTML='<p role="status">Loading result notification settings…</p>';
 let saved;
 async function call(method,suffix='',body){
  const response=await fetch('/api/notifications/results'+suffix,{method,headers:{'Content-Type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})});
  const result=await response.json();if(!response.ok)throw Error(result.error||'Could not load result notification settings.');return result;
 }
 function render(config){
  saved=config;section.innerHTML=resultSettingsHtml(config);
  const form=section.querySelector('form'),message=section.querySelector('[data-result-message]');
  form.querySelectorAll('[data-result-toggle]').forEach(input=>input.addEventListener('change',()=>{
   section.querySelector(`[data-result-channel="${input.dataset.resultToggle}"]`).hidden=!input.checked;
  }));
  form.addEventListener('submit',async e=>{
   e.preventDefault();const button=form.querySelector('[type="submit"]');button.disabled=true;message.textContent='Saving result notification settings…';
   const channels=Object.fromEntries(resultChannels.map(c=>[c.id,{enabled:form.elements[`${c.id}-enabled`].checked,clear:form.elements[`${c.id}-clear`].checked,fields:Object.fromEntries(c.fields.map(f=>[f.key,form.elements[`${c.id}-${f.key}`].value.trim()]))}]));
   try{render(await call('PUT','',{language:form.elements.language.value,channels}));section.querySelector('[data-result-message]').textContent='Result notification settings saved.';}
   catch(err){message.textContent=err.message;button.disabled=false;}
  });
  form.querySelectorAll('[data-result-test]').forEach(button=>button.addEventListener('click',async()=>{
   const id=button.dataset.resultTest,c=resultChannels.find(c=>c.id===id);
   if(!saved.channels[id].configured||c.fields.some(f=>form.elements[`${id}-${f.key}`].value.trim())||form.elements[`${id}-clear`].checked||form.elements.language.value!==saved.language){message.textContent='Save your channel settings before sending a test.';return;}
   button.disabled=true;message.textContent='Sending test notification…';
   try{await call('POST','/test',{channel:id});message.textContent='The provider accepted the test notification. Check the destination chat.';}
   catch(err){message.textContent=err.message;}finally{button.disabled=false;}
  }));
 }
 call('GET').then(render).catch(err=>{section.textContent=err.message;});
}
