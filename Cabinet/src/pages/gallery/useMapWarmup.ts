import { useEffect } from 'react';
import { observeOriginal, originalBusy } from './loadPriority';
/** Own resources only. Importing map code does not create a tile layer. */
export function useMapWarmup(eligible: boolean) {
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (!eligible || connection?.saveData || /^(slow-)?2g$/.test(connection?.effectiveType ?? '') || !navigator.onLine) return;
    const controller = new AbortController(); let timer = 0, idle = 0, stopped = false;
    const stop = () => { stopped = true; controller.abort(); window.clearTimeout(timer); if (idle && window.cancelIdleCallback) window.cancelIdleCallback(idle); };
    const check = () => { if (document.hidden || originalBusy()) stop(); };
    const unsubscribe = observeOriginal(check); document.addEventListener('visibilitychange', check); window.addEventListener('pagehide', stop); window.addEventListener('offline', stop);
    const run = async () => {
      if (stopped || document.hidden || originalBusy() || !navigator.onLine) return;
      const images = [...document.querySelectorAll<HTMLImageElement>('.gallery-stamp img')];
      if (!images.length || images.some(image => !image.complete || !image.naturalWidth) || document.fonts.status !== 'loaded') { timer = window.setTimeout(run, 400); return; }
      try {
        await Promise.all(images.map(image => typeof image.decode === 'function' ? image.decode() : Promise.resolve()));
        if (stopped || document.hidden || originalBusy() || !navigator.onLine || images.some(image => !image.isConnected)) return;
        await import('./GalleryMap'); if (!stopped) { const module = await import('./map/mapResources'); if (!stopped) await module.warmMapResources(controller.signal); }
      } catch { /* foreground path can retry a rejected resource */ }
    };
    timer = window.setTimeout(() => { if (window.requestIdleCallback) idle = window.requestIdleCallback(() => void run(), { timeout: 2000 }); else void run(); }, 1200);
    return () => { stop(); unsubscribe(); document.removeEventListener('visibilitychange', check); window.removeEventListener('pagehide', stop); window.removeEventListener('offline', stop); };
  }, [eligible]);
}
