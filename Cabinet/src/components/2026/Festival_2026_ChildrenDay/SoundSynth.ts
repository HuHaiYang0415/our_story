// Web Audio API Synthesizer for 8-bit retro children's game sound effects & cozy background melody.
// Fully self-contained, lightweight, and requires no external asset files.

class SoundSynthManager {
  private ctx: AudioContext | null = null;
  private bgmIntervalId: any = null;
  private isMuted: boolean = false;
  private currentBgmNode: OscillatorNode | null = null;
  private currentGainNode: GainNode | null = null;

  constructor() {
    // Lazy initialized on first interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.isMuted) {
      this.stopBgm();
    } else {
      this.initContext();
      this.startBgm();
    }
  }

  getIsMuted() {
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.13);
  }

  playPop() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }

  playScore() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C arpeggio
    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.08, this.ctx!.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx!.currentTime + idx * 0.08 + 0.15);

      osc.start(this.ctx!.currentTime + idx * 0.08);
      osc.stop(this.ctx!.currentTime + idx * 0.08 + 0.18);
    });
  }

  playFail() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.32);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playJump() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(330, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playVictory() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    // Happy retro fanfare
    const notes = [
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.1 },  // C5
      { f: 523.25, d: 0.2 },  // C5 long
      { f: 415.30, d: 0.2 },  // Ab4
      { f: 466.16, d: 0.2 },  // Bb4
      { f: 523.25, d: 0.4 }   // C5 triumphant
    ];

    let timeOffset = 0;
    notes.forEach((n) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.type = 'square';
      osc.frequency.setValueAtTime(n.f, this.ctx!.currentTime + timeOffset);

      gain.gain.setValueAtTime(0.06, this.ctx!.currentTime + timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.005, this.ctx!.currentTime + timeOffset + n.d);

      osc.start(this.ctx!.currentTime + timeOffset);
      osc.stop(this.ctx!.currentTime + timeOffset + n.d);

      timeOffset += n.d * 1.1;
    });
  }

  playBgmNote(frequency: number, duration: number, onset: number) {
    if (this.isMuted || !this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, onset);
    
    // Smooth chime volume envelope
    gain.gain.setValueAtTime(0, onset);
    gain.gain.linearRampToValueAtTime(0.05, onset + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, onset + duration - 0.05);

    osc.start(onset);
    osc.stop(onset + duration);
  }

  startBgm() {
    this.initContext();
    if (this.isMuted || !this.ctx || this.bgmIntervalId) return;

    // Simple nursery melody loop: Twinkle Twinkle Little Star
    const melody = [
      261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00, // C C G G A A G
      349.23, 349.23, 329.63, 329.63, 293.66, 293.66, 261.63, // F F E E D D C
      392.00, 392.00, 349.23, 349.23, 329.63, 329.63, 293.66, // G G F F E E D
      392.00, 392.00, 349.23, 349.23, 329.63, 329.63, 293.66, // G G F F E E D
      261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00, // C C G G A A G
      349.23, 349.23, 329.63, 329.63, 293.66, 293.66, 261.63  // F F E E D D C
    ];

    const noteDurations = 0.6; // seconds per beat
    let currentNoteIndex = 0;

    const playNextMeasure = () => {
      if (!this.ctx || this.isMuted) return;
      const beatLen = 0.55; 
      const now = this.ctx.currentTime;
      
      // Schedule next 4 notes
      for (let i = 0; i < 4; i++) {
        const noteIndex = (currentNoteIndex + i) % melody.length;
        // The last note in a line gets a longer duration (double beat)
        const isPause = (noteIndex % 7 === 6);
        const dur = isPause ? beatLen * 1.8 : beatLen * 0.9;
        const time = now + i * beatLen;
        
        this.playBgmNote(melody[noteIndex], dur, time);
      }
      
      currentNoteIndex = (currentNoteIndex + 4) % melody.length;
    };

    // Run first batch
    playNextMeasure();
    
    // Set up repeating loop interval
    this.bgmIntervalId = setInterval(() => {
      playNextMeasure();
    }, 2200); // 4 beats * 550ms = 2200ms
  }

  stopBgm() {
    if (this.bgmIntervalId) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
  }
}

export const soundSynth = new SoundSynthManager();
