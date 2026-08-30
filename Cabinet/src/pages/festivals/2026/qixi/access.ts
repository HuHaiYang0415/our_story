import { ALLOW_FESTIVAL_PAGE_PREVIEW } from '@/shared/config/featureFlags';
import { isQixi2026Released } from './visibility';

/** 正式 release 或开发预览模式下可访问七夕页 */
export function canAccessQixi2026(now: Date = new Date()): boolean {
  return isQixi2026Released(now) || ALLOW_FESTIVAL_PAGE_PREVIEW;
}
