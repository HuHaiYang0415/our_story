# Gallery map

Current local implementation, revised 2026-09-18. Scope and publication authority
remain in [SCOPE.md](../../../../../SCOPE.md). This is an album display, not street
navigation, address geocoding or a current administrative-boundary service.

## Two levels, one continuous world

The China projection is the only world coordinate system. All 34 national
province features remain mounted when zooming into a city. Zhejiang's 11 city
regions and Shanghai's 16 districts use `china.project`, never a separately fitted
city viewport. The surrounding map persists and the detailed stage/fills are
transparent, so the leaf-lit environment continues without a solid rectangular seam.

Only `national` and `city` levels exist. The national city cover selects a city;
at city scale, a first cover activation selects the album and slightly lifts its
cover, and another opens it. Album selection never changes zoom. Scale is clamped
to 1–40, not the former park-level 2500. No park outline or OSM dataset is fetched
or rendered, so there is no OSM attribution on the current map. Historical OSM
source/license files remain in the original local worktree, not in this release.
There is no reader, unlocated album action, entry button or fixed album sidebar.

`mapPoint.label` identifies the sourced province; explicit `mapPoint.city` matches
a sourced Zhejiang city, or a municipality. Legacy illustrated `x/y` are ignored.
Shanghai uses its area-weighted centroid; Zhejiang cities use their source `cp`
representatives. No private address is sent to a provider or converted to guessed
coordinates. Qingtián is grouped under the confirmed Lishui city context. Labels
display the user-supplied addresses; the view explicitly says “城市级定位 · 地址仅展示”.
These are city representatives, not photo GPS, a park entrance or a house marker.

At country scale, nearby city covers have presentation offsets and connector lines
to their actual world anchors. `groupAlbumPins()` does not modify geographic
coordinates: identical anchors aggregate into a counted pin. Its nearby chooser
offers all city albums (three per page, one on short landscape); first activation
selects, second opens the album directly. Returning from the viewer restores the
parent-owned viewport and selected album; Home/national resets it.

## Loading and input

The map component loads only after the map action. Local China and Zhejiang JSON
load then; Shanghai district JSON loads after explicit Shanghai city intent.
Fetches have 15-second timeouts, AbortController cleanup and manual retry. Visitors
do not call tile providers or external map APIs. Missing Shanghai detail leaves
the national world usable. Covers/choosers request lazy compressed thumbnails;
original images are exclusively a parent album-viewer concern.

World/pins/labels share 480ms easing, dragging is immediate and reduced motion
disables interpolation. Bare-map wheel pans, Ctrl/Meta wheel and pinch preserve
browser zoom, +/- zoom, arrows pan and Enter/Space activate covers. Home resets,
Escape bubbles to the parent. Controls are excluded from map drag/wheel capture.
The fixed stage reserves 76px for the shared dial and has no vertical page scroll.

## Source and license

- China, Shanghai and Zhejiang use ECharts **4.0.2**, pinned revision
  [debcd7f324b77ad444f7ba31195535c749d08e53](https://github.com/apache/echarts/commit/debcd7f324b77ad444f7ba31195535c749d08e53).
- [China JSON](https://github.com/apache/echarts/blob/4.0.2/map/json/china.json): 34 features, 61,008 bytes;
  SHA-256 `36fca203715f2aa636e21bd226f8f183d7304ef13793c45909f0841ea06e1205`.
- [Shanghai JSON](https://github.com/apache/echarts/blob/debcd7f324b77ad444f7ba31195535c749d08e53/map/json/province/shanghai.json): 16 districts, 12,245 bytes;
  SHA-256 `e35ba305796125cea14255c2a0e36b3b1c1913e38a31e472aa19c7e2e265da7b`.
- [Zhejiang JSON](https://github.com/apache/echarts/blob/debcd7f324b77ad444f7ba31195535c749d08e53/map/json/province/zhejiang.json): 11 cities, 50,853 bytes;
  SHA-256 `af5af3b80ef1ea026f09b57a64b148ddaddfee671d93152d77cd9b81c1e5a2cd`.
- The exact revision has **BSD 3-Clause, copyright 2017 Baidu Inc.**, not the
  modern Apache license. Full license ships as `LICENSE.echarts-4.0.2.txt`.
  All supplied islands/rings, Taiwan, Hong Kong and Macau are retained; no invented
  inset is added. The historical source is not a claim about current boundaries.

Maintenance: `node Cabinet/src/pages/gallery/map/download-map.mjs` reproduces
these pinned files and license. Only this maintenance command needs network.
