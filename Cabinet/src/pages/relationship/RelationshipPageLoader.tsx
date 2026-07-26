import React from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { useFestivePageLoader } from '@/shared/load/useFestivePageLoader';
import { loadRelationship, type RelationshipPageProps } from './loadRelationship';

export interface RelationshipPageLoaderProps {
  theme: TimeTheme;
  onBackToCabinet: () => void;
}

export function RelationshipPageLoader({
  theme,
  onBackToCabinet,
}: RelationshipPageLoaderProps) {
  const isNight = !!theme?.isNight;
  const { progress, label, Page, failed, retry } = useFestivePageLoader<RelationshipPageProps>(
    loadRelationship,
    { initialLabel: '点亮星灯' },
  );

  if (Page) {
    return <Page theme={theme} onBackToCabinet={onBackToCabinet} />;
  }

  return (
    <FestiveLoadScreen
      title="相恋时光"
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
