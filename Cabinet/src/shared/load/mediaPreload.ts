const imagePreloadCache = new Map<string, Promise<void>>();
const requiredImagePreloadCache = new Map<string, Promise<void>>();
const audioPreloadCache = new Map<string, Promise<void>>();

function preloadAudioWithEvent(
  url: string,
  eventName: 'canplaythrough' | 'canplay',
  timeoutMs: number,
): Promise<void> {
  const cached = audioPreloadCache.get(`${eventName}:${url}`);
  if (cached) return cached;

  const promise = new Promise<void>((resolve) => {
    const audio = new Audio();
    let timer = 0;
    const finish = () => {
      window.clearTimeout(timer);
      audio.removeEventListener(eventName, finish);
      audio.removeEventListener('error', finish);
      stopHtmlAudio(audio);
      resolve();
    };

    audio.preload = 'auto';
    audio.addEventListener(eventName, finish, { once: true });
    audio.addEventListener('error', finish, { once: true });
    audio.src = url;
    timer = window.setTimeout(finish, timeoutMs);
  });

  audioPreloadCache.set(`${eventName}:${url}`, promise);
  return promise;
}

export function preloadAudio(url: string, timeoutMs = 120_000): Promise<void> {
  return preloadAudioWithEvent(url, 'canplaythrough', timeoutMs);
}

/** 缓冲到可开播即 resolve，适合大 BGM 边下边播 */
export function preloadAudioCanPlay(url: string, timeoutMs = 60_000): Promise<void> {
  return preloadAudioWithEvent(url, 'canplay', timeoutMs);
}

/** 后台拉流预热，不阻塞进页；同一资源在多个入口只预热一次 */
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

function preloadImageWithCache(
  url: string,
  cache: Map<string, Promise<void>>,
  required: boolean,
  timeoutMs = 90_000,
): Promise<void> {
  const cached = cache.get(url);
  if (cached) return cached;

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    let timer = 0;
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
      if (required) {
        reject(new Error(`Image failed: ${url}`));
      } else {
        resolve();
      }
    };
    if (required) {
      timer = window.setTimeout(() => {
        cleanup();
        reject(new Error(`Image timeout: ${url}`));
      }, timeoutMs);
    }
    img.src = url;
  });

  cache.set(url, promise);
  if (required) {
    void promise.catch(() => {
      // A transient failure should not poison later navigation attempts.
      cache.delete(url);
    });
  }
  return promise;
}

export function preloadImage(url: string): Promise<void> {
  return preloadImageWithCache(url, imagePreloadCache, false);
}

/** 图片必须加载成功，失败则 reject（用于进页门槛资源） */
export function preloadImageRequired(url: string, timeoutMs = 90_000): Promise<void> {
  return preloadImageWithCache(url, requiredImagePreloadCache, true, timeoutMs);
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
