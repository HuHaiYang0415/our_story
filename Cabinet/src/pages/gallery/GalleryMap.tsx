/** National and province views within one projected world. No private-address geocoder. */
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import type { Album, MediaAsset } from '@/domain/content';
import { resolvePublicAssetUrl } from '@/shared/config/siteConfig';
import Photo from './map/Photo';
import {
  groupAlbumPins, locateAlbums, MAP_HEIGHT, MAP_WIDTH, maxMapZoom, normalizeState,
  parseGeography, parseNaturalDetailGeography, parseNaturalGeography,
} from './map/geography';
import type { Geography, LocatedAlbum, MapState, NaturalDetailGeography, NaturalGeography, Point } from './map/geography';
import { useMapInput } from './map/useMapInput';
import './map/gallery-map.css';

export type GalleryMapState = MapState;
export interface GalleryMapProps {
  albums: readonly Album[]; assets: ReadonlyMap<string, MediaAsset>;
  selectedAlbumId: string | null; onSelectAlbum: (id: string | null) => void;
  onFocus: (photoId: string, albumId: string) => void;
  onExit: () => void;
  state: GalleryMapState; onStateChange: (state: GalleryMapState) => void;
}
export const NATIONAL_MAP_STATE: GalleryMapState = { zoom: 1, panX: 0, panY: 0 };
const PROVINCE_ZOOM = 4;
let baseMapKey = -1;
let baseMapPromise: Promise<{ world: Geography; cities: Geography }> | null = null;
let naturalMapKey = -1;
let naturalMapPromise: Promise<NaturalGeography> | null = null;
const detailMapPromises = new Map<string, Promise<NaturalDetailGeography>>();

const fetchMapJson = (file: string) => {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  return fetch(resolvePublicAssetUrl(`gallery/map/${file}`), { signal: controller.signal })
    .then(response => { if (!response.ok) throw Error('Map unavailable'); return response.json(); })
    .finally(() => window.clearTimeout(timeout));
};
const loadBaseMaps = (key: number) => {
  if (baseMapKey !== key || !baseMapPromise) {
    baseMapKey = key;
    baseMapPromise = Promise.all([fetchMapJson('china-4.0.2.json'), fetchMapJson('zhejiang-4.0.2.json')])
      .then(([china, zhejiang]) => {
        const world = parseGeography(china);
        return { world, cities: parseGeography(zhejiang, 11, world.project) };
      }).catch(error => { baseMapPromise = null; throw error; });
  }
  return baseMapPromise;
};
const loadNaturalMap = (key: number, project: Geography['project']) => {
  if (naturalMapKey !== key || !naturalMapPromise) {
    naturalMapKey = key;
    naturalMapPromise = fetchMapJson('natural-earth-110m.json').then(value => parseNaturalGeography(value, project))
      .catch(error => { naturalMapPromise = null; throw error; });
  }
  return naturalMapPromise;
};
const loadDetailMap = (key: number, level: number, project: Geography['project']) => {
  const cacheKey = `${key}:${level}`;
  const cached = detailMapPromises.get(cacheKey);
  if (cached) return cached;
  const promise = fetchMapJson(`natural-earth-china-detail-${level}.json`)
    .then(value => parseNaturalDetailGeography(value, project))
    .catch(error => { detailMapPromises.delete(cacheKey); throw error; });
  detailMapPromises.set(cacheKey, promise);
  return promise;
};

const Land = memo(function Land({ geography }: { geography: Geography }) {
  return <svg className="gallery-map-land" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
    role="img" aria-label="中国地图，省级边界；周边地区持续保留">
    {geography.regions.map(region => <path key={region.name} d={region.path} fillRule="evenodd" data-region={region.name}
      className="gallery-map-province"><title>{region.name}</title></path>)}
  </svg>;
});

const NaturalLayers = memo(function NaturalLayers({ natural }: { natural: NaturalGeography | null }) {
  return <svg className="gallery-map-natural" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} aria-hidden="true">
    {natural && <>
      <g className="gallery-map-natural-land">{natural.landPaths.map((path, index) => <path key={index} d={path} fillRule="evenodd" />)}</g>
      <g className="gallery-map-natural-lakes">{natural.lakePaths.map((path, index) => <path key={index} d={path} fillRule="evenodd" />)}</g>
      <g className="gallery-map-natural-rivers">{natural.riverPaths.map((path, index) => <path key={index} d={path} />)}</g>
    </>}
  </svg>;
});

const NaturalDetailLayers = memo(function NaturalDetailLayers({ details, scale }: { details: readonly NaturalDetailGeography[]; scale: number }) {
  const radius = Math.max(.35, 3 / Math.max(.01, scale));
  return <svg className="gallery-map-natural-detail" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} aria-hidden="true">
    {details.map(detail => <g key={detail.level} data-detail-level={detail.level}>
      {detail.roadPaths.major && <path className="gallery-map-road gallery-map-road-major" d={detail.roadPaths.major} />}
      {detail.roadPaths.secondary && <path className="gallery-map-road gallery-map-road-secondary" d={detail.roadPaths.secondary} />}
      {detail.roadPaths.local && <path className="gallery-map-road gallery-map-road-local" d={detail.roadPaths.local} />}
      <g className="gallery-map-detail-places">{detail.places.map((place, index) => <circle key={`${place.kind}:${place.name}:${index}`}
        className={`gallery-map-detail-place gallery-map-detail-place-${place.kind}`} cx={place.point.x} cy={place.point.y}
        r={place.kind === 'city' ? radius : radius * .78}><title>{place.name}</title></circle>)}</g>
    </g>)}
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
  const [natural, setNatural] = useState<NaturalGeography | null>(null);
  const [details, setDetails] = useState<ReadonlyMap<number, NaturalDetailGeography>>(() => new Map());
  const [loadError, setLoadError] = useState(false);
  const [naturalError, setNaturalError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [openPinId, setOpenPinId] = useState<string | null>(null);
  const state = normalizeState(props.state);
  const viewHeight = Math.max(1, size.height - 68);
  const fit = Math.max(.01, Math.min(size.width / MAP_WIDTH, viewHeight / MAP_HEIGHT) * .94);

  useEffect(() => {
    let active = true;
    setLoadError(false);
    loadBaseMaps(attempt).then(({ world, cities: local }) => {
      if (active) { setGeography(world); setCities(local); }
    }).catch(() => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, [attempt]);
  useEffect(() => {
    if (!geography) return;
    let active = true;
    setNaturalError(false);
    loadNaturalMap(attempt, geography.project)
      .then(value => { if (active) setNatural(value); })
      .catch(() => { if (active) setNaturalError(true); });
    return () => { active = false; };
  }, [attempt, geography]);
  const requestedDetailLevel = state.zoom >= 16 ? 3 : state.zoom >= 8 ? 2 : state.zoom >= 4 ? 1 : 0;
  useEffect(() => {
    if (!geography || !requestedDetailLevel) return;
    let active = true;
    setDetailError(false);
    Promise.all(Array.from({ length: requestedDetailLevel }, (_, index) => loadDetailMap(attempt, index + 1, geography.project)))
      .then(values => {
        if (!active) return;
        setDetails(previous => {
          const next = new Map(previous);
          for (const value of values) next.set(value.level, value);
          return next;
        });
      })
      .catch(() => { if (active) setDetailError(true); });
    return () => { active = false; };
  }, [attempt, geography, requestedDetailLevel]);
  useEffect(() => {
    const node = root.current; if (!node) return;
    const measure = () => setSize({ width: node.clientWidth || 1, height: node.clientHeight || 1 });
    measure(); const observer = new ResizeObserver(measure); observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const locations = useMemo(() => geography && cities ? locateAlbums(albums, geography, cities) : null, [albums, geography, cities]);
  const anchorFor = (item: LocatedAlbum): Point => item.point;
  const pinGroups = locations?.groups.flatMap(group => groupAlbumPins(group, anchorFor)) ?? [];
  const screenPoint = (point: Point): Point => ({
    x: size.width / 2 + fit * (state.panX + (point.x - MAP_WIDTH / 2) * state.zoom),
    y: viewHeight / 2 + fit * (state.panY + (point.y - MAP_HEIGHT / 2) * state.zoom),
  });
  const atNational = state.zoom === 1;
  const changeState = (next: GalleryMapState) => onStateChange(normalizeState(next));
  const focusProvince = (point: Point) => changeState({
    zoom: PROVINCE_ZOOM,
    panX: -(point.x - MAP_WIDTH / 2) * PROVINCE_ZOOM,
    panY: -(point.y - MAP_HEIGHT / 2) * PROVINCE_ZOOM,
  });
  const selectAlbum = (item: LocatedAlbum) => {
    setOpenPinId(null);
    if (selectedAlbumId === item.album.id) {
      props.onFocus(coverId(item.album), item.album.id); return;
    }
    onSelectAlbum(item.album.id);
  };
  const national = () => { setOpenPinId(null); onSelectAlbum(null); changeState({ ...NATIONAL_MAP_STATE }); };
  const escape = () => {
    if (openPinId) { setOpenPinId(null); return; }
    if (selectedAlbumId) { onSelectAlbum(null); return; }
    if (state.zoom !== 1 || state.panX || state.panY) { national(); return; }
    props.onExit();
  };
  const { zoom, handlers } = useMapInput(root, { state, fit, onStateChange, onNational: national, onEscape: escape });
  const worldStyle = { width: MAP_WIDTH, height: MAP_HEIGHT, top: viewHeight / 2, '--gallery-map-stroke': .85 / (fit * state.zoom),
    transform: `translate(-50%, -50%) translate(${fit * state.panX}px, ${fit * state.panY}px) scale(${fit * state.zoom})` } as CSSProperties;
  const positionStyle = (point: Point): CSSProperties => ({ transform: `translate(${point.x}px, ${point.y}px)` });
  const inView = (point: Point) => point.x > -34 && point.x < size.width + 34 && point.y > 12 && point.y < viewHeight + 28;
  const fullyNational = atNational && state.panX === 0 && state.panY === 0 && !selectedAlbumId && !openPinId;
  const detailReady = requestedDetailLevel > 0 && Array.from({ length: requestedDetailLevel }, (_, index) => details.has(index + 1)).every(Boolean);

  return <div ref={root} className="gallery-map-stage" tabIndex={0} role="region" aria-label="相册地图"
    data-map-level={atNational ? 'national' : 'province'} data-map-natural={natural ? 'ready' : naturalError ? 'failed' : 'loading'}
    data-map-detail={requestedDetailLevel === 0 ? 'idle' : detailError ? 'failed' : detailReady ? 'ready' : 'loading'}
    data-map-detail-level={requestedDetailLevel}
    data-map-zoom={state.zoom} onClick={event => {
      if ((event.target as Element).closest('[data-gallery-map-control], .gallery-map-marker')) return;
      setOpenPinId(null); onSelectAlbum(null);
    }} {...handlers}>
    {geography ? <><div className="gallery-map-world" style={worldStyle}>
      <NaturalLayers natural={natural} />
      <NaturalDetailLayers details={Array.from(details.values()).filter(detail => detail.level <= requestedDetailLevel)} scale={fit * state.zoom} />
      <Land geography={geography} />
    </div>
      {pinGroups.map(group => {
        const point = screenPoint(group.center);
        const selectedInGroup = group.albums.find(item => item.album.id === selectedAlbumId);
        if (!inView(point)) return null;
        const activateGroup = () => {
          if (atNational) focusProvince(group.center);
          if (group.albums.length > 1) { onSelectAlbum(null); setOpenPinId(group.id); }
          else selectAlbum(group.albums[0]);
        };
        return <div key={group.id} className={`gallery-map-marker${atNational ? ' gallery-map-marker-summary' : ''}`}
          style={positionStyle(point)} data-pin-id={group.id} data-album-count={group.albums.length}
          data-album-ids={group.albums.map(item => item.album.id).join(' ')}>
        <div role="button" tabIndex={0} data-gallery-map-control
          className={`gallery-map-cover${selectedInGroup ? ' gallery-map-cover-selected' : ''}${group.albums.length > 1 ? ' gallery-map-cover-multiple' : ''}`}
          aria-label={group.albums.length > 1 ? `${group.albums.length}本邮册位于同一位置，点击选择` : selectedInGroup ? `打开邮册：${selectedInGroup.album.title}` : '查看此处邮册'}
          aria-pressed={Boolean(selectedInGroup)}
          onClick={activateGroup}
          onKeyDown={event => activate(event, activateGroup)}>
          <Photo asset={assets.get(coverId(selectedInGroup?.album ?? group.albums[0].album))} alt="此处邮册封面" />
        </div>
        {selectedInGroup && openPinId !== group.id && <span className="gallery-map-name-tag">{selectedInGroup.album.title}</span>}
        {openPinId === group.id && <section className="gallery-map-album-chooser" data-gallery-map-control aria-label="选择此处邮册">
          {group.albums.map(item => <button type="button" key={item.album.id} aria-pressed={selectedAlbumId === item.album.id}
            onClick={() => selectAlbum(item)}>{item.album.title}</button>)}
        </section>}
      </div>;
      })}
    </> : <div className="gallery-map-message" role={loadError ? 'alert' : 'status'}><p>{loadError ? '地图未能载入' : '正在展开地图'}</p>{loadError && <button type="button" data-gallery-map-control onClick={() => setAttempt(n => n + 1)}>重试地图</button>}</div>}
    {geography && <div className="gallery-map-zoom" data-gallery-map-control aria-label="地图缩放">
      <button type="button" aria-label="放大地图" onClick={() => zoom(1)} disabled={state.zoom >= maxMapZoom(state)}>＋</button>
      <button type="button" aria-label="缩小地图" onClick={() => zoom(-1)} disabled={state.zoom <= 1}>−</button>
      <button type="button" className="gallery-map-national" aria-label="回到全国地图" onClick={national} disabled={fullyNational}>全国</button>
    </div>}
    {detailError && <button type="button" className="gallery-map-detail-retry" data-gallery-map-control onClick={() => setAttempt(value => value + 1)}>重试详细地图</button>}
  </div>;
}
