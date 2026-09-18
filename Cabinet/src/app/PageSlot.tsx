import React, { lazy } from 'react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { Cabinet } from '@/pages/cabinet/Cabinet';
import type { TimeTheme } from '@/shared/types';
import type { AppView, PageId } from './pageRegistry';

const EnvelopeStack = lazy(() =>
  import('@/pages/letters/EnvelopeStack').then((module) => ({ default: module.EnvelopeStack })),
);
const Letter520PageLoader = lazy(() =>
  import('@/pages/letters/Letter520PageLoader').then((module) => ({ default: module.Letter520PageLoader })),
);
const PolaroidGallery = lazy(() =>
  import('@/pages/gallery/PolaroidGallery').then((module) => ({ default: module.PolaroidGallery })),
);
const FestivalArchive = lazy(() => import('@/pages/festivals/archive/FestivalArchive'));
const ChildrenDayPageLoader = lazy(() =>
  import('@/pages/festivals/2026/children-day/ChildrenDayPageLoader').then((module) => ({
    default: module.ChildrenDayPageLoader,
  })),
);
const DragonBoatPageLoader = lazy(() =>
  import('@/pages/festivals/2026/dragon-boat/DragonBoatPageLoader').then((module) => ({
    default: module.DragonBoatPageLoader,
  })),
);
const RelationshipPageLoader = lazy(() =>
  import('@/pages/relationship/RelationshipPageLoader').then((module) => ({
    default: module.RelationshipPageLoader,
  })),
);

export type PageSlotProps = {
  view: AppView;
  theme: TimeTheme;
  lazyLoaderEpoch: Partial<Record<AppView, number>>;
  onNavigate: (view: AppView) => void;
  onEnterFestivalPage: (pageId: PageId) => void;
  festivalPreviewTools?: ReactNode;
};

export function PageSlot({
  view,
  theme,
  lazyLoaderEpoch,
  onNavigate,
  onEnterFestivalPage,
  festivalPreviewTools,
}: PageSlotProps) {
  switch (view) {
    case 'cabinet':
      return (
        <motion.div
          key="cabinet-view"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.45 }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <Cabinet
            theme={theme}
            onOpenBox={(boxId) => {
              if (boxId === 'envelopes') onNavigate('box-envelopes');
              else if (boxId === 'photos') onNavigate('box-photos');
            }}
            onEnterFestivalArchive={() => onNavigate('festival-archive')}
            onEnterFestivalPage={onEnterFestivalPage}
            festivalPreviewTools={festivalPreviewTools}
          />
        </motion.div>
      );
    case 'box-envelopes':
      return (
        <motion.div
          key="envelopes-view"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <EnvelopeStack
            theme={theme}
            onBackToCabinet={() => onNavigate('cabinet')}
            onOpenLetter520={() => onNavigate('letter-520')}
          />
        </motion.div>
      );
    case 'letter-520':
      return (
        <motion.div
          key="letter-520-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <Letter520PageLoader
            key={`letter-520-${lazyLoaderEpoch['letter-520'] ?? 0}`}
            isNight={theme.isNight}
            onBack={() => onNavigate('box-envelopes')}
          />
        </motion.div>
      );
    case 'box-photos':
      return (
        <motion.div
          key="photos-view"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <PolaroidGallery theme={theme} onBackToCabinet={() => onNavigate('cabinet')} />
        </motion.div>
      );
    case 'relationship':
      return (
        <motion.div
          key="relationship-view"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <RelationshipPageLoader
            key={`relationship-${lazyLoaderEpoch.relationship ?? 0}`}
            theme={theme}
            onBackToCabinet={() => onNavigate('cabinet')}
          />
        </motion.div>
      );
    case 'festival-archive':
      return (
        <motion.div
          key="festival-archive-view"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.45 }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <FestivalArchive
            theme={theme}
            onBackToCabinet={() => onNavigate('cabinet')}
            onEnterFestivalPage={onEnterFestivalPage}
          />
        </motion.div>
      );
    case 'festival-2026-ChildrenDay':
      return (
        <motion.div
          key="festival-children-day-view"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <ChildrenDayPageLoader
            key={`children-day-${lazyLoaderEpoch['festival-2026-ChildrenDay'] ?? 0}`}
            theme={theme}
            onBackToArchive={() => onNavigate('festival-archive')}
            onBackToCabinet={() => onNavigate('cabinet')}
          />
        </motion.div>
      );
    case 'festival-2026-DragonBoat':
      return (
        <motion.div
          key="festival-dragon-boat-view"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="view-layer h-full w-full min-h-0 overflow-hidden"
        >
          <DragonBoatPageLoader
            key={`dragon-boat-${lazyLoaderEpoch['festival-2026-DragonBoat'] ?? 0}`}
            theme={theme}
            onBackToArchive={() => onNavigate('festival-archive')}
            onBackToCabinet={() => onNavigate('cabinet')}
          />
        </motion.div>
      );
    default:
      return null;
  }
}
