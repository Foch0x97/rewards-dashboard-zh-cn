import {escapeHtml,escapeAttr,fmtTime} from './util.js';
import {translateLogMessage} from './locales/log-zh-CN.js';
const cache=new WeakMap();
export function preferredLogDisplay(storage,chineseUi=true){
 try{
  const saved=storage?.getItem('rewards-dashboard-log-display');
  if(saved==='zh')return 'both'; // Upgrade the old Chinese-only preference.
  if(saved==='original'||saved==='both')return saved;
 }catch{}
 return chineseUi?'both':'original';
}
export const logMessage=e=>String(e.message||e.raw||'');
export function translatedLog(e){
 if(!cache.has(e))cache.set(e,translateLogMessage(logMessage(e)));
 return cache.get(e);
}
export function logSearchText(e){return `${e.title||''} ${e.platform||''} ${e.accountName||e.user||e.email||e.userName||''} ${logMessage(e)} ${e.raw||''} ${translatedLog(e)}`.toLowerCase();}
export function exportLogText(entries,bilingual=false){
 return entries.map(e=>{
  const original=String(e.raw||e.message||'');
  const chinese=translatedLog(e);
  return bilingual&&chinese!==logMessage(e)?`${original}\n[中文说明] ${chinese}`:original;
 }).join('\n');
}
export function renderLogEntry(e,mode='both',chineseUi=true){
 const original=logMessage(e),translated=mode==='original'?original:translatedLog(e);
 const changed=translated!==original;
 const time=e.ts||e.receivedAt;
 const account=e.accountName||e.user||e.email||e.userName||'';
 const level=chineseUi&&mode!=='original'?({debug:'调试',info:'信息',warn:'警告',error:'错误',success:'成功'})[e.level]||e.level:e.level;
 const raw=changed ? mode==='both'
  ? `<pre class="log-original" data-no-translate>${escapeHtml(e.raw||original)}</pre>`
  : `<details class="log-original-details"><summary>${chineseUi?'查看原文':'Show original'}</summary><pre class="log-original" data-no-translate>${escapeHtml(e.raw||original)}</pre></details>`
  : '';
 return `<div class="log-line log-line--${escapeAttr(e.level)}">
 <span class="log-time">${escapeHtml(time?fmtTime(time):'')}</span>
 <span class="log-level log-level--${escapeAttr(e.level)}">${escapeHtml(level)}</span>
 <span class="log-tag">${escapeHtml(e.title||e.level||'')}</span>
 ${account?`<span class="log-account">${escapeHtml(account)}</span>`:''}
 <div class="log-msg">${escapeHtml(translated)}${raw}</div></div>`;
}
