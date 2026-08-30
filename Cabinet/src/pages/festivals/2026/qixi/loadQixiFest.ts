import type { ComponentType } from 'react';
import {
  createProgressTracker,
  importWithRetry,
  preloadImageRequired,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';
import type { QixiBridgeProps } from './QixiBridge';
import { QIXI_MOMENT_URL } from './assets';

/** 七夕页只阻塞首屏必需的照片；没有音频和额外节庆素材。 */
export async function loadQixiFest(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<QixiBridgeProps>> {
  const track = createProgressTracker(onProgress);
  track.set('准备相纸', 0.08);

  const mod = await importWithRetry(() => import('./QixiBridge'));
  track.bump(0.42, '照片载入');
  await preloadImageRequired(QIXI_MOMENT_URL);
  track.bump(0.42, '可以打开');
  track.done();

  return mod.QixiBridge;
}