import type { ComponentType } from 'react';
import type { TimeTheme } from '@/shared/types';
import {
  createProgressTracker,
  importWithRetry,
  preloadImageRequired,
  warmAudioStream,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';

export interface ChildrenDayPageProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

/** 先进童心小屋（房间首屏资源），游戏素材与 BGM 延后到开局前预载 */
export async function loadChildrenDayFest(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<ChildrenDayPageProps>> {
  const track = createProgressTracker(onProgress);
  track.set('推开 Play 木门', 0.06);

  const modulePromise = importWithRetry(() => import('./index'));

  const roomAssets = Promise.all([
    import('./images/room/room_background.jpg?url')
      .then((m) => preloadImageRequired(m.default))
      .then(() => track.bump(0.38, '布置房间')),
    import('./images/room/card_box.png?url')
      .then((m) => preloadImageRequired(m.default))
      .then(() => track.bump(0.14, '卡牌就位')),
    import('./images/whack-a-mole/mole_doll.png?url')
      .then((m) => preloadImageRequired(m.default))
      .then(() => track.bump(0.14, '地鼠玩偶')),
  ]);

  const mod = await modulePromise;
  track.bump(0.18, '游戏就绪');

  await roomAssets;
  track.done();

  void import('./audio/round_moon.mp3?url').then((m) => warmAudioStream(m.default));

  return mod.default;
}
