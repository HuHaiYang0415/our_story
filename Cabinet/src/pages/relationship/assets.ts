import princeDawn from './images/theLittlePrince01.svg?url';
import princeDay from './images/theLittlePrince02.svg?url';
import princeNight from './images/theLittlePrince03.svg?url';
import relationshipBgm from './audio/canonInD.mp3?url';

/** 相恋起始日（计入第 1 天） */
export const RELATIONSHIP_START = new Date('2026-06-26T00:00:00');

export const RELATIONSHIP_START_LABEL = '2026.06.26';

export type PrincePeriod = 'dawn' | 'day' | 'night';

/** 插画 URL（完整 Inkscape SVG；白底路径已清理） */
export const PRINCE_SVG: Record<PrincePeriod, string> = {
  dawn: princeDawn,
  day: princeDay,
  night: princeNight,
};

/** 后台预热用；不挡进页门（单文件 3–5MB，勿用 Image 解码门槛） */
export const RELATIONSHIP_PRELOAD_IMAGES = [
  princeDawn,
  princeDay,
  princeNight,
] as const;

/** 正式 BGM：仅 warmAudioStream，不挡进页 */
export const RELATIONSHIP_BGM_URL = relationshipBgm;

export function resolvePrincePeriod(
  hour: number,
  themeIsNight: boolean,
): PrincePeriod {
  if (hour >= 0 && hour < 3) return 'dawn';
  if (themeIsNight) return 'night';
  return 'day';
}

export function daysSinceRelationship(now = Date.now()): number {
  const diff = now - RELATIONSHIP_START.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.max(1, days + 1);
}
