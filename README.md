# Our Story 展柜

一个入口的情侣纪念站：展柜、信盒、相册、相恋时光和节日专题通过同一套 Hash 路由切换；520 情书以内嵌 iframe 运行。

当前正式范围、发布边界和草稿状态以 [`SCOPE.md`](./SCOPE.md) 为唯一权威。产品定位、视觉约定、架构和开发规则见下方文档地图；目标态提案不等同于当前实现。

## 本地开发

```bash
cd Cabinet
npm install
npm run dev
```

打开 `http://localhost:3000`。520 情书从信盒通过 `#envelopes/520` 打开。

## 当前路由

| Hash | 页面 | 状态 |
|------|------|------|
| （空） | 展柜主页 | 正式 |
| `#envelopes` | 时光信箱 | 正式 |
| `#envelopes/520` | 520 情书 | 正式 |
| `#photos` | 流光相册 | 正式 |
| `#relationship` | 相恋时光 | 正式 |
| `#festivals` | 节日档案馆 | 正式 |
| `#festivals/children-day` | 2026 儿童节 | 正式 |
| `#festivals/dragon-boat-2026` | 2026 端午节 | 正式 |
七夕专题与本地测试入口不属于本次发布。五组相册及已确认地址已获明确公开许可。

## 构建与发布

```bash
cd Cabinet
npm run lint
npm run build
```

`npm run build` 只生成 `Cabinet/dist/`。本次发布须先通过 `npm run verify` 与 `node scripts/check-release.mjs`；`npm run build:site` 核对 SCOPE 授权并排除七夕及本地测试产物后同步根目录。原图唯一跟踪副本在 `gallery/originals/`，构建会复制到 dist。发布前必须阅读 [`SCOPE.md`](./SCOPE.md)。

## 文档地图

- [`SCOPE.md`](./SCOPE.md)：当前范围、版本基线和唯一发布授权依据
- [`PRODUCT.md`](./PRODUCT.md)：产品目的、用户、品牌性格和反向参考
- [`DESIGN.md`](./DESIGN.md)：当前视觉语言与后续设计约束
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)：当前实现的应用、路由、加载和部署架构
- [`docs/CONTENT-CONTRACT.md`](./docs/CONTENT-CONTRACT.md)：内容领域类型、只读仓储和未来 HTTP adapter 契约
- [`AGENTS.md`](./AGENTS.md)：仓库级修改边界、开发规范和验收门禁
- [`Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md`](./Cabinet/docs/RESOURCE-LOADING-GUIDELINES.md)：资源加载专项规范
- [`Cabinet/docs/UI-AUDIT.md`](./Cabinet/docs/UI-AUDIT.md)：历史 UI 审计快照，不代表全部当前结论
- [`changes/platform-foundation/proposal.md`](./changes/platform-foundation/proposal.md)：目标态提案
- [`changes/platform-foundation/tasks.md`](./changes/platform-foundation/tasks.md)：按编号执行的任务清单

源码位于 [`Cabinet/src/`](./Cabinet/src/)，构建中间产物位于 `Cabinet/dist/`；仓库根目录的 `assets/`、`pages/` 和 `index.html` 属于已发布基线，不应手工修改。
