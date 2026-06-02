# Our Story 展柜

一个站点、一个入口：`index.html`。展柜、信盒、520 互动、节日页都在同一 SPA 内切换；520 静态资源在 `pages/letters/520/` 由展柜 iframe 加载。

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
| `assets/` | 展柜打包资源（含邮票图） |
| `pages/letters/520/` | 520 互动静态页（iframe 子资源，勿单独当入口打开） |

推送 Pages 前执行一次构建即可。`image/`、`20260520/`、`companion-520/` 等为旧方案，构建脚本会自动删除。

## 源码

全部在 `Cabinet/src/`，见 `Cabinet/README.md`。
