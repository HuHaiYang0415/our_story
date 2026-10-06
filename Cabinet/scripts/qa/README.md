# OSM release acceptance (2026-10-06)

Run from Cabinet with Node 22+ and the locked dependencies (npm ci). Install Chrome, or set the browser scripts' channel for an available compatible Chromium. Playwright 1.62.1 is pinned in package-lock.json. PLAYWRIGHT_MODULE is an optional import override for a preinstalled runtime, never a tracked machine path.

- npm run verify
- npm run test:gallery
- npm run check:release
- node scripts/qa/prepare-versions.mjs ../.release-qa --baseline
- Start npm run dev -- --port 3020 using default OSM configuration.
- npm run check:gallery:g0
- npm run check:gallery:g1
- node scripts/copy-site.mjs --output ../.release-qa/default-site (seed this output with the complete current published index/assets/pages/gallery first).
- npm run build:site only under SCOPE authorization and after all release gates pass.
- node scripts/check-release.mjs .. checks the real root output.
- node scripts/check-published-site.mjs checks current/retained closures, provider, exclusions and total size.
- node scripts/qa/resources.mjs checks covers, all 177 runtime URLs and current original with the persistent profile.
- node scripts/copy-site.mjs --rollback <retained-id> switches the verified stored entry locally; publish that root with a new non-force commit to perform a hosted rollback. Do not reset master or force push.

prepare-versions builds B/C/D into ignored .release-qa, uses synthetic /xyz and detached source copies for schema/uncached-failure tests; production source/dist are untouched. --baseline archives complete f5 Cabinet from Git and adds only temporary original output copies. Large originals are tracked once at gallery/originals; temporary dist copies are ignored. No official OSM sweep or predownload is made. The synthetic fixture server has real HTTP TTL, ETag, 304/200 and missing-resource behavior.

G0 intercepts official tile URLs before network and compares four DEV/default-production viewports, including geometry, warm filter, credits, markers, covers and zoom. G1 uses the same persistent .release-qa/g1-profile without cache clearing, route interception or DisableCache. It exercises publishSite (the real copy-site implementation), A→B, old A lazy map, schema C, B/C closure, BFCache, expiry/conditional cache, weak/offline, rollback and bounded manual recovery. A repeated run keeps the profile. Re-run prepare-versions first to give schema C a genuinely new content hash; a cached previous C 200 assertion is not proof of upgrade failure.

The locally serving fixture models Pages entry TTL 600 seconds and a separate one-second entry for actual expiry waiting. It does not claim all real CDN nodes switch atomically. Release retention keeps all seven-day versions, latest two and current active rollback; only hash assets referenced by expired manifests and no retained manifest are removable. Stable originals/pages and unknown paths survive. Original-byte collisions reject before entry changes. Missing closure, unsafe paths, excluded content and corrupted rollback entries reject.

Results are written to ignored .release-qa. Only sanitized summaries, public screenshots and logs belong in changes/gallery-album/evidence/osm-release-2026-10-06. No profiles/backups/private evidence or .impeccable content may be staged. See the plan section 11 and release record for measured limits; functional script exit zero does not certify performance targets or untested devices.

The first real root publication bootstraps the complete public tree from HEAD Git blobs, including manifest.webmanifest/icon.png. It accepts checkout-only CRLF conversion, rejects substantive collisions and records the old entry independently of any unpublished generated entry. .gitattributes preserves emitted bytes and LF source inputs. Subsequent publications use committed release manifests without replacing their history.

online-own-resources.mjs opens the actual hosted A page in a persistent profile before deployment, then waits for .release-qa/online-continue.json containing the expected new main URL and source commit. After Pages deployment, it observes normal-cache entry convergence and first lazy-map use in the old tab; identical entry versions reject upgrade acceptance. CDP Network.setBlockedURLs blocks the official host on both pages without route interception or DisableCache; DNS blocking alone proved insufficient with the actual network proxy. --current-only checks the current own map and zero official HTTP responses, and does not claim A→B. Actual OSM viewport/credits/interaction requires separate ordinary manual viewing. It never clears browser cache or adds cache-busting queries.

Run node scripts/qa/online-version.mjs after deployment for normal own-host entry/JS/JSON/thumb byte checks and one stable-original HEAD. It does not download official tiles or claim every hosted original body was fetched. Test npm ci in a clean, independent directory as well as the existing installed environment; never reinstall through a node_modules junction into the original dirty worktree.
