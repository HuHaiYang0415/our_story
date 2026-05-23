# 520 互动叙事 H5

单页分幕故事，适合部署到 Gitee Pages，在微信中通过链接打开。

## 本地预览

用浏览器直接打开 `index.html`，或在本目录启动静态服务：

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

手机预览：电脑与手机同一 WiFi，访问 `http://<电脑IP>:8080`。

## 部署到 Gitee Pages

1. 在 Gitee 新建仓库，上传本目录全部文件（`index.html` 需在仓库根目录，或见下方说明）。
2. 仓库 → **服务** → **Gitee Pages** → 选择分支（一般为 `master`/`main`）→ 部署目录选 **`/`**（若你把文件放在子目录，则选该子目录）。
3. 部署成功后得到地址，例如：`https://你的用户名.gitee.io/仓库名/`
4. 微信中发送该链接即可；建议用 HTTPS。

若仓库根目录不是本项目，可将 `520-story` 内文件放到仓库根，或把整个仓库只用于本 H5。

## 自定义

| 文件 | 作用 |
|------|------|
| `figures.js` | 人物 PNG：`boy-road-walk`（背影）、`boy-walk-side`（侧视）、`ref-girl` / `ref-boy` |
| `scenes.js` | 场景背景图路径 |
| `story.js` | 各幕旁白、画面、动画 |
| `styles.css` | 画面样式、背景图、人物大小 |
| `app.js` | 点击屏幕推进、自动等待（车祸/医院幕） |
| `assets/bgm.mp3` | 可选背景音乐，并在 `index.html` 的 `<audio>` 上设置 `src="assets/bgm.mp3"` |

## 生图提示词

扁平画风、主角设定与全部场景/姿势的英文提示词见：**[docs/image-prompts.md](docs/image-prompts.md)**。

## 人物形象怎么调

1. **男主 / 女主**：替换 `images/ref-boy.png`、`images/ref-girl.png`（透明底更佳；当前黑底用 CSS `mix-blend-mode: screen` 去底）。
2. **换大小**：编辑 `styles.css` 中 `.figure-img`、`.boy-walk .figure-img` 等。
3. **江滨**：背景用侧视构图；男生用 `boy-walk-side.png`，女生待 `girl-glance.png` 等可再替换 `ref-girl`。

## 当前版本说明

- 男主/女主为 `images/ref-boy.png`、`ref-girl.png`；餐馆：黄昏+月亮；江滨：**夜间有人** + **夜间无人**（非白天）。
- 车祸通过放大手机聊天界面与文字叙事，不展示事故画面。
- 医院仅表现女孩躺在病床上，不展示伤情细节。
- 结尾为花海与大心，可继续改某一幕时告知场景编号（`story.js` 中的 `id`）。

## 场景 id 一览

`road` → `restaurant-dusk` → `restaurant-moon` → `river-pov` → `glance` → `farewell` → `chat-fill` → `accident-phone` → `hospital` → `home` → `brace-walk` → `heart-grow` → `heart-care` → `recover` → `ending`

修改某一幕时，说明 id 即可精确定位。
