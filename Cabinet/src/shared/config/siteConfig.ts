/** 全站统一的浏览器标签与 SEO 文案 */
export const SITE_TITLE = '小胡❤平平';
export const SITE_DESCRIPTION = 'Our Story — 写给她的日子';

/** 520 静态资源相对站点根的路径（由 Vite 构建复制，在展柜 iframe 内打开） */
export const LETTER_520_EMBED_PATH = 'pages/letters/520/index.html';

export const OUR_STORY_NAV_MESSAGE = 'our-story-navigate';

/** 当前文档所在目录（兼容 base: './'、/repo/index.html、/repo 无尾斜杠） */
export function getDocumentBaseUrl(): string {
  const { origin, pathname } = window.location;
  if (pathname.endsWith('/')) return `${origin}${pathname}`;
  const last = pathname.split('/').pop() ?? '';
  if (/\.[a-zA-Z0-9]+$/.test(last)) {
    return `${origin}${pathname.replace(/[^/]+$/, '')}`;
  }
  return `${origin}${pathname}/`;
}

/** 解析相对站点根的 public 资源为绝对 URL */
export function resolvePublicAssetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL;
  const cleaned = relativePath.replace(/^\//, '');
  return new URL(`${base}${cleaned}`, getDocumentBaseUrl()).href;
}

export function getLetter520EmbedSrc(): string {
  return resolvePublicAssetUrl(LETTER_520_EMBED_PATH);
}

export type AppView =
  | 'cabinet'
  | 'box-envelopes'
  | 'letter-520'
  | 'box-photos'
  | 'relationship'
  | 'festival-archive'
  | 'festival-2026-ChildrenDay'
  | 'festival-2026-DragonBoat'

const VIEW_PAGE_SUFFIX: Record<AppView, string | null> = {
  cabinet: null,
  'box-envelopes': '时光信箱',
  'letter-520': '2026.05.20',
  'box-photos': '流光相册盒',
  relationship: '相恋时光',
  'festival-archive': '节日风物志',
  'festival-2026-ChildrenDay': '2026 儿童节',
  'festival-2026-DragonBoat': '2026 端午节',
};

export function getPageTitle(view: AppView, suffix?: string | null): string {
  const pageSuffix = suffix ?? VIEW_PAGE_SUFFIX[view];
  if (!pageSuffix) return SITE_TITLE;
  return `${SITE_TITLE} · ${pageSuffix}`;
}

export function applyDocumentTitle(title: string): void {
  document.title = title;
}
