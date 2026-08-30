import React from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { useFestivePageLoader } from '@/shared/load/useFestivePageLoader';
import { loadQixiFest } from './loadQixiFest';

export interface QixiPageLoaderProps {
  theme: TimeTheme;
  onBackToArchive?: () => void;
  onBackToCabinet?: () => void;
}

export function QixiPageLoader({ theme, onBackToArchive, onBackToCabinet }: QixiPageLoaderProps) {
  const isNight = !!theme?.isNight;
  const { progress, label, Page, failed, retry } = useFestivePageLoader(loadQixiFest, {
    initialLabel: '准备相纸',
  });

  if (Page) {
    return (
      <Page theme={theme} onBackToArchive={onBackToArchive} onBackToCabinet={onBackToCabinet} />
    );
  }

  return (
    <FestiveLoadScreen
      title="照片背后"
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