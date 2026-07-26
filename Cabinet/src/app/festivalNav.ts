import { canAccessDragonBoat2026 } from '@/pages/festivals/2026/dragon-boat/access';
import type { ViewState } from './routes';

/** 展柜沙漏 / 档案馆卡片 / 展柜饰物统一的 pageId → 视图映射 */
export function resolveFestivalView(pageId: string): ViewState | null {
  if (pageId === 'relationship-anniversary') return 'relationship';
  if (pageId === '2026_ChildrenDay') return 'festival-2026-ChildrenDay';
  if (pageId === '2026_DragonBoatFestival') {
    return canAccessDragonBoat2026() ? 'festival-2026-DragonBoat' : null;
  }
  return null;
}
