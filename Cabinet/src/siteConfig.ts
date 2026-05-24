/** 全站统一的浏览器标签与 SEO 文案 */
export const SITE_TITLE = '小胡❤平平';
export const SITE_DESCRIPTION = 'Our Story — 写给她的日子';

/** 520 互动页目录名（部署后 URL 形如 …/our_story/202660520/） */
export const INTERACTIVE_520_PATH = '202660520/';

export const RETURN_FROM_520_KEY = 'our-story-return';

export type AppView = 'cabinet' | 'box-envelopes' | 'box-photos';

const VIEW_PAGE_SUFFIX: Record<AppView, string | null> = {
  cabinet: null,
  'box-envelopes': '时光信箱',
  'box-photos': '流光相册盒',
};

export function getPageTitle(view: AppView, suffix?: string | null): string {
  const pageSuffix = suffix ?? VIEW_PAGE_SUFFIX[view];
  if (!pageSuffix) return SITE_TITLE;
  return `${SITE_TITLE} · ${pageSuffix}`;
}

export function applyDocumentTitle(title: string): void {
  document.title = title;
}

/** 解析外部 H5 链接；file:// 下自动补全 index.html */
export function resolveExternalHref(href: string): string {
  const url = new URL(href, window.location.href);
  if (window.location.protocol === 'file:' && !url.pathname.endsWith('.html')) {
    url.pathname = `${url.pathname.replace(/\/?$/, '')}/index.html`;
  }
  return url.href;
}
