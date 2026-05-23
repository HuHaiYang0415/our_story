# companion-520 生图提示词

画风与 `story/docs/image-prompts.md` 一致：**简约扁平插画**；比例 **9:16 竖屏**（贴纸 `plead-beg` 可用 1:1）。

---

## 使用说明

1. **生成顺序**：主角设定图（男 1 + 女 1）→ 散步插图 2 张 → 贴纸 → 花 → 全屏背景。
2. **一致性**：从第 2 张人物图起上传上一张满意图，末尾加 Reference 句。
3. **放入目录**：`companion-520/assets/images/`（或你项目里的 `image/`，需与 `content.js` 的 `ASSETS` 路径一致）。
4. **出游路牌/小巷**：`travel-photo-1/2` 用**真实照片**，不用 AI 生成。
5. **每张都加**文末 Negative Prompt；**不要**画面文字、水印、血腥。

---

## 身高设定（重要，每条双人图必遵守）

| | 男生 | 女生 |
|---|------|------|
| 身高 | 约 173cm 体感 | 约 177cm 体感 |
| 画面对比 | 略矮一点 | **比男生略高一点**（1–3cm 视觉差即可） |
| 站立同框 | 头顶低于女生 | 头顶略高于男生 |

### Couple Height Rule（有男女同框时，追加到提示词）

```text
IMPORTANT height relationship: the young woman is visibly slightly taller than the young man when standing together (about 1-3cm difference in head top level), girl's head top slightly above boy's head top, natural couple proportion not exaggerated, do NOT make boy taller than girl
```

### 中文核对

生成双人图后请检查：**女生头顶略高于男生**，侧身、牵手、并肩走都保持一致。

---

## 一、全局画风锚点（每条开头）

### Style Anchor

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, soft pastel color blocks, gentle shadows, warm playful romantic mood, 520 date night feeling, consistent line weight, mobile story app aesthetic, high clarity, no text, no watermark, no logo
```

### Boy Anchor（男生）

```text
Chinese young man, about 173cm body proportion, visibly shorter than the girl when standing together, black textured crop fringe hairstyle (micro parted wispy bangs), wearing semi-rimless half-frame glasses, white short-sleeve t-shirt, blue denim wide-leg jeans, sneakers athletic shoes, slim build, simple flat face with small features, same character design in every image, always keep glasses white shirt blue jeans and sneakers visible when full body shown
```

### Girl Anchor（女生，比男生略高）

```text
Chinese young woman, about 177cm body proportion, visibly slightly taller than the boy when standing together (head top slightly above boy's head top), black hair past shoulders, wearing full-rim rectangular glasses, white short-sleeve t-shirt, gray loose long pants, slippers on feet, gentle expression, simple flat face with small features, same character design in every image, always keep glasses white shirt gray pants and slippers visible when full body shown
```

### Technical（每条末尾）

```text
vertical composition 9:16 aspect ratio, mobile full-screen framing, lower third slightly darker for text overlay, high resolution, no text, no letters
```

### Reference（有参考图时追加）

```text
same character as reference image, keep face hairstyle glasses outfit and height relationship consistent (girl still slightly taller than boy)
```

---

## 二、素材清单与 H5 对照

| 文件名 | 用于节点 | 说明 |
|--------|----------|------|
| `bg-opening.png` | opening, bridge | 开场/过渡全屏底图 |
| `bg-walk.png` | walk, hand, walkVisual, photo1/2 | 散步章节底图 |
| `bg-snack.png` | snack | 夜宵章节底图 |
| `bg-flowers.png` | flowers | 花礼章节底图 |
| `bg-ending.png` | ending | 结尾全屏底图 |
| `travel-photo-1.jpg` | photo1 | **真实照片**：半山森林公园路牌 |
| `travel-photo-2.jpg` | photo2 | **真实照片**：宁波老外滩小巷 |
| `walk-holding-hands.png` | walkVisual（牵手） | 双人插图，女生略高 |
| `walk-not-holding-hands.png` | walkVisual（不牵） | 双人插图，女生略高 |
| `plead-beg.png` | hand 第一次「不好」 | 1:1 男生 Q 版贴纸 |
| `flower-preserved.png` | flowers | 永生花礼盒 |

---

## 三、主角设定图（优先生成，各 1 张）

用于后续全部人物图参考。可与 `story/images/ref-boy.png`、`ref-girl.png` 共用。

| 保存文件名 | 说明 |
|------------|------|
| `ref-boy.png` | 男生设定全身 |
| `ref-girl.png` | 女生设定全身（比男生略高） |

### ref-boy.png

```text
[Style Anchor] [Boy Anchor]
Character design sheet, young man standing front view full body head to shoes, semi-rimless glasses clearly visible, white tee blue denim wide-leg jeans sneakers, neutral gentle expression, plain solid light gray background, flat illustration, [Technical]
```

### ref-girl.png

```text
[Style Anchor] [Girl Anchor] [Couple Height Rule]
Character design sheet, young woman standing front view full body head to shoes, full-rim glasses clearly visible, white tee gray loose pants slippers, standing beside a slightly shorter young man silhouette guide OR solo with note she is taller than 173cm male partner, gentle expression, plain solid light gray background, flat illustration, [Technical]
```

**双人设定对照图（可选，强烈推荐）**

保存为 `ref-couple-height.png`，以后每张双人图都上传它：

```text
[Style Anchor] [Boy Anchor] [Girl Anchor] [Couple Height Rule]
Young couple standing side by side front view full body, holding hands optional, girl visibly slightly taller than boy head top level clear, both glasses outfits as specified, neutral expressions, plain light gray background, height difference obvious but natural, flat illustration, [Technical]
```

---

## 四、全屏背景（环境空镜，无人物）

### bg-opening.png

```text
[Style Anchor]
Soft early evening sky through window, warm pink and cream gradient clouds, subtle glowing phone screen light on windowsill suggesting long-distance chat, cozy romantic mood, empty room corner minimal furniture, no people, dreamy and sweet, lots of negative space in center for UI text, flat illustration, [Technical]
```

### bg-walk.png

```text
[Style Anchor]
Night riverside walking path in small Chinese city, soft street lamps, calm water reflection, pastel blue purple and pink sky, empty path no people, peaceful online-date atmosphere, gentle bokeh lights in distance, flat illustration, [Technical]
```

### bg-snack.png

```text
[Style Anchor]
Small night food stall scene, steaming bowl of Chinese lean meatball soup, warm orange lantern light, wooden table, cozy late-night snack mood, no people, appetizing but simple flat shapes, empty space upper area for text, flat illustration, [Technical]
```

### bg-flowers.png

```text
[Style Anchor]
Soft romantic tabletop scene, blurred gift ribbon and petals in background, warm pink cream lighting, no people, gentle bokeh, space for foreground gift photo overlay, flat illustration, [Technical]
```

### bg-ending.png

```text
[Style Anchor]
Dreamy field of soft pink and white flat flowers under gentle night-to-dawn gradient sky, subtle abstract heart-shaped light in clouds, calm solemn romantic ending, no people, elegant not childish, space center for blessing text, flat illustration, [Technical]
```

---

## 五、人物插图（双人必加 Couple Height Rule + Reference）

### walk-holding-hands.png

```text
[Style Anchor] [Boy Anchor] [Girl Anchor] [Couple Height Rule] [Reference]
Young couple walking side by side on night riverside path, holding hands clearly visible, gentle happy expressions, girl slightly taller than boy head top clearly visible, white tees boy in blue jeans sneakers girl in gray pants slippers, simple flat night walk background, medium shot knees up, romantic playful mood, [Technical]
```

### walk-not-holding-hands.png

```text
[Style Anchor] [Boy Anchor] [Girl Anchor] [Couple Height Rule] [Reference]
Same couple same night riverside path same height relationship girl still slightly taller, walking close together but hands NOT touching, boy glancing shyly up slightly toward taller girl, slightly awkward cute mood not sad, same outfits, medium shot knees up, [Technical]
```

### plead-beg.png（1:1 贴纸，仅男生）

```text
[Style Anchor] [Boy Anchor simplified chibi]
Cute chibi half-body sticker of same young man with semi-rimless glasses, puppy eyes, hands clasped begging pose, slight blush, plain white or transparent background, thick clean outline, emoji sticker style flat illustration, centered only, square 1:1, no text, no girl in frame
```

### flower-preserved.png

```text
[Style Anchor]
Gift box opened revealing preserved flower bouquet in soft pink cream and dusty rose colors, delicate ribbon, romantic 520 present, tabletop soft lighting, no people, product illustration flat minimal, gentle sparkle, [Technical]
```

---

## 六、拼好即用示例（牵手散步，完整英文一条）

复制到生图工具，已含身高关系：

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, soft pastel color blocks, warm playful romantic mood, no text, no watermark. Chinese young man about 173cm proportion visibly shorter than partner, semi-rimless half-frame glasses, white short-sleeve tee, blue denim wide-leg jeans, sneakers. Chinese young woman about 177cm proportion visibly slightly taller than man, head top slightly above man's head top, full-rim rectangular glasses, white short-sleeve tee, gray loose long pants, slippers. IMPORTANT: girl slightly taller than boy when standing together natural proportion. Young couple walking side by side on night riverside path holding hands, gentle happy expressions, medium shot knees up. vertical 9:16, high resolution, no text. photorealistic, 3D, boy taller than girl, girl shorter than boy, wrong height, blurry, deformed hands, watermark, text, logo
```

---

## 七、Negative Prompt（每条都附）

```text
photorealistic, 3D render, anime chibi except plead sticker, detailed texture noise, blurry, deformed hands, extra fingers, ugly, violent, blood, crowded messy background, harsh neon, watermark, signature, text, caption, logo, letters, low quality, wrong outfit colors, missing glasses, boy taller than girl, man taller than woman, same height couple, girl shorter than boy, height role reversed, rimless glasses on girl, thick full-frame glasses on boy, girl wearing sneakers instead of slippers, boy wearing slippers instead of sneakers
```

---

## 八、出图后压缩建议

| 类型 | 格式 | 宽度 | 目标大小 |
|------|------|------|----------|
| 全屏背景 bg-*.png | WebP 或 JPG | 1080px | 80–200 KB |
| 插图 / 花 | PNG 或 WebP | 1080px | 100–250 KB |
| plead-beg | PNG 透明 | 512px | < 80 KB |
| travel-photo | JPG | 1080px 长边 | 150–400 KB |

未放置图片时，H5 会使用 CSS 主题渐变作为兜底，不影响试玩。
