import type { ComponentType } from 'react';
import { LETTER_520_EMBED_PATH, resolvePublicAssetUrl } from '@/shared/config/siteConfig';
import {
  createProgressTracker,
  importWithRetry,
  preloadImageRequired,
  warmAudioStream,
  type LoadProgressCallback,
} from '@/shared/load/mediaPreload';

/** 与 interactive/520/content.js ASSETS 对齐，进页前必须就绪 */
const LETTER_520_IMAGE_PATHS = [
  'image/bg-opening.jpg',
  'image/bg-walk.jpg',
  'image/plead-beg.jpg',
  'image/gift-curtain.jpg',
  'image/walk-holding-hands.png',
  'image/walk-not-holding-hands.jpg',
  'image/flower-preserved.png',
  'image/travel-photo-1.jpg',
  'image/travel-photo-2.jpg',
  'image/first-meet-sparkler.jpg',
] as const;

function letter520Asset(path: string): string {
  const root = LETTER_520_EMBED_PATH.replace(/index\.html$/, '');
  return resolvePublicAssetUrl(`${root}${path}`);
}

/** 拉取 520 壳层；配图阻塞进页，BGM 后台预热（iframe 自行加载 index.html） */
export async function loadLetter520(
  onProgress?: LoadProgressCallback,
): Promise<ComponentType> {
  const track = createProgressTracker(onProgress);
  track.set('拆信启封', 0.06);

  const perImage = 0.78 / LETTER_520_IMAGE_PATHS.length;

  const [mod] = await Promise.all([
    importWithRetry(() => import('./Letter520Embed')),
    ...LETTER_520_IMAGE_PATHS.map((path) =>
      preloadImageRequired(letter520Asset(path)).then(() =>
        track.bump(perImage, '配图就绪'),
      ),
    ),
  ]);

  track.bump(0.1, '互动信就绪');
  track.done();

  void warmAudioStream(letter520Asset('bgm/%E7%B2%89%E9%9B%BE%E6%B5%B7.mp3'));

  return mod.Letter520Embed;
}
