# 展柜（Cabinet）

## 直接打开 index.html 查看（推荐）

在项目目录执行一次构建并发布到上级 `demo` 目录：

```bash
cd Cabinet
npm install
npm run build:site
```

然后双击打开：

**`demo/index.html`**

（不是 `Cabinet/index.html`，那是开发入口，浏览器无法直接运行。）

构建后会使用相对路径打包 JS/CSS，可直接 `file://` 打开；同级需保留 **`202660520/`** 文件夹（520 互动页）。

## 本地开发

```bash
cd Cabinet
npm run dev
```

访问 http://localhost:3000

## 重新构建

修改代码后再次执行：

```bash
npm run build:site
```

## Gitee Pages 部署

1. 执行 `npm run build:site`
2. 将 **`demo/` 根目录** 下这些内容推送到 Pages 仓库：
   - `index.html`
   - `assets/`
   - `202660520/`
   - `companion-520/`（可选，旧链接自动跳转到 `202660520/`）
3. 若 Pages 地址带仓库名（如 `https://用户名.gitee.io/仓库名/`），在 `vite.config.ts` 里把 `base: './'` 改为 `base: '/仓库名/'` 后重新 `npm run build:site`

## 信封邮票图

每封信均有 **4:3** 空白占位框。将图片放入 `Cabinet/image/`，按信封 `id` 命名：

- `stamp-letter-520.jpg` — 520 信封
- `stamp-letter-pending.jpg` — 未完待续

执行 `npm run build:site` 后随站点发布。无图片时显示空白虚线框。

## 路径说明

- 展柜 → 信盒 → 2026.05.20 信封 → `202660520/`（线上如 `…/our_story/202660520/`）
- 520 页「返回」→ 回到信盒（`#envelopes`）
