# 信封邮票图片

每封信右上角固定 **4:3** 虚线占位框。将图片放入本目录即可，文件名与信封 `id` 对应。

| 信封 | 文件名 |
|------|--------|
| 2026.05.20（letter-520） | `stamp-letter-520.jpg` |
| 未完待续（letter-pending） | `stamp-letter-pending.jpg` |

新增信封时：在 `src/data.ts` 增加条目（`id` 如 `letter-xxx`），对应放入 `stamp-letter-xxx.jpg`。

也可在 `data.ts` 用 `stampImage: 'image/自定义路径.jpg'` 覆盖默认规则。

构建发布：`npm run build:site` 会复制到站点根目录 `image/`。
