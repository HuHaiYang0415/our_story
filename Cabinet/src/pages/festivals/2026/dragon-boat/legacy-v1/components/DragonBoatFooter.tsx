import React from 'react';
import type { DragonBoatTheme } from '../theme';

interface DragonBoatFooterProps {
  theme: DragonBoatTheme;
}

export function DragonBoatFooter({ theme }: DragonBoatFooterProps) {
  return (
    <footer
      className={`border-t px-4 py-5 text-center md:px-6 md:py-6 ${theme.footBorder}`}
      id="dragon-boat-page-foot"
    >
      <p className={`font-serif text-base font-black leading-snug md:text-lg ${theme.footPrimary}`}>
        第一个端午节，永远
        <span className={theme.footAccent}>「粽」</span>
        意你。
      </p>
      <p
        className={`mx-auto mt-2 max-w-md font-serif text-xs leading-relaxed md:text-sm ${theme.footSecondary}`}
      >
        2026农历蒲节记胜：糯米成粽、艾菖辟邪，心心相扣岁时韶华
      </p>
    </footer>
  );
}
