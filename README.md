# Our Story 展柜

展柜首页 + 时光信箱 + 520 互动 H5，可部署 GitHub Pages。

## 在线访问

推送前在 `Cabinet` 执行 `npm run build:site`，将构建产物推到仓库根目录后，在 GitHub Pages 选择 **master** 分支、根目录 `/`。

## 本地开发

```bash
cd Cabinet
npm install
npm run dev
```

- 展柜：http://localhost:3000  
- 520：http://localhost:3000/20260520/（读源码目录，无需根目录 `20260520/`）

## 构建发布

```bash
cd Cabinet
npm run build:site
```

会在 **仓库根目录** 生成（已 `.gitignore`，勿手改、勿提交）：

| 生成路径 | 源码位置 |
|----------|----------|
| `index.html`、`assets/` | Vite 打包 |
| `image/` | `Cabinet/src/pages/letters/assets/stamps/` |
| `20260520/` | `Cabinet/src/pages/letters/interactive/520/` |
| `202660520/index.html` | 构建脚本生成的旧链接跳转 |

部署 Pages 时需包含上述生成结果；本地双击预览前也需先执行一次 `build:site`。

## 仓库内主要目录

| 路径 | 说明 |
|------|------|
| `Cabinet/` | React 与 520 源码（唯一维护入口） |
| `companion-520/` | 更旧 URL 跳转到 `20260520/` |
| `story/` | 独立长叙事 H5（可选） |
