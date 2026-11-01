type BirthdayModule = typeof import('./BirthdayPage');

/** DEV-only source modules. A new URL bypasses a cached failed ESM request;
 * successful modules are reused. This file is absent from production. */
function retrySourceModule<T>(filename: string, first: () => Promise<T>) {
  let attempts = 0;
  let pending: Promise<T> | null = null;
  return () => {
    if (pending) return pending;
    attempts += 1;
    const request = () => {
      if (attempts === 1 || !import.meta.env.DEV) return first();
      const url = new URL(filename, import.meta.url);
      url.searchParams.set('birthdayRetry', String(attempts));
      return import(/* @vite-ignore */ url.href) as Promise<T>;
    };
    pending = request().catch(error => { pending = null; throw error; });
    return pending;
  };
}

export const loadBirthdayModule = retrySourceModule<BirthdayModule>('./BirthdayPage.tsx', () => import('./BirthdayPage'));
