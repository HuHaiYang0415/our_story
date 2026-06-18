import type { ViewState } from '@/app/routes';

/** 使用 PageLoader + FestiveLoadScreen 的懒加载专题页 */
export const LAZY_LOAD_VIEWS = [
  'letter-520',
  'festival-2026-ChildrenDay',
  'festival-2026-DragonBoat',
] as const satisfies readonly ViewState[];

export type LazyLoadView = (typeof LAZY_LOAD_VIEWS)[number];

export function isLazyLoadView(view: ViewState): view is LazyLoadView {
  return (LAZY_LOAD_VIEWS as readonly ViewState[]).includes(view);
}
