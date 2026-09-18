/** One cover per collection; select with a small lift, click again to enter.
 * Warm leaf-lit paper stays identical by day/night. Only the viewer reads originals.
 * The map is a continuous world with national/city levels, not a separate sidebar. */
import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, RefObject } from 'react';
import { Filter, MapPin, X } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import type { Album } from '@/domain/content';
import { getContentRepository } from '@/data/localContentRepository';
import { ViewportShell } from '@/shared/layout/ViewportShell';
import { StoryBackButton } from '@/shared/ui/StoryControls';
import type { TimeTheme } from '@/shared/types';
import { GalleryPhotoVisual } from './GalleryPhoto';
import { GalleryMapBoundary } from './GalleryMapBoundary';
import type { GalleryMapState } from './GalleryMap';
import { orbitGeometry, orbitNodes, photoFacts, photoTitle, resolvePhotos, wrapIndex } from './galleryModel';
import type { GalleryPhoto } from './galleryModel';
import { useGalleryInput } from './useGalleryInput';
import fontLicenseUrl from './assets/OFL.LongCang.txt?url';
import './gallery.css';

type Mode = 'orbit' | 'map' | 'album';
type Source = 'orbit' | 'map';
interface Props { theme: TimeTheme; onBackToCabinet: () => void; }

function useBounds(ref: RefObject<HTMLElement | null>) {
  const [bounds, setBounds] = useState({ width: 800, height: 600 });
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setBounds({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return bounds;
}

function Postmark() {
  return <svg className="gallery-postmark" viewBox="0 0 100 52" aria-hidden="true"><circle cx="28" cy="26" r="22" /><circle cx="28" cy="26" r="17" /><path d="M36 16q9-8 18 0t18 0t18 0M36 26q9-8 18 0t18 0t18 0M36 36q9-8 18 0t18 0t18 0" /></svg>;
}

function Filmstrip({ photos, index, onSelect }: { photos: readonly GalleryPhoto[]; index: number; onSelect: (index: number) => void }) {
  const strip = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const node = strip.current;
    const active = node?.children[index] as HTMLElement | undefined;
    if (node && active) node.scrollTo({ left: active.offsetLeft - node.offsetLeft - (node.clientWidth - active.offsetWidth) / 2 });
  }, [index]);
  useEffect(() => {
    const node = strip.current;
    if (!node) return;
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      event.preventDefault();
      node.scrollLeft += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientWidth : 1);
    };
    node.addEventListener('wheel', wheel, { passive: false });
    return () => node.removeEventListener('wheel', wheel);
  }, []);
  return <nav className="gallery-filmstrip" data-gallery-control aria-label="本册照片缩略图"><div ref={strip} className="gallery-filmstrip-track">
    {photos.map((photo, i) => <div key={photo.mediaAssetId} role="button" tabIndex={0} className="gallery-filmstrip-item"
      aria-pressed={i === index} aria-label={`查看本册第${i + 1}张照片`}
      onClick={event => { if (!(event.target as HTMLElement).closest('button')) onSelect(i); }}
      onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(i); }
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault(); const next = Math.max(0, Math.min(photos.length - 1, i + (event.key === 'ArrowRight' ? 1 : -1)));
          onSelect(next); (strip.current?.children[next] as HTMLElement | undefined)?.focus({ preventScroll: true });
        }
      }}><GalleryPhotoVisual asset={photo.asset} variant="thumb" loading="lazy" title={`第${i + 1}张：${photoTitle(photo)}`} /><span>{i + 1}</span></div>)}
  </div></nav>;
}

function Stamp({ photo, offset, count, bounds, active, selected, onSelect }: {
  photo: GalleryPhoto; offset: number; count: number; bounds: { width: number; height: number }; active: boolean; selected: boolean; onSelect: () => void;
}) {
  const geometry = orbitGeometry(offset, count, bounds.width, bounds.height);
  const width = Math.min(bounds.width < 600 ? bounds.width * .52 : bounds.width * .245, bounds.height * .53, 350);
  const style = {
    width,
    transform: `translate(-50%, -50%) translate3d(${geometry.x}px, ${geometry.y - (selected ? 16 : 0)}px, 0) scale(${geometry.scale}) rotateY(${geometry.rotation}deg) rotateZ(${geometry.tilt}deg)`,
    zIndex: Math.round(geometry.z), opacity: geometry.opacity,
    '--stamp-shadow': `${10 + geometry.z * .16 + (selected ? 5 : 0)}px`,
  } as CSSProperties;
  return <div className={`gallery-stamp ${active ? 'gallery-stamp--front' : ''} ${selected ? 'gallery-stamp--selected' : ''}`} style={style} data-photo-id={photo.mediaAssetId}>
    <div className="gallery-stamp-paper"><div className="gallery-stamp-image"><GalleryPhotoVisual asset={photo.asset} variant="thumb" loading="lazy" title={photoTitle(photo)} /></div>
      <span className="gallery-stamp-caption">{photo.album.title}<small>{photo.album.mediaAssetIds.length} 张照片</small></span>{active && <Postmark />}</div>
    <button type="button" className="gallery-stamp-activate" tabIndex={-1} onClick={onSelect} aria-pressed={selected} aria-label={`选择邮册：${photo.album.title}`} />
  </div>;
}

function FilterPanel({ albums, albumId, year, onApply, onClose, height }: {
  albums: readonly Album[]; albumId: string; year: string; onApply: (albumId: string, year: string) => void; onClose: () => void; height: number;
}) {
  const [draftAlbum, setDraftAlbum] = useState(albumId);
  const [draftYear, setDraftYear] = useState(year);
  const [dimension, setDimension] = useState<'album' | 'year'>('album');
  const [page, setPage] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const years = Array.from(new Set(albums.map(album => album.startDate?.slice(0, 4) || 'unknown')));
  const choices = dimension === 'album'
    ? [{ id: 'all', title: '全部相册' }, ...albums.map(album => ({ id: album.id, title: album.title }))]
    : [{ id: 'all', title: '全部时间' }, ...years.map(value => ({ id: value, title: value === 'unknown' ? '未标日期' : value + '年' }))];
  const perPage = Math.max(1, Math.min(4, Math.floor((height - 250) / 48)));
  const pageCount = Math.ceil(choices.length / perPage);
  useEffect(() => { panelRef.current?.focus(); }, []);
  return <div className="gallery-filter-shade" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <section ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="gallery-filter-title" className="gallery-filter-panel">
      <div className="gallery-filter-heading"><h2 id="gallery-filter-title">筛选相册</h2><button type="button" onClick={onClose} aria-label="关闭筛选"><X size={20} /></button></div>
      {years.length > 1 && <div className="gallery-filter-dimensions"><button type="button" aria-pressed={dimension === 'album'} onClick={() => { setDimension('album'); setPage(0); }}>相册</button><button type="button" aria-pressed={dimension === 'year'} onClick={() => { setDimension('year'); setPage(0); }}>时间</button></div>}
      <div role="radiogroup" aria-label={dimension === 'album' ? '相册' : '时间'} className="gallery-filter-choices">
        {choices.slice(page * perPage, (page + 1) * perPage).map(choice => <label key={choice.id}><input type="radio" name="gallery-filter" checked={(dimension === 'album' ? draftAlbum : draftYear) === choice.id} onChange={() => dimension === 'album' ? setDraftAlbum(choice.id) : setDraftYear(choice.id)} /><span>{choice.title}</span></label>)}
      </div>
      {pageCount > 1 && <div className="gallery-filter-pagination"><button type="button" disabled={page === 0} onClick={() => setPage(n => n - 1)}>上一页</button><span>{page + 1}/{pageCount}</span><button type="button" disabled={page + 1 >= pageCount} onClick={() => setPage(n => n + 1)}>下一页</button></div>}
      <div className="gallery-filter-actions"><button type="button" onClick={() => onApply('all', 'all')}>清除筛选</button><button type="button" className="gallery-paper-action" onClick={() => onApply(draftAlbum, draftYear)}>应用筛选</button></div>
    </section>
  </div>;
}

export function PolaroidGallery({ onBackToCabinet }: Props) {
  const repository = getContentRepository();
  const albums = useMemo(() => repository.listAlbums().filter(album => album.visibility === undefined || album.visibility === 'public').slice().sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)), [repository]);
  const assets = useMemo(() => new Map(repository.listMediaAssets().map(asset => [asset.id, asset])), [repository]);
  const [mode, setMode] = useState<Mode>('orbit');
  const [position, setPosition] = useState(0);
  const positionRef = useRef(0);
  const positionFrame = useRef(0);
  const [selection, setSelection] = useState<GalleryPhoto | null>(null);
  const [source, setSource] = useState<Source>('orbit');
  const [albumIndex, setAlbumIndex] = useState(0);
  const [filter, setFilter] = useState({ albumId: 'all', year: 'all' });
  const [filterOpen, setFilterOpen] = useState(false);
  const [mapAlbumId, setMapAlbumId] = useState<string | null>(null);
  const [mapState, setMapState] = useState<GalleryMapState>({ zoom: 1, panX: 0, panY: 0 });
  const [mapAttempt, setMapAttempt] = useState(0);
  const GalleryMap = useMemo(() => lazy(() => import('./GalleryMap')), [mapAttempt]);
  const [feedback, setFeedback] = useState('');
  const [spoken, setSpoken] = useState('');
  const feedbackTimer = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const filterTriggerRef = useRef<HTMLButtonElement>(null);
  const filterWasOpen = useRef(false);
  const bounds = useBounds(stageRef);
  const reduced = useReducedMotion();
  const capacity = bounds.width < 600 || bounds.height < 380 ? 5 : 9;
  const filteredAlbums = useMemo(() => albums.filter(album => (filter.albumId === 'all' || album.id === filter.albumId) &&
    (filter.year === 'all' || (album.startDate?.slice(0, 4) || 'unknown') === filter.year)), [albums, filter]);
  const photos = useMemo(() => filteredAlbums.flatMap(album => {
    const items = resolvePhotos(album, assets);
    const cover = items.find(photo => photo.mediaAssetId === album.coverMediaAssetId) ?? items[0];
    return cover ? [cover] : [];
  }), [filteredAlbums, assets]);
  const activeIndex = wrapIndex(Math.round(position), photos.length);
  const active = photos[activeIndex];
  const selectedAlbum = selection?.album;
  const albumPhotos = useMemo(() => selectedAlbum ? resolvePhotos(selectedAlbum, assets) : [], [selectedAlbum, assets]);
  const viewed = albumPhotos[albumIndex];
  const hasFilter = filter.albumId !== 'all' || filter.year !== 'all';

  const updatePosition = useCallback((amount: number) => {
    if (!photos.length) return;
    positionRef.current = wrapIndex(positionRef.current + amount, photos.length);
    if (!positionFrame.current) positionFrame.current = window.requestAnimationFrame(() => { positionFrame.current = 0; setPosition(positionRef.current); });
  }, [photos.length]);
  const settleOrbit = useCallback(() => {
    window.cancelAnimationFrame(positionFrame.current); positionFrame.current = 0;
    positionRef.current = wrapIndex(Math.round(positionRef.current), photos.length); setPosition(positionRef.current);
    const photo = photos[positionRef.current];
    if (photo) setSpoken(`${photo.album.title}，第 ${positionRef.current + 1} 册，共 ${photos.length} 册`);
  }, [photos]);
  const notifyBoundary = (text: string) => {
    setFeedback(text); window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => setFeedback(''), 1600);
  };
  const move = (amount: number) => {
    if (mode === 'orbit') { setSelection(null); updatePosition(reduced ? Math.sign(amount) : amount); return; }
    if (mode === 'album') {
      const next = Math.max(0, Math.min(albumPhotos.length - 1, albumIndex + Math.sign(amount)));
      if (next === albumIndex) notifyBoundary(albumIndex === 0 ? '这是本册第一张' : '这是本册最后一张');
      else { setAlbumIndex(next); setFeedback(''); }
    }
  };
  const gestures = useGalleryInput(stageRef, { onMove: move, onSettle: mode === 'orbit' ? settleOrbit : undefined, continuous: mode === 'orbit' && !reduced, enabled: !filterOpen && mode !== 'map' });
  const selectCover = (photo: GalleryPhoto) => {
    setSource('orbit');
    if (selection?.album.id === photo.album.id) { setAlbumIndex(photo.albumPhotoIndex); setMode('album'); }
    else {
      const index = photos.findIndex(item => item.album.id === photo.album.id);
      if (index < 0) return;
      window.cancelAnimationFrame(positionFrame.current); positionFrame.current = 0;
      positionRef.current = index; setPosition(index);
      setSelection(photo); setSpoken(`${photo.album.title}已居中选中，再次点击进入相册`);
    }
  };
  const back = () => {
    if (filterOpen) { setFilterOpen(false); return; }
    if (mode === 'album') { setMode(source); return; }
    if (mode === 'map' && mapState.city) { setMapAlbumId(null); setMapState({ zoom: 1, panX: 0, panY: 0 }); return; }
    onBackToCabinet();
  };
  const backLabel = mode === 'album' ? source === 'map' ? '回到地图' : '回到邮册' : mode === 'map' && mapState.city ? '全国' : '返回展柜';
  const applyFilter = (albumId: string, year: string) => {
    setFilter({ albumId, year }); setFilterOpen(false); setSelection(null); positionRef.current = 0; setPosition(0);
  };
  useEffect(() => { if (!filterOpen) stageRef.current?.focus({ preventScroll: true }); setFeedback(''); }, [mode]);
  useEffect(() => {
    const node = backgroundRef.current;
    if (node) node.inert = filterOpen;
    if (!filterOpen && filterWasOpen.current) filterTriggerRef.current?.focus({ preventScroll: true });
    filterWasOpen.current = filterOpen;
    return () => { if (node) node.inert = false; };
  }, [filterOpen]);
  useEffect(() => () => { window.clearTimeout(feedbackTimer.current); window.cancelAnimationFrame(positionFrame.current); }, []);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); back(); return; }
    if (event.key === 'Tab' && (filterOpen || mode === 'album')) {
      const scope = filterOpen ? rootRef.current?.querySelector('.gallery-filter-panel') : rootRef.current;
      const controls = Array.from(scope?.querySelectorAll<HTMLElement>('button:not(:disabled), input, [tabindex="0"]') || []).filter(node => !node.closest('[inert]') && node.getClientRects().length && node.tabIndex >= 0);
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement === stageRef.current)) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    if (filterOpen || mode === 'map' || (event.target as HTMLElement).closest('[data-gallery-control]')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); if (mode === 'orbit') settleOrbit(); }
    if ((event.key === 'Enter' || event.key === ' ') && event.target === stageRef.current) { event.preventDefault(); if (mode === 'orbit' && active) selectCover(active); }
    if (['PageDown', 'PageUp', 'Home', 'End'].includes(event.key)) event.preventDefault();
  };
  return <ViewportShell id="polaroid-gallery-page" scrollable={false} className="gallery-page">
    <div ref={rootRef} className="gallery-root" onKeyDown={onKeyDown} data-gallery-mode={mode} data-gallery-contract="one collection per cover; select-lift then enter; originals only inside; continuous national/city map; same leaf-lit palette day/night">
      <div ref={backgroundRef} className="gallery-screen"><header className="gallery-header" data-gallery-control>
        <StoryBackButton onClick={back} label={backLabel} tone="paper" id="btn-back-cabinet" /><h1>流光相册盒</h1>
        {mode !== 'album' ? <button type="button" className="gallery-mode-button" onClick={() => { setMode(mode === 'map' ? 'orbit' : 'map'); setFilterOpen(false); }}><MapPin size={17} aria-hidden="true" />{mode === 'map' ? '回到邮册' : '地图查看'}</button>
          : <button type="button" className="gallery-close" aria-label={backLabel} onClick={back}><X size={20} aria-hidden="true" /></button>}
      </header><main ref={stageRef} tabIndex={0} className={`gallery-stage gallery-stage--${mode}`} aria-label={mode === 'orbit' ? '照片邮册' : mode === 'album' ? '相册查看' : '回忆地图'} {...gestures}>
        {mode === 'orbit' && (photos.length ? <div className="gallery-orbit">
          {orbitNodes(photos.length, position, capacity).map(node => <Stamp key={photos[node.index].album.id} photo={photos[node.index]} offset={node.offset} count={Math.min(photos.length, capacity)} bounds={bounds} active={node.index === activeIndex} selected={selection?.album.id === photos[node.index].album.id} onSelect={() => selectCover(photos[node.index])} />)}
          <div className="gallery-floor-shadow" aria-hidden="true" /></div> : <section className="gallery-empty"><div className="gallery-empty-paper"><h2>{hasFilter ? '这次筛选，没有找到照片。' : '相册盒里，还没有放入照片。'}</h2><p>{hasFilter ? '清除筛选，回看其他日子。' : '等整理好一段回忆，再把它放进来。'}</p>{hasFilter && <button type="button" data-gallery-control onClick={() => applyFilter('all', 'all')}>清除筛选</button>}</div></section>)}
        {mode === 'album' && viewed && <section className="gallery-photo-scene" aria-labelledby="gallery-photo-title">
          <div className="gallery-view-photo" data-photo-id={viewed.mediaAssetId}><GalleryPhotoVisual key={viewed.mediaAssetId} asset={viewed.asset} variant="original" title={photoTitle(viewed)} /></div>
          <div className="gallery-photo-note"><h2 id="gallery-photo-title">{photoTitle(viewed)}</h2>{photoFacts(viewed) && <p>{photoFacts(viewed)}</p>}</div>
          <span className="gallery-album-position" aria-live="polite">{albumIndex + 1} / {albumPhotos.length}</span>
          <Filmstrip photos={albumPhotos} index={albumIndex} onSelect={index => { setAlbumIndex(index); setFeedback(''); }} />
        </section>}
        {mode === 'map' && <GalleryMapBoundary key={mapAttempt} onRetry={() => setMapAttempt(n => n + 1)} onBack={() => setMode('orbit')}><Suspense fallback={<div className="gallery-map-loading" role="status">正在展开地图…</div>}>
          <GalleryMap albums={filteredAlbums} assets={assets} selectedAlbumId={mapAlbumId} onSelectAlbum={setMapAlbumId} state={mapState} onStateChange={setMapState} onFocus={(photoId, albumId) => {
            const album = albums.find(item => item.id === albumId);
            const photo = album && resolvePhotos(album, assets).find(item => item.mediaAssetId === photoId);
            if (photo) { setSource('map'); setSelection(photo); setAlbumIndex(photo.albumPhotoIndex); setMode('album'); }
          }} />
        </Suspense></GalleryMapBoundary>}
        {feedback && <span className="gallery-boundary-feedback" role="status">{feedback}</span>}
        {mode !== 'map' && <div className="sr-only" data-gallery-control><button type="button" tabIndex={-1} onClick={() => { move(-1); if (mode === 'orbit') settleOrbit(); }}>上一张照片</button><button type="button" tabIndex={-1} onClick={() => { move(1); if (mode === 'orbit') settleOrbit(); }}>下一张照片</button></div>}
      </main>
      {mode === 'orbit' && <div className="gallery-filter-entry" data-gallery-control><button ref={filterTriggerRef} type="button" onClick={() => setFilterOpen(true)} aria-expanded={filterOpen}><Filter size={17} aria-hidden="true" />筛选</button>{hasFilter && <><span>{filter.albumId !== 'all' ? albums.find(album => album.id === filter.albumId)?.title : filter.year + '年'}</span><button type="button" onClick={() => applyFilter('all', 'all')}>清除</button></>}</div>}
      </div>
      {filterOpen && <FilterPanel albums={albums} albumId={filter.albumId} year={filter.year} onApply={applyFilter} onClose={() => setFilterOpen(false)} height={bounds.height} />}
      <span className="sr-only" role="status" aria-live="polite">{mode === 'orbit' ? spoken : mode === 'album' && viewed ? `${photoTitle(viewed)}，第 ${albumIndex + 1} 张，共 ${albumPhotos.length} 张` : ''}</span>
      <a className="sr-only" tabIndex={-1} href={fontLicenseUrl}>题签字体开源许可</a>
    </div>
  </ViewportShell>;
}
