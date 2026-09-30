import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  projectWebMercatorPoint,
  unprojectWebMercatorPoint,
} from './geography';
import type { MapState, Point } from './geography';

interface OsmTileLayerProps {
  template: string;
  state: MapState;
  fit: number;
  viewport: { width: number; height: number };
}

interface Tile {
  key: string;
  src: string;
  style: CSSProperties;
}

const tileUrl = (template: string, zoom: number, x: number, y: number) => template
  .replaceAll('{z}', String(zoom))
  .replaceAll('{x}', String(x))
  .replaceAll('{y}', String(y));

export function isLocalTileTemplate(template: string): boolean {
  return /^(?:\.?\/|https?:\/\/(?:localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d+)?\/)/i.test(template);
}

export default function OsmTileLayer({ template, state, fit, viewport }: OsmTileLayerProps) {
  const tiles = useMemo<readonly Tile[]>(() => {
    const zoom = Math.max(3, Math.min(16, Math.floor(3 + Math.log2(state.zoom))));
    const count = 2 ** zoom;
    const center: Point = {
      x: MAP_WIDTH / 2 - state.panX / state.zoom,
      y: MAP_HEIGHT / 2 - state.panY / state.zoom,
    };
    const mercatorCenter = unprojectWebMercatorPoint(center);
    const centerTileX = Math.floor(mercatorCenter.x * count);
    const centerTileY = Math.floor(mercatorCenter.y * count);
    const tileNorthWest = projectWebMercatorPoint({ x: centerTileX / count, y: centerTileY / count });
    const tileSouthEast = projectWebMercatorPoint({ x: (centerTileX + 1) / count, y: (centerTileY + 1) / count });
    const mapTileWidth = Math.abs(tileSouthEast.x - tileNorthWest.x);
    const mapTileHeight = Math.abs(tileSouthEast.y - tileNorthWest.y);
    const screenTileWidth = Math.max(1, mapTileWidth * fit * state.zoom);
    const screenTileHeight = Math.max(1, mapTileHeight * fit * state.zoom);
    const radiusX = Math.min(8, Math.ceil(viewport.width / screenTileWidth / 2) + 2);
    const radiusY = Math.min(8, Math.ceil(viewport.height / screenTileHeight / 2) + 2);
    const result: Tile[] = [];

    for (let y = Math.max(0, centerTileY - radiusY); y <= Math.min(count - 1, centerTileY + radiusY); y += 1) {
      for (let x = Math.max(0, centerTileX - radiusX); x <= Math.min(count - 1, centerTileX + radiusX); x += 1) {
        const start = projectWebMercatorPoint({ x: x / count, y: y / count });
        const end = projectWebMercatorPoint({ x: (x + 1) / count, y: (y + 1) / count });
        result.push({
          key: `${zoom}/${x}/${y}`,
          src: tileUrl(template, zoom, x, y),
          style: { left: start.x, top: start.y, width: end.x - start.x, height: end.y - start.y },
        });
      }
    }
    return result;
  }, [fit, state.panX, state.panY, state.zoom, template, viewport.height, viewport.width]);

  return <div className="gallery-map-osm-tiles" aria-hidden="true">
    {tiles.map(tile => <img key={tile.key} src={tile.src} style={tile.style} alt="" draggable={false} decoding="async"
      onError={event => { event.currentTarget.hidden = true; }} />)}
  </div>;
}
