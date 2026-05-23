import solarData from './data/solar-terms.json';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type SolarTermName = (typeof solarData.meta.termOrder)[number];

export interface SolarTermEntry {
  name: SolarTermName;
  longitude: number;
  /** 北京时间公历日 YYYY-MM-DD（无时分秒） */
  date: string;
  year: number;
}

const { meta, terms, byDate } = solarData;

/** 格式化为查表键 YYYY-MM-DD（本地日历日） */
export function formatDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** 当日节气名；表外日期返回 undefined */
export function getTermOnDate(dateKey: string = formatDateKey()): SolarTermName | undefined {
  return byDate.term[dateKey as keyof typeof byDate.term] as SolarTermName | undefined;
}

/** 当日季节（春分/夏至/秋分/冬至划分）；表外日期返回 undefined */
export function getSeasonOnDate(dateKey: string = formatDateKey()): Season | undefined {
  return byDate.season[dateKey as keyof typeof byDate.season] as Season | undefined;
}

/** 某公历年全部 24 节气 */
export function getTermsForYear(year: number): SolarTermEntry[] {
  const row = solarData.years[String(year) as keyof typeof solarData.years];
  return (row ?? []) as SolarTermEntry[];
}

/** 某年四季分界日期（春分/夏至/秋分/冬至） */
export function getSeasonAnchors(year: number): Partial<Record<SolarTermName, string>> {
  const names = ['春分', '夏至', '秋分', '冬至'] as const;
  const out: Partial<Record<SolarTermName, string>> = {};
  for (const t of getTermsForYear(year)) {
    if ((names as readonly string[]).includes(t.name)) {
      out[t.name] = t.date;
    }
  }
  return out;
}

export function getSolarMeta() {
  return meta;
}

export { terms as allSolarTerms };
