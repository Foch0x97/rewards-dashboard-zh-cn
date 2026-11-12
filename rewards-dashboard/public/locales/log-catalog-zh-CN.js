// Manually reviewed Chinese wording for the pinned v5 source. Keep data placeholders intact.
export const sourceRevision = "46a6fdabb2a0fd7bcddd9fb93454c8722b0b7862";
export const logCatalog = [
 {
  "en": "Starting login process",
  "zh": "开始登录",
  "keep": [],
  "source": "src/browser/auth/Login.ts:59"
 },
 {
  "en": "Login exceeded its 10-minute deadline",
  "zh": "登录过程超过 10 分钟，已超时",
  "keep": [],
  "source": "src/browser/auth/Login.ts:79"
 },
 {
  "en": "Page closed unexpectedly",
  "zh": "页面意外关闭",
  "keep": [],
  "source": "src/browser/auth/Login.ts:80"
 },
 {
  "en": "State check iteration {0}/{1}",
  "zh": "检查登录状态：第 {0}/{1} 次",
  "keep": [],
  "source": "src/browser/auth/Login.ts:83"
 },
 {
  "en": "Current state: {0}",
  "zh": "当前登录状态：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:88"
 },
 {
  "en": "State transition: {0} → {1}",
  "zh": "登录状态变化：{0} → {1}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:91"
 },
 {
  "en": "Same state count: {0}/4 for state \"{1}\"",
  "zh": "登录状态「{1}」已连续出现 {0}/4 次",
  "keep": [],
  "source": "src/browser/auth/Login.ts:101"
 },
 {
  "en": "Stuck in state \"{0}\" for 4 loops, refreshing page",
  "zh": "登录状态 {0} 连续 4 次未变化，正在刷新页面",
  "keep": [],
  "source": "src/browser/auth/Login.ts:107"
 },
 {
  "en": "Successfully logged in",
  "zh": "登录成功",
  "keep": [],
  "source": "src/browser/auth/Login.ts:125"
 },
 {
  "en": "Login failed or aborted at state: {0}",
  "zh": "登录失败或已中止，所处状态：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:131"
 },
 {
  "en": "Login timeout: exceeded maximum iterations",
  "zh": "登录状态检查次数已达上限，登录超时",
  "keep": [],
  "source": "src/browser/auth/Login.ts:138"
 },
 {
  "en": "Fatal error: {0}",
  "zh": "发生致命错误：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:170"
 },
 {
  "en": "Available sign-in methods: {0}",
  "zh": "可用登录方式：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:283"
 },
 {
  "en": "Document readiness timeout: {0}",
  "zh": "等待网页加载完成超时：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:288"
 },
 {
  "en": "{0} clicked",
  "zh": "已点击：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:300"
 },
 {
  "en": "Page changed after state detection; checking again",
  "zh": "页面已发生变化，重新检查登录状态",
  "keep": [],
  "source": "src/browser/auth/Login.ts:310"
 },
 {
  "en": "Processing state: {0}",
  "zh": "正在处理登录状态：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:317"
 },
 {
  "en": "Account error: {0}",
  "zh": "账号执行出错：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:329"
 },
 {
  "en": "Microsoft login error: {0}",
  "zh": "微软登录失败：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:330"
 },
 {
  "en": "Entering email",
  "zh": "正在填写账号邮箱",
  "keep": [],
  "source": "src/browser/auth/Login.ts:337"
 },
 {
  "en": "Email entered successfully",
  "zh": "已填写账号邮箱",
  "keep": [],
  "source": "src/browser/auth/Login.ts:341"
 },
 {
  "en": "Password input detected but no password is configured; returning to sign-in methods",
  "zh": "页面要求输入密码，但未配置密码，正在返回登录方式选择页",
  "keep": [],
  "source": "src/browser/auth/Login.ts:348"
 },
 {
  "en": "No configured password and no way to return to sign-in methods",
  "zh": "未配置密码，且无法返回登录方式选择页",
  "keep": [],
  "source": "src/browser/auth/Login.ts:355"
 },
 {
  "en": "Entering password",
  "zh": "正在填写密码",
  "keep": [],
  "source": "src/browser/auth/Login.ts:363"
 },
 {
  "en": "Password entered successfully",
  "zh": "已填写密码",
  "keep": [],
  "source": "src/browser/auth/Login.ts:367"
 },
 {
  "en": "Opening alternative sign-in methods",
  "zh": "正在打开其他登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:373"
 },
 {
  "en": "Could not open alternative sign-in methods",
  "zh": "无法打开其他登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:376"
 },
 {
  "en": "Continuing with primary sign-in method",
  "zh": "继续使用主要登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:386"
 },
 {
  "en": "Could not continue with primary sign-in method",
  "zh": "无法继续使用主要登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:389"
 },
 {
  "en": "Password sign-in is available; selecting it",
  "zh": "支持密码登录，正在选择",
  "keep": [],
  "source": "src/browser/auth/Login.ts:407"
 },
 {
  "en": "Could not select password sign-in method",
  "zh": "无法选择密码登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:411"
 },
 {
  "en": "Selecting Microsoft Authenticator sign-in",
  "zh": "正在选择 微软验证器 登录",
  "keep": [],
  "source": "src/browser/auth/Login.ts:421"
 },
 {
  "en": "Could not select Microsoft Authenticator",
  "zh": "无法选择 微软验证器",
  "keep": [],
  "source": "src/browser/auth/Login.ts:430"
 },
 {
  "en": "Sending Microsoft Authenticator request",
  "zh": "正在发送 微软验证器 登录确认请求",
  "keep": [],
  "source": "src/browser/auth/Login.ts:444"
 },
 {
  "en": "Could not send Microsoft Authenticator request",
  "zh": "无法发送 微软验证器 登录确认请求",
  "keep": [],
  "source": "src/browser/auth/Login.ts:448"
 },
 {
  "en": "No supported non-interactive sign-in method is available; email-code fallback requires interactive stdin",
  "zh": "没有可用的非交互登录方式；改用邮箱验证码需要在终端手动输入",
  "keep": [],
  "source": "src/browser/auth/Login.ts:464"
 },
 {
  "en": "Selecting email-code sign-in",
  "zh": "正在选择邮箱验证码登录",
  "keep": [],
  "source": "src/browser/auth/Login.ts:472"
 },
 {
  "en": "Could not select email-code sign-in method",
  "zh": "无法选择邮箱验证码登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:480"
 },
 {
  "en": "No supported sign-in method available{0}",
  "zh": "没有可用的受支持登录方式{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:493"
 },
 {
  "en": "Recovery email input detected",
  "zh": "检测到备用邮箱输入页面",
  "keep": [],
  "source": "src/browser/auth/Login.ts:503"
 },
 {
  "en": "Initiating recovery email handler",
  "zh": "开始处理备用邮箱验证",
  "keep": [],
  "source": "src/browser/auth/Login.ts:505"
 },
 {
  "en": "Recovery email handler completed successfully",
  "zh": "备用邮箱验证处理流程已结束",
  "keep": [],
  "source": "src/browser/auth/Login.ts:507"
 },
 {
  "en": "Email verification requires a configured password or interactive stdin",
  "zh": "邮箱验证需要已配置的密码，或通过终端手动输入",
  "keep": [],
  "source": "src/browser/auth/Login.ts:515"
 },
 {
  "en": "Email verification input detected",
  "zh": "检测到邮箱验证输入页面",
  "keep": [],
  "source": "src/browser/auth/Login.ts:523"
 },
 {
  "en": "Email verification input detected; checking alternatives",
  "zh": "检测到邮箱验证输入页面，正在检查其他登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:528"
 },
 {
  "en": "Password sign-in option selected",
  "zh": "已选择密码登录",
  "keep": [],
  "source": "src/browser/auth/Login.ts:568"
 },
 {
  "en": "Sign-in method picker opened",
  "zh": "已打开登录方式选择页",
  "keep": [],
  "source": "src/browser/auth/Login.ts:574"
 },
 {
  "en": "Falling back to interactive email verification",
  "zh": "改用需要手动输入的邮箱验证",
  "keep": [],
  "source": "src/browser/auth/Login.ts:589"
 },
 {
  "en": "No usable email verification alternative found",
  "zh": "未找到可用的其他邮箱验证方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:594"
 },
 {
  "en": "chromewebdata error detected, attempting recovery",
  "zh": "检测到浏览器错误页面，正在尝试恢复",
  "keep": [],
  "source": "src/browser/auth/Login.ts:599"
 },
 {
  "en": "Recovery navigation failed | status={0}",
  "zh": "恢复页面跳转失败；状态：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:608"
 },
 {
  "en": "Recovery navigation completed; checking sign-in state",
  "zh": "恢复导航已结束，正在检查登录状态",
  "keep": [],
  "source": "src/browser/auth/Login.ts:611"
 },
 {
  "en": "Recovery navigation failed; trying login.live.com | {0}",
  "zh": "恢复跳转失败，改用微软登录站点重试；{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:620"
 },
 {
  "en": "TOTP 2FA authentication required",
  "zh": "需要完成 动态 双重验证",
  "keep": [],
  "source": "src/browser/auth/Login.ts:631"
 },
 {
  "en": "TOTP 2FA handler completed successfully",
  "zh": "动态 双重验证处理流程已结束",
  "keep": [],
  "source": "src/browser/auth/Login.ts:633"
 },
 {
  "en": "Accepting KMSI prompt",
  "zh": "正在确认保持登录状态",
  "keep": [],
  "source": "src/browser/auth/Login.ts:639"
 },
 {
  "en": "Could not accept KMSI prompt",
  "zh": "无法确认保持登录状态",
  "keep": [],
  "source": "src/browser/auth/Login.ts:642"
 },
 {
  "en": "KMSI prompt accepted",
  "zh": "已确认保持登录状态",
  "keep": [],
  "source": "src/browser/auth/Login.ts:646"
 },
 {
  "en": "Skipping Passkey prompt",
  "zh": "正在跳过通行密钥提示",
  "keep": [],
  "source": "src/browser/auth/Login.ts:653"
 },
 {
  "en": "Could not skip Passkey prompt",
  "zh": "无法跳过通行密钥提示",
  "keep": [],
  "source": "src/browser/auth/Login.ts:656"
 },
 {
  "en": "Passkey prompt skipped",
  "zh": "已跳过通行密钥提示",
  "keep": [],
  "source": "src/browser/auth/Login.ts:660"
 },
 {
  "en": "Handling passwordless authentication",
  "zh": "正在处理免密登录验证",
  "keep": [],
  "source": "src/browser/auth/Login.ts:666"
 },
 {
  "en": "Passwordless authentication completed successfully",
  "zh": "免密登录验证已完成",
  "keep": [],
  "source": "src/browser/auth/Login.ts:670"
 },
 {
  "en": "OTP code entry page detected; trying an available alternative sign-in method",
  "zh": "检测到验证码输入页面，正在尝试其他可用登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:676"
 },
 {
  "en": "Returned to sign-in method selection",
  "zh": "已返回登录方式选择页",
  "keep": [],
  "source": "src/browser/auth/Login.ts:700"
 },
 {
  "en": "Switched to Microsoft Authenticator sign-in",
  "zh": "已切换到微软验证器登录",
  "keep": [],
  "source": "src/browser/auth/Login.ts:700"
 },
 {
  "en": "Switched away from email-code authentication",
  "zh": "已退出邮箱验证码登录方式",
  "keep": [],
  "source": "src/browser/auth/Login.ts:700"
 },
 {
  "en": "OTP footer action did not leave the code-entry page; falling back to Back",
  "zh": "页面底部操作未能退出验证码页，改用返回按钮",
  "keep": [],
  "source": "src/browser/auth/Login.ts:712"
 },
 {
  "en": "No usable alternative action found on OTP page",
  "zh": "验证码页上没有可用的其他操作",
  "keep": [],
  "source": "src/browser/auth/Login.ts:722"
 },
 {
  "en": "Login redirect is still in progress, waiting",
  "zh": "登录仍在跳转，继续等待",
  "keep": [],
  "source": "src/browser/auth/Login.ts:730"
 },
 {
  "en": "Unknown state at {0}{1}, waiting",
  "zh": "登录页面状态暂未识别，继续等待（页面：{0}{1}）",
  "keep": [
   0,
   1
  ],
  "source": "src/browser/auth/Login.ts:736"
 },
 {
  "en": "Unhandled state: {0}, continuing",
  "zh": "暂未处理登录状态 {0}，继续检查",
  "keep": [],
  "source": "src/browser/auth/Login.ts:752"
 },
 {
  "en": "Bing sign-in failed at {0}",
  "zh": "必应登录失败，页面：{0}",
  "keep": [],
  "source": "src/browser/auth/Login.ts:761"
 },
 {
  "en": "Requesting app access token",
  "zh": "正在请求 应用 访问令牌",
  "keep": [],
  "source": "src/browser/auth/Login.ts:766"
 },
 {
  "en": "Finalizing login",
  "zh": "正在完成登录的最后步骤",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:68"
 },
 {
  "en": "Logged into Microsoft Rewards successfully",
  "zh": "微软积分登录成功",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:85"
 },
 {
  "en": "Rewards sign-in redirected to Bing home ({0}); continuing verification",
  "zh": "积分登录跳转到了必应首页（{0}），继续核实登录状态",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:87"
 },
 {
  "en": "Could not verify Rewards RewardsDashboard, assuming login valid",
  "zh": "未能验证积分控制台，脚本暂按登录有效继续；登录是否成功尚未确认",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:94"
 },
 {
  "en": "Starting Bing session verification",
  "zh": "开始验证必应登录会话",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:104"
 },
 {
  "en": "Could not verify the signed-in Bing session",
  "zh": "未能验证当前必应登录会话",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:108"
 },
 {
  "en": "Acquiring rewards context",
  "zh": "正在读取积分任务所需的页面数据",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:114"
 },
 {
  "en": "No session cookies were captured after sign-in",
  "zh": "登录后没有捕获到登录凭据",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:122"
 },
 {
  "en": "Saving session | cookies={0} | origins={1}",
  "zh": "正在保存登录会话；凭据条目：{0}；站点：{1}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:162"
 },
 {
  "en": "Login completed, session saved",
  "zh": "登录完成，会话已保存",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:131"
 },
 {
  "en": "Verifying Bing session",
  "zh": "正在验证必应会话",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:138"
 },
 {
  "en": "Verification loop {0}/{1}",
  "zh": "验证登录状态：第 {0}/{1} 次",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:149"
 },
 {
  "en": "At Bing page: {0} ({1}{2})",
  "zh": "当前必应页面：{0}（{1}{2}）",
  "keep": [
   2
  ],
  "source": "src/browser/auth/LoginSession.ts:164"
 },
 {
  "en": "Sign-in evidence | source={0}",
  "zh": "已找到登录依据；来源：{0}",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:175"
 },
 {
  "en": "Bing session verified successfully | source={0}",
  "zh": "必应会话验证成功；依据来源：{0}",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:182"
 },
 {
  "en": "Could not verify Bing session",
  "zh": "未能验证必应会话",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:194"
 },
 {
  "en": "Verification error: {0}",
  "zh": "验证出错：{0}",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:197"
 },
 {
  "en": "Bootstrapping rewards context",
  "zh": "正在初始化积分页面数据",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:207"
 },
 {
  "en": "No action ids resolved - server-action calls (report/streak protection) will be skipped this run",
  "zh": "未解析出服务端操作标识，本轮跳过活动上报和连续签到保护请求",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:219"
 },
 {
  "en": "Page snapshot empty - neither /earn nor /dashboard rendered a usable RSC payload",
  "zh": "页面快照为空；任务页和控制台都没有返回可用的组件数据",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:227"
 },
 {
  "en": "Context ready | actions={0} | reportable={1} | available={2}",
  "zh": "任务数据已就绪；操作标识：{0}；可上报活动：{1}；可用积分：{2}",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:234"
 },
 {
  "en": "Failed to acquire rewards context: {0}",
  "zh": "读取积分任务数据失败：{0}",
  "keep": [],
  "source": "src/browser/auth/LoginSession.ts:248"
 },
 {
  "en": "Could not submit {0}",
  "zh": "无法提交：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/EmailLogin.ts:26"
 },
 {
  "en": "{0} submitted",
  "zh": "已提交：{0}",
  "keep": [
   0
  ],
  "source": "src/browser/auth/methods/EmailLogin.ts:27"
 },
 {
  "en": "Unexpected verification code field count: {0}",
  "zh": "验证码输入框数量不符合预期：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:35"
 },
 {
  "en": "Verification code submitted; waiting for response",
  "zh": "已提交验证码，正在等待响应",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:43"
 },
 {
  "en": "Failed to fill code input: {0}",
  "zh": "填写验证码失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:47"
 },
 {
  "en": "Email verification input not found",
  "zh": "未找到邮箱验证输入框",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:135"
 },
 {
  "en": "Verification email submitted; waiting for response",
  "zh": "已提交验证邮箱，正在等待响应",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:65"
 },
 {
  "en": "Failed to fill email input: {0}",
  "zh": "填写邮箱失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:30"
 },
 {
  "en": "Code login authentication requested",
  "zh": "需要通过验证码登录",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:80"
 },
 {
  "en": "Email-code authentication requires interactive stdin; unavailable in background mode",
  "zh": "邮箱验证码登录需要交互输入，当前后台运行方式无法接收验证码",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:83"
 },
 {
  "en": "Page message: \"{0}\"",
  "zh": "页面提示：「{0}」",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:88"
 },
 {
  "en": "Unable to retrieve email code destination",
  "zh": "未能读取接收验证码的邮箱",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:90"
 },
 {
  "en": "Email verification challenge detected, awaiting email address",
  "zh": "需要验证邮箱，正在等待输入邮箱地址",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:97"
 },
 {
  "en": "Invalid or missing email (attempt {0}/{1}) | input length={2}",
  "zh": "邮箱无效或未输入；第 {0}/{1} 次尝试；输入长度：{2}",
  "keep": [
   2
  ],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:114"
 },
 {
  "en": "Manual email input failed or timed out",
  "zh": "手动输入邮箱失败或超时",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:121"
 },
 {
  "en": "Unable to fill email input (attempt {0}/{1})",
  "zh": "无法填写邮箱；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:128"
 },
 {
  "en": "Email rejected: {0} (attempt {1}/{2})",
  "zh": "邮箱被拒绝：{0}；第 {1}/{2} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:144"
 },
 {
  "en": "Maximum email attempts reached: {0}",
  "zh": "邮箱验证尝试次数已达上限：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:151"
 },
 {
  "en": "Email accepted, verification code sent",
  "zh": "邮箱已通过确认，验证码已发送",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:157"
 },
 {
  "en": "Email verification failed",
  "zh": "邮箱验证失败",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:163"
 },
 {
  "en": "Invalid or missing code (attempt {0}/{1}) | input length={2}",
  "zh": "验证码无效或未输入；第 {0}/{1} 次尝试；输入长度：{2}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:94"
 },
 {
  "en": "Manual code input failed or timed out",
  "zh": "手动输入验证码失败或超时",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:182"
 },
 {
  "en": "Unable to fill code input (attempt {0}/{1})",
  "zh": "无法填写验证码；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:189"
 },
 {
  "en": "Code input field not found",
  "zh": "未找到验证码输入框",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:196"
 },
 {
  "en": "Incorrect code: {0} (attempt {1}/{2})",
  "zh": "验证码未通过：{0}；第 {1}/{2} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:122"
 },
 {
  "en": "Maximum attempts reached: {0}",
  "zh": "尝试次数已达上限：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:129"
 },
 {
  "en": "Code response received; checking next sign-in state",
  "zh": "已收到验证码验证响应，正在检查下一步登录状态",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:219"
 },
 {
  "en": "Code input failed after {0} attempts",
  "zh": "尝试 {0} 次后，验证码输入仍未成功",
  "keep": [],
  "source": "src/browser/auth/methods/GetACodeLogin.ts:227"
 },
 {
  "en": "Error occurred: {0}",
  "zh": "执行出错：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:140"
 },
 {
  "en": "Auth URL constructed: {0}{1}",
  "zh": "已生成授权地址：{0}{1}",
  "keep": [
   0,
   1
  ],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:38"
 },
 {
  "en": "Could not resolve the OAuth code - token-based activities will be skipped this run",
  "zh": "未能取得授权码，本轮跳过需要访问令牌的任务",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:47"
 },
 {
  "en": "OAuth code resolved, exchanging for access token",
  "zh": "已取得授权码，正在换取访问令牌",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:55"
 },
 {
  "en": "Token exchange failed | error={0} | description={1}",
  "zh": "换取令牌失败；错误：{0}；说明：{1}",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:75"
 },
 {
  "en": "App access token received",
  "zh": "已取得应用访问令牌",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:83"
 },
 {
  "en": "App access error: {0}",
  "zh": "应用授权出错：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:86"
 },
 {
  "en": "OAuth browser resolved → {0} | code={1}",
  "zh": "授权浏览器跳转完成：{0}；授权码：{1}",
  "keep": [
   0
  ],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:115"
 },
 {
  "en": "OAuth browser flow failed: {0}",
  "zh": "浏览器授权流程失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/MobileAccessLogin.ts:123"
 },
 {
  "en": "Could not retrieve displayed number",
  "zh": "未能读取手机确认所需的数字",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:62"
 },
 {
  "en": "Waiting for approval... (timeout after {0} seconds)",
  "zh": "等待手机确认登录，{0} 秒后超时",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:68"
 },
 {
  "en": "Approval detected",
  "zh": "检测到登录确认",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:77"
 },
 {
  "en": "Still waiting... ({0}/{1} seconds elapsed)",
  "zh": "仍在等待手机确认；已等待 {0}/{1} 秒",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:83"
 },
 {
  "en": "Approval timeout after {0} seconds!",
  "zh": "等待登录确认超过 {0} 秒，已超时",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:99"
 },
 {
  "en": "Please approve login and select number: {0}",
  "zh": "请在手机验证器中确认登录，并选择数字 {0}",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:127"
 },
 {
  "en": "Please approve login on your authenticator app",
  "zh": "请在手机验证器中确认此次登录",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:135"
 },
 {
  "en": "Passwordless authentication requested",
  "zh": "需要完成免密登录验证",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:144"
 },
 {
  "en": "Login approved successfully",
  "zh": "登录已获确认",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:151"
 },
 {
  "en": "Approval request expired; sending retry {0}/{1}",
  "zh": "登录确认请求已过期，正在重发第 {0}/{1} 次",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:157"
 },
 {
  "en": "Could not send another passwordless authentication request",
  "zh": "无法重新发送免密登录确认请求",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:163"
 },
 {
  "en": "Passwordless authentication timeout",
  "zh": "免密登录验证超时",
  "keep": [],
  "source": "src/browser/auth/methods/PasswordlessLogin.ts:166"
 },
 {
  "en": "An error occurred: {0}",
  "zh": "执行出错：{0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:278"
 },
 {
  "en": "Filling recovery email",
  "zh": "正在填写备用邮箱",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:17"
 },
 {
  "en": "Recovery email submitted; waiting for response",
  "zh": "已提交备用邮箱，正在等待响应",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:26"
 },
 {
  "en": "Email recovery authentication flow initiated",
  "zh": "开始备用邮箱验证流程",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:41"
 },
 {
  "en": "Using configured recovery email",
  "zh": "正在使用已配置的备用邮箱",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:44"
 },
 {
  "en": "Email input field not found",
  "zh": "未找到邮箱输入框",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:48"
 },
 {
  "en": "Waiting for page response",
  "zh": "正在等待页面响应",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:140"
 },
 {
  "en": "Email verification failed: {0}",
  "zh": "邮箱验证失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:56"
 },
 {
  "en": "Recovery email response received; checking next sign-in state",
  "zh": "已收到备用邮箱验证响应，正在检查下一步登录状态",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:159"
 },
 {
  "en": "Recovery email is required because interactive stdin is unavailable",
  "zh": "当前后台运行方式无法接收手动输入，需要配置备用邮箱",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:68"
 },
 {
  "en": "No recovery email provided, will prompt user for input",
  "zh": "未配置备用邮箱，需要用户手动输入",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:71"
 },
 {
  "en": "Starting attempt {0}/{1}",
  "zh": "开始第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:78"
 },
 {
  "en": "Prompting user for email input (timeout: {0}s)",
  "zh": "等待用户输入邮箱，超时：{0} 秒",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:84"
 },
 {
  "en": "No or invalid email input received (attempt {0}/{1})",
  "zh": "未收到邮箱，或输入的邮箱无效；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:97"
 },
 {
  "en": "Manual email input failed: no input received",
  "zh": "手动输入邮箱失败：未收到输入",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:104"
 },
 {
  "en": "Invalid email format received (attempt {0}/{1}) | length={2}",
  "zh": "邮箱格式不正确；第 {0}/{1} 次尝试；输入长度：{2}",
  "keep": [
   2
  ],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:110"
 },
 {
  "en": "Manual email input failed: invalid format",
  "zh": "手动输入邮箱失败：邮箱格式不正确",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:117"
 },
 {
  "en": "Valid recovery email received from user",
  "zh": "已收到格式有效的备用邮箱",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:122"
 },
 {
  "en": "Failed to fill email input field (attempt {0}/{1})",
  "zh": "填写邮箱输入框失败；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:126"
 },
 {
  "en": "Email input field not found after maximum attempts",
  "zh": "尝试次数用尽后，仍未找到邮箱输入框",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:133"
 },
 {
  "en": "Error from page: \"{0}\" (attempt {1}/{2})",
  "zh": "页面返回错误：「{0}」；第 {1}/{2} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:145"
 },
 {
  "en": "Maximum attempts reached. Last error: {0}",
  "zh": "尝试次数已达上限；最后错误：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:152"
 },
 {
  "en": "Email input failed after {0} attempts",
  "zh": "尝试 {0} 次后，邮箱输入仍未成功",
  "keep": [],
  "source": "src/browser/auth/methods/RecoveryEmailLogin.ts:167"
 },
 {
  "en": "Filled TOTP input",
  "zh": "已填写 动态 验证码",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:31"
 },
 {
  "en": "No TOTP input field found",
  "zh": "未找到 动态 验证码输入框",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:35"
 },
 {
  "en": "Failed to fill TOTP input: {0}",
  "zh": "填写动态验证码失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:38"
 },
 {
  "en": "Unable to submit TOTP code",
  "zh": "无法提交 动态 验证码",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:50"
 },
 {
  "en": "TOTP 2FA authentication requested",
  "zh": "需要完成 动态 双重验证",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:58"
 },
 {
  "en": "Generated TOTP code from secret",
  "zh": "已使用配置的密钥生成 动态 验证码",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:62"
 },
 {
  "en": "Unable to fill TOTP input field",
  "zh": "无法填写 动态 验证码输入框",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:66"
 },
 {
  "en": "TOTP input field not found",
  "zh": "未找到 动态 验证码输入框",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:115"
 },
 {
  "en": "TOTP failed: {0}",
  "zh": "动态验证码验证失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:72"
 },
 {
  "en": "TOTP authentication failed: {0}",
  "zh": "动态验证码双重验证失败：{0}",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:73"
 },
 {
  "en": "TOTP authentication completed successfully",
  "zh": "动态 双重验证成功",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:134"
 },
 {
  "en": "TOTP secret is required because interactive stdin is unavailable",
  "zh": "当前运行方式无法接收手动输入的验证码，需要配置 动态 密钥",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:81"
 },
 {
  "en": "No TOTP secret provided, awaiting manual input",
  "zh": "未配置 动态 密钥，正在等待手动输入验证码",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:84"
 },
 {
  "en": "Manual TOTP input failed or timed out",
  "zh": "手动输入 动态 验证码失败或超时",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:101"
 },
 {
  "en": "Unable to fill TOTP input (attempt {0}/{1})",
  "zh": "无法填写动态验证码；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:108"
 },
 {
  "en": "TOTP input failed after {0} attempts",
  "zh": "尝试 {0} 次后，动态验证码仍未通过",
  "keep": [],
  "source": "src/browser/auth/methods/Totp2FALogin.ts:138"
 },
 {
  "en": "TLS certificate verification is disabled by proxy.ignoreCertificateErrors",
  "zh": "代理设置已关闭安全连接的证书校验",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:48"
 },
 {
  "en": "Launching bundled Chromium | headless={0} ({1}) | platform={2}/{3} | clicks=GhostCursor | proxy={4} | tls={5} | sandbox={6}",
  "zh": "正在启动随附浏览器；无界面模式：{0}（{1}）；平台：{2}/{3}；点击方式：模拟鼠标；代理：{4}；安全连接：{5}；沙盒：{6}",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:55"
 },
 {
  "en": "Detected bundled engine \"{0}\" | isRealEdge={1} | browser and app Chrome versions follow this engine",
  "zh": "检测到浏览器引擎「{0}」；是否为真正的微软浏览器：{1}；浏览器和应用标识版本将与该引擎一致",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:73"
 },
 {
  "en": "Browser launch failed: {0}",
  "zh": "启动浏览器失败：{0}",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:83"
 },
 {
  "en": "Reusing Chromium process | platform={0}/{1} | account={2}",
  "zh": "复用浏览器进程；平台：{0}/{1}；账号：{2}",
  "keep": [
   2
  ],
  "source": "src/browser/BrowserManager.ts:87"
 },
 {
  "en": "Chromium process is unavailable",
  "zh": "浏览器进程不可用",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:94"
 },
 {
  "en": "Cleaned saved session | unrelatedCookiesRemoved={0} | originsRemoved={1} | keeping=Microsoft/Bing/MSN cookies",
  "zh": "已清理保存的会话；移除无关凭据 {0} 条、站点 {1} 个；保留微软、必应和资讯站点的登录凭据",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:99"
 },
 {
  "en": "Restoring saved browser session | cookies={0} | origins={1} | ageMinutes={2} | expiredCookiesRemoved={3}",
  "zh": "恢复已保存的会话；凭据：{0} 条；站点：{1} 个；距保存时间：{2} 分钟；移除过期凭据：{3} 条",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:121"
 },
 {
  "en": "Restoring saved browser session | cookies={0} | origins={1} | ageMinutes={2}",
  "zh": "恢复已保存的会话；凭据：{0} 条；站点：{1} 个；距保存时间：{2} 分钟",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:121"
 },
 {
  "en": "Starting a fresh sign-in without saved cookies",
  "zh": "不使用已保存的登录凭据，开始全新登录",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:130"
 },
 {
  "en": "Discarding saved cookies because the paired fingerprint is unavailable or incompatible | shouldUseFingerprint={0} | savedFingerprintPresent={1} | profileMatch={2} | localeMatch={3}",
  "zh": "已丢弃保存的凭据，配套浏览器指纹缺失或不兼容；应使用指纹：{0}；已保存指纹存在：{1}；浏览器配置匹配：{2}；语言匹配：{3}",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:132"
 },
 {
  "en": "No saved browser session found; login may be required",
  "zh": "没有找到已保存会话，可能需要重新登录",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:138"
 },
 {
  "en": "Saved fingerprint locale or browser profile changed; generating a replacement for {0}",
  "zh": "保存的指纹语言或浏览器配置已变更，正在为 {0} 生成新指纹",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:146"
 },
 {
  "en": "Browser tab crashed | url={0}",
  "zh": "浏览器标签页崩溃；地址：{0}",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserManager.ts:188"
 },
 {
  "en": "Browser context closed",
  "zh": "浏览器会话环境已关闭",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:182"
 },
 {
  "en": "Created context | profile={0} | engine={1} | locale={2} | Accept-Language=\"{3}\" | User-Agent: \"{4}\"",
  "zh": "浏览器会话环境已创建；配置：{0}；引擎：{1}；语言：{2}；请求语言：「{3}」；浏览器标识：「{4}」",
  "keep": [
   4
  ],
  "source": "src/browser/BrowserManager.ts:200"
 },
 {
  "en": "platform={0} | screen={1}x{2} | pixelRatio={3} | persisted={4}",
  "zh": "平台：{0}；屏幕尺寸：{1}×{2}；像素比例：{3}；是否已持久保存：{4}",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:205"
 },
 {
  "en": "Chromium process closed",
  "zh": "浏览器进程已关闭",
  "keep": [],
  "source": "src/browser/BrowserManager.ts:226"
 },
 {
  "en": "Request page is closed, closing or crashed",
  "zh": "请求所用页面已关闭、正在关闭或已崩溃",
  "keep": [],
  "source": "src/browser/BrowserPageRequests.ts:26"
 },
 {
  "en": "No usable in-page fetch context for {0}",
  "zh": "页面内没有可用于请求 {0} 的环境",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserRequestClient.ts:117"
 },
 {
  "en": "Browser page required for {0}",
  "zh": "执行 {0} 需要可用的浏览器页面",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserRequestClient.ts:118"
 },
 {
  "en": "Request page navigated away from the target origin",
  "zh": "请求页面已跳转离开目标站点",
  "keep": [],
  "source": "src/browser/BrowserRequestClient.ts:198"
 },
 {
  "en": "Response exceeds configured byte limit",
  "zh": "响应大小超过配置的字节限制",
  "keep": [],
  "source": "src/network/HttpClient.ts:121"
 },
 {
  "en": "In-page fetch failed | url={0} | error={1} | pageOrigin={2} | errorName={3} | online={4} | networkError={5} | redirect={6} | blockedDirective={7}",
  "zh": "页面内请求失败；地址：{0}；错误：{1}；当前站点：{2}；错误名称：{3}；在线：{4}；网络错误：{5}；跳转：{6}；被拦截指令：{7}",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserRequestClient.ts:291"
 },
 {
  "en": "In-page fetch failed for {0}: {1}",
  "zh": "页面内请求 {0} 失败：{1}",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserRequestClient.ts:299"
 },
 {
  "en": "Helper page navigation failed | origin={0} | {1}",
  "zh": "辅助页面跳转失败；站点：{0}；{1}",
  "keep": [],
  "source": "src/browser/BrowserRequestClient.ts:404"
 },
 {
  "en": "Could not open helper page | origin={0} | {1}",
  "zh": "无法打开辅助页面；站点：{0}；{1}",
  "keep": [],
  "source": "src/browser/BrowserRequestClient.ts:428"
 },
 {
  "en": "This command needs a graphical desktop. Run it locally with DISPLAY or WAYLAND_DISPLAY available, or use POST /sessions/regenerate for headless sign-in.",
  "zh": "此命令需要图形桌面；请在有显示环境的本地运行，或使用无界面登录会话重建接口",
  "keep": [],
  "source": "src/browser/BrowserRuntime.ts:19"
 },
 {
  "en": "Unsupported browser host platform \"{0}\"; use Windows, macOS, or Linux",
  "zh": "不支持当前浏览器宿主平台「{0}」；支持微软桌面、苹果桌面和开源桌面系统",
  "keep": [],
  "source": "src/browser/BrowserRuntime.ts:60"
 },
 {
  "en": "Too many redirects | hops={0}",
  "zh": "页面跳转次数过多；已跳转：{0} 次",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:138"
 },
 {
  "en": "Could not checkpoint session because no active browser page is available",
  "zh": "没有可用的浏览器页面，无法保存会话检查点",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:144"
 },
 {
  "en": "Could not checkpoint active session | error={0}",
  "zh": "保存当前会话检查点失败；错误：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:156"
 },
 {
  "en": "Could not synchronize active browser cookies | error={0}",
  "zh": "同步当前浏览器登录凭据失败；错误：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:177"
 },
 {
  "en": "Applied {0} response cookie(s) and persisted the updated session",
  "zh": "已应用 {0} 条响应凭据，并保存更新后的会话",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:222"
 },
 {
  "en": "Persisted live browser session | cookies={0} | origins={1}",
  "zh": "已保存当前浏览器会话；凭据：{0} 条；站点：{1} 个",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:241"
 },
 {
  "en": "Could not persist refreshed cookies | error={0}",
  "zh": "保存刷新后的登录凭据失败；错误：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:247"
 },
 {
  "en": "Refreshed cookie cache | previous={0} | current={1}",
  "zh": "登录凭据缓存已刷新；之前：{0} 条；当前：{1} 条",
  "keep": [],
  "source": "src/browser/BrowserSessionClient.ts:268"
 },
 {
  "en": "Failed to get app access token: {0}",
  "zh": "获取应用访问令牌失败：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:55"
 },
 {
  "en": "{0} browser started | {1}",
  "zh": "{0}浏览器已启动；{1}",
  "keep": [
   1
  ],
  "source": "src/browser/BrowserSessions.ts:72"
 },
 {
  "en": "Chromium did not return a valid timezone and UTC offset",
  "zh": "浏览器没有返回有效的时区和世界时偏移",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:122"
 },
 {
  "en": "Chromium returned an unsupported timezone: {0}",
  "zh": "浏览器返回了不支持的时区：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:128"
 },
 {
  "en": "Read from Chromium | timezone={0} | offset={1}",
  "zh": "已从浏览器读取时区：{0}；时间偏移：{1}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:137"
 },
 {
  "en": "Session not saved (browser already closing): {0}",
  "zh": "浏览器正在关闭，会话未保存：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:171"
 },
 {
  "en": "Failed to save session: {0}",
  "zh": "保存会话失败：{0}",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:177"
 },
 {
  "en": "Browser was already closed.",
  "zh": "浏览器已关闭",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:185"
 },
 {
  "en": "Shutdown encountered an error, but process exiting.",
  "zh": "关闭过程中发生错误，进程仍将退出",
  "keep": [],
  "source": "src/browser/BrowserSessions.ts:187"
 },
 {
  "en": "Dismissed: {0}",
  "zh": "已关闭弹窗：{0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:68"
 },
 {
  "en": "Handler error: {0}",
  "zh": "弹窗处理出错：{0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:78"
 },
 {
  "en": "Dismissed: Rewards welcome dialog",
  "zh": "已关闭积分欢迎弹窗",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:106"
 },
 {
  "en": "Rewards welcome dismissal failed | attempt={0}/2 | {1}",
  "zh": "关闭积分欢迎弹窗失败；第 {0}/2 次尝试；{1}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:115"
 },
 {
  "en": "Rewards welcome dialog remained visible after two dismissal attempts",
  "zh": "两次尝试后积分欢迎弹窗仍可见",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:124"
 },
 {
  "en": "Dismissed: cookie consent banner ({0})",
  "zh": "已关闭网站凭据同意提示（{0}）",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:166"
 },
 {
  "en": "Cookie consent banner remained visible after two dismissal attempts; page controls may be covered",
  "zh": "两次尝试后网站凭据同意提示仍可见，可能遮挡页面控件",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:181"
 },
 {
  "en": "Could not dismiss cookie consent | error={0}",
  "zh": "无法关闭网站凭据同意提示；错误：{0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:188"
 },
 {
  "en": "Dismissed: MSN privacy banner (Reject All)",
  "zh": "已关闭微软资讯隐私横幅，并选择全部拒绝",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:209"
 },
 {
  "en": "Bad page detected, reloading!",
  "zh": "检测到异常页面，正在重新加载",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:218"
 },
 {
  "en": "Reload check failed: {0}",
  "zh": "页面重载检查失败：{0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:229"
 },
 {
  "en": "Failed for {0}: {1}",
  "zh": "处理 {0} 失败：{1}",
  "keep": [
   0
  ],
  "source": "src/browser/BrowserUtils.ts:244"
 },
 {
  "en": "Modified request body: isFidoSupported set to {0}",
  "zh": "已修改请求正文：硬件安全密钥支持状态设为 {0}",
  "keep": [],
  "source": "src/browser/BrowserUtils.ts:264"
 },
 {
  "en": "Ghostclick page closed before the click",
  "zh": "模拟鼠标点击前页面已关闭",
  "keep": [],
  "source": "src/browser/GhostClick.ts:17"
 },
 {
  "en": "Ghostclick timed out after {0}ms | {1} | {2}",
  "zh": "模拟鼠标点击超过 {0} 毫秒仍未完成；{1}；{2}",
  "keep": [],
  "source": "src/browser/GhostClick.ts:19"
 },
 {
  "en": "Ghostclick requires one control; found {0} | {1}",
  "zh": "模拟鼠标点击要求唯一控件，实际找到 {0} 个；{1}",
  "keep": [],
  "source": "src/browser/GhostClick.ts:96"
 },
 {
  "en": "Scroll page closed",
  "zh": "滚动页面已关闭",
  "keep": [],
  "source": "src/browser/HumanScroll.ts:159"
 },
 {
  "en": "Scrolling timed out after {0}ms",
  "zh": "页面滚动超过 {0} 毫秒仍未完成",
  "keep": [],
  "source": "src/browser/HumanScroll.ts:161"
 },
 {
  "en": "Scroll distance must be finite",
  "zh": "滚动距离必须是有限数值",
  "keep": [],
  "source": "src/browser/HumanScroll.ts:168"
 },
 {
  "en": "Scrolling did not move; the page or panel may be blocking mouse-wheel input",
  "zh": "页面没有随滚轮移动，可能被页面或弹层阻挡",
  "keep": [],
  "source": "src/browser/HumanScroll.ts:212"
 },
 {
  "en": "Media loading enabled during authentication | image and media requests will not be blocked",
  "zh": "登录验证期间允许加载图片和媒体资源",
  "keep": [],
  "source": "src/browser/MediaBlocker.ts:35"
 },
 {
  "en": "Media loading disabled after authentication | blockedResourceTypes=image,media | httpCache=disabled-by-routing",
  "zh": "验证完成后停止加载图片和媒体；请求拦截也会停用浏览器缓存",
  "keep": [],
  "source": "src/browser/MediaBlocker.ts:78"
 },
 {
  "en": "Invalid Rewards app browser version: {0}",
  "zh": "积分应用的浏览器版本无效：{0}",
  "keep": [],
  "source": "src/browser/RewardsAppProfile.ts:11"
 },
 {
  "en": "Rewards browser session is closing",
  "zh": "积分浏览器会话正在关闭",
  "keep": [],
  "source": "src/browser/RewardsBrowserContext.ts:108"
 },
 {
  "en": "Rewards app task requires a running browser",
  "zh": "应用积分任务需要正在运行的浏览器",
  "keep": [],
  "source": "src/browser/RewardsBrowserContext.ts:97"
 },
 {
  "en": "Could not read the running Chromium version: {0}",
  "zh": "无法读取运行中浏览器的版本：{0}",
  "keep": [],
  "source": "src/browser/UserAgent.ts:23"
 },
 {
  "en": "{0} browser identity is not initialized",
  "zh": "{0}浏览器身份信息尚未初始化",
  "keep": [],
  "source": "src/browser/UserAgent.ts:39"
 },
 {
  "en": "Launch Chromium before preparing its browser identity",
  "zh": "准备浏览器身份信息之前，必须先启动浏览器",
  "keep": [],
  "source": "src/browser/UserAgent.ts:62"
 },
 {
  "en": "{0} expects a boolean.",
  "zh": "{0} 要求布尔值",
  "keep": [],
  "source": "src/config/ConfigEnvOverrides.ts:132"
 },
 {
  "en": "{0} expects a finite number.",
  "zh": "{0} 要求有限数值",
  "keep": [],
  "source": "src/config/ConfigEnvOverrides.ts:137"
 },
 {
  "en": "Config must be a JSON object",
  "zh": "配置必须是一个结构化对象",
  "keep": [],
  "source": "src/config/Validator.ts:255"
 },
 {
  "en": "No accounts found in environment. Set at least one ACCOUNT_N_EMAIL (see env.example).",
  "zh": "环境变量中没有账号；至少需要设置一个 ACCOUNT_N_EMAIL，填写方式见环境变量示例",
  "keep": [],
  "source": "src/config/Load.ts:24"
 },
 {
  "en": "config.json not found - place it in the project root (dist/ and src/ are also searched as fallbacks)",
  "zh": "未找到 config.json，请将其放在项目根目录；脚本也会检查编译目录和源码目录",
  "keep": [],
  "source": "src/config/Load.ts:37"
 },
 {
  "en": "No config fallback for {0}",
  "zh": "配置项 {0} 没有备用默认值",
  "keep": [],
  "source": "src/config/Validator.ts:297"
 },
 {
  "en": "Config could not be normalized to the documented defaults",
  "zh": "配置无法整理为文档规定的默认格式",
  "keep": [],
  "source": "src/config/Validator.ts:316"
 },
 {
  "en": "Accounts validation failed: {0} issue(s) - see logs above",
  "zh": "账号校验失败，共 {0} 个问题，详见上方日志",
  "keep": [],
  "source": "src/config/Validator.ts:341"
 },
 {
  "en": "Could not load {0} at {1}: {2}",
  "zh": "无法从 {1} 读取 {0}：{2}",
  "keep": [],
  "source": "src/control-api/configEditor.js:19"
 },
 {
  "en": "Config validator module has no supported validation function",
  "zh": "配置校验模块没有受支持的校验函数",
  "keep": [],
  "source": "src/control-api/configEditor.js:41"
 },
 {
  "en": "Unsafe config key: {0}",
  "zh": "不安全的配置键：{0}",
  "keep": [],
  "source": "src/control-api/configEditor.js:82"
 },
 {
  "en": "ConfigSync module not found - run `npm run build`.",
  "zh": "未找到配置同步模块，请先执行 npm run build",
  "keep": [],
  "source": "src/control-api/configEditor.js:99"
 },
 {
  "en": "Expected an array of run summaries",
  "zh": "运行摘要应为数组",
  "keep": [],
  "source": "src/control-api/history.js:8"
 },
 {
  "en": "Request body timed out.",
  "zh": "读取请求正文超时",
  "keep": [],
  "source": "src/control-api/http.js:17"
 },
 {
  "en": "Request body was interrupted.",
  "zh": "请求正文传输中断",
  "keep": [],
  "source": "src/control-api/http.js:38"
 },
 {
  "en": "Request body too large.",
  "zh": "请求正文过大",
  "keep": [],
  "source": "src/control-api/http.js:64"
 },
 {
  "en": "Invalid JSON body.",
  "zh": "请求正文不是有效的结构化数据",
  "keep": [],
  "source": "src/control-api/http.js:55"
 },
 {
  "en": "Body must be a JSON object.",
  "zh": "请求正文必须是一个结构化对象",
  "keep": [],
  "source": "src/control-api/http.js:84"
 },
 {
  "en": "Cannot start: a restart is in progress.",
  "zh": "无法启动：服务正在重启",
  "keep": [],
  "source": "src/control-api/processManager.js:91"
 },
 {
  "en": "Session runner is unavailable; run npm run build and restart the API.",
  "zh": "登录会话执行器不可用，请重新编译项目并重启控制接口",
  "keep": [],
  "source": "src/control-api/processManager.js:93"
 },
 {
  "en": "Cannot start: a run is already {0}.",
  "zh": "无法启动：已有任务处于{0}状态",
  "keep": [],
  "source": "src/control-api/processManager.js:133"
 },
 {
  "en": "Cannot stop: no run is in progress.",
  "zh": "无法停止：当前没有运行中的任务",
  "keep": [],
  "source": "src/control-api/processManager.js:218"
 },
 {
  "en": "Cannot stop: the requested run is no longer active.",
  "zh": "无法停止：指定运行已不再活跃",
  "keep": [],
  "source": "src/control-api/processManager.js:222"
 },
 {
  "en": "A restart is already in progress.",
  "zh": "服务已在重启中",
  "keep": [],
  "source": "src/control-api/processManager.js:265"
 },
 {
  "en": "Cannot start: the control API is shutting down.",
  "zh": "无法启动：控制接口正在关闭",
  "keep": [],
  "source": "src/control-api/processManager.js:409"
 },
 {
  "en": "`args` must be an array of strings.",
  "zh": "启动参数必须是字符串数组",
  "keep": [],
  "source": "src/control-api/processManager.js:423"
 },
 {
  "en": "Only the -dev bot argument is accepted; executable arguments are fixed.",
  "zh": "仅接受调试运行参数，其他可执行参数已固定",
  "keep": [],
  "source": "src/control-api/processManager.js:426"
 },
 {
  "en": "`env` must be a JSON object.",
  "zh": "环境变量必须是结构化对象",
  "keep": [],
  "source": "src/control-api/processManager.js:443"
 },
 {
  "en": "Invalid environment variable name: {0}.",
  "zh": "环境变量名称无效：{0}",
  "keep": [],
  "source": "src/control-api/processManager.js:448"
 },
 {
  "en": "Environment override is not allowed: {0}",
  "zh": "不允许覆盖此环境变量：{0}",
  "keep": [],
  "source": "src/control-api/processManager.js:453"
 },
 {
  "en": "Environment override {0} must be a string, number, boolean, or null.",
  "zh": "环境变量 {0} 的覆盖值必须为字符串、数字、布尔值或空值",
  "keep": [],
  "source": "src/control-api/processManager.js:460"
 },
 {
  "en": "`force` must be a boolean.",
  "zh": "强制操作参数必须是布尔值",
  "keep": [],
  "source": "src/control-api/routes/run.js:6"
 },
 {
  "en": "config.json is invalid",
  "zh": "config.json 内容无效",
  "keep": [],
  "source": "src/control-api/routes/sessions.js:105"
 },
 {
  "en": "API_RUN_COMMAND points to npm.cmd, but npm-cli.js could not be found. Remove the override to use the automatic launcher.",
  "zh": "运行命令指向批处理入口，但找不到包管理器的脚本入口；请移除该覆盖值，改用自动启动方式",
  "keep": [],
  "source": "src/control-api/runCommand.js:32"
 },
 {
  "en": "API_RUN_COMMAND cannot be a .cmd or .bat file. Use a native executable or JavaScript entry point.",
  "zh": "运行命令不能是批处理文件，请使用原生程序或脚本入口",
  "keep": [],
  "source": "src/control-api/runCommand.js:40"
 },
 {
  "en": "schedule.json is corrupt: {0}",
  "zh": "定时配置文件损坏：{0}",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:64"
 },
 {
  "en": "schedule.json must contain an object.",
  "zh": "定时配置文件必须包含一个对象",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:67"
 },
 {
  "en": "schedule.json has a non-boolean `enabled` value.",
  "zh": "定时配置的启用状态不是布尔值",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:75"
 },
 {
  "en": "schedule.json has an invalid `cron` expression.",
  "zh": "定时配置的执行时间表达式无效",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:80"
 },
 {
  "en": "schedule.json has a non-boolean `skipIfRunning` value.",
  "zh": "定时配置的运行中跳过选项不是布尔值",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:85"
 },
 {
  "en": "schedule.json has invalid `excludedAccountIndexes`.",
  "zh": "定时配置的排除账号序号无效",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:93"
 },
 {
  "en": "schedule.json enables scheduling without a cron expression.",
  "zh": "定时配置已启用，但没有填写执行时间",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:98"
 },
 {
  "en": "Invalid cron expression (5 fields, e.g. \"0 9 * * *\").",
  "zh": "定时表达式无效，需要五段，例如每天九点可写为 0 9 * * *",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:132"
 },
 {
  "en": "enabled must be a boolean.",
  "zh": "启用状态必须是布尔值",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:140"
 },
 {
  "en": "skipIfRunning must be a boolean.",
  "zh": "运行中跳过选项必须是布尔值",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:146"
 },
 {
  "en": "excludedAccountIndexes must be an array.",
  "zh": "排除账号序号必须是数组",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:152"
 },
 {
  "en": "excludedAccountIndexes must contain only positive integers.",
  "zh": "排除账号序号只能包含正整数",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:156"
 },
 {
  "en": "Cannot enable the schedule without a cron expression.",
  "zh": "未填写执行时间，无法启用定时计划",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:163"
 },
 {
  "en": "Invalid CRON_SCHEDULE: expected a five-field cron expression (e.g. \"0 7 * * *\").",
  "zh": "定时环境变量无效，需要五段表达式，例如每天七点可写为 0 7 * * *",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:194"
 },
 {
  "en": "Scheduling requires the Docker cron backend; no schedule was saved.",
  "zh": "此定时计划需要容器定时后端，当前未保存任何计划",
  "keep": [],
  "source": "src/control-api/scheduleStore.js:197"
 },
 {
  "en": "Request timed out after {0}ms",
  "zh": "请求超过 {0} 毫秒仍未完成",
  "keep": [],
  "source": "src/control-api/trigger.js:56"
 },
 {
  "en": "Starting session for {0}",
  "zh": "开始处理 {0} 的登录会话",
  "keep": [
   0
  ],
  "source": "src/core/AccountRunner.ts:20"
 },
 {
  "en": "Desktop signed in; session saved | rewardsMode={0}",
  "zh": "电脑端已登录，会话已保存；任务方式：{0}",
  "keep": [],
  "source": "src/core/AccountRunner.ts:38"
 },
 {
  "en": "User data loaded | source={0} | rewardsMode={1} | currentBalance={2} | warnings={3}",
  "zh": "账号数据已读取；来源：{0}；任务方式：{1}；当前余额：{2}；警告：{3} 条",
  "keep": [],
  "source": "src/core/AccountRunner.ts:48"
 },
 {
  "en": "Microsoft profile returned an invalid country; retaining {0}",
  "zh": "微软资料返回的国家无效，继续使用 {0}",
  "keep": [],
  "source": "src/core/AccountRunner.ts:65"
 },
 {
  "en": "{0} | status={1} | reason={2} | offerId={3} | pointsGained={4} | operationId={5} | errorCode={6} | message={7}",
  "zh": "{0}；状态：{1}；原因：{2}；活动标识：{3}；获得积分：{4}；操作编号：{5}；错误码：{6}；说明：{7}",
  "keep": [
   3,
   5
  ],
  "source": "src/core/BotContext.ts:146"
 },
 {
  "en": "{0} | status={1} | reason={2} | offerId={3} | pointsGained={4} | operationId={5} | errorCode={6}",
  "zh": "{0}；状态：{1}；原因：{2}；活动标识：{3}；获得积分：{4}；操作编号：{5}；错误码：{6}",
  "keep": [
   3,
   5
  ],
  "source": "src/core/BotContext.ts:146"
 },
 {
  "en": "{0} | status={1} | reason={2} | offerId={3} | pointsGained={4} | operationId={5} | message={6}",
  "zh": "{0}；状态：{1}；原因：{2}；活动标识：{3}；获得积分：{4}；操作编号：{5}；说明：{6}",
  "keep": [
   3,
   5
  ],
  "source": "src/core/BotContext.ts:146"
 },
 {
  "en": "{0} | status={1} | reason={2} | offerId={3} | pointsGained={4} | operationId={5}",
  "zh": "{0}；状态：{1}；原因：{2}；活动标识：{3}；获得积分：{4}；操作编号：{5}",
  "keep": [
   3,
   5
  ],
  "source": "src/core/BotContext.ts:146"
 },
 {
  "en": "{0} browser page is unavailable",
  "zh": "{0}浏览器页面不可用",
  "keep": [],
  "source": "src/core/BotContext.ts:205"
 },
 {
  "en": "Browser mode enabled - starting desktop-first, trying Daily Set and More Rewards in the flyout before /earn fallbacks, and using rendered controls for web activities.",
  "zh": "已启用浏览器任务模式：先运行电脑端，在必应侧栏尝试每日三项和更多奖励，再到任务页补做剩余项目；网页任务通过实际页面控件执行",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:11"
 },
 {
  "en": "App-only API exceptions enabled in browser mode: {0}. These workers still obtain an app access token and use the Microsoft Rewards app-platform API.",
  "zh": "浏览器模式下已允许以下任务使用应用接口：{0}。这些任务仍需取得应用访问令牌，并调用微软积分的应用平台接口",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:22"
 },
 {
  "en": "doVisualSearch will use the rendered Rewards activation control and Bing Visual Search UI.",
  "zh": "视觉搜索将使用积分页面上的激活控件和必应图片搜索界面",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:31"
 },
 {
  "en": "doClaimBonusPoints always claims through the API in both modes.",
  "zh": "额外奖励领取在两种运行模式下都通过接口提交",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:40"
 },
 {
  "en": "edgeBrowsing enabled - runs only on the desktop session, in the background after desktop sign-in, in both Rewards modes.",
  "zh": "后台浏览奖励已启用：两种模式下都只在电脑登录后、使用电脑端会话后台运行",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:44"
 },
 {
  "en": "browserSearchApiReport enabled: checks today's Bing Search Streak after the desktop search phase and sends one API search only when completion is not confirmed, including when desktop searches are skipped.",
  "zh": "已启用浏览器搜索补上报：电脑搜索阶段结束后检查当天必应连续搜索状态，仅在未确认完成时补发一次接口搜索；电脑搜索被跳过时也会检查",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:52"
 },
 {
  "en": "API mode uses browsers only for sign-in and cookie capture; all activities, searches and Visual Search continue over HTTP.",
  "zh": "已启用接口任务模式：浏览器只负责登录和采集登录凭据，任务、搜索和视觉搜索通过网络接口执行",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:60"
 },
 {
  "en": "API mode | Desktop: {0} | Mobile: {1}",
  "zh": "接口模式；电脑端：{0}；手机端：{1}",
  "keep": [],
  "source": "src/core/ExecutionModeLog.ts:65"
 },
 {
  "en": "Run cancelled",
  "zh": "运行已取消",
  "keep": [],
  "source": "src/util/Utils.ts:35"
 },
 {
  "en": "{0}; closing sessions and flushing output",
  "zh": "{0}；正在关闭会话并写完待输出日志",
  "keep": [],
  "source": "src/core/ProcessLifecycle.ts:28"
 },
 {
  "en": "Starting Microsoft Rewards Script | v{0} | Accounts: {1} | Clusters: {2}",
  "zh": "开始运行微软积分脚本；版本 {0}；账号数：{1}；并行进程数：{2}",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:39"
 },
 {
  "en": "Primary process started | PID: {0}",
  "zh": "主进程已启动；进程号：{0}",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:57"
 },
 {
  "en": "Worker {0} disconnected",
  "zh": "执行进程 {0} 已断开连接",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:144"
 },
 {
  "en": "Worker spawned | PID: {0}",
  "zh": "已创建执行进程；进程号：{0}",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:176"
 },
 {
  "en": "Worker {0} received {1} accounts.",
  "zh": "执行进程 {0} 已接收 {1} 个账号",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:183"
 },
 {
  "en": "Worker task crash: {0}",
  "zh": "账号执行进程异常退出：{0}",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:201"
 },
 {
  "en": "Starting account: {0} | geoLocale: {1} | locale: {2}{3}",
  "zh": "开始运行账号：{0}；账号地区：{1}；浏览器语言：{2}{3}",
  "keep": [
   0
  ],
  "source": "src/core/RunCoordinator.ts:238"
 },
 {
  "en": "Account flow failed for {0}: {1}",
  "zh": "账号 {0} 的执行流程失败：{1}",
  "keep": [
   0
  ],
  "source": "src/core/RunCoordinator.ts:280"
 },
 {
  "en": "{0}: {1}",
  "zh": "{0}：{1}",
  "keep": [
   0
  ],
  "source": "src/core/RunCoordinator.ts:349"
 },
 {
  "en": "accountDelay must use non-negative values with max greater than or equal to min",
  "zh": "账号间隔必须是非负数，且最大值不能小于最小值",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:393"
 },
 {
  "en": "Waiting {0} seconds before starting the next account{1} | waitMs={2}",
  "zh": "等待 {0} 秒后开始下一个账号{1}；等待毫秒数：{2}",
  "keep": [
   1
  ],
  "source": "src/core/RunCoordinator.ts:397"
 },
 {
  "en": "Read to Earn points earned | read={0} | pointsGained={1} | currentBalance={2}",
  "zh": "阅读积分已到账；阅读第 {0} 次；获得积分：{1}；当前余额：{2}",
  "keep": [],
  "source": "src/logging/ReadToEarnLog.ts:8"
 },
 {
  "en": "Read to Earn credit not confirmed yet; checking again | read={0} | check={1}/{2} | nextCheck={3}/{4}",
  "zh": "尚未确认阅读积分到账，继续检查；阅读第 {0} 次；本次检查：{1}/{2}；下次检查：{3}/{4}",
  "keep": [],
  "source": "src/logging/ReadToEarnLog.ts:17"
 },
 {
  "en": "{0} | accountsProcessed={1} | pointsGained={2} | previousBalance={3} | currentBalance={4} | runtimeMinutes={5} | status={6}",
  "zh": "{0}；已处理账号数：{1}；本轮获得积分：{2}；运行前余额：{3}；当前余额：{4}；耗时：{5} 分钟；状态：{6}",
  "keep": [],
  "source": "src/logging/RunSummary.ts:28"
 },
 {
  "en": "Finished account: {0} | pointsGained={1} | previousBalance={2} | currentBalance={3} | durationSeconds={4} | status={5} | reason={6} | activities: {7} completed, {8} incomplete, {9} unavailable, {10} not applicable",
  "zh": "账号运行已结束：{0}；获得积分：{1}；运行前余额：{2}；当前余额：{3}；耗时：{4} 秒；状态：{5}；原因：{6}；任务统计：{7} 项已完成、{8} 项未完成、{9} 项未提供、{10} 项不适用",
  "keep": [
   0
  ],
  "source": "src/logging/RunSummary.ts:63"
 },
 {
  "en": "Finished account: {0} | pointsGained={1} | previousBalance={2} | currentBalance={3} | durationSeconds={4} | status={5} | activities: {6} completed, {7} incomplete, {8} unavailable, {9} not applicable",
  "zh": "账号运行已结束：{0}；获得积分：{1}；运行前余额：{2}；当前余额：{3}；耗时：{4} 秒；状态：{5}；任务统计：{6} 项已完成、{7} 项未完成、{8} 项未提供、{9} 项不适用",
  "keep": [
   0
  ],
  "source": "src/logging/RunSummary.ts:63"
 },
 {
  "en": "{0} completed today{1}",
  "zh": "{0}今天已完成{1}",
  "keep": [],
  "source": "src/logging/StreakLog.ts:16"
 },
 {
  "en": "Request aborted",
  "zh": "请求已中止",
  "keep": [],
  "source": "src/network/HttpClient.ts:110"
 },
 {
  "en": "Request deadline exceeded",
  "zh": "请求超过截止时间",
  "keep": [],
  "source": "src/network/HttpClient.ts:168"
 },
 {
  "en": "Skipping {0}: \"reportActivity\" not discovered in bundle",
  "zh": "跳过 {0}：未在页面程序中发现活动上报操作",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ClaimReward.ts:20"
 },
 {
  "en": "Skipping {0}: no live hash for the activation offer",
  "zh": "跳过 {0}：激活活动缺少当前有效的校验值",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ActivateSearchOnBing.ts:21"
 },
 {
  "en": "Activated activity | offerId={0} | status={1} | acknowledged={2}",
  "zh": "已提交活动激活；活动标识：{0}；状态：{1}；服务端已接受：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ActivateSearchOnBing.ts:40"
 },
 {
  "en": "Activation failed | offerId={0} | message={1}",
  "zh": "激活失败；活动标识：{0}；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ActivateSearchOnBing.ts:49"
 },
 {
  "en": "No search-multiplier perk present on the dashboard",
  "zh": "控制台没有提供搜索倍增奖励",
  "keep": [],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:11"
 },
 {
  "en": "{0}x search perk present in dashboard but missing from the page snapshot - cannot activate | offerId={1}",
  "zh": "控制台存在 {0} 倍搜索奖励，但页面快照中找不到，无法激活；活动标识：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:26"
 },
 {
  "en": "{0}x search perk is present but activation metadata is incomplete | offerId={1}",
  "zh": "存在 {0} 倍搜索奖励，但激活资料不完整；活动标识：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:41"
 },
 {
  "en": "Skipping: \"reportActivity\" action id not discovered in bundle",
  "zh": "跳过激活：未在页面程序中发现活动上报操作标识",
  "keep": [],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:51"
 },
 {
  "en": "Activating {0}x search perk | offerId={1} | geo={2}",
  "zh": "正在激活 {0} 倍搜索奖励；活动标识：{1}；地区：{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:61"
 },
 {
  "en": "Response | offerId={0} | status={1} | acknowledged={2}",
  "zh": "收到激活响应；活动标识：{0}；状态：{1}；服务端已接受：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:89"
 },
 {
  "en": "Activated {0}x search perk | offerId={1} | daily search cap is now boosted",
  "zh": "已激活 {0} 倍搜索奖励；活动标识：{1}；每日搜索积分上限已提高",
  "keep": [
   1
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:96"
 },
 {
  "en": "Activation not acknowledged | offerId={0} | status={1}",
  "zh": "尚未确认服务端接受激活；活动标识：{0}；状态：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:412"
 },
 {
  "en": "Error activating search perk | offerId={0} | message={1}",
  "zh": "激活搜索加成出错；活动标识：{0}；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ActivateSearchPerk.ts:120"
 },
 {
  "en": "Mobile punchcards failed | {0}",
  "zh": "手机端任务卡执行失败；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:18"
 },
 {
  "en": "Desktop punchcard data unavailable | {0}",
  "zh": "无法读取电脑端任务卡数据；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:35"
 },
 {
  "en": "Desktop punchcards failed | {0}",
  "zh": "电脑端任务卡执行失败；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:48"
 },
 {
  "en": "No actionable quests",
  "zh": "没有当前可执行的系列任务",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:87"
 },
 {
  "en": "Found {0} incomplete quest(s) | apiMatched={1}",
  "zh": "找到 {0} 个未完成的系列任务；接口匹配数：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:91"
 },
 {
  "en": "Error solving quest \"{0}\" | message={1}",
  "zh": "执行系列任务「{0}」出错；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:103"
 },
 {
  "en": "Finished processing quests",
  "zh": "系列任务处理流程已结束",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:113"
 },
 {
  "en": "/earn unavailable - cannot list quests",
  "zh": "无法访问任务页，不能列出系列任务",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:120"
 },
 {
  "en": "Failed fetching quest list | {0}",
  "zh": "获取系列任务列表失败；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:130"
 },
 {
  "en": "Solving \"{0}\" | children={1} | reportable={2}",
  "zh": "正在处理「{0}」；子任务：{1}；可上报：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:183"
 },
 {
  "en": "Skip {0}: not reportable (locked={1} disabled={2} done={3} hash={4})",
  "zh": "跳过 {0}：当前无法上报；已锁定：{1}；已停用：{2}；已完成：{3}；具备校验值：{4}",
  "keep": [
   0,
   4
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:198"
 },
 {
  "en": "Skip {0}: multi-day search task",
  "zh": "跳过 {0}：这是跨天搜索任务",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:208"
 },
 {
  "en": "Skip {0}: already attempted in another browser context",
  "zh": "跳过 {0}：已在另一个浏览器环境中尝试过",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:215"
 },
 {
  "en": "Reward for \"{0}\" is ready for manual redemption | offerId={1}",
  "zh": "「{0}」的奖励已可手动兑换；活动标识：{1}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:226"
 },
 {
  "en": "Quest \"{0}\" processed | reported={1}{2} | currentBalance={3}{4}",
  "zh": "系列任务「{0}」处理结束；已上报：{1}{2}；当前余额：{3}{4}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:245"
 },
 {
  "en": "Quest page unavailable for \"{0}\"",
  "zh": "无法访问系列任务「{0}」的页面",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:260"
 },
 {
  "en": "No actionable children for \"{0}\"",
  "zh": "「{0}」没有当前可执行的子任务",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:271"
 },
 {
  "en": "Failed fetching quest page for \"{0}\" | {1}",
  "zh": "获取系列任务「{0}」的页面失败；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiPunchCards.ts:276"
 },
 {
  "en": "Starting Read to Earn | transport=api | offerId={0} | progress={1}/{2} | currentBalance={3}",
  "zh": "开始通过接口阅读赚积分；活动标识：{0}；进度：{1}/{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:29"
 },
 {
  "en": "Read report request failed; checking whether Microsoft still credited it | report={0}",
  "zh": "阅读上报请求失败，正在核实微软是否仍已入账；第 {0} 次上报",
  "keep": [],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:56"
 },
 {
  "en": "Read to Earn refresh unavailable | report={0} | message={1}",
  "zh": "无法刷新阅读任务状态；第 {0} 次上报；说明：{1}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:82"
 },
 {
  "en": "Read report processed | report={0} | status={1} | reason={2} | progress={3}->{4} | previousBalance={5} | currentBalance={6} | pointsGained={7}",
  "zh": "本次阅读上报已处理；第 {0} 次上报；状态：{1}；原因：{2}；进度：{3}→{4}；之前余额：{5}；当前余额：{6}；获得积分：{7}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:116"
 },
 {
  "en": "Waiting before next read report | activity=read-to-earn | report={0} | waitMs={1}",
  "zh": "等待下一次阅读上报；第 {0} 次上报；等待：{1} 毫秒",
  "keep": [],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:168"
 },
 {
  "en": "Permanently skipped offer | offerId={0}",
  "zh": "永久跳过的活动；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:30"
 },
 {
  "en": "Offer cannot currently be reported | offerId={0}",
  "zh": "活动当前无法上报；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:25"
 },
 {
  "en": "Skipping {0}: awards no points and skipNonPointTasks=true",
  "zh": "跳过 {0}：活动没有积分，且配置启用了跳过无积分任务",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:52"
 },
 {
  "en": "Skipping {0}: \"reportActivity\" was not discovered",
  "zh": "跳过 {0}：没有发现活动上报操作",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:43"
 },
 {
  "en": "Reporting Rewards offer | offerId={0} | currentBalance={1}",
  "zh": "正在上报积分活动；活动标识：{0}；当前余额：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:59"
 },
 {
  "en": "Offer response | offerId={0} | status={1} | acknowledged={2}",
  "zh": "收到活动响应；活动标识：{0}；状态：{1}；服务端已接受：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:94"
 },
 {
  "en": "API offer failed | offerId={0} | {1}",
  "zh": "接口任务失败；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:100"
 },
 {
  "en": "Completed API offer | {0}",
  "zh": "接口任务已完成；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:113"
 },
 {
  "en": "API offer was not confirmed | {0}",
  "zh": "接口任务尚未确认完成；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:115"
 },
 {
  "en": "Flyout offer verified | offerId={0} | status={1} | pointsGained={2} | currentBalance={3}",
  "zh": "已核实侧栏活动；活动标识：{0}；状态：{1}；获得积分：{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ApiUrlReward.ts:138"
 },
 {
  "en": "Skipping {0}: no live hash on quest child",
  "zh": "跳过 {0}：系列任务的子项目没有有效校验值",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ClaimReward.ts:29"
 },
 {
  "en": "Claiming reward | offerId={0} | geo={1}",
  "zh": "正在领取奖励；活动标识：{0}；地区：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ClaimReward.ts:33"
 },
 {
  "en": "Quest reward verified | offerId={0} | status={1} | pointsGained={2} | currentBalance={3}",
  "zh": "已核实系列任务奖励；活动标识：{0}；状态：{1}；获得积分：{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/ClaimReward.ts:80"
 },
 {
  "en": "Already enabled | remainingDays={0}",
  "zh": "连续签到保护已启用；剩余保护天数：{0}",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:17"
 },
 {
  "en": "No protection days remain; skipping",
  "zh": "已没有可用保护天数，跳过启用",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:25"
 },
 {
  "en": "Verification | attempt={0}/{1} | enabled={2} | remainingDays={3} | status={4}",
  "zh": "核实保护状态；第 {0}/{1} 次；已启用：{2}；剩余保护天数：{3}；状态：{4}",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:38"
 },
 {
  "en": "Enabled | remainingDays={0} | status={1}",
  "zh": "连续签到保护已启用；剩余天数：{0}；状态：{1}",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:45"
 },
 {
  "en": "Waiting for fresh protection state | waitMs={0}",
  "zh": "等待刷新连续签到保护状态；等待：{0} 毫秒",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:53"
 },
 {
  "en": "Activation failed | {0}",
  "zh": "激活失败；{0}",
  "keep": [],
  "source": "src/rewards/api/actions/EnsureStreakProtection.ts:67"
 },
 {
  "en": "Flyout page returned status {0}",
  "zh": "必应积分侧栏页面返回异常状态 {0}",
  "keep": [],
  "source": "src/rewards/api/actions/FlyoutActivityReport.ts:44"
 },
 {
  "en": "Flyout has no reportable card | offerId={0} | card={1} | hash={2} | userId={3}",
  "zh": "侧栏没有可上报的活动卡片；活动标识：{0}；卡片：{1}；校验值：{2}；用户标识：{3}",
  "keep": [
   0,
   2,
   3
  ],
  "source": "src/rewards/api/actions/FlyoutActivityReport.ts:50"
 },
 {
  "en": "Report response | offerId={0} | status={1} | errorCode={2} | offerComplete={3} | earnedCredits={4}",
  "zh": "收到上报响应；活动标识：{0}；状态：{1}；错误码：{2}；活动已完成：{3}；获得积分：{4}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/actions/FlyoutActivityReport.ts:96"
 },
 {
  "en": "{0} sign-in browser closed; continuing with its saved cookies over HTTP",
  "zh": "{0}登录浏览器已关闭，继续使用其保存的凭据通过接口执行",
  "keep": [],
  "source": "src/rewards/api/ApiWorkflow.ts:24"
 },
 {
  "en": "Earnable today | Mobile: {0} | Browser: {1} | App: {2} | {3} | locale: {4}",
  "zh": "今日可获积分；手机端：{0}；浏览器：{1}；应用：{2}；{3}；语言地区：{4}",
  "keep": [
   3
  ],
  "source": "src/rewards/browser/BrowserWorkflow.ts:39"
 },
 {
  "en": "Parallel HTTP work: desktop searches while mobile runs app tasks and searches; browsers are closed",
  "zh": "并行执行接口任务：电脑端搜索，同时手机端执行应用任务和搜索；浏览器已关闭",
  "keep": [],
  "source": "src/rewards/api/ApiWorkflow.ts:99"
 },
 {
  "en": "Points collected | pointsGained={0} | currentBalance={1} | account={2}",
  "zh": "积分已收取；获得积分：{0}；当前余额：{1}；账号：{2}",
  "keep": [
   2
  ],
  "source": "src/rewards/browser/BrowserWorkflow.ts:123"
 },
 {
  "en": "Starting Bing searches | currentBalance={0}",
  "zh": "开始必应搜索；当前余额：{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:43"
 },
 {
  "en": "Search quota unavailable",
  "zh": "无法读取搜索额度",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:416"
 },
 {
  "en": "Search points remaining | edge={0} | desktop={1} | mobile={2}",
  "zh": "剩余可获搜索积分；浏览器额外积分：{0}；电脑端：{1}；手机端：{2}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:417"
 },
 {
  "en": "No search points to earn, skipping",
  "zh": "已没有可获搜索积分，本次跳过",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:34"
 },
 {
  "en": "No main search topics available, skipping",
  "zh": "没有可用的搜索主题，跳过搜索",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:152"
 },
 {
  "en": "Query queue exhausted, stopping",
  "zh": "搜索词队列已用完，停止搜索",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:164"
 },
 {
  "en": "Searching | search={0} | {1} | remaining={2}",
  "zh": "正在搜索；第 {0} 次；{1}；剩余额度：{2}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:62"
 },
 {
  "en": "No IG for query=\"{0}\" - skipping",
  "zh": "搜索词「{0}」没有取得页面会话标识，本次跳过",
  "keep": [
   0
  ],
  "source": "src/rewards/api/search/ApiSearch.ts:241"
 },
 {
  "en": "Search counter unavailable; progress cannot be confirmed",
  "zh": "搜索计数不可用，无法确认进度",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:103"
 },
 {
  "en": "Could not refresh the {0} search quota | {1}",
  "zh": "无法刷新{0}搜索额度；{1}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:113"
 },
 {
  "en": "{0}pointsGained={1} | currentBalance={2} | query=\"{3}\" | searchesMeasured={4} | searchCounterIncrease={5} | remaining={6} | searchPts={7}",
  "zh": "{0}获得积分：{1}；当前余额：{2}；搜索词：「{3}」；已核对搜索次数：{4}；计数增长：{5}；剩余额度：{6}；搜索积分：{7}",
  "keep": [
   3
  ],
  "source": "src/rewards/api/search/ApiSearch.ts:129"
 },
 {
  "en": "No confirmed search progress {0}/{1} | query=\"{2}\" | remaining={3} | searchPts={4}",
  "zh": "连续 {0}/{1} 次未确认搜索进度增长；搜索词：「{2}」；剩余额度：{3}；搜索积分：{4}",
  "keep": [
   2
  ],
  "source": "src/rewards/api/search/ApiSearch.ts:139"
 },
 {
  "en": "{0} search quota complete | remaining={1} | responseSearchPts={2}",
  "zh": "{0}搜索额度已完成；剩余额度：{1}；响应搜索积分：{2}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:148"
 },
 {
  "en": "No confirmed progress for {0} searches in a row, stopping",
  "zh": "连续 {0} 次搜索没有确认进度增长，停止搜索",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:158"
 },
 {
  "en": "Error in doSearch | {0}",
  "zh": "执行搜索出错；{0}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:195"
 },
 {
  "en": "Searching | search={0} | {1} | {2}",
  "zh": "正在搜索；第 {0} 次；{1}；{2}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:231"
 },
 {
  "en": "pointsGained={0} | currentBalance={1} | query=\"{2}\" | {3}",
  "zh": "获得积分：{0}；当前余额：{1}；搜索词：「{2}」；{3}",
  "keep": [
   2
  ],
  "source": "src/rewards/api/search/ApiSearch.ts:248"
 },
 {
  "en": "pointsGained={0} | no confirmed progress {1}/{2} | query=\"{3}\" | {4}",
  "zh": "获得积分：{0}；连续 {1}/{2} 次未确认进度增长；搜索词：「{3}」；{4}",
  "keep": [
   3
  ],
  "source": "src/rewards/api/search/ApiSearch.ts:255"
 },
 {
  "en": "Bonus session error | {0}",
  "zh": "额外搜索会话出错；{0}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:265"
 },
 {
  "en": "Starting SearchOnBing | offerId={0} | title=\"{1}\" | currentBalance={2}",
  "zh": "开始指定主题搜索；活动标识：{0}；标题：「{1}」；当前余额：{2}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/browser/search/BrowserSearchOnBing.ts:26"
 },
 {
  "en": "Search activity couldn't be activated, aborting | offerId={0}",
  "zh": "搜索活动无法激活，本次停止；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/search/ApiSearchOnBing.ts:42"
 },
 {
  "en": "SearchOnBing verified | offerId={0} | status={1} | pointsGained={2} | currentBalance={3} | previousBalance={4}",
  "zh": "已核实指定主题搜索；活动标识：{0}；状态：{1}；获得积分：{2}；当前余额：{3}；之前余额：{4}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearchOnBing.ts:109"
 },
 {
  "en": "Error in doSearchOnBing | offerId={0} | message={1}",
  "zh": "指定主题搜索执行出错；活动标识：{0}；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearchOnBing.ts:61"
 },
 {
  "en": "Category group | cg={0}",
  "zh": "搜索类别组；标识：{0}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearchOnBing.ts:84"
 },
 {
  "en": "No IG returned for query=\"{0}\" - skipping this query",
  "zh": "搜索词「{0}」没有返回页面会话标识，本次跳过",
  "keep": [
   0
  ],
  "source": "src/rewards/api/search/ApiSearchOnBing.ts:90"
 },
 {
  "en": "Invalid Bing Visual Search result URL",
  "zh": "必应视觉搜索的结果地址无效",
  "keep": [],
  "source": "src/rewards/api/search/BingSearchApi.ts:25"
 },
 {
  "en": "No IG for \"{0}\" - SERP not served as expected",
  "zh": "搜索词「{0}」没有页面会话标识，搜索结果页没有按预期返回",
  "keep": [
   0
  ],
  "source": "src/rewards/api/search/BingSearchApi.ts:51"
 },
 {
  "en": "Reported \"{0}\" | transport=node-http | ig={1} | sessionBalanceDelta={2} | bcid={3} | currentBalance={4} | searchPts={5}/{6}",
  "zh": "已上报「{0}」；方式：脚本网络请求；页面会话标识：{1}；本次余额变化：{2}；图片搜索标识：{3}；当前余额：{4}；搜索积分：{5}/{6}",
  "keep": [
   0,
   3
  ],
  "source": "src/rewards/api/search/BingSearchApi.ts:88"
 },
 {
  "en": "Reported \"{0}\" | transport=node-http | ig={1} | sessionBalanceDelta={2} | currentBalance={3} | searchPts={4}/{5}",
  "zh": "已上报「{0}」；方式：脚本网络请求；页面会话标识：{1}；本次余额变化：{2}；当前余额：{3}；搜索积分：{4}/{5}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/search/BingSearchApi.ts:88"
 },
 {
  "en": "Activation offer present but missing a hash | offerId={0}",
  "zh": "存在激活活动，但缺少校验值；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:327"
 },
 {
  "en": "Activation offer is not actionable | offerId={0}",
  "zh": "激活活动当前不可执行；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:336"
 },
 {
  "en": "Skipping activation: \"reportActivity\" action id not discovered in bundle",
  "zh": "跳过激活：未发现服务端活动上报操作标识",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:346"
 },
 {
  "en": "Skipping activation: no valid activity type found | offerId={0}",
  "zh": "跳过激活：未找到有效的活动类型；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:357"
 },
 {
  "en": "Activating visual search | offerId={0} | activationSource={1} | activityType={2} | activityTypeSource={3} | promotional={4} | geo={5}",
  "zh": "正在激活视觉搜索；活动标识：{0}；激活来源：{1}；活动类型：{2}；类型来源：{3}；推广活动：{4}；地区：{5}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/visual/ApiVisualSearch.ts:84"
 },
 {
  "en": "Activated visual search | offerId={0} | acknowledged={1} | confirmed={2}",
  "zh": "已提交视觉搜索激活；活动标识：{0}；服务端已接受：{1}；已确认：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/api/visual/ApiVisualSearch.ts:114"
 },
 {
  "en": "Activation error | offerId={0} | {1}",
  "zh": "激活出错；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:425"
 },
 {
  "en": "Desktop dashboard fetch failed - falling back to the earlier dashboard read",
  "zh": "电脑端控制台获取失败，使用较早读取的控制台数据",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:481"
 },
 {
  "en": "kblob returned no redirectUrl | status={0} | transport=node-http",
  "zh": "图片查询接口没有返回跳转地址；状态：{0}；方式：脚本网络请求",
  "keep": [],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:56"
 },
 {
  "en": "kblob returned an invalid Bing Visual Search URL | status={0} | origin={1} | path={2} | hasBcid={3}",
  "zh": "图片查询接口返回的视觉搜索地址无效；状态：{0}；站点：{1}；路径：{2}；具备图片搜索标识：{3}",
  "keep": [
   2
  ],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:67"
 },
 {
  "en": "Acquired bcid={0} | q=\"{1}\" | status={2} | path={3} | seed={4} | transport=node-http",
  "zh": "已取得图片搜索标识 {0}；搜索词：「{1}」；状态：{2}；路径：{3}；图片种子：{4}；方式：脚本网络请求",
  "keep": [
   0,
   1,
   3
  ],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:77"
 },
 {
  "en": "Failed to acquire visual search | {0}",
  "zh": "无法取得视觉搜索结果；{0}",
  "keep": [],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:88"
 },
 {
  "en": "Prepared {0} randomized Bing wallpaper seed(s) | transport=node-http",
  "zh": "已准备 {0} 个随机必应壁纸种子；方式：脚本网络请求",
  "keep": [],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:124"
 },
 {
  "en": "HPImageArchive returned no usable urls | status={0} - using the static seed",
  "zh": "壁纸接口没有返回可用图片地址；状态：{0}；改用静态图片种子",
  "keep": [],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:131"
 },
 {
  "en": "HPImageArchive lookup failed | {0} - using the static seed",
  "zh": "查询壁纸接口失败；{0}；改用静态图片种子",
  "keep": [],
  "source": "src/rewards/api/visual/VisualSearchClient.ts:139"
 },
 {
  "en": "No eligible pending App Promotions are available",
  "zh": "没有可执行且尚未完成的应用推广活动",
  "keep": [],
  "source": "src/rewards/app/actions/AppPromotions.ts:17"
 },
 {
  "en": "Started solving \"App Promotions\" items | remaining={0}",
  "zh": "开始处理应用推广活动；剩余：{0} 项",
  "keep": [],
  "source": "src/rewards/app/actions/AppPromotions.ts:25"
 },
 {
  "en": "Finished processing \"App Promotions\" items",
  "zh": "应用推广活动处理流程已结束",
  "keep": [],
  "source": "src/rewards/app/actions/AppPromotions.ts:33"
 },
 {
  "en": "Bing App Streak is already completed today; skipping Daily Check-In",
  "zh": "今天已完成 必应 应用 连续签到，跳过每日签到",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:15"
 },
 {
  "en": "Daily Check-In absent from iOS baseline; point baseline is unknown | offerId={0}",
  "zh": "手机平台初始数据中没有每日签到，初始积分无法确认；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:46"
 },
 {
  "en": "Daily Check-In iOS baseline unavailable; point baseline is unknown | message={0}",
  "zh": "无法读取手机平台的签到初始数据，初始积分无法确认；说明：{0}",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:54"
 },
 {
  "en": "Daily Check-In request sent; verifying completion | type=103 | channel={0} | status={1} | previousBalance={2} | responseBalance={3}",
  "zh": "已发送每日签到请求，正在核实结果；类型：103；渠道：{0}；状态：{1}；之前余额：{2}；响应余额：{3}",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:84"
 },
 {
  "en": "Submission uncertain; verifying without resubmitting | {0}",
  "zh": "提交结果不确定，先核实状态，不重复提交；{0}",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:93"
 },
 {
  "en": "Daily Check-In balance refresh unavailable | attempt={0}/3 | message={1}",
  "zh": "无法刷新签到后的余额；第 {0}/3 次尝试；说明：{1}",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:133"
 },
 {
  "en": "Daily Check-In offer verification unavailable | message={0}",
  "zh": "无法核实每日签到活动；说明：{0}",
  "keep": [],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:159"
 },
 {
  "en": "App data unavailable; skipping app activities | {0}",
  "zh": "应用资料不可用，本次跳过应用任务；{0}",
  "keep": [],
  "source": "src/rewards/app/AppActivityRunner.ts:31"
 },
 {
  "en": "App points unavailable",
  "zh": "应用积分数据不可用",
  "keep": [],
  "source": "src/rewards/app/AppActivityRunner.ts:40"
 },
 {
  "en": "App points available: {0}",
  "zh": "应用可获积分：{0}",
  "keep": [],
  "source": "src/rewards/app/AppActivityRunner.ts:50"
 },
 {
  "en": "No Daily Check-In promotion is available; skipping",
  "zh": "当前没有每日签到活动，本次跳过",
  "keep": [],
  "source": "src/rewards/app/AppActivityRunner.ts:67"
 },
 {
  "en": "No Read to Earn promotion is available; skipping",
  "zh": "当前没有阅读赚积分活动，本次跳过",
  "keep": [],
  "source": "src/rewards/app/AppActivityRunner.ts:70"
 },
 {
  "en": "Offer read unavailable | offerId={0} | attempt={1}/{2} | {3}",
  "zh": "读取活动状态失败；活动标识：{0}；第 {1}/{2} 次；{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/app/AppPlatformClient.ts:120"
 },
 {
  "en": "Offer verification | channel={0} | offerId={1} | attempt={2}/{3} | offerFound={4} | balance={5} | evidence={6} | complete={7}->{8} | progress={9}->{10} | pointprogress={11}->{12} | lastUpdated={13}->{14}",
  "zh": "正在核实活动；渠道：{0}；活动标识：{1}；第 {2}/{3} 次；找到活动：{4}；余额：{5}；完成依据：{6}；完成状态：{7}→{8}；任务进度：{9}→{10}；积分进度：{11}→{12}；更新时间：{13}→{14}",
  "keep": [
   1
  ],
  "source": "src/rewards/app/AppPlatformClient.ts:155"
 },
 {
  "en": "Initialize the browser engine before sending app requests",
  "zh": "发送应用请求之前，请先初始化浏览器引擎",
  "keep": [],
  "source": "src/rewards/app/AppPlatformClient.ts:179"
 },
 {
  "en": "Invalid {0} response | fields={1}",
  "zh": "{0} 响应无效；返回字段：{1}",
  "keep": [],
  "source": "src/rewards/app/AppResponses.ts:33"
 },
 {
  "en": "Browser page unavailable",
  "zh": "浏览器页面不可用",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:29"
 },
 {
  "en": "No eligible incomplete punchcards",
  "zh": "没有符合条件且尚未完成的任务卡",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:45"
 },
 {
  "en": "Found {0} incomplete quest(s)",
  "zh": "找到 {0} 个未完成的系列任务",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:49"
 },
 {
  "en": "Quest failed | offerId={0} | {1}",
  "zh": "系列任务失败；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:58"
 },
 {
  "en": "Browser punchcards failed | {0}",
  "zh": "浏览器任务卡执行失败；{0}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:68"
 },
 {
  "en": "Quest card disappeared before it could be opened | offerId={0}",
  "zh": "系列任务卡片在打开之前已消失；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:94"
 },
 {
  "en": "Quest processed | offerId={0} | currentBalance={1}",
  "zh": "系列任务处理结束；活动标识：{0}；当前余额：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:110"
 },
 {
  "en": "Quest returned status {0}",
  "zh": "系列任务页面返回状态 {0}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:125"
 },
 {
  "en": "Quest metadata unavailable | {0}",
  "zh": "系列任务资料不可用；{0}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:151"
 },
 {
  "en": "Quest complete | offerId={0} | progress={1}",
  "zh": "系列任务已完成；活动标识：{0}；进度：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:182"
 },
 {
  "en": "No further available steps | offerId={0} | progress={1} | lockedOrDisabled={2} | remaining steps will be checked on the next run",
  "zh": "没有其他可用步骤；活动标识：{0}；进度：{1}；被锁定或已停用：{2}；下次运行再检查剩余步骤",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:200"
 },
 {
  "en": "Reward is ready for manual redemption | quest={0} | step=\"{1}\"",
  "zh": "奖励已可手动兑换；系列任务：{0}；步骤：「{1}」",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:213"
 },
 {
  "en": "Step click failed; refreshing its state | step=\"{0}\" | {1}",
  "zh": "步骤点击失败，正在刷新状态；步骤：「{0}」；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:255"
 },
 {
  "en": "Step {0} | quest={1} | step=\"{2}\" | progress={3}/{4} | pointsGained={5}",
  "zh": "步骤状态：{0}；系列任务：{1}；步骤：「{2}」；进度：{3}/{4}；获得积分：{5}",
  "keep": [
   1,
   2
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:279"
 },
 {
  "en": "Stopped at the step limit | offerId={0}",
  "zh": "已达到步骤执行次数上限，停止处理；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserPunchCards.ts:287"
 },
 {
  "en": "No unused MSN feed article card was available; falling back to the app API",
  "zh": "没有找到未阅读过的资讯卡片，改用应用阅读接口",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:57"
 },
 {
  "en": "Reading MSN feed article in browser | transport=browser | read={0} | progress={1} | title={2}",
  "zh": "正在浏览器中阅读资讯文章；第 {0} 次阅读；进度：{1}；标题：{2}",
  "keep": [
   2
  ],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:66"
 },
 {
  "en": "MSN feed article could not be read; trying the app API instead",
  "zh": "资讯文章无法阅读，改用应用阅读接口",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:77"
 },
 {
  "en": "Could not refresh Read to Earn immediately after browser read | message={0}",
  "zh": "浏览器阅读后未能立即刷新阅读任务；说明：{0}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:103"
 },
 {
  "en": "MSN browser read credit is not confirmed; {0} | read={1} | attempts={2}/{3} | reason={4}",
  "zh": "资讯阅读积分尚未确认；{0}；第 {1} 次阅读；已尝试：{2}/{3}；原因：{4}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:118"
 },
 {
  "en": "Browser read verified | read={0} | progress={1}->{2} | pointsGained={3}",
  "zh": "浏览器阅读已核实；第 {0} 次阅读；进度：{1}→{2}；获得积分：{3}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:136"
 },
 {
  "en": "Browser read was verified but the offer could not be refreshed; using API fallback to reconcile state",
  "zh": "浏览器阅读已核实，但无法刷新活动，改用阅读接口核对状态",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:156"
 },
 {
  "en": "Browser Read to Earn unavailable; trying the app API instead",
  "zh": "浏览器阅读暂不可用，改用应用接口完成阅读",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:170"
 },
 {
  "en": "Using Read to Earn API fallback | browserReads={0} | browserReason={1}",
  "zh": "正在使用阅读接口备用方式；浏览器阅读：{0} 次；浏览器阅读结果：{1}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:185"
 },
 {
  "en": "Using Read to Earn API fallback | browserReads={0}",
  "zh": "正在使用阅读接口备用方式；浏览器阅读：{0} 次",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:185"
 },
 {
  "en": "MSN returned status {0}",
  "zh": "微软资讯返回状态 {0}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:224"
 },
 {
  "en": "MSN feed ready | url={0}",
  "zh": "资讯列表已就绪；地址：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:231"
 },
 {
  "en": "MSN homepage contained no rendered article cards",
  "zh": "资讯首页没有渲染出可阅读文章卡片",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:234"
 },
 {
  "en": "Could not open MSN feed",
  "zh": "无法打开资讯列表",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:240"
 },
 {
  "en": "Reading article | activity=read-to-earn | waitMs={0} | scrollSteps={1}",
  "zh": "正在阅读文章；等待：{0} 毫秒；滚动次数：{1}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:317"
 },
 {
  "en": "{0} returned no response",
  "zh": "{0} 没有返回响应",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:146"
 },
 {
  "en": "Page load failed | attempt={0}/{1} | retryInMs={2} | reloading={3} | {4}",
  "zh": "页面加载失败；第 {0}/{1} 次尝试；重试前等待：{2} 毫秒；重新加载：{3}；{4}",
  "keep": [
   3
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:169"
 },
 {
  "en": "Jumping directly to matched card | offerId={0} | page={1} | selector={2}",
  "zh": "直接跳转到匹配的卡片；活动标识：{0}；页面：{1}；控件定位：{2}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:215"
 },
 {
  "en": "Locating rendered card | offerId={0} | roots={1} | timeoutMs={2}",
  "zh": "正在定位页面中的卡片；活动标识：{0}；查找范围：{1}；超时：{2} 毫秒",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:224"
 },
 {
  "en": "Task section is absent; checking the next surface | offerId={0} | roots={1} | page={2}",
  "zh": "当前页面没有对应任务区域，检查下一个页面；活动标识：{0}；查找范围：{1}；页面：{2}",
  "keep": [
   0,
   2
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:239"
 },
 {
  "en": "Card not matched in the DOM; checking lazy content with instant scroll jumps | offerId={0}",
  "zh": "页面中没有匹配卡片，正在通过滚动检查延迟加载内容；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:246"
 },
 {
  "en": "Card scroll containers ready | offerId={0} | containers={1} | remainingMs={2}",
  "zh": "已找到卡片滚动区域；活动标识：{0}；区域数：{1}；剩余时间：{2} 毫秒",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:308"
 },
 {
  "en": "Jumping to check lazy cards | offerId={0} | step={1} | scrollTop={2} | distance={3}",
  "zh": "正在跳转检查延迟加载卡片；活动标识：{0}；第 {1} 步；滚动位置：{2}；距离：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:328"
 },
 {
  "en": "Card discovery scroll unavailable | offerId={0} | {1}",
  "zh": "查找卡片时无法滚动；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:342"
 },
 {
  "en": "Matched rendered card | offerId={0} | matchedBy={1} | renderedOfferIds={2}",
  "zh": "已匹配到页面卡片；活动标识：{0}；匹配依据：{1}；页面活动标识：{2}",
  "keep": [
   0,
   2
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:420"
 },
 {
  "en": "Multiple visible controls match {0}; no control was clicked",
  "zh": "找到多个匹配 {0} 的可见控件，为避免误点，本次没有点击",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:500"
 },
 {
  "en": "Activity report received | offerId={0} | accepted={1} | complete={2} | points={3}",
  "zh": "收到活动上报结果；活动标识：{0}；已接受：{1}；已完成：{2}；积分：{3}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:574"
 },
 {
  "en": "GhostCursor click sent | offerId={0} | scroll=direct",
  "zh": "已通过模拟鼠标点击卡片；活动标识：{0}；滚动方式：直接定位",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:596"
 },
 {
  "en": "Reward source page closed while waiting for a popup",
  "zh": "等待弹出页面时，奖励来源页面已关闭",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:608"
 },
 {
  "en": "Reward source page crashed while waiting for a popup",
  "zh": "等待弹出页面时，奖励来源页面已崩溃",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:609"
 },
 {
  "en": "Reward link did not open its expected popup",
  "zh": "奖励链接没有按预期打开弹出页面",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:618"
 },
 {
  "en": "Reward destination page crashed",
  "zh": "奖励目标页面已崩溃",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardNavigator.ts:635"
 },
 {
  "en": "No search multiplier is available",
  "zh": "没有可用的搜索倍增奖励",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserRewardsActions.ts:11"
 },
 {
  "en": "Search multiplier data has no rendered promotion metadata | offerId={0}",
  "zh": "搜索倍增奖励缺少页面推广资料；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserRewardsActions.ts:21"
 },
 {
  "en": "Skipping {0}: browser page unavailable",
  "zh": "跳过 {0}：浏览器页面不可用",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:43"
 },
 {
  "en": "Checking rendered surface | offerId={0} | source={1} | surface={2} | attempt={3}/{4}",
  "zh": "正在检查实际页面；活动标识：{0}；来源：{1}；页面类型：{2}；第 {3}/{4} 次",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:97"
 },
 {
  "en": "Rendered surface unavailable | offerId={0} | surface={1} | {2}",
  "zh": "实际页面不可用；活动标识：{0}；页面类型：{1}；{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:127"
 },
 {
  "en": "Rendered surface has no usable card | offerId={0} | surface={1} | nextSurface={2}",
  "zh": "实际页面没有可用卡片；活动标识：{0}；页面类型：{1}；下一个页面：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:134"
 },
 {
  "en": "Using rendered {0} fallback | offerId={1} | source={2}",
  "zh": "改用实际页面中的{0}；活动标识：{1}；来源：{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:142"
 },
 {
  "en": "Rendered card not found | offerId={0} | source={1} | page={2}",
  "zh": "没有找到实际页面卡片；活动标识：{0}；来源：{1}；页面：{2}",
  "keep": [
   0,
   2
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:170"
 },
 {
  "en": "Clicking rendered Rewards card | offerId={0} | source={1} | surface={2} | currentBalance={3}",
  "zh": "正在点击实际页面中的积分卡片；活动标识：{0}；来源：{1}；页面类型：{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:178"
 },
 {
  "en": "Browser card verified | offerId={0} | status={1} | pointsGained={2} | currentBalance={3}",
  "zh": "浏览器任务卡已核实；活动标识：{0}；状态：{1}；获得积分：{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:200"
 },
 {
  "en": "Rendered {0} lookup unavailable | offerId={1} | {2}",
  "zh": "无法从实际页面查找{0}；活动标识：{1}；{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:257"
 },
 {
  "en": "Browser page unavailable for /earn tasks",
  "zh": "任务页所需的浏览器页面不可用",
  "keep": [],
  "source": "src/rewards/browser/BrowserEarnTasks.ts:16"
 },
 {
  "en": "Daily streak reset | resetAt={0} | local={1} | timezone={2} | remainingMinutes={3}",
  "zh": "每日连续签到重置时间；标准时间：{0}；本地时间：{1}；时区：{2}；距离重置：{3} 分钟",
  "keep": [],
  "source": "src/rewards/browser/BrowserEarnTasks.ts:33"
 },
 {
  "en": "Daily streak reset | displayed=\"{0}\" | exactTime=unavailable",
  "zh": "每日连续签到重置时间；页面显示：「{0}」；精确时间暂不可用",
  "keep": [],
  "source": "src/rewards/browser/BrowserEarnTasks.ts:41"
 },
 {
  "en": "Read rendered /earn cards | dailySet={0} | more={1} | explore={2}",
  "zh": "已读取任务页卡片；每日三项：{0}；更多活动：{1}；指定搜索：{2}",
  "keep": [],
  "source": "src/rewards/browser/BrowserEarnTasks.ts:100"
 },
 {
  "en": "Browser context ready | userDataSource=rewards-api",
  "zh": "浏览器任务数据已就绪；账号资料来源：积分接口",
  "keep": [],
  "source": "src/rewards/browser/BrowserRewardsData.ts:32"
 },
 {
  "en": "Browser mode requires an open browser page",
  "zh": "浏览器任务模式需要保持浏览器页面打开",
  "keep": [],
  "source": "src/rewards/browser/BrowserRewardsData.ts:39"
 },
 {
  "en": "Rendered Daily Set readiness unavailable; using displayed cards only | expectedCards={0} | {1}",
  "zh": "无法核实每日三项页面是否已完整加载，暂只处理可见卡片；预期卡片数：{0}；{1}",
  "keep": [],
  "source": "src/rewards/browser/BrowserRewardsData.ts:79"
 },
 {
  "en": "Using rendered Daily Set | localDate={0} | modelDates={1} | renderedCards={2} | offerIds={3}",
  "zh": "使用页面中的每日三项；本地日期：{0}；数据日期：{1}；可见卡片：{2}；活动标识：{3}",
  "keep": [
   3
  ],
  "source": "src/rewards/browser/BrowserRewardsData.ts:90"
 },
 {
  "en": "Read rendered Bing Rewards flyout | dailySet={0} | more={1} | sections={2} | promotionSections={3} | catalogItems={4} | orders={5} | suggestions={6}",
  "zh": "已读取必应积分侧栏；每日三项：{0}；更多活动：{1}；任务区域：{2}；推广区域：{3}；目录项目：{4}；顺序：{5}；建议：{6}",
  "keep": [],
  "source": "src/rewards/browser/BrowserRewardsData.ts:99"
 },
 {
  "en": "Page read failed | route={0} | {1}",
  "zh": "读取页面失败；路径：{0}；{1}",
  "keep": [],
  "source": "src/rewards/browser/BrowserRewardsData.ts:149"
 },
 {
  "en": "Browser page unavailable for task passes",
  "zh": "本轮网页任务所需的浏览器页面不可用",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:24"
 },
 {
  "en": "Starting flyout task pass",
  "zh": "开始处理必应侧栏任务",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:37"
 },
 {
  "en": "Flyout pass failed; checking /earn for remaining tasks | {0}",
  "zh": "侧栏任务执行失败，转到任务页检查剩余项目；{0}",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:48"
 },
 {
  "en": "Starting /earn task pass for remaining tasks",
  "zh": "开始到积分任务页补做剩余任务",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:63"
 },
 {
  "en": "/earn pass failed; remaining earn tasks could not finish | {0}",
  "zh": "积分任务页执行失败，剩余任务未能完成；{0}",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:93"
 },
 {
  "en": "Parallel searching: desktop searches while mobile runs app tasks, remaining tasks and searches",
  "zh": "并行搜索：电脑端搜索，同时手机端执行应用任务、剩余网页任务和搜索",
  "keep": [],
  "source": "src/rewards/browser/BrowserWorkflow.ts:57"
 },
 {
  "en": "Sequential sessions: finish and close desktop before opening mobile",
  "zh": "顺序执行：电脑端完成并关闭后，再打开手机端",
  "keep": [],
  "source": "src/rewards/browser/BrowserWorkflow.ts:57"
 },
 {
  "en": "Mobile skipped: no remaining tasks, mobile searches or app work",
  "zh": "跳过手机端：没有剩余任务、手机搜索或应用任务",
  "keep": [],
  "source": "src/rewards/browser/BrowserWorkflow.ts:108"
 },
 {
  "en": "Mobile opened for: {0}",
  "zh": "为以下任务打开手机端：{0}",
  "keep": [],
  "source": "src/rewards/browser/BrowserWorkflow.ts:147"
 },
 {
  "en": "Browser task runner unavailable",
  "zh": "浏览器任务执行器不可用",
  "keep": [],
  "source": "src/rewards/browser/BrowserWorkflow.ts:181"
 },
 {
  "en": "Rendered Bing flyout did not contain window.flyoutViewModel",
  "zh": "必应积分侧栏页面中没有找到侧栏数据模型",
  "keep": [],
  "source": "src/rewards/browser/parsers/FlyoutPageParser.ts:7"
 },
 {
  "en": "Rendered Bing flyout view model has no JSON object",
  "zh": "必应积分侧栏数据模型中没有结构化对象",
  "keep": [],
  "source": "src/rewards/browser/parsers/FlyoutPageParser.ts:10"
 },
 {
  "en": "Rendered Bing flyout view model is invalid JSON: {0}",
  "zh": "必应积分侧栏数据不是有效的结构化数据：{0}",
  "keep": [],
  "source": "src/rewards/browser/parsers/FlyoutPageParser.ts:17"
 },
 {
  "en": "Rendered Bing flyout view model is not an object",
  "zh": "必应积分侧栏数据模型不是对象",
  "keep": [],
  "source": "src/rewards/browser/parsers/FlyoutPageParser.ts:23"
 },
 {
  "en": "Rendered Bing flyout view model JSON object is incomplete",
  "zh": "必应积分侧栏数据对象不完整",
  "keep": [],
  "source": "src/rewards/browser/parsers/FlyoutPageParser.ts:53"
 },
 {
  "en": "Bing search page crashed",
  "zh": "必应搜索页面崩溃",
  "keep": [],
  "source": "src/rewards/browser/search/BingSearchPage.ts:23"
 },
 {
  "en": "Search attempt {0}/{1} failed{2} | query={3} | {4}",
  "zh": "第 {0}/{1} 次搜索失败{2}；搜索词：{3}；{4}",
  "keep": [
   3
  ],
  "source": "src/rewards/browser/search/BingSearchPage.ts:37"
 },
 {
  "en": "Bing search failed after {0} attempt(s) | query={1} | {2}",
  "zh": "必应搜索重试 {0} 次后仍未成功；搜索词：{1}；{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/browser/search/BingSearchPage.ts:45"
 },
 {
  "en": "No Bing search attempt was available",
  "zh": "没有可执行的必应搜索尝试",
  "keep": [],
  "source": "src/rewards/browser/search/BingSearchPage.ts:67"
 },
 {
  "en": "Bing reload failed | {0}",
  "zh": "重新加载必应失败；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BingSearchPage.ts:91"
 },
 {
  "en": "Hit the {0}-search ceiling with points still missing | {1}",
  "zh": "已达到 {0} 次搜索上限，但仍有积分未确认获得；{1}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:50"
 },
 {
  "en": "Bing search tab crashed; a fresh tab is required before continuing | url={0}",
  "zh": "必应搜索标签页崩溃，需要新建页面后继续；地址：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearch.ts:128"
 },
 {
  "en": "Replaced crashed Bing tab; continuing searches",
  "zh": "已替换崩溃的 必应 标签页，继续搜索",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:141"
 },
 {
  "en": "Searching | search={0} | {1} | progressCheckEvery={2}",
  "zh": "正在搜索；第 {0} 次；{1}；每 {2} 次核对积分",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:169"
 },
 {
  "en": "batch pointsGained={0} | currentBalance={1} | lastQuery=\"{2}\" | {3}",
  "zh": "本批获得积分：{0}；当前余额：{1}；最后搜索词：「{2}」；{3}",
  "keep": [
   2
  ],
  "source": "src/rewards/browser/search/BrowserSearch.ts:194"
 },
 {
  "en": "batch pointsGained={0} | no confirmed progress {1}/{2} | lastQuery=\"{3}\" | {4}",
  "zh": "本批获得积分：{0}；连续 {1}/{2} 批未确认进度增长；最后搜索词：「{3}」；{4}",
  "keep": [
   3
  ],
  "source": "src/rewards/browser/search/BrowserSearch.ts:201"
 },
 {
  "en": "search {0} done, next measure at {1} | query=\"{2}\"",
  "zh": "已执行第 {0} 次搜索，将在第 {1} 次核对进度；搜索词：「{2}」",
  "keep": [
   2
  ],
  "source": "src/rewards/browser/search/BrowserSearch.ts:208"
 },
 {
  "en": "Search session error | {0}",
  "zh": "搜索流程出错；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:220"
 },
 {
  "en": "Skipped optional results scroll | {0}",
  "zh": "已跳过可选的结果页滚动；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:272"
 },
 {
  "en": "Search-result tab crashed; skipping optional visit | url={0}",
  "zh": "搜索结果标签页崩溃，跳过本次可选访问；地址：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearch.ts:297"
 },
 {
  "en": "Search-result tab crashed",
  "zh": "搜索结果标签页崩溃",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:302"
 },
 {
  "en": "Optional result click failed | attempt={0}/{1} | {2}",
  "zh": "可选结果点击失败；第 {0}/{1} 次尝试；{2}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:340"
 },
 {
  "en": "Skipped optional result visit | {0}",
  "zh": "已跳过可选的搜索结果访问；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:360"
 },
 {
  "en": "No search points to earn, skipping (runOnZeroPoints is disabled)",
  "zh": "没有可获取的搜索积分，已跳过（未开启额度为零时仍搜索）",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:426"
 },
 {
  "en": "No search points reported, but runOnZeroPoints is enabled, searching anyway",
  "zh": "未读取到可获取的搜索积分，但已开启额度为零时仍搜索，继续执行",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:433"
 },
 {
  "en": "Search measurement unavailable | {0}",
  "zh": "无法核对搜索积分；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:458"
 },
 {
  "en": "Checking today's Bing Search Streak before the experimental API search",
  "zh": "执行试验性接口搜索之前，先检查今天的必应连续搜索状态",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:33"
 },
 {
  "en": "Bing Search Streak is already completed today; skipping the API search",
  "zh": "今天已完成必应连续搜索，跳过本次接口搜索",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:40"
 },
 {
  "en": "No search query is available",
  "zh": "没有可用的搜索词",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:53"
 },
 {
  "en": "Search baseline returned an older balance; keeping the experimental credit amount unverified",
  "zh": "搜索初始数据返回了较早的余额，本次试验性搜索积分仍按未确认处理",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:57"
 },
 {
  "en": "Sending one experimental API search | streak={0} | query={1}",
  "zh": "正在发送一次试验性接口搜索；连续搜索状态：{0}；搜索词：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:65"
 },
 {
  "en": "Search report verification | check={0}/3 | counterGain={1} | pointsGained={2} | currentBalance={3}",
  "zh": "正在核实搜索上报；第 {0}/3 次；计数增长：{1}；获得积分：{2}；当前余额：{3}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:112"
 },
 {
  "en": "Bing Search Streak confirmed complete for today",
  "zh": "已确认今天的必应连续搜索完成",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:123"
 },
 {
  "en": "One API search attempted; today's Bing Search Streak is not yet confirmed",
  "zh": "已尝试一次接口搜索，今天的必应连续搜索仍未确认完成",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:125"
 },
 {
  "en": "Search verification data unavailable | {0}",
  "zh": "搜索核实资料不可用；{0}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearchApiReport.ts:147"
 },
 {
  "en": "Activation was rejected; search not submitted | offerId={0}",
  "zh": "激活被拒绝，未提交搜索；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearchOnBing.ts:79"
 },
 {
  "en": "Activation click finished | offerId={0} | report={1} | next=search",
  "zh": "激活控件点击已结束；活动标识：{0}；上报结果：{1}；下一步执行搜索",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/search/BrowserSearchOnBing.ts:86"
 },
 {
  "en": "Activated visual search through the rendered control | offerId={0}",
  "zh": "已通过页面控件激活视觉搜索；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/BrowserVisualSearch.ts:69"
 },
 {
  "en": "Activation click was not confirmed; continuing with rendered Visual Search and registration checks | offerId={0}",
  "zh": "激活点击尚未确认，继续执行页面视觉搜索并核实是否登记；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/BrowserVisualSearch.ts:75"
 },
 {
  "en": "Rendered activation failed | offerId={0} | {1}",
  "zh": "页面激活失败；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/BrowserVisualSearch.ts:93"
 },
 {
  "en": "Browser page unavailable for activation",
  "zh": "激活所需的浏览器页面不可用",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchActivation.ts:16"
 },
 {
  "en": "No rendered visual-search activation control matched | offerId={0}",
  "zh": "未找到匹配的视觉搜索激活控件；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/VisualSearchActivation.ts:34"
 },
 {
  "en": "Clicking rendered activation control | offerId={0}",
  "zh": "正在点击页面激活控件；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/VisualSearchActivation.ts:42"
 },
 {
  "en": "Desktop page is unavailable - cannot use the rendered Visual Search control",
  "zh": "电脑端页面不可用，无法使用页面视觉搜索控件",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:44"
 },
 {
  "en": "Trying rendered Bing thumbnail seed | seed={0}",
  "zh": "尝试使用页面中的必应缩略图种子；图片种子：{0}",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:68"
 },
 {
  "en": "Rendered image-URL field was empty after filling it",
  "zh": "填写后图片地址输入框仍为空",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:80"
 },
 {
  "en": "The rendered image-URL field did not submit a Visual Search result",
  "zh": "图片地址输入框没有提交出视觉搜索结果",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:90"
 },
 {
  "en": "Visual Search submission did not reach a result page before the navigation timeout",
  "zh": "视觉搜索提交后，未能在跳转超时前到达结果页",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:100"
 },
 {
  "en": "Visual Search result had no bcid | url={0}",
  "zh": "视觉搜索结果没有图片搜索标识；地址：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:110"
 },
 {
  "en": "Acquired bcid={0} | q=\"{1}\" | seed={2} | transport=browser-ui",
  "zh": "已取得图片搜索标识 {0}；搜索词：「{1}」；图片种子：{2}；方式：浏览器界面",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:126"
 },
 {
  "en": "Rendered Visual Search flow failed | {0}",
  "zh": "浏览器视觉搜索流程失败；{0}",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:136"
 },
 {
  "en": "Could not read Bing feed thumbnails | url={0} | {1}",
  "zh": "无法读取必应资讯缩略图；地址：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:177"
 },
 {
  "en": "Prepared {0} seed(s) from rendered Bing feed thumbnails | preferredBingThumbnails={1} | transport=browser-ui",
  "zh": "已从页面资讯缩略图准备 {0} 个图片种子；优先必应缩略图：{1}；方式：浏览器界面",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:191"
 },
 {
  "en": "No rendered Bing feed thumbnail URL was available - using the static Visual Search seed",
  "zh": "没有可用的页面资讯缩略图地址，改用静态视觉搜索图片",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:200"
 },
 {
  "en": "Bing did not issue reportActivity during the rendered Visual Search | bcid={0}",
  "zh": "页面视觉搜索期间，必应没有发起活动上报；图片搜索标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:262"
 },
 {
  "en": "Rendered \"Search using an image\" control was not found",
  "zh": "未找到页面中的以图搜索控件",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:311"
 },
 {
  "en": "Visual Search dialog did not open; retrying the camera button after initialization",
  "zh": "视觉搜索弹窗未打开，等待初始化后重试相机按钮",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:338"
 },
 {
  "en": "Rendered image-URL field did not appear after clicking Visual Search",
  "zh": "点击视觉搜索后，没有出现图片地址输入框",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:346"
 },
 {
  "en": "Cookie consent could not be dismissed; Visual Search controls remain covered",
  "zh": "无法关闭网站凭据同意提示，视觉搜索控件仍被遮挡",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:356"
 },
 {
  "en": "Submitting rendered Visual Search URL and waiting for Bing to open the result",
  "zh": "正在提交图片地址，等待必应打开视觉搜索结果",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:368"
 },
 {
  "en": "Enter did not navigate yet; clicking the rendered Visual Search submit control",
  "zh": "按回车后仍未跳转，改为点击页面视觉搜索提交控件",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:390"
 },
 {
  "en": "No separate Visual Search submit control was visible; waiting for the Enter submission",
  "zh": "未看到独立的视觉搜索提交控件，继续等待回车提交结果",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:397"
 },
 {
  "en": "reportActivity response body became unavailable after navigation; keeping the acknowledgement | status={0} | {1}",
  "zh": "跳转后无法读取活动上报响应正文，保留此前已收到的接受结果；状态：{0}；{1}",
  "keep": [],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:428"
 },
 {
  "en": "Bing reported \"{0}\" | source=rendered-control | status={1} | acknowledged={2} | ig={3} | bcid={4} | sessionBalanceDelta={5} | currentBalance={6} | searchPts={7}/{8}",
  "zh": "必应已上报「{0}」；来源：页面控件；状态：{1}；已接受：{2}；页面会话标识：{3}；图片搜索标识：{4}；本次余额变化：{5}；当前余额：{6}；搜索积分：{7}/{8}",
  "keep": [
   0,
   4
  ],
  "source": "src/rewards/browser/visual/VisualSearchPage.ts:446"
 },
 {
  "en": "Direct Rewards server actions are disabled while rewardsMode=\"browser\"",
  "zh": "浏览器任务模式下不允许直接调用积分服务端操作",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:160"
 },
 {
  "en": "Streak completion refresh unavailable | {0}",
  "zh": "无法刷新连续任务完成状态；{0}",
  "keep": [],
  "source": "src/rewards/RewardsService.ts:82"
 },
 {
  "en": "{0} absent from the cached snapshot (offers={1}) - refetching /earn and /dashboard",
  "zh": "缓存快照中没有 {0}，活动共 {1} 项，正在重新读取任务页和控制台",
  "keep": [
   0
  ],
  "source": "src/rewards/RewardsService.ts:146"
 },
 {
  "en": "Refetched /earn and /dashboard | offers={0} | {1} found={2}",
  "zh": "已重新读取任务页和控制台；活动：{0} 项；是否找到 {1}：{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/RewardsService.ts:161"
 },
 {
  "en": "Nothing to claim | claimablePoints=0 | pointsGained=0 | currentBalance={0}",
  "zh": "没有可领取奖励；可领取积分：0；本次获得积分：0；当前余额：{0}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:25"
 },
 {
  "en": "Claimable bonus points could not be verified; skipping claim request",
  "zh": "无法确认可领取的额外奖励，本次暂不提交领取请求",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:34"
 },
 {
  "en": "Starting ClaimBonusPoints | transport=api | rewardsMode={0} | claimablePoints={1} | currentBalance={2}",
  "zh": "开始通过接口领取额外积分；任务模式：{0}；可领取积分：{1}；当前余额：{2}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:42"
 },
 {
  "en": "Claim submission uncertain; verifying without resubmitting | {0}",
  "zh": "领取提交结果不确定，先核实，不重复提交；{0}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:55"
 },
 {
  "en": "Claim verification read failed | attempt={0} | acknowledged={1} | message={2}",
  "zh": "读取领取核实数据失败；第 {0} 次；已接受：{1}；说明：{2}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:85"
 },
 {
  "en": "Claim balance verification failed | attempt={0} | message={1}",
  "zh": "核实领取后的余额失败；第 {0} 次；说明：{1}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:98"
 },
 {
  "en": "Claim verification | attempt={0}/4 | previousBalance={1} | currentBalance={2} | balanceDelta={3} | claimableAfter={4} | stateConfirmed={5} | balanceConfirmed={6}",
  "zh": "正在核实奖励领取；第 {0}/4 次；之前余额：{1}；当前余额：{2}；余额变化：{3}；领取后可领取积分：{4}；状态已确认：{5}；余额已确认：{6}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:107"
 },
 {
  "en": "Error in claimBonusPoints | message={0}",
  "zh": "领取额外奖励执行出错；说明：{0}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:162"
 },
 {
  "en": "Claim state request failed | status={0}",
  "zh": "请求奖励领取状态失败；状态：{0}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:194"
 },
 {
  "en": "No eligible pending \"Daily Set\" items in the current data",
  "zh": "每日三项当前没有需要继续执行的项目",
  "keep": [],
  "source": "src/rewards/shared/activities/DailySet.ts:15"
 },
 {
  "en": "Started solving \"Daily Set\" items | remaining={0}",
  "zh": "开始处理每日三项；剩余：{0} 项",
  "keep": [],
  "source": "src/rewards/shared/activities/DailySet.ts:23"
 },
 {
  "en": "Finished processing \"Daily Set\" items",
  "zh": "每日三项处理流程已结束",
  "keep": [],
  "source": "src/rewards/shared/activities/DailySet.ts:29"
 },
 {
  "en": "No eligible pending \"More Promotions\" items in the current data",
  "zh": "当前没有符合条件且尚未完成的更多推广活动",
  "keep": [],
  "source": "src/rewards/shared/activities/MorePromotions.ts:15"
 },
 {
  "en": "Started solving \"More Promotions\" items | remaining={0}",
  "zh": "开始处理更多推广活动；剩余：{0} 项",
  "keep": [],
  "source": "src/rewards/shared/activities/MorePromotions.ts:23"
 },
 {
  "en": "Finished processing \"More Promotions\" items",
  "zh": "更多推广活动处理流程已结束",
  "keep": [],
  "source": "src/rewards/shared/activities/MorePromotions.ts:29"
 },
 {
  "en": "Error while solving activity \"{0}\" | message={1}",
  "zh": "执行活动「{0}」时出错；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:27"
 },
 {
  "en": "{0} | confirmed={1} | unconfirmed={2} | skipped={3} | failed={4}",
  "zh": "{0}；已确认：{1}；未确认：{2}；已跳过：{3}；失败：{4}",
  "keep": [],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:37"
 },
 {
  "en": "Processing activity | title=\"{0}\" | offerId={1} | type={2}",
  "zh": "正在处理活动；标题：「{0}」；活动标识：{1}；类型：{2}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:49"
 },
 {
  "en": "Skipped activity \"{0}\" | offerId={1} | reason=unsupported type \"{2}\"",
  "zh": "已跳过活动「{0}」；活动标识：{1}；原因：不支持「{2}」类型",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:66"
 },
 {
  "en": "Found activity type \"SearchOnBing\" | title=\"{0}\" | offerId={1}",
  "zh": "发现指定主题搜索活动；标题：「{0}」；活动标识：{1}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:77"
 },
 {
  "en": "Found activity type \"UrlReward\" | title=\"{0}\" | offerId={1}",
  "zh": "发现访问链接奖励活动；标题：「{0}」；活动标识：{1}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:85"
 },
 {
  "en": "Skipping \"{0}\" (disabled in config) | offerId={1}",
  "zh": "跳过「{0}」：配置中已停用此任务；活动标识：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/activities/PromotionRunner.ts:94"
 },
 {
  "en": "User data source unavailable | via={0} | path={1} | attempt={2}/{3} | elapsedMs={4} | remainingMs={5} | message={6}",
  "zh": "暂时无法读取账号资料；请求方式：{0}；接口路径：{1}；第 {2}/{3} 次尝试；已耗时：{4} 毫秒；剩余：{5} 毫秒；说明：{6}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/data/AccountData.ts:55"
 },
 {
  "en": "Account information observed | level={0} | pointsProgress={1} | pointsRemaining={2} | lifetimeEarn={3}",
  "zh": "已读取账号信息；等级：{0}；等级积分进度：{1}；距离升级所需积分：{2}；累计获取积分：{3}",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:139"
 },
 {
  "en": "Account balance observed | currentBalance={0} | initialPoints={1}",
  "zh": "已读取账号余额；当前余额：{0}；运行前余额：{1}",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:150"
 },
 {
  "en": "User data received | source={0} | via={1} | session={2} | currentBalance={3} | warnings={4}",
  "zh": "已收到账号资料；来源：{0}；请求方式：{1}；会话：{2}；当前余额：{3}；警告：{4} 条",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:161"
 },
 {
  "en": "Microsoft sign-in HTML returned instead of user data JSON; the request has no authenticated Rewards session",
  "zh": "账号资料请求返回了微软登录网页，没有有效的积分登录会话",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:178"
 },
 {
  "en": "User data request returned text or HTML instead of JSON | status={0}",
  "zh": "账号资料请求返回文本或网页，而非结构化数据；状态：{0}",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:182"
 },
 {
  "en": "Failed to fetch {0} over http | {1}",
  "zh": "通过网络请求获取 {0} 失败；{1}",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:219"
 },
 {
  "en": "Rewards user data response is missing the dashboard",
  "zh": "积分账号资料响应中缺少控制台数据",
  "keep": [],
  "source": "src/rewards/shared/data/DashboardMapper.ts:14"
 },
 {
  "en": "Rewards user data response does not contain an authenticated Rewards account",
  "zh": "积分账号资料响应不包含已登录的积分账号",
  "keep": [],
  "source": "src/rewards/shared/data/DashboardMapper.ts:16"
 },
 {
  "en": "Skipping: desktop access token is unavailable",
  "zh": "跳过后台浏览任务：电脑端访问令牌不可用",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:69"
 },
 {
  "en": "Started background Edge browsing activity | offerId={0} | type={1} | targetMinutes={2} | reports={3} | serverIntervalMinutes={4} | jitterSeconds={5}-{6} | estimatedDurationMinutes={7}",
  "zh": "后台浏览奖励已开始；活动标识：{0}；类型：{1}；目标：{2} 分钟；预计上报：{3} 次；服务端间隔：{4} 分钟；随机偏移：{5}—{6} 秒；预计总耗时：{7} 分钟",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:116"
 },
 {
  "en": "Background activity cancelled",
  "zh": "后台活动已取消",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:248"
 },
 {
  "en": "Edge browsing report failed | report={0}/{1} | status={2} | message={3}",
  "zh": "浏览奖励上报失败；第 {0}/{1} 次；状态：{2}；说明：{3}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:148"
 },
 {
  "en": "Background Edge browsing activity failed | message={0}",
  "zh": "后台浏览奖励执行失败；说明：{0}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:252"
 },
 {
  "en": "No Edge browsing activation metadata present in the streak model or generic offers across the current, desktop, or cached mobile Rewards snapshots",
  "zh": "当前、电脑端和缓存的手机端积分快照中，都没有找到后台浏览奖励的激活资料",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:303"
 },
 {
  "en": "Edge browsing activation offer already completed | offerId={0}",
  "zh": "浏览奖励激活活动之前已完成；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:314"
 },
 {
  "en": "Activating Browsing Streak on Edge | offerId={0} | activationSource={1} | activityType={2} | activityTypeSource={3} | promotional={4} | geo={5}",
  "zh": "正在激活微软浏览器连续浏览奖励；活动标识：{0}；激活来源：{1}；活动类型：{2}；类型来源：{3}；推广活动：{4}；地区：{5}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:365"
 },
 {
  "en": "Activated Browsing Streak on Edge | offerId={0} | acknowledged={1} | confirmed={2}",
  "zh": "已提交连续浏览奖励激活；活动标识：{0}；已接受：{1}；已确认：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:398"
 },
 {
  "en": "Edge activation state request failed | status={0}",
  "zh": "读取浏览奖励激活状态失败；状态：{0}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:450"
 },
 {
  "en": "Could not verify activation state | offerId={0} | {1}",
  "zh": "无法核实激活状态；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:168"
 },
 {
  "en": "Activation metadata missing from the current snapshot; using cached {0} streak snapshot | offerId={1}",
  "zh": "当前快照缺少激活资料，使用缓存的{0}连续任务快照；活动标识：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:185"
 },
 {
  "en": "Using Edge browsing activation metadata from streak model | offerId={0}",
  "zh": "使用连续任务模型中的浏览奖励激活资料；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:504"
 },
 {
  "en": "Activation offer missing from the current snapshot; using cached {0} offer snapshot | offerId={1}",
  "zh": "当前快照缺少激活活动，使用缓存的{0}活动快照；活动标识：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:211"
 },
 {
  "en": "Using Edge browsing activation metadata from generic offer | offerId={0}",
  "zh": "使用普通活动中的浏览奖励激活资料；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:530"
 },
 {
  "en": "Could not verify Edge browsing completion: promotion is absent | report={0}/{1}",
  "zh": "无法核实浏览奖励是否完成：推广活动不存在；第 {0}/{1} 次上报",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:565"
 },
 {
  "en": "Refreshed Edge browsing server state | report={0}/{1} | complete={2}",
  "zh": "已刷新服务端浏览奖励状态；第 {0}/{1} 次上报；已完成：{2}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:574"
 },
 {
  "en": "Could not refresh Edge browsing server state | report={0}/{1} | message={2}",
  "zh": "无法刷新服务端浏览奖励状态；第 {0}/{1} 次上报；说明：{2}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:581"
 },
 {
  "en": "Microsoft reports Edge browsing activity complete | report={0}/{1} | accepted={2} | duplicates={3} | failed={4}",
  "zh": "微软返回浏览奖励活动已完成；第 {0}/{1} 次上报；接受：{2}；重复：{3}；失败：{4}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:598"
 },
 {
  "en": "Edge browsing promotion is missing from the refreshed profile; activity settings could not be verified",
  "zh": "刷新后的资料缺少浏览奖励活动，无法核实活动设置",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:609"
 },
 {
  "en": "Skipping: promotion metadata is incomplete | offerId={0} | type={1}",
  "zh": "跳过活动：推广资料不完整；活动标识：{0}；类型：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:620"
 },
 {
  "en": "Invalid server report interval; using fallback | received={0} | fallbackMinutes={1}",
  "zh": "服务端上报间隔无效，改用备用间隔；收到的值：{0}；备用间隔：{1} 分钟",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:637"
 },
 {
  "en": "Edge activity response | offerId={0} | type={1} | quantity={2}",
  "zh": "浏览奖励接口响应；活动标识：{0}；类型：{1}；数量：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:653"
 },
 {
  "en": "Edge activity returned code {0}",
  "zh": "浏览奖励接口返回错误码 {0}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgePlatformClient.ts:62"
 },
 {
  "en": "Unexpected background task failure | message={0}",
  "zh": "后台任务发生意外错误；说明：{0}",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeTask.ts:34"
 },
 {
  "en": "Foreground activities finished; waiting for the background Edge browsing activity",
  "zh": "前台任务已结束，等待后台浏览奖励完成",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeTask.ts:54"
 },
 {
  "en": "Expected a Bing request URL",
  "zh": "请求地址必须属于必应站点",
  "keep": [],
  "source": "src/rewards/shared/http/BingClient.ts:13"
 },
 {
  "en": "Bing request left the authenticated Bing session",
  "zh": "必应请求已离开当前已登录会话",
  "keep": [],
  "source": "src/rewards/shared/http/BingClient.ts:27"
 },
 {
  "en": "Rewards dashboard did not render (no section#dailyset) - likely a login/redirect issue, aborting",
  "zh": "积分控制台未显示每日任务区域，可能是登录或跳转异常，本次停止",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:57"
 },
 {
  "en": "No offers parsed - page may not have rendered the RSC payload (check login/redirect)",
  "zh": "没有解析到活动，页面可能尚未返回组件数据，请检查登录或页面跳转",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:63"
 },
 {
  "en": "No action ids discovered - server-action calls will fail (bundle may have stripped names)",
  "zh": "没有发现服务端操作标识，相关请求将失败；页面程序可能已去除操作名称",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:71"
 },
 {
  "en": "Context ready | rewardsMode={0} | actions={1} | reportable={2} | available={3}",
  "zh": "积分任务数据已就绪；任务模式：{0}；操作标识：{1}；可上报活动：{2}；可用积分：{3}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:78"
 },
 {
  "en": "Rewards build | id={0}",
  "zh": "积分页面构建版本；标识：{0}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:84"
 },
 {
  "en": "Failed acquiring context | error={0}",
  "zh": "读取积分任务数据失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:90"
 },
 {
  "en": "Dismissed welcome dialog",
  "zh": "已关闭欢迎弹窗",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:107"
 },
 {
  "en": "Failed to dismiss welcome dialog: {0}",
  "zh": "关闭欢迎弹窗失败：{0}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:111"
 },
 {
  "en": "Failed to fetch {0} HTML | status={1} - snapshot and action discovery may be incomplete",
  "zh": "获取 {0} 网页失败；状态：{1}；页面快照和操作标识可能不完整",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:124"
 },
 {
  "en": "Failed to fetch {0} HTML | error={1} - snapshot and action discovery may be incomplete",
  "zh": "获取 {0} 网页失败；错误：{1}；页面快照和操作标识可能不完整",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:130"
 },
 {
  "en": "Required server action was not found | names={0} | build={1}",
  "zh": "未找到所需服务端操作；操作名称：{0}；页面版本：{1}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:203"
 },
 {
  "en": "Submitting action | name={0} | route=/{1} | build={2}",
  "zh": "正在提交服务端操作；名称：{0}；路径：/{1}；页面版本：{2}",
  "keep": [],
  "source": "src/rewards/shared/http/ServerActions.ts:208"
 },
 {
  "en": "Server action delivered via {0} | url={1} | status={2}",
  "zh": "已通过 {0} 发出服务端操作；地址：{1}；状态：{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/http/ServerActions.ts:298"
 },
 {
  "en": "Offer verification | offerId={0} | check={1}/3 | complete={2} | pointProgress={3}->{4} | reportedCredits={5} | balanceDelta={6} | pointsGained={7}",
  "zh": "正在核实活动；活动标识：{0}；第 {1}/3 次；已完成：{2}；积分进度：{3}→{4}；上报积分：{5}；余额变化：{6}；获得积分：{7}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/OfferVerifier.ts:65"
 },
 {
  "en": "Offer read unavailable | offerId={0} | {1}",
  "zh": "无法读取活动状态；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/OfferVerifier.ts:124"
 },
 {
  "en": "Chunk unavailable | path={0} | {1}",
  "zh": "程序数据片段不可用；路径：{0}；{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/ActionDiscovery.ts:91"
 },
 {
  "en": "Discovery finished | build={0} | chunks={1} | bytes={2} | bounded={3} | unavailable={4} | complete={5} | actions={6}",
  "zh": "页面操作查找已结束；页面版本：{0}；程序片段：{1}；读取字节：{2}；受限：{3}；不可用：{4}；已完整读取：{5}；操作标识：{6}",
  "keep": [],
  "source": "src/rewards/shared/parsers/ActionDiscovery.ts:114"
 },
 {
  "en": "Extracted action ids | named={0} | total={1}",
  "zh": "已提取服务端操作标识；具名操作：{0}；操作总数：{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/ActionMetadata.ts:126"
 },
 {
  "en": "Failed extracting action ids | error={0}",
  "zh": "提取服务端操作标识失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/ActionMetadata.ts:132"
 },
 {
  "en": "Skipped undecodable flight chunk | error={0}",
  "zh": "已跳过无法解码的页面数据片段；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/FlightDecoder.ts:25"
 },
 {
  "en": "Concatenated flight chunks | pages={0} | chunks={1} | length={2} | perSource=[{3}]",
  "zh": "已合并页面数据片段；页面：{0}；片段：{1}；长度：{2}；各来源分布：[{3}]",
  "keep": [],
  "source": "src/rewards/shared/parsers/FlightDecoder.ts:41"
 },
 {
  "en": "No __next_f flight chunks found - page may not be an RSC render or markup changed",
  "zh": "未找到页面组件数据片段，页面可能不是预期格式或结构已经变化",
  "keep": [],
  "source": "src/rewards/shared/parsers/FlightDecoder.ts:48"
 },
 {
  "en": "Failed concatenating flight chunks | error={0}",
  "zh": "合并页面数据片段失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/FlightDecoder.ts:57"
 },
 {
  "en": "extractObjects(\"{0}\") had {1} unparseable matches",
  "zh": "解析对象「{0}」时有 {1} 个匹配结果无法解析",
  "keep": [],
  "source": "src/rewards/shared/parsers/FlightDecoder.ts:135"
 },
 {
  "en": "Rewards balance is missing or invalid",
  "zh": "积分余额缺失或无效",
  "keep": [],
  "source": "src/rewards/shared/parsers/NormalizeRewards.ts:145"
 },
 {
  "en": "Snapshot complete | offers={0} | reportable={1} | streaks={2} | streakProtectionEnabled={3} | streakProtectionRemainingDays={4} | streakCounter={5} | level={6} | account={7}",
  "zh": "账号快照已读取；活动：{0}；可上报：{1}；连续任务：{2}；保护已启用：{3}；剩余保护天数：{4}；连续天数：{5}；账号等级：{6}；账号：{7}",
  "keep": [
   7
  ],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:120"
 },
 {
  "en": "Parsed offers | total={0} | reportable={1}",
  "zh": "已解析活动；总数：{0}；可上报：{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:270"
 },
 {
  "en": "Parsed offer ids | {0}",
  "zh": "已解析活动标识；{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:275"
 },
 {
  "en": "Failed parsing offers | error={0}",
  "zh": "解析活动失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:283"
 },
 {
  "en": "Parsed streaks | {0}",
  "zh": "已解析连续任务；{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:337"
 },
 {
  "en": "Failed parsing streaks | error={0}",
  "zh": "解析连续任务失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:345"
 },
 {
  "en": "Parsed streak protection | enabled={0} | remainingDays={1} | streakCounter={2}",
  "zh": "已解析连续签到保护；已启用：{0}；剩余保护天数：{1}；连续天数：{2}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:371"
 },
 {
  "en": "Failed parsing streak protection | error={0}",
  "zh": "解析连续签到保护失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:379"
 },
 {
  "en": "Parsed account | level={0} | available={1} | toGo={2} | lifetime={3}",
  "zh": "已解析账号；等级：{0}；可用积分：{1}；距离升级所需积分：{2}；累计积分：{3}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:403"
 },
 {
  "en": "Account state empty - membership/header objects not found in payload",
  "zh": "账号状态为空，响应中没有会员和账号头部数据",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:410"
 },
 {
  "en": "Failed parsing account | error={0}",
  "zh": "解析账号失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:419"
 },
 {
  "en": "Quest snapshot | children={0} | reportable={1}",
  "zh": "系列任务快照；子任务：{0}；可上报：{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:455"
 },
 {
  "en": "Failed parsing quest page | error={0}",
  "zh": "解析系列任务页面失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:463"
 },
 {
  "en": "Parsed quest children | total={0} | reportable={1}",
  "zh": "已解析系列任务子项目；总数：{0}；可上报：{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:507"
 },
 {
  "en": "Quest list | parents={0} | incomplete={1}",
  "zh": "系列任务列表；父任务：{0}；未完成：{1}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:564"
 },
 {
  "en": "Quest points | {0}",
  "zh": "系列任务积分；{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:569"
 },
 {
  "en": "No parent quests parsed - the fetched HTML may be missing the QuestSection chunks (Suspense/streaming or a login redirect)",
  "zh": "没有解析出系列父任务，网页可能缺少对应组件数据，可能仍在延迟加载或已跳转到登录页",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:575"
 },
 {
  "en": "Failed parsing quest list | error={0}",
  "zh": "解析系列任务列表失败；错误：{0}",
  "keep": [],
  "source": "src/rewards/shared/parsers/RewardsPageParser.ts:583"
 },
 {
  "en": "Quest progress | offerId={0} | progress={1}/{2}",
  "zh": "系列任务进度；活动标识：{0}；进度：{1}/{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/PunchCardProgress.ts:66"
 },
 {
  "en": "Fetching main topics | localeMode={0} | language={1} | country={2} | engines={3}",
  "zh": "正在获取搜索主题；语言地区模式：{0}；语言：{1}；国家：{2}；词源：{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:33"
 },
 {
  "en": "Source results | engine={0} | topics={1} | language={2} | country={3}",
  "zh": "词源返回结果；词源：{0}；主题数：{1}；语言：{2}；国家：{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:59"
 },
 {
  "en": "Source unavailable | engine={0} | language={1} | country={2} | {3}",
  "zh": "词源不可用；词源：{0}；语言：{1}；国家：{2}；{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:66"
 },
 {
  "en": "Selected sources returned no usable topics | fallback=local | topics={0} | language={1} | country={2}",
  "zh": "所选词源没有可用主题，改用本地词库；主题数：{0}；语言：{1}；国家：{2}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:79"
 },
 {
  "en": "Topic pool ready | raw={0} | usable={1} | language={2} | country={3}",
  "zh": "搜索主题池已就绪；原始数：{0}；可用数：{1}；语言：{2}；国家：{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:85"
 },
 {
  "en": "Using cached topic pool | localeMode={0} | language={1} | country={2} | engines={3}",
  "zh": "使用缓存的搜索主题池；语言地区模式：{0}；语言：{1}；国家：{2}；词源：{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:102"
 },
 {
  "en": "Cluster ready | main={0} | topicSource={1} | language={2} | country={3} | candidates={4} | related={5} | queries={6}",
  "zh": "关联搜索组已就绪；主词：{0}；主题来源：{1}；语言：{2}；国家：{3}；候选：{4}；关联词：{5}；搜索词：{6}",
  "keep": [],
  "source": "src/rewards/shared/query/QueryEngine.ts:143"
 },
 {
  "en": "Fetching query source | language={0} | country={1} | {2}",
  "zh": "正在获取搜索词来源；语言：{0}；国家：{1}；{2}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:72"
 },
 {
  "en": "Request failed | {0}",
  "zh": "请求失败；{0}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:210"
 },
 {
  "en": "Request failed | lang={0} | {1}",
  "zh": "请求失败；语言：{0}；{1}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:231"
 },
 {
  "en": "Unknown RSS site \"{0}\"",
  "zh": "未知的资讯订阅站点「{0}」",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:261"
 },
 {
  "en": "Unknown RSS feed \"{0}.{1}\"",
  "zh": "未知的资讯订阅源「{0}.{1}」",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:296"
 },
 {
  "en": "Using cached feed | language={0} | country={1} | {2}",
  "zh": "使用缓存的资讯订阅；语言：{0}；国家：{1}；{2}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:323"
 },
 {
  "en": "Feed ready | topics={0} | language={1} | country={2} | {3}",
  "zh": "资讯订阅已就绪；主题数：{0}；语言：{1}；国家：{2}；{3}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:334"
 },
 {
  "en": "Feed failed | {0} | {1}",
  "zh": "资讯订阅读取失败；{0}；{1}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:341"
 },
 {
  "en": "Failed reading search-queries.json | {0}",
  "zh": "读取搜索词配置文件失败；{0}",
  "keep": [],
  "source": "src/rewards/shared/query/QuerySources.ts:421"
 },
 {
  "en": "Queue prepared | mainTopics={0} | clusterSearch={1} | localeMode={2} | language={3} | country={4} | engines={5}",
  "zh": "搜索队列已准备好；主主题数：{0}；关联搜索：{1}；语言地区模式：{2}；语言：{3}；国家：{4}；词源：{5}",
  "keep": [],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:31"
 },
 {
  "en": "Cluster exhausted | main=\"{0}\" | emitted={1}/{2}",
  "zh": "关联搜索组已用完；主词：「{0}」；已输出：{1}/{2}",
  "keep": [],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:43"
 },
 {
  "en": "Queue exhausted | topicsSeen={0} | queriesSeen={1}",
  "zh": "搜索队列已用完；已处理主题：{0}；已使用搜索词：{1}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:52"
 },
 {
  "en": "Cluster activated | main={0} | {1} | topic={2}/{3} | received={4} | queued={5} | skippedSeen={6}",
  "zh": "关联搜索组已启用；主词：{0}；{1}；主题：{2}/{3}；收到：{4}；入队：{5}；跳过已用词：{6}",
  "keep": [],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:75"
 },
 {
  "en": "Query selected | query={0} | localeMode={1} | language={2} | country={3} | {4} | cluster={5}/{6} | topic={7} | topicSource={8} | topicFetchedFrom={9}",
  "zh": "已选择搜索词：{0}；语言地区模式：{1}；语言：{2}；国家：{3}；{4}；关联组：{5}/{6}；主题：{7}；主题来源：{8}；主题获取方式：{9}",
  "keep": [
   0,
   7
  ],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:86"
 },
 {
  "en": "Query selected | query={0} | localeMode={1} | language={2} | country={3} | {4} | cluster={5}/{6}",
  "zh": "已选择搜索词：{0}；语言地区模式：{1}；语言：{2}；国家：{3}；{4}；关联组：{5}/{6}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:86"
 },
 {
  "en": "Topic pool refilled | received={0} | queued={1} | previouslySeen={2}",
  "zh": "主题池已补充；收到：{0}；入队：{1}；此前已用：{2}",
  "keep": [],
  "source": "src/rewards/shared/query/SearchQueryQueue.ts:118"
 },
 {
  "en": "maxBonusSearches is 0, skipping bonus farming",
  "zh": "额外搜索次数上限为零，跳过额外搜索",
  "keep": [],
  "source": "src/rewards/shared/search/BonusTracker.ts:38"
 },
 {
  "en": "Could not fetch dashboard, skipping bonus farming | {0}",
  "zh": "无法获取控制台，跳过额外搜索；{0}",
  "keep": [],
  "source": "src/rewards/shared/search/BonusTracker.ts:48"
 },
 {
  "en": "No active search-bonus offer in the dashboard, skipping",
  "zh": "控制台没有已激活的额外搜索奖励，跳过",
  "keep": [],
  "source": "src/rewards/shared/search/BonusTracker.ts:59"
 },
 {
  "en": "Found search bonus \"{0}\" | offerId={1} | progress={2}/{3} | maxSearches={4}",
  "zh": "发现额外搜索奖励「{0}」；活动标识：{1}；进度：{2}/{3}；搜索上限：{4}",
  "keep": [
   0,
   1
  ],
  "source": "src/rewards/shared/search/BonusTracker.ts:81"
 },
 {
  "en": "Offer {0} no longer present, stopping",
  "zh": "活动 {0} 已不存在，停止执行",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/search/BonusTracker.ts:102"
 },
 {
  "en": "Search delay checked | activity={0} | waitMs={1}",
  "zh": "已检查搜索间隔；任务：{0}；等待：{1} 毫秒",
  "keep": [],
  "source": "src/rewards/shared/search/SearchDelay.ts:9"
 },
 {
  "en": "Waiting before next search | activity={0} | waitMs={1}",
  "zh": "等待下一次搜索；任务：{0}；等待：{1} 毫秒",
  "keep": [],
  "source": "src/rewards/shared/search/SearchDelay.ts:11"
 },
 {
  "en": "Mobile: {0} | Desktop: {1}{2}",
  "zh": "手机端：{0}；电脑端：{1}{2}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:54"
 },
 {
  "en": "{0} search failed | {1}",
  "zh": "{0}搜索失败；{1}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:111"
 },
 {
  "en": "Starting bonus searches",
  "zh": "开始额外搜索",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:122"
 },
 {
  "en": "Bonus search failed | {0}",
  "zh": "额外搜索失败；{0}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:130"
 },
 {
  "en": "Bonus search summary | pointsGained={0} | currentBalance={1}",
  "zh": "额外搜索结果；获得积分：{0}；当前余额：{1}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:139"
 },
 {
  "en": "Expected a query entry object",
  "zh": "搜索词条目应为对象",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:54"
 },
 {
  "en": "Expected a list of nonempty query strings",
  "zh": "搜索词列表必须由非空字符串组成",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:60"
 },
 {
  "en": "Query catalogue must be a nonempty array",
  "zh": "搜索词目录必须是非空数组",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:65"
 },
 {
  "en": "Invalid query topic ID",
  "zh": "搜索主题标识无效",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:70"
 },
 {
  "en": "Query topic title is missing",
  "zh": "搜索主题缺少标题",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:71"
 },
 {
  "en": "Multilingual query topics need an ID",
  "zh": "多语言搜索主题需要主题标识",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:75"
 },
 {
  "en": "Duplicate query locale: {0}",
  "zh": "搜索语言地区重复：{0}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:78"
 },
 {
  "en": "Query topic has no queries",
  "zh": "搜索主题中没有搜索词",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:82"
 },
 {
  "en": "Duplicate search category: {0}",
  "zh": "搜索分类重复：{0}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:86"
 },
 {
  "en": "Remote query catalogue unavailable; using bundled queries | {0}",
  "zh": "远程搜索词目录不可用，改用随附词库；{0}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:125"
 },
 {
  "en": "No query topic matched; leaving activity unconfirmed | offerId={0} | category={1} | title={2}",
  "zh": "没有匹配的搜索主题，此活动仍按未确认处理；活动标识：{0}；分类：{1}；标题：{2}",
  "keep": [
   0,
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:175"
 },
 {
  "en": "Using English query fallback | topic={0} | requestedLocale={1}",
  "zh": "改用英文搜索词；主题：{0}；要求的语言地区：{1}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:200"
 },
 {
  "en": "Selected activity queries | offerId={0} | topic={1} | matchedBy={2} | requestedLocale={3} | queryLocale={4} | source={5} | queries={6}",
  "zh": "已选择活动搜索词；活动标识：{0}；主题：{1}；匹配依据：{2}；要求语言地区：{3}；实际搜索语言地区：{4}；词源：{5}；搜索词：{6}",
  "keep": [
   0,
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:205"
 },
 {
  "en": "No queries available for topic | offerId={0} | topic={1} | requestedLocale={2}",
  "zh": "此主题没有可用搜索词；活动标识：{0}；主题：{1}；要求的语言地区：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/search/SearchOnBingQueries.ts:215"
 },
 {
  "en": "No unused Explore on Bing attempts remain | attempts={0}/{1} | offerId={2}",
  "zh": "指定主题搜索尝试次数已用完；已尝试：{0}/{1}；活动标识：{2}",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:40"
 },
 {
  "en": "Starting search loop | queriesCount={0} | attemptsUsed={1} | maxAttempts={2} | targetPoints={3} | currentBalance={4}",
  "zh": "开始执行搜索循环；搜索词：{0}；已尝试：{1}；尝试上限：{2}；目标积分：{3}；当前余额：{4}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:47"
 },
 {
  "en": "Searching Explore on Bing | search={0}/{1} | query={2}",
  "zh": "正在执行指定主题搜索；第 {0}/{1} 次；搜索词：{2}",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:61"
 },
 {
  "en": "Progress check | query=\"{0}\" | offerProgress={1} | offerComplete={2} | currentBalance={3}",
  "zh": "正在核对搜索进度；搜索词：「{0}」；活动进度：{1}；活动已完成：{2}；当前余额：{3}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:72"
 },
 {
  "en": "SearchOnBing activity completed | currentBalance={0} | query=\"{1}\" | offerProgress={2}",
  "zh": "指定主题搜索活动已完成；当前余额：{0}；搜索词：「{1}」；活动进度：{2}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:80"
 },
 {
  "en": "{0}/{1} | activity not complete | offerProgress={2} | query=\"{3}\"",
  "zh": "第 {0}/{1} 次尝试，活动仍未完成；活动进度：{2}；搜索词：「{3}」",
  "keep": [
   3
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:87"
 },
 {
  "en": "Error during search loop | query=\"{0}\" | message={1}",
  "zh": "搜索循环执行出错；搜索词：「{0}」；说明：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:94"
 },
 {
  "en": "Finished search attempts without completing the activity | queriesTried={0} | maxAttempts={1} | offerId={2} | currentBalance={3} | previousBalance={4}",
  "zh": "搜索尝试已结束，活动仍未完成；已用搜索词：{0}；尝试上限：{1}；活动标识：{2}；当前余额：{3}；之前余额：{4}",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:105"
 },
 {
  "en": "Explore on Bing remains incomplete after {0}/{1} attempts; leaving it for the next run | title={2}",
  "zh": "指定主题搜索在 {0}/{1} 次尝试后仍未完成，留待下次运行；标题：{2}",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/search/SearchOnBingShared.ts:112"
 },
 {
  "en": "Ignoring expired {0} state | resetAt={1}",
  "zh": "忽略已过期的{0}状态；重置时间：{1}",
  "keep": [],
  "source": "src/rewards/shared/Streaks.ts:87"
 },
 {
  "en": "{0} unavailable in fresh snapshot | partners={1}",
  "zh": "新快照中没有 {0}；合作活动：{1}",
  "keep": [],
  "source": "src/rewards/shared/Streaks.ts:87"
 },
 {
  "en": "{0} state | partner={1} | dayCompleted={2} | activities={3}/{4} | days={5}/{6} | resetAt={7}",
  "zh": "{0}状态；合作活动：{1}；今日已完成：{2}；活动进度：{3}/{4}；连续天数：{5}/{6}；重置时间：{7}",
  "keep": [],
  "source": "src/rewards/shared/Streaks.ts:96"
 },
 {
  "en": "{0} data unavailable | {1}",
  "zh": "{0}数据不可用；{1}",
  "keep": [],
  "source": "src/rewards/shared/Streaks.ts:106"
 },
 {
  "en": "Task delay checked | {0} | waitMs={1}",
  "zh": "已检查任务间隔；{0}；等待：{1} 毫秒",
  "keep": [],
  "source": "src/rewards/shared/TaskPacing.ts:25"
 },
 {
  "en": "Waiting before next task | {0} | waitMs={1}",
  "zh": "等待下一个任务；{0}；等待：{1} 毫秒",
  "keep": [],
  "source": "src/rewards/shared/TaskPacing.ts:27"
 },
 {
  "en": "Task delay scheduled | {0} | delayMs={1} | readyAt={2}",
  "zh": "已安排任务等待；{0}；等待：{1} 毫秒；可执行时间：{2}",
  "keep": [],
  "source": "src/rewards/shared/TaskPacing.ts:43"
 },
 {
  "en": "Task delay unchanged | {0} | reason=task-skipped",
  "zh": "任务等待时间保持不变；{0}；原因：本次任务被跳过",
  "keep": [],
  "source": "src/rewards/shared/TaskPacing.ts:49"
 },
 {
  "en": "Skipping on mobile - desktop-only activity",
  "zh": "手机端跳过此任务，该活动仅限电脑端",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:41"
 },
 {
  "en": "Already completed today | visualSearchStreak={0}/{1}",
  "zh": "今天已完成视觉搜索；连续天数：{0}/{1}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:50"
 },
 {
  "en": "No visual-search streak in the snapshot - falling back to the activation offer",
  "zh": "快照中没有视觉搜索连续活动，改为检查激活活动",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:89"
 },
 {
  "en": "Streak state | partner=\"{0}\" | enabled={1} | dayCompleted={2} | days={3}/{4} | currentDay={5} | activities={6}/{7} | dailyPoints={8}",
  "zh": "连续任务状态；合作活动：「{0}」；已启用：{1}；今日已完成：{2}；连续天数：{3}/{4}；当前第几天：{5}；今日活动进度：{6}/{7}；每日积分：{8}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:97"
 },
 {
  "en": "Streak is present but not enabled - searches will not register until it is switched on",
  "zh": "连续任务存在但尚未启用，需要先开启才会记录搜索进度",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:104"
 },
 {
  "en": "No visual-search activation metadata present in the streak model or generic offers across the current, desktop, or cached mobile Rewards snapshots",
  "zh": "当前、电脑端和缓存手机端积分快照中，都没有找到视觉搜索激活资料",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:121"
 },
 {
  "en": "Visual search activation offer already completed | offerId={0}",
  "zh": "视觉搜索激活活动之前已完成；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:133"
 },
 {
  "en": "Activation offer is locked | offerId={0}",
  "zh": "激活活动尚未解锁；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:142"
 },
 {
  "en": "Using visual-search activation metadata from streak model | offerId={0}",
  "zh": "使用连续任务模型中的视觉搜索激活资料；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:191"
 },
 {
  "en": "Using visual-search activation metadata from generic offer | offerId={0}",
  "zh": "使用普通活动中的视觉搜索激活资料；活动标识：{0}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:217"
 },
 {
  "en": "Starting daily Visual Search | maxAttempts={0} | maxAcquisitionFailuresPerAttempt={1}",
  "zh": "开始每日视觉搜索；尝试上限：{0}；每次尝试允许的图片获取失败次数：{1}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:238"
 },
 {
  "en": "Daily visual search registered before retry | attempt={0}/{1}",
  "zh": "重试前已核实今日视觉搜索已登记；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:249"
 },
 {
  "en": "Visual Search attempt {0}/{1}",
  "zh": "视觉搜索第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:256"
 },
 {
  "en": "Refreshed visual-search seed pool | attempt={0}/{1} | candidates={2}",
  "zh": "视觉搜索图片池已刷新；第 {0}/{1} 次尝试；候选数：{2}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:265"
 },
 {
  "en": "Daily visual search registered | pointsGained={0} | currentBalance={1} | previousBalance={2} | balanceDelta={3} | searchPoints={4} | expectedStreakPoints={5} | backgroundRewardsActive={6} | creditedStreakPoints={7} | query=\"{8}\"",
  "zh": "今日视觉搜索已登记；获得积分：{0}；当前余额：{1}；之前余额：{2}；余额变化：{3}；搜索积分：{4}；预期连续任务积分：{5}；后台奖励正在运行：{6}；已核实连续任务积分：{7}；搜索词：「{8}」",
  "keep": [
   8
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:341"
 },
 {
  "en": "Visual search was reported but not credited (attempt {0}/{1}) | query=\"{2}\"",
  "zh": "视觉搜索已上报，但尚未入账；第 {0}/{1} 次尝试；搜索词：「{2}」",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:356"
 },
 {
  "en": "No reportActivity acknowledgement (attempt {0}/{1}) | query=\"{2}\"",
  "zh": "未收到活动上报的接受确认；第 {0}/{1} 次尝试；搜索词：「{2}」",
  "keep": [
   2
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:362"
 },
 {
  "en": "status=unconfirmed | Daily visual search was not confirmed | searchesReported={0} | candidatesRemaining={1}",
  "zh": "状态：未确认；今日视觉搜索未能确认完成；已上报搜索：{0} 次；剩余图片：{1}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:380"
 },
 {
  "en": "Could not obtain a visual search from one candidate (attempt {0}/{1})",
  "zh": "此候选图片无法生成视觉搜索；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:404"
 },
 {
  "en": "Skipping already-tried bcid={0} | candidatesRemaining={1}",
  "zh": "跳过已尝试的图片搜索标识 {0}；剩余候选图片：{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/visual/VisualSearch.ts:419"
 },
 {
  "en": "Visual-search seed pool exhausted for this attempt; it will be refreshed before retrying | attempt={0}/{1}",
  "zh": "本次图片池已用完，重试前将刷新图片池；第 {0}/{1} 次尝试",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:427"
 },
 {
  "en": "Streak still open after reporting | days={0}/{1} | activities={2}/{3}",
  "zh": "上报后连续任务仍未完成；连续天数：{0}/{1}；今日活动进度：{2}/{3}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:444"
 },
 {
  "en": "Streak verification unavailable | {0}",
  "zh": "无法核实连续任务状态；{0}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:464"
 },
 {
  "en": "Point verification unavailable | {0}",
  "zh": "无法核实积分；{0}",
  "keep": [],
  "source": "src/rewards/shared/visual/VisualSearch.ts:481"
 },
 {
  "en": "--platform requires desktop, mobile, or both",
  "zh": "平台参数只支持电脑端、手机端或两端",
  "keep": [],
  "source": "src/session/RegenerateSessions.ts:16"
 },
 {
  "en": "Unknown session-generation argument: {0}",
  "zh": "未知的会话生成参数：{0}",
  "keep": [],
  "source": "src/session/RegenerateSessions.ts:20"
 },
 {
  "en": "`platform` must be desktop, mobile, or both.",
  "zh": "平台值必须为电脑端、手机端或两端",
  "keep": [],
  "source": "src/session/SessionGeneration.ts:27"
 },
 {
  "en": "`fresh` must be a boolean.",
  "zh": "重新登录选项必须是布尔值",
  "keep": [],
  "source": "src/session/SessionGeneration.ts:30"
 },
 {
  "en": "No accounts configured for session regeneration",
  "zh": "没有可用于重新生成会话的账号",
  "keep": [],
  "source": "src/session/SessionGenerator.ts:18"
 },
 {
  "en": "Creating login sessions | accounts={0} | platforms={1} | fresh={2}",
  "zh": "正在创建登录会话；账号数：{0}；平台：{1}；重新登录：{2}",
  "keep": [],
  "source": "src/session/SessionGenerator.ts:22"
 },
 {
  "en": "Invalid resolved account region: {0}",
  "zh": "解析出的账号地区无效：{0}",
  "keep": [],
  "source": "src/session/SessionStore.ts:158"
 },
 {
  "en": "Unknown login page",
  "zh": "无法识别当前登录页面",
  "keep": [],
  "source": "src/util/ErrorDiagnostic.ts:145"
 },
 {
  "en": "Browser timezone has not been captured",
  "zh": "尚未取得浏览器时区",
  "keep": [],
  "source": "src/util/Utils.ts:47"
 },
 {
  "en": "The input provided ({0}) cannot be parsed to a valid time! Use a format like \"1 min\", \"1m\" or \"1 minutes\"",
  "zh": "无法将输入「{0}」解析为有效时长，请使用 1 min、1m 等格式",
  "keep": [],
  "source": "src/util/Utils.ts:104"
 },
 {
  "en": "--email requires an email address after it.",
  "zh": "邮箱参数后面必须填写邮箱地址",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:29"
 },
 {
  "en": "--email must be followed by a valid email address.",
  "zh": "邮箱参数后面必须是有效邮箱地址",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:32"
 },
 {
  "en": "Unexpected extra arguments: {0}",
  "zh": "存在多余参数：{0}",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:35"
 },
 {
  "en": "Provide the account email once, either positionally or with --email.",
  "zh": "邮箱只能填写一次，可以作为位置参数或命名参数",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:38"
 },
 {
  "en": "Missing account email address.",
  "zh": "缺少账号邮箱地址",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:43"
 },
 {
  "en": "Invalid account email address: {0}",
  "zh": "账号邮箱地址无效：{0}",
  "keep": [
   0
  ],
  "source": "scripts/lib/commandUtils.js:46"
 },
 {
  "en": "Unsupported session platform: {0}",
  "zh": "不支持此会话平台：{0}",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:136"
 },
 {
  "en": "Cannot save an invalid browser storage state",
  "zh": "无法保存无效的浏览器会话数据",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:139"
 },
 {
  "en": "{0} must be a boolean",
  "zh": "{0} 必须为布尔值",
  "keep": [],
  "source": "scripts/lib/env.js:19"
 },
 {
  "en": "{0} must be an integer",
  "zh": "{0} 必须为整数",
  "keep": [],
  "source": "scripts/lib/env.js:28"
 },
 {
  "en": "Could not locate project root (package.json not found)",
  "zh": "无法定位项目根目录，未找到 package.json",
  "keep": [],
  "source": "scripts/lib/projectFiles.cjs:23"
 },
 {
  "en": "Proxy URL is empty",
  "zh": "代理地址为空",
  "keep": [],
  "source": "scripts/lib/proxy.cjs:6"
 },
 {
  "en": "Invalid proxy URL",
  "zh": "代理地址无效",
  "keep": [],
  "source": "scripts/lib/proxy.cjs:18"
 },
 {
  "en": "Unsupported browser proxy protocol \"{0}\"; supported: http, https, socks4, socks5",
  "zh": "不支持浏览器代理协议「{0}」；支持的协议为 http、https、socks4、socks5",
  "keep": [
   0
  ],
  "source": "scripts/lib/proxy.cjs:14"
 },
 {
  "en": "Run npm run build before using open-session",
  "zh": "使用会话浏览命令前，请先执行 npm run build",
  "keep": [],
  "source": "scripts/main/browserSession.js:140"
 },
 {
  "en": "Saved browser identity is missing or belongs to the previous profile. Run the bot or manual-login once to refresh this session.",
  "zh": "保存的浏览器身份信息缺失或属于旧配置，请运行一次脚本或手动登录来刷新会话",
  "keep": [],
  "source": "scripts/main/browserSession.js:150"
 },
 {
  "en": "Required build assets are missing: {0}",
  "zh": "缺少必要的编译资源：{0}",
  "keep": [],
  "source": "scripts/main/copyAssets.js:9"
 },
 {
  "en": "--platform requires mobile, desktop, or both after it",
  "zh": "平台参数后面必须填写手机端、电脑端或两端",
  "keep": [],
  "source": "scripts/main/manualLogin.js:82"
 },
 {
  "en": "--platform must be mobile, desktop, or both",
  "zh": "平台参数只支持手机端、电脑端或两端",
  "keep": [],
  "source": "scripts/main/manualLogin.js:89"
 },
 {
  "en": "{0} expects true or false, got '{1}'.",
  "zh": "{0} 要求为真或假，实际收到「{1}」",
  "keep": [],
  "source": "scripts/main/manualLogin.js:122"
 },
 {
  "en": "config.globalTimeout must be a positive duration of at most 2147483647ms, got '{0}'",
  "zh": "全局超时必须为正时长，且不超过 2147483647 毫秒；实际收到「{0}」",
  "keep": [],
  "source": "scripts/main/manualLogin.js:137"
 },
 {
  "en": "Browser page was closed before login completed",
  "zh": "登录完成前，浏览器页面已关闭",
  "keep": [],
  "source": "scripts/main/manualLogin.js:177"
 },
 {
  "en": "Browser was closed before login completed",
  "zh": "登录完成前，浏览器已关闭",
  "keep": [],
  "source": "scripts/main/manualLogin.js:202"
 },
 {
  "en": "Run npm run build before using manual-login",
  "zh": "使用手动登录前，请先执行 npm run build",
  "keep": [],
  "source": "scripts/main/manualLogin.js:228"
 },
 {
  "en": "Account proxy is configured but invalid (needs proxy URL and port)",
  "zh": "账号配置了代理但内容无效，需要填写代理地址和端口",
  "keep": [],
  "source": "scripts/main/manualLogin.js:256"
 },
 {
  "en": "Manual login was interrupted",
  "zh": "手动登录已中断",
  "keep": [],
  "source": "scripts/main/manualLogin.js:353"
 },
 {
  "en": "Could not verify the signed-in Bing session; existing saved sessions were kept",
  "zh": "未能核实必应登录会话，已保留原有会话文件",
  "keep": [],
  "source": "scripts/main/manualLogin.js:345"
 },
 {
  "en": "Rewards page was detected, but the browser had no cookies to save",
  "zh": "检测到了积分页面，但浏览器中没有可保存的登录凭据",
  "keep": [],
  "source": "scripts/main/manualLogin.js:351"
 },
 {
  "en": "No ACCOUNT_N_* block found in .env for {0}",
  "zh": "环境配置中没有 {0} 对应的账号配置块",
  "keep": [
   0
  ],
  "source": "scripts/main/manualLogin.js:400"
 },
 {
  "en": "{0} | page={1}{2}",
  "zh": "登录状态：{0}；页面：{1}{2}",
  "keep": [
   1,
   2
  ],
  "source": "src/browser/auth/Login.ts:159"
 },
 {
  "en": "`accountIndex` must be a positive integer.",
  "zh": "账号序号必须是正整数",
  "keep": [],
  "source": "src/control-api/accounts.js:50"
 },
 {
  "en": "ACCOUNT_{0} is not configured.",
  "zh": "未配置第 {0} 个账号",
  "keep": [],
  "source": "src/control-api/accounts.js:57"
 },
 {
  "en": "`excludedAccountIndexes` must be an array of positive integers.",
  "zh": "排除账号序号必须是正整数数组",
  "keep": [],
  "source": "src/control-api/accounts.js:79"
 },
 {
  "en": "`excludedAccountIndexes` must contain only positive integers.",
  "zh": "排除账号序号只能包含正整数",
  "keep": [],
  "source": "src/control-api/accounts.js:84"
 },
 {
  "en": "Unknown account slot{0}: {1}.",
  "zh": "未知的账号序号{0}：{1}",
  "keep": [],
  "source": "src/control-api/accounts.js:92"
 },
 {
  "en": "A scheduled run cannot exclude every configured account.",
  "zh": "定时运行不能排除所有已配置账号",
  "keep": [],
  "source": "src/control-api/accounts.js:99"
 },
 {
  "en": "`accountIndex` and `excludedAccountIndexes` cannot be used together.",
  "zh": "指定单个账号和排除多个账号不能同时使用",
  "keep": [],
  "source": "src/control-api/accounts.js:127"
 },
 {
  "en": "Applied {0} schedule: \"{1}\" (TZ={2})",
  "zh": "已应用{0}定时计划：「{1}」；时区：{2}",
  "keep": [],
  "source": "src/control-api/apply-schedule.js:17"
 },
 {
  "en": "Scheduling disabled - cleared any previously installed crontab.",
  "zh": "定时计划已关闭，已清除之前安装的执行时间",
  "keep": [],
  "source": "src/control-api/apply-schedule.js:19"
 },
 {
  "en": "Config revision changed; reload before synchronizing.",
  "zh": "配置版本已变化，同步之前请重新加载",
  "keep": [],
  "source": "src/control-api/configEditor.js:102"
 },
 {
  "en": "config.json not found",
  "zh": "未找到 config.json",
  "keep": [],
  "source": "src/control-api/configEditor.js:116"
 },
 {
  "en": "Unknown request field{0}: {1}.",
  "zh": "未知的请求字段{0}：{1}",
  "keep": [],
  "source": "src/control-api/http.js:77"
 },
 {
  "en": "`line` must be one supported Docker wrapper log line.",
  "zh": "日志行必须是受支持的容器启动日志格式",
  "keep": [],
  "source": "src/control-api/routes/monitoring.js:22"
 },
 {
  "en": "No accounts configured for session regeneration.",
  "zh": "没有可用于重新生成会话的账号",
  "keep": [],
  "source": "src/control-api/routes/sessions.js:21"
 },
 {
  "en": "Selected account slots must have distinct email addresses.",
  "zh": "所选账号序号对应的邮箱不能重复",
  "keep": [],
  "source": "src/control-api/routes/sessions.js:26"
 },
 {
  "en": "{0} must be an integer between {1} and {2}.",
  "zh": "{0} 必须是 {1}—{2} 之间的整数",
  "keep": [],
  "source": "src/control-api/server.js:83"
 },
 {
  "en": "API_HOST and API_CORS_ORIGIN must not contain control characters.",
  "zh": "控制接口监听地址和跨域来源中不能包含控制字符",
  "keep": [],
  "source": "src/control-api/server.js:137"
 },
 {
  "en": "Request failed:",
  "zh": "请求失败：",
  "keep": [],
  "source": "src/control-api/server.js:195"
 },
 {
  "en": "Request failure details:",
  "zh": "请求失败详情：",
  "keep": [],
  "source": "src/control-api/server.js:196"
 },
 {
  "en": "Port {0} is already in use on {1}. Set API_PORT to a free port.",
  "zh": "{1} 上的端口 {0} 已被占用，请将控制接口端口改为空闲端口",
  "keep": [],
  "source": "src/control-api/server.js:208"
 },
 {
  "en": "Server error:",
  "zh": "服务器错误：",
  "keep": [],
  "source": "src/control-api/server.js:211"
 },
 {
  "en": "{0} control API listening on http://{1}:{2} (headless - no UI)",
  "zh": "{0}控制接口正在监听 http://{1}:{2}；这是无界面接口，不提供网页面板",
  "keep": [],
  "source": "src/control-api/server.js:216"
 },
 {
  "en": "Auth: {0} | CORS origin: {1}",
  "zh": "身份验证：{0}；允许的跨域来源：{1}",
  "keep": [],
  "source": "src/control-api/server.js:220"
 },
 {
  "en": "Live state: memory-only; completed summaries: config/run-history.json | config writes: {0} | schedule writes: {1} | session deletion: account-scoped",
  "zh": "实时状态仅保留在内存；已结束运行的摘要保存在配置目录的运行历史文件；配置写入：{0}；定时写入：{1}；会话删除仅针对指定账号",
  "keep": [],
  "source": "src/control-api/server.js:224"
 },
 {
  "en": "No API_TOKEN set; configure a token to authenticate dashboard connections.",
  "zh": "控制接口未设置访问令牌，请配置令牌以验证面板连接",
  "keep": [],
  "source": "src/control-api/server.js:227"
 },
 {
  "en": "{0} received - shutting down.",
  "zh": "收到 {0} 信号，正在关闭服务",
  "keep": [],
  "source": "src/control-api/server.js:246"
 },
 {
  "en": "Stopping active bot run{0}…",
  "zh": "正在停止运行中的积分任务{0}……",
  "keep": [],
  "source": "src/control-api/server.js:250"
 },
 {
  "en": "API_PORT must be an integer between 1 and 65535.",
  "zh": "控制接口端口必须是 1—65535 之间的整数",
  "keep": [],
  "source": "src/control-api/trigger.js:16"
 },
 {
  "en": "STUCK_PROCESS_TIMEOUT_HOURS must be a positive number.",
  "zh": "进程卡住超时必须是正数",
  "keep": [],
  "source": "src/control-api/trigger.js:24"
 },
 {
  "en": "API authentication failed. Ensure API_TOKEN matches the control API.",
  "zh": "控制接口身份验证失败，请确认两端令牌一致",
  "keep": [],
  "source": "src/control-api/trigger.js:80"
 },
 {
  "en": "Waiting for API server (attempt {0}/{1})…",
  "zh": "等待控制接口启动，第 {0}/{1} 次尝试……",
  "keep": [],
  "source": "src/control-api/trigger.js:87"
 },
 {
  "en": "API server did not respond after {0} attempts. Is API_MODE=true?",
  "zh": "尝试 {0} 次后控制接口仍无响应，请检查是否已启用接口模式",
  "keep": [],
  "source": "src/control-api/trigger.js:93"
 },
 {
  "en": "A run is already in progress. Skipping as configured.",
  "zh": "已有任务正在运行，按照配置跳过本次",
  "keep": [],
  "source": "src/control-api/trigger.js:101"
 },
 {
  "en": "Deferred invocation expired while waiting for the active run.",
  "zh": "等待当前运行结束期间，延后执行请求已经过期",
  "keep": [],
  "source": "src/control-api/trigger.js:105"
 },
 {
  "en": "A run is already in progress. Deferring until it finishes.",
  "zh": "已有任务正在运行，本次延后到其结束后再执行",
  "keep": [],
  "source": "src/control-api/trigger.js:108"
 },
 {
  "en": "POST /start failed (HTTP {0}):",
  "zh": "启动请求失败；响应状态：{0}：",
  "keep": [],
  "source": "src/control-api/trigger.js:115"
 },
 {
  "en": "Run started. Waiting for completion…",
  "zh": "运行已开始，等待完成……",
  "keep": [],
  "source": "src/control-api/trigger.js:119"
 },
 {
  "en": "API did not return a runId. Cannot monitor or stop this run safely.",
  "zh": "控制接口没有返回运行编号，无法安全监视或停止本次任务",
  "keep": [],
  "source": "src/control-api/trigger.js:122"
 },
 {
  "en": "Run completed successfully.",
  "zh": "本轮运行正常结束",
  "keep": [],
  "source": "src/control-api/trigger.js:134"
 },
 {
  "en": "Run completed with incomplete activities.",
  "zh": "本轮已结束，但仍有活动未完成",
  "keep": [],
  "source": "src/control-api/trigger.js:144"
 },
 {
  "en": "Run failed:",
  "zh": "运行失败：",
  "keep": [],
  "source": "src/control-api/trigger.js:147"
 },
 {
  "en": "Run is no longer active and its result is unavailable.",
  "zh": "此运行已不再活跃，且无法取得结果",
  "keep": [],
  "source": "src/control-api/trigger.js:163"
 },
 {
  "en": "Timed out after {0}h waiting for run to finish.",
  "zh": "等待运行结束超过 {0} 小时，已超时",
  "keep": [],
  "source": "src/control-api/trigger.js:171"
 },
 {
  "en": "Requested a forced stop for the timed-out run.",
  "zh": "已请求强制停止超时的运行",
  "keep": [],
  "source": "src/control-api/trigger.js:176"
 },
 {
  "en": "Stop was not accepted (HTTP {0}); another run will not be stopped.",
  "zh": "停止请求未被接受；响应状态：{0}；不会因此停止其他运行",
  "keep": [],
  "source": "src/control-api/trigger.js:176"
 },
 {
  "en": "Could not request a forced stop: {0}",
  "zh": "无法请求强制停止：{0}",
  "keep": [],
  "source": "src/control-api/trigger.js:181"
 },
 {
  "en": "Worker {0} exit | Code: {1} | Signal: {2} | Active workers: {3}",
  "zh": "执行进程 {0} 已退出；退出码：{1}；信号：{2}；剩余活跃进程：{3}",
  "keep": [],
  "source": "src/core/RunCoordinator.ts:116"
 },
 {
  "en": "Bonus point claim",
  "zh": "额外奖励领取",
  "keep": [],
  "source": "src/logging/LogMessage.ts:6"
 },
 {
  "en": "Streak protection",
  "zh": "连续签到保护",
  "keep": [],
  "source": "src/logging/LogMessage.ts:7"
 },
 {
  "en": "Punchcard reward claim",
  "zh": "任务卡奖励领取",
  "keep": [],
  "source": "src/logging/LogMessage.ts:8"
 },
 {
  "en": "Search perk",
  "zh": "搜索加成",
  "keep": [],
  "source": "src/logging/LogMessage.ts:9"
 },
 {
  "en": "Explore on Bing",
  "zh": "指定主题搜索",
  "keep": [],
  "source": "src/logging/LogMessage.ts:10"
 },
 {
  "en": "App data",
  "zh": "应用资料",
  "keep": [],
  "source": "src/logging/LogMessage.ts:11"
 },
 {
  "en": "App reward",
  "zh": "应用奖励",
  "keep": [],
  "source": "src/logging/LogMessage.ts:12"
 },
 {
  "en": "Read to Earn",
  "zh": "阅读赚积分",
  "keep": [],
  "source": "src/logging/LogMessage.ts:13"
 },
 {
  "en": "Daily Check-In",
  "zh": "每日签到",
  "keep": [],
  "source": "src/logging/LogMessage.ts:14"
 },
 {
  "en": "Website reward",
  "zh": "访问网页奖励",
  "keep": [],
  "source": "src/logging/LogMessage.ts:15"
 },
 {
  "en": "Punchcard data",
  "zh": "任务卡资料",
  "keep": [],
  "source": "src/logging/LogMessage.ts:16"
 },
 {
  "en": "Experimental API search",
  "zh": "试验性接口搜索",
  "keep": [],
  "source": "src/logging/LogMessage.ts:17"
 },
 {
  "en": "Visual Search",
  "zh": "视觉搜索",
  "keep": [],
  "source": "src/logging/LogMessage.ts:18"
 },
 {
  "en": "Edge browsing",
  "zh": "后台浏览奖励",
  "keep": [],
  "source": "src/logging/LogMessage.ts:19"
 },
 {
  "en": "Could not read the live Rewards earn page",
  "zh": "无法读取当前积分任务页",
  "keep": [],
  "source": "src/logging/LogMessage.ts:23"
 },
 {
  "en": "No streak protection days remain",
  "zh": "连续签到保护天数已用完",
  "keep": [],
  "source": "src/logging/LogMessage.ts:24"
 },
 {
  "en": "Fresh Rewards data did not confirm that protection was enabled",
  "zh": "刷新积分资料后，仍未确认连续签到保护已启用",
  "keep": [],
  "source": "src/logging/LogMessage.ts:25"
 },
 {
  "en": "Cookie consent could not be dismissed; page controls remain covered",
  "zh": "无法关闭网站凭据同意提示，页面控件仍被遮挡",
  "keep": [],
  "source": "src/logging/LogMessage.ts:26"
 },
 {
  "en": "Not offered in the latest account data; the service did not provide an eligibility reason",
  "zh": "最新账号资料中没有此活动，服务端未说明不符合资格的具体原因",
  "keep": [],
  "source": "src/logging/LogMessage.ts:27"
 },
 {
  "en": "Activity is not available for this account",
  "zh": "此账号当前无法参加该活动",
  "keep": [],
  "source": "src/logging/LogMessage.ts:28"
 },
 {
  "en": "No search multiplier is offered to this account",
  "zh": "此账号没有提供搜索加成",
  "keep": [],
  "source": "src/logging/LogMessage.ts:29"
 },
 {
  "en": "Offer is locked or requires a prerequisite",
  "zh": "活动已锁定，或需要先完成前置条件",
  "keep": [],
  "source": "src/logging/LogMessage.ts:30"
 },
 {
  "en": "Offer is disabled by the service",
  "zh": "活动已被服务端停用",
  "keep": [],
  "source": "src/logging/LogMessage.ts:31"
 },
 {
  "en": "Offer is not available yet",
  "zh": "活动尚未开放",
  "keep": [],
  "source": "src/logging/LogMessage.ts:32"
 },
 {
  "en": "Could not read current activation data",
  "zh": "无法读取当前激活资料",
  "keep": [],
  "source": "src/logging/LogMessage.ts:33"
 },
 {
  "en": "Offer is present, but required activation metadata is missing",
  "zh": "活动存在，但缺少必需的激活资料",
  "keep": [],
  "source": "src/logging/LogMessage.ts:34"
 },
 {
  "en": "Offer activation could not be started because its rendered control was not found",
  "zh": "没有找到页面激活控件，无法开始激活活动",
  "keep": [],
  "source": "src/logging/LogMessage.ts:35"
 },
 {
  "en": "Browser page is unavailable for activation",
  "zh": "激活所需的浏览器页面不可用",
  "keep": [],
  "source": "src/logging/LogMessage.ts:36"
 },
 {
  "en": "Activation was attempted, but its result could not be confirmed",
  "zh": "已经尝试激活，但结果尚未确认",
  "keep": [],
  "source": "src/logging/LogMessage.ts:37"
 },
 {
  "en": "No suitable search queries are available for this activity",
  "zh": "此活动没有合适的搜索词",
  "keep": [],
  "source": "src/logging/LogMessage.ts:38"
 },
 {
  "en": "Activation was attempted, but its updated state could not be read",
  "zh": "已尝试激活，但无法读取更新后的状态",
  "keep": [],
  "source": "src/logging/LogMessage.ts:39"
 },
 {
  "en": "The service rejected the activation request",
  "zh": "服务端拒绝了激活请求",
  "keep": [],
  "source": "src/logging/LogMessage.ts:40"
 },
 {
  "en": "Activation request did not produce a verifiable result",
  "zh": "激活请求没有得到可核实的结果",
  "keep": [],
  "source": "src/logging/LogMessage.ts:41"
 },
 {
  "en": "Activation confirmed",
  "zh": "已确认激活成功",
  "keep": [],
  "source": "src/logging/LogMessage.ts:42"
 },
 {
  "en": "Offer is present, but an actionable state could not be established",
  "zh": "活动存在，但无法确定当前是否可执行",
  "keep": [],
  "source": "src/logging/LogMessage.ts:43"
 },
 {
  "en": "Offer is present, but its required reporting hash is missing",
  "zh": "活动存在，但缺少上报所需的校验值",
  "keep": [],
  "source": "src/logging/LogMessage.ts:44"
 },
 {
  "en": "Activation acknowledged by the service",
  "zh": "服务端已接受激活请求",
  "keep": [],
  "source": "src/logging/LogMessage.ts:45"
 },
 {
  "en": "Already activated",
  "zh": "之前已激活",
  "keep": [],
  "source": "src/logging/LogMessage.ts:46"
 },
 {
  "en": "Already completed",
  "zh": "之前已完成",
  "keep": [],
  "source": "src/logging/LogMessage.ts:47"
 },
 {
  "en": "Activity only applies to desktop",
  "zh": "此活动只适用于电脑端",
  "keep": [],
  "source": "src/logging/LogMessage.ts:48"
 },
 {
  "en": "{0} | could not be enabled or verified | {1}",
  "zh": "{0}；未能启用或确认状态；{1}",
  "keep": [],
  "source": "src/logging/LogMessage.ts:63"
 },
 {
  "en": "{0} | {1} | points earned: {2}{3}",
  "zh": "{0}；{1}；获得积分：{2}{3}",
  "keep": [],
  "source": "src/logging/LogMessage.ts:92"
 },
 {
  "en": "Read to Earn {0} | reason={1} | reportsAccepted={2} | progress={3}->{4} | pointsGained={5}",
  "zh": "阅读赚积分：{0}；原因：{1}；接受的上报：{2} 次；进度：{3}→{4}；获得积分：{5}",
  "keep": [],
  "source": "src/rewards/api/actions/ApiReadToEarn.ts:196"
 },
 {
  "en": "{0} Bing searches | pointsGained={1} | currentBalance={2} | previousBalance={3} | searches={4}",
  "zh": "{0}必应搜索；获得积分：{1}；当前余额：{2}；之前余额：{3}；搜索次数：{4}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:189"
 },
 {
  "en": "Bonus farming {0} ({1}) | pointsGained={2} | currentBalance={3} | {4} | searches={5}",
  "zh": "额外搜索：{0}（{1}）；获得积分：{2}；当前余额：{3}；{4}；搜索次数：{5}",
  "keep": [],
  "source": "src/rewards/api/search/ApiSearch.ts:289"
 },
 {
  "en": "Daily Check-In {0} | type=103 | offerId={1} | reason={2} | previousBalance={3} | currentBalance={4} | balanceDelta={5} | pointsGained={6}",
  "zh": "每日签到：{0}；请求类型：103；活动标识：{1}；原因：{2}；之前余额：{3}；当前余额：{4}；余额变化：{5}；获得积分：{6}",
  "keep": [
   1
  ],
  "source": "src/rewards/app/actions/DailyCheckIn.ts:111"
 },
 {
  "en": "Read to Earn {0} | reason={1} | browserReads={2} | fallback={3} | pointsGained={4}",
  "zh": "阅读赚积分：{0}；原因：{1}；浏览器阅读：{2} 次；使用备用接口：{3}；获得积分：{4}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:379"
 },
 {
  "en": "Read to Earn {0} | reason={1} | browserReads={2} | fallback={3} | progress={4}->{5} | pointsGained={6}",
  "zh": "阅读赚积分：{0}；原因：{1}；浏览器阅读：{2} 次；使用备用接口：{3}；进度：{4}→{5}；获得积分：{6}",
  "keep": [],
  "source": "src/rewards/browser/actions/BrowserReadToEarn.ts:379"
 },
 {
  "en": "Browser card failed | offerId={0} | {1}",
  "zh": "浏览器任务卡执行失败；活动标识：{0}；{1}",
  "keep": [
   0
  ],
  "source": "src/rewards/browser/actions/BrowserUrlReward.ts:215"
 },
 {
  "en": "Completed flyout and earn task passes",
  "zh": "侧栏和积分任务页的处理流程均已结束",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:118"
 },
 {
  "en": "Completed /earn fallback after flyout pass failed",
  "zh": "侧栏执行失败后，任务页备用处理已结束",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:118"
 },
 {
  "en": "Finished flyout; /earn pass remains unconfirmed",
  "zh": "侧栏处理已结束，积分任务页仍有项目未确认完成",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:118"
 },
 {
  "en": "Browser task passes remain unconfirmed",
  "zh": "浏览器任务处理仍未确认完成",
  "keep": [],
  "source": "src/rewards/browser/BrowserTaskRunner.ts:118"
 },
 {
  "en": "{0} Bing searches | pointsGained={1} | currentBalance={2} | previousBalance={3} | searches={4} | {5}",
  "zh": "{0}必应搜索；获得积分：{1}；当前余额：{2}；之前余额：{3}；搜索次数：{4}；{5}",
  "keep": [],
  "source": "src/rewards/browser/search/BrowserSearch.ts:60"
 },
 {
  "en": "{0} | status={1} | acknowledged={2} | claimableBefore={3} | claimableAfter={4} | previousBalance={5} | currentBalance={6} | balanceDelta={7} | verification={8} | pointsGained={9}",
  "zh": "{0}；状态：{1}；已接受：{2}；领取前可领积分：{3}；领取后可领积分：{4}；之前余额：{5}；当前余额：{6}；余额变化：{7}；核实依据：{8}；获得积分：{9}",
  "keep": [],
  "source": "src/rewards/shared/activities/ClaimBonusPoints.ts:141"
 },
 {
  "en": "Rewards user data unavailable | {0}",
  "zh": "积分账号资料不可用；{0}",
  "keep": [],
  "source": "src/rewards/shared/data/AccountData.ts:65"
 },
 {
  "en": "Submitted Edge browsing report | report={0}/{1} | status={2} | duplicate={3} | cookies={4} | reportsRemaining={5} | scheduledMinutesCovered={6}/{7} | accepted={8} | duplicates={9} | failed={10} | elapsedMinutes={11} | estimatedRemainingMinutes={12}",
  "zh": "已提交后台浏览上报；第 {0}/{1} 次；状态：{2}；重复提交：{3}；凭据数：{4}；剩余上报：{5}；已覆盖时长：{6}/{7} 分钟；已接受：{8}；重复：{9}；失败：{10}；已耗时：{11} 分钟；预计剩余：{12} 分钟",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:183"
 },
 {
  "en": "Finished background Edge browsing activity | reports={0} | reportsCompleted={1}/{2} | reportsRemaining={3} | scheduledMinutesCovered={4}/{5} | serverComplete={6} | pointsGained={7} | accepted={8} | duplicates={9} | failed={10} | elapsedMinutes={11} | estimatedRemainingMinutes={12}",
  "zh": "后台浏览奖励已结束；上报数：{0}；完成上报：{1}/{2}；剩余上报：{3}；已覆盖时长：{4}/{5} 分钟；服务端确认完成：{6}；获得积分：{7}；已接受：{8}；重复：{9}；失败：{10}；已耗时：{11} 分钟；预计剩余：{12} 分钟",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:225"
 },
 {
  "en": "Edge browsing progress | reportsCompleted={0}/{1} | reportsRemaining={2} | scheduledMinutesCovered={3}/{4}{5} | accepted={6} | duplicates={7} | failed={8} | elapsedMinutes={9} | estimatedRemainingMinutes={10}",
  "zh": "后台浏览奖励进度；完成上报：{0}/{1}；剩余上报：{2}；已覆盖时长：{3}/{4} 分钟{5}；已接受：{6}；重复：{7}；失败：{8}；已耗时：{9} 分钟；预计剩余：{10} 分钟",
  "keep": [],
  "source": "src/rewards/shared/edge/EdgeBrowsing.ts:681"
 },
 {
  "en": "Search summary | mobile={0} | desktop={1} | bonus={2} | apiReport={3} | total={4}",
  "zh": "搜索结果汇总；手机端：{0}；电脑端：{1}；额外搜索：{2}；接口补上报：{3}；总计：{4}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:159"
 },
 {
  "en": "Search summary | mobile={0} | desktop={1} | bonus={2} | total={3}",
  "zh": "搜索结果汇总；手机端：{0}；电脑端：{1}；额外搜索：{2}；总计：{3}",
  "keep": [],
  "source": "src/rewards/shared/search/SearchManager.ts:159"
 },
 {
  "en": "Session creation finished | saved={0} | failed={1}",
  "zh": "登录会话创建流程已结束；已保存：{0}；失败：{1}",
  "keep": [],
  "source": "src/session/SessionGenerator.ts:76"
 },
 {
  "en": "Signing in {0} ({1})",
  "zh": "正在登录 {0}（{1}）",
  "keep": [
   0
  ],
  "source": "src/session/SessionGenerator.ts:88"
 },
 {
  "en": "Saved {0} session for {1}",
  "zh": "已为 {1} 保存{0}会话",
  "keep": [
   1
  ],
  "source": "src/session/SessionGenerator.ts:88"
 },
 {
  "en": "{0} session {1} for {2}{3}",
  "zh": "{2} 的{0}会话状态：{1}{3}",
  "keep": [
   2
  ],
  "source": "src/session/SessionGenerator.ts:88"
 },
 {
  "en": "config.json not found. Place it in the project root before running this command.",
  "zh": "未找到 config.json，请将其放在项目根目录后再运行此命令",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:55"
 },
 {
  "en": "Failed to read config.json at {0}: {1}",
  "zh": "读取配置文件 {0} 失败：{1}",
  "keep": [
   0
  ],
  "source": "scripts/lib/commandUtils.js:63"
 },
 {
  "en": "Invalid config.json: sessionPath must be a non-empty directory path.",
  "zh": "配置无效：会话保存目录必须是非空路径",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:74"
 },
 {
  "en": "Config file: {0}",
  "zh": "配置文件：{0}",
  "keep": [
   0
  ],
  "source": "scripts/lib/commandUtils.js:75"
 },
 {
  "en": "Cleanup failed:",
  "zh": "清理失败：",
  "keep": [],
  "source": "scripts/lib/commandUtils.js:100"
 },
 {
  "en": "No ACCOUNT_N_* block found in .env for {0} - opening without a proxy",
  "zh": "环境配置中没有 {0} 对应的账号配置，将不使用代理打开浏览器",
  "keep": [
   0
  ],
  "source": "scripts/main/browserSession.js:77"
 },
 {
  "en": "Media loading disabled (image/media requests blocked; HTTP cache disabled by routing)",
  "zh": "已停用图片和媒体加载，请求拦截同时停用了网页缓存",
  "keep": [],
  "source": "scripts/main/browserSession.js:102"
 },
 {
  "en": "No sessions.db found (looked for {0})",
  "zh": "未找到会话数据库，已检查：{0}",
  "keep": [],
  "source": "scripts/main/browserSession.js:109"
 },
 {
  "en": "Run the bot at least once so a session is stored for this account.",
  "zh": "请至少运行一次脚本，为此账号保存登录会话",
  "keep": [],
  "source": "scripts/main/browserSession.js:110"
 },
 {
  "en": "Could not read {0} session: {1}",
  "zh": "无法读取{0}会话：{1}",
  "keep": [],
  "source": "scripts/main/browserSession.js:127"
 },
 {
  "en": "No stored session for {0} in {1}",
  "zh": "在 {1} 中没有找到 {0} 的已保存会话",
  "keep": [
   0
  ],
  "source": "scripts/main/browserSession.js:133"
 },
 {
  "en": "Run the bot first, or double-check the email.",
  "zh": "请先运行脚本，或检查邮箱是否正确",
  "keep": [],
  "source": "scripts/main/browserSession.js:134"
 },
 {
  "en": "Account proxy is configured but invalid (needs proxy url + port)",
  "zh": "账号代理配置无效，需要填写代理地址和端口",
  "keep": [],
  "source": "scripts/main/browserSession.js:159"
 },
 {
  "en": "Session: {0} ({1})",
  "zh": "会话：{0}（{1}）",
  "keep": [
   0
  ],
  "source": "scripts/main/browserSession.js:163"
 },
 {
  "en": "  Engine: bundled patched Chromium",
  "zh": "浏览器引擎：随附的修订版浏览器",
  "keep": [],
  "source": "scripts/main/browserSession.js:164"
 },
 {
  "en": "  Cookies: {0}",
  "zh": "登录凭据条数：{0}",
  "keep": [],
  "source": "scripts/main/browserSession.js:165"
 },
 {
  "en": "  Saved User-Agent: {0}",
  "zh": "已保存的浏览器标识：{0}",
  "keep": [
   0
  ],
  "source": "scripts/main/browserSession.js:166"
 },
 {
  "en": "  Proxy: {0}",
  "zh": "代理：{0}",
  "keep": [],
  "source": "scripts/main/browserSession.js:167"
 },
 {
  "en": "  Updated: {0}",
  "zh": "更新时间：{0}",
  "keep": [],
  "source": "scripts/main/browserSession.js:168"
 },
 {
  "en": "Launching browser...",
  "zh": "正在启动浏览器……",
  "keep": [],
  "source": "scripts/main/browserSession.js:169"
 },
 {
  "en": "Browser identity | engine={0} | platform={1}",
  "zh": "浏览器身份；引擎：{0}；平台：{1}",
  "keep": [
   1
  ],
  "source": "scripts/main/browserSession.js:204"
 },
 {
  "en": "Browser opened with session loaded",
  "zh": "浏览器已打开，并载入保存的会话",
  "keep": [],
  "source": "scripts/main/browserSession.js:235"
 },
 {
  "en": "Navigated to: {0}",
  "zh": "已跳转至：{0}",
  "keep": [
   0
  ],
  "source": "scripts/main/browserSession.js:236"
 },
 {
  "en": "Press Ctrl+C to close.",
  "zh": "按中断快捷键关闭浏览器",
  "keep": [],
  "source": "scripts/main/browserSession.js:237"
 },
 {
  "en": "browserSession failed:",
  "zh": "使用已保存会话打开浏览器失败：",
  "keep": [],
  "source": "scripts/main/browserSession.js:245"
 },
 {
  "en": "clear-diagnostics does not accept arguments; use --help for usage.",
  "zh": "清理诊断命令不接受额外参数，请查看帮助了解用法",
  "keep": [],
  "source": "scripts/main/clearDiagnostics.js:10"
 },
 {
  "en": "Diagnostics cleared",
  "zh": "诊断文件已清理",
  "keep": [],
  "source": "scripts/main/clearDiagnostics.js:15"
 },
 {
  "en": "Could not clear diagnostics: {0}",
  "zh": "无法清理诊断文件：{0}",
  "keep": [],
  "source": "scripts/main/clearDiagnostics.js:17"
 },
 {
  "en": "Sessions database is empty ({0}).",
  "zh": "会话数据库为空：{0}",
  "keep": [],
  "source": "scripts/main/clearSessions.js:52"
 },
 {
  "en": "Stored sessions: {0} account(s), {1} session row(s) ({2})",
  "zh": "已保存会话：{0} 个账号、{1} 条记录；位置：{2}",
  "keep": [
   0
  ],
  "source": "scripts/main/clearSessions.js:62"
 },
 {
  "en": "No sessions database found (looked for {0}).",
  "zh": "没有找到会话数据库，已检查：{0}",
  "keep": [],
  "source": "scripts/main/clearSessions.js:102"
 },
 {
  "en": "Sessions database is empty ({0}) - nothing to clear.",
  "zh": "会话数据库为空，无需清理：{0}",
  "keep": [],
  "source": "scripts/main/clearSessions.js:115"
 },
 {
  "en": "No stored sessions found for {0}.",
  "zh": "没有找到 {0} 的已保存会话",
  "keep": [
   0
  ],
  "source": "scripts/main/clearSessions.js:120"
 },
 {
  "en": "Removed {0} session row(s) for {1}.",
  "zh": "已为 {1} 移除 {0} 条会话记录",
  "keep": [
   1
  ],
  "source": "scripts/main/clearSessions.js:125"
 },
 {
  "en": "Removed all {0} session row(s) from {1}.",
  "zh": "已从 {1} 移除全部 {0} 条会话记录",
  "keep": [],
  "source": "scripts/main/clearSessions.js:130"
 },
 {
  "en": "kill-chrome-win does not accept arguments; use --help for usage.",
  "zh": "关闭浏览器命令不接受额外参数，请查看帮助",
  "keep": [],
  "source": "scripts/main/killBrowser.js:11"
 },
 {
  "en": "kill-chrome-win is available only on Windows.",
  "zh": "此关闭浏览器命令仅支持微软桌面系统",
  "keep": [],
  "source": "scripts/main/killBrowser.js:14"
 },
 {
  "en": "Could not close bundled Chromium: {0}",
  "zh": "无法关闭随附浏览器：{0}",
  "keep": [],
  "source": "scripts/main/killBrowser.js:36"
 },
 {
  "en": "Rewards page detected; verifying it remains open for 5 seconds...",
  "zh": "检测到积分页面，正在确认页面连续保持打开五秒……",
  "keep": [],
  "source": "scripts/main/manualLogin.js:183"
 },
 {
  "en": "Rewards page stable for {0}/5 seconds",
  "zh": "积分页面已稳定保持 {0}/5 秒",
  "keep": [],
  "source": "scripts/main/manualLogin.js:190"
 },
 {
  "en": "Rewards-page timer reset because navigation continued",
  "zh": "页面仍在跳转，重新计算积分页稳定时间",
  "keep": [],
  "source": "scripts/main/manualLogin.js:196"
 },
 {
  "en": "ACCOUNT_N_SAVE_FINGERPRINT_{0} is disabled. Enable it so automated runs reuse this manual-login fingerprint.",
  "zh": "此平台的保存指纹选项未启用：{0}；请启用它，使自动运行复用本次手动登录的指纹",
  "keep": [],
  "source": "scripts/main/manualLogin.js:262"
 },
 {
  "en": "Opening {0} manual login for {1}",
  "zh": "正在为 {1} 打开{0}手动登录",
  "keep": [
   1
  ],
  "source": "scripts/main/manualLogin.js:266"
 },
 {
  "en": "Locale: {0} | Proxy: {1} | Existing cookies: {2}",
  "zh": "语言地区：{0}；代理：{1}；已有登录凭据：{2}",
  "keep": [],
  "source": "scripts/main/manualLogin.js:269"
 },
 {
  "en": "{0} received; closing without saving an incomplete login",
  "zh": "收到 {0} 信号；本次登录未完成，关闭时不保存",
  "keep": [],
  "source": "scripts/main/manualLogin.js:294"
 },
 {
  "en": "Initial Rewards navigation did not finish cleanly: {0}",
  "zh": "首次打开积分页面没有正常完成：{0}",
  "keep": [],
  "source": "scripts/main/manualLogin.js:335"
 },
 {
  "en": "Complete the Microsoft sign-in manually in the browser window",
  "zh": "请在浏览器窗口中手动完成微软登录",
  "keep": [],
  "source": "scripts/main/manualLogin.js:338"
 },
 {
  "en": "Verifying the signed-in Bing session before saving...",
  "zh": "保存会话前，正在核实必应登录状态……",
  "keep": [],
  "source": "scripts/main/manualLogin.js:342"
 },
 {
  "en": "Saved {0} session for {1} | cookies={2} | origins={3}",
  "zh": "已为 {1} 保存{0}会话；凭据：{2} 条；站点：{3} 个",
  "keep": [
   1
  ],
  "source": "scripts/main/manualLogin.js:358"
 },
 {
  "en": "Configuration loaded from config.json | CONFIG_* overrides={0}",
  "zh": "已读取配置文件；环境变量覆盖项数：{0}",
  "keep": [],
  "source": "scripts/main/manualLogin.js:405"
 },
 {
  "en": "config.headless=true is overridden because manual login requires a visible browser",
  "zh": "手动登录需要可见浏览器，本次忽略无界面模式设置",
  "keep": [],
  "source": "scripts/main/manualLogin.js:407"
 },
 {
  "en": "experimental.blockMedia=true is deferred so authentication images and media remain available",
  "zh": "为保证验证图片和媒体可见，媒体拦截设置延后生效",
  "keep": [],
  "source": "scripts/main/manualLogin.js:410"
 },
 {
  "en": "Manual login completed for {0}",
  "zh": "{0} 手动登录已完成",
  "keep": [
   0
  ],
  "source": "scripts/main/manualLogin.js:417"
 },
 {
  "en": "Manual login cancelled; existing saved sessions were kept",
  "zh": "手动登录已取消，已保留原有会话",
  "keep": [],
  "source": "scripts/main/manualLogin.js:424"
 },
 {
  "en": "manualLogin failed: {0}",
  "zh": "手动登录失败：{0}",
  "keep": [],
  "source": "scripts/main/manualLogin.js:426"
 }
];
export const extraLogCatalog = [
 {
  "en": "Found empty lockfile → removing.",
  "zh": "发现空的运行锁文件，正在移除",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Found corrupted lockfile content ('{0}') → removing.",
  "zh": "运行锁文件内容损坏：「{0}」，正在移除",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lockfile PID {0} is dead → removing stale lock.",
  "zh": "运行锁对应的进程 {0} 已结束，正在移除过期锁",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lockfile PID {0} is not run_daily.sh → removing stale lock.",
  "zh": "运行锁中的进程 {0} 不属于当前任务，正在移除过期锁",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: STUCK_PROCESS_TIMEOUT_HOURS must be a positive integer.",
  "zh": "错误：进程卡住超时必须是正整数",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lock acquired successfully (PID: {0})",
  "zh": "已取得运行锁；进程号：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lock file exists with PID: '{0}'",
  "zh": "已有运行锁；进程号：「{0}」",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Removing invalid lockfile → retrying...",
  "zh": "正在移除无效运行锁，然后重试……",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Removing stale lock (dead PID: {0})",
  "zh": "正在移除过期运行锁，对应进程 {0} 已结束",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Removing stale lock owned by unrelated PID {0}",
  "zh": "正在移除属于其他进程 {0} 的过期锁",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Killing stuck process {0} ({1}s > {2}h)",
  "zh": "正在结束卡住的进程 {0}；已运行 {1} 秒，超过 {2} 小时限制",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lock held by PID {0}, attempt {1}/{2}",
  "zh": "运行锁由进程 {0} 占用；第 {1}/{2} 次尝试",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Could not acquire lock after {0} attempts; exiting.",
  "zh": "尝试 {0} 次后仍无法取得运行锁，本次退出",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Lock released (PID: {0})",
  "zh": "运行锁已释放；进程号：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Current process PID: {0}",
  "zh": "当前进程号：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: MIN_SLEEP_MINUTES and MAX_SLEEP_MINUTES must be non-negative integers.",
  "zh": "错误：随机等待时间的最小值和最大值必须是非负整数",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: MAX_SLEEP_MINUTES must be greater than or equal to MIN_SLEEP_MINUTES.",
  "zh": "错误：随机等待最大值不能小于最小值",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Sleeping for {0} minutes ({1} seconds)",
  "zh": "执行前随机等待 {0} 分钟，共 {1} 秒",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Skipping random sleep",
  "zh": "本次跳过随机等待",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Script completed successfully.",
  "zh": "脚本正常退出；具体任务是否完成请查看任务结果",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: Script failed (exit code {0}).",
  "zh": "错误：脚本执行失败；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Script finished",
  "zh": "本次脚本运行已结束",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "WARNING: No ACCOUNT_N_EMAIL found. Configure accounts in .env before starting a bot run.",
  "zh": "警告：没有找到账号邮箱配置，请配置账号后再开始运行",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Found {0} account(s) in environment",
  "zh": "从环境变量中读取到 {0} 个账号",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Config ready.",
  "zh": "配置已就绪",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: Set CRON_SCHEDULE (e.g. \"0 7 * * *\"), or API_MODE=true for the Control API.",
  "zh": "错误：请设置定时计划，或启用控制接口模式",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Stopping scheduler and active processes...",
  "zh": "正在停止定时器和运行中的进程……",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Scheduler started (TZ={0})",
  "zh": "定时器已启动；时区：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Starting Control API on {0}:{1}",
  "zh": "正在启动控制接口；监听：{0}:{1}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] Starting initial run...",
  "zh": "正在启动首次运行……",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "[entrypoint] A service exited unexpectedly (status={0}).",
  "zh": "有服务意外退出；状态：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: Unknown timezone: {0}",
  "zh": "错误：未知时区 {0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "ERROR: {0} is a directory. Replace it with a config.json file.",
  "zh": "错误：{0} 是目录，请替换为配置文件",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Retains its browser for {0}; closes when browser work finishes",
  "zh": "为执行{0}保留浏览器，浏览器任务完成后关闭",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Signs in first. {0}",
  "zh": "先登录电脑端。{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Opens alongside desktop searches when needed. {0}",
  "zh": "需要时在电脑搜索期间打开手机端。{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Opens after desktop work and browser cleanup when needed. {0}",
  "zh": "需要时在电脑任务和浏览器清理结束后打开手机端。{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Signs in after desktop when needed, before activities start. {0}",
  "zh": "需要时在电脑登录后、任务开始前登录手机端。{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run started (pid {0}).",
  "zh": "任务已启动；进程号：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run partial (code {0}).",
  "zh": "运行结束，部分任务未完成；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run completed (code {0}).",
  "zh": "本轮运行已完成；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run failed (code {0}).",
  "zh": "运行失败；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run interrupted (code {0}).",
  "zh": "运行已中断；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Run cancelled (code {0}).",
  "zh": "运行已取消；退出码：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Flyout response is missing Rewards account data",
  "zh": "侧栏响应缺少积分账号资料",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Flyout response is missing Rewards task data",
  "zh": "侧栏响应缺少积分任务资料",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Could not read the live Rewards earn page",
  "zh": "无法读取当前积分任务页",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Completed ClaimBonusPoints",
  "zh": "额外奖励领取已完成",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Nothing claimed",
  "zh": "没有领取到奖励",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": ", reloading Bing before retry",
  "zh": "，正在刷新必应后重试",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "; reloading Bing before retry",
  "zh": "，正在刷新必应后重试",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Completed all accounts",
  "zh": "所有账号的运行流程已结束",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "progress confirmed",
  "zh": "已确认进度增长",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "skipped",
  "zh": "已跳过",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "failed",
  "zh": "失败",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "points earned: {0}",
  "zh": "获得积分：{0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "{0}: \"{1}\"",
  "zh": "{0}：「{1}」",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "No exit status returned",
  "zh": "没有返回退出状态",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Timeout {0}ms exceeded.",
  "zh": "等待超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Timeout {0}ms exceeded",
  "zh": "等待超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Target page, context or browser has been closed",
  "zh": "目标页面、浏览器会话环境或浏览器已关闭",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Test timeout of {0}ms exceeded.",
  "zh": "测试超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Navigation timeout of {0} ms exceeded",
  "zh": "页面跳转超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "page.waitForURL: Timeout {0}ms exceeded.",
  "zh": "等待页面地址跳转超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "locator.waitFor: Timeout {0}ms exceeded.",
  "zh": "等待页面控件出现超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "page.goto: Timeout {0}ms exceeded.",
  "zh": "打开页面超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "page.click: Timeout {0}ms exceeded.",
  "zh": "点击页面超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "locator.click: Timeout {0}ms exceeded.",
  "zh": "点击控件超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "page.waitForLoadState: Timeout {0}ms exceeded.",
  "zh": "等待页面加载超过 {0} 毫秒，已超时",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Error reading response stream",
  "zh": "读取响应数据流失败",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "fetch failed",
  "zh": "网络请求失败",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "Request failed with status code {0}",
  "zh": "请求返回异常状态码 {0}",
  "keep": [],
  "source": "Docker wrappers, composed diagnostics and previous v5 formats"
 },
 {
  "en": "query={0} | language={1} | source={2}",
  "zh": "搜索词：{0}；搜索语言：{1}；词源：{2}",
  "keep": [
   0
  ],
  "source": "src/rewards/shared/query/QueryContext.ts:35"
 },
 {
  "en": "source={0} | fetchedFrom={1} | sourceLanguage={2} | sourceCountry={3}",
  "zh": "来源：{0}；获取地址：{1}；来源语言：{2}；来源国家：{3}",
  "keep": [
   1
  ],
  "source": "src/rewards/shared/query/QueryContext.ts:63"
 },
 {
  "en": "remaining={0} | bonus={1}/{2} | complete={3}",
  "zh": "剩余额度：{0}；额外奖励进度：{1}/{2}；已完成：{3}",
  "keep": [],
  "source": "Composed search progress compatibility"
 }
];
