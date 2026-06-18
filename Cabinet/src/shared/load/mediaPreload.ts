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

/** 缓冲到可开播即 resolve，适合大 BGM 边下边播 */
export function preloadAudioCanPlay(url: string, timeoutMs = 60_000): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio();
    const finish = () => {
      audio.removeEventListener('canplay', finish);
      audio.removeEventListener('error', finish);
      resolve();
    };
    audio.preload = 'auto';
    audio.addEventListener('canplay', finish, { once: true });
    audio.addEventListener('error', finish, { once: true });
    audio.src = url;
    window.setTimeout(finish, timeoutMs);
  });
}

/** 后台拉流预热，不阻塞进页 */
export function warmAudioStream(url: string): void {
  void preloadAudioCanPlay(url);
}

/** 彻底停止 HTMLAudio，避免 canplay 回调在 cleanup 后再次开播 */
export function stopHtmlAudio(audio: HTMLAudioElement) {
  audio.pause();
  audio.currentTime = 0;
  audio.src = '';
  audio.load();
}

export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

/** 图片必须加载成功，失败则 reject（用于进页门槛资源） */
export function preloadImageRequired(url: string, timeoutMs = 90_000): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error(`Image timeout: ${url}`));
    }, timeoutMs);

    const cleanup = () => {
      window.clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
    };

    img.onload = () => {
      cleanup();
      resolve();
    };
    img.onerror = () => {
      cleanup();
      reject(new Error(`Image failed: ${url}`));
    };
    img.src = url;
  });
}

export function preloadFetch(url: string): Promise<void> {
  return fetch(url, { cache: 'force-cache' })
    .then(() => undefined)
    .catch(() => undefined);
}

/** HTML/壳层必须拉取成功 */
export function preloadFetchRequired(url: string): Promise<void> {
  return fetch(url, { cache: 'force-cache' }).then((res) => {
    if (!res.ok) throw new Error(`Fetch failed: ${url} (${res.status})`);
  });
}

const IMPORT_RETRY_DELAYS_MS = [0, 400, 1200];

/** 动态 import 失败后退避重试（避免瞬时失败 + 二次进入秒失败） */
export async function importWithRetry<T>(
  loader: () => Promise<T>,
  retries = IMPORT_RETRY_DELAYS_MS.length - 1,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => window.setTimeout(r, IMPORT_RETRY_DELAYS_MS[attempt] ?? 1200));
    }
    try {
      return await loader();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
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
