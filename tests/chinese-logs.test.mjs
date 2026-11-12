import test from 'node:test';
import assert from 'node:assert/strict';
import {chineseLog} from '../rewards-dashboard/public/locales/chinese-log.js';
import {renderLogEntry,exportLogText} from '../rewards-dashboard/public/logDisplay.js';
import {translate} from '../rewards-dashboard/public/locales/zh-CN.js';
test('名称为中文日志和英文日志，常见运行字段不再夹杂英文枚举',()=>{
 assert.equal(translate('Chinese logs'),'中文日志');assert.equal(translate('English logs'),'英文日志');
 const cases=[
 ['Starting account: demo@example.invalid | geoLocale: CN | locale: zh-CN',['开始','中国','简体中文']],
 ['Finished account: demo@example.invalid | pointsGained=0 | currentBalance=100 | durationSeconds=48 | status=partial | activities: 2 completed, 7 incomplete, 2 unavailable, 0 not applicable',['获得积分：0','部分任务未完成','7 项未完成']],
 ['Search attempt 1/5 failed; reloading Bing before retry | query="测试" | page.waitForURL: Timeout 44839ms exceeded.',['1/5','刷新必应','44.8 秒']],
 ['Available sign-in methods: PASSWORD, AUTHENTICATOR',['密码','验证器']],
 ['Read to Earn | completion not confirmed | points earned: unverified | quota unavailable',['阅读赚积分','尚未确认','无法读取搜索额度']],
 ];
 for(const [raw,expected] of cases){const text=chineseLog(raw).text;for(const word of expected)assert.ok(text.includes(word),`${raw}\n${text}\nmissing ${word}`);assert.ok(!/pointsGained|currentBalance|status=|completed|AUTHENTICATOR/.test(text),text);}
});
test('未知诊断明确提示查英文，英文完整保留；中文不混合原始堆栈',()=>{
 const raw='Unseen upstream detail\n at file:///app/run.js:12:3',entry=Object.freeze({message:raw,raw,level:'error'});
 assert.match(chineseLog(raw).text,/切换英文日志/);assert.ok(!renderLogEntry(entry,'zh').includes('Unseen upstream'));
 assert.equal(exportLogText([entry]),raw);assert.ok(!exportLogText([entry],true).includes('file:///'));
 assert.ok(renderLogEntry(entry,'original').includes('Unseen upstream detail'));
 assert.ok(!chineseLog('TOTP failed: login rejected by provider').text.includes('login rejected'));
});
