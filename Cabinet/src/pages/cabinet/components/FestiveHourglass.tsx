import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  getFestivalPageForHoliday,
  getHolidayDefinition,
  type FestivalPageId,
} from '@/app/pageRegistry';
import {
  getFestivalNow,
  subscribeFestivalDateOverride,
} from '@/pages/festivals/shared/festivalDateDebug';
import { FESTIVAL_CONFIGS } from './FestiveHourglassIcons';
import { HourglassSVG } from './HourglassSVG';
import { getFestiveHolidayState } from './festiveHolidayState';



export function FestiveHourglass({
  onEnterFestivalArchive,
  onEnterFestivalPage,
}: {
  onEnterFestivalArchive: () => void;
  onEnterFestivalPage: (pageId: FestivalPageId) => void;
}) {
  const [currentDate, setCurrentDate] = useState(() => getFestivalNow());

  useEffect(() => {
    const interval = window.setInterval(() => setCurrentDate(getFestivalNow()), 60000);
    const unsubscribe = subscribeFestivalDateOverride(() => setCurrentDate(getFestivalNow()));
    return () => {
      window.clearInterval(interval);
      unsubscribe();
    };
  }, []);

  const actual = getFestiveHolidayState(currentDate);
  const activeHolidayName = actual.festivalName;
  const activeDaysLeft = actual.daysLeft;
  const meta = getHolidayDefinition(activeHolidayName) ?? getHolidayDefinition('元旦')!;
  const config = FESTIVAL_CONFIGS[meta.iconKey];
  const isFestivalToday = activeDaysLeft === 0;

  const handleHourglassClick = () => {
    if (isFestivalToday) {
      const page = getFestivalPageForHoliday(activeHolidayName, currentDate.getFullYear());
      if (page && page.access()) {
        onEnterFestivalPage(page.pageId);
      } else {
        onEnterFestivalArchive();
      }
    } else {
      onEnterFestivalArchive();
    }
  };

  return (
    <div className="w-14 h-14 md:w-18 md:h-18 flex flex-col items-center justify-end select-none relative" id="festive-display-container">
      <motion.button
        type="button"
        onClick={handleHourglassClick}
        className="min-touch-target shrink-0 w-[72px] h-[72px] border-0 p-0 flex flex-col items-center justify-center relative bg-transparent overflow-visible transition-all duration-200 cursor-pointer group/hourglass hover:scale-110 active:scale-95"
        style={{ width: 80, height: 80 }}
        aria-label={isFestivalToday ? `进入${activeHolidayName}页面` : '打开节日风物志'}
      >
        <AnimatePresence mode="wait">
          {isFestivalToday ? (
            <motion.div
              key={`icon-${activeHolidayName}`}
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="flex flex-col items-center justify-center w-full h-full [&_span.absolute]:hidden"
            >
              {config.getIcon()}
            </motion.div>
          ) : (
            <motion.div
              key="hourglass"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="relative flex justify-center items-center"
            >
              <HourglassSVG
                daysLeft={activeDaysLeft}
                glowColor={meta.glowColor}
                customSandColor={activeDaysLeft < 7 ? meta.sandColor : undefined}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
