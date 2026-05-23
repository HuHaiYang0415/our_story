# Our Story 展柜

展柜首页 + 时光信箱 + 520 互动 H5，可部署 GitHub Pages。

## 在线访问

推送后在 GitHub 仓库 Settings → Pages → Source 选 **master** 分支、根目录 `/`。

## 本地开发

```bash
cd Cabinet
npm install
npm run dev
```

## 构建并更新站点根目录

```bash
cd Cabinet
npm run build:site
```

会更新根目录的 `index.html` 与 `assets/`。

## 目录

| 路径 | 说明 |
|------|------|
| `index.html` | 展柜入口（构建产物） |
| `assets/` | 打包后的 JS/CSS |
| `Cabinet/` | React 源码 |
| `companion-520/` | 520 互动 H5 |
