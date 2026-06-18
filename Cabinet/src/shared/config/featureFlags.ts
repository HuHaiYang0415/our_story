/**
 * 本地 `npm run dev` 时为 true；`npm run build` 产物中为 false，季节不可手动切换。
 * 若需在预览包中临时开启，可设环境变量 VITE_ALLOW_SEASON_DEBUG=true 后构建。
 */
export const ALLOW_SEASON_DEBUG =
  import.meta.env.DEV || import.meta.env.VITE_ALLOW_SEASON_DEBUG === 'true';

/**
 * 本地 dev 或显式开启时可预览尚未 release 的节日页（如 2026 端午）。
 * 生产 build 默认 false，不影响正式 release 判断。
 */
export const ALLOW_FESTIVAL_PAGE_PREVIEW =
  import.meta.env.DEV || import.meta.env.VITE_ALLOW_FESTIVAL_PREVIEW === 'true';
