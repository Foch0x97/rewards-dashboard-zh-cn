import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {translate, messages} from '../rewards-dashboard/public/locales/zh-CN.js';
import {language, EXCLUDE} from '../rewards-dashboard/public/locales/bootstrap.js';

test('默认简体中文，英文选择持久化；存储不可用时仍可显示',()=>{
  assert.equal(language({getItem:()=>null}),'zh-CN');
  assert.equal(language({getItem:()=> 'en'}),'en');
  assert.equal(language({getItem:()=>{throw Error('blocked')}}),'zh-CN');
});
test('积分上报不误写成完成，未知信息不改写',()=>{
  assert.equal(translate('Reported'),'已上报积分');
  assert.equal(translate('Unverified'),'尚未确认');
  assert.equal(translate('ACCOUNT_2_EMAIL'),'ACCOUNT_2_EMAIL');
  assert.equal(translate('user@example.invalid'),'user@example.invalid');
  assert.equal(translate('HTTP 502: upstream unavailable'),'HTTP 502: upstream unavailable');
  assert.equal(translate('workers.doDailySet'),'workers.doDailySet');
  assert.equal(translate('0 9 * * *'),'0 9 * * *');
});
test('动态通知和耗时按中文表达，空白不丢失',()=>{
  assert.equal(translate('  Run selected\n'),'  运行所选账号\n');
  assert.equal(translate('Resume (23 new)'),'继续显示（23 条新日志）');
  assert.equal(translate('2h 15m ago'),'2 小时 15 分钟前');
  assert.equal(translate('Schedule armed (This dashboard).'),'定时计划已启用（面板定时）。');
  assert.equal(translate('Started ACCOUNT_2 only (demo@example.invalid).'),'已提交账号 2（demo@example.invalid）的运行请求。');
});
test('已知设置的名称和说明均有人工文案；上游新增设置时提示补译',()=>{
  const source = readFileSync(new URL('../rewards-dashboard/public/views/config.js',import.meta.url),'utf8');
  const missing = [];
  for(const m of source.matchAll(/(?:label|desc|hint):\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g)) {
    const value=Function('return '+m[1])();
    if(/[A-Za-z]{3}/.test(value) && value!=='API' && translate(value)===value) missing.push(value);
  }
  assert.deepEqual(missing,[],`请补充中文文案：${missing.join('\n')}`);
});
test('原始日志、配置编辑器及敏感信息节点不参与翻译',()=>{
  for(const selector of ['.log-line','textarea','code','.login-code-name','.login-code-number','.tag-chip-text']) assert.ok(EXCLUDE.includes(selector));
  for(const value of Object.values(messages)) assert.ok(value && value!=='undefined');
});
