import {escapeHtml,escapeAttr,fmtTime} from './util.js';
import {chineseLog,chineseLogTag} from './locales/chinese-log.js';
const cache=new WeakMap();
export function preferredLogDisplay(storage,chineseUi=true){
 try{
  const saved=storage?.getItem('rewards-dashboard-log-display');
  if(saved==='zh'||saved==='both')return 'zh';
  if(saved==='original')return saved;
 }catch{}
 return chineseUi?'zh':'original';
}
export const logMessage=e=>String(e.message||e.raw||'');
export function translatedLog(e){
 if(!cache.has(e))cache.set(e,chineseLog(logMessage(e)).text);
 return cache.get(e);
}
export function logSearchText(e){return `${e.title||''} ${e.platform||''} ${e.accountName||e.user||e.email||e.userName||''} ${logMessage(e)} ${e.raw||''} ${translatedLog(e)}`.toLowerCase();}
export function exportLogText(entries,chinese=false){
 return entries.map(e=>{
  const original=String(e.raw||e.message||'');
  if(!chinese)return original;
  const level=({debug:'调试',info:'信息',warn:'警告',error:'错误',success:'成功'})[e.level];
  const metadata=[e.ts||e.receivedAt,e.accountName||e.user||e.email||e.userName,level,e.title?chineseLogTag(e.title):null].filter(Boolean).map(s=>`[${s}]`).join(' ');
  return `${metadata?metadata+' ':''}${translatedLog(e)}`;
 }).join('\n');
}
export function renderLogEntry(e,mode='zh',chineseUi=true){
 const original=logMessage(e),translated=mode==='original'?original:translatedLog(e);
 const time=e.ts||e.receivedAt;
 const account=e.accountName||e.user||e.email||e.userName||'';
 const level=mode!=='original'?({debug:'调试',info:'信息',warn:'警告',error:'错误',success:'成功'})[e.level]||'记录':e.level;
 const tag=mode==='original'?(e.title||e.level||''):chineseLogTag(e.title||'');
 return `<div class="log-line log-line--${escapeAttr(e.level)}">
 <span class="log-time">${escapeHtml(time?fmtTime(time):'')}</span>
 <span class="log-level log-level--${escapeAttr(e.level)}">${escapeHtml(level)}</span>
 <span class="log-tag">${escapeHtml(tag)}</span>
 ${account?`<span class="log-account">${escapeHtml(account)}</span>`:''}
 <div class="log-msg">${escapeHtml(translated)}</div></div>`;
}
