import React from 'react';

export interface ViewportShellProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  overlay?: React.ReactNode;
  foot?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * 主区自上而下排布；矮屏时由子级 flex-1 垫片把底栏顶到视口底，垫片在展柜与花草之间。
 */
export function ViewportShell({
  id,
  className = '',
  style,
  overlay,
  foot,
  children,
}: ViewportShellProps) {
  return (
    <div
      id={id}
      style={style}
      className={[
        'viewport-shell relative flex h-full w-full min-h-0 flex-col overflow-hidden bg-brand-bg text-brand-text',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {overlay != null && (
        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden>
          {overlay}
        </div>
      )}

      <div
        className={[
          'viewport-main relative z-10 flex min-h-0 flex-1 flex-col',
          'overflow-y-auto overflow-x-hidden overscroll-x-none touch-pan-y',
        ].join(' ')}
      >
        <div className="viewport-main-inner flex min-h-full flex-1 flex-col">{children}</div>
      </div>

      {foot != null && (
        <div className="viewport-foot relative z-20 w-full shrink-0">{foot}</div>
      )}
    </div>
  );
}
