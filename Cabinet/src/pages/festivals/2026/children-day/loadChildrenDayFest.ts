import type { ComponentType } from 'react';
import type { TimeTheme } from '@/shared/types';
import {
  createProgressTracker,
  preloadAudio,
  preloadImage,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';

export interface ChildrenDayPageProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

/** 一次拉取儿童节页脚本与主要资源 */
export async function loadChildrenDayFest(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType<ChildrenDayPageProps>> {
  const track = createProgressTracker(onProgress);
  track.set('推开 Play 木门', 0.03);

  const modulePromise = import('./index');

  const assetTasks = [
    import('./images/room/room_background.jpg?url')
      .then((m) => preloadImage(m.default))
      .then(() => track.bump(0.14, '布置房间')),
    import('./images/room/card_box.png?url')
      .then((m) => preloadImage(m.default))
      .then(() => track.bump(0.05, '卡牌就位')),
    import('./images/whack-a-mole/mole_game_background.jpg?url')
      .then((m) => preloadImage(m.default))
      .then(() => track.bump(0.07, '打地鼠场')),
    import('./audio/round_moon.mp3?url')
      .then((m) => preloadAudio(m.default))
      .then(() => track.bump(0.28, '记忆配乐')),
    import('./audio/dig_dug_theme_song_fast.mp3?url')
      .then((m) => preloadAudio(m.default))
      .then(() => track.bump(0.1, '打地鼠配乐')),
    Promise.all([
      import('./images/memory/gaocangwentai.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/guangzhi.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/jiyonglv.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/labixiaoxin.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/meiya.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/taiyuannanazi.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/yeyuanxiangrikui.png?url').then((m) => preloadImage(m.default)),
      import('./images/memory/yeyuanxiaobai.png?url').then((m) => preloadImage(m.default)),
    ]).then(() => track.bump(0.18, '回忆相册')),
  ];

  const mod = await modulePromise;
  track.bump(0.1, '游戏就绪');

  await Promise.all(assetTasks);
  track.done();

  return mod.default;
}
