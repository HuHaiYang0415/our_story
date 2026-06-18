export function preloadAudio(url: string, timeoutMs = 120_000): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio();
    const finish = () => {
      audio.removeEventListener('canplaythrough', finish);
      audio.removeEventListener('error', finish);
      resolve();
    };
    audio.preload = 'auto';
    audio.addEventListener('canplaythrough', finish, { once: true });
    audio.addEventListener('error', finish, { once: true });
    audio.src = url;
    window.setTimeout(finish, timeoutMs);
  });
}

export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

export function preloadFetch(url: string): Promise<void> {
  return fetch(url, { cache: 'force-cache' })
    .then(() => undefined)
    .catch(() => undefined);
}

export type LoadProgressCallback = (ratio: number, label: string) => void;

export function createProgressTracker(onProgress?: LoadProgressCallback) {
  let progress = 0;
  return {
    set(label: string, ratio: number) {
      progress = Math.min(0.98, Math.max(progress, ratio));
      onProgress?.(progress, label);
    },
    bump(delta: number, label: string) {
      progress = Math.min(0.98, progress + delta);
      onProgress?.(progress, label);
    },
    done(label = '就绪') {
      onProgress?.(1, label);
    },
    get value() {
      return progress;
    },
  };
}
