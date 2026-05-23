let audioCtx: AudioContext | null = null;
let cricketInterval: ReturnType<typeof setInterval> | null = null;

export function startCricketSounds() {
  try {
    if (audioCtx && audioCtx.state !== 'closed') {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return;
    }

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    audioCtx = new AudioContextClass();

    const playChirp = () => {
      if (!audioCtx || audioCtx.state === 'closed') return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
        return;
      }

      const t = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(3900, t);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(4100, t);

      const modulator = audioCtx.createOscillator();
      const modGain = audioCtx.createGain();
      modulator.frequency.value = 58;
      modGain.gain.value = 160;
      modulator.connect(modGain);
      modGain.connect(osc1.frequency);
      modGain.connect(osc2.frequency);

      gainNode.gain.setValueAtTime(0, t);
      gainNode.gain.linearRampToValueAtTime(0.012, t + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.0002, t + 0.16);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      modulator.start(t);
      osc1.start(t);
      osc2.start(t);
      modulator.stop(t + 0.18);
      osc1.stop(t + 0.18);
      osc2.stop(t + 0.18);
    };

    let chirpCount = 0;
    cricketInterval = setInterval(() => {
      if (!audioCtx || audioCtx.state === 'closed') return;
      if (chirpCount < 3) {
        playChirp();
        chirpCount++;
      } else {
        chirpCount = 0;
        if (Math.random() > 0.4) {
          chirpCount = -5;
        }
      }
    }, 240);
  } catch {
    /* ignore */
  }
}

export function stopCricketSounds() {
  if (cricketInterval) {
    clearInterval(cricketInterval);
    cricketInterval = null;
  }
  if (audioCtx) {
    try {
      audioCtx.close();
    } catch {
      /* ignore */
    }
    audioCtx = null;
  }
}
