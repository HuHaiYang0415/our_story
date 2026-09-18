import React from 'react';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';

export type StoryControlTone = 'paper' | 'night' | 'wood' | 'emerald' | 'amber' | 'rose';

interface StoryBackButtonProps {
  onClick: () => void;
  label?: string;
  tone?: StoryControlTone;
  className?: string;
  id?: string;
}

export function StoryBackButton({
  onClick,
  label = '返回展柜',
  tone = 'paper',
  className = '',
  id,
}: StoryBackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      id={id}
      className={`story-action-button story-action-button--${tone} ${className}`.trim()}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

interface StoryMuteButtonProps {
  muted: boolean;
  onToggle: () => void;
  label?: string;
  tone?: StoryControlTone;
  className?: string;
  id?: string;
}

export function StoryMuteButton({
  muted,
  onToggle,
  label = '背景音乐',
  tone = 'wood',
  className = '',
  id,
}: StoryMuteButtonProps) {
  const action = muted ? '开启' : '关闭';

  return (
    <button
      type="button"
      onClick={onToggle}
      id={id}
      className={`story-icon-button story-icon-button--${tone} ${className}`.trim()}
      aria-label={`${action}${label}`}
      aria-pressed={!muted}
      title={`${action}${label}`}
    >
      {muted ? (
        <VolumeX className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function StoryInlineButton({
  children,
  tone = 'wood',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { tone?: StoryControlTone }) {
  return (
    <button
      type="button"
      {...props}
      className={`story-inline-button story-inline-button--${tone} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
