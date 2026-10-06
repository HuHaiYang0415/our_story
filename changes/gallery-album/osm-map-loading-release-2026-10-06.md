---
status: released-with-validation-gaps
authority: release-record
updated: 2026-10-06
---

# OSM 加载优化发布记录（2026-10-06）

实施位置为原仓库内忽略的隔离工作树 `.impeccable/osm-map-loading-2026-10-05/worktree`，完整正式基线 `f5ce5471ccbf04be7f6ad75448a567b0a732e9c3`，隔离分支 `codex/osm-map-loading-2026-10-05`。本记录中的路径均相对该树。原 master 保持 `8eb34f34b47963450e00aadcf5c305748912cf94`，原目录尚未同步，其他工作和独立旧候选不迁入发布；[保护复核](evidence/osm-release-2026-10-06/preservation.json)记录本轮1676文件字节一致及原HEAD只读核对，之前3237文件备份和5项实际恢复证明保留为私密本地材料。10月6日用户授权仅本次明确文件、根构建产物和非强制推送既有正式 master；见 [SCOPE](../../SCOPE.md)。

## 修复与资源契约

- 严格 check-release 改为真实清单及 galleryContent 调用链：五册（72/1/2/1/11）87原图、87缩略图、3JSON共177项，逐项名称、源/产物字节、SHA256、编译后的URL、MIME与公开批准记录校验。没有删除或放宽87张门禁。
- 未变原图使用既有 `gallery/originals/<册>/<文件>`，原图跟踪副本唯一，字节总计789232466（约752.67MiB）。仅忽略的dist/临时验收目录有构建副本；根gallery/versioned没有87张第二套原图。缩略图及地图JSON内容SHA256 URL，代码Vite hash；资源清单与版本入口快照可回滚。以后更改稳定URL的原图字节会触发碰撞拒绝，需单独设计新版本/撤除授权。
- 正式build:site重新构建并调用同一publishSite；首次从完整HEAD公共Git树捕获旧闭包（含顶层manifest/icon），仅恢复检出CRLF差异，拒绝实质同URL变更。.gitattributes固定源LF和输出原字节（生成物/原许可文件的已有空白不由diff格式检查重写，源码空白仍检查）。旧assets/pages不递归删除。520新输出仅保留运行时文件，旧公共文件仍保留。
- 先逐项预检所有碰撞，再写资源、校验闭包、存储清单/入口/资源清单，最后切入口。保留最近两版、七天内所有版及当前回滚版；只清理已过期清单里未被保留版引用且字节匹配的assets/gallery-versioned，稳定原图/pages/未知文件不删。Pages/CDN切换不承诺所有节点瞬时原子。
- 禁止路径拒绝七夕、dev-only、festivalPreview、环境/私人配置；不把原目录DEV预览/七夕迁入正式树。不提交.impeccable、profile、备份或私密证据。
- 门禁、发布链、单测、fixture及QA为可复现仓库材料：[QA说明](../../Cabinet/scripts/qa/README.md)、[实际修改文件](evidence/osm-release-2026-10-06/change-files.json)。新增canonical、retention单测和CI检查；地图原参数/内容/滤镜/文字/交互保持计划11.2实测选择。

## 本地验收与命令

所有命令在隔离Cabinet，证据在 [公开证据目录](evidence/osm-release-2026-10-06/README.md)，私人文件未入仓。

| 命令/检查 | 退出码与结果 |
| --- | --- |
| npm run verify | 0，类型/build/预算/草稿/链接/smoke；最终文档回填后另执行check:links |
| npm run test:gallery | 0，30/30，0跳过，含字节规范、拒绝碰撞、保留与回滚 |
| npm run check:release；node scripts/check-release.mjs .. | 0，严格5册/87+87/177、字节与调用URL |
| node scripts/qa/prepare-versions.mjs ../.release-qa --baseline | 0，Git完整f5基线LF导出，合成XYZ B/C/D；无官方批量网络 |
| npm run check:gallery:g0 | 0，四视口默认DEV/生产一致，官方URL在发网前合成拦截 |
| npm run check:gallery:g1 | 0，19/19，同一持久profile，不清缓存，不DisableCache；实际publishSite A→B/旧A首次地图/BFCache/304与200/弱网离线/新schema/连续发布/失败恢复/回滚 |
| node scripts/qa/resources.mjs | 0，5项；五封面decode、177浏览器HEAD哈希/MIME/长度、仅当前原图decode与缓存命中、无tile竞争 |
| npm run build:site | 0，正式根构建路径，旧公共Git基线捕获后保留新旧闭包 |
| node scripts/check-published-site.mjs | 0，active release-ad3c2aea6f6ca968；baseline-2cac98bfa1baf165；475闭包文件、855457305B（约815.83MiB），未重复原图、无fixture/七夕/测试配置 |

早期失败没有记为通过：旧目录原图0门禁已按真实契约修复；Windows检出CRLF导致相同URL不同字节碰撞时发布拒绝，补LF约束与Git公共树后复验通过；旧基线520忽略custom outDir时改为基线默认dist导出；G1重复C命中缓存时生成新C内容hash而不清profile；资源harness把5封面误写为5前景封面已改selector。初次沙箱启动/错误命令目录/脚本引号失败属于执行失败，最终命令重跑0。没有把失败日志覆盖为产品通过证据。

## 真实OSM与性能结论

人工普通浏览器查看默认生产预览的真实OSM当前全国9片、放大/重置/迪士尼省域9片；逐片decode、暖色滤镜、地名文字、两版权链接可见。进入当前原图4284×5712、high优先级、既有URL，返回保留选择与缩放。证据：[全国](evidence/osm-release-2026-10-06/osm-current.jpg)、[省域](evidence/osm-release-2026-10-06/osm-province.jpg)、[当前原图](evidence/osm-release-2026-10-06/current-original.jpg)。这是当前视野少量交互，不是街道层/全部海岛/真实手机/官方网络性能矩阵。

[计划11.4](osm-map-loading-plan-2026-10-05.md#114-g0osm对照与交互证据)前后40个地图冷样本及20个照片样本、原始数据保留。1440正常中心11.1%/90%10.0%，390正常中心14.7%/90%1.7%，均未达20%；弱网中心/覆盖44.8%–70.4%改善。844×390/DPR3持续输入p95 50.0ms未达33.3ms，未修改数字。真实手机/Safari/Firefox、真实heap、wire取消成本、每个停留/暖缓存/省域返回的独立重复性能样本仍待补测。功能/资源发布门禁通过不等于这些性能目标通过。

2026-10-06核查[标准瓦片政策](https://operations.osmfoundation.org/policies/tiles/)及[署名指南](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)：正式标准XYZ/default HTTP缓存，无no-cache瓦片/版本query、无未观看地区预热；半年仅维护复核。首屏后预热限站内代码/3JSON，封面及当前原图优先。自动G0/G1使用合成fixture或发网前拦截，线上站内资源自动检查的DNS阻断首轮失效，后续已用CDP阻断复验（见下节）；自动G0/G1仍只使用合成XYZ，，真实OSM人工目检另列。

## 提交、远端、CI/Pages与线上升级

以下按实际发生保留历史状态；最终成功提交、门禁及当前限制以末节“最终发布验收”为准。

提交前核对origin为 `git@github.com:HuHaiYang0415/our_story.git`，远端master仍完整f5。端口22受限，使用现有密钥经ssh.github.com:443，只在忽略QA目录保存经官方指纹核对的known-hosts；不修改全局配置，不换origin。仅非强制HEAD:master，远端推进则停止并在隔离树安全处理/重验。

根产物与源码提交 **3117df146abf6f91e76039ad06273f43fd8d125b** 已非强制推送origin/master（f5→3117），[Pages部署](https://github.com/HuHaiYang0415/our_story/actions/runs/37411636903) completed/success；[首次CI](https://github.com/HuHaiYang0415/our_story/actions/runs/37411637344)在npm ci失败，verify等步骤跳过，不能写CI通过。独立干净目录复现缺少已声明WASM可选传递依赖wasi-threads1.2.3；普通lock-only没有修复，按npm注册元数据补9行锁记录，干净实际npm ci/verify/30单测/check-release均0，[干净依赖证据](evidence/osm-release-2026-10-06/clean-dependencies.json)且产物入口SHA与发布版相同。未重装原依赖、未改既有包版本；修复提交及新CI待回填。

真实线上A旧页在03:09:39Z打开，直到Pages部署后才用default fetch获取入口，不清缓存/不DisableCache/不route；入口在触发后的1372ms观测到B（这不是部署到所有CDN节点的收敛时间）。旧A首次地图、新页B地图数据/版权及站内无HTTP失败，脚本退出0、四项通过。首轮原始JSON被后续current-only误覆写，只有命令观察摘要仍可核对：[升级观察](evidence/osm-release-2026-10-06/online-upgrade-observation.json)，不能声称保留了完整响应头原始证据；后续真正新入口发布应重做并独立保存。

审计首轮报告时发现DNS阻断被当前网络代理绕过，实际收到官方瓦片200响应，范围是两页当前全国视野，无遍历/缩放矩阵，数量未完整保留，不得写零。可复现脚本改为CDP Network.setBlockedURLs，两页均记录响应，保留站内默认HTTP缓存，拒绝相同入口冒充升级；同profile current-only实测站内地图/两许可链接通过且官方HTTP响应0，[当前站内检查](evidence/osm-release-2026-10-06/online-current-own-resources.json)。此复验不是重做A→B。

[线上版本抽查](evidence/osm-release-2026-10-06/online-version.json)14项通过：入口、应用/地图JS、三JSON、五代表缩略图字节SHA相等，一张稳定原图HEAD长度/类型正确。没有获取475份线上body或重下87原图。普通线上UI工具超时、Chrome控制器不可用，线上真实OSM视觉/原图decode未完成；本地普通浏览器真实OSM/原图检查和线上相同代码字节分别记录。

## 回滚依据与限制

根发布记录baseline-2cac98bfa1baf165存储完整f5公共闭包与入口；release-ad3c2aea6f6ca968存储优化版。回滚前执行 `node scripts/copy-site.mjs --rollback baseline-2cac98bfa1baf165`，再检查闭包、diff、门禁，做新的非强制发布提交；不要reset/force push或覆盖原master。旧基线无新清单快照，当前公共资源清单可保留为非运行时审计资料，旧应用读取原有URL；本地G1证明旧页/新版同时依赖可用。支持窗口外的极长期旧页不承诺永久可用；素材撤除的CDN失效/托管缓存头调整未在本轮实施，需独立授权与验收。当前托管配置保持现状，缓存收敛以实际发布观测回填。

### 安装链第二次复核（历史，最终结果如下）

锁修复与证据提交cef23031c13cabebfb9dbce2351f3d037c912c37非强制推送，Pages成功（[运行](https://github.com/HuHaiYang0415/our_story/actions/runs/37412724587)），[CI](https://github.com/HuHaiYang0415/our_story/actions/runs/37412725617)仍在npm ci失败。Windows默认npm11通过不等于CI的npm10兼容。独立npm10复现额外缺@emnapi/core/runtime1.11.3，按注册元数据补可选传递记录，未改变既有锁包版本；npm10实际干净ci、完整verify、30单测、check-release均0且入口SHA与发布根一致：[npm10结果](evidence/osm-release-2026-10-06/npm10-clean.json)。不将两次CI失败写通过；下一修复提交CI待实际核对。

[正式根回滚复验](evidence/osm-release-2026-10-06/root-rollback.json)退出0：临时输出完整默认f5入口回滚再通过真实publisher恢复新版，两版闭包验证及严格177资源均通过。87张大图只在忽略临时目录做硬链接，没有新增跟踪/字节副本；无官方请求。此项验证实际根快照，不是另一次线上回滚发布。

## 最终发布验收（2026-10-06）

**发布功能/资源门禁通过，保留验证缺口。** 最终源码兼容修复提交 **1225702cbbf2d078023ead067deb6b7211e62b3f** 已非强制推送既有origin/master；根应用/地图资源来自3117df1，随后两次锁修复未改变入口及资源字节。1225702的[CI](https://github.com/HuHaiYang0415/our_story/actions/runs/37413390794)和[Pages](https://github.com/HuHaiYang0415/our_story/actions/runs/37413390099)均completed/success，npm ci/verify/30单测/check-release/check-published-site逐步通过；[可复查结果](evidence/osm-release-2026-10-06/ci-pages.json)。两次此前失败保留在历史，不改为通过。此后的文档证据提交只回填实际结果，SHA按Git历史核对，不自引用生成自身SHA。

本地默认G0/真实publisher合成G1十九项、严格5册87+87/177URL、真实OSM普通预览交互、正式默认根临时回滚/恢复均通过。正常缓存线上取得新版入口、旧页首次lazy地图的命令观察及14项站内版本抽查通过，官方host阻断current-only复验0 HTTP响应。升级原始明细误覆写和首轮DNS失效限制仍保留，不能宣称完整线上G1响应证据或官方请求0；完整十九项可复查HTTP G1只在合成fixture上。

[最终全部修改路径](evidence/osm-release-2026-10-06/all-release-files.json)；[原目录最终保护](evidence/osm-release-2026-10-06/preservation-final.json)：1676文件字节一致，真实原HEAD8eb34f3未动。初始私有快照Git元数据在沙箱中不可用为空，最终拆分文件比较与授权只读HEAD核对，未把元数据读取差异当作内容变化；没有声称原git status逐字对比成功。原目录未同步，从原Cabinet启动仍展示其旧源码。

**未达/未验证及后续：** 正常网络20%和844×390/DPR3 p95 50.0ms未达标；真实设备/Safari/Firefox、heap/wire/独立暖性能重复、线上真实OSM视觉与原图decode仍未验证。后续补独占环境分解、设备目检和下次真正新入口发布前独立保存原始线上A→B证据；不扩大官方预取。托管缓存头/多CDN节点切换原子性/内容撤除CDN失效未配置，不承诺即时升级或窗口外旧页永久可用；Pages目前按master部署，与quality运行独立，若要改为成功CI后部署需单独设计托管门禁。当前未发现资源完整性/七夕与DEV运行时泄漏/旧闭包/安装链的发布阻塞，以上性能与线上证据范围按用户要求明确保留。

回滚依据仍为baseline-2cac98bfa1baf165完整f5入口/闭包及root-rollback.json验证；需用stored rollback生成新非强制提交发布，禁止覆盖脏master/force push。保留窗口最近两版+七天+活动回滚，根闭包475项855457305B，87张原图只有既有跟踪路径。
