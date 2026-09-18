# Our Story 仓库协作规则

当前范围、正式基线、发布许可和草稿状态以 [`SCOPE.md`](./SCOPE.md) 为唯一权威。产品意图见 [`PRODUCT.md`](./PRODUCT.md)，视觉约定见 [`DESIGN.md`](./DESIGN.md)，当前实现架构见 [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)。目标态提案和历史审计不能替代这些当前事实。

## 修改边界

- 以当前 Git 基线和用户明确任务为边界，不顺手重写其他页面或格式化无关文件。
- 节日专题尽量隔离在对应年份/节日目录；新增页面只做路由、导航、懒加载和必要档案入口的最小集成。
- 专题素材、页面状态和音频留在专题目录，不提升到共享层。
- 删除旧版实现后同步清理源码和文档引用，不留下失效导入或过时架构说明。

## 路由与页面

- 站点只有一个 `index.html` 和 Hash 路由，无服务端路由。
- 路由定义集中在 `Cabinet/src/app/routes.ts`；导航统一使用 `App.tsx` 的 `navigateTo()`。
- 新增页面需同步检查 `ViewState`、`VIEW_HASH`、`viewFromHash()`、`siteConfig.ts`、`App.tsx`、`LAZY_LOAD_VIEWS` 和页面标题。
- 重型专题使用 `*PageLoader` 与 `React.lazy`；不要在 `App.tsx` 静态引入专题主组件。
- 页面门禁放在 `access.ts` / `visibility.ts`；日期只决定 released 页面何时开放，不能把 draft 自动变成 released。
- iframe 子页通过 `postMessage` 使用 `our-story-navigate` 请求父页导航。

## React 与 TypeScript

- React 的 `key` 是 JSX 特殊属性，不加入组件 Props；优先使用 `import type` 引入纯类型。
- `react`、`react-dom` 及对应类型包保持兼容主版本。
- 浏览器定时器使用 `window.setTimeout` / `window.setInterval`，句柄按 `number` 处理，并在 effect cleanup 中清理。

## 开发预览

- 本地调试只保留季节切换和节日页面预览/切换入口，但本次用户明确要求这些本地测试内容／按钮不提交、不发布。
- 节日预览统一维护在 `Cabinet/src/dev-only/festivalPreview/festivalPreviewRegistry.ts`，日期来自 `Cabinet/src/data/holidays.json`。
- 预览入口由 `import.meta.env.DEV` 或明确的 `VITE_*` 开关保护，生产默认不可见。
- 日期模拟只通过共享的 `getFestivalNow()` 影响 released 页面的日期判断；draft 页面只能由 DEV 预览显式打开，不能进入生产构建或被日期自动发布。本次发布明确排除七夕专题与本地测试；原工作树状态不代表提交范围。
- 个人模拟值使用 `sessionStorage`，不把本地状态当作正式数据能力。

## 资源与专题

- 首屏图片可由 loader 预载；大音频、非首屏图片和下一阶段资源不得阻塞进入页面。
- 不因装饰入口 hover 预取多 MB 页面、图片或音频；只在明确点击、按下或聚焦后预取。
- 页面退出时清理计时器、事件监听、动画和音频实例。
- 资源加载专项契约见 [`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`](./Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md)。
- 内容页面通过 `Cabinet/src/domain/contentRepository.ts` 的只读仓储读取，不直接 import 未来 API DTO 或数据库结构；边界规则见 [`docs/CONTENT-CONTRACT.md`](./docs/CONTENT-CONTRACT.md)。

## 520 双轨

| 角色 | 路径 |
|------|------|
| 源码 | `Cabinet/src/pages/letters/interactive/520/` |
| 构建产物 | `Cabinet/dist/pages/letters/520/` |
| 壳层 iframe | `pages/letters/520/index.html` |

路径解析统一使用 `resolvePublicAssetUrl()` / `getDocumentBaseUrl()`。520 开发静态目录由 `vite.config.ts` 的同步 fs 中间件提供，修改配置后重启 dev server。

## 验收与发布

常规交付至少执行：

```bash
cd Cabinet
npm run verify
```

`npm run verify` 会依次执行类型检查、生产构建、性能预算、草稿泄漏、文档链接和关键路由 smoke test。`npm run build` 只生成 `Cabinet/dist/`；`npm run build:site` 仅在 `SCOPE.md` 授权、所含页面为 `released` 且无七夕／测试发布门禁通过时执行。不要手工修改根目录 `assets/`、`pages/` 或 `index.html` 来替代源码修改。

## 专项文档

- 当前范围：[`SCOPE.md`](./SCOPE.md)
- 产品：[`PRODUCT.md`](./PRODUCT.md)
- 设计：[`DESIGN.md`](./DESIGN.md)
- 架构：[`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
- 资源加载：[`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`](./Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md)
- 历史 UI 审计：[`Cabinet/docs/UI-AUDIT.md`](./Cabinet/docs/UI-AUDIT.md)
