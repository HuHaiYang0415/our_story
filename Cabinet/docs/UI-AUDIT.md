# Cabinet UI 技术审计报告（历史快照）

> 状态：`historical`。本报告是 2026-06-14 的问题快照，不代表全部当前实现或当前验收结论；范围与发布边界以根目录 [`SCOPE.md`](../../SCOPE.md) 为准。  
> 生成日期：2026-06-14  
> 范围：`Cabinet/src/` 全站（展柜、信盒、相册、节日馆、儿童节互动、520 嵌入页）  
> 说明：本文档仅记录问题与建议，**不包含任何代码修改**。

---

## Audit Health Score

| # | 维度 | 得分 | 关键发现 |
|---|------|------|----------|
| 1 | Accessibility（无障碍） | 2/4 | 多处 `motion.div` / `div` 充当可点击控件，键盘用户无法操作 |
| 2 | Performance（性能） | 2/4 | 无图片懒加载；大量无限循环 blur / backdrop-filter 动画 |
| 3 | Theming（主题） | 2/4 | 有 `--color-brand-*` 令牌，但组件内硬编码色值泛滥；部分页面忽略昼夜主题 |
| 4 | Responsive Design（响应式） | 3/4 | `dvh`、safe-area、矮屏缩放逻辑较好；部分触控目标偏小 |
| 5 | Anti-Patterns（反模式） | 2/4 | 奶油暖白底 + AI 默认字体组合；大量 uppercase tracking 眉标 |
| **合计** | | **11/20** | **Acceptable（需显著改进）** |

**评级区间**：18–20 Excellent · 14–17 Good · **10–13 Acceptable** · 6–9 Poor · 0–5 Critical

---

## Anti-Patterns Verdict

**结论：部分通过，但有明显 AI 训练数据痕迹。**

这是一个有明确产品概念（木质展柜、信笺、节日互动）的私人纪念站，木柜交互和季节氛围让它不像纯模板站。但在字体、底色、装饰语法上仍踩中多条 2026 年高频 AI 审美 tell：

| Tell | 证据 |
|------|------|
| 奶油/暖白 body 背景 | `#FDFBF7`、`#FFFDFB`、`#FCFAF2` 遍布 `index.css`、信封、节日馆 |
| Reflex-reject 字体组合 | `Plus Jakarta Sans` + `Space Grotesk` + `Playfair Display`（`index.css` L1–7） |
| 小写 uppercase + wide tracking 眉标 | `Cabinet.tsx` L115–119、L189–191；`FestivalArchive.tsx` L92–94；`PolaroidGallery.tsx` L248、L279 |
| Glassmorphism 装饰性使用 | `backdrop-blur` 出现在主题拨盘、游戏 HUD、弹窗、信盒栏（非功能性遮罩） |
| 无限 pulse / blur 粒子 | `PolaroidGallery.tsx`、`children-day/index.tsx` 中 `animate-pulse`、`blur-3xl` 循环动画 |

**未检出**：gradient text（`background-clip: text`）、hero-metric 模板、编号段落脚手架（01/02/03）。

---

## Executive Summary

- **Audit Health Score：11/20（Acceptable）**
- **问题统计**：P0 × 3 · P1 × 9 · P2 × 8 · P3 × 5（共 25 项）
- **最优先处理的 5 项**：
  1. 将 `motion.div` / `div` 可点击热区改为 `<button>` 或补充 `role` + 键盘事件
  2. 移除 `user-scalable=no`，允许用户缩放文字
  3. 全局补充 `@media (prefers-reduced-motion: reduce)` 策略
  4. 修复游戏页 `outline-none` 导致的焦点不可见
  5. 提升 `text-brand-text/50`、`text-stone-400` 等弱化文字对比度
- **建议下一步**：按下方 Recommended Actions 顺序执行；修复后重新运行 `/impeccable audit`

---

## Detailed Findings by Severity

### P0 — Blocking

#### [P0] 非语义可点击元素，键盘无法操作

- **Location**：
  - `Cabinet.tsx` L241–263（时光信箱）、L286–308（相纸盒）— `motion.div` + `onClick`
  - `EnvelopeStack.tsx` L265–300 — 信封卡片 `motion.div` + `onClick`
  - `FestivalArchive.tsx` L133–186 — 节日卡片 `motion.div` + `onClick`
  - `FestiveHourglass.tsx` L991–994 — `div` + `onClick`
  - `children-day/index.tsx` L407–442 — 游戏热区 `motion.div` + `onClick`
- **Category**：Accessibility
- **Impact**：屏幕阅读器不将其识别为按钮；Tab 键无法聚焦；键盘用户无法打开信箱、相册、节日页、游戏入口
- **WCAG**：2.1.1 Keyboard（A）、4.1.2 Name, Role, Value（A）
- **Recommendation**：改用 `<button type="button">`，或添加 `role="button"`、`tabIndex={0}`、`onKeyDown`（Enter/Space），并配 `aria-label`
- **Suggested command**：`/impeccable harden`

---

#### [P0] 禁止用户缩放（viewport 锁定）

- **Location**：
  - `Cabinet/index.html` L5 — `maximum-scale=1.0, user-scalable=no`
  - `pages/letters/interactive/520/index.html` L5 — 同上
- **Category**：Accessibility / Responsive
- **Impact**：低视力用户无法放大文字；iOS 双击缩放被禁用
- **WCAG**：1.4.4 Resize Text（AA）、1.4.10 Reflow（AA）
- **Recommendation**：改为 `width=device-width, initial-scale=1.0, viewport-fit=cover`，移除 `maximum-scale` 与 `user-scalable=no`
- **Suggested command**：`/impeccable adapt`

---

#### [P0] 缺少 `prefers-reduced-motion` 降级

- **Location**：全站无匹配（`grep prefers-reduced-motion` 零结果）
  - 典型：`App.tsx` 视图切换动画；`PolaroidGallery.tsx` L36–58 无限萤火虫；`FestiveHourglass.tsx` 烟花循环；`CabinetAtmosphere.tsx` 季节粒子
- **Category**：Accessibility / Performance
- **Impact**：前庭障碍、晕动症用户对无限动画无法关闭；可能触发不适
- **WCAG**：2.3.3 Animation from Interactions（AAA，最佳实践）
- **Recommendation**：在 `index.css` 添加全局 reduce 规则：禁用或缩短 `animation`/`transition`；motion 组件用 `useReducedMotion()` 跳过入场/循环动画
- **Suggested command**：`/impeccable animate`

---

### P1 — Major

#### [P1] 游戏按钮移除焦点环

- **Location**：
  - `GameMemory.tsx` L263、L269、L284 — `outline-none` / `focus:outline-hidden`
  - `GameWhackAMole.tsx` L466、L507、L513、L679 — `outline-none` / `focus:outline-none`
- **Category**：Accessibility
- **Impact**：键盘玩家 Tab 到按钮时看不到焦点位置
- **WCAG**：2.4.7 Focus Visible（AA）
- **Recommendation**：用 `focus-visible:ring-2 focus-visible:ring-offset-2` 替代 `outline-none`
- **Suggested command**：`/impeccable harden`

---

#### [P1] 悬停专属 Tooltip，触屏/键盘不可达

- **Location**：`Cabinet.tsx` L265–267、L310–312、L352–354 — `group-hover:opacity-100` + `pointer-events-none`
- **Category**：Accessibility
- **Impact**：触屏用户看不到「点击打开时光信箱」等提示；键盘用户永远无法触发 hover 状态
- **WCAG**：1.3.1 Info and Relationships（A）
- **Recommendation**：将提示并入 `aria-label` / 可见副文案，或用 `focus-within` 同步显示
- **Suggested command**：`/impeccable clarify`

---

#### [P1] 弱化文字对比度可能不足 4.5:1

- **Location**（代表性）：
  - `Cabinet.tsx` L182 — `text-brand-text/60` on `#FDFBF7`
  - `Cabinet.tsx` L189 — `text-[#8C6239]/50`
  - `App.tsx` L160 — `text-stone-400` on 半透明拨盘
  - `FestivalArchive.tsx` L92、L126、L174 — `text-stone-400`
  - `EnvelopeStack.tsx` L143、L232 — `text-brand-text/50`
- **Category**：Accessibility
- **Impact**：副标题、元数据、标签在暖白底上偏灰，阅读吃力
- **WCAG**：1.4.3 Contrast Minimum（AA）— 正文需 ≥4.5:1
- **Recommendation**：将 `/50`、`/60` 透明度提升至 `/75` 以上，或改用 `--color-brand-text` 深色阶
- **Suggested command**：`/impeccable colorize`

---

#### [P1] 节日档案馆忽略昼夜主题

- **Location**：`FestivalArchive.tsx` L70–72 — 硬编码 `bg-[#FCFAF2] text-stone-800`；`theme` prop 传入但未使用
- **Category**：Theming
- **Impact**：用户切换夜间模式后，节日馆仍亮底，体验断裂且夜间对比可能变差
- **Recommendation**：接入 `theme.isNight`，使用 `bg-brand-bg text-brand-text` 或专用夜间色板
- **Suggested command**：`/impeccable colorize`

---

#### [P1] 邮票图片空 alt

- **Location**：`EnvelopeStack.tsx` L32–34 — `<img alt="" />`
- **Category**：Accessibility
- **Impact**：外层 `aria-label="邮票"` 部分弥补，但图片本身对读屏为装饰/未知
- **WCAG**：1.1.1 Non-text Content（A）
- **Recommendation**：`alt` 使用信件日期或标题，如 `alt={`${letter.title} 邮票`}`；纯装饰则保留 `alt=""` 并确保父级 label 准确
- **Suggested command**：`/impeccable harden`

---

#### [P1] 主题拨盘触控目标过小

- **Location**：`App.tsx` L164–177 — 昼夜切换 `p-1.5` + `w-3.5 h-3.5` 图标（约 26–28px）
- **Category**：Responsive / Accessibility
- **Impact**：移动端难以准确点击
- **标准**：WCAG 2.5.5 Target Size（AAA 建议 44×44px；AA 常见 24px 最小）
- **Recommendation**：扩大 hit area 至 `min-w-11 min-h-11`（44px）或增加透明 padding
- **Suggested command**：`/impeccable adapt`

---

#### [P1] 夏夜虫鸣按钮触控目标过小

- **Location**：`Cabinet.tsx` L152–164 — `p-1` 圆形按钮
- **Category**：Responsive
- **Impact**：同主题拨盘，移动端误触率高
- **Recommendation**：最小 44×44px 点击区域
- **Suggested command**：`/impeccable adapt`

---

#### [P1] 导航按钮缺少 aria-label

- **Location**：多数 `<button>` 仅有可见文字或图标，全站仅 `EnvelopeStack.tsx` L29 有一处 `aria-label`
  - 例：`EnvelopeStack.tsx` L200–206 收起按钮仅图标；`App.tsx` L164 昼夜切换仅有 `title`
- **Category**：Accessibility
- **Impact**：读屏用户依赖 `title` 不够可靠（部分浏览器不朗读）
- **WCAG**：4.1.2 Name, Role, Value（A）
- **Recommendation**：图标按钮统一加 `aria-label`；可见文字按钮可省略
- **Suggested command**：`/impeccable harden`

---

#### [P1] 硬编码色值与主题令牌混用

- **Location**：`src/` 下 12+ 文件共 500+ 处 `#hex` / `rgba`（`Cabinet.tsx`、`FestiveHourglass.tsx`、`EnvelopeStack.tsx` 等）
- **Category**：Theming
- **Impact**：昼夜切换时部分组件不跟随 `--color-brand-*`；维护成本高、夜间对比不一致
- **Recommendation**：将高频色（木色、纸色、强调色）收敛到 `@theme` 或 CSS 变量；组件只引用 token
- **Suggested command**：`/impeccable extract`

---

### P2 — Minor

#### [P2] 图片无懒加载

- **Location**：全站 `<img>` 无 `loading="lazy"`（含 `children-day/index.tsx`、游戏素材）
- **Category**：Performance
- **Impact**：首屏外资源提前加载，移动端流量与 TTI 受影响
- **Recommendation**：非首屏图片加 `loading="lazy"`；关键 LCP 图保持 eager
- **Suggested command**：`/impeccable optimize`

---

#### [P2] 未使用的重量级依赖

- **Location**：`package.json` L18 — `@google/genai`；源码中无引用
- **Category**：Performance
- **Impact**：若被打包进 bundle 会显著增大体积（需 build 分析确认）
- **Recommendation**：确认无用途后移除；或移至 devDependencies
- **Suggested command**：`/impeccable optimize`

---

#### [P2] z-index 缺乏语义层级

- **Location**：`z-50`、`z-[60]`、`z-40`、`z-[35]`、`z-25` 分散在 `App.tsx`、`Letter520Embed.tsx`、`GameWhackAMole.tsx` 等
- **Category**：Theming / Layout
- **Impact**：新浮层易与现有层冲突；调试堆叠上下文困难
- **Recommendation**：在 `index.css` 定义 `--z-dropdown`、`--z-modal`、`--z-toast` 等语义 scale
- **Suggested command**：`/impeccable layout`

---

#### [P2] 无限循环装饰动画的 GPU 开销

- **Location**：
  - `PolaroidGallery.tsx` L36–58、L79–101 — 8 个 `motion.div` 无限循环 + `blur` + `shadow`
  - `children-day/index.tsx` L397–399 — 多个 `animate-pulse`
  - `FestiveHourglass.tsx` — 烟花 `repeat: Infinity`
- **Category**：Performance
- **Impact**：低端机/旧 iOS 可能掉帧；与缺少 reduced-motion 叠加
- **Recommendation**：减少同时运行的粒子数；用 CSS `will-change` 谨慎标注；reduce 时 `animation: none`
- **Suggested command**：`/impeccable optimize`

---

#### [P2] `resize` 监听触发整柜重算

- **Location**：`Cabinet.tsx` L38–48 — `windowDimensions` state 驱动全部腔体/装饰 scale
- **Category**：Performance
- **Impact**：窗口 resize 时整树重渲染；快速拖拽窗口可能卡顿
- **Recommendation**：用 CSS `clamp`/`dvh` 替代部分 JS scale；或 `ResizeObserver` + debounce
- **Suggested command**：`/impeccable optimize`

---

#### [P2] Spring 动画可能产生 overshoot

- **Location**：`Cabinet.tsx` L172；`EnvelopeStack.tsx` L283；`LetterReader.tsx` L46 等 — `type: 'spring'`
- **Category**：Anti-Pattern / Motion
- **Impact**：弹簧回弹感偏「活泼 UI 模板」；与 impeccable 推荐的 ease-out-quart/expo 不一致
- **Recommendation**：入场改用 `ease: [0.16, 1, 0.3, 1]` 等 ease-out；保留 spring 仅用于物理隐喻交互
- **Suggested command**：`/impeccable animate`

---

#### [P2] 展柜层标 uppercase tracking 语法

- **Location**：`Cabinet.tsx` L232–234、L277–279、L325–327 — `1st Tier · 信笺` 等 `uppercase tracking-widest`
- **Category**：Anti-Pattern
- **Impact**：符合「每层一个 kicker」尚可接受，但与页眉 L115–119 眉标叠加后偏 AI 脚手架感
- **Recommendation**：层标改 sentence case 或仅保留中文；减少 tracking
- **Suggested command**：`/impeccable quieter`

---

### P3 — Polish

#### [P3] 页脚 uppercase 宽字距装饰文案

- **Location**：`Cabinet.tsx` L101–104 — `CRAFTED WITH LOVE · SEALED WITH US`；`PolaroidGallery.tsx` L279
- **Category**：Anti-Pattern
- **Impact**：纯装饰，不影响功能
- **Suggested command**：`/impeccable quieter`

---

#### [P3] 装饰性 backdrop-blur 层叠

- **Location**：`App.tsx` L130–131、`EnvelopeStack.tsx` L151、`GameMemory.tsx` L218 等
- **Category**：Anti-Pattern / Performance
- **Impact**：iOS 上已通过 `.ios-safe-no-blur` 降级（`index.css` L139–142），桌面仍有效能成本
- **Suggested command**：`/impeccable optimize`

---

#### [P3] `select-none` 阻止文字选择

- **Location**：`EnvelopeStack.tsx` L103、`FestivalArchive.tsx` L75、`PolaroidGallery.tsx` L16 等
- **Category**：Accessibility
- **Impact**：用户无法复制日期、标题等文本
- **Suggested command**：`/impeccable harden`

---

#### [P3] 信封时间轴按钮文字偏小

- **Location**：`EnvelopeStack.tsx` L164–168 — 日期按钮 `text-[11px]`、`py-1`
- **Category**：Responsive
- **Impact**：小屏可读性一般
- **Suggested command**：`/impeccable typeset`

---

#### [P3] 520 嵌入层 z-index 高于应用壳

- **Location**：`Letter520Embed.tsx` L10 — `z-[60]` 覆盖 `z-50` 主题拨盘
- **Category**：Layout
- **Impact**：520 页内无法访问昼夜切换（可能符合预期）
- **Suggested command**：`/impeccable layout`

---

## Patterns & Systemic Issues

1. **交互语义化缺口**：可点击热区偏好 `motion.div` / `div`，而非 `<button>`，是全站 a11y 最大系统性问题（展柜、信盒、节日、游戏入口均受影响）。
2. **颜色双轨制**：`theme.ts` + `@theme` 定义了品牌色，但组件层大量 Tailwind 硬编码 `#8C6239`、`#FFFDFB` 等，导致主题切换不完整。
3. **动效无降级路径**：入场、循环、pulse 动画均未考虑 `prefers-reduced-motion`，与 iOS blur 降级（已有）形成不对称。
4. **弱化文字色阶过浅**：`/50`、`/60`、`stone-400` 在暖白底上反复出现，是对比度风险的共同来源。
5. **字体栈踩 reflex-reject**：已提交的 `Plus Jakarta Sans` + `Playfair Display` 组合是品牌身份的一部分，但缺少 DOCUMENT 记录其选用理由；新页面应谨慎再加第三套 sans。

---

## Positive Findings

- **视口与移动端适配扎实**：`100dvh`、`env(safe-area-inset-*)`、`viewport-fit=cover`、矮屏木柜 JS scale（`Cabinet.tsx` L50–67）配合良好。
- **iOS 性能兜底**：`index.css` L134–156 对 `mix-blend-mode` 和 `backdrop-filter` 在移动端主动降级。
- **语义结构有基础**：`Cabinet.tsx` 使用 `<header>`；`StageLayout.tsx` 使用 `<footer>`；`index.html` 设 `lang="zh-CN"`。
- **520 互动页 a11y 较好**：`interactive/520/index.html` 具备 `aria-label`、`aria-live`、`role="group"`。
- **主题系统有创意**：按节气季节 + 日出日落自动切换昼夜（`theme.ts`），非千篇一律 dark mode 开关。
- **展柜概念差异化**：木质层板、装饰物、节日沙漏等交互隐喻明确，避免了纯 card-grid SaaS 布局。

---

## Recommended Actions

按优先级排序（P0 → P1 → P2），末尾 `polish` 作发布前总收：

1. **[P0] `/impeccable harden`**：将所有 `motion.div`/`div` 可点击热区改为按钮语义（展柜木盒、信封、节日卡、游戏入口、沙漏）
2. **[P0] `/impeccable adapt`**：移除 `user-scalable=no`；扩大主题拨盘与虫鸣按钮触控区域
3. **[P0] `/impeccable animate`**：添加全局 `prefers-reduced-motion` 策略，禁用/简化无限循环动画
4. **[P1] `/impeccable harden`**：游戏页恢复 `focus-visible` 环；图标按钮补 `aria-label`
5. **[P1] `/impeccable colorize`**：修复弱化文字对比度；`FestivalArchive` 接入昼夜主题
6. **[P1] `/impeccable clarify`**：木盒 hover tooltip 改为常驻提示或 `aria-label` 文案
7. **[P2] `/impeccable extract`**：将高频硬编码色收敛为 design tokens
8. **[P2] `/impeccable optimize`**：图片懒加载、移除 `@google/genai`、减少同时运行的粒子动画
9. **[P2] `/impeccable quieter`**：减少 uppercase tracking 眉标密度
10. **[P3] `/impeccable polish`**：修复全部 P2/P3 后做发布前总检

---

## 附录：检测工具输出

- `detect.mjs`（`index.css`、`App.tsx`、`Cabinet.tsx`、`ViewportShell.tsx`）：**[]**（未命中静态 slop 规则）
- `context.mjs`：当时报告 **NO_PRODUCT_MD**；根 `PRODUCT.md`、`DESIGN.md` 已在任务 1 建立，本历史快照不重新计算分数。

---

*本文档由 `/impeccable audit` 生成。修复后请重新运行 audit 以更新得分。*
