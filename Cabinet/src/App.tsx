import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cabinet } from './components/Cabinet';
import { EnvelopeStack } from './components/EnvelopeStack';
import { PolaroidGallery } from './components/PolaroidGallery';

type ViewState = 'cabinet' | 'box-envelopes' | 'box-photos';

const VIEW_HASH: Record<ViewState, string> = {
  cabinet: '',
  'box-envelopes': '#envelopes',
  'box-photos': '#photos',
};

function viewFromHash(): ViewState {
  const hash = window.location.hash;
  if (hash === '#envelopes') return 'box-envelopes';
  if (hash === '#photos') return 'box-photos';
  return 'cabinet';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => viewFromHash());

  const navigateTo = useCallback((view: ViewState) => {
    setCurrentView(view);
    const hash = VIEW_HASH[view];
    const url = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(null, '', url);
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentView(viewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <motion.div className="min-h-screen bg-[#fcf9f5] text-stone-900 font-sans" id="app-root">
      <AnimatePresence mode="wait">
        {currentView === 'cabinet' && (
          <motion.div
            key="cabinet-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="w-full min-h-screen"
          >
            <Cabinet
              onOpenBox={(boxId) => {
                if (boxId === 'envelopes') {
                  navigateTo('box-envelopes');
                } else if (boxId === 'photos') {
                  navigateTo('box-photos');
                }
              }}
            />
          </motion.div>
        )}

        {currentView === 'box-envelopes' && (
          <motion.div
            key="envelopes-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen"
          >
            <EnvelopeStack onBackToCabinet={() => navigateTo('cabinet')} />
          </motion.div>
        )}

        {currentView === 'box-photos' && (
          <motion.div
            key="photos-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen"
          >
            <PolaroidGallery onBackToCabinet={() => navigateTo('cabinet')} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
