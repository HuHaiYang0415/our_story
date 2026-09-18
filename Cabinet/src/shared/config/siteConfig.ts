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

import type { AppView } from '@/app/pageRegistry';
import { PAGE_REGISTRY } from '@/app/pageRegistry';
export type { AppView } from '@/app/pageRegistry';

export function getPageTitle(view: AppView, suffix?: string | null): string {
  const pageSuffix = suffix ?? PAGE_REGISTRY[view].titleSuffix;
  if (!pageSuffix) return SITE_TITLE;
  return `${SITE_TITLE} · ${pageSuffix}`;
}

export function applyDocumentTitle(title: string): void {
  document.title = title;
}
