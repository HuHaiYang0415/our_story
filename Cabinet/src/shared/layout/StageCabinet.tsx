import React from 'react';

export interface StageCabinetProps {
  children: React.ReactNode;
  className?: string;
}

/** 木柜窄栏槽位，宽度由 index.css `.stage-cabinet` 统一控制 */
export function StageCabinet({ children, className = '' }: StageCabinetProps) {
  return (
    <div className={['stage-cabinet flex w-full flex-col', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
