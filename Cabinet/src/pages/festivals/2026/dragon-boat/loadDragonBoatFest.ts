import type { ComponentType } from 'react';
import {
  createProgressTracker,
  preloadAudio,
  preloadImage,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';
import type { DragonBoatScrollProps } from './scroll/DragonBoatScroll';

/** 一次拉取端午长卷脚本与主要资源，并上报加载进度 */
export async function loadDragonBoatFest(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<DragonBoatScrollProps>> {
  const track = createProgressTracker(onProgress);
  track.set('展卷启幕', 0.03);

  const scrollModulePromise = import('./scroll/DragonBoatScroll');

  const assetTasks = [
    import('./audio/ambient.mp3?url')
      .then((m) => preloadAudio(m.default))
      .then(() => track.bump(0.42, '载入江声')),
    import('./audio/drums.mp3?url')
      .then((m) => preloadAudio(m.default))
      .then(() => track.bump(0.08, '鼓点就位')),
    import('./images/aicao.png?url')
      .then((m) => preloadImage(m.default))
      .then(() => track.bump(0.05, '节物备齐')),
  ];

  const scrollModule = await scrollModulePromise;
  track.bump(0.32, '长卷就绪');

  await Promise.all(assetTasks);
  track.done();

  return scrollModule.DragonBoatScroll;
}
