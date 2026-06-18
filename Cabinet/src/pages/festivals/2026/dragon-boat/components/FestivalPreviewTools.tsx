import React from 'react';
import { Ship } from 'lucide-react';

interface FestivalPreviewToolsProps {
  onOpenDragonBoat: () => void;
}

/**
 * 仅 dev / VITE_ALLOW_FESTIVAL_PREVIEW 构建时由 App 挂载，不影响正式 release 逻辑。
 */
export function FestivalPreviewTools({ onOpenDragonBoat }: FestivalPreviewToolsProps) {
  return (
    <div
      className="fixed bottom-3 left-3 z-[60] flex flex-col gap-1.5 md:bottom-4 md:left-4"
      id="festival-preview-tools"
    >
      <button
        type="button"
        onClick={onOpenDragonBoat}
        className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/85 px-3 py-2 font-serif text-[10px] font-bold text-emerald-100 shadow-lg cursor-pointer hover:bg-emerald-900 active:scale-95"
        title="开发预览：打开 2026 端午页（正式环境需过了 release 日）"
      >
        <Ship className="h-3.5 w-3.5" />
        <span>预览 · 端午页</span>
      </button>
    </div>
  );
}
