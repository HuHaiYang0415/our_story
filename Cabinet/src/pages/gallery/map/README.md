# Gallery map

Current local implementation, revised 2026-09-24. Scope and publication authority
remain in [SCOPE.md](../../../../../SCOPE.md). This is an album display, not street
navigation, address geocoding or a current administrative-boundary service.

## Two views, one continuous world

The China projection is the only world coordinate system. All 34 province features
remain mounted when focusing an album's province-scale view. The surrounding map
persists and every map surface stays transparent, so the published warm-paper and
leaf-shadow background continues without a solid rectangular seam.

Only `national` and `province` views exist; zoom level is the sole distinction.
The first activation of a pin at national scale centers its real anchor and moves
to a fixed province scale. It never automatically zooms farther. Visitors use the
wheel or two-finger pinch to continue toward city scale, while activating an already
selected cover opens it. Scale is clamped to 1–40. No OSM dataset or third-party
tile service is fetched or rendered.

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

## Natural layers

The administrative projection draws a local Natural Earth base with 1:110m land,
lakes and major river centerlines. After an intentional zoom, three nationwide
1:10m detail files progressively add roads, populated places, airports and ports at
zoom 4, 8 and 16. They cover the full China extent plus a narrow surrounding margin,
not just places containing albums. All layers share `china.project`. Features use
the published warm-paper palette and expose no default text labels. This dataset is
regional reference geometry—not a turn-by-turn street map and not building-footprint
data. The prepared Gray Earth WebP is retained as licensed source material but is
not rendered or requested. Failure of either vector enhancement leaves the
administrative map and album controls usable.

## Loading and input

The map component loads only after the map action. Local China, Zhejiang and the
small Natural Earth base load then; nationwide detail waits for zoom 4/8/16. The
retained Shanghai district source is not requested by this two-view map. Fetches
have 15-second timeouts, AbortController cleanup and manual retry. Visitors do not
call tile providers or external map APIs. Covers request lazy compressed thumbnails;
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

Maintenance: `node Cabinet/src/pages/gallery/map/download-map.mjs` reproduces the
pinned base files and licenses. `node Cabinet/src/pages/gallery/map/download-natural-detail.mjs`
reproduces the progressive nationwide detail. Only these maintenance commands need
network access; the browser receives static local files.
