---
status: release-ready-awaiting-push
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

2026-10-06核查[标准瓦片政策](https://operations.osmfoundation.org/policies/tiles/)及[署名指南](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)：正式标准XYZ/default HTTP缓存，无no-cache瓦片/版本query、无未观看地区预热；半年仅维护复核。首屏后预热限站内代码/3JSON，封面及当前原图优先。自动G0/G1使用合成fixture或发网前拦截，线上站内资源自动检查只阻止官方host，真实OSM人工目检另列。

## 提交、远端、CI/Pages与线上升级（待实际结果）

提交前核对origin为 `git@github.com:HuHaiYang0415/our_story.git`，远端master仍完整f5。端口22受限，使用现有密钥经ssh.github.com:443，只在忽略QA目录保存经官方指纹核对的known-hosts；不修改全局配置，不换origin。仅非强制HEAD:master，远端推进则停止并在隔离树安全处理/重验。

本记录当前为门禁后发布准备，尚未提交/推送；CI/Pages/线上新版本及同profile旧标签页升级等待实际部署后回填。线上A旧页已在持久profile打开并保持，主JS为index-DrAZx1gF.js；不清缓存、入口正常获取达到刷新条件后观察B，并在旧A首次打开地图验证老lazy依赖。不能把本地G1写成线上完成。

## 回滚依据与限制

根发布记录baseline-2cac98bfa1baf165存储完整f5公共闭包与入口；release-ad3c2aea6f6ca968存储优化版。回滚前执行 `node scripts/copy-site.mjs --rollback baseline-2cac98bfa1baf165`，再检查闭包、diff、门禁，做新的非强制发布提交；不要reset/force push或覆盖原master。旧基线无新清单快照，当前公共资源清单可保留为非运行时审计资料，旧应用读取原有URL；本地G1证明旧页/新版同时依赖可用。支持窗口外的极长期旧页不承诺永久可用；素材撤除的CDN失效/托管缓存头调整未在本轮实施，需独立授权与验收。当前托管配置保持现状，缓存收敛以实际发布观测回填。
