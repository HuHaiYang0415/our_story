import roomBackground from './images/room/room_background.jpg';
import cardBox from './images/room/card_box.png';
import moleDoll from './images/whack-a-mole/mole_doll.png';
import moleDollLunging from './images/whack-a-mole/mole_doll_lunging.png';
import moleGettingHit from './images/whack-a-mole/mole_getting_hit.png';
import molePoppingOut from './images/whack-a-mole/mole_popping_out.png';
import moleGameBackground from './images/whack-a-mole/mole_game_background.jpg';
import gaocangwentai from './images/memory/gaocangwentai.png';
import guangzhi from './images/memory/guangzhi.png';
import jiyonglv from './images/memory/jiyonglv.png';
import labixiaoxin from './images/memory/labixiaoxin.png';
import meiya from './images/memory/meiya.png';
import taiyuannanazi from './images/memory/taiyuannanazi.png';
import yeyuanxiangrikui from './images/memory/yeyuanxiangrikui.png';
import yeyuanxiaobai from './images/memory/yeyuanxiaobai.png';

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
