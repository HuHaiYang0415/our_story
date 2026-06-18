import { preloadImage, warmAudioStream } from '@/shared/load/mediaPreload';
import { childrenDayImages, memoryCardImages } from './assets';

/** 翻牌游戏：卡牌图必载，BGM 后台拉流 */
export async function preloadMemoryGameAssets(): Promise<void> {
  await Promise.all(Object.values(memoryCardImages).map((url) => preloadImage(url)));
  const bgm = await import('./audio/round_moon.mp3?url');
  warmAudioStream(bgm.default);
}

/** 打地鼠：场景与地鼠精灵必载，BGM 后台拉流 */
export async function preloadWhackMoleGameAssets(): Promise<void> {
  await Promise.all([
    preloadImage(childrenDayImages.moleGameBackground),
    preloadImage(childrenDayImages.molePoppingOut),
    preloadImage(childrenDayImages.moleGettingHit),
    preloadImage(childrenDayImages.moleDollLunging),
  ]);
  const [bgmFast, bgmNormal] = await Promise.all([
    import('./audio/dig_dug_theme_song_fast.mp3?url'),
    import('./audio/dig_dug_theme_song.mp3?url'),
  ]);
  warmAudioStream(bgmFast.default);
  warmAudioStream(bgmNormal.default);
}

export type ChildrenDayGameId = 'memory' | 'whack-mole';

export function preloadChildrenDayGame(game: ChildrenDayGameId): Promise<void> {
  return game === 'memory' ? preloadMemoryGameAssets() : preloadWhackMoleGameAssets();
}
