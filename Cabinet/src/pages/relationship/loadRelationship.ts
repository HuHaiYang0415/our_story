import type { ComponentType } from 'react';
import type { TimeTheme } from '@/shared/types';
import {
  createProgressTracker,
  importWithRetry,
  warmAudioStream,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';
import { RELATIONSHIP_BGM_URL, RELATIONSHIP_PRELOAD_IMAGES } from './assets';

export interface RelationshipPageProps {
  theme: TimeTheme;
  onBackToCabinet: () => void;
}

/**
 * 进页门槛只挡 JS chunk。
 * 插画（大 SVG）与 BGM（约 11MB）均后台预热，不阻塞进页。
 */
export async function loadRelationship(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<RelationshipPageProps>> {
  const track = createProgressTracker(onProgress);
  track.set('点亮星灯', 0.12);

  const mod = await importWithRetry(() => import('./index'));
  track.bump(0.7, '打开纪念册');
  track.done();

  for (const url of RELATIONSHIP_PRELOAD_IMAGES) {
    void fetch(url, { cache: 'force-cache' }).catch(() => undefined);
  }
  void warmAudioStream(RELATIONSHIP_BGM_URL);

  return mod.default;
}
