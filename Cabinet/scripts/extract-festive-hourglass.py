#!/usr/bin/env python3
from pathlib import Path

src = Path(r"d:\study\cursor\our_story\src\components\Cabinet.tsx").read_text(encoding="utf-8")
lines = src.splitlines()
block = lines[147:1042]

header = """import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import holidaysData from '../data/holidays.json';

"""

footer = r'''
export function FestiveHourglass() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getActualState = () => {
    const list = (holidaysData as { festivals?: { name: string; date: string }[] }).festivals || [];

    const localYr = currentDate.getFullYear();
    const localMth = currentDate.getMonth();
    const localDay = currentDate.getDate();
    const todayMidnight = new Date(localYr, localMth, localDay).getTime();

    let nearestFest: { name: string; date: string } | null = null;
    let minDiffDays = Infinity;

    for (const f of list) {
      if (!f.date) continue;
      const [fYear, fMonth, fDay] = f.date.split('-').map(Number);
      const fMidnight = new Date(fYear, fMonth - 1, fDay).getTime();
      const diffMs = fMidnight - todayMidnight;
      if (diffMs >= 0) {
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays < minDiffDays) {
          minDiffDays = diffDays;
          nearestFest = f;
        }
      }
    }

    return {
      festivalName: nearestFest ? nearestFest.name : '元旦',
      daysLeft: minDiffDays === Infinity ? 45 : minDiffDays,
    };
  };

  const actual = getActualState();
  const activeHolidayName = actual.festivalName;
  const activeDaysLeft = actual.daysLeft;
  const meta = HOLIDAY_METADATA[activeHolidayName] || { colorName: '土黄', glowColor: '#D97706', sandColor: '#D97706' };
  const config = FESTIVAL_CONFIGS[activeHolidayName] || FESTIVAL_CONFIGS['元旦'];
  const isFestivalToday = activeDaysLeft === 0;

  return (
    <div className="w-14 h-14 md:w-18 md:h-18 flex flex-col items-center justify-end select-none relative" id="festive-display-container">
      <div className="w-[50px] h-[50px] flex flex-col items-center justify-center relative bg-transparent overflow-visible">
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
      </div>
    </div>
  );
}
'''

out = Path(__file__).resolve().parent.parent / "src" / "components" / "FestiveHourglass.tsx"
out.write_text(header + "\n".join(block) + footer, encoding="utf-8")
print(f"Wrote {out} ({out.stat().st_size} bytes)")
