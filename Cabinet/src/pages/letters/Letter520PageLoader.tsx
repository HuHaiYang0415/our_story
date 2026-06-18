import React from 'react';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { useFestivePageLoader } from '@/shared/load/useFestivePageLoader';
import { loadLetter520 } from './loadLetter520';

export interface Letter520PageLoaderProps {
  onBack?: () => void;
  isNight?: boolean;
}

export function Letter520PageLoader({ onBack, isNight = false }: Letter520PageLoaderProps) {
  const { progress, label, Page, failed, retry } = useFestivePageLoader(loadLetter520, {
    initialLabel: '拆信启封',
  });

  if (Page) return <Page />;

  return (
    <FestiveLoadScreen
      title="520"
      label={label}
      progress={progress}
      failed={failed}
      isNight={isNight}
      tone="rose"
      backLabel="返回信箱"
      onBack={onBack}
      onRetry={retry}
    />
  );
}
