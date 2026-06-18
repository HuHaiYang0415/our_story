import { useCallback, useEffect, useState, type ComponentType } from 'react';
import type { LoadProgressCallback } from './mediaPreload';

export interface UseFestivePageLoaderOptions {
  initialLabel: string;
}

export interface UseFestivePageLoaderResult<P extends object> {
  progress: number;
  label: string;
  Page: ComponentType<P> | null;
  failed: boolean;
  retry: () => void;
}

/** 节日 / 专题页懒加载：进度、失败、重试 */
export function useFestivePageLoader<P extends object>(
  load: (onProgress?: LoadProgressCallback) => Promise<ComponentType<P>>,
  { initialLabel }: UseFestivePageLoaderOptions,
): UseFestivePageLoaderResult<P> {
  const [attempt, setAttempt] = useState(0);
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState(initialLabel);
  const [Page, setPage] = useState<ComponentType<P> | null>(null);
  const [failed, setFailed] = useState(false);

  const retry = useCallback(() => {
    setFailed(false);
    setProgress(0);
    setLabel(initialLabel);
    setPage(null);
    setAttempt((n) => n + 1);
  }, [initialLabel]);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    setProgress(0);
    setLabel(initialLabel);

    load((ratio, stepLabel) => {
      if (cancelled) return;
      setProgress(ratio);
      setLabel(stepLabel);
    })
      .then((Comp) => {
        if (cancelled) return;
        setFailed(false);
        setPage(() => Comp);
      })
      .catch(() => {
        if (cancelled) return;
        setPage(null);
        setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [attempt, initialLabel]);

  return { progress, label, Page, failed, retry };
}
