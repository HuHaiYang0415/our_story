import React, { useEffect, useState } from 'react';
import { FestiveLoadScreen } from '@/shared/ui/FestiveLoadScreen';
import { loadLetter520 } from './loadLetter520';

export interface Letter520PageLoaderProps {
  onBack?: () => void;
  isNight?: boolean;
}

export function Letter520PageLoader({ onBack, isNight = false }: Letter520PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState('拆信启封');
  const [Page, setPage] = useState<React.ComponentType | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadLetter520((ratio, stepLabel) => {
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
    />
  );
}
