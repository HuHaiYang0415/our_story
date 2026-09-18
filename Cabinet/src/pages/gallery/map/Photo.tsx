import { useState } from 'react';
import type { MediaAsset } from '@/domain/content';

export interface PhotoProps {
  asset?: MediaAsset;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

/** Thumb-only, reusable in covers and candidates. Each source permits one manual retry. */
export default function Photo({ asset, alt, className = '', loading = 'lazy' }: PhotoProps) {
  const src = asset?.kind === 'image' ? asset.variants?.thumb || asset.url : undefined;
  return <PhotoSource key={src ?? 'missing'} src={src} alt={alt} className={className} loading={loading} />;
}

function PhotoSource({ src, alt, className, loading }: Omit<PhotoProps, 'asset'> & { src?: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);
  return <span className={`gallery-map-photo ${className}`} aria-busy={Boolean(src && !loaded && !failed)}>
    {src && !failed ? <img key={attempt} src={src} alt={alt} loading={loading} decoding="async"
      draggable={false} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} /> :
      <span className="gallery-map-photo-error">
        <span>{src ? '照片未能载入' : '暂无照片'}</span>
        {src && attempt === 0 ? <button type="button" data-gallery-map-control
          onClick={event => { event.stopPropagation(); setAttempt(1); setLoaded(false); setFailed(false); }}>
          重试照片
        </button> : null}
      </span>}
  </span>;
}
