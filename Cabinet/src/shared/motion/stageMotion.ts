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

/** 夏夜萤火虫：伪随机分布 + 组件内 x/y 像素轻摆（纵向用 top%，勿用 transform y%） */
export interface FireflyLayout {
  startLeft: number;
  baseTop: number;
  duration: number;
  phase: number;
  scale: number;
  wiggleX: number;
  wiggleYUp: number;
  wiggleYDown: number;
  peakOpacity: number;
  initialOpacity: number;
  dimOpacity: number;
  flipX: boolean;
  scaleMulHigh: number;
  scaleMulLow: number;
  scaleMulMid: number;
}

function fireflyUnit(index: number, channel: number): number {
  const x = Math.sin((index + 1) * 127.1 + channel * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

export function layoutFirefly(index: number): FireflyLayout {
  const wiggleX = 10 + Math.round(fireflyUnit(index, 6) * 18);

  return {
    startLeft: 2 + fireflyUnit(index, 1) * 96,
    baseTop: 8 + fireflyUnit(index, 2) * 84,
    duration: 13 + fireflyUnit(index, 3) * 20,
    phase: fireflyUnit(index, 4),
    scale: 0.38 + fireflyUnit(index, 5) * 0.34,
    wiggleX,
    wiggleYUp: 16 + Math.round(fireflyUnit(index, 7) * 24),
    wiggleYDown: 12 + Math.round(fireflyUnit(index, 8) * 22),
    peakOpacity: 0.6 + fireflyUnit(index, 9) * 0.3,
    initialOpacity: 0.55 + fireflyUnit(index, 15) * 0.4,
    dimOpacity: 0.08 + fireflyUnit(index, 16) * 0.16,
    flipX: fireflyUnit(index, 10) > 0.5,
    scaleMulHigh: 1.08 + fireflyUnit(index, 11) * 0.12,
    scaleMulLow: 0.86 + fireflyUnit(index, 12) * 0.08,
    scaleMulMid: 1.04 + fireflyUnit(index, 13) * 0.1,
  };
}

/** 夏夜萤火虫数量：进入页面即应有可见光点 */
export const FIREFLY_COUNT = 20;

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
