---
status: target
owner: 项目维护者
proposal: proposal.md
---

# 项目基础整合与跨端演进执行任务

任务必须保持在提案 Scope 内。建议一个执行会话只领取一个编号；若发现范围需要改变，先更新并重新确认提案。

## 0. 发布止血：先隔离七夕草稿

- [x] 增加独立于日期的页面生命周期，并把七夕标为 `draft`；生产构建不得解析七夕 loader 或媒体。
  - 影响：路由、七夕、档案馆、懒加载、构建。
  - 完成条件：`npm run build` 输出中没有 Qixi chunk、CSS 或 `moment.jpg`；现有正式页面仍可打开。
  - 验证：在 `Cabinet/` 执行 `npm run lint`、`npm run build`，再检查 `dist/assets/`。
- [x] 在此任务完成前保持 `build:site` 禁用，并在发布说明中引用根 `SCOPE.md`。

## 1. 文档整合

- [x] 精简根 README 为入口和文档地图；把详细现状架构迁入 `docs/ARCHITECTURE.md`。
- [x] 将 `Cabinet/PRODUCT.md` 合并到根 `PRODUCT.md`，创建根 `DESIGN.md`，并把两个重复开发规范合并为根 `AGENTS.md`。
- [x] 修复已知失效或过时说明：README 路由清单、数据 README 的 `solarTerms.ts` 路径、七夕图片 README 的 `ASSETS.md` 引用、旧 UI 审计结果。
  - 完成条件：当前范围只有 `SCOPE.md` 一个权威位置；README 和 AGENTS 均链接它；没有重复规则或失效链接。
  - 验证：人工逐个打开文档链接，并在 `Cabinet/` 执行 `npm run lint`。

## 2. 页面注册与应用壳收敛

- [x] 建立类型安全的页面/节日注册表，统一 route、hash、title、lifecycle、opensAt、loader、档案和沙漏元数据。
- [x] 合并 `ViewState` 与 `AppView`，让 `App.tsx` 通过统一页面槽渲染，移除沙漏 `BUILT_PAGES` 等硬编码列表。
- [x] 将 `src/dev-only/` 工具纳入版本控制，确保只在 DEV 构建中装载；个人模拟值继续放 sessionStorage。
  - 完成条件：新增一个测试节日只需改注册表和节日模块；生产包不含 dev-only 代码。
  - 验证：`npm run lint`、`npm run build`，检查构建产物与现有 hash 回归。

## 3. 拆分高耦合模块

- [x] 拆分沙漏的节日数据、图形、日期计算和交互；拆分展柜装饰组件集合。
- [x] 保持 feature 自治，禁止把专题素材和状态提升到共享层；给页面 loader、媒体清理和错误恢复建立统一边界。
  - 完成条件：`App.tsx`、沙漏和装饰模块不再承担多种独立职责，行为与旧版一致。
  - 验证：`npm run lint`、`npm run build`，逐页手工回归正式 hash。

## 4. 跨设备、无障碍与交互统一

- [x] 移除两个 HTML 入口的缩放锁定；统一语义按钮、键盘操作、focus-visible、44px 热区和屏幕阅读器名称。
- [x] 建立全站 reduced-motion 策略，保留状态变化但停用无限粒子、弹跳和非必要位移；补齐音频静音与卸载清理。
- [x] 按 320、375、430、768、1024 和桌面窄窗检查竖屏/横屏、safe area、200% 缩放、触控与鼠标输入。
  - 完成条件：无横向滚动、遮挡、键盘陷阱或不可达交互；正文缩放后仍可阅读和返回。
  - 验证：`npm run lint`、`npm run build`，按上述设备矩阵人工验收。

## 5. 视觉系统与“去 AI 味”

- [x] 从现有展柜、相纸、信件和端午页提炼基础、组件、专题三层令牌并写入 `DESIGN.md`。
- [x] 先统一返回、加载、错误、静音、焦点、间距和动效节奏，再逐页减少通用字体组合、全大写宽字距、玻璃模糊、紫色渐变和弹跳。
- [x] 所有新增素材记录来源、授权与压缩版本；真实私人笔迹或扫描材质先做隐私和可读性评估。
  - 完成条件：专题差异仍清晰，但共享交互无需重新学习；机械检测结果逐项有修复或书面例外。
  - 验证：重新运行 Impeccable detector，并做桌面与移动视觉对照。

## 6. 性能与发布工程

- [x] 设置主入口、专题脚本、首屏图片和音频预算；优先拆分 1.69 MB 主入口与 418 KB 端午脚本。
- [x] 优化 3–5 MB SVG 和 7 MB 级音频，首屏外图片懒加载，清理未引用的 `@google/genai`、`express`、`dotenv` 等依赖。
- [x] 增加 CI：类型检查、生产构建、草稿泄漏检查、链接检查和关键路由 smoke test；验证后再把部署产物移出开发分支。
  - 完成条件：构建无大 chunk 警告或每个例外有预算说明；干净克隆可重复构建并生成同类产物。
  - 验证：现阶段执行 `npm run lint`、`npm run build`；新增 CI 后以其结果为发布门禁。

## 7. 后端扩展缝（暂不接数据库）

- [x] 定义现有 Letter、Album、Memory、FestivalPage、MediaAsset 的领域类型与只读仓储接口。
- [x] 用本地 TS/JSON adapter 保持现有页面不变；页面不得直接 import 将来的 API DTO 或数据库结构。
- [x] 写明 HTTP adapter、鉴权、错误、缓存、时区、媒体 URL 和迁移种子的契约草案，但不实现未被选择的后端。
  - 完成条件：至少一个现有内容页面通过仓储接口读取，切换 adapter 不改变 UI Props。
  - 验证：`npm run lint`、`npm run build`，对比迁移前后内容和路由。

## 8. 隐私与真实后端（触发式任务）

- [ ] 只有在确认“内容需要私密访问”后启动：实现用户与 couple space 授权、服务端发布校验、对象存储签名访问、备份恢复、导出删除和 EXIF 清理。
- [ ] 数据库保存结构化元数据，媒体进入对象存储；核心记录包含 `spaceId`、稳定 ID、时间戳、排序与可见性。
  - 完成条件：未授权用户无法通过猜 URL、查看静态包或直接请求媒体获得私人内容。
  - 验证：以后端项目实际提供的测试与安全检查命令为准；本任务启动时必须先补契约和门禁。

## 9. 七夕完成与正式发布

- [x] 在草稿门禁、跨端基础和视觉契约完成后，再处理七夕文案、图片授权、拖拽/键盘等价操作、短屏布局和 reduced-motion。
- [x] 七夕验收通过后显式把 lifecycle 从 `draft` 改为 `released`，再生成发布产物；不得以“日期已到”替代发布批准。
  - 完成条件：七夕在目标设备矩阵通过，档案馆、沙漏、直接 hash、返回导航、加载失败和刷新均正确。
  - 验证：`npm run lint`、`npm run build`；最终发布会话再执行 `npm run build:site` 并检查 Git diff。

## 整体验收

- [ ] 提案中的发布、架构、跨端、视觉、性能、数据和文档成功条件已满足。
- [ ] `SCOPE.md`、README、PRODUCT、DESIGN、ARCHITECTURE、AGENTS 和专项规范已同步。
- [ ] 在 `Cabinet/` 执行 `npm run lint` 与 `npm run build` 均通过。
- [ ] 只有经单独授权的发布会话才执行 `npm run build:site`。

## 状态更新

全部完成后将本文件状态改为 `historical`，把已实施事实写回 `docs/ARCHITECTURE.md` 与相关契约；未完成任务不得被 README 描述为现状。
