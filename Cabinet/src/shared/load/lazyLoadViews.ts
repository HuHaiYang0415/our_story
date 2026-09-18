import { PAGE_REGISTRY, type AppView, type PageDefinition, type PageLoaderKey } from '@/app/pageRegistry';

/** 使用 PageLoader + FestiveLoadScreen 的懒加载专题页 */
const lazyPages = Object.values(PAGE_REGISTRY).filter(
  (page): page is PageDefinition & { loader: PageLoaderKey } => page.loader !== null,
);

export const LAZY_LOAD_VIEWS = lazyPages.map((page) => page.view) as readonly AppView[];

export type LazyLoadView = (typeof LAZY_LOAD_VIEWS)[number];

export function isLazyLoadView(view: AppView): view is LazyLoadView {
  return LAZY_LOAD_VIEWS.includes(view);
}
