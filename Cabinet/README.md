# 展柜（Cabinet）

## 直接打开 index.html 查看（推荐）

```bash
cd Cabinet
npm install
npm run build:site
```

然后双击 **`demo/index.html`**（不是 `Cabinet/index.html`）。

## 本地开发

```bash
cd Cabinet
npm run dev
```

- 展柜：http://localhost:3000  
- 520 互动：http://localhost:3000/20260520/

## 源码结构（`src/`）

| 路径 | 说明 |
|------|------|
| `app/` | 路由壳、`App.tsx` |
| `pages/cabinet/` | 展柜主页 |
| `pages/letters/` | 时光信箱、邮票、`interactive/520/` |
| `pages/gallery/` | 流光相册盒 |
| `pages/festivals/` | 节日风物志、儿童节等 |
| `shared/` | 主题、类型、全站配置 |
| `data/` | 节气、节假日 JSON |

## 构建发布

`npm run build:site` 会在上级 `demo/` 根目录**生成**（不提交 Git）：

1. `index.html` + `assets/` — Vite 打包  
2. `image/` — 来自 `src/pages/letters/assets/stamps/`  
3. `20260520/` — 来自 `src/pages/letters/interactive/520/`  
4. `202660520/index.html` — 旧错误路径跳转页

## 信封邮票

放入 `src/pages/letters/assets/stamps/`：

- `stamp-letter-520.jpg`
- `stamp-letter-pending.jpg`

## 路径说明

- 展柜 → 信盒 → 2026.05.20 信封 → `20260520/`
- 520 页「返回」→ 信盒（`#envelopes`）
