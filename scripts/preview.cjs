// 本机界面验收专用：模拟 Control API，不接入真实账号或微软服务。
const http = require('node:http');
const { spawn } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const root = path.resolve(__dirname, '..');
const data = path.join(root, '.qa');
fs.mkdirSync(data, { recursive: true });
const accounts = [{index:1,email:'demo@example.invalid',geoLocale:'CN',langCode:'zh-CN'}];
const fixture = {
  '/health': {version:'5.0.0',name:'microsoft-rewards-script',uptimeSec:3600,authRequired:true,state:'idle'},
  '/status': {state:'idle',version:'5.0.0',run:null},
  '/accounts': {accounts},
  '/history': {runs:[]},
  '/schedule': {enabled:false,cron:'0 9 * * *',timezone:'Asia/Shanghai'},
  '/config': {config:{workers:{dailySet:true,morePromotions:true},searchOnBing:true,clusters:1,runOnStart:false},redacted:true},
  '/config/diff': {addedKeys:[],upToDate:true},
  '/sessions': {accounts:[],sessions:[]},
  '/diagnostics': {entries:[],count:0},
};
const mock = http.createServer((req,res) => {
  const url = new URL(req.url,'http://localhost');
  if (url.pathname === '/events') {
    res.writeHead(200,{'Content-Type':'text/event-stream'});
    res.write(': preview fixture\n\n');
    const heartbeat = setInterval(() => res.write(': heartbeat\n\n'), 3000);
    req.on('close',() => clearInterval(heartbeat));
    return;
  }
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify(fixture[url.pathname] || {}));
});
mock.listen(18991,'127.0.0.1',() => {
  const child = spawn(process.execPath,['server.js'],{
    cwd:path.join(root,'rewards-dashboard'),
    env:{...process.env,PORT:'18990',CONTROL_API_URL:'http://127.0.0.1:18991',CONTROL_API_TOKEN:'preview-only',DATA_DIR:data,TZ:'Asia/Shanghai'},
    stdio:'inherit',
  });
  process.on('SIGINT',() => { child.kill(); mock.close(); process.exit(); });
  child.on('exit',code => {mock.close();process.exit(code || 0);});
});
