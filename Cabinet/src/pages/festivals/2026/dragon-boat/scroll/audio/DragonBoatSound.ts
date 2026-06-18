/**
 * 端午长卷音效 — Web Audio 合成，无需外部素材。
 * 若添加 audio/ambient.mp3，可通过 setAmbientSrc 切换背景音乐。
 */

import drumsMp3 from '../../audio/drums.mp3';
import { stopHtmlAudio } from '@/shared/load/mediaPreload';

const BGM_GAP_MS = 5000;

class DragonBoatSoundManager {
  private ctx: AudioContext | null = null;
  private isMuted = false;
  private bgmAudio: HTMLAudioElement | null = null;
  private drumAudio: HTMLAudioElement | null = null;
  private bgmIntervalId: ReturnType<typeof setInterval> | null = null;
  private bgmRestartTimer: ReturnType<typeof setTimeout> | null = null;
  private bgmEndedHandler: (() => void) | null = null;
  private bgmCanPlayHandler: (() => void) | null = null;
  private ambientSrc: string | null = null;

  private initContext() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (Ctx) this.ctx = new Ctx();
    }
    if (this.ctx?.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
  }

  getMuted() {
    return this.isMuted;
  }

  setAmbientSrc(src: string | null) {
    if (this.ambientSrc === src) return;
    this.clearBgmAudio();
    this.ambientSrc = src;
    if (src) this.prefetchAmbient(src);
  }

  /** 进页即拉流，开播时只需缓冲首段 */
  private prefetchAmbient(src: string) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.volume = 0.22;
    audio.loop = false;
    this.bgmEndedHandler = () => {
      if (this.isMuted || !this.ambientSrc) return;
      this.clearBgmRestartTimer();
      this.bgmRestartTimer = setTimeout(() => {
        this.bgmRestartTimer = null;
        if (this.isMuted || !this.bgmAudio) return;
        this.bgmAudio.currentTime = 0;
        void this.bgmAudio.play().catch(() => {});
      }, BGM_GAP_MS);
    };
    audio.addEventListener('ended', this.bgmEndedHandler);
    audio.src = src;
    this.bgmAudio = audio;
  }

  private tryPlayAmbient() {
    const audio = this.bgmAudio;
    if (!audio || this.isMuted) return;

    if (this.bgmCanPlayHandler) {
      audio.removeEventListener('canplay', this.bgmCanPlayHandler);
      this.bgmCanPlayHandler = null;
    }

    const play = () => {
      if (this.isMuted || !this.bgmAudio) return;
      void this.bgmAudio.play().catch(() => {});
    };

    if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      play();
    } else {
      this.bgmCanPlayHandler = play;
      audio.addEventListener('canplay', play, { once: true });
    }
  }

  private clearBgmRestartTimer() {
    if (this.bgmRestartTimer) {
      clearTimeout(this.bgmRestartTimer);
      this.bgmRestartTimer = null;
    }
  }

  private clearBgmAudio() {
    this.clearBgmRestartTimer();
    if (this.bgmAudio) {
      if (this.bgmEndedHandler) {
        this.bgmAudio.removeEventListener('ended', this.bgmEndedHandler);
      }
      if (this.bgmCanPlayHandler) {
        this.bgmAudio.removeEventListener('canplay', this.bgmCanPlayHandler);
      }
      stopHtmlAudio(this.bgmAudio);
    }
    this.bgmEndedHandler = null;
    this.bgmCanPlayHandler = null;
    this.bgmAudio = null;
  }

  private ensureBgmAudio() {
    if (!this.ambientSrc) return null;
    if (this.bgmAudio) return this.bgmAudio;
    this.prefetchAmbient(this.ambientSrc);
    return this.bgmAudio;
  }

  private tone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    volume = 0.08,
    when = 0,
  ) {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  private noiseBurst(duration: number, volume = 0.04, filterFreq = 800, delay = 0) {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, t);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    src.start(t);
    src.stop(t + duration);
  }

  ensureReady() {
    if (this.isMuted) return;
    this.initContext();
    this.startAmbient();
  }

  /** 展卷：纸张开 */
  playUnroll() {
    if (this.isMuted) return;
    this.initContext();
    this.noiseBurst(0.35, 0.035, 1200);
    this.tone(180, 0.25, 'triangle', 0.05);
    this.tone(120, 0.4, 'sine', 0.03, 0.08);
  }

  /** 贰→叁：水声 */
  playMorphWater() {
    if (this.isMuted) return;
    this.initContext();
    this.noiseBurst(0.55, 0.05, 600);
    this.tone(220, 0.3, 'sine', 0.04);
    this.tone(165, 0.45, 'triangle', 0.03, 0.12);
  }

  /** 叁→肆 / 鼓点 */
  playMorphDrum() {
    if (this.isMuted) return;
    this.initContext();
    [0, 0.18, 0.36].forEach((delay) => {
      this.tone(90, 0.12, 'sine', 0.1, delay);
      this.noiseBurst(0.08, 0.025, 400, delay);
    });
  }

  /** 壹→贰：墨晕 */
  playMorphInk() {
    if (this.isMuted) return;
    this.initContext();
    this.noiseBurst(0.5, 0.03, 300);
    this.tone(80, 0.6, 'triangle', 0.06);
  }

  /** 肆→伍：粽化火漆 */
  playMorphSeal() {
    if (this.isMuted) return;
    this.initContext();
    this.tone(440, 0.08, 'sine', 0.06);
    this.tone(330, 0.15, 'triangle', 0.05, 0.06);
    this.noiseBurst(0.12, 0.02, 2000, 0.1);
  }

  /** 叁幕：点击近舟鼓面 */
  playRaceDrum() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.drumAudio) {
      this.drumAudio = new Audio(drumsMp3);
      this.drumAudio.volume = 0.62;
    }
    const clip = this.drumAudio.cloneNode(true) as HTMLAudioElement;
    clip.volume = this.drumAudio.volume;
    void clip.play().catch(() => {});
  }

  /** 彩蛋：木鱼/印章 */
  playEggTap() {
    if (this.isMuted) return;
    this.initContext();
    this.tone(520, 0.06, 'sine', 0.07);
    this.tone(780, 0.1, 'triangle', 0.04, 0.04);
  }

  /** 伍幕：拆信 */
  playLetterOpen() {
    if (this.isMuted) return;
    this.initContext();
    this.noiseBurst(0.2, 0.03, 1500);
    this.tone(260, 0.2, 'sine', 0.05);
    this.tone(196, 0.35, 'triangle', 0.03, 0.1);
  }

  private playSynthAmbientNote(freq: number, duration: number, onset: number) {
    if (this.isMuted || !this.ctx) return;
    const t = this.ctx.currentTime + onset;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.018, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + duration);
  }

  startAmbient() {
    if (this.isMuted) return;
    this.initContext();

    if (this.ambientSrc) {
      this.ensureBgmAudio();
      this.tryPlayAmbient();
      return;
    }

    if (this.bgmIntervalId || !this.ctx) return;

    const pentatonic = [261.63, 293.66, 329.63, 392.0, 440.0];
    let noteIdx = 0;

    const playPhrase = () => {
      if (!this.ctx || this.isMuted) return;
      for (let i = 0; i < 3; i++) {
        const freq = pentatonic[(noteIdx + i) % pentatonic.length];
        this.playSynthAmbientNote(freq, 2.8, i * 1.4);
      }
      noteIdx = (noteIdx + 3) % pentatonic.length;
    };

    playPhrase();
    this.bgmIntervalId = setInterval(playPhrase, 4200);
  }

  stopAmbient() {
    if (this.bgmIntervalId) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
    this.clearBgmRestartTimer();
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmAudio.currentTime = 0;
    }
  }

  dispose() {
    this.stopAmbient();
    this.clearBgmAudio();
    this.ambientSrc = null;
    void this.ctx?.close();
    this.ctx = null;
  }
}

export const dragonBoatSound = new DragonBoatSoundManager();
