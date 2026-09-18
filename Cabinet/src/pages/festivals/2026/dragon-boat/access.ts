import { getFestivalNow } from '@/pages/festivals/shared/festivalDateDebug';
import { isDragonBoat2026Released } from './visibility';

/** 统一按正式开放日期判断；本地测试仅通过 getFestivalNow 模拟日期。 */
export function canAccessDragonBoat2026(now: Date = getFestivalNow()): boolean {
  return isDragonBoat2026Released(now);
}
