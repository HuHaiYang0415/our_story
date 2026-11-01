import { useCallback, useEffect, useRef, useState } from 'react';

export function useBirthdayAudio() {
  const [on, setOn] = useState(false), [unavailable, setUnavailable] = useState(false);
  const context = useRef<AudioContext | null>(null), voices = useRef(new Set<OscillatorNode>());
  const epoch = useRef(0), mounted = useRef(true), enabled = useRef(false);
  const stop = useCallback(() => {
    epoch.current++;
    voices.current.forEach(v => { try { v.stop(); } catch { /* Already ended. */ } });
    voices.current.clear();
  }, []);
  const play = useCallback(async (kind: 'duck' | 'bell' | 'ocarina') => {
    if (!enabled.current || document.hidden || !context.current) return;
    const token = epoch.current, ctx = context.current;
    try {
      await ctx.resume();
      if (!mounted.current || document.hidden || !enabled.current || token !== epoch.current) return;
      const notes=kind==='ocarina'?[523.25,659.25,587.33]:[kind==='duck'?230:880];
      notes.forEach((frequency,index)=>{
        const oscillator=ctx.createOscillator(),gain=ctx.createGain(),time=ctx.currentTime+index*.30;
        oscillator.type='sine';oscillator.frequency.setValueAtTime(frequency,time);
        if(kind==='duck')oscillator.frequency.exponentialRampToValueAtTime(140,time+.18);
        gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(kind==='duck'?.012:.021,time+.025);gain.gain.exponentialRampToValueAtTime(.0001,time+.27);
        oscillator.connect(gain);gain.connect(ctx.destination);voices.current.add(oscillator);oscillator.start(time);oscillator.stop(time+.28);
        oscillator.onended=()=>{voices.current.delete(oscillator);oscillator.disconnect();gain.disconnect();};
      });
    } catch { enabled.current = false; setOn(false); setUnavailable(true); }
  }, []);
  const toggle = async () => {
    if (enabled.current) { enabled.current = false; setOn(false); stop(); void context.current?.suspend(); return; }
    try {
      context.current ??= new AudioContext();
      const token = epoch.current;
      await context.current.resume();
      if (!mounted.current || document.hidden || token !== epoch.current) return;
      enabled.current = true; setOn(true); setUnavailable(false);
    } catch { enabled.current = false; setOn(false); setUnavailable(true); }
  };
  useEffect(() => {
    mounted.current = true;
    const hide = () => { if (document.hidden) { stop(); void context.current?.suspend(); } };
    document.addEventListener('visibilitychange', hide);
    return () => { mounted.current = false; stop(); void context.current?.close(); context.current = null; document.removeEventListener('visibilitychange', hide); };
  }, [stop]);
  return { on, unavailable, toggle, play, stop };
}
export type BirthdayAudio = ReturnType<typeof useBirthdayAudio>;
