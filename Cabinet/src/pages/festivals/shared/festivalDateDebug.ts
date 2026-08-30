/**
 * 本地调试：覆盖「今天」的日期，供所有节日页面、沙漏 / 风物志状态模拟。
 * 仅 sessionStorage，不影响正式 release 判断以外的生产逻辑；
 * 正式包在未开预览开关时也不会挂调试按钮。
 */

const STORAGE_KEY = 'our-story-festival-date-override';
const EVENT_NAME = 'our-story-festival-date-override';

export type FestivalPreviewPreset = 'before' | 'today' | 'week-before' | 'current';

export function getFestivalDateOverride(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** 返回调试覆盖后的「现在」；无覆盖则 new Date() */
export function getFestivalNow(): Date {
  const raw = getFestivalDateOverride();
  if (!raw) return new Date();
  const [y, m, d] = raw.split('-').map(Number);
  if (!y || !m || !d) return new Date();
  const now = new Date();
  return new Date(y, m - 1, d, now.getHours(), now.getMinutes(), now.getSeconds());
}

/** 返回节日预览菜单对应的日期；current 会清除覆盖并回到真实当前时间。 */
export function getFestivalPreviewDate(
  releaseIsoDate: string,
  preset: Exclude<FestivalPreviewPreset, 'current'>,
): string {
  const [year, month, day] = releaseIsoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + (preset === 'before' ? -1 : preset === 'week-before' ? -7 : 0));
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function setFestivalDateOverride(isoDate: string | null): void {
  try {
    if (isoDate) sessionStorage.setItem(STORAGE_KEY, isoDate);
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: isoDate }));
}

export function subscribeFestivalDateOverride(onChange: () => void): () => void {
  const handler = () => onChange();
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener('storage', handler);
  };
}
