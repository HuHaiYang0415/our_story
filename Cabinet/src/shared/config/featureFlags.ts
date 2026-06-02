/**
 * 本地 `npm run dev` 时为 true；`npm run build` 产物中为 false，季节不可手动切换。
 * 若需在预览包中临时开启，可设环境变量 VITE_ALLOW_SEASON_DEBUG=true 后构建。
 */
export const ALLOW_SEASON_DEBUG =
  import.meta.env.DEV || import.meta.env.VITE_ALLOW_SEASON_DEBUG === 'true';
