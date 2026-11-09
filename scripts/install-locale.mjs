// 幂等地接入中文语言包；上游重写入口时，先检查唯一锚点再修改。
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const path = fileURLToPath(new URL('../rewards-dashboard/public/index.html', import.meta.url));
const html = readFileSync(path, 'utf8');
const hook = '    <script type="module" src="/locales/bootstrap.js"></script>';
const anchor = '<script type="module" src="/app.js"></script>';
if (html.includes(hook)) {
  if (html.split('/locales/bootstrap.js').length !== 2) throw Error('语言入口重复，请人工检查。');
  console.log('语言入口已存在。');
} else {
  if (html.split(anchor).length !== 2) throw Error('上游页面入口已变化，停止自动接入，等待人工检查。');
  writeFileSync(path, html.replace('    ' + anchor, hook + '\n    ' + anchor));
  console.log('已接入中文语言包。');
}
