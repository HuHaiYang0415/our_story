import roomBackground from './image/room_background.jpg';
import cardBox from './image/card_box.png';
import moleDoll from './image/gameWhackAMole/mole_doll.png';
import moleDollLunging from './image/gameWhackAMole/mole_doll_lunging.png';
import moleGettingHit from './image/gameWhackAMole/mole_getting_hit.png';
import molePoppingOut from './image/gameWhackAMole/mole_popping_out.png';
import moleGameBackground from './image/gameWhackAMole/mole_game_background.jpg';
import gaocangwentai from './image/gameMemory/gaocangwentai.png';
import guangzhi from './image/gameMemory/guangzhi.png';
import jiyonglv from './image/gameMemory/jiyonglv.png';
import labixiaoxin from './image/gameMemory/labixiaoxin.png';
import meiya from './image/gameMemory/meiya.png';
import taiyuannanazi from './image/gameMemory/taiyuannanazi.png';
import yeyuanxiangrikui from './image/gameMemory/yeyuanxiangrikui.png';
import yeyuanxiaobai from './image/gameMemory/yeyuanxiaobai.png';

export const childrenDayImages = {
  roomBackground,
  cardBox,
  moleDoll,
  moleDollLunging,
  moleGettingHit,
  molePoppingOut,
  moleGameBackground,
} as const;

export const memoryCardImages: Record<string, string> = {
  'gaocangwentai.png': gaocangwentai,
  'guangzhi.png': guangzhi,
  'jiyonglv.png': jiyonglv,
  'labixiaoxin.png': labixiaoxin,
  'meiya.png': meiya,
  'taiyuannanazi.png': taiyuannanazi,
  'yeyuanxiangrikui.png': yeyuanxiangrikui,
  'yeyuanxiaobai.png': yeyuanxiaobai,
};

export function getMemoryCardImage(filename: string): string | undefined {
  return memoryCardImages[filename];
}
