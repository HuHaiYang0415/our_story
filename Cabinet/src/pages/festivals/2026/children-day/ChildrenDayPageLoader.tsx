import React from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { useFestivePageLoader } from '@/shared/load/useFestivePageLoader';
import { loadChildrenDayFest, type ChildrenDayPageProps } from './loadChildrenDayFest';

export interface ChildrenDayPageLoaderProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

export function ChildrenDayPageLoader({
  theme,
  onBackToArchive,
  onBackToCabinet,
}: ChildrenDayPageLoaderProps) {
  const isNight = !!theme?.isNight;
  const { progress, label, Page, failed, retry } = useFestivePageLoader<ChildrenDayPageProps>(
    loadChildrenDayFest,
    { initialLabel: '推开 Play 木门' },
  );

  if (Page) {
    return (
      <Page theme={theme} onBackToArchive={onBackToArchive} onBackToCabinet={onBackToCabinet} />
    );
  }

  return (
    <FestiveLoadScreen
      title="童心小屋"
      label={label}
      progress={progress}
      failed={failed}
      isNight={isNight}
      tone="amber"
      backLabel="返回展柜"
      onBack={onBackToCabinet}
      onRetry={retry}
    />
  );
}
