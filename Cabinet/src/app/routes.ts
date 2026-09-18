import { getPageDefinitionByHash, PAGE_REGISTRY, type AppView } from './pageRegistry';

export type { AppView } from './pageRegistry';

export const VIEW_HASH: Record<AppView, string> = Object.fromEntries(
  Object.values(PAGE_REGISTRY).map((page) => [page.view, page.hash]),
) as Record<AppView, string>;

export function viewFromHash(): AppView {
  const page = getPageDefinitionByHash(window.location.hash);
  if (!page) return 'cabinet';
  if (!page.access()) return page.archive ? 'festival-archive' : 'cabinet';
  return page.view;
}
