import { ALLOW_FESTIVAL_PAGE_PREVIEW } from '@/shared/config/featureFlags';
import { isDragonBoat2026Released } from './visibility';

/** 正式 release 或开发预览模式下可访问端午页 */
export function canAccessDragonBoat2026(now: Date = new Date()): boolean {
  return isDragonBoat2026Released(now) || ALLOW_FESTIVAL_PAGE_PREVIEW;
}
