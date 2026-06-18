import React from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { useFestivePageLoader } from '@/shared/load/useFestivePageLoader';
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
  const { progress, label, Page, failed, retry } = useFestivePageLoader(
    loadDragonBoatFest,
    { initialLabel: '展卷启幕' },
  );

  if (Page) {
    return (
      <Page theme={theme} onBackToArchive={onBackToArchive} onBackToCabinet={onBackToCabinet} />
    );
  }

  return (
    <FestiveLoadScreen
      title="端午长卷"
      label={label}
      progress={progress}
      failed={failed}
      isNight={isNight}
      tone="emerald"
      backLabel="返回展柜"
      onBack={onBackToCabinet}
      onRetry={retry}
    />
  );
}
