# 520 H5 生图提示词文档

适用于 GPT Image、Nano Banana 2 等工具。画风：**简约扁平插画**；比例统一 **9:16 竖屏**。

---

## 使用说明

1. **生成顺序**：主角设定图（男 1 + 女 1）→ 姿势图 → 场景背景。
2. **一致性**：从第 2 张起上传上一张同角色满意图，提示词末尾加：`same character as reference image, keep face hairstyle glasses and outfit consistent`。
3. **透明底人物**：用「纯色浅灰底」出图，再抠图存为 PNG，放入 `images/`。
4. **场景背景**：环境空镜，放入 `images/`。餐馆用**同构图**生成黄昏、月入夜两张。
5. **每张图都加负面提示**（见文末 Negative Prompt）。
6. **不要生成**：车祸现场、血迹、骨折特写、手术画面、画面文字水印。

---

## 一、全局画风锚点（复制到每条提示词开头）

### Style Anchor（画风）

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, soft pastel color blocks, no gradients overload, gentle shadows, calm and healing mood, consistent line weight, story app aesthetic, high clarity, no text, no watermark, no logo
```

### 主角设定摘要（中文）

| | 男生 | 女生 |
|---|------|------|
| 身高 | 173cm | 177cm |
| 发型 | 黑色微分碎盖 | 黑色长发过肩 |
| 眼镜 | 半框眼镜 | 全框眼镜 |
| 上装 | 白色短袖 | 白色短袖 |
| 下装 | 蓝色牛仔裤阔腿裤 | 灰色长裤（宽松） |
| 鞋 | 运动鞋 | 拖鞋 |

### Boy Anchor（男生设定）

```text
Chinese young man, height 173cm proportion, black textured crop fringe hairstyle (micro parted wispy bangs), wearing semi-rimless half-frame glasses, white short-sleeve t-shirt, blue denim wide-leg jeans, sneakers athletic shoes, slim build, simple flat face with small features, same character design in every image, always keep glasses white shirt blue jeans and sneakers visible when full body shown
```

### Girl Anchor（女生设定）

```text
Chinese young woman, height 177cm proportion (slightly taller silhouette), black hair past shoulders, wearing full-rim rectangular glasses, white short-sleeve t-shirt, gray loose long pants, slippers on feet, gentle expression, simple flat face with small features, same character design in every image, always keep glasses white shirt gray pants and slippers visible when full body shown
```

### Technical（技术参数，附在每条末尾）

```text
vertical composition 9:16 aspect ratio, mobile full-screen framing, centered composition, high resolution, no text, no letters
```

### Reference（有参考图时追加）

```text
same character as reference image, keep face hairstyle glasses and outfit consistent
```

---

## 二、主角设定图（优先生成，各 1 张）

用于后续全部角色图的参考。

| 保存文件名 | 说明 |
|------------|------|
| `ref-boy.png` | 男生设定半身/全身 |
| `ref-girl.png` | 女生设定半身/全身 |

### ref-boy.png

```text
[Style Anchor] [Boy Anchor]
Character design sheet, young man standing front view, semi-rimless glasses clearly visible, white short-sleeve tee blue denim wide-leg jeans white sneakers, neutral gentle expression, full body head to shoes, arms relaxed at sides, plain solid light gray background, flat illustration, [Technical]
```

### ref-girl.png

```text
[Style Anchor] [Girl Anchor]
Character design sheet, young woman standing front view, full-rim glasses clearly visible, white short-sleeve tee gray loose long pants slippers, neutral gentle smile, full body head to shoes, arms relaxed at sides, plain solid light gray background, flat illustration, [Technical]
```

---

## 三、主角姿势图（透明底，建议 9 张）

保存目录：`images/`  
**已取消**（家宴简化，不再需要）：`boy-restaurant-enter`、`boy-sit`、`girl-sit-table`。

### 男生

| 文件名 | 剧情 |
|--------|------|
| `boy-road-walk.png` | 道路独行 · **背后视角**（已生成，H5 已接入） |
| `boy-walk-side.png` | 江滨并肩 · **侧视向左走**（已生成，H5 已接入） |
| `boy-hold-hand.png` | 医院/床边牵手 |
| `boy-support-walk.png` | 搀扶女生散步 |
| `boy-river-gaze.png` | 江边只看她 |
| `boy-phone-worry.png` | 看手机担心（车祸幕） |

**boy-road-walk.png（背后视角 · 道路）**

```text
[Style Anchor] [Boy Anchor]
Young man walking alone seen from BEHIND, back view, full body, walking forward away from camera, white t-shirt tucked in blue wide-leg jeans, white sneakers, semi-rimless glasses visible from side of head, lonely mood, isolated on plain solid light gray or transparent background, flat illustration, [Technical]
```

中文要点：背影、沿画面向前走、与道路幕 `road` 对应。

**boy-walk-side.png（侧视 · 从左往右走 · 江滨）**

```text
[Style Anchor] [Boy Anchor]
Young man in strict SIDE profile view, walking from LEFT to RIGHT across the frame, mid-stride, full body, white tee blue jeans sneakers, semi-rimless glasses, relaxed pace, isolated on plain solid light gray or transparent background, flat illustration, character facing right, [Technical]
```

中文要点：纯侧视、面向右、脚步向左→右；与 `river-pov` / `glance` / `brace-walk` 对应。

**boy-hold-hand.png**

```text
[Style Anchor] [Boy Anchor]
Young man standing, one hand gently holding another person's hand (only partial second hand edge), caring tender expression, upper body to knees, isolated on plain solid light gray background, flat illustration, [Technical]
```

**boy-support-walk.png**

```text
[Style Anchor] [Boy Anchor]
Young man supporting woman on his side, slow walk pose, protective careful mood, full body side view, simple black lumbar brace on her clothes only as minimal shape, no medical detail, isolated on plain solid light gray background, flat illustration, [Technical]
```

**boy-river-gaze.png**

```text
[Style Anchor] [Boy Anchor]
Young man standing still, soft gaze to the side as if looking at loved one, warm sunset rim lighting on figure only, full body three-quarter view, isolated on plain solid light gray background, flat illustration, [Technical]
```

**boy-phone-worry.png**

```text
[Style Anchor] [Boy Anchor]
Young man upper body, looking down at smartphone in hands, worried expression, cool phone glow on face, dark simple background, flat illustration, vertical 9:16, [Technical]
```

### 女生

| 文件名 | 剧情 |
|--------|------|
| `girl-glance.png` | 江滨侧头 |
| `girl-hospital-bed.png` | 病床躺卧 |
| `girl-home-bed.png` | 在家休养 |
| `girl-brace-walk.png` | 护具散步 |
| `girl-happy-rest.png` | 结局花海 |

**girl-glance.png（侧视 · 同行向左走 · 回头看他）**

```text
[Style Anchor] [Girl Anchor]
Young woman in SIDE profile walking from LEFT to RIGHT, taller than average, turning head back over shoulder to glance behind her with subtle smile, full body, white tee gray pants slippers full-rim glasses, walking beside a partner off-frame to her left, flat illustration, isolated on plain solid light gray background, [Technical]
```

**girl-hospital-bed.png**

```text
[Style Anchor] [Girl Anchor]
Young woman lying in hospital bed, peaceful weak but safe, white blanket to chest, NO wounds NO blood NO surgery, only stillness, upper body with pillow, soft cool lighting, minimal bed elements, flat illustration, isolated composition, [Technical]
```

**girl-home-bed.png**

```text
[Style Anchor] [Girl Anchor]
Young woman lying in cozy home bed, warmer lighting than hospital, still wearing full-rim glasses, can keep white tee or soft home top and gray loose pants under blanket, slippers off or beside bed, calm recovery mood, NO medical equipment focus, upper body, flat illustration, isolated on plain solid light gray background, [Technical]
```

**girl-brace-walk.png**

```text
[Style Anchor] [Girl Anchor]
Young woman walking slowly, simple black lumbar support brace over loose clothes, side view full body, hopeful recovery, supported posture, isolated on plain solid light gray background, flat illustration, no injury depiction, [Technical]
```

**girl-happy-rest.png**

```text
[Style Anchor] [Girl Anchor]
Young woman lying peacefully on back, eyes closed or soft smile, relaxed happy, dreamy romantic mood, full body, isolated on plain solid soft pink background, flat illustration, [Technical]
```

---

## 四、场景背景图（建议 7 张）

保存目录：`images/`  
环境为主，**不要出现清晰正脸主角**（人物用 PNG 叠加）。

| 文件名 | 剧情 |
|--------|------|
| `bg-road-fog.png` | 无尽的路 |
| `bg-restaurant-dusk.png` | 餐馆外景 · 黄昏（同构图） |
| `bg-restaurant-moon.png` | 餐馆外景 · 月亮升起（同构图） |
| `bg-riverside-night-crowd.png` | 江滨夜景 · 有人（饭后散步） |
| `bg-riverside-night-empty.png` | 江滨夜景 · 无人（路人散去 / 康复后再来） |
| `bg-hospital-room.png` | 病房 |
| `bg-home-bedroom.png` | 在家卧室 |
| `bg-flower-field.png` | 花海结局 |

**已取消**（家宴简化）：`bg-restaurant-table.png`、`bg-restaurant-night.png`（由 dusk / moon 两张替代）。

### 餐馆外景 · 构图锚点（两张图必须一致）

生成 `bg-restaurant-dusk` 满意后，用**同一张作参考图**，只改光线与天空：

```text
Restaurant Composition Anchor (same for dusk and moon):
Ordinary Chinese neighborhood restaurant on the LEFT side of a street road, storefront facing the road, transparent glass door with warm interior light, simple rectangular glass windows, modest signboard shape above door (no readable text), everyday local eatery, road extending forward on the RIGHT side of frame, same camera angle same building position same layout, flat illustration, environment only no people, vertical 9:16
```

**bg-road-fog.png**

```text
[Style Anchor]
Long straight urban road to horizon, face-on perspective, light fog, dark simplified passerby silhouettes on sides, empty center path for character overlay, environment only, flat illustration, vertical 9:16, [Technical]
```

**bg-restaurant-dusk.png（黄昏）**

```text
[Style Anchor]
[Restaurant Composition Anchor]
Dusk twilight sky, warm orange-pink sunset glow on building facade, restaurant interior light through transparent glass door, soft long shadows, quiet early evening mood, flat illustration, vertical 9:16, [Technical]
```

中文要点：与 moon 版**同一角度、同一餐馆**；黄昏天色、玻璃门暖光、左侧餐馆右侧道路。

**bg-restaurant-moon.png（月入夜）**

```text
[Style Anchor]
[Restaurant Composition Anchor]
Night sky with visible crescent moon or bright moon above rooftops, deep blue-purple evening sky, restaurant still warmly lit inside through glass door, street darker and quieter, same building same composition as dusk version, time has passed after dinner, flat illustration, vertical 9:16, [Technical] [Reference: upload bg-restaurant-dusk.png as reference, only change time of day and sky]
```

中文要点：构图与 dusk **完全一致**；月亮已在天空；店内仍暖光；暗示「一顿饭过后」。

### 江滨夜景 · 构图锚点（侧视、同一路径；两张图仅差有无路人）

```text
Riverside Side-View Composition Anchor (same for crowd and empty):
SIDE-VIEW perspective of riverside promenade at night, pedestrian path runs horizontally LEFT to RIGHT across the lower third of frame where characters walk in profile, calm river and city lights in upper background band, same camera height same path position same river line, flat illustration, environment only NO main couple in scene, vertical 9:16 portrait framing
```

**bg-riverside-night-crowd.png（夜晚 · 有人 · 侧视）**

```text
[Style Anchor]
[Riverside Side-View Composition Anchor]
Night after dinner, deep blue-purple sky, moon or street lamps, path in side view with many simplified passerby silhouettes walking same direction left to right, lively but not crowded, water and city lights above path, flat illustration, vertical 9:16, [Technical]
```

中文要点：**侧视**江滨步道、路人沿左→右方向、与 empty 同构图；人物立绘用侧视叠加。

**bg-riverside-night-empty.png（夜晚 · 无人 · 侧视）**

```text
[Style Anchor]
[Riverside Side-View Composition Anchor]
Same side-view riverside path at night, same lighting and layout, path completely empty NO pedestrians, quiet intimate mood, flat illustration, vertical 9:16, [Technical] [Reference: upload bg-riverside-night-crowd.png, remove people only, keep side-view composition]
```

中文要点：侧视、同角度、夜间、路上无人。

**bg-hospital-room.png**

```text
[Style Anchor]
Minimal hospital room, single bed as simple shapes, soft blue-white flat lighting, calm quiet, empty bed for character overlay, NO patient, flat illustration, vertical 9:16, [Technical]
```

**bg-home-bedroom.png**

```text
[Style Anchor]
Cozy home bedroom, warm lamp flat glow, simple bed pastel bedding, healing safe mood, empty bed area for overlay, flat illustration, vertical 9:16, [Technical]
```

**bg-flower-field.png**

```text
[Style Anchor]
Lower two-thirds filled with flat pink and white flower shapes, soft gradient sky above, dreamy 520 ending mood, NO people, optional abstract soft heart-shaped light in sky, flat illustration, vertical 9:16, [Technical]
```

---

## 五、可选整幕插画（少抠图时用）

**composite-riverside-couple.png — 江边远景（可选）**

```text
[Style Anchor] [Boy Anchor] [Girl Anchor]
Small couple silhouettes walking far along riverside path at night, wide romantic landscape, deep blue night sky, vertical 9:16, flat illustration, [Technical]
```

**composite-bedside.png — 床边牵手**

```text
[Style Anchor] [Boy Anchor] [Girl Anchor]
Young man beside bed holding woman's hand, woman lying under blanket peaceful, tender caring, medium shot, soft flat light, NO injury visible, vertical 9:16, flat illustration, [Technical]
```

---

## 六、与 H5 场景 id 对照

| story.js 场景 id | 建议素材 |
|------------------|----------|
| `road` | bg-road-fog + **boy-road-walk**（背影） |
| `restaurant-dusk` | bg-restaurant-dusk（纯背景） |
| `restaurant-moon` | bg-restaurant-moon（纯背景，同构图） |
| `river-pov` | bg-riverside-night-crowd → night-empty + **boy-walk-side** + ref-girl |
| `glance` | bg-riverside-night-empty + **boy-walk-side** + ref-girl（待 girl-glance） |
| `farewell` / `chat-fill` | 分屏 UI 为主，可用 bg-road-fog 虚化 |
| `accident-phone` | boy-phone-worry（画面 UI 用代码） |
| `hospital` | bg-hospital-room + girl-hospital-bed + boy-hold-hand |
| `home` | bg-home-bedroom + girl-home-bed + boy-hold-hand |
| `brace-walk` | bg-riverside-night-empty + **boy-walk-side** + ref-girl（待 girl-brace-walk） |
| `heart-grow` / `heart-care` / `recover` | 代码心形动画 + boy-river-gaze + girl-brace-walk |
| `ending` | bg-flower-field + girl-happy-rest |

---

## 七、最少生成清单（省图量）

**设定 2 张**：ref-boy、ref-girl  

**角色**：已有 boy-road-walk、boy-walk-side；待生成 girl-glance、girl-hospital-bed、girl-brace-walk、boy-hold-hand 等  

**场景 7 张**：bg-road-fog、bg-restaurant-dusk、bg-restaurant-moon、**bg-riverside-night-crowd**、**bg-riverside-night-empty**、bg-hospital-room、bg-flower-field  

时间线：黄昏餐馆 → 月亮餐馆 → **夜间江滨有人** → **夜间江滨无人**。

---

## 八、Negative Prompt（负面提示，每条都附）

```text
photorealistic, 3D render, anime chibi, detailed texture noise, blurry, deformed hands, extra fingers, ugly, violent, blood, injury, fracture, surgery, hospital gore, car crash, accident scene, watermark, signature, text, caption, logo, letters, numbers, low quality, messy background, harsh neon, hypersexual, wrong outfit colors, missing glasses, girl wearing sneakers instead of slippers, boy wearing slippers instead of sneakers, rimless glasses on girl, thick full-frame glasses on boy
```

---

## 九、拼好即用示例（单条完整英文）

将下面一条复制到生图工具，已包含扁平画风与男女设定。

**示例：女生侧头（girl-glance.png）**

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, soft pastel color blocks, gentle shadows, calm healing mood, no text, no watermark. Chinese young woman, height 177cm proportion, black hair past shoulders, full-rim rectangular glasses, white short-sleeve t-shirt, gray loose long pants, slippers, gentle expression, simple flat face. Young woman walking, turning head to glance back over shoulder, subtle smile, gentle crush mood, full body side view showing glasses and slippers, isolated on plain solid light gray background. vertical composition 9:16 aspect ratio, mobile full-screen framing, high resolution, no text. photorealistic, 3D, chibi, blurry, deformed hands, blood, injury, watermark, text, logo
```

**示例：男生走路（boy-road-walk.png）**

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, soft pastel color blocks, calm healing mood, no text, no watermark. Chinese young man, height 173cm proportion, black textured crop fringe hairstyle, semi-rimless half-frame glasses, white short-sleeve t-shirt, blue denim wide-leg jeans, sneakers, slim build, simple flat face. Young man walking alone toward viewer, front three-quarter view, full body showing glasses shirt jeans and sneakers, isolated on plain solid light gray background. vertical composition 9:16 aspect ratio, high resolution, no text. photorealistic, 3D, chibi, blurry, deformed hands, wrong outfit colors, no glasses, blood, watermark, text, logo
```

**示例：江滨夜无人（bg-riverside-night-empty.png）**

```text
Minimal flat design illustration, modern Chinese romance visual novel, clean geometric shapes, calm healing mood, no text, no watermark. Riverside walking path at night, deep blue-purple night sky, moon or street lamps, calm river, completely empty path no pedestrians, quiet romantic solitude, same composition as crowded night version, environment only. vertical composition 9:16 aspect ratio, high resolution, no text. photorealistic, 3D, daytime, sunset, crowd, people, blood, watermark, text, logo
```

---

## 十、出图后压缩建议

| 类型 | 格式 | 宽度 | 目标大小 |
|------|------|------|----------|
| 场景背景 | WebP 或 JPG | 1080px | 80–200 KB |
| 人物 PNG | PNG（透明） | 600–800px 高 | 50–150 KB |

---

文档版本：与 `520-story` 项目剧情同步。素材就绪后，可在 Agent 模式下将 H5 切换为图片分层显示。
