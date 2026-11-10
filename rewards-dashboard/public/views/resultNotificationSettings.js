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
