import { translate } from './zh-CN.js';

const STORAGE_KEY = 'rewards-dashboard-language';
export function language(storage) {
  try { return (storage || globalThis.localStorage).getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh-CN'; }
  catch { return 'zh-CN'; }
}

// 原始日志、JSON、用户输入、令牌和技术标识不参与汉化。
export const EXCLUDE = 'script,style,pre,code,textarea,[contenteditable],.log-line,.tag-chip-text,.login-code-name,.login-code-number,.acc-email,.hero-acc-name,[data-no-translate]';
const ATTRIBUTES = ['title', 'aria-label', 'placeholder'];

export function localize(root) {
  if (!root || root.nodeType === 3 && root.parentElement?.closest(EXCLUDE)) return;
  if (root.nodeType === 1 && root.closest(EXCLUDE)) return;
  const doc = root.ownerDocument || root;
  const visit = node => {
    if (!node.parentElement?.closest(EXCLUDE)) {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
  };
  if (root.nodeType === 3) { visit(root); return; }
  const walker = doc.createTreeWalker(root, 4);
  while (walker.nextNode()) visit(walker.currentNode);
  const elements = [...(root.nodeType === 1 ? [root] : []), ...(root.querySelectorAll?.('[title],[aria-label],[placeholder]') || [])];
  for (const element of elements) {
    if (element.closest(EXCLUDE)) continue;
    for (const attribute of ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;
      const original = element.getAttribute(attribute), next = translate(original);
      if (next !== original) element.setAttribute(attribute, next);
    }
  }
}

function start() {
  const selected = language();
  document.documentElement.lang = selected;
  const label = document.createElement('label');
  label.className = 'locale-picker';
  label.dataset.noTranslate = '';
  label.style.cssText = 'display:inline-flex;align-items:center;gap:.4rem;font-size:.8rem;flex-shrink:0';
  const text = document.createElement('span');
  text.textContent = selected === 'zh-CN' ? '语言' : 'Language';
  const picker = document.createElement('select');
  picker.id = 'languageSelect';
  picker.className = 'theme-select';
  picker.setAttribute('aria-label', selected === 'zh-CN' ? '界面语言' : 'Interface language');
  for (const [value, title] of [['zh-CN','简体中文'],['en','English']]) {
    const option = document.createElement('option');
    option.value = value; option.textContent = title; option.selected = value === selected;
    picker.append(option);
  }
  label.append(text, picker);
  document.querySelector('.topbar-right .controls-group')?.append(label);
  picker.addEventListener('change', () => {
    try { localStorage.setItem(STORAGE_KEY, picker.value); }
    catch { window.alert('无法保存语言设置，请允许浏览器存储网站数据。'); return; }
    location.reload();
  });
  if (selected !== 'zh-CN') return;
  document.title = translate(document.title);
  const originalConfirm = window.confirm.bind(window);
  window.confirm = message => originalConfirm(translate(String(message)));
  const originalAlert = window.alert.bind(window);
  window.alert = message => originalAlert(translate(String(message)));
  const observer = new MutationObserver(records => {
    const pending = new Set();
    for (const record of records) {
      if (record.type === 'childList') for (const node of record.addedNodes) pending.add(node);
      else pending.add(record.target);
    }
    for (const node of pending) localize(node);
  });
  localize(document.body);
  observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:ATTRIBUTES});
}

if (typeof document !== 'undefined') start();
