/**
 * 舞台动效坐标：统一使用容器内百分比，避免 iOS Safari 因 vh/vw / 地址栏伸缩导致布局漂移。
 */

/** 落体动画：用 top 百分比（相对大气层），勿用 motion 的 y:'100%'（相对自身尺寸） */
export const STAGE_FALL_TOP = ['-6%', '108%'] as const;

export type FallingParticleKind = 'petal' | 'leaf' | 'snow';

export interface FallingParticleLayout {
  startLeft: number;
  windDriftRange: number;
  duration: number;
  delay: number;
  scale: number;
  rotationDegree?: number;
}

export function layoutFallingParticle(
  index: number,
  total: number,
  kind: FallingParticleKind,
): FallingParticleLayout {
  const t = total <= 1 ? 0 : index / (total - 1);

  if (kind === 'petal') {
    return {
      startLeft: 4 + t * 88,
      windDriftRange: 48 + (index % 3) * 38,
      duration: 8 + (index % 5) * 2.5,
      delay: index * 0.65,
      scale: 0.55 + (index % 4) * 0.15,
      rotationDegree: 180 + (index % 4) * 90,
    };
  }

  if (kind === 'leaf') {
    return {
      startLeft: 2 + t * 90,
      windDriftRange: 42 + (index % 3) * 42,
      duration: 10 + (index % 5) * 2,
      delay: index * 0.8,
      scale: 0.55 + (index % 3) * 0.18,
      rotationDegree: 240 + (index % 4) * 90,
    };
  }

  return {
    startLeft: 2 + t * 92,
    windDriftRange: 38 + (index % 3) * 48,
    duration: 6 + (index % 5) * 1.5,
    delay: index * 0.25,
    scale: 0.35 + (index % 4) * 0.2,
  };
}

/**
 * 飞燕路径：left/top 相对大气层；轨迹整体上移，最低点不低于展柜顶沿（约视口 30% 以内）。
 */
export const SWALLOW_FLIGHT_1 = {
  left: ['8%', '42%', '76%', '52%', '22%', '8%'],
  top: ['10%', '5%', '14%', '4%', '8%', '10%'],
  rotate: [15, -10, 45, -30, 25, 15],
} as const;

export const SWALLOW_FLIGHT_2 = {
  left: ['72%', '44%', '12%', '38%', '78%', '72%'],
  top: ['5%', '13%', '4%', '9%', '5%', '5%'],
  rotate: [-20, 30, -45, 10, -10, -20],
} as const;
