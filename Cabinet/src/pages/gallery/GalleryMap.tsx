/** Two levels within one projected world. No park data or private-address geocoder. */
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import type { Album, MediaAsset } from '@/domain/content';
import { resolvePublicAssetUrl } from '@/shared/config/siteConfig';
import Photo from './map/Photo';
import { groupAlbumPins, locateAlbums, MAP_HEIGHT, MAP_WIDTH, maxMapZoom, normalizeState, parseGeography } from './map/geography';
import type { AlbumGroup, Geography, LocatedAlbum, MapState, Point } from './map/geography';
import { useMapInput } from './map/useMapInput';
import './map/gallery-map.css';

export type GalleryMapState = MapState;
export interface GalleryMapProps {
  albums: readonly Album[]; assets: ReadonlyMap<string, MediaAsset>;
  selectedAlbumId: string | null; onSelectAlbum: (id: string | null) => void;
  onFocus: (photoId: string, albumId: string) => void;
  state: GalleryMapState; onStateChange: (state: GalleryMapState) => void;
}
export const NATIONAL_MAP_STATE: GalleryMapState = { zoom: 1, panX: 0, panY: 0 };
const Land = memo(function Land({ geography, detail = false }: { geography: Geography; detail?: boolean }) {
  return <svg className={`gallery-map-land${detail ? ' gallery-map-district-layer' : ''}`} viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
    role="img" aria-label={detail ? '城市边界，叠加于连续全国地图' : '中国地图，省级边界；周边地区持续保留'}>
    {geography.regions.map(region => <path key={region.name} d={region.path} fillRule="evenodd" data-region={region.name}
      className={detail ? 'gallery-map-district' : 'gallery-map-province'}><title>{region.name}</title></path>)}
  </svg>;
});
const coverId = (album: Album) => album.coverMediaAssetId ?? album.mediaAssetIds[0];
const activate = (event: KeyboardEvent<HTMLElement>, action: () => void) => {
  if (event.target !== event.currentTarget || !['Enter', ' '].includes(event.key)) return;
  event.preventDefault(); event.stopPropagation(); action();
};

export default function GalleryMap(props: GalleryMapProps) {
  const { albums, assets, selectedAlbumId, onSelectAlbum, onStateChange } = props;
  const root = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1, height: 1 });
  const [geography, setGeography] = useState<Geography | null>(null);
  const [cities, setCities] = useState<Geography | null>(null);
  const [districts, setDistricts] = useState<Geography | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [detailAttempt, setDetailAttempt] = useState(0);
  const [cluster, setCluster] = useState<string | null>(null);
  const [clusterPage, setClusterPage] = useState(0);
  const state = normalizeState(props.state);
  const viewHeight = Math.max(1, size.height - 76);
  const fit = Math.max(.01, Math.min(size.width / MAP_WIDTH, viewHeight / MAP_HEIGHT) * .94);
  useEffect(() => {
    const controller = new AbortController(); let active = true;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setLoadError(false);
    const json = (file: string) => fetch(resolvePublicAssetUrl(`gallery/map/${file}`), { signal: controller.signal })
      .then(response => { if (!response.ok) throw Error('Map unavailable'); return response.json(); });
    Promise.all([json('china-4.0.2.json'), json('zhejiang-4.0.2.json')]).then(([china, zhejiang]) => {
      const world = parseGeography(china);
      const local = parseGeography(zhejiang, 11, world.project);
      if (active) { setGeography(world); setCities(local); }
    }).catch(() => { if (active) setLoadError(true); }).finally(() => window.clearTimeout(timeout));
    return () => { active = false; controller.abort(); window.clearTimeout(timeout); };
  }, [attempt]);
  useEffect(() => {
    if (state.city !== '上海' || !geography) return;
    const controller = new AbortController(); let active = true;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setDetailError(false);
    fetch(resolvePublicAssetUrl('gallery/map/shanghai-4.0.2.json'), { signal: controller.signal })
      .then(response => { if (!response.ok) throw Error('Detail unavailable'); return response.json(); })
      .then(value => parseGeography(value, 16, geography.project)).then(value => { if (active) setDistricts(value); })
      .catch(() => { if (active) setDetailError(true); }).finally(() => window.clearTimeout(timeout));
    return () => { active = false; controller.abort(); window.clearTimeout(timeout); };
  }, [state.city, geography, detailAttempt]);
  useEffect(() => {
    const node = root.current; if (!node) return;
    const measure = () => setSize({ width: node.clientWidth || 1, height: node.clientHeight || 1 });
    measure(); const observer = new ResizeObserver(measure); observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const locations = useMemo(() => geography && cities ? locateAlbums(albums, geography, cities) : null, [albums, geography, cities]);
  const selected = locations?.groups.flatMap(group => group.albums).find(item => item.album.id === selectedAlbumId);
  const anchorFor = (item: LocatedAlbum): Point => item.region.name === '上海' ? item.region.centroid : item.region.center;
  const pinGroups = locations?.groups.flatMap(group => groupAlbumPins(group, anchorFor)) ?? [];
  const screenPoint = (point: Point): Point => ({
    x: size.width / 2 + fit * (state.panX + (point.x - MAP_WIDTH / 2) * state.zoom),
    y: viewHeight / 2 + fit * (state.panY + (point.y - MAP_HEIGHT / 2) * state.zoom),
  });
  const centerOn = (point: Point, zoom: number, city: string) => onStateChange(normalizeState({ city, zoom,
    panX: -(point.x - MAP_WIDTH / 2) * zoom, panY: -(point.y - MAP_HEIGHT / 2) * zoom }));
  const select = (item: LocatedAlbum) => {
    if (selectedAlbumId === item.album.id) props.onFocus(coverId(item.album), item.album.id);
    else onSelectAlbum(item.album.id);
    // Selection never changes scale: national/city are the only map levels.
  };
  const openGroup = (group: AlbumGroup) => {
    setCluster(null); setClusterPage(0); onSelectAlbum(null);
    centerOn(group.center, group.name === '上海' ? 24 : 16, group.name);
  };
  const national = () => { setCluster(null); onSelectAlbum(null); onStateChange({ ...NATIONAL_MAP_STATE }); };
  const { zoom, handlers } = useMapInput(root, { state, fit, onStateChange, onNational: national });
  const worldStyle = { width: MAP_WIDTH, height: MAP_HEIGHT, top: viewHeight / 2, '--gallery-map-stroke': .85 / (fit * state.zoom),
    transform: `translate(-50%, -50%) translate(${fit * state.panX}px, ${fit * state.panY}px) scale(${fit * state.zoom})` } as CSSProperties;
  const positionStyle = (point: Point): CSSProperties => ({ transform: `translate(${point.x}px, ${point.y}px)` });
  const inView = (p: Point) => p.x > -30 && p.x < size.width + 30 && p.y > 65 && p.y < viewHeight - 10;
  // Public city anchors are close together at country scale. Cover offsets are
  // presentation-only; connector lines keep the actual city anchor explicit.
  const marker = (point: Point, album: Album, label: string, action: () => void, name: string, count = 1, offset: Point = { x: 0, y: 0 }) => {
    const anchor = screenPoint(point); if (!inView(anchor)) return null;
    const p = { x: Math.max(40, Math.min(size.width - 40, anchor.x + offset.x)), y: Math.max(80, Math.min(viewHeight - 40, anchor.y + offset.y)) };
    return <div key={name} className="gallery-map-marker" style={positionStyle(p)} data-album-id={album.id}>
      {(offset.x || offset.y) ? <svg className="gallery-map-connector" aria-hidden="true"><path d={`M0,0L${anchor.x - p.x},${anchor.y - p.y}`} /><circle cx={anchor.x - p.x} cy={anchor.y - p.y} r="2" /></svg> : null}
      <div role="button" tabIndex={0} data-gallery-map-control className={`gallery-map-cover${state.city && selectedAlbumId === album.id ? ' gallery-map-cover-selected' : ''}`}
        aria-label={name} aria-pressed={Boolean(state.city && selectedAlbumId === album.id)} onClick={action} onKeyDown={event => activate(event, action)}>
        <Photo asset={assets.get(coverId(album))} alt={`${album.title}封面`} />{count > 1 && <span className="gallery-map-stack-count">{count}</span>}
      </div><span className="gallery-map-marker-label">{label}</span>
    </div>;
  };
  const popupStyle = (p: Point): CSSProperties => ({
    left: Math.max(12, Math.min(size.width - Math.min(280, size.width - 24) - 12, p.x - 140)),
    top: Math.max(12, Math.min(viewHeight - (size.height < 420 ? 132 : 230), p.y + 32)), width: Math.min(280, size.width - 24),
  });
  const selectedPoint = selected ? screenPoint(anchorFor(selected)) : null;
  const clusterGroup = pinGroups.find(group => group.id === cluster && group.city === state.city);
  const clusterPoint = clusterGroup ? screenPoint(clusterGroup.center) : null;
  const clusterItems = clusterGroup?.albums ?? [];
  const capacity = size.height < 420 ? 1 : 3;
  const pageCount = Math.ceil(clusterItems.length / capacity);
  const pageIndex = Math.min(clusterPage, Math.max(0, pageCount - 1));
  const detail = state.city === '上海' ? districts : state.city ? cities : null;
  const labelPoints: Point[] = [];
  return <div ref={root} className="gallery-map-stage" tabIndex={0} role="region" aria-label="相册地图"
    data-map-level={state.city ? 'city' : 'national'} data-map-city={state.city} data-map-detailed={Boolean(detail)} data-map-zoom={state.zoom} {...handlers}>
    {geography ? <><div className="gallery-map-world" style={worldStyle}><Land geography={geography} />{detail && <Land geography={detail} detail />}</div>
      <div className="gallery-map-labels" aria-hidden="true">{[...geography.regions, ...(detail?.regions ?? [])].map(region => {
        const p = screenPoint(region.centroid);
        if (p.x < 30 || p.x > size.width - 30 || p.y < 20 || p.y > viewHeight - 25 || labelPoints.some(other => Math.abs(other.x - p.x) < 76 && Math.abs(other.y - p.y) < 24)) return null;
        labelPoints.push(p); return <span key={region.name} className="gallery-map-place" style={positionStyle(p)}>{region.name}</span>;
      })}</div>
      {locations?.groups.map(group => {
        if (!state.city || state.city !== group.name) return marker(group.center, group.albums[0].album, group.name, () => openGroup(group), `${group.name}，${group.albums.length}本邮册，放大城市`, group.albums.length,
          !state.city ? group.name === '上海' ? { x: 45, y: -60 } : group.name === '杭州' ? { x: -50, y: 20 } : { x: 30, y: 90 } : { x: 0, y: 0 });
        return <div key={group.name} className="gallery-map-group">{pinGroups.filter(pin => pin.city === group.name).map(pin => {
          const item = pin.albums[0];
          return pin.albums.length === 1 ? marker(pin.center, item.album, item.album.location || item.album.title, () => select(item), `选择邮册：${item.album.title}`)
            : marker(pin.center, item.album, `${group.name} · ${pin.albums.length} 册`, () => { setCluster(pin.id); setClusterPage(0); }, `${group.name}，${pin.albums.length}本邮册，展开城市邮册`, pin.albums.length);
        })}</div>;
      })}
      {selected && selectedPoint && inView(selectedPoint) && !clusterGroup && <section className="gallery-map-popup" data-gallery-map-control style={popupStyle(selectedPoint)} aria-label="已选邮册地址">
        <h2>{selected.album.title}</h2>{selected.album.location && <p className="gallery-map-address">{selected.album.location}</p>}<p>{selected.album.mediaAssetIds.length} 张照片 · 再次点击封面查看</p>
      </section>}
      {clusterGroup && clusterPoint && inView(clusterPoint) && <section className="gallery-map-popup gallery-map-cluster" data-gallery-map-control style={popupStyle(clusterPoint)} aria-label="城市邮册选择">
        <h2>{clusterGroup.city}的邮册</h2>{clusterItems.slice(pageIndex * capacity, (pageIndex + 1) * capacity).map(item => <div key={item.album.id} className="gallery-map-cluster-item"
          role="button" tabIndex={0} data-album-id={item.album.id} aria-label={`选择邮册：${item.album.title}`} aria-pressed={selectedAlbumId === item.album.id}
          onClick={event => { if (!(event.target as HTMLElement).closest('button')) select(item); }} onKeyDown={event => activate(event, () => select(item))}>
          <Photo asset={assets.get(coverId(item.album))} alt={item.album.title} /><span>{item.album.title}<small>{item.album.location}</small></span>
        </div>)}
        {pageCount > 1 && <nav aria-label="城市邮册翻页"><button type="button" disabled={pageIndex === 0} onClick={() => setClusterPage(pageIndex - 1)}>上一组</button><span>{pageIndex + 1}/{pageCount}</span><button type="button" disabled={pageIndex + 1 === pageCount} onClick={() => setClusterPage(pageIndex + 1)}>下一组</button></nav>}
      </section>}
    </> : <div className="gallery-map-message" role={loadError ? 'alert' : 'status'}><p>{loadError ? '地图未能载入' : '正在展开地图'}</p>{loadError && <button type="button" data-gallery-map-control onClick={() => setAttempt(n => n + 1)}>重试地图</button>}</div>}
    {geography && <><div className="gallery-map-zoom" data-gallery-map-control aria-label="地图缩放">
      <button type="button" aria-label="放大地图" onClick={() => zoom(1)} disabled={state.zoom >= maxMapZoom(state)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" /></svg></button>
      <button type="button" aria-label="缩小地图" onClick={() => zoom(-1)} disabled={state.zoom <= 1}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /></svg></button>
      <button type="button" aria-label="回到全国地图" onClick={national}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" /></svg></button>
    </div>{state.city && <span className="gallery-map-precision">城市级定位 · 地址仅展示</span>}</>}
    {state.city === '上海' && detailError && <button type="button" data-gallery-map-control className="gallery-map-detail-error" onClick={() => setDetailAttempt(n => n + 1)}>城市细节未载入，点击重试</button>}
  </div>;
}
