import React from 'react';
import type { TimeTheme } from '@/shared/types';
import { SpringSwallowNest, SummerCicadaEdge } from './cabinetDecorComponents';

/** 展柜底栏贴边装饰：锚定在 stage-cabinet-gap / stage-edge-deco-slot */
export function CabinetEdgeDecor({ theme }: { theme: TimeTheme }) {
  return (
    <>
      {theme.season === 'spring' && <SpringSwallowNest isNight={theme.isNight} />}
      {theme.season === 'summer' && <SummerCicadaEdge />}
    </>
  );
}
