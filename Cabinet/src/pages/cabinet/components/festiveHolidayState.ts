import holidaysData from '@/data/holidays.json';

export type FestiveHolidayState = {
  festivalName: string;
  daysLeft: number;
};

type HolidayRecord = {
  name: string;
  date: string;
  year?: number;
};

/** 返回当前日期之后最近的节日；日期覆盖仍由页面层的 debug 工具统一提供。 */
export function getFestiveHolidayState(currentDate: Date): FestiveHolidayState {
  const list = (holidaysData as { festivals?: HolidayRecord[] }).festivals ?? [];
  const todayMidnight = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  ).getTime();

  let nearestFest: HolidayRecord | null = null;
  let minDiffDays = Infinity;

  for (const holiday of list) {
    if (!holiday.date) continue;
    if (holiday.year === 2026 && holiday.date < '2026-06-01') continue;

    const [year, month, day] = holiday.date.split('-').map(Number);
    const holidayMidnight = new Date(year, month - 1, day).getTime();
    const diffMs = holidayMidnight - todayMidnight;
    if (diffMs < 0) continue;

    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < minDiffDays) {
      minDiffDays = diffDays;
      nearestFest = holiday;
    }
  }

  return {
    festivalName: nearestFest?.name ?? '元旦',
    daysLeft: minDiffDays === Infinity ? 45 : minDiffDays,
  };
}
