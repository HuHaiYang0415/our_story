import type { ComponentType } from 'react';
import {
  createProgressTracker,
  importWithRetry,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';
import type { DragonBoatScrollProps } from './scroll/DragonBoatScroll';

/** 拉取端午长卷脚本；BGM 与次要资源后台预热，不阻塞进页 */
export async function loadDragonBoatFest(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<DragonBoatScrollProps>> {
  const track = createProgressTracker(onProgress);
  track.set('展卷启幕', 0.08);

  const scrollModule = await importWithRetry(() => import('./scroll/DragonBoatScroll'));
  track.bump(0.82, '长卷就绪');
  track.done();

  return scrollModule.DragonBoatScroll;
}
