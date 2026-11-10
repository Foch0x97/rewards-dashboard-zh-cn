import { readdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir, {withFileTypes:true})) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory() && !['node_modules','.git','data'].includes(entry.name)) walk(full);
    else if (entry.isFile() && /\.(m?js|cjs)$/.test(entry.name)) files.push(full);
  }
}
walk(resolve(root,'rewards-dashboard')); walk(resolve(root,'scripts')); walk(resolve(root,'tests'));
for (const file of files) {
  const result = spawnSync(process.execPath,['--check',file],{stdio:'inherit'});
  if (result.status !== 0) process.exit(1);
}
const html = readFileSync(resolve(root,'rewards-dashboard/public/index.html'),'utf8');
if (html.split('/locales/bootstrap.js').length !== 2 || html.indexOf('/locales/bootstrap.js') > html.indexOf('/app.js')) {
  throw Error('中文语言包必须在 app.js 之前接入，且只能接入一次。');
}
console.log(`语法及入口检查通过：${files.length} 个文件。`);
const server = readFileSync(resolve(root,'rewards-dashboard/server.js'),'utf8');
const config = readFileSync(resolve(root,'rewards-dashboard/public/views/config.js'),'utf8');
if (!server.includes('wecom.scan(') || !server.includes('/api/notifications/wecom') || !config.includes('mountWecom(root)')) {
  throw Error('企业微信扩展入口缺失，请先适配上游再同步。');
}
