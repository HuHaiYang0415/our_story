# Our Story 展柜

一个站点、一个入口：`index.html`。展柜、信盒、相册、节日馆、儿童节互动、520 情书都在同一应用内切换；520 互动页以 iframe 子资源加载。

面向 GitHub Pages 等静态托管：构建产物直接发布到仓库根目录，无后端依赖。

---

## 技术栈

| 层级 | 选型 | 说明 |
|------|------|------|
| 运行时 | 浏览器（Web） | Android / iOS / Windows / macOS 均通过系统浏览器或 PWA 访问 |
| 框架 | React 19 | 函数组件 + Hooks |
| 语言 | TypeScript 5.8 | 类型检查：`npm run lint`（`tsc --noEmit`） |
| 构建 | Vite 6 | 开发服务器、HMR、生产打包 |
| 样式 | Tailwind CSS 4 | `@theme` 设计令牌 + `@layer utilities` 自定义工具类 |
| 动画 | Motion 12（`motion/react`） | 视图切换、展柜交互、季节氛围粒子 |
| 图标 | lucide-react | 线性图标 |
| 路由 | Hash 路由（自研） | `window.location.hash` + `routes.ts`，无 react-router |
| 数据 | 本地 JSON + TS 模块 | `solar-terms.json`、`holidays.json`、`letters.ts` |
| 辅助脚本 | Python / Node | 节气/节日数据生成、图片优化、站点同步 |

**未使用但存在于依赖中**：`@google/genai`（源码无引用，可考虑移除）。

---

## 项目架构

### 目录与部署关系

```
demo/                          # 站点根（GitHub Pages 发布目录）
├── index.html                 # 唯一用户入口（由构建同步）
├── assets/                    # Vite 打包资源（JS/CSS/图/音频）
├── pages/letters/520/         # 520 互动静态页（iframe 子资源）
├── manifest.webmanifest       # PWA 清单
└── Cabinet/                   # 全部源码
    ├── src/                   # 应用源码
    ├── public/                # 静态资源（图标、manifest 模板）
    ├── scripts/               # 构建辅助（copy-site、数据生成）
    └── dist/                  # vite build 输出（中间产物）
```

构建链路：`Cabinet/vite build` → `dist/` → `scripts/copy-site.mjs` → 同步到 `demo/` 根目录。

### 应用分层

```
main.tsx
  └── App.tsx                  # 根壳：主题拨盘、视图路由、AnimatePresence 转场
        ├── pages/cabinet/     # 展柜主页（木柜、装饰物、节日沙漏）
        ├── pages/letters/     # 信盒、信阅读器、520 嵌入层
        ├── pages/gallery/     # 相册盒
        └── pages/festivals/   # 节日档案馆、2026 儿童节（含小游戏）
```

**共享层 `shared/`**：

| 路径 | 职责 |
|------|------|
| `layout/` | `ViewportShell`（视口滚动壳）→ `StageLayout`（展柜舞台骨架）→ `StageCabinet`（木柜宽度约束） |
| `theme/` | 节气季节、昼夜判断、`data-theme` / CSS 变量切换 |
| `motion/` | 跨页面统一的粒子/飞鸟坐标算法（百分比定位，规避 iOS vh 抖动） |
| `config/` | 站点标题、520 路径、功能开关 |
| `ui/` | `SeasonAtmosphere` 等复用氛围组件 |
| `utils/` | 夏夜虫鸣等 Web Audio 工具 |

### 路由与视图模型

无服务端路由。`App.tsx` 用 `useState<ViewState>` 管理当前视图，与 URL hash 双向同步：

| Hash | 视图 | 页面组件 |
|------|------|----------|
| （空） | `cabinet` | `Cabinet` |
| `#envelopes` | `box-envelopes` | `EnvelopeStack` |
| `#envelopes/520` | `letter-520` | `Letter520Embed`（iframe） |
| `#photos` | `box-photos` | `PolaroidGallery` |
| `#festivals` | `festival-archive` | `FestivalArchive` |
| `#festivals/children-day` | `festival-2026-ChildrenDay` | 儿童节主页 + 子游戏 |

视图切换由 `AnimatePresence` + `motion.div` 包裹，统一 opacity/scale 转场。

### 布局骨架（多端一致性的核心）

所有主视图共享同一套「舞台」约束：

```
#app-root (fixed inset-0, h-dvh)          ← 钉在可视视口，防底部露白
└── .view-layer (h-full, overflow-hidden)
      └── ViewportShell                   ← 纵向 flex；主区可滚动
            ├── overlay（氛围层，pointer-events-none）
            ├── .viewport-main（flex-1, overflow-y-auto）
            └── .viewport-foot（底栏，可选）
```

展柜页在此基础上套 `StageLayout`：标题区（`.stage-header`）+ 木柜（`.stage-cabinet`）+ 贴边装饰槽（`.stage-edge-deco-slot`）+ 地面/页脚。

**矮屏适配**：`Cabinet.tsx` 监听 `resize`，按视口高度对木柜腔体与装饰物做 JS 缩放（`scale = height / 820`）；CSS 侧用 `100dvh`、`env(safe-area-inset-*)`、移动端关闭 `backdrop-filter`（`.ios-safe-no-blur`）。

### 双运行时：React 主应用 + 520  vanilla 子页

520 情书是独立的 **HTML + CSS + 原生 JS**（`src/pages/letters/interactive/520/`），构建时复制到 `pages/letters/520/`。

- **加载方式**：`Letter520Embed` 用全屏 `<iframe>` 嵌入
- **返回导航**：520 页 `postMessage` → `App.tsx` 监听 `OUR_STORY_NAV_MESSAGE` → 切回 `#envelopes`
- **样式隔离**：iframe 内自有 `styles.css`，与主应用 Tailwind 令牌不共享

这是当前架构中唯一的「子应用」边界。

### 主题系统

- **自动**：按 `solar-terms.json` 取季节，按日出/日落时间判断昼夜
- **手动**：右下角主题拨盘可强制切换昼夜；开发模式可预览季节
- **落地**：`applyThemeCssVars()` 写 `document.documentElement` 的 `data-theme` 与 `--color-brand-*` 变量；Tailwind `bg-brand-bg` 等消费这些变量
- **例外**：`FestivalArchive` 等少数页面仍硬编码亮色背景（已知问题，见 `Cabinet/docs/UI-AUDIT.md`）

### 资源与音频

- 图片/音频：Vite 打包（`import`）或 520 目录静态文件
- 游戏音效：`SoundSynth.ts`（Web Audio 合成）+ MP3 资源
- 夏夜虫鸣：`cricketSounds.ts`，仅展柜页夏季夜间播放

---

## 本地开发

```bash
cd Cabinet
npm install
npm run dev
```

打开 http://localhost:3000 ，从展柜进入信盒，再打开 520 信封即可。

## 构建发布

```bash
cd Cabinet
npm run build:site
```

会在仓库根目录生成：

| 路径 | 说明 |
|------|------|
| `index.html` | 唯一用户入口 |
| `assets/` | 展柜打包资源（含邮票图、游戏素材） |
| `pages/letters/520/` | 520 互动静态页（iframe 子资源，勿单独当入口打开） |

推送 Pages 前执行一次构建即可。`image/`、`20260520/`、`companion-520/` 等为旧方案，构建脚本会自动删除。

## 源码导航

全部在 `Cabinet/src/`，更细的模块说明见 `Cabinet/README.md`。

| 路径 | 说明 |
|------|------|
| `app/` | `App.tsx` 根壳、`routes.ts` hash 路由 |
| `pages/cabinet/` | 展柜主页、木柜装饰、节日沙漏 |
| `pages/letters/` | 信盒、`LetterReader`、`Letter520Embed`、`interactive/520/` 源码 |
| `pages/gallery/` | 相册盒 |
| `pages/festivals/` | 节日档案馆、儿童节互动与小游戏 |
| `shared/` | 布局骨架、主题、动效坐标、配置、类型 |
| `data/` | 节气、节日 JSON 数据 |

## 质量文档

- UI 技术审计：`Cabinet/docs/UI-AUDIT.md`（无障碍、性能、主题、响应式、反模式）
