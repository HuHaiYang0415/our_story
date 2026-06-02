export interface Letter {
  id: string;
  date: string;
  oneLiner: string;
  title: string;
  sender: string;
  /** 展柜内嵌互动页（如 520） */
  interactive?: '520';
  /** 无 interactive 时在弹窗内阅读的正文 */
  content?: string;
  /** 邮票图（可选覆盖）；默认使用 assets/stamps 下对应 import */
  stampImage?: string;
}

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
