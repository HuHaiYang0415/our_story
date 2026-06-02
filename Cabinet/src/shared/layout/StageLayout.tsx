import React from 'react';
import { ViewportShell } from './ViewportShell';

export interface StageLayoutProps {
  id?: string;
  className?: string;
  atmosphere?: React.ReactNode;
  edgeDecor?: React.ReactNode;
  floor?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * 展柜舞台骨架：
 * - stage-main-body：标题 + 木柜，带横向安全边距
 * - stage-cabinet-gap + stage-edge-deco-slot：全宽贴边区（燕巢/知了等）
 * - stage-header / stage-cabinet：见 index.css
 * - stage-floor / stage-footer：底栏全宽
 */
export function StageLayout({
  id,
  className = '',
  atmosphere,
  edgeDecor,
  floor,
  footer,
  children,
}: StageLayoutProps) {
  const foot =
    footer != null || floor != null ? (
      <div className="stage-bottom relative w-full shrink-0">
        {floor != null && (
          <div className="stage-floor relative z-10 w-full overflow-hidden" aria-hidden>
            {floor}
          </div>
        )}
        {footer != null && (
          <footer
            className="stage-footer pointer-events-none absolute bottom-3 left-1/2 z-[35] flex max-w-full -translate-x-1/2 flex-col items-center px-4 select-none"
            id="cabinet-action-bar"
          >
            {footer}
          </footer>
        )}
      </div>
    ) : undefined;

  return (
    <ViewportShell
      id={id}
      className={['stage-root select-none animate-fadeIn', className].filter(Boolean).join(' ')}
      overlay={
        atmosphere != null ? (
          <div className="h-full w-full ios-safe-no-blend">{atmosphere}</div>
        ) : undefined
      }
      foot={foot}
    >
      <div className="stage-main flex min-h-full w-full flex-1 flex-col">
        <div className="stage-main-body flex w-full flex-col px-5 pt-3 pb-0 sm:px-6 md:px-8 md:pt-5">
          {children}
        </div>
        <div className="stage-cabinet-gap relative min-h-6 w-full flex-1 shrink-0" aria-hidden>
          {edgeDecor != null && (
            <div className="stage-edge-deco-slot">{edgeDecor}</div>
          )}
        </div>
      </div>
    </ViewportShell>
  );
}
