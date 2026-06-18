import React from 'react';

export type SceneLayoutVariant = 'stack' | 'split' | 'stage';

interface SceneLayoutShellProps {
  children: React.ReactNode;
  className?: string;
  variant?: SceneLayoutVariant;
}

/** 各幕统一布局骨架：占满幕内安全区，flex/grid 子级自行分区 */
export function SceneLayoutShell({
  children,
  className,
  variant = 'stack',
}: SceneLayoutShellProps) {
  return (
    <div
      className={['db-scene-layout', `db-scene-layout--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
