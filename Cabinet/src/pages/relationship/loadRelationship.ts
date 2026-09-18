import type { ComponentType } from 'react';
import type { TimeTheme } from '@/shared/types';
import {
  createProgressTracker,
  importWithRetry,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';

export interface RelationshipPageProps {
  theme: TimeTheme;
  onBackToCabinet: () => void;
}

/**
 * 进页门槛只挡 JS chunk；当前插画由 img 按需加载，BGM 只在用户打开音乐后创建。
 */
export async function loadRelationship(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<RelationshipPageProps>> {
  const track = createProgressTracker(onProgress);
  track.set('点亮星灯', 0.12);

  const mod = await importWithRetry(() => import('./index'));
  track.bump(0.7, '打开纪念册');
  track.done();

  return mod.default;
}
