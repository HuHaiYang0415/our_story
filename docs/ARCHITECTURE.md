---
status: active
owner: 项目维护者
authority: current-implementation
---

# Our Story 当前架构

本文件记录当前代码的实现事实，不替代根目录 [`SCOPE.md`](../SCOPE.md) 的范围和发布授权，也不把 [`changes/platform-foundation/proposal.md`](../changes/platform-foundation/proposal.md) 的目标态当作已实现能力。

## 总体拓扑

项目是一个面向静态托管的 React 单页应用，源码集中在 `Cabinet/`：

```text
Cabinet/src/main.tsx
  └── app/App.tsx                 # 应用壳、主题拨盘、Hash 路由、视图转场
      ├── pages/cabinet/          # 展柜主页、木柜装饰、节日沙漏
      ├── pages/letters/          # 信盒、信件、520 iframe 嵌入层
      ├── pages/gallery/          # 相册
      ├── pages/relationship/     # 相恋时光
      ├── pages/festivals/        # 档案馆与节日专题
      └── shared/                 # 布局、主题、加载、配置、工具和类型
```

仓库根目录同时保留已发布基线的静态入口和资源。`Cabinet/dist/` 是 `npm run build` 的中间产物；根目录同步脚本属于受发布门禁保护的流程。

## 运行时边界

### React 主应用

`main.tsx` 挂载 `App.tsx`。应用壳管理当前 `ViewState`、主题状态、Hash 双向同步、页面标题和 `AnimatePresence` 转场。展柜主页是初始静态壳层，其余主要页面通过 `React.lazy` 按路由加载。

页面 loader 负责专题模块的导入、关键媒体预载、进度显示、失败重试和页面返回回调。共享的 `useFestivePageLoader` 与 `mediaPreload.ts` 负责统一加载边界。

### 520 iframe 子应用

`src/pages/letters/interactive/520/` 是独立的 HTML、CSS 和原生 JavaScript 子页。Vite 构建时复制到 `dist/pages/letters/520/`，由 `Letter520Embed` 以 iframe 打开；子页通过 `postMessage` 使用 `our-story-navigate` 请求父应用返回信盒。

这是当前唯一的子应用边界，iframe 内样式不与主应用 Tailwind 令牌共享。

### 开发专用能力

本次提交／发布不包含本地测试入口、日期模拟及季节切换按钮。原工作树可保留 DEV 工具供本地工作，但发布候选没有这些文件与装载入口；正式门禁只使用真实时间。

## 路由与页面

当前使用自研 Hash 路由，无服务端路由：

| Hash | ViewState | 页面 |
|------|-----------|------|
| （空） | `cabinet` | `Cabinet` |
| `#envelopes` | `box-envelopes` | `EnvelopeStack` |
| `#envelopes/520` | `letter-520` | `Letter520Embed` |
| `#photos` | `box-photos` | `PolaroidGallery` |
| `#relationship` | `relationship` | `RelationshipPageLoader` |
| `#festivals` | `festival-archive` | `FestivalArchive` |
| `#festivals/children-day` | `festival-2026-ChildrenDay` | 儿童节专题 |
| `#festivals/dragon-boat-2026` | `festival-2026-DragonBoat` | 端午长卷 |
七夕专题与其路由不属于本次发布；原工作树的本地状态不代表远端版本。

路由定义、Hash 解析和视图类型在 `Cabinet/src/app/routes.ts`；导航映射在 `festivalNav.ts`；页面标题映射在 `shared/config/siteConfig.ts`。页面门禁在对应专题的 `access.ts` / `visibility.ts` 中处理，日期只能决定已发布页面何时开放，不能把 draft 自动变成 released。

## 主题与布局

`shared/theme/theme.ts` 根据节气数据和日出/日落时间计算季节与昼夜；`applyThemeCssVars()` 将结果写入 `data-theme` 和 `--color-brand-*` CSS 变量。右下角主题拨盘可切换昼夜，季节预览仅在开发环境启用。

页面通常使用以下布局层：

```text
#app-root (fixed inset-0, h-dvh)
└── .view-layer
    └── ViewportShell
        ├── 氛围层
        ├── .viewport-main
        └── .viewport-foot
```

展柜页进一步使用 `StageLayout`、`StageCabinet`、贴边装饰槽和地面/页脚。矮屏缩放与 safe area 处理主要位于 `Cabinet.tsx` 和全局 CSS。

## 数据与资源

- 节气：`Cabinet/src/data/solar-terms.json`，生成说明见 `Cabinet/src/data/README.md`。
- 节日：`Cabinet/src/data/holidays.json`，生成说明见 `README-holidays.md`。
- 信件：`Cabinet/src/pages/letters/data/letters.ts`。
- 图片和音频：专题目录内的压缩资源由 Vite import，520 子页资源按目录复制。
- 内容领域类型与只读仓储：`Cabinet/src/domain/content.ts`、`Cabinet/src/domain/contentRepository.ts`；当前本地 adapter 为 `Cabinet/src/data/localContentRepository.ts`，信箱页已通过该边界读取。
- 相册页 `PolaroidGallery` 通过只读仓储读取内容；状态仅 `orbit/map/album`。首页一册一封面，首次激活居中到前景并上提 16px 选中，再次激活直接进入；不再有聚焦大图、进入按钮或小记。册内当前原图无纸垫背景，底部横向缩略图原生滚动、点击选择；主图滑动与方向键在册内浏览，首尾不跨册。Ctrl/Cmd 滚轮保留浏览器缩放。
- 邮册挂载相邻 5/9 个不重复节点，CSS 透视与椭圆轨道改变位置、尺度和遮挡。此页使用固定浅色暖纸／叶影令牌，日夜一致，主题拨盘的局部颜色适配仅影响此路由；全站其他页面的昼夜状态不变。
- `GalleryMap` 只在地图模式懒加载本地 China／浙江地图；上海区界在上海城市意图后加载。全国／城市是仅有的两层，34 个全国边界持续挂载，省市细节共用同一投影，行政区舞台透明；选择邮册不再改变尺度。圆形压缩封面落在有来源的城市代表点，同城共享坐标聚合并可分页选择，地址在地理锚点附近展示。全国密集城市封面使用带连线的展示偏移，实际锚点未改。不读取 OSM 园区、不推断街道／私人门牌位置；进入照片后返回保留视域。边界、BSD 许可和精度限制见 [地图实现说明](../Cabinet/src/pages/gallery/map/README.md)。
- 用户于 2026-09-18 明确批准公开五组 87 张照片（72/1/2/1/11）及已提供地址。仓储清单位于 `Cabinet/src/pages/gallery/data/galleryContent.ts`，`GALLERY_PUBLIC_ALBUMS` 为确认的五组；所有小图位于 `Cabinet/public/gallery/collections/`（400px / JPEG quality 60 / 空 EXIF）。源文件保持只读。
- 册内大图使用 `MediaAssetVariants.original`，仅请求当前一张静态原图。唯一跟踪副本是站点根 `gallery/originals/`，原字节不改写；Vite 复制到忽略 Git 的 dist，不在 Cabinet/public 重复存储。经用户批准后运行 `Cabinet/scripts/import-gallery-collections.py --source-root <素材目录> --publish` 重建缩略图、公开清单及原图副本。个人白名单与 DEV 原图通道不提交、不用于线上。
- 资源分级、预载、失败重试和卸载清理遵循 [`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`](../Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md)。

本次明确排除七夕专题及本地测试；其先前验收与 released 标记仅作为原工作树历史，发布候选不包含专题源码、路由、loader 或图片。

## 构建与发布

```text
npm run build              → Cabinet/dist/
npm run build:site         → SCOPE 授权且无七夕／测试门禁通过后同步根目录
```

`scripts/build-site.mjs` 会先执行 `scripts/check-release.mjs`，检查 SCOPE 授权、87 张原图／缩略图数量及七夕／测试／本机路径泄漏，再调用 `scripts/copy-site.mjs` 同步根目录。开发分支不应绕过该门禁手工修改根目录 `assets/`、`pages/` 或 `index.html`。

## 文档边界

- 范围、正式基线、发布许可：根 `SCOPE.md`
- 产品目的与用户：根 `PRODUCT.md`
- 视觉原则：根 `DESIGN.md`
- 长期开发与验收规则：根 `AGENTS.md`
- 当前实现架构：本文件
- 内容领域与仓储契约：`docs/CONTENT-CONTRACT.md`
- 资源加载专项契约：`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`
- 历史 UI 审计：`Cabinet/docs/UI-AUDIT.md`
