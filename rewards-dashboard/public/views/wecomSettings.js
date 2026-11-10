// Dashboard-owned settings; never write unsupported fields to the bot's config.json.
export function mountWecom(root) {
  const section = document.createElement('section');
  section.className = 'panel';
  section.innerHTML = `<div class="panel-head"><h2>企业微信机器人 · 执行结果通知</h2></div>
    <p>每轮运行结束后发送一条汇总，包含运行状态、账号结果和积分变化。面板服务需要保持运行；不会逐条转发日志。</p>
    <form><label><input name="enabled" type="checkbox"> 启用执行结果通知</label>
    <p><label>群机器人 Webhook<br><input name="webhook" type="password" autocomplete="new-password" placeholder="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=…" style="width:100%;box-sizing:border-box"></label></p>
    <p class="panel-sub" data-status></p>
    <label><input name="clear" type="checkbox"> 删除已保存的 Webhook（同时关闭通知）</label>
    <div class="form-actions"><button class="btn btn-primary" type="submit">保存通知设置</button>
    <button class="btn" type="button" data-test>发送测试通知</button></div>
    <p role="status" aria-live="polite" data-message></p></form>`;
  root.prepend(section);
  const form = section.querySelector('form'), message = section.querySelector('[data-message]');
  const status = section.querySelector('[data-status]');
  let configured = false;
  async function call(method, suffix = '', body) {
    const response = await fetch('/api/notifications/wecom' + suffix, {method,
      headers:{'Content-Type':'application/json'}, ...(body === undefined ? {} : {body:JSON.stringify(body)})});
    const result = await response.json();
    if (!response.ok) throw Error(result.error || '通知设置请求失败。');
    return result;
  }
  function render(result) {
    configured = result.configured;
    form.elements.enabled.checked = result.enabled;
    status.textContent = (configured ? '已保存 Webhook；留空表示保留，填写新地址可替换。' : '尚未设置。企业微信群 → 群机器人 → 添加机器人 → 复制 Webhook。') +
      (result.lastDelivery ? ` 上次结果推送：${result.lastDelivery.ok ? '成功' : '失败'} ${result.lastDelivery.at}${result.lastDelivery.error ? '；' + result.lastDelivery.error : ''}` : '');
  }
  form.addEventListener('submit', async e => {
    e.preventDefault(); message.textContent = '正在保存…';
    try {
      render(await call('PUT','',{enabled:form.elements.clear.checked ? false : form.elements.enabled.checked,
        webhook:form.elements.webhook.value.trim(), clear:form.elements.clear.checked}));
      form.elements.webhook.value = ''; form.elements.clear.checked = false; message.textContent = '通知设置已保存。';
    } catch (e) { message.textContent = e.message; }
  });
  section.querySelector('[data-test]').addEventListener('click', async e => {
    if (!configured || form.elements.webhook.value.trim()) { message.textContent = '请先保存 Webhook，再发送测试通知。'; return; }
    e.target.disabled = true; message.textContent = '正在发送测试通知…';
    try { await call('POST','/test',{}); message.textContent = '企业微信已接受测试消息，请查看群聊。'; }
    catch (err) { message.textContent = err.message; }
    finally { e.target.disabled = false; }
  });
  call('GET').then(render).catch(e => {message.textContent = e.message;});
}
