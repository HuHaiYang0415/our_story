import React from 'react';

const SIZE_CLASS = {
  sm: 'db-treat-svg--sm',
  md: 'db-treat-svg--md',
  lg: 'db-treat-svg--lg',
};

interface TreatSvgProps {
  raw: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label: string;
}

/** 肆幕节物 / 甜筒：直接渲染外部 SVG 资源 */
export function TreatSvg({ raw, size = 'md', className, label }: TreatSvgProps) {
  return (
    <span
      className={['db-treat-svg', SIZE_CLASS[size], className].filter(Boolean).join(' ')}
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: raw }}
    />
  );
}
