import type { ComponentType } from 'react';
import { LETTER_520_EMBED_PATH } from '@/shared/config/siteConfig';
import {
  createProgressTracker,
  preloadAudio,
  preloadFetch,
  preloadImage,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';

function letter520Asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${LETTER_520_EMBED_PATH.replace(/index\.html$/, '')}${path}`;
}

/** 一次拉取 520 互动信壳层与静态资源 */
export async function loadLetter520(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType> {
  const track = createProgressTracker(onProgress);
  track.set('拆信启封', 0.04);

  const modulePromise = import('./Letter520Embed');

  const assetTasks = [
    preloadFetch(letter520Asset('index.html')).then(() => track.bump(0.12, '信笺展开')),
    preloadImage(letter520Asset('image/bg-opening.jpg')).then(() => track.bump(0.22, '封面渐显')),
    preloadImage(letter520Asset('image/bg-walk.jpg')).then(() => track.bump(0.14, '散步场景')),
    preloadImage(letter520Asset('image/plead-beg.jpg')).then(() => track.bump(0.1, '互动场景')),
    preloadAudio(letter520Asset('bgm/%E7%B2%89%E9%9B%BE%E6%B5%B7.mp3')).then(() =>
      track.bump(0.24, '配乐就位'),
    ),
  ];

  const mod = await modulePromise;
  track.bump(0.08, '互动信就绪');

  await Promise.all(assetTasks);
  track.done();

  return mod.Letter520Embed;
}
