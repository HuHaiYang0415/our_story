import { RELATIONSHIP_BGM_URL } from './assets';
import { stopHtmlAudio } from '@/shared/load/mediaPreload';

/**
 * 相恋页 BGM：HTMLAudio + canonInD.mp3。
 * 不在模块加载时 start；离开页必须 stop（清 canplay / pointerdown）。
 */
export class RelationshipAmbient {
  private htmlAudio: HTMLAudioElement | null = null;
  private unlockHandler: (() => void) | null = null;
  private canplayHandler: (() => void) | null = null;
  private playing = false;

  start() {
    if (this.playing) return;
    this.playing = true;
    this.startHtmlBgm(RELATIONSHIP_BGM_URL);
  }

  stop() {
    this.playing = false;
    this.clearUnlock();
    this.clearCanplay();
    if (this.htmlAudio) {
      stopHtmlAudio(this.htmlAudio);
      this.htmlAudio = null;
    }
  }

  private startHtmlBgm(src: string) {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    this.htmlAudio = audio;

    const tryPlay = () => {
      if (!this.playing || this.htmlAudio !== audio) return;
      void audio.play().catch(() => {
        this.armUnlock();
      });
    };

    if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      tryPlay();
      return;
    }

    this.canplayHandler = tryPlay;
    audio.addEventListener('canplay', tryPlay);
  }

  private clearCanplay() {
    if (!this.htmlAudio || !this.canplayHandler) {
      this.canplayHandler = null;
      return;
    }
    this.htmlAudio.removeEventListener('canplay', this.canplayHandler);
    this.canplayHandler = null;
  }

  private armUnlock() {
    if (this.unlockHandler) return;
    this.unlockHandler = () => {
      if (!this.playing || !this.htmlAudio) return;
      void this.htmlAudio.play().catch(() => undefined);
      this.clearUnlock();
    };
    window.addEventListener('pointerdown', this.unlockHandler, { once: true });
  }

  private clearUnlock() {
    if (!this.unlockHandler) return;
    window.removeEventListener('pointerdown', this.unlockHandler);
    this.unlockHandler = null;
  }
}
