import { useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { MediaAsset } from '@/domain/content';

interface Props { asset?: MediaAsset; variant: 'thumb' | 'medium' | 'large' | 'original'; title: string; loading?: 'lazy' | 'eager'; }

export function GalleryPhotoVisual({ asset, variant, title, loading = 'eager' }: Props) {
  const url = variant === 'original' ? asset?.variants?.original : asset?.variants?.[variant] ?? asset?.url;
  const previewUrl = variant === 'original' ? asset?.variants?.thumb ?? asset?.url : undefined;
  // The parent keys by ID/variant, so an error is isolated to this rendition.
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [readyToRequest, setReadyToRequest] = useState(variant !== 'original');
  useEffect(() => {
    if (variant !== 'original') return;
    setReadyToRequest(false);
    const timer = window.setTimeout(() => setReadyToRequest(true), 120);
    return () => window.clearTimeout(timer);
  }, [asset?.id, attempt, variant]);
  if (!url) return <span className="gallery-photo-placeholder">{variant === 'original' ? '原图暂不可用' : '照片引用暂缺'}</span>;
  return <span className="gallery-photo-visual" aria-busy={!loaded && !failed}>
    {previewUrl && <img className="gallery-photo-preview" src={previewUrl} alt="" aria-hidden="true" draggable={false} decoding="async" loading="eager" width={asset?.width} height={asset?.height} />}
    {failed ? <span className="gallery-photo-error">
      <span>照片暂时未显示</span>
      <button type="button" data-gallery-control onClick={event => {
        event.stopPropagation();
        // The retry button unmounts immediately. Keep keyboard navigation in the gallery.
        event.currentTarget.closest<HTMLElement>('.gallery-stage')?.focus({ preventScroll: true });
        setFailed(false); setLoaded(false); setAttempt(n => n + 1);
      }}>
        <RotateCcw size={16} aria-hidden="true" />重新加载
      </button>
    </span> : <>
      {variant === 'original' && !loaded && <span className="gallery-photo-loading" role="status">原图载入中</span>}
      {readyToRequest && <img className={variant === 'original' ? `gallery-photo-original${loaded ? ' is-loaded' : ''}` : undefined}
        key={attempt} src={url} alt={asset?.alt || title} draggable={false} decoding="async" loading={loading}
        width={asset?.width} height={asset?.height} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    </>}
  </span>;
}
