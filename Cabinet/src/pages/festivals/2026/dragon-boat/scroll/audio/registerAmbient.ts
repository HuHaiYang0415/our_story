import ambientMp3 from '../../audio/ambient.mp3';
import { dragonBoatSound } from './DragonBoatSound';

/** 进入端午页时注册 BGM 源（不在模块加载时副作用启动） */
export function registerDragonBoatAmbient() {
  dragonBoatSound.setAmbientSrc(ambientMp3);
}
