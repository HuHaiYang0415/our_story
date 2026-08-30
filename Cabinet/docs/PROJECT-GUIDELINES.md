# 项目通用开发要求

> 本文档是项目级约定，适用于 `Cabinet/` 内所有页面与共享代码。它补充 `.cursor/rules/`，不替代具体专题页规则。

## 1. 仓库基线与改动边界

- 以当前 Git 仓库版本为基线。除用户明确要求外，不重写、顺手修复或格式化其他页面。
- 节日专题页应尽量隔离在对应年份与节日目录内；新增页面只有在路由、导航、懒加载和必要的档案入口处做最小集成。
- 本地调试功能只允许保留两类：季节切换，以及节日页面切换/预览。节日测试入口统一放在节日沙漏旁，用一个菜单按钮提供“节日前 / 节日当天 / 节日前 7 天 / 当前时间”四种状态，并提供进入对应节日页面的操作。
- 节日测试菜单不是某个节日的专用入口，而是面向年度节日页面的通用入口。当前只维护当年选项；所有预设节日都应登记在 `Cabinet/src/dev-only/festivalPreview/festivalPreviewRegistry.ts`；已开发页面填写路由，未开发页面保留为不可打开状态。不要在组件里另写七夕、端午等硬编码分支。
- 进入新的一年时，必须复制或替换注册表中的年度选项，更新年份、日期；对已开发页面再更新 `pageId` 和路由 `view`；同时检查档案馆、导航、访问门禁和懒加载映射。不要让测试菜单自动混用上一年度日期。
- 调试入口必须由 `import.meta.env.DEV` 或明确的 `VITE_*` 开关保护，生产构建默认不可见、不可改变正式日期门禁。
- 删除旧版实现后，同时检查源码引用和文档引用；不得保留指向已删除目录的导入或架构说明。
- 不要通过修改根目录发布产物来替代源码修改。发布产物由项目脚本生成。

## 2. React 19 与 TypeScript

- `react`、`react-dom`、`@types/react`、`@types/react-dom` 应保持同一主版本兼容，并在 `Cabinet/package.json` 与 lockfile 中明确声明。
- React 的特殊属性 `key` 不属于组件运行时 Props。组件需要 `key` 时由 JSX/React 处理，不要为了消除类型错误把 `key` 人为加入组件 Props。
- 如果出现 `key` 被误判为普通 Props，先检查 React 类型包、版本和 TypeScript JSX 配置；不要逐个页面打补丁。
- 组件 Props 只描述组件真正接收的业务参数，优先使用 `import type` 引入纯类型。

## 3. 浏览器定时器类型

- 浏览器代码统一使用 `window.setTimeout` / `window.setInterval` 与对应的 `window.clearTimeout` / `window.clearInterval`。
- 定时器句柄应使用浏览器返回的 `number` 类型；定时器数组也应声明为 `number[]`。
- 避免在浏览器组件中用未限定的 `ReturnType<typeof setTimeout>`，因为安装 Node 类型后它可能解析为 `NodeJS.Timeout`，从而与 `window.setTimeout` 返回值冲突。
- React effect 中创建的定时器必须在 cleanup 中清理，并避免过期回调修改新一轮运行的状态。

## 4. 专题页与资源

- 专题页入口使用 PageLoader 和懒加载约定，不在 `App.tsx` 静态引入重型页面主体。
- 首屏必需图片可以阻塞预载；大体积音频不得作为进页阻塞条件。页面卸载时必须停止并释放音频资源。
- 不要因装饰入口 hover 就预取多 MB 的页面、图片或音频；只在明确用户意图后预取。
- 视觉与文案素材属于对应专题页，不要把节日装饰或页面状态泄漏到其他专题页。
- `prefers-reduced-motion`、键盘操作、按钮语义和图片替代文本必须在新增交互中一并考虑。
- 资源分级、预载工具、路由拆分和交付检查以 [`RESOURCE-LOADING-GUIDELINES.md`](./RESOURCE-LOADING-GUIDELINES.md) 为准；新增专题页交付前必须完成其中的检查流程。

## 5. 校验清单

在提交或交付前，至少执行：

```bash
cd Cabinet
npm run lint
npm run build
```

如果 lint 报错来自未改动且与本次任务无关的仓库代码：

1. 先确认该文件与 Git 基线相同，排除本次改动引入；
2. 分析错误属于依赖、类型配置还是既有代码问题；
3. 在交付说明中标记并暂不扩大修复范围，除非用户明确要求。

`npm run build:site` 会更新项目根目录发布产物，只有在用户要求发布或明确需要验证发布链路时执行。
