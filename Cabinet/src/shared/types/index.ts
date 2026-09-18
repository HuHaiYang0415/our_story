export type { Letter } from '@/domain/content';

export interface Box {
  id: string;
  title: string;
  label: string;
  color: string;
  description: string;
  isOpenable: boolean;
}

export interface TimeTheme {
  dateKey: string;
  month: number;
  hour: number;
  minute: number;
  timeString: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  seasonLabel: string;
  sunrise: string;
  sunset: string;
  isNight: boolean;
  solarTerm?: string;
}
