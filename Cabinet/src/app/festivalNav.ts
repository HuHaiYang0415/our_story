import {
  getPageDefinition,
  getPageDefinitionById,
  type AppView,
  type PageId,
} from './pageRegistry';

/** 展柜沙漏 / 档案馆卡片 / 展柜饰物统一的 pageId → 视图映射 */
/** 按正式页面门禁判断某个视图在当前（含本地日期模拟）是否可进入。 */
export function canAccessFestivalView(view: AppView): boolean {
  return getPageDefinition(view).access();
}

export function resolveFestivalView(pageId: PageId): AppView | null {
  const page = getPageDefinitionById(pageId);
  return page && page.access() ? page.view : null;
}
