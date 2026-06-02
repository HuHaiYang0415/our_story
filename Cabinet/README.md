# 展柜（Cabinet）

## 本地开发

```bash
cd Cabinet
npm install
npm run dev
```

访问 http://localhost:3000（520 通过 `#envelopes/520` 在展柜内 iframe 打开，无需单独域名路径）。

## 构建

```bash
npm run build:site
```

将 `dist/` 发布到上级 `demo/` 根目录：`index.html` + `assets/` + `pages/letters/520/`。

## 源码结构（`src/`）

| 路径 | 说明 |
|------|------|
| `app/` | 路由与 `App.tsx` |
| `pages/cabinet/` | 展柜主页 |
| `pages/letters/` | 信盒、`Letter520Embed`、`interactive/520/` 源码 |
| `pages/gallery/` | 相册盒 |
| `pages/festivals/` | 节日与儿童节 |
| `shared/` | 主题、配置、类型 |

邮票：`pages/letters/assets/stamps/`（Vite 打包进 `assets/`，不再单独 `image/` 目录）。

520：`pages/letters/interactive/520/` 构建到 `pages/letters/520/`，由 `Letter520Embed` iframe 加载；返回信盒通过 `postMessage` 切回 `#envelopes`。
