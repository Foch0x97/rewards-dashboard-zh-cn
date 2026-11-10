# Rewards Dashboard 简体中文版

在 [mgrimace/rewards-dashboard](https://github.com/mgrimace/rewards-dashboard) 的基础上增加简体中文界面，保留原作者、许可与英文功能。仓库名为 **rewards-dashboard-zh-cn**，不是 Microsoft 官方产品。

## 这版加了什么

- 右上角新增「语言」选项，可切换简体中文和 English，首次访问默认中文。语言偏好保存在当前浏览器中。
- 人工按实际操作含义编写中文，覆盖总览、账号、运行记录、日志工具栏、定时计划、配置、诊断和常见提示。例如区分「已上报积分」与「尚未确认」，不把估算结果写成已完成。
- 中文集中在 `rewards-dashboard/public/locales/`，页面通过独立入口加载语言包，尽量减少与上游的冲突。
- 本 fork 额外提供独立的「执行结果通知」：支持企业微信机器人、钉钉、Telegram、Server 酱 Turbo，多渠道可选，中英文界面与通知内容语言分别设置。后端为 `lib/resultNotifications.js`，前端为 `public/views/resultNotificationSettings.js`；`server.js` 接入独立设置接口和完成记录检查，`views/config.js` 接入表单。不会向原脚本写入不支持的配置项。
- 原始日志、配置 JSON、配置键、命令、账号标识和用户输入保留原文；没有使用在线翻译服务，也不会把账号数据发送到翻译接口。
- 日志页新增中文说明、原始日志、中文与原文三种显示方式。中文说明下可展开原文；搜索匹配中英文，导出可选原始或双语。显示偏好保存在当前浏览器。
- 增加中文检查与手动上游同步工作流。上游新增而尚未收录的文案保留英文，不猜译接口响应。

首版基于上游提交 `4ddb7284d889c9bc4a91146f1e98495506fbc6cf`。

## 怎么运行中文版本

需要从**本仓库源码构建**。原版的 `ghcr.io/mgrimace/rewards-dashboard:latest` 不含本仓库的中文修改。

```sh
git clone https://github.com/Foch0x97/rewards-dashboard-zh-cn.git
cd rewards-dashboard-zh-cn
```

参考 `compose.zh-CN.yaml`，把面板服务加入微软脚本所在项目或共同网络。`CONTROL_API_URL` 指向微软脚本的 Control API；`CONTROL_API_TOKEN` 要与脚本的 `API_TOKEN` 相同。原作者的 API 权限说明仍适用，详情见 [原版英文说明](README.en.md)。

```sh
docker compose -f compose.zh-CN.yaml up -d --build
```

面板默认端口为 `8890`。首次打开右上角会显示「简体中文」，切换 English 会刷新页面。中文是面板的显示语言，不改变微软账号的地区或脚本的任务语言。

本项目增加中文显示及多渠道执行结果通知，不能让账号自动获得更多任务或积分；真实任务能力取决于所连接脚本和微软接口。通知设置、旧企微配置迁移和发送边界见 [中文说明](README.md#执行结果通知)。

## 怎么同步上游并保留中文

推荐到本仓库 **Actions → Sync upstream safely → Run workflow** 手动同步，保持在 `main` 分支。

流程会先合并上游、检查中文入口、检查配置选项翻译、运行测试并构建镜像，全部通过后才普通推送到 `main`。有合并冲突、测试失败或构建失败时停止；不会强推，也不会丢弃本地中文提交。远端在检查期间有新提交时，推送会被拒绝。

**不要使用 Discard commits（丢弃提交）**，那会删除中文修改。GitHub 的普通 Sync fork 也不等同于本仓库的完整检查流程。

无法保证将来上游任意改动都不冲突。若入口或配置结构变更，工作流会停止，需先适配再同步。即使构建成功，也应打开界面查看上游新增页面是否需要补中文。

原版的标签发布工作流仍在，中文版本没有冒用上游镜像名，也没有自动发布新镜像。更新后仍需在部署端重新构建。

## 检查与维护

需要 Node.js 24：

```sh
node scripts/check.mjs
node --test tests/*.test.mjs
```

本机 UI 预览：`node scripts/preview.cjs`，访问 `http://127.0.0.1:18990`。预览使用模拟 API 和虚拟账号，不连接微软；数据放在被 Git 忽略的 `.qa/`。

修改文案时编辑 `rewards-dashboard/public/locales/zh-CN.js`。动态句子使用完整句式匹配，不做全局单词替换。新配置项缺少翻译时，检查会提示补齐。

动态句式集中在 `locales/dynamic-zh-CN.js`，后端内置名称和已知提示补充在 `locales/extra-messages.js`。中文日期由 `public/util.js` 按所选语言生成；中文桌面安装信息使用独立的 `manifest.zh-CN.json`，英文清单保留。

日志中文说明集中在 `public/locales/log-zh-CN.js`，由 `public/logDisplay.js` 在浏览器中显示，不改动 SSE、解析器、数据库或原始导出。仅翻译已确认的句式和字段说明；账号、搜索词、错误码、网址和诊断详情保留，未知信息、JSON 和多行堆栈保持原样。新版本日志仍可能需要补充句式，不能据此认定全部英文已翻译。

日志措辞参考 [chiihero/Microsoft-Rewards-Script 的 V4-china 分支](https://github.com/chiihero/Microsoft-Rewards-Script/tree/V4-china)，并按 TheNetsky v5 实际日志含义单独编写显示规则，没有引入该仓库的任务执行代码。`tests/logs-locales.test.mjs` 检查原文保留、搜索词保护、结果含义和安全转义。更新部署时只需重建面板，无需改动微软脚本容器或账号会话。

`tests/locales-complete.test.mjs` 会核对完整动态句子、后端活动分类、Cron 描述、确认弹窗，以及实际生成的图表和活动详情。原始活动标题、参数、邮箱、路径、未知外部错误不做猜译。更新上游后，仍需检查新增句式，不能仅凭构建通过认定新页面已全部翻译。

## 原作者与许可

原项目：[mgrimace/rewards-dashboard](https://github.com/mgrimace/rewards-dashboard)。本仓库是增加中文语言的 fork，沿用 [原项目 LICENSE](LICENSE)。
