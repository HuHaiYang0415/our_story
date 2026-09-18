# 项目资源加载规范

> 适用范围：`Cabinet/` 内的页面、节日专题、小游戏、共享组件与资源加载器。
> 目标：让首屏尽快可用，把大资源延后到真正需要的交互，同时避免重复请求、隐形预加载和页面间相互污染。

## 1. 基本原则

1. **先让页面可用，再让素材完整**：首屏只等待用户立刻能看到或操作的资源。
2. **按路由和交互拆分**：页面主体、小游戏、重型动画和大媒体都应通过 `import()` 或 `React.lazy` 延后加载。
3. **大文件不阻塞进页**：音频、长卷、高清原图和大型 SVG 只能后台预热或在用户明确进入后加载。
4. **加载动作必须可解释**：加载器应说明当前阶段，失败要能重试；不使用“看不见的无限等待”。
5. **避免重复请求**：同一 URL 的预加载应由共享缓存去重，页面切换与重试不能反复创建相同的预加载任务。
6. **不为装饰性悬停付出重资源成本**：鼠标经过入口不应触发多 MB 图片、音频或页面模块下载；只有明确点击、按下或聚焦等意图才适合预取。

## 2. 资源分级与加载策略

| 级别 | 典型资源 | 页面是否等待 | 推荐方式 |
| --- | --- | --- | --- |
| 首屏必需 | 首屏背景、主视觉、第一块内容 | 是 | `preloadImageRequired`，与页面模块并行 |
| 首次交互必需 | 小游戏场景、第一组卡牌、进入后立即播放的轻量素材 | 进入交互前 | 点击后 `Promise.all` 预载，完成后打开 |
| 背景增强 | BGM、后续场景、非首屏装饰、下一关素材 | 否 | `preloadImage`、`warmAudioStream`、空闲时预取 |
| 源文件 | `_originals/` 原图、设计中间文件、未使用草稿 | 否 | 不得被源码 import，不得进入发布路径 |

### 2.1 首屏资源

- 只把影响首屏布局或核心内容的资源列为“必需”。
- 必需图片使用 `preloadImageRequired(url)`，失败应让页面进入可重试状态。
- 首屏不要等待大体积音频。音频下载速度受网络与浏览器策略影响，不能作为视觉页面的进页门槛。
- 页面有多个首屏资源时，与 `importWithRetry(() => import('./index'))` 并行执行，不要串行等待。

示例：

```ts
const pagePromise = importWithRetry(() => import('./index'));
const criticalPromise = preloadImageRequired(heroUrl);
const [page] = await Promise.all([pagePromise, criticalPromise]);
return page.default;
```

### 2.2 交互资源

- 小游戏或重型交互组件在入口页面中使用 `React.lazy`。
- 用户点击“开始游戏”后，同时执行组件导入和素材预载；不要在用户尚未选择玩法时启动计时器或游戏逻辑。
- 游戏开始前只预载当前玩法必须的资源；其它玩法的图片和音频等用户真正选择后再加载。
- 关闭小游戏、切换路由时清理计时器、事件监听、动画和音频实例。

### 2.3 音频资源

- 默认使用 `warmAudioStream(url)` 后台预热，不阻塞首屏。
- 能等到用户手势后创建 `Audio` 的，不要在装饰组件 mount 或 hover 时创建。
- 大于约 1MB 的音频必须明确标注为背景资源，并避免多个页面同时预热。
- 页面销毁时调用共享的 `stopHtmlAudio(audio)`，同时移除事件监听；不要保留失去引用但仍在播放的音频。
- 音效合成器（如 `AudioContext`）应在用户操作后初始化，并在页面离开时关闭或停止。

## 3. 代码拆分规范

### 3.1 路由级拆分

- `App.tsx` 只静态引入必要的初始壳层；信件、相册、关系页、节日档案和节日专题的页面 loader 使用 `React.lazy`。
- 页面 loader 内部再负责专题自己的 `importWithRetry` 与关键资源门槛。
- `Suspense` 必须提供轻量、稳定的 fallback，不能在 fallback 中继续加载大型图片或音频。
- 不要把页面主体、重型库或整套节日素材重新静态 import 回 `App.tsx`。

### 3.2 组件级拆分

- 不立即显示的小游戏、弹窗中的重型内容、下一章节内容使用 `lazy` 或用户意图后的动态 import。
- `import.meta.glob` 仅用于真正需要的目录；调试工具必须放在 `src/dev-only/` 并由 `import.meta.env.DEV` 保护。
- 不要用“鼠标经过装饰入口”作为多 MB 页面资源的预加载条件。移动端没有 hover，这种预取也无法形成稳定体验。

## 4. 图片与静态文件

- 采用与展示尺寸匹配的压缩版本；禁止从 `_originals/` 引用原图。
- `<img>` 应提供明确的 `alt`；装饰图使用空 `alt`，并设置 `draggable={false}`。
- 页面布局应提前声明尺寸或比例（`aspect-*`、固定容器、`width/height`），避免图片加载后发生 CLS。
- 首屏主图可以由页面 loader 预载；首屏以下图片默认使用原生 `loading="lazy"` 或交互前预载。
- 背景图不能只依赖 CSS 隐式加载来承担关键资源门槛；需要阻塞时用同一 URL 显式预载。
- 不要为了“优化”直接删除源文件或覆盖原图；先生成经过验证的新文件，再切换引用并比较视觉质量与体积。

## 5. 共享加载工具

统一使用 `Cabinet/src/shared/load/mediaPreload.ts`：

- `preloadImage(url)`：非阻塞图片预载，失败转为软失败。
- `preloadImageRequired(url)`：首屏必需图片，失败可被页面 loader 捕获并展示重试。
- `preloadAudioCanPlay(url)`：需要等待可播放时使用，比等待完整下载更适合大 BGM。
- `warmAudioStream(url)`：后台预热，不作为进页门槛。
- `stopHtmlAudio(audio)`：页面退出时停止并释放 HTMLAudioElement。
- `importWithRetry(loader)`：页面 chunk 的瞬时网络失败进行有限退避重试。

共享工具内部应保证：

- 同一 URL 的同类预载任务缓存并复用 Promise。
- 必需图片失败后清除失败缓存，允许用户重试。
- 定时器统一使用 `window.setTimeout` / `window.setInterval`，并在 cleanup 中清理。
- 预载事件完成、失败或超时后移除监听，避免悬挂引用。

## 6. 新页面推荐模板

```ts
export async function loadNewFest(onProgress?: LoadProgressCallback) {
  const track = createProgressTracker(onProgress);
  track.set('准备页面', 0.08);

  const modulePromise = importWithRetry(() => import('./index'));
  const criticalPromise = preloadImageRequired(heroUrl);

  const [module] = await Promise.all([modulePromise, criticalPromise]);
  track.done('可以打开');

  // 非首屏图片、BGM、下一阶段资源只能在这里后台启动。
  void preloadImage(nextImageUrl);
  warmAudioStream(bgmUrl);

  return module.default;
}
```

专题入口应使用 `useFestivePageLoader`，提供进度、失败和重试，不要在页面组件内部复制一套加载状态。

## 7. 性能检查流程

每次新增页面或大型素材前后都执行：

1. `cd Cabinet && npm run lint`
2. `cd Cabinet && npm run build`
3. 检查 `dist/assets` 中的 JS、图片和音频体积，记录新增的大文件。
4. 打开浏览器 Network，确认初始路由不会请求未使用的专题、小游戏和大音频。
5. 用移动设备或慢速网络测试：首屏是否先可用、加载失败是否能重试、点击进入游戏是否有清晰反馈。
6. 检查页面切换后旧音频是否停止、计时器是否清理、返回再进入是否会异常重复请求。
7. 检查窄屏与低高度设备：加载 fallback、图片比例和交互按钮不能造成滚动或遮挡。

构建出现“大 chunk”提示时，先定位是路由代码、第三方库还是素材引用，再选择拆分；不要为了消除提示而盲目拆碎稳定的小组件。

## 8. 当前项目落地约定

- 相册五组 87 张与地址于 2026-09-18 明确获公开许可。所有封面、地图标记和条带用 400px 压缩缩略图；仅册内当前大图请求静态原图。原图唯一跟踪副本 `gallery/originals/`，构建复制到 dist，不预热整册或重复放入 Cabinet/public。

- 初始展柜保留为快速可见壳层，其它主要页面已在 `App.tsx` 做路由级 lazy。
- 儿童节房间首屏只等待房间背景、卡牌盒和地鼠玩偶；两个游戏在用户打开前不加载主体。
- 本次七夕专题与本地测试不提交、不发布；以后若单独获授权发布，再确认其资源分级。
- 关系页只按当前时段按需请求一张大型 SVG；BGM 只在用户打开音乐后创建，展柜花束不再因 hover 触发关系页和音频加载。
- 端午长卷的环境音只在用户打开声音后创建，次要装饰不阻塞长卷脚本。
- 儿童节游戏音频只在用户选择对应玩法后加载，不在房间 loader 中预热。
- 每年新增节日时，先登记路由与资源分级，再按本文档检查首屏门槛和交互预载，不把上一年度的日期或素材直接混入新年度。
