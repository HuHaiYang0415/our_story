/** 2026 端午节公历 release 日（五月初五） */
export const DRAGON_BOAT_2026_RELEASE = '2026-06-19';

export function isDragonBoat2026Released(now: Date = new Date()): boolean {
  const [y, m, d] = DRAGON_BOAT_2026_RELEASE.split('-').map(Number);
  const releaseMidnight = new Date(y, m - 1, d).getTime();
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();
  return todayMidnight >= releaseMidnight;
}

export type DragonBoatReleaseStatus = 'locked' | 'today' | 'passed';

export function getDragonBoat2026Status(now: Date = new Date()): DragonBoatReleaseStatus {
  const [y, m, d] = DRAGON_BOAT_2026_RELEASE.split('-').map(Number);
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
