import React, { useEffect, useState } from 'react';
import type { TimeTheme } from '@/shared/types';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
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
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState('推开 Play 木门');
  const [Page, setPage] = useState<React.ComponentType<ChildrenDayPageProps> | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadChildrenDayFest((ratio, stepLabel) => {
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
      title="童心小屋"
      label={label}
      progress={progress}
      failed={failed}
      isNight={isNight}
      tone="amber"
      backLabel="返回展柜"
      onBack={onBackToCabinet}
    />
  );
}
