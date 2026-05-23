import { getSeasonOnDate, getTermOnDate, formatDateKey, type Season } from './solarTerms';
import type { TimeTheme } from './types';

export type { Season };

const SEASON_SCHEDULE: Record<
  Season,
  { label: string; sunrise: string; sunset: string }
> = {
  spring: { label: '春', sunrise: '06:00', sunset: '18:30' },
  summer: { label: '夏', sunrise: '05:00', sunset: '19:30' },
  autumn: { label: '秋', sunrise: '06:00', sunset: '18:00' },
  winter: { label: '冬', sunrise: '07:00', sunset: '17:30' },
};

function formatClock(date: Date): string {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

function isNightAt(timeString: string, sunrise: string, sunset: string): boolean {
  return timeString < sunrise || timeString >= sunset;
}

/** 按节气日期表取季节，再按四季日出日落判断昼夜 */
export function getTimeTheme(now: Date = new Date()): TimeTheme {
  const dateKey = formatDateKey(now);
  const season = getSeasonOnDate(dateKey) ?? 'spring';
  const { label, sunrise, sunset } = SEASON_SCHEDULE[season];
  const timeString = formatClock(now);
  return {
    dateKey,
    month: now.getMonth() + 1,
    hour: now.getHours(),
    minute: now.getMinutes(),
    timeString,
    season,
    seasonLabel: label,
    sunrise,
    sunset,
    isNight: isNightAt(timeString, sunrise, sunset),
    solarTerm: getTermOnDate(dateKey),
  };
}

export function applyThemeCssVars(isNight: boolean): void {
  const root = document.documentElement;
  root.setAttribute('data-theme', isNight ? 'night' : 'day');

  if (isNight) {
    root.style.setProperty('--color-brand-bg', '#120F0D');
    root.style.setProperty('--color-brand-text', '#ECE5DF');
    root.style.setProperty('--color-wood-dark', '#332214');
    root.style.setProperty('--color-wood-mid', '#422C1A');
    root.style.setProperty('--color-wood-light', '#5E3E23');
    root.style.setProperty('--color-wood-shelf', '#1E120A');
  } else {
    root.style.setProperty('--color-brand-bg', '#FDFBF7');
    root.style.setProperty('--color-brand-text', '#2D241E');
    root.style.setProperty('--color-wood-dark', '#5A3E23');
    root.style.setProperty('--color-wood-mid', '#6D4C2B');
    root.style.setProperty('--color-wood-light', '#8C6239');
    root.style.setProperty('--color-wood-shelf', '#4c3217');
  }
}
