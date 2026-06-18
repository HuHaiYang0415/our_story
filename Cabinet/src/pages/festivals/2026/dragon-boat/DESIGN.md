# 2026 端午节 · 端午长卷（v2.2）

> 单屏切幕叙事页，接入 Our Story 节日档案馆。  
> 旧版江畔条案见 `legacy-v1/`。

---

## 产品定位

**一句话**：像展开一卷数字长卷——永远只占一屏，滑动/滚轮换幕，艺术字与卷轴/morph 转场承载祝福与私信。

**场景**：午后江风、端午晴照；用户以「展卷」手势逐幕阅读，而非点击热区弹窗。

---

## 信息架构（六幕）

| 幕序 | chapter | sceneLabel | layout | 内容要点 |
|------|---------|------------|--------|----------|
| 1 | 壹 | 引 · 展卷 | center | 蒲节记胜；进入时卷轴展开动画 |
| 2 | 贰 | 江 · 远眺 | river-glyph | 大字「江」+ 角标「天」；正文偏右下 |
| 3 | 叁 | 渡 · 鼓震 | race-diagonal | 「渡」左上；龙舟右下斜向（无「近舟」标签） |
| 4 | 肆 | 物 · 案上 | festive-split | 「节」+ 粽形 + 「物」；祝福辅文 + 桥接展信 |
| 5 | 伍 | 寄情 · 展信 | center | `letter.ts`（用户自改） |
| 6 | 陆 | 收 · 记胜 | center | 永远「粽」意你 |

文案配置：`scroll-beats.ts`（分幕）、`letter.ts`（书信）。  
肆幕**不再引用** `legacy-v1/zongzi.ts`；节物祝福与桥接句均在 `scroll-beats.ts` 内维护。

### 叙事弧线（公域 → 私域）

1. **壹～肆**：岁时白描 → 江景 → 竞渡 → 案头节物  
2. **肆末桥接**：「江上的热闹落进案头，该把话写进卷里了。」→ 自然接入伍「展信」  
3. **伍、陆**：私信与收束（用户保留修改权）

---

## 交互

### 开幕

- **无额外卷轴 UI**：壹幕本身（含四角框、晴照底、蒲节记胜）以 `clip-path` 自上而下缓缓展开，约 2.1s
- 展开完成前无法切幕；`prefers-reduced-motion` 跳过动画

### 切幕

- **手机**：上滑下一幕，下滑上一幕
- **桌面**：滚轮 / `↑↓` / `PageUp/Down`
- **冷却**：约 820ms（morph 转场约 980ms）
- **首幕提示**：「向上滑动 · 滚轮展卷」，首次切幕后消失
- **章印进度**：右侧六枚淡章印（壹～陆），当前幕略染朱、已读略深，悬停时稍清晰，可点击跳转
- **音效**：默认开启（展卷 / morph / 彩蛋 / 拆信 + 轻 BGM）；页头音量钮可静音
- **贰幕交互**：触摸/拖动江面区域，指尖波纹扩散

### 转场策略

| 路径 | 类型 | 说明 |
|------|------|------|
| 壹 → 贰 | morph-ink | 墨迹从「蒲节记胜」晕染扩散为江色 |
| 贰 → 叁 | morph-jiang | 同幕内：「江」字原位反向 ScrollFloat 消失 |
| 叁 → 肆 | morph-boat | 同幕内：竞渡舟自原位加速右划，暖褐沿舟迹铺开 |
| 肆 → 伍 | morph-zongzi-seal | 粽形飞入右上角化火漆，伍幕书信带印 |
| 其余 | default | 标准墨染 + 幕间位移 |

morph 在**当前幕内**播放（不卸载场景），完成后切入下一幕；下一幕以 `enterFromMorph` 衔接前后动作。

---

## 肆 · 物：粽子视觉

### 当前实现

- 组件：`scroll/decor/ZongziMark.tsx`（内联三角粽 SVG）
- **标题**：「节」+ 粽形标记 + 「物」（粽形替代中间字位，而非普通「粽」字）
- **左侧**：大号粽形 + 竖排辅文「咸甜各安其味」
- **右侧**：副题 + 祝福正文 + 桥接句

### 若需自定义书法/图片

| 位置 | 建议 | 规格 |
|------|------|------|
| 标题中间位（现粽形） | 篆/楷「粽」字融入三角轮廓 | SVG 或 PNG，透明底，约 96×120px，viewBox 对齐 `ZongziMark` |
| 陆幕 finale「粽」 | 朱印描边字 | 可选替换 `InkDisplay` finale 模式中「粽」字为图片 |
| 左侧大图 | 写实/水墨粽 | 替换 `ZongziMark` size=`lg`，建议 220×260px |

放入 `images/scene/` 后，在 `ZongziMark.tsx` 或 `FestiveSplitLayout.tsx` 切换为 `<img>` 即可。

---

## 视觉系统

### 布局 preset

- **center**：引、信、收 — 居中纵排  
- **river-glyph**：江字锚定左中，正文右下  
- **race-diagonal**：标题左上，龙舟右下  
- **festive-split**：左图右文栅格（窄屏改为上下）

### 字体

| 层级 | 字体 | 用途 |
|------|------|------|
| 主标题 | `--font-serif` | 艺术大字 |
| 副题 / 夹注 / 桥接 | `--font-hand` | 展卷感 |
| 正文 | `--font-serif` | 祝词、书信 |

### 动效时间轴（单幕内）

```
开幕    卷轴 scaleY 展开 → 下轴 → 题签淡入
0.08s+  主标题逐字
0.42s   副题 + 墨线
0.52s+  正文逐行
0.38s   叁幕龙舟斜向驶入
0.85s+  夹注彩蛋
```

---

## 技术结构

```
dragon-boat/
├── index.tsx
├── access.ts / visibility.ts
├── letter.ts                 # 伍幕书信（用户自改）
├── scroll-beats.ts           # 分幕文案 + layout + forwardTransition
├── scroll-theme.ts
├── scroll.css
├── scroll/
│   ├── DragonBoatScroll.tsx
│   ├── SceneEngine.tsx       # 开幕 / 幕内 morph / 手势
│   ├── SceneStage.tsx
│   ├── morph/                # morphConstants, morphWashes（幕内转场参数）
│   ├── TransitionCurtain.tsx
│   ├── layouts/              # RiverGlyph, RaceDiagonal, FestiveSplit
│   ├── typography/
│   └── decor/
│       ├── DragonBoatSvg.tsx # showLabel 默认 false
│       └── ZongziMark.tsx
└── legacy-v1/                # v1 归档；含 zongzi.ts
```

---

## 路由与发布

- Hash：`#festivals/dragon-boat-2026`
- pageId：`2026_DragonBoatFestival`
- 正式发布：`visibility.ts` → `2026-06-19`

---

## 变更记录

| 日期 | 版本 | 说明 |
|------|------|------|
| 2026-06 | v2.0 | 端午长卷：单屏切幕 |
| 2026-06 | v2.1 | 艺术字排版、墨染切幕 |
| 2026-06 | v2.2 | 页面自身 clip-path 展开；幕内 morph（江字溶波、舟划转场）；肆幕粽形 |
| 2026-06 | v2.2.1 | 移除独立卷轴 overlay；morph 改为同幕单时间轴连贯动画 |
