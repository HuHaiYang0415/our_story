export interface Letter {
  id: string;
  date: string;
  oneLiner: string;
  title: string;
  sender: string;
  /** 打开信封后跳转到外部 H5（如 202660520 互动页） */
  href?: string;
  /** 无 href 时在弹窗内阅读的正文 */
  content?: string;
  /**
   * 邮票图（可选覆盖）。默认 image/stamp-{id}.jpg，如 stamp-letter-pending.jpg
   * 4:3 横图，放在 Cabinet/image/
   */
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
