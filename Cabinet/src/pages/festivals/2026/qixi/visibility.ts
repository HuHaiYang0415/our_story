/** 2026 七夕公历（农历七月初七） */
export const QIXI_2026_RELEASE = '2026-08-19';

export function isQixi2026Released(now: Date = new Date()): boolean {
  const [y, m, d] = QIXI_2026_RELEASE.split('-').map(Number);
  const releaseMidnight = new Date(y, m - 1, d).getTime();
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();
  return todayMidnight >= releaseMidnight;
}

export type QixiReleaseStatus = 'locked' | 'today' | 'passed';

export function getQixi2026Status(now: Date = new Date()): QixiReleaseStatus {
  const [y, m, d] = QIXI_2026_RELEASE.split('-').map(Number);
  const releaseMidnight = new Date(y, m - 1, d).getTime();
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();

  if (todayMidnight < releaseMidnight) return 'locked';
  if (todayMidnight === releaseMidnight) return 'today';
  return 'passed';
}
