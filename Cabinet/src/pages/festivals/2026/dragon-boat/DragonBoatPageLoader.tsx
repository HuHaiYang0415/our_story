import React, { useEffect, useState } from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { loadDragonBoatFest } from './loadDragonBoatFest';
import type { DragonBoatScrollProps } from './scroll/DragonBoatScroll';

export interface DragonBoatPageLoaderProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

/** 端午页懒加载壳：首次进入时预载资源并展示进度 */
export function DragonBoatPageLoader({
  theme,
  onBackToArchive,
  onBackToCabinet,
}: DragonBoatPageLoaderProps) {
  const isNight = !!theme?.isNight;
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState('展卷启幕');
  const [Page, setPage] = useState<React.ComponentType<DragonBoatScrollProps> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadDragonBoatFest((ratio, stepLabel) => {
      if (cancelled) return;
      setProgress(ratio);
      setLabel(stepLabel);
    })
      .then((Comp) => {
        if (!cancelled) setPage(() => Comp);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (Page) {
    return (
      <Page theme={theme} onBackToArchive={onBackToArchive} onBackToCabinet={onBackToCabinet} />
    );
  }

  return (
    <FestiveLoadScreen
      title="竞渡长卷"
      label={label}
      progress={progress}
      failed={failed}
      isNight={isNight}
      tone="emerald"
      backLabel="返回展柜"
      onBack={onBackToCabinet}
    />
  );
}
