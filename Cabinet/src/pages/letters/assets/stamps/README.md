# 信封邮票图

每封信 4:3 横图，按 `letter.id` 命名：

- `stamp-letter-520.jpg`
- `stamp-letter-pending.jpg`

图片由 `letters.ts` import，`npm run build` 时进入 `Cabinet/dist/assets/`，由运行时 `getLetterStampSrc` 使用；不会单独复制到站点根目录 `image/`。
