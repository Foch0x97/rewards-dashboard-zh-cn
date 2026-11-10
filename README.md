# Rewards Dashboard 简体中文版

[简体中文](README.md) · [English / 原版说明](README.en.md) · [中文版维护说明](README.zh-CN.md)

为 [Microsoft Rewards Script](https://github.com/thenetsky/microsoft-rewards-script) 提供的配套管理面板。通过脚本的 **Control API（控制接口）** 读取账号状态、积分总额和变化趋势，也可以启动、停止、安排任务及修改脚本配置。默认访问地址为 `http://主机IP:8890`。

本仓库 fork 自 [mgrimace/rewards-dashboard](https://github.com/mgrimace/rewards-dashboard)，增加人工编写的简体中文界面，保留英文切换与上游功能。

> [!IMPORTANT]
> 中文版需要从**本仓库源码构建**。上游的 `ghcr.io/mgrimace/rewards-dashboard:latest` 镜像不包含这里的中文修改。面板本身不执行积分任务，需要连接已经启用 Control API 的微软脚本。

## 中文版增加了什么

- **中英文切换**：右上角选择「简体中文」或 English，首次访问默认中文，当前浏览器会记住选择。
- **按功能含义编写中文**：覆盖总览、账号、日志工具栏、运行记录、定时计划、配置与诊断，区分「已上报积分」「尚未确认」和「已完成」。
- **动态文案与日期**：覆盖账号提示、任务卡进度、图表悬浮说明、补跑结果和确认弹窗；中文模式使用中文日期、24 小时时间及中文桌面安装信息。
- **日志中文说明**：日志页可切换中文说明、原始日志、中文与原文；覆盖 v5 登录、二次验证、搜索和任务结果等常见句式。搜索同时匹配中英文，中文说明下可展开原文，支持原始和双语导出。
- **保留技术信息原文**：后台原始日志、配置 JSON、参数名、命令和用户输入保持原样，便于查错。
- **独立语言文件**：中文文案集中在 `rewards-dashboard/public/locales/`，原始日志与业务响应保留原文。
- **执行结果通知**：在独立区域按需启用企业微信机器人、钉钉、Telegram、Server 酱 Turbo，分别配置、测试和查看发送状态；支持中英文通知，独立于原脚本的日志推送。
- **检查与上游同步**：增加文案检查、自动测试和手动同步工作流，通过检查后再更新分支。

没有使用在线翻译服务。上游新增而尚未收录的文案会保留英文，未知接口错误也保留原文。

## 执行结果通知

打开「脚本设置」顶部的 **执行结果通知**，按渠道勾选，展开对应配置。可以只启用一个，也可以同时启用多个：

| 渠道 | 必填内容 | 可选内容与文档 |
| --- | --- | --- |
| 企业微信机器人 | 群机器人 Webhook | 使用群机器人，不是企业应用的 CorpID、Secret 或 AgentID。[官方文档](https://developer.work.weixin.qq.com/document/path/91770) |
| 钉钉 | 自定义机器人原始 Webhook | 支持 SEC 加签密钥和安全关键词；时间戳及签名由面板生成。[官方文档](https://open.dingtalk.com/document/robots/custom-robot-access) |
| Telegram | Bot Token、Chat ID | 先与机器人开始会话，或将其加入目标群组。面板需要能访问 Telegram 官方接口。[官方文档](https://core.telegram.org/bots/api#sendmessage) |
| Server 酱 Turbo | SCT 开头的 SendKey | 暂不支持 Server 酱 3 的密钥。[获取 SendKey](https://sct.ftqq.com/sendkey/) |

选择「通知内容语言」，点击「保存结果通知设置」，再分别点击各渠道的「发送测试通知」。中英文界面、说明、保存状态及已知错误均已适配；通知内容语言单独保存，不因切换界面而改变。

通知由**面板服务**发送，每轮运行结束后汇总一次：运行状态、已处理账号数、积分变化、耗时，以及本轮能读取到的账号结果。部分活动未完成会明确标出；积分未知时显示「未确认」，不会把退出码为 0 当作全部任务完成。

微软脚本原有 Discord、Telegram、ntfy 通知是按日志筛选规则发送的，仍独立保留。两边同时启用可能收到两类消息。执行结果通知设置不写入脚本的 `config.json`，不受脚本的通知日志筛选影响，也不需要开启脚本的配置写入权限。

凭据、语言和发送记录保存在面板 `/data/result-notifications.json`，沿用面板的数据挂载；浏览器读取设置不会返回已保存的凭据。留空保存会保留旧值；「清除此渠道已保存的凭据并停用」只影响该渠道。如需移除已保存的钉钉选填项，请先清除此渠道，再重新填写。不要把配置文件上传到公开仓库。

更新时自动迁移旧版 `/data/wecom.json` 中的企微地址、启用状态与去重记录，原文件保留；后续统一以新配置为准。更新后只需重建面板，无需重新配置微软账号。

面板需要在运行结束时保持在线。每轮对各个启用渠道分别发送一次，某渠道失败不妨碍其他渠道。启用前及面板重启前结束的历史运行不会补发，日志重放不会重复推送；发送失败会显示在设置中，**不会自动重发**，以免接口已收取但响应超时时刷屏。测试消息和实际执行结果会明确区分。面板离线、网络故障或未收到脚本结束记录时，不能保证收到通知。测试检查了协议请求和模拟响应；真实送达请使用各渠道测试按钮确认。

## 界面预览

下图为**上游原版界面**，用于展示布局；本仓库在同一界面中增加中文语言选项。

| 电脑端 | 手机端 |
| --- | --- |
| ![上游电脑端界面](docs/Screenshot-dash.png) | ![上游手机端界面](docs/Screenshot-mobile.png) |

## 主要功能

- **本地保存历史**：积分历史、运行记录、活动记录和面板定时计划保存在本地 SQLite 数据库中，重启后仍然保留。
- **账号概况**：查看各账号的积分、运行状态和异常提示。
- **积分趋势**：按天显示积分变化，支持时间轴、热力图等视图，方便发现积分变化与异常。
- **登录确认码**：从日志中捕获免密登录的两位数确认码，配合 60 秒倒计时显示。
- **实时日志**：支持级别筛选、搜索、暂停、自动滚动、加载更多、下载与清空显示。
- **运行控制**：启动、停止、重新运行任务，支持账号选择和定时执行。
- **主题与移动端布局**：保留 Nord、Dracula、Catppuccin、Gruvbox、Tokyo Night 等主题，以及适合手机使用的布局。

## Docker 部署

### 1. 启用微软脚本的控制接口

在 `microsoft-rewards-script` 服务中设置：

```yaml
environment:
  API_MODE: "true"
  API_TOKEN: "换成你自己的长随机字符串"
```

控制接口默认使用 `3010` 端口，面板需要能通过共享 Docker 网络或其他已配置的网络路径访问它。

以下权限在**微软脚本一侧按需启用**，面板启动不要求全部打开：

| 变量 | 作用 |
| --- | --- |
| `API_ALLOW_CONFIG_WRITE=true` | 允许面板保存脚本配置。未开启时配置只读，保存返回 403。 |
| `API_ALLOW_CONFIG_REVEAL=true` | 允许面板显示通知地址、令牌等敏感配置。未开启时显示 `***REDACTED***`。 |
| `API_ALLOW_SCHEDULE_WRITE=true` | 允许面板修改脚本容器自身的定时计划。 |

### 2. 拉取中文版源码

```sh
git clone https://github.com/Foch0x97/rewards-dashboard-zh-cn.git
cd rewards-dashboard-zh-cn
```

在仓库目录创建 `.env` 文件：

```dotenv
API_TOKEN=换成与微软脚本相同的长随机字符串
CONTROL_API_URL=http://microsoft-rewards-script:3010
```

[compose.zh-CN.yaml](compose.zh-CN.yaml) 会将这里的 `API_TOKEN` 传给面板的 `CONTROL_API_TOKEN`。

### 3. 配置共享网络

通过 `microsoft-rewards-script` 服务名访问接口时，**两个容器必须在同一个 Docker 网络中**。

可以将 `compose.zh-CN.yaml` 中的整个面板服务复制进微软脚本的 Compose 项目，按实际位置调整 `build.context` 和数据目录。项目结构可参考上游的 [sample-stack-compose.yaml](sample-stack-compose.yaml)，中文版仍需使用本仓库的源码构建目录。

也可以创建外部网络：

```sh
docker network create rewards
```

随后在两个项目的对应服务中分别加入网络配置。例如面板项目：

```yaml
services:
  rewards-dashboard:
    # 其他原有配置保持不变
    networks:
      - rewards

networks:
  rewards:
    external: true
```

微软脚本项目中也需要给 `microsoft-rewards-script` 服务添加相同的网络配置。以上仅展示网络部分，不是完整 Compose。

### 4. 构建并启动

确认接口地址、令牌和网络后执行：

```sh
docker compose -f compose.zh-CN.yaml up -d --build
```

打开 `http://主机IP:8890`。例如部署在 `192.168.0.2`，访问地址就是 `http://192.168.0.2:8890`。

面板历史默认保存在仓库的 `data` 目录，容器内对应 `/data`。更新和重建时保留这个目录。

## 直接使用 Node.js 运行

上游要求 Node.js **22.13 或更新版本**，使用内置的 `node:sqlite`，不需要安装 npm 依赖。中文版检查工作流使用 Node.js 24。

先启动微软脚本的控制接口，再进入面板程序目录：

```sh
cd rewards-dashboard
```

在该目录创建 `.env`：

```dotenv
CONTROL_API_URL=http://127.0.0.1:3010
CONTROL_API_TOKEN=换成与控制接口相同的API_TOKEN
TZ=Asia/Shanghai
```

启动：

```sh
npm start
```

`127.0.0.1` 只适用于接口与面板直接运行在同一主机的情况，其他情况请填写实际地址。

## 面板登录保护

面板登录与控制接口认证相互独立：

- `DASHBOARD_USERNAME` 和 `DASHBOARD_PASSWORD`：浏览器访问面板时使用的 Basic 认证。两项都不为空才启用，缺少任意一项就不会弹出登录框。
- `CONTROL_API_TOKEN`：面板服务端访问微软脚本的令牌，必须与脚本的 `API_TOKEN` 相同。

使用 Docker 时，将面板用户名和密码添加到服务的 `environment`；直接运行 Node.js 时，可写入面板目录的 `.env`。Compose 的 `.env` 变量不会自动传入容器，还需在 `environment` 中引用。

## 各页面说明

| 页面 | 功能 |
| --- | --- |
| **总览** | 显示账号数量、积分余额、上次运行、异常账号与定时状态，运行期间显示进度和各账号概况。 |
| **账号** | 汇总账号配置和日志记录，包括积分变化、当天增量、成功或失败状态、连续签到、保护状态及配置摘要。账号仍在脚本的 `.env` 中管理，此页不用于修改账号密码。可显示的数据取决于脚本版本和运行记录。 |
| **日志** | 通过 SSE 实时接收日志，支持级别筛选、中英文搜索、暂停、自动滚动、加载更多和清空显示。可选中文说明、原始日志或双语显示，支持导出原始或双语日志。 |
| **运行记录** | 查看最近 14、30、90 天的积分变化、运行历史和进程退出结果。脚本中途崩溃时会记录退出码，避免一直显示「运行中」。 |
| **定时计划** | 选择由面板或脚本容器执行定时，配置 Cron、排除账号、已有任务时跳过等规则。面板定时支持错过任务后的补跑策略，通常只启用一种定时方式以免重复运行。 |
| **脚本设置** | 修改常用配置或编辑原始 `config.json`。保存时仅提交实际修改的字段，并防止将 `***REDACTED***` 误写到真实敏感配置中；校验错误会显示在页面上。 |
| **故障诊断** | 查看脚本保存的错误文本、截图、HTML 页面快照，以及管理登录会话。相关数据需脚本侧支持并启用对应功能。 |

顶部始终保留「开始运行」「停止」「重新运行」按钮。右侧 `⋮` 菜单中还有强制停止和关闭控制接口。日志中出现登录确认码后，页面顶部会显示确认码和倒计时。

## 工作原理

**共享一条事件连接。** 面板服务端与控制接口保持一条 SSE 连接，再将事件广播给浏览器页面，支持断线续传与重连退避。打开多个页面不会按页面数量重复连接脚本。

**日志与历史同时处理。** 日志既实时发送给浏览器，也通过解析器写入 SQLite。控制接口的内存缓冲会随进程退出消失，面板已经保存的历史则保留在数据目录中。

**运行中更新积分。** 脚本上报余额和积分变化后，面板会在运行期间更新数据；账号结束时使用 `ACCOUNT-END` 记录校正。统计精度取决于脚本版本和上报内容。

**分层认证。** 控制接口令牌由面板服务端作为 Bearer Token 发送；浏览器访问则使用单独的可选用户名与密码。

**图表不依赖外部图表库。** 图表使用内联 SVG，颜色跟随主题。语言文件在本地加载，不调用翻译接口。

## 面板环境变量

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `CONTROL_API_URL` | `http://microsoft-rewards-script:3010` | 微软脚本控制接口地址。 |
| `CONTROL_API_TOKEN` | 无 | 控制接口令牌，与脚本的 `API_TOKEN` 一致。 |
| `DASHBOARD_USERNAME` | 无 | 可选的面板登录用户名，需与密码同时设置。 |
| `DASHBOARD_PASSWORD` | 无 | 可选的面板登录密码，缺少任意一项就不启用登录。 |
| `PORT` | `8890` | 面板监听端口。 |
| `TZ` | `UTC` | 时区，影响按天汇总积分；国内通常设为 `Asia/Shanghai`。 |
| `DASHBOARD_TITLE` | `Microsoft Rewards` | 面板标题。 |
| `POLL_MS` | `5000` | 状态轮询间隔，单位毫秒；日志通过事件流接收。 |
| `LOG_REPLAY` | `300` | 事件流连接时回放的日志行数。 |
| `DATA_DIR` | 面板程序目录下的 `data` | 保存 `dashboard.sqlite` 的目录；Docker 镜像中默认为 `/data`。 |

## 同步上游与更新

在 GitHub 中打开 **Actions → Sync upstream safely → Run workflow**，选择 `main` 分支运行。

流程先合并上游、检查语言入口与文案、运行测试并构建镜像，全部成功后再正常推送。遇到合并冲突、测试或构建失败时停止，不强推、不丢弃中文修改。

**不要选择 Discard commits（丢弃提交）**。主 README 已完整中文化，上游修改同一部分文档时也可能出现冲突，需核对后合并，无法保证未来所有更新都零冲突。

同步后，部署端仍需更新源码并重新构建：

```sh
git pull --ff-only origin main
docker compose -f compose.zh-CN.yaml up -d --build
```

以上适用于直接使用本仓库 Compose 的部署；放进其他项目的服务应在对应项目中重建。更多说明见 [中文版维护文档](README.zh-CN.md)。

## 常见问题

**无法连接控制接口**：检查 `CONTROL_API_URL` 和共享网络。容器内的 `localhost` 指向容器自己，接口在另一个容器时通常使用共享网络中的服务名。使用 `host.docker.internal` 时，Linux 主机可能还需配置 `extra_hosts`。

**控制接口拒绝令牌**：核对面板的 `CONTROL_API_TOKEN` 与脚本的 `API_TOKEN` 是否完全一致。

**没有面板登录框**：确认 `DASHBOARD_USERNAME` 和 `DASHBOARD_PASSWORD` 都已传入面板进程，且均不为空。

**保存配置返回 403**：检查脚本接口是否开启 `API_ALLOW_CONFIG_WRITE=true`。

**每日积分切换时间不对**：检查 `TZ`，国内通常设置 `Asia/Shanghai`。

**定时没执行**：确认由谁负责执行定时，再检查执行端是否在运行、排除账号、补跑策略和上次结果。

**界面没有中文**：确认从本仓库构建，使用上游原版镜像不会包含中文，更新后刷新浏览器。

## 原作者、许可与支持

原项目由 [mgrimace](https://github.com/mgrimace) 维护，本仓库增加简体中文支持，沿用 [MIT 许可](LICENSE)。中文版首版基于上游提交 `4ddb7284d889c9bc4a91146f1e98495506fbc6cf`。本项目不是 Microsoft 官方产品。

以下为**原作者的赞助渠道**，保留自上游说明：

[![通过 PayPal 支持原作者](https://img.shields.io/badge/PayPal-00457C?logo=paypal&logoColor=white)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=R4QX73RWYB3ZA)
[![通过 Liberapay 支持原作者](https://img.shields.io/badge/Liberapay-F6C915?logo=liberapay&logoColor=black)](https://liberapay.com/cammarata.m/)
[![通过 Ko-fi 支持原作者](https://img.shields.io/badge/Ko--fi-FF5E5B?logo=ko-fi&logoColor=white)](https://www.ko-fi.com/mgrimace)
[![通过 Buy Me A Coffee 支持原作者](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?logo=buymeacoffee&logoColor=black)](https://www.buymeacoffee.com/cammaratam)
