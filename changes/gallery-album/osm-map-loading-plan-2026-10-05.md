---
status: target
authority: osm-baseline-alignment-and-optimization-plan
created: 2026-10-05
updated: 2026-10-06
execution_status: implemented-with-validation-gaps
supersedes: map-loading-optimization-2026-10-01.md
scope: 完整f5隔离OSM实施及10月6日条件发布；原目录未迁移，当前结果见11.7及发布记录
---

# 暖色 OSM 相册地图：基线对齐与加载优化计划

> 2026-10-05 后续实施已获明确授权并执行；当前结论、证据及限制见第11节。第1、12、13节的“仅文档／待实施”叙述保留为制定计划时的历史，不代表本次实施状态。

## 1. 结论、权限与不变项

正式主地图确定为暖色 OpenStreetMap XYZ 瓦片。上一轮优化的是未对齐发布基线的本地 Natural Earth 向量实现；其测量只能说明该实验前后的变化，不能说明线上 OSM 的请求范围或性能。新计划首先解决基线，再解决加载效率，禁止在错误版本上继续优化。

缓存复盘补充：**用户不需要清浏览器缓存也应能得到新版，但不承诺发布瞬间所有已打开页面自动更新。** 新入口取得后才装载新版应用；站内代码／数据使用内容版本，第三方瓦片遵循其 HTTP 有效期，两者独立。已打开的 Hash 单页应用继续运行旧版时要能正常使用旧资源，不能靠强制刷新打断照片和地图操作。半年是维护复核周期，不是全部资源的缓存有效期；官方 OSM 不允许预下载地图包。

本轮只读核查并修改文档，**不创建新实现、不切换当前分支、不合并／撤销已有源码、不删除实验数据、不运行 build:site、不提交、推送或发布**。后续实施需收到明确实施指令。当前权限和正式选择只由 [SCOPE.md](../../SCOPE.md) 记录，本文件是目标方案。用户已确定采用 OSM，不需要再次讨论把 Natural Earth 恢复为主地图。

保留五册 87 张及其内容、地址与日期；保留原图字节、缩略图和仅加载当前原图的策略；保留封面环绕、第一次选中上提、下一次独立点击进入、返回、筛选、文字、纸色／叶影、全国／省域两层状态、滚轮／双指焦点缩放、拖动、键盘、全国重置和照片返回地图现场。OSM 内国家／城市／道路／地标／街道文字保留，邮册名称仍点击后显示。不能把“邮册默认无标签”解释为隐藏底图文字。

保留发布版暖色样式：瓦片 opacity `.7`、multiply 混合及 `grayscale(.42) sepia(.38) saturate(.76) contrast(.92) brightness(1.03)`；不改字体、地图文字、滤镜和版权标注位置。保留 `© OpenStreetMap contributors · ODbL` 可见，不因故障、手机安全区、缩放或本地瓦片模板而隐藏。若版权可读性／许可链接存在缺口，记录并做最小许可补足，不擅自重设计。

Natural Earth 仅保留发布版的轻量海陆／水系失败底层，并与 OSM 共用 Web Mercator。禁止将上一轮完整道路／地点分块接回主地图，或在网络失败时自动切换为另一套投影和交互。七夕／DEV 测试内容仍不发布；不引入后端、地理编码、用户定位、整册图片预取或全国瓦片离线包。

## 2. 2026-10-05 核查记录：事实与缺口

### 2.1 已直接核实

| 对象 | 核查结果 | 证据方式 |
| --- | --- | --- |
| 当前工作树 | `原工作树`，master HEAD `8eb34f34b47963450e00aadcf5c305748912cf94`；大量 tracked 修改／删除和 untracked 文件 | git status / rev-parse |
| 远端 master | `f5ce5471ccbf04be7f6ad75448a567b0a732e9c3` | 本地 origin/master 与 GitHub branches/master API 同值；没有 fetch 或更新本地 ref |
| 四个发布提交 | `4913d5a` → `40a91f3` → `284b3ac` → `f5ce547`；本地 behind 4 | git log --all；不能只挑最后一个 OSM commit 覆盖最老基线 |
| OSM 发布实现 | f5ce547 新增 OsmTileLayer，默认官方 XYZ URL，投影和最大 zoom 改为 OSM 路径 | git show f5ce547；比较其父提交 284b3ac |
| 线上入口 | [正式相册](https://huhaiyang0415.github.io/our_story/#photos) 的 HTML 返回 200，入口 `assets/index-DrAZx1gF.js` | 只读 HTTPS 请求，不下载原图或 OSM 瓦片 |
| 线上主 JS | 1,693,661 B，Git blob `e3ad716acd40f9dad0724dacce758d3866a01884`，与 f5ce547 对应文件相同 | 用响应原始字节计算 Git blob SHA-1，再与 git rev-parse 比对 |
| 线上地图 JS | `assets/GalleryMap-D3ZoEpnZ.js`，21,002 B，blob `ce359dd5581af0485330127eeaaf4411e4a8a3b0`，与 f5ce547 相同 | 同上 |
| 线上地图 CSS | `assets/GalleryMap-C2B3ndtG.css`，6,459 B，blob `f9d2ef512fcafdf89ec01c5c1ded370dd5cb98ea`，与 f5ce547 相同 | 同上 |
| 当前本地实现 | 存在 NE 分块服务／预热／Worker，没有发布版 OsmTileLayer；原图忙闲与队列已经实施 | 读取本地 GalleryMap、mapDataService、requestQueue、prepareMap、mapWorker、useGalleryMapWarmup |
| SCOPE 差异 | 本地仍写“不接 OSM”，发布提交 SCOPE 已明确 OSM 正式地图与 NE 回退 | 本地 SCOPE 与 git show f5ce547:SCOPE.md；本轮只更正范围事实，不替换整份文档 |
| DEV 启动 | package.json 的 dev 是 vite；Vite 配置没有按 DEV 改地图提供者；发布源码默认 URL 也不依赖 DEV | 本地／发布 package.json、vite.config.ts、发布 GalleryMap 配置 |
| 线上缓存头补测 | 入口 `/our_story/`、地图 JS、`gallery/map/china-4.0.2.json` 的 HEAD 均为 200、`Cache-Control: max-age=600`，有弱 ETag／Last-Modified | 2026-10-05 12:22 UTC 只读 HEAD；入口 ETag `W/"6abc8fff-36c"`，Age 0、Last-Modified 2026-09-30 04:28:47 GMT；这是该时刻响应，不代表所有 CDN 节点／浏览器 |
| 发布时旧文件清理 | 本地及 f5ce547 的 `copy-site.mjs` 在复制 dist 前删除根 assets／pages 目录，没有旧发布资源保留契约 | 只读检查脚本；没有执行脚本，也未证明线上曾发生旧 chunk 404 |
| 应用缓存相关实现 | 本地共享 `preloadFetch`／`preloadFetchRequired` 使用 force-cache；检索本地和 f5ce547 的 src／public／Vite 配置未发现 Service Worker 注册或 vite:preloadError 处理 | 源码检索；不等同检查用户浏览器历史注册，manifest 文件也不能证明有离线缓存 |

发布版使用 `VITE_GALLERY_OSM_TILE_URL?.trim() || DEFAULT`；相同源码在相同有效配置下 DEV／build 应得到同一提供者。Vite mode、环境变量或 QA 拦截也可能导致将来的差异，必须单独检查，不能笼统说“DEV 和生产一定完全相同”。当前差异的直接证据是源码未对齐，不是 npm run dev 自动换地图。

### 2.2 尚未验证与访问限制

- 本轮确认线上 JS/CSS 字节与发布 commit 对应，未完成线上地图 DOM／截图／交互目检和瓦片网络瀑布；浏览器连接连续超时。不能把产物哈希相同写成全部视觉和交互通过。
- git SSH／HTTPS ls-remote 在当前网络未成功；远端当前值由只读 GitHub API 补证。未更新分支、索引或 origin/master。
- 未測实际 OSM 延迟、缓存头、CORS、跨域 Resource Timing 暴露程度、429/403、弱网表现、手机硬件；后续必须实测，不能沿用 NE 的 50%／75%／40%目标或字节数。
- HEAD 补测不替代实际 GET／浏览器缓存证据；A→B 发布、旧标签页、304／200、CDN 收敛及回滚尚未测试。当前无自定义响应头配置能力的证据，不能认为加 HTML meta 或 `_headers` 文件就能改变 GitHub Pages 的 HTTP 行为。
- 本地旧实验回填为 implemented-with-validation-gaps，并非全通过；其中五次样本、API 模拟、原图／首页等证据均属于该源码，迁移后要重新验收。
- 现有 `.release-candidate` 是 detached 的 `4913d5a`，不是 OSM 基线，不应因为目录叫 release-candidate 就拿来当最新版本，也不能覆盖其中工作。

## 3. A 阶段：保护工作并建立 OSM 一致性基线

### 3.1 保护先于任何同步

实施开始重新核对 HEAD、远端当前值、worktree list、tracked／untracked／ignored 分类与正在运行的进程。不能默认 10 月 5 日状态仍有效。对两个 worktree 分别确认已有工作，不擅自删除、归档或替换。

建立本地可恢复快照：tracked 差异用相对 8eb34f3 的 binary patch；untracked 和必要 ignored 实验源码／证据／个人素材配置保存精确文件副本和大小／SHA-256 清单；保留 10 月 1 日 before、baseline-dist 和测量摘要。原图唯一跟踪副本、用户私人路径／配置、node_modules junction 单独分类：原图不能漏保，但不重复打包数百 MB，不跟随 junction 导出依赖；机器配置和私人证据只能留本地。

备份至少实际恢复一组 tracked 二进制变化、一个 untracked 新模块及关键文档，在临时目录核对字节后才进入迁移。不要用 git stash -a 粗暴打包忽略目录，也不能认为默认 stash 会保留 untracked 源码。禁止直接在当前脏 master 上 pull、reset --hard、checkout --force、clean 或整体复制 f5ce547 覆盖。

### 3.2 推荐隔离路线

在后续明确授权的实施会话中，新建一个**不复用旧候选目录**的工作树，从完整 f5ce547 建立 `codex/` 分支，作为 OSM 对照和实施目录。创建方式遵守应用与仓库 worktree 约定；本轮不实际创建。记录绝对目录、commit 和启动命令，让浏览器明确访问该目录的 DEV server，旧服务停止或使用不同端口以免误连。

独立 OSM 工作树的 DEV、npm run build 后 dist preview，与线上产物建立一致性证据后，才开展优化。f5ce547 已包含四个发布提交，应从其完整树出发；仅 cherry-pick 最后一个或复制 OsmTileLayer 不够，可能缺内容、路由、样式或投影更新。

原目录仍保持现有实验工作时，明确叫“NE 实验工作树”，不能因为独立目录已经是 OSM 就宣称原目录已同步。若要求日常开发回到原路径，后续实施另安排受保护的三方迁移：基线为旧 HEAD、正式树为 f5ce547、本地为现有未提交内容，逐文件分类和合并；对旧 HEAD 没有、但正式树和本地都有的同名新增文件人工比较，不能只按 git diff 判断为“本地新增可直接覆盖”。

原目录迁移完成前，必须有文件级保留／迁移／归档清单与冲突处理记录，恢复测试通过；结束后相册目录／必要配置可与已验收 OSM 实施树对应，其他未提交工作及证据仍可恢复。不为制造干净状态丢弃用户工作；阶段未做就保留 pending，不擅自把 master 移到远端并称完成。

### 3.3 一致性门禁 G0（未通过不得优化）

同一基线、依赖锁文件、有效 provider URL、样式和内容，在 DEV 和 dist preview 各检查：

1. `data-map-source='osm'`，默认 tile.openstreetmap.org；不存在 DEV 自动选 NE 分支。列出 Vite mode、`.env`/`.env.local`/mode 文件和相关进程环境的配置来源，仅记录地图相关非敏感字段。
2. 所有瓦片、行政／NE 回退和相册锚点共用 Web Mercator；照片相册数据、暖色滤镜、标注文字／可见性、缩放上限与发布一致。
3. 同样视口、相册锚点、zoom/pan 得到相同 XYZ 集合，QA 替换模板需 DEV 与生产一起明确设置，不能拿 QA 图片当线上 OSM。
4. 不请求旧 NE 全国明细或 396 分块／索引，不加载旧 equirectangular 服务；必要回退只使用发布已存在的轻量底层。
5. 线上已核实 chunk 内容作为来源指纹；重新本地构建的 chunk 文件名允许因工具版本／环境变化不同，比较源文件／lock／有效配置和行为，不要求编译 hash 永远相同。
6. 本地 `/`、生产 `/our_story/` 和 QA 子目录的相对素材路径／字体／当前原图正常，DEV 原图中间件不能掩盖 dist 静态文件缺失。

用同源码、同配置的 DEV 与 dist 证明一致性；再以小量人工线上对照确认视觉。不要在旧根 index、NE dist 和新 DEV 三个不同入口之间切换后比较“加载速度”。

## 4. 上一轮成果的复用／适配／退役矩阵

这是计划分类，**本轮没有删除或迁移任何文件**。退役指后续 OSM runtime 不再依赖；历史文件保留和物理删除要按清单、证据与恢复策略决定。

| 旧改动 | 处理 | 迁移条件与禁止事项 |
| --- | --- | --- |
| GalleryPhoto 实例 token 原图忙闲、PolaroidGallery 忙闲接线 | 可复用设计及局部代码 | 与发布照片组件逐项三方比较，保留 120ms 稳定请求和两次激活；换图、卸载、StrictMode 必须重测 |
| requestQueue 的优先级、租约、去重、取消、有限重试 | 适配后复用 | run 从 JSON／parse 换为图像 load/decode；删除顶点／JSON 字节等假定，队列槽位和实际网络分开统计 |
| useGalleryMapWarmup 的首屏 decode、停稳、忙闲、hidden/online/saveData 监听 | 适配后复用 | 默认官方 OSM 只能预热站内模块／基础数据／计算，禁预测瓦片；重写 owner／handoff 和预算对象 |
| useMapData 的 rAF 规划、old/new generation、可见集 ready、过渡保留 | 适配思路 | 改为 XYZ 图像和当前 z；不保留 4/8/16 增量明细语义，避免总在旧请求上等待 |
| tileGeometry / focusState / viewportBox | 只复用通用逆变换思路 | 统一发布 Mercator 世界→screen；移除旧 cell 60/80/80、equirectangular 范围和固定 40 上限 |
| mapDataset / mapDataService | 旧 NE 数据耦合部分退役 | 内容 hash、JSON 索引、read base projection 不能直接当 OSM 模板版本；拆出轻量行政／回退能力后再用 |
| prepareMap / mapWorker | 原实现不直接复用 | 其 worldProject 用经纬度仿射插值；Mercator 纬度是非线性的。worker china 分支还调用默认 parseGeography，不能只给 worker 换 projection 名称 |
| build-tiles / tileSchema / 396 块／91,569B 索引 | 从正式运行路径撤除 | 不给在线栅格建立同类离线全国包。先存实验恢复清单，再清理候选构建和 import；回退底层不需 396 块 |
| tiles.test 的共享取消、超时、预算测试 | 挑选后改写 | 调度测试可复用；NE 线裁剪／顶点验收仅留实验，不作为 XYZ 通过证据 |
| map-budget / generate:map-tiles 与 package.json verify 接入 | 正式候选适配或撤除旧项 | 不把实验 package.json 整体覆盖 f5ce547；新增 XYZ 请求／缓存／图像预算检查时保留原类型／路由门禁 |
| 浏览器 QA 服务、样本结构与原图检查 | 复用框架并新建 OSM 场景 | 不把 NE 的 ready 标记、decodedBodySize、顶点数、禁缓存设置和原矩阵直接搬到官方 tile host |
| 本地快照、测量 JSON、文档与 `.gitignore` 精确规则 | 保留历史 | 标明源码、NE 和本地实验归属；不回填成 OSM 性能，更不发布 HAR 中私址／机器路径 |

## 5. 实际发布 XYZ 加载机制与优化对象

f5ce547 的 OsmTileLayer 已经是**局部图片瓦片**，不是全国明细 JSON 下载。其公式：`z = clamp(floor(3 + log2(state.zoom)), 3, 16)`；用户 scale 上限 4096，按此公式实际最高 z=15，不应把代码 clamp 16 宣称已能交互到 z16。state.zoom 和 XYZ z 是两种量。

中心从世界平面 inverse Mercator 得到 normalized 坐标；根据 tile screen width/height 算半径 `ceil(viewport / tileScreenSize / 2) + 2`，每轴最大 8；两层循环创建带 src 的 img。理论最大集合 17×17=289（实际受边界与 scale 影响，未测实际数量）。它是围绕中心的对称矩形，不是精确 bbox 相交；固定额外两格对手机可能明显过量，不能因代码有 cap 就认为合理。

所有创建的 img 同时交给浏览器请求，没有应用级中心优先、明确并发、AbortController、decode 状态或局部重试；`decoding='async'` 不能替代请求队列。失败只 hidden=true；同一个 key/src 后续重渲染不保证自动恢复。z 变化会更换整批 key，旧层退出，新层等待期间可能看到回退底层。DOM 移除／隐藏不等于证明网络已取消，浏览器会有自己的连接队列和缓存。

优化对象因此是：缩小无用图片集合、让最重要当前瓦片先到、跨级保留有用已就绪图片、限制在途／decode／DOM，并为照片让路。不是缩减 NE 顶点、生成更小的道路 JSON 或拿 gzip 再压 PNG。

## 6. Web Mercator 与视野一致性

### 6.1 统一数学路径

保留发布 `[west,east,south,north]=[70,140,15,55]`、world 1000×780、padding 50 的 Mercator 基准与 fit；行政、回退和 pin 全部使用同一 projector。经纬度来自现有公开锚点／行政数据，不从地址文本计算；避免混入 GCJ-02／BD-09 或用手工偏移掩盖误差。

```text
normalizedX = (longitude + 180) / 360
normalizedY = (1 − ln(tan(latitudeRad) + sec(latitudeRad)) / π) / 2
latitude clamp: ±85.05112878°
world = projectWebMercatorPoint(normalized)
screenX = width/2 + fit × (panX + (worldX−500) × scale)
screenY = viewHeight/2 + fit × (panY + (worldY−390) × scale)
worldX = 500 + ((screenX−width/2)/fit−panX)/scale
worldY = 390 + ((screenY−viewHeight/2)/fit−panY)/scale
tileX = floor(normalizedX × 2^z)
tileY = floor(normalizedY × 2^z)
```

四个舞台角逆变换得到世界 bbox，再 inverse Mercator 求 tile 范围；最大边界用半开区间（ceil(max×2^z)−1），避免恰好压线多算一格。XYZ y 从北向南，不能用 TMS 翻转。先按发布限制保留经度范围和 pan；若出现 x 越界，选择裁切而不是未经授权启用绕世界重复，y 永不 wrap。

CSS 像素、DPR、tile 本体常规 256px 分开：高 DPR 不自动多请求一档或启用 @2x，除非服务明确提供且获批准。保持首次 zoom4 和最高 scale4096。tile z 门槛第一阶段仍用发布公式；任何按屏幕 resolution 重新选 z 或 hysteresis 调整，要比较文字清晰度／切换手感和集合同等性，不以提速牺牲街道文字质量。

### 6.2 过渡与快速输入

变换即时更新，计划最多每 rAF 一次；不能把拖动／pinch 全部防抖 150ms。可见新集立即规划，有限周边等停稳。每帧需求 owner 替换，丢掉离开目标的 queued 项；使用 generation 防旧 load/decode 完成覆盖新视野。

480ms easing 中保留上一可见层的已解码图；旧缓存只作为当前屏幕所需背景，不预先请求途经地带。可以复用已缓存父瓦片按子格范围裁切缩放到新层占位；不为占位另下载较低级全图。保留滤镜在统一外层，避免两层透明度叠加造成变暗；新瓦片就绪后逐片替换相应旧覆盖。

层数起始上限为当前层＋一个旧显示层；旧层只保留与当前画面相交部分，当前覆盖达到需要且过渡结束后清理。弱网长时间未齐备仍显示 fallback／缓存，但不能累积每个 zoom 层。连续越多级只请求当前目标 z 和所需视野，不按 z3→z15 遍历所有档。无图区域不声称“已加载完成”。

## 7. OSM 服务政策决定周边与预热边界

### 7.1 默认官方服务：按需优先

本轮查阅的 [OSMF 标准瓦片政策](https://operations.osmfoundation.org/policies/tiles/) 明确区分正常当前视野及 modest short-range look-ahead 与未观看区域的预取，禁止后台预种区域、离线包和自动遍历。**相册封面页预测五册周边并下载官方瓦片不可实施。** 官方服务无 SLA，因此必须保留失败底层与可用操作。

默认 profile：只请求人正在看的当前 z／视野，必要保护带先从 0 开始；如实测出现交互边缘缺口，可在真实拖动方向增加很小的当前 z 边带（上限一格、候选仅边带短期需要、并发 1），按政策和实测双重收敛。不能把“有限”解释为始终预取四边整圈／整省／所有相册，不能从一个 tile API 名称推断可任意预热。

遵循浏览器正常 HTTP 缓存，官方 URL 使用 `https://tile.openstreetmap.org/{z}/{x}/{y}.png`，有效 Referer 不被应用策略剥离；不默认发送 no-cache，不加随机 cache-busting 参数，不通过域名轮换扩并发，不代理伪装绕限制。浏览器默认 UA 正常，不要求前端设置被浏览器管理的 User-Agent。缓存过期按 HTTP 重新验证，不把应用内缓存无限期当有效新图。

### 7.2 相册首屏后的可实施预热

封面 decode、纸纹／字体就绪、环绕停稳且当前照片不忙，再空闲约 1200ms：

- 动态装载轻量地图模块、Mercator helper、行政边界和轻量 NE 回退站内数据；站内静态 URL按真实源码版本缓存。
- 为当前前景／选中和其余合法锚点计算预测视野、候选 XYZ key **但不设置 img.src、不 fetch 官方瓦片**。
- 整理当前会话已经合法显示过的有效瓦片缓存；不因回到封面页扩展下载。
- 当前原图、封面拖动、筛选、hidden/离页、省流／2g／离线时停止可选站内预热。可选站内任务预算建议上限 250KB 原始字节＋单并发，含代码／数据和在途预约，待实际模块体积调优；不是旧 500KB NE 默认预算。

不要提前 preconnect 第三方作为默认替代预热；它仍建立外部连接，可在用户明确按下／聚焦地图入口时评估。点击地图后才请求实际当前瓦片；用户立刻打开时直接复用已准备代码／基础数据，不要求等待所有预测计算。

### 7.3 显式允许预取的服务：条件分支，非当前默认

若以后选用**明确允许预取**的 OSM-derived XYZ 服务，仍保持 OSM 主地图、许可和暖色视觉；但提供者更换涉及底图文字／样式和授权，不属于本轮自动动作。policy profile 必须由核实条款配置，不能因为 URL 是 localhost 或第三方就默认允许预取；未知服务采用禁止预取的保守值。

许可确认后才启用相册预测：当前前景／选中优先，其余独立 bbox 取集合去重；同一预计 z、每位置有限当前视野，单并发，总计建议≤8片和≤300KB估算字节／访问（两者先到即停）。字节无响应可读信息时用实测保守单片上界／片数，不伪造精确预算。不预取多级栈或照片原图，不为某个首次点击视野之外区域继续下载。其收益与官方默认模式分别测试／报告。

## 8. 加载队列、取消、渐进显示、缓存

### 8.1 默认实现路线与待证分支

优先保持发布的 img 展示方式，用应用队列控制何时设置 src，保持浏览器 HTTP 缓存和跨域显示能力。每条任务拆为 queued→loading→decoding→ready／failed／canceled，缓存键含 providerId、templateVersion、tileSize、z/x/y；可见中心／相册关注点优先于边缘，必要有限 look-ahead 最后。实际瓦片中心距离用屏幕坐标而非猜经纬度。

应用总瓦片在途初值最多 4，必要周边最多 1；站内基础／代码请求与原图独立统计，原图开始后纯后台暂停，可选外围在途释放。当前可见瓦片不能因一个消费者卸载被其他页面内使用者误取消；共享 owner 引用和手动 retry 保留 ready 结果。原图正在加载时地图未显示则瓦片新请求应为零。

**img 的取消为尽力释放，不保证传输物理立即停止。** 移除引用／src、解绑回调、generation 和 dispose 只证明不再应用旧结果；记录 aborted／already-completed／decode-abandoned 和真实网络终止窗口，不能称“AbortController 已取消图片”。旧队列的 run/AbortSignal 需适配图像资源释放回调，不能给 img 塞一个不生效的 signal。

如同提供者已验证允许 CORS，且测试证明 image 取消不足，可评估 fetch(signal)→blob→objectURL→img.decode，实现明确取消／HTTP状态；仍用默认缓存和 Referer。**CORS、opaque response、Content-Type、decode、内存和 ObjectURL revoke 必须先验证**，不以 fetch(no-cors) 的 opaque 响应作为可读 PNG，不为跨域像素读取加新代理。fetch 路线不可用则保持 img 路线并如实记录物理取消限制，基本体验不依赖 Worker／canvas。

### 8.2 瓦片显示与错误

每片 load/decode 后立即提交显示，订阅／DOM 更新按 rAF 小批合并；不等待 Promise.all 齐全才能显示地图。img.complete 还要验证 naturalWidth；decode 失败与过时返回不进入 ready。异步 decode 不免除 CPU／GPU 和主线程挂载成本，当前原图 decode 期间限制后台 decode，并记录重叠成本。

某片失败只露出发布版 NE 底层／已缓存旧图，pin 和按钮可操作；不让一片 error 隐藏整张图，不自动关 OSM 模式。首屏地图是否可操作与图像覆盖率分别表示；透明／错误片不计入覆盖率。错误处理优先沿用现有页面重试能力，不新增可见说明／侧栏／按钮；需新文案时单独列出供用户确认，不悄悄改文字。

瞬时失败至多一次有限重试（建议 0.5–1s 退避），404 不无限重试，连续网络失败进入短暂熔断；明确收到 429/Retry-After 或 403 服务限制时停止重试，不换域或强刷。img 路线看不到 HTTP status 时只能按通用失败策略并用浏览器网络证据判别，不伪称能读取 Retry-After。失败图片需移除 hidden 状态／重建受控任务后才能恢复，重试不能清掉其他成功瓦片。

### 8.3 缓存、版本和生命周期

优先内存图像复用＋浏览器 HTTP 缓存，不实现离线下载、Service Worker、IndexedDB 全国瓦片包。HTTP TTL 是服务器契约，应用内 LRU 是解码内存上限，二者分开。官方瓦片 URL 不加本应用 build hash；模板更换只使对应 provider 内存键失效，不能用 cache:no-store 清全浏览器缓存。

256×256 RGBA 解码约 256KiB／片只是下限，不代表浏览器实际堆；建议冷／闲 ready 片约 32–64片或估算 16MiB 软上限，活跃屏幕必要瓦片优先，另限旧层和 DOM 数量。释放离屏 image／ImageBitmap／ObjectURL／回调，不能长期缓存 Promise、blob和image三份副本。真实高 DPR和大屏要测内存峰值；后台冻结／BFCache 恢复时重算视野与缓存有效性。

地图→照片→地图保留 state 与有限缓存，照片→封面→重开地图仍全国；从地图离页无新的地图请求启动，背景／timeout／retry/rAF／idle callback／监听均清理。StrictMode 双 effect、重复进入至少10次、resize和Provider配置改变不产生重复实例／旧cache穿透。无 Network Information API 按保守策略；无 idle API 使用可取消小任务，不能导致provider切换。

### 8.4 不清浏览器缓存的站点更新契约

以下是待实施契约，不是当前已经具备的能力。HTTP 缓存、应用 Promise／decoded 缓存、浏览器模块实例、BFCache 和可能存在的历史 Service Worker 分开检查，不用一个“清缓存”动作掩盖错误。

| 对象 | 版本与更新规则 | 风险及边界 |
| --- | --- | --- |
| 入口 HTML | 优先使用每次验证的 HTTP 策略；能控制服务器时评估 `no-cache`，允许 304 复用内容 | 当前 Pages 实测 max-age=600，普通重新访问可能在剩余新鲜期复用旧入口；不是永久锁定，也不能保证发布后精确 10 分钟全网更新。CDN、部署完成时间和离线需单列 |
| Vite JS／CSS 与模块依赖 | 保留内容 hash 文件名，内容变即新 URL；入口引用一套一致的构建产物 | 旧入口仍引用旧 hash；仅生成新文件名不能主动替换已打开的应用。长缓存／immutable 只适用于真正不可变 URL，且响应头能力要核实 |
| 站内边界 JSON／fallback／会变化的图片 | 能纳入构建则使用内容指纹 URL，否则由同版资源清单选择版本路径；不可变文件保持原 URL和字节 | `china-4.0.2.json` 名字含上游版本不代表本项目每次修改已换版本。同 URL 改字节并 force-cache 可一直读旧副本；优先局部修正实际相册调用链，不顺手重写 520／其他页面 |
| provider 配置及应用内缓存 | provider／template／schema／geometryVersion 纳入相关内存键；版本切换取消旧 owner／generation，重新按新规则计算 | 只改 JS 常量／内存键而不改站内数据请求 URL，不能使 HTTP 旧数据失效。不要把 releaseId 塞进官方 tile URL |
| OSM PNG | 默认浏览器 HTTP 缓存；新鲜期复用，过期按服务条件请求，未变 304／变更 200 更新 | 网站发布不使 OSM 内容立即变化；无可读跨域验证头时交给浏览器，不能每次先下载再比较图片、批量 HEAD 探测、随机参数或默认 no-cache |
| 半年维护标准 | 每半年复核政策、模板可达性、版权、坐标源与性能；记录 lastReviewedAt／nextReviewAt、负责人和结果 | 不是瓦片半年 TTL，不是每半年自动抓取官方区域。自托管／许可明确允许的快照另立来源、生成时间、版本、许可及更新流程，未授权不建设 |

`no-cache` 表示复用前验证，区别于 `no-store`；不对全部资源禁用缓存。缓存比较交给 HTTP 验证机制，弱 ETag 是验证标识而非字节完整性校验。应用缓存不得只存永久 fulfilled Promise 而忽略 TTL／版本；失败 Promise 要可重试。`force-cache` 可以返回过期缓存，仅限已确认不可变／版本化的站内 URL，审计实际调用点和兼容性后处理；这一规则不得套到官方瓦片强制校验上。

同版站内资源在一次应用生命周期内固定版本，基础边界、投影与标记不可混用 A／B 数据；加载结果提交前验证 schema、generation 和几何版本。服务错误、HTML 误作 JSON／PNG、404 响应不写入 ready。自有站内旧数据仅在与当前 schema／投影兼容时兜底；在线失败保留当前可用画面，不保证离线获取从未缓存的资源。

### 8.5 旧页面、部署资源与回滚

旧页从 Hash 路由返回相册不会重新请求入口；BFCache 恢复可能保留整套旧应用。默认允许旧页继续工作，下一次正常文档装载／入口重新验证获得新版。不在拖动、缩放、封面动画或当前原图加载时自动刷新，不为更新常驻轮询或增加可见弹窗。若以后要求长开页面主动发现新版，另行确定版本检测频率、同源更新入口、断网退避与安全提示；不能把单次 reload 当作绕过 Pages／CDN 缓存的保证。

**旧资源保留是发布前置问题。** 现有脚本整目录删除可能破坏旧 HTML 和未加载的 lazy chunk；优化实施应先在临时输出目录验证候选打包／资源保留方案，不执行根目录同步。以后发布时，新入口引用的全套资源须先可用，并保留允许继续服务的旧版本静态依赖闭包（包括地图 JS／CSS／JSON、Worker、必要公共资源），禁止新旧入口引用缺失文件。初始保留窗口建议至少 7 天且至少最近两次允许公开的发布，窗口内多次发布不能只保留“前一版”；这是项目待验证取舍，不保证无限久的标签页。以实际客户端生命周期、空间预算和回滚需求确定最终值，清理用 release manifest 定向做，不无限堆积原图或复制私人文件。

旧资源保留必须服从 SCOPE：不以兼容名义重新发布七夕、DEV 测试、已撤销授权的内容或敏感资源；此类资源立即撤除优先，旧页面可用性不能凌驾撤除要求，记录例外及已有失败恢复路径。共享无 hash 的 HTML／JSON 不能同时冒充多个版本，必要依赖须版本化。部署平台是否提供原子切换、旧资源保留和响应头控制均待核实，不能将本地 copy 的顺序描述为已解决线上原子发布。

对于旧 chunk 404／网络中断，区分“可重试传输失败”与“旧版本被移除”；同 URL 重试不修复缺失文件。核实仓库锁定 Vite 版本支持的 `vite:preloadError` 或现有 ErrorBoundary／重试路径，优先沿用现有文案和用户触发刷新，保持 Hash、筛选／相册／地图可恢复现场；如恢复状态落入 sessionStorage，仅存最小非敏感状态、带 schema／有效期并校验，不能恢复旧组件实例或下载状态。需要自动恢复时单列评审，必须可判定新版、限制次数、防刷新循环，不能吞掉错误后留空白。当前没有相关自动恢复实现，本计划不把它写成已完成。

回滚以完整允许公开的 release manifest 回滚入口和依赖引用，保留已经缓存 B 入口的用户所需 B 资源至窗口结束；不能回滚 HTML 后立刻删除 B 文件。A／B 的资源 schema、provider配置和内容边界一并验证。应用内存／存储版本迁移只操作本应用自己的键，不清用户照片数据、其他网站缓存或所有 Service Worker。历史 worker 注册／controller 须在浏览器确认；未发现注册时不新增 Service Worker 来解决本轮更新问题。

## 9. 内容、版权、隐私与策略记录

底图文字已嵌在 PNG 内，不尝试过滤／重排或用 NE 的“无文字”显示替代。滤镜挂在一致容器；截图／录屏裁切、手机底部按钮、safe area、fallback／错误态都检查左下版权可见和可读。外部／本地模板判断不能作为隐藏版权的唯一条件，QA 合成图也保留产品既有信用文本。

[OSMF 署名指南](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)要求用户能知道数据来源、许可并获得更多信息。发布当前不可交互文本先保留，不自行改动其文案／位置；核查站点是否已有容易找到的版权／许可信息链接，无则以最小补足另列任务（不等同未经授权重新设计地图控件）。许可可见性不能被性能目标削弱。

服务接收 z/x/y、Referer 和通常网络信息；不附带邮册 ID、住址、照片 URL、EXIF 或精确 GPS。保留当前不发送地址的边界，但不能宣称第三方看不到浏览地域。检测站点 Referrer-Policy 时保证官方要求的 Referer 存在，同时避免把私密路径／query 作为自定义标头或瓦片查询参数。

官方服务政策在实施前再核对日期；未知提供者条款未核实不启用预取。政策profile、模板、最大 z、tileSize、预取能力、来源／许可链接统一配置，DEV和生产共用，无 DEV 静默替代。更换 OSM-derived 服务需重新检查字样、边界、版权、token安全和策略，不在本轮购买服务或放入敏感密钥。

## 10. 可复现验收：OSM 基线对 OSM 优化

### 10.1 不向官方服务批量压测

自动性能／故障／缓存矩阵全部使用站内**合成 XYZ fixture**和可控制 HTTP 服务，固定图像尺寸／字节分布、延迟、带宽、TTL、失败／429/CORS策略、相同地图视野。可在测试中截获模板请求并本地响应，必须证明不漏真实外网。fixture不是线上 OSM，不用它宣称真实官方网络延迟。

真实服务仅少量人工正常浏览当前视野，保留缓存、Referer和版权；不跑重复冷缓存headless拖动／zoom全矩阵，不向官方请求发 no-cache，不下载区域包做测试。视觉一致性用合规当前浏览对照，性能确定性用fixture。已存在NE测试默认 Network.setCacheDisabled 与自动遍历锚点只可用于站内 fixture，严禁原样指向官方 endpoint。

### 10.2 环境与矩阵

同 f5ce547 源码基础、同工具／lock／内容／有效配置，先未优化 OSM，再优化 OSM，分别 DEV 与 dist preview；不要把“版本对齐”与“优化”混成一个 A/B。基线完整导出和恢复记录保留。

至少1440×900、390×844、360×640、844×390；桌面鼠标／键盘、模拟触摸与一台真实手机分别记录；Chrome之外补可用Safari／Firefox，无法取得标未测。fixture正常及受限网络（建议1.6Mbps下行／0.75Mbps上行／150ms RTT／CPU4×），记录工具实际单位。冷fixture HTTP、新页面HTTP暖、当前会话decode缓存；每场景≥5次报告所有样本／中位数，少于20次不宣称稳定总体p95。

场景：立即开地图／停留3s／8s、首次进入省域、连续zoom／跨多个z／快速反向、长距离拖动／短平移、照片加载中开／关地图、点击全国、照片返回现场／封面重开、tile边界、海岛与bbox边界、DPR1/2/3、横竖屏与小高度、saveData/2g/offline/hidden/API缺失、单片失败／恢复、429/403、timeout、stale decode、StrictMode、10次离页重进与BFCache。坐标锚点用当前实际公开坐标；不把旧pin重叠鼠标问题偷偷列成优化回归通过。

### 10.3 指标与门槛

| 指标 | 统计定义 |
| --- | --- |
| 相册可用／当前原图 | 前景封面 decode且可操作／当前原图 decode；保持原有120ms；区分预热有无 |
| 地图可操作 | 基础边界／pin／输入可用；不与全部瓦片完成混为一谈 |
| 首片、中心片、覆盖率 | 新目标开始到首片解码并paint／视野中心覆盖；90%与100%可见面积正确覆盖分开，旧层占位另报 |
| 正确z清晰覆盖 | 当前选定z实际就绪面积；放大父片／NE底层不算本z完成 |
| 网络成本 | 当前、有限边带、取消／重试、缓存命中分别计片数、请求、编码传输；入口后的总成本含站内预热 |
| 取消效果 | 逻辑释放／generation丢弃与CDP实际网络终止时间窗分开；记取消前已传字节 |
| 资源与交互 | 并发槽位／实际峰值、decode时间、≥50ms长任务、帧间隔、旧层DOM、decoded资源／heap估算 |
| DEV／生产一致性 | provider配置、XYZ集合、Mercator锚点、样式／文字／信用、最大z/scale、同等ready与错误处理 |

跨域 ResourceTiming 可能缺少 TAO 导致字节为0，不把0当免费缓存。fixture／CDP记录体积和状态，人工线上受限项如实报告。Long Task browser支持差异和网络物理峰值单列，不能仅用应用槽位证明网络最大值。

硬门槛：G0通过；官方封面页 tile请求为0；不请求旧NE明细／索引；真实视野不漏必要tile，保护带符合policy；同key不并发重复下载；旧响应不污染画面；逐片显示并保留fallback／既有交互；原图优先与有界清理；内容／文字／滤镜／版权和既有行为无回归。

初始性能目标在fixture同条件下建立：

- 封面可用与当前原图中位数劣化≤max(基线5%,50ms)，预热后无额外≥50ms主线程长任务。
- 当前中心片和本z 90%正确覆盖的中位数争取降低≥20%；原实现已有局部下载，若主要延迟来自服务则目标可能不可达，必须记录实测，不借旧NE的40%数值。
- 非可见请求相对发布保护网格显著减少；报告每视口实际比例，不能为达到50%强制裁掉需要tile或模糊文字。
- 同一视野短时往返优先复用有效HTTP／decoded缓存；并发默认≤4逻辑槽位，无请求／失败／取消风暴；持续输入帧间隔p95目标≤33.3ms，注明刷新率与窗口，保持真实动画。

目标未达时从无用集合、队列、layer切换、decode、滤镜合成和服务延迟分别分析。地图服务慢不是扩大预取许可的依据；不能删底图文字／版权、降原图质量、默认切NE、放宽数字后报全通过。

### 10.4 命令与文档验收

实施后在明确的OSM工作树 `Cabinet` 执行 `npm run verify`；保留类型、build、预算、草稿、链接、路由检查。适配NE专项门禁后新增XYZ纯逻辑测试、fixture网络／队列／清理与DEV/preview一致性检查；每个命令和退出码回填，不仅贴“verify通过”。build只生成该工作树dist，不运行build:site。

本轮仅文档交付按当前本地仓库AGENTS执行verify，仍是NE工作树验证；它不能通过G0或说明OSM已实施。当前本地草稿／smoke的旧七夕判断也不能覆盖SCOPE的发布排除。

### 10.5 缓存升级门禁 G1：同浏览器 A→B→回滚，不清缓存

在同 origin／base path 的可控本地发布 fixture 用生产构建测试：保留同一个浏览器 profile、HTTP 缓存、存储和旧标签页，不以新 context／无痕模式／Disable cache 证明升级。DEV 的 HMR 不算上线缓存验收。自动测试仍禁止打到官方 OSM，用合成瓦片检查正常缓存行为；本轮只是设计矩阵，尚未执行。

1. A 入口打开首页、相册及地图建立缓存；另一个 A 标签页留着尚未加载地图 chunk。记录实际请求 URL、Cache-Control／Date／Age／ETag、fromDiskCache／fromMemoryCache／304／200、build及schema版本，分辨 HTTP 与会话解码命中。
2. 在不改 origin 的同一测试服务切到 B：HTML 新鲜期内复用 A 是该策略的预期，A 要仍可用；过期／正常文档重新验证后取得 B，新内容和新 hash JS／CSS／数据可见，无混版。仅切 Hash 仍是 A 也要记录，不能误判“缓存永久不更新”。测试 max-age=600 的真实配置及可控短 TTL，不能只用 no-store 的简化环境。
3. 数据不变验证 304 可正常复用，内容改变验证 200／新 URL 更新；拒绝将旧 ETag 错配新内容。资源内存键已变但 HTTP URL 没变、共享 preload force-cache、失败 Promise、基础数据 schema 改变分别注入，证明版本化能防止陈旧／错位数据。
4. 让旧 A 标签页在 B 发布后首次开地图：保留窗口内依赖仍可用；人为模拟窗口后旧 chunk 404、单次断网与 stale入口，证明沿用现有恢复路径、不会无限 import 重试／reload、现场可恢复且不白屏。hidden／BFCache／10次切页不持续检测或新发后台瓦片。
5. B→A 回滚、新开 B 缓存页及两个版本并存，均按各自依赖／schema运行；快速连续发布 B／C 检查保留窗口内多个旧版本，清理后无禁止公开内容。检查入口引用的完整资源闭包、Hash直达和子路径，不手工复制根产物。
6. 站内可选预热和原图互相抢占、省流／弱网／离线下更新失败仍能用已允许缓存的部分；过期 OSM 模拟片条件验证、304与200、decoded旧片刷新、provider切换不跨服务复用。没有缓存的离线区域使用既有轻量回退。

G1 通过要求：不要求用户清缓存；入口达到可验证的刷新条件后取得 B；新旧页面在约定支持窗口内都可用；站内代码／数据版本一致；失败恢复有界；不清全站缓存、不打断当前照片、不绕过 OSM 缓存。现场 Pages／CDN 的收敛时间须在以后获得发布授权后少量人工验证，本地 fixture 通过不能填成真实线上升级已通过。若托管或旧资源保留未解决，标记发布前阻塞项，不用“所有更新自动即时成功”代替证据。

## 11. 实施回填（2026-10-05–06）

> 11.1–11.6保留10月5–6日本地阶段原始结论；10月6日新增发布授权与修复以11.7为当前事实，历史“未接真实发布/无提交”不代表新阶段状态。

**验收结论：implemented-with-validation-gaps。** 完整 OSM 基线已在隔离目录实施；本地 G0、G1、功能与必要单测通过，弱网收益明确，正常网络20%目标和一个持续输入窗口未达标。真实线上目检、托管升级与真实设备仍未验证，不具备发布验收结论。没有覆盖原目录、恢复 NE 主地图或执行发布。

### 11.1 授权、基线、目录与工作保留

已先读取 AGENTS、SCOPE、本计划，随后在原 SCOPE 和隔离 SCOPE 登记本次源码／数据／测试／文档实施授权；第1、12、13节“仅文档”记录属于制定计划时的历史，不再代表此次实施权限。

| 项目 | 实际结果 |
| --- | --- |
| 原目录 | `原工作树`；master仍为 `8eb34f34b47963450e00aadcf5c305748912cf94`，全部原有业务修改保留，**未同步隔离实现** |
| 实施目录 | `隔离工作树`；完整 `f5ce5471ccbf04be7f6ad75448a567b0a732e9c3`，分支 `codex/osm-map-loading-2026-10-05`，无新提交 |
| 原发布候选 | `.release-candidate`仍为独立 `4913d5a` detached树，未修改、未复用 |
| 远端／线上 | GitHub API及HTTPS ls-remote均为完整f5；初次SSH访问失败后HTTPS核对成功。线上主JS／地图JS／地图CSS原始字节的Git blob均等于f5，见 `online-provenance.json（本地私有工作证据，未入仓）`；这是来源核对，不是线上交互目检 |
| 依赖与源码 | 实际依赖匹配f5锁定版本；lock SHA256 `3639cd62b20b640155334781baf948e4fbfc139edfbcb62533c45337e8441b01`；最终222个非Markdown源码／脚本／lock聚合SHA256 `a880dc7364a9bd1adf6cebc04ef55aa32e35dfa3170e1fa04e119e87fac49784`，见 `runtime-lock.json（本地私有工作证据，未入仓）`、`candidate-source-fingerprint.json（本地私有工作证据，未入仓）` |
| 完整保护 | 3237个文件、1,459,038,999字节的tracked／untracked及必要ignored副本逐项SHA256核对；依赖、可重建dist、Git内部与未改的独立候选未重复复制，排除范围见 `restore-proof.json（本地私有工作证据，未入仓）` |
| 实际恢复 | 物理恢复旧PolaroidGallery、未跟踪requestQueue、SCOPE、旧计划及11,957,060B原图，五项字节一致；从旧HEAD archive应用完整binary tracked.patch，git apply退出0，tracked恢复与原内容一致（检出CRLF归一化），见 `tracked-restore-proof.json（本地私有工作证据，未入仓）` |
| 原目录最终保护核对 | 回填完成后重核3237项，仅允许本轮六份定位文档／ignore及本计划变化，无原业务或根产物变化；最终明细见 `original-preservation-final.json（本地私有工作证据，未入仓）` |

保留点为上述任务目录下 `preserved/`、`tracked.patch`、`old-head.zip`、`restore-proof/`、`tracked-restore/`，完整f5导出为 `baseline-source.zip`。这些本地副本包含原私人工作，不进入可发布闭包。没有删除实验数据。恢复应先在另一个临时目录核对，再按文件迁移，不能将binary patch直接覆盖脏master。

原工作分类：旧NE396块／worker／道路地点完整实验及其测量全部留在原目录和快照，不接入OSM运行时；队列、token取消、LRU、rAF与首屏后预热的思路重新适配OSM XYZ，而非照搬NE数据／投影。地图坐标、五册87张内容、原图与缩略图来自完整正式f5，未借此合并其他历史改动。七夕、DEV预览、其他页面、规则迁移及私人配置仍只保留，不迁入本次发布候选。

从原 `Cabinet` 运行 `npm run dev` **仍展示原目录旧实现**；npm命令本身不静默切地图提供者，差异来自源码树。当前隔离DEV在 `http://localhost:3020/#photos`，默认OSM；生产 `Cabinet/dist`也是默认OSM。验收fixture曾显式设置相同 `VITE_GALLERY_OSM_TILE_URL=/xyz/{z}/{x}/{y}.png`；测试服务3021/3022/3023/3025–3028均已关闭，3020保留供查看。原服务器未停止。

### 11.2 修改文件与实际实现

以下路径相对**实施目录**，原目录只回填／定位文档及ignore：

- 相册集成：`Cabinet/src/pages/gallery/GalleryMap.tsx`、`PolaroidGallery.tsx`、`GalleryPhoto.tsx`、`data/galleryContent.ts`；新增 `loadPriority.ts`、`gallerySession.ts`、`useMapWarmup.ts`、`mapRecovery.ts`、`resourceUrls.ts`、`Cabinet/src/gallery-resource-urls.d.ts`。
- 瓦片：重写 `map/OsmTileLayer.tsx`，新增 `map/xyz.ts`、`map/tileProvider.ts`、`map/tileCache.ts`、`map/mapResources.ts`；`map/gallery-map.css`只补同色无下划线许可链接及键盘焦点，不改暖色滤镜／位置／尺寸。许可文字不变，OSM与ODbL分别链接到许可页。
- 资源与临时发布准备：`Cabinet/vite.config.ts`、新增 `Cabinet/scripts/gallery-resource-plugin.ts`、`prepare-retained-release.mjs`；`import-gallery-collections.py`同步生成器URL契约；`Cabinet/src/shared/load/mediaPreload.ts`移除未使用通用preload中的force-cache。
- 单测：新增 `map/xyz.test.ts`、`map/tileCache.test.ts`、`mapRecovery.test.ts`、`Cabinet/scripts/retention.test.mjs`，并运行既有 `galleryModel.test.ts`、`map/geography.test.ts`。
- 说明：隔离 `SCOPE.md`、`docs/ARCHITECTURE.md`、`Cabinet/README.md`、`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`、`map/README.md`及本计划／测量摘要。原目录四份说明明确“原目录未迁移”，不把隔离事实改写成原NE树已经切换。

| 参数／行为 | 实际选择与理由 |
| --- | --- |
| 可见集合 | Web Mercator半开边界，屏幕相交边缘瓦片已经提供极小必要余量，额外保护行0；未量得尺寸时0请求；跨块行政几何和海岛保持原数据，不按tile裁行政图形 |
| z与清晰度 | 原公式floor(3+log2(scale))，范围3–16，实际maxscale4096到z15；DPR1/2/3不额外升z，不降文字质量 |
| 调度／显示 | 中心像素距离排序，4个含decode的逻辑槽；每片decode就绪即显示，每帧至多一次通知，不等全国全部片 |
| 取消与服务 | 标准OSM及同源模板默认HTTP缓存fetch、credentials omit、AbortController→blob URL→Image.decode；取消／过期／淘汰撤销blob，token拒绝旧响应。未知跨域模板仍img尽力取消，CORS／缓存行为未验证，不使用opaque/no-cors兜底 |
| 缓存 | provider完整模板/256/v1/z/x/y隔离；48片或16MiB（RGBA估算+编码blob）；当前活动集合优先的软限。内存最多60s，同时按可读max-age/Age/Date/Expires缩短；缺少可判断有效期或no-cache/no-store不复用decoded。60s是内存上限，不覆盖HTTP有效期 |
| 旧层 | 仅已有decoded、与新视野相交的一层旧z，最多480ms；不请求父片，旧层不计正确z覆盖 |
| 故障 | 12s单片超时，最多一次750ms重试；已知404不重试，403/429立即停止新启动，其他连续6次失败停止；沿用“重试详细地图”显式恢复。前景JSON以独立AbortSignal在关闭时取消，进入地图先取消可选预热，取消时同步清pending Promise以支持StrictMode／重入；已验证的解析结果可有限保留。JSON15s超时、MIME／SHA256（WebCrypto可用时）／结构校验，失败Promise可再试 |
| 生命周期与优先级 | hidden／offline／pagehide／当前原图busy暂停，恢复先重核需求；关图解绑监听／timer／DOM，相册退出清tile session。原图仍120ms，只请求当前一张，high优先级，busy覆盖decode，按原版onLoad显示；无URL不占位，卸载移除src |
| 有限站内预热 | 封面加载并decode完成、字体就绪、动画停止后1200ms＋idle（fallback可用），仅map代码及三份JSON，数据串行180233B；观测总原始body最大215661B <250000B，官方XYZ0。saveData/2g/offline/hidden／原图打断；离线事件取消pending预热；已发出的import不能物理取消。未预取其他相册区域 |

48片／16MiB限制兼顾四视口DPR矩阵与短时往返，尚无真实heap结论；4槽取得弱网收益且避免扩大并发，物理峰值另列。取消能力不承诺所有浏览器立即终止TCP。与草案原生img路线的实质偏差：G1发现同文档img.src可能跳过过期重新验证，因此在单次HEAD确认标准服务CORS后改用默认缓存fetch/blob；没有给OSM设置no-cache／force-cache或版本query。

### 11.3 缓存版本、临时闭包与G1（发布集成前的历史）

入口仍由托管控制；当前线上HEAD为 `max-age=600`。不做poll、自动强刷、清站点缓存或Service Worker。Hash变化继续旧应用是预期，正常文档获取达到可验证条件后才换新版。JS/CSS使用Vite hash；实际galleryContent的87份thumb、87份original和mapResources三份JSON共177项使用 `gallery/versioned/<SHA256>/<name>`；DEV／build同URL，所有177项输出与源字节均一致，见 `resource-byte-proof.json（本地私有工作证据，未入仓）`。ECharts4.0.2是来源版本，应用缓存版本是内容hash。WebCrypto不可用时仍有MIME／几何结构检查，但不宣称运行期SHA校验。

force-cache审计：完整f5的通用preload定义没有实际相册调用者，已改default；相册封面／当前原图使用img的版本URL，JSON常态default，只有用户显式重试坏的站内JSON使用no-cache条件验证。OSM始终default；没有部署缓存清理脚本。

临时 `prepare-retained-release.mjs`以完整文件SHA清单先复制允许依赖、最后切入口；A359项，B/C详见G1，保留7天内全部版本且至少最新两版，活动回滚版额外保留；清理限定manifest中已过期、未被保留版本引用且hash仍匹配的文件。版本化B不再保留未被B使用的同名旧gallery别名，A仍保留其真实旧依赖。URL碰撞拒绝、七夕／DEV／敏感配置拒绝；回滚先校验闭包及入口hash，缺依赖或错入口不会切当前入口。单测验证失败恢复及撤除例外，旧版本保留绝不优先于撤除许可。这是临时目录准备方案，**未接入真实copy-site，也未证明托管原子性**。

G1使用同一 `g1-profile`、相同origin／base path、生产构建、保留存储与旧标签页，不使用route／Disablecache／清缓存。最终19项全部通过，[g1.json](evidence/osm-release-2026-10-06/prior-g1.json)记录实际响应头、disk/cache事件、server条件请求及200/304：

- max-age600仍新鲜时A继续可用；短TTL真实等待过期后取B；旧A首次lazy地图仍有完整依赖。
- B三份数据真实调用内容hash URL；未变模拟XYZ正常304，改变ETag正常200；C真实临时schema2数据和匹配解析器build，使用新内容hash200，旧B仍解析旧schema。
- 10次关图重进后无后台瓦片；真实 `pageshow.persisted=true` BFCache恢复；弱网控制仍可用，离线允许缓存／轻量fallback。
- 连续B/C保留A/B/C闭包；回滚A入口保留B依赖；已缓存旧chunk用CDP传输故障、未缓存D旧chunk用真实server404验证有界boundary。一轮用户import重试后，第二次用户动作保存schema1/10分钟最小现场并正常刷新恢复B，不自动循环。
- decoded到期恢复后正常条件验证。此项仅应用Date注入+61s推进内存年龄，HTTP2s TTL实际等待到期，并经真实BFCache恢复；不冒充真实等了61秒。官方瓦片网络及SW注册均0。

一次重复G1的C200断言失败，原因是同profile中上轮C已被正常缓存，页面与schema没有失败。证据 `g1-C-already-cached.json（本地私有工作证据，未入仓）`保留；重新生成真正新内容hash的临时C后19项通过，未清任何缓存。未知第三方provider的真实缓存升级和当前线上是否曾有旧SW不在本地0注册结果覆盖范围。

### 11.4 G0、OSM对照与交互证据

优化前已从完整f5执行四视口同源码DEV／生产G0并冻结基线，[g0-baseline.json](evidence/osm-release-2026-10-06/prior-g0-baseline.json)通过；优化后相同fixture再过G0，`g0.json（本地私有工作证据，未入仓）`。最终默认标准OSM配置的DEV／生产另验 [g0-default.json](evidence/osm-release-2026-10-06/prior-g0-default.json)：官方URL的浏览器请求在发网前全部截获为本地合成PNG，没有下载官方图片；地图几何／锚点／XYZ集合、暖色filter/opacity/multiply、信用文字和zoom交互一致。对应PNG在任务目录。真实线上浏览器视觉因工具超时未取得，三份线上blob一致不能替代该项。

确定性对照是**未优化OSM→优化OSM**，不是NE→OSM。Chrome 154.0.8037.93、Playwright、同f5依赖、1440×900和390×844；每个网络／宽度前后各5次，共40次。冷fixture context通过拦截外链隔离，网络弱条件200000B/s下行、93750B/s上行、150ms latency、CPU4；256px RGB合成PNG123462B、服务延迟90ms，已冻结 `baseline-dist/` 与 `optimized-fixture-v3-dist/`。外链字体未联网，真实字体视觉未验。本机负载未保证完全独占，正常网络小幅差异只作为本机样本。计时从调用地图click前开始，包含Playwright输入等待与原页面过渡，不能解释成纯瓦片服务器延迟。面积只算当前z decoded/paint，排除旧层；body字节是服务已发送200响应体，不是完整wire成本，也不是官方典型PNG大小。

| 视口／网络 | 首片ms | 中心ms（降低） | 当前z90%ms（降低） | 100%ms | 请求数中位数 | 200响应body字节中位数 |
| --- | --- | --- | --- | --- | --- | --- |
| 1440／正常 | 1493→1414 | 1591→1414（11.1%） | 1701→1530（10.0%） | 1701→1530 | 36→8 | 3703860→987696 |
| 1440／弱网 | 9043→4690 | 9192→4690（49.0%） | 18642→7356（60.5%） | 18642→7359 | 30→8 | 3703860→987696 |
| 390／正常 | 1506→1454 | 1706→1454（14.7%） | 1706→1677（1.7%） | 1789→1677 | 39→12 | 4444632→1481544 |
| 390／弱网 | 9060→4870 | 16427→4870（70.4%） | 18394→10148（44.8%） | 20094→10148 | 31→12 | 3827322→1481544 |

40次当前z100%均完成、0超时；5样本只报告中位数，不宣称稳定总体p95。所有样本及首片／中心／90%／100%／cover／长任务在 [独立OSM测量摘要](osm-map-loading-measurements-2026-10-05.json)、原始 [measure-before.json](evidence/osm-release-2026-10-06/prior-measure-before.json)／[measure-after.json](evidence/osm-release-2026-10-06/prior-measure-after.json)，未覆盖旧NE测量。正常网络中心／90%改善尚不足20%，输入等待与过渡占总时间较高，不能为了目标改交互或扩大官方预取。弱网中心与覆盖均达20%目标。

封面／原图另作真实decode的前后各正常5次、弱网5次共20样本（1440宽），仅当前原图11,957,060B、tile0；source freeze为photo-final-dist，该正常下载场景与最终源码行为相同，晚加无URL／卸载保护另由取消检查验证；最后显式封面decode门禁在该照片场景已被测试自身提前满足，新增前景JSON取消在照片独立场景没有地图实例，最终预热／离线代码另由矩阵复验，没有宣称冻结照片build与最后build逐字节相同：

| 网络 | 全部前景封面decode ms | 当前原图decode ms | 回归门槛 |
| --- | --- | --- | --- |
| 正常 | 1282→1253 | 741→554 | 通过 ≤max(5%,50ms) |
| 弱网 | 12300→12666 | 63763→63724 | 通过 ≤max(5%,50ms) |

[photos.json](evidence/osm-release-2026-10-06/prior-photos.json)记录全部20样本、0页面异常。按真实manifest重新分类请求后，每样本恰好1张当前原图；先前宽泛versioned-JPEG筛选误把条带缩略图记在originalRequests中，原记录保留，计时未改。取消专测 [original-cancel.json](evidence/osm-release-2026-10-06/prior-original-cancel.json)：40ms内返回无当前原图请求，分段慢传单原图退出后owner清除且tile队列恢复；CDP ERR_ABORTED在退出约6.8ms后出现，浏览器已收9785B，服务排队写入字节另见该文件，不能将二者相等或套用于所有浏览器。初测将同名thumb误算为original、CDP type覆盖自定义标签，均保留旧日志并修正harness，未据此改产品行为。

四视口×DPR1/2/3合成矩阵功能75项通过，0页面异常／官方请求；额外7项（403、429各4个在途后停，坏HTML JSON及显式重试、缺decode/idle、双指／键盘／旋转）通过。[matrix.json](evidence/osm-release-2026-10-06/prior-matrix.json)、`extra.json（本地私有工作证据，未入仓）`。矩阵持续输入12个独立窗口（14次正反wheel＋900ms收敛，约60Hz headless），最终单独运行矩阵：11个p95≤33.3ms，一个844×390/DPR3窗口50.0ms未达标；此前并行浏览器测试360×640/DPR3出现50.2ms，原始matrix-before-final-lifecycle.json保留；没有把负载影响当作已修复，也不是20次独立总体稳定p95。逻辑peak4，server可观测物理peak8（取消关闭与新请求到达短暂交叠），server记录346次取消；不能声称网络物理并发也≤4。decoded内存使用RGBA+blob估算，未采真实heap；tile取消的请求头／部分wire成本没有精确测完。

最终补强另有13项预热契约（封面decode门禁、offline、缺API、省流、原图抢占）及3项延迟JSON关闭／重入／预热交接检查，均退出0且全部通过，见 [warm-contract.json](evidence/osm-release-2026-10-06/prior-warm-contract.json)、[json-lifecycle.json](evidence/osm-release-2026-10-06/prior-json-lifecycle.json)，以及 `already-aborted-warm.json（本地私有工作证据，未入仓）` 的0数据请求专项。新JSON请求与解析都保留同版本校验，功能矩阵与全部性能样本冻结在v3；最后仅补充已取消signal入口／异步import后守卫，正常未取消路径不变。v4另复验13项预热契约、已取消入口专项，G0／G1及verify使用最后build，不把两个build说成逐字节相同。

### 11.5 命令、退出码与证据

目录基于上述任务目录；生产门禁在 `worktree/Cabinet`，QA脚本在任务目录。最终结果：

| 命令 | 退出码／实际结果 | 证据 |
| --- | --- | --- |
| `npm run verify`（默认OSM，不设VITE模板） | 0：类型、build、预算、草稿泄漏、13份Markdown链接、关键路由smoke | `verify-final.log（本地私有工作证据，未入仓）` |
| `node --import tsx --test src/pages/gallery/map/xyz.test.ts src/pages/gallery/map/tileCache.test.ts src/pages/gallery/mapRecovery.test.ts src/pages/gallery/galleryModel.test.ts src/pages/gallery/map/geography.test.ts scripts/retention.test.mjs` | 0：26/26，0跳过 | `unit-final.log（本地私有工作证据，未入仓）` |
| fixture `npm run build`，C schema2 `npm run build`，D unique chunk临时outDir构建 | 均0；只本地输出 | `optimized-build.log（本地私有工作证据，未入仓）`、`C-build.log（本地私有工作证据，未入仓）`、`D-build.log（本地私有工作证据，未入仓）` |
| `node g0.mjs`（优化前／后）、`node g0-default.mjs` | 均0，四视口一致；默认URL仍合成响应 | G0三个JSON与PNG |
| `node measure.mjs before`、`node measure.mjs after` | 均0，各20样本；无覆盖超时 | 前后原始JSON |
| `node photos.mjs` | 最终0，20真实decode样本 | photos.json |
| `node matrix.mjs`、`node extra.mjs` | 最终均0：功能75／7通过；性能p95缺口独立记录 | matrix/extra.json |
| `node g1.mjs` | 最终0且19项passed；同profile不清缓存 | g1.json |
| `node original-cancel.mjs` | 最终0，3项通过／实际取消（该Photo源码随后未再改动） | original-cancel.json |
| `node warm-contract.mjs`、`node json-lifecycle.mjs` | 最终均0，13／3项通过；已取消信号专项0 | warm-contract/json-lifecycle/already-aborted-warm.json |
| 旧archive binary patch恢复／HTTPS ls-remote | 均0；初次SSH失败未冒充远端通过 | tracked-restore-proof／online证据 |

重要早期失败保留：初次弱网原图decode60s等待不足→100s真实decode测试；matrix-first全国按钮被既有拖动后250ms抑制→harness等待300ms，未改交互；坏站内JSON200被缓存、失败Promise清理后仍失败→显式站内条件验证及SHA校验；native img到期HTTP验证不足→fetch/blob；BFCache等候方式及CDP事件标签纠正。早期文件 `photos-first.json`、`photos-load-not-decode.json`、`matrix-first.json`、`extra-before-cache-retry-fix.json`、`g1-before-*.json`、`original-cancel-first.json`均保留，不算最终通过或覆盖掉失败历史。

### 11.6 政策核查、偏差、未达标／未验证与后续动作

2026-10-05按 [OSMF标准瓦片政策](https://operations.osmfoundation.org/policies/tiles/) 和 [署名指南](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) 核查，正式默认仍标准OSM，不向服务传照片、EXIF或地址文本；普通浏览器Referer／UA与默认缓存，不附缓存破坏query，不抓未观看区域或地图包。只对现有全国视野一片做HEAD确认 `Access-Control-Allow-Origin:*`、`Cache-Control:max-age=521461, stale-while-revalidate=604800, stale-if-error=604800`、Age/Date/Expires/ETag，`osm-headers.json（本地私有工作证据，未入仓）`，**图片body下载0**。大量自动测试只使用本地合成XYZ。HEAD确认不等于真实浏览器GET／视觉／性能完成。

主要偏差是改用CORS fetch/blob、边缘相交片代替一圈保护行、仅旧decoded层而不下载父片、补许可链接、临时保留方案尚未接真实publisher。原因和参数均见上文；未修改照片、主地图投影、底图文字、暖色滤镜或既有动画去追数字。半年仅由项目维护者在2027-04-05复核政策、provider、响应头、公开坐标与内容许可、生命周期；未创建定时抓取任务。

**发布前阻塞及后续：**

1. 真实 `copy-site`仍删除旧assets/pages，GitHub Pages当前入口max-age600；必须另获托管／发布授权后落实支持窗口、完整闭包、撤除例外与真实切换／回滚原子性，再少量同profile验证线上A→B与收敛时间。本地准备及G1不能替代此项。撤除例外单测限于禁止内容路径的拒绝及缺闭包不可回滚；一般已发布素材撤除清单与CDN失效尚未接真实托管，须在发布集成时落实。
2. 原目录尚未迁移隔离源码；后续需按保留清单处理旧NE及其他未提交工作，再讨论集成，不能直接覆盖master。当前查看应使用隔离3020或隔离目录DEV，不以原3000判断本次实现。
3. 正常网络20%与844×390/DPR3的33.3ms输入目标未达；下一轮先复测独占环境、拆分输入等待／动画／decode／合成与服务时间，再决定可允许的改进，不扩大官方预热。
4. 真实手机、Safari／Firefox、线上暖色底图文字／海岛／街道／字体与8px信用可读性、真实OSM GET/CORS/弱网延迟、平台取消能力未验证；浏览器工具线上超时，未将其写成通过。另获可用设备后正常少量当前视野目检，不跑官方压测。
5. 冷fixture与照片已各场景5次；停留3s／8s、HTTP暖与decoded暖、实际省域与照片返回现场的每场景5次独立性能样本未全部完成。矩阵覆盖功能不冒充这些性能重复样本。纯可选预热是否引入≥50ms长任务、真实heap与tile取消完整wire字节仍待专测；当前raw warm预算仅本次build实测，未新增专属未来增长门禁。

最终完整保留核对与源码指纹见证据，报告／摘要复制到隔离同路径。`build:site`、根发布产物手改、提交、推送、发布执行次数均0；无新增Service Worker、后端或原图包预取。验收状态保持 `implemented-with-validation-gaps`。

### 11.7 2026-10-06发布准备、修复及实际结果

当前阶段在同一完整f5隔离树继续；原脏master和独立候选未迁移/覆盖。本轮发布授权见SCOPE10月6日，[发布记录](osm-map-loading-release-2026-10-06.md)是本节的详细回填，含修复文件、原图策略、旧闭包规则、命令/退出码、G0/G1证据、提交/远端/CI/Pages/线上状态、剩余缺口与回滚。发布前未完成项不写通过。

- 修改清单：[change-files.json](evidence/osm-release-2026-10-06/change-files.json)。真实check-release/publisher/build-site、canonical Git字节与属性、retention、QA/必要单测、CI、当前说明均已修改；根产物由正式build:site生成。仅明确本次文件暂存，七夕/DEV/私人配置及旧NE实验不纳入。
- 原图策略调整是8.4内容版本契约的例外：未改变且已正式发布的87原图保持原URL与唯一跟踪副本（789232466B），字节碰撞拒绝；87缩略图和3JSON内容hash、代码Vite hash。87份original+87thumb+3JSON共177实际URL严格字节/运行时检查及浏览器HEAD通过，不再复制87张大图到根versioned。
- 真实发布保留最近两版/七天所有版/当前回滚版，完整Git公共基线含manifest/icon；限定清理仅过期清单中未引用且字节相同的assets/versioned。正式根旧依赖闭包和回滚入口均存储，475闭包文件/855457305B；[根门禁](evidence/osm-release-2026-10-06/published-site-check-final.json)。支持窗口外旧页、素材撤除CDN失效与托管头修改仍不宣称完成。
- 参数沿用11.2：4槽、48片/16MiB、60s内存上限但HTTP有效期优先、480ms已有旧层、12s/一次750ms重试、0额外保护行、1200ms站内idle预热250KB上限。无新增官方预热区域，无NE主图恢复；首屏封面与当前原图优先。
- 本次最终verify0、30单测0、check-release0、正式build:site0、check-published-site0；[G0四视口](evidence/osm-release-2026-10-06/g0-default.json)及[真实publisher G1十九项](evidence/osm-release-2026-10-06/g1.json)全通过，同一profile不清缓存。cover/177URL/当前原图[浏览器资源检查](evidence/osm-release-2026-10-06/resource-browser.json)5项通过。早期碰撞/基线520/缓存与harness失败及复验原因见发布记录，未冒充首次即成功。
- 人工默认生产预览真实OSM全国/省域当前视野、版权、放大重置/册选择及当前原图/返回通过，公开截图见发布记录。自动测试仍仅合成XYZ；线上正式版本和旧页升级必须等实际部署回填。
- 优化前后40地图/20照片样本及11.4全部指标原样保留；正常网络20%、844×390/DPR3 50.0ms和真实设备/heap/wire/重复暖性能限制没有改数字。下一轮独占环境分解瓶颈与真实设备补测；不以扩大官方预取追目标。

## 12. 后续实施会话指令（本轮不发送／执行）

```text
请在 原工作树 按 changes/gallery-album/osm-map-loading-plan-2026-10-05.md（含缓存复盘第8.4–8.5节与G1）实施相册地图基线对齐和加载优化。先读AGENTS与SCOPE，重新核对线上、完整f5ce547、远端及脏工作树；保护已有tracked／untracked和必要ignored工作并实际验证恢复，从完整正式OSM树建立独立基线，通过同源码DEV／dist／线上来源一致性G0后再优化。原目录未同步必须明确说明，不能覆盖脏master或只复制最后一次提交。正式主地图固定暖色OpenStreetMap XYZ，保留现有内容、视觉、文字、版权、交互与当前原图优先；按复用矩阵适配旧NE队列等能力，NE仅作轻量失败底层。实现当前视野中心优先、极小必要周边、逐片显示、并发、取消、缓存及生命周期；官方服务不预下载或预热未观看区域，首屏后只有限预热站内代码／数据／计算，半年仅作维护复核。落实相册实际调用链的资源版本化、过期验证和有界失败恢复，审计force-cache，区分入口、hash代码／数据与OSM瓦片；在临时输出目录验证旧发布依赖保留及回滚方案，不执行根发布同步、不擅改无关页面。用同一浏览器profile、不清缓存完成A→B、旧标签页首次打开地图、BFCache、304／200、弱网／离线、连续发布与回滚的G1；自动矩阵使用站内合成XYZ fixture，禁止向官方批量压测。实施后运行verify及必要测试、同条件OSM前后对照，并必须回填计划第11节：实施目录／基线、原工作保留与迁移清单、修改文件、真实参数／全样本、响应头／资源版本／旧依赖保留、G0／G1、命令退出码与证据路径、政策核查、未测／未达标及发布前阻塞；同步真实架构与说明，最终回复链接回填文档。禁止build:site、手工改根产物、提交、推送、发布及恢复NE主地图；托管／真实发布验收尚无授权的部分明确待办，不冒称已通过。
```

## 13. 本轮交付核查与资料

本轮只读取得线上HTML及三份JS/CSS、查询远端分支API，未抓取瓦片；现有源代码／scripts／package／lock／vite／根index共261个文件（排除Markdown）的交付前后聚合SHA-256均为 `C5F8AC2924CF9204AD9A41B7BFEDB12EF9BFFC089C6DB19A6816EE91516D65F8`。HEAD仍为 `8eb34f3`，没有切换或修改业务文件；此指纹不声称覆盖所有私人素材／ignored证据。

2026-10-05在当前原工作树的Cabinet执行 `npm run verify`，退出码0，类型、生产构建、现有通用／NE地图预算、草稿、59份Markdown链接与路由smoke通过；构建仅更新忽略的Cabinet/dist，未build:site／提交／推送／发布。此结果仍属于本地NE实验，不能替代OSM的G0或性能／政策验收；本轮未建立OSM本地运行基线，未做OSM加载实现或性能测量。

参考：旧NE本地方案（未纳入本次发布）、旧NE本地测量（未纳入本次发布）、[本地地图说明](../../Cabinet/src/pages/gallery/map/README.md)、[当前架构](../../docs/ARCHITECTURE.md)、[资源约定](../../Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md)。旧材料仅提供迁移依据。

外部机制参考：[OSMF官方瓦片政策](https://operations.osmfoundation.org/policies/tiles/)、[OSMF署名指南](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)、[OSM XYZ坐标公式](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)、[MDN img.decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode)、[MDN跨域资源时间限制](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming)、[MDN Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)。容量参数和性能目标是本项目待验证选择，不是服务政策给出的许可额度。

2026-10-05缓存复盘追加：只读HEAD补测及脚本／源码审计已记录第2节；第8.4–8.5节、G1和执行指令为新版待实施契约。参考 [MDN HTTP缓存](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)、[MDN Request.cache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)、[Vite构建与动态导入失败](https://vite.dev/guide/build)。Vite在线文档版本不替代本仓锁定版本，执行时要验证事件支持；没有开展真实A→B部署、用户浏览器缓存或OSM实测。

缓存复盘交付验收：再次执行当前工作树 `Cabinet/npm run verify`，退出码0（类型、构建、预算、草稿、59份Markdown链接及smoke）；上述261个非Markdown源码／脚本／配置指纹仍相同，HEAD未变。此次仅更新本计划、SCOPE和资源加载规范；只生成忽略的Cabinet/dist，没有执行build:site或修改业务实现。现有NE／七夕历史检查通过不等于OSM G0／G1通过或获得发布许可。
