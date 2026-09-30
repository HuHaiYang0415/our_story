# Gallery map

Current published implementation, revised 2026-09-30 with the warm OSM map. Scope and publication authority
remain in [SCOPE.md](../../../../../SCOPE.md). This is an album display, not street
navigation, address geocoding or a current administrative-boundary service.

## Two views, one continuous world

Web Mercator is the published world coordinate system. All 34 province features
remain mounted when focusing an album's province-scale view. The surrounding map
persists and every map surface stays transparent, so the published warm-paper and
leaf-shadow background continues without a solid rectangular seam.

Only `national` and `province` views exist; zoom level is the sole distinction.
The first activation of a pin at national scale centers its real anchor and moves
to a fixed province scale. It never automatically zooms farther. Visitors use the
wheel or two-finger pinch to continue toward city scale, while activating an already
selected cover opens it. The published OSM map allows manual zoom to street-level
tile detail while preserving the two-view state model.

`mapPoint.label` identifies the sourced province; explicit `mapPoint.city` may select
a licensed regional anchor for placing a cover, but it never creates a city view or
city-choice step. An optional `mapPoint.coordinate` is limited to a sourced public
regional representative. Disney and Lingyin use public landmark coordinates;
the confession album uses the public Wenxi town anchor `120.387610, 28.154159`,
not its street number. Legacy illustrated `x/y` are ignored. No private address is
sent to a provider or converted to guessed coordinates. The remaining Lisha pin is
a city representative until a publishable coordinate is confirmed; none of these
values are photo GPS or a private house marker.

Every cover is anchored directly to its sourced regional coordinate with no visual
offset and no connector line. Albums share one map pin only when both the display
coordinate and confirmed address match; only clicking that pin reveals a compact
album chooser. No province, city or album
text label is visible by default. Clicking a single pin reveals only its compact
album-name tag, and clicking bare map space clears the tag. There is no province or
city chooser. Province-scale zoom keeps surrounding province outlines and visible
nearby albums. Returning from the viewer restores the parent-owned viewport and
selected album; reopening the map from the album carousel starts at national. Home
and the bottom-right “全国” control use the same reset.

## Basemap and fallback layers

The published layer uses the OSM Foundation standard XYZ endpoint by default.
`VITE_GALLERY_OSM_TILE_URL` can replace it with another compliant XYZ template.
Tiles, administrative geometry and album anchors share Web Mercator. The raster is
treated with grayscale, warm sepia and multiply blend so the leaf-shadow paper stays
visible instead of becoming a separate gray rectangle.

A local Natural Earth 1:110m land/lake/river layer remains underneath as graceful
fallback. Broken tile images are hidden, leaving the fallback and album controls
usable. The older progressive 1:10m road/place/airport/port payloads remain tracked
for rollback and maintenance but are not requested while the OSM layer is active.

## Published OSM behavior

The previous Natural Earth implementation is recoverable at commit `284b3ac`.
Beginning with the 2026-09-30 release, production defaults to
`https://tile.openstreetmap.org/{z}/{x}/{y}.png`. A deployment may provide a different
compliant template through `VITE_GALLERY_OSM_TILE_URL`.

`GalleryMap` projects its local administrative geometry and album anchors into the
same Web Mercator space as the tiles. The state machine remains
national/province only: the first cover activation still enters province scale and
does not create a city chooser; further wheel or pinch input can reach zoom 15 tile
detail. The layer requests only tiles intersecting the current viewport plus a small
two-tile guard band, caps each axis to eight neighboring tiles and never scans or
prefetches the country. Natural Earth remains underneath as a graceful fallback.
OSM tiles are color-treated with the existing warm-paper palette and multiply blend,
so the leaf-shadow surface remains visible instead of becoming a separate gray map
rectangle.

Provider-rendered country, city, road, landmark and street names remain part of the
map. The earlier “no labels by default” rule applies only to album-name tags: album
names stay hidden until their cover is selected, and bare-map activation hides them
again. It does not remove geographic text from the basemap.

Any public tile host renders the persistent, non-interactive
`© OpenStreetMap contributors · ODbL` credit in the lower-left corner. Its subtle
warm-gray treatment may not be hidden, clipped or disabled. Project-relative,
`localhost`, `127.0.0.1` and `[::1]` templates are treated as self-hosted internal
endpoints. Do not point production at a service that forbids the requested traffic
pattern, and never use `tile.openstreetmap.org` for bulk or offline downloads.

## Loading and input

The map component loads only after the map action. Local China, Zhejiang and the
small Natural Earth fallback load then. The retained Shanghai district and Natural
Earth detail sources are not requested by the published OSM path. Map JSON fetches
have 15-second timeouts, AbortController cleanup and manual retry. XYZ images are
computed only for the active viewport, current zoom and a bounded guard band; there
is no country scan, prefetch or offline cache. The provider receives ordinary tile
coordinates, Referer and network request metadata, never album address text, photos,
EXIF or an online-geocoding request. Covers request lazy compressed thumbnails;
original images remain an album-viewer concern.

World and covers share 480ms easing; dragging is immediate and reduced motion
disables interpolation. Bare-map wheel and two-finger pinch zoom around their focal
point, one-pointer drag pans, Ctrl/Meta wheel preserves browser zoom, +/- zoom,
arrows pan and Enter/Space activate covers. Home resets.
Escape closes an open same-address chooser, clears the selected album, then resets a
moved or zoomed view, then exits from a clean national view. Controls are excluded
from map drag/wheel capture. The fixed stage has no vertical page scroll.

## Source and license

- China, Shanghai and Zhejiang use ECharts **4.0.2**, pinned revision
  [debcd7f324b77ad444f7ba31195535c749d08e53](https://github.com/apache/echarts/commit/debcd7f324b77ad444f7ba31195535c749d08e53).
- [China JSON](https://github.com/apache/echarts/blob/4.0.2/map/json/china.json): 34 features, 61,008 bytes;
  SHA-256 `36fca203715f2aa636e21bd226f8f183d7304ef13793c45909f0841ea06e1205`.
- [Shanghai JSON](https://github.com/apache/echarts/blob/debcd7f324b77ad444f7ba31195535c749d08e53/map/json/province/shanghai.json): 16 districts, 12,245 bytes;
  SHA-256 `e35ba305796125cea14255c2a0e36b3b1c1913e38a31e472aa19c7e2e265da7b`; retained but inactive.
- [Zhejiang JSON](https://github.com/apache/echarts/blob/debcd7f324b77ad444f7ba31195535c749d08e53/map/json/province/zhejiang.json): 11 cities, 50,853 bytes;
  SHA-256 `af5af3b80ef1ea026f09b57a64b148ddaddfee671d93152d77cd9b81c1e5a2cd`.
- The exact ECharts revision has **BSD 3-Clause, copyright 2017 Baidu Inc.**
  Full license ships as `LICENSE.echarts-4.0.2.txt`. All supplied islands/rings,
  Taiwan, Hong Kong and Macau are retained; no invented inset is added.
- Natural Earth 1:110m land, lakes and rivers, the progressive 1:10m roads/populated
  places/airports/ports, and the retained Gray Earth 1:50m source are public-domain
  data. See `LICENSE.natural-earth.txt`. The three generated detail payloads are
  1,438,558, 594,003 and 1,733,358 bytes and contain no raster tiles.
- Disney Resort uses the public landmark coordinate `121.657000, 31.144000` from
  [Wikidata Q973987](https://www.wikidata.org/wiki/Q973987); Lingyin Temple uses
  `120.096667, 30.242778` from [Wikidata Q1070228](https://www.wikidata.org/wiki/Q1070228).
- The public Wenxi town representative is `120.387610, 28.154159`, documented by
  [Amap place B0242154HF](https://www.amap.com/place/B0242154HF); no street address
  was submitted to a runtime provider.
- OpenStreetMap data is licensed under ODbL. OSM Foundation raster/vector tile
  services separately require visible attribution, ordinary browser caching and no
  bulk download. See the official [copyright page](https://www.openstreetmap.org/copyright)
  and [tile usage policy](https://operations.osmfoundation.org/policies/tiles/).

Maintenance: `node Cabinet/src/pages/gallery/map/download-map.mjs` reproduces the
pinned fallback files and licenses. `node Cabinet/src/pages/gallery/map/download-natural-detail.mjs`
reproduces the retained progressive detail. Runtime map viewing additionally requests
only the visible XYZ tiles from the configured provider.
