---
status: active
owner: 项目维护者
version: 1.0
last_reviewed: 2026-09-11
---

# 内容领域与仓储契约

## 目的与边界

本契约连接 `Cabinet/src/domain/` 的领域模型、页面 feature 和内容 adapter。它只规定内容读取的稳定边界，不实现数据库、登录、API 服务或对象存储。

当前唯一实现是 `Cabinet/src/data/localContentRepository.ts`，以现有 TypeScript 内容和页面注册表为本地只读快照。未来 HTTP adapter 必须实现同一仓储语义，页面组件不得直接依赖 API DTO、数据库字段或存储 SDK。

## 参与方

- Owner：项目维护者，维护领域模型、仓储接口和兼容策略。
- 生产者：当前为本地 TS/JSON 资源；未来为通过边界校验后的 HTTP adapter。
- 使用者：信箱、相册、记忆和节日页面 feature。

## 当前接口与数据格式

领域类型位于 `Cabinet/src/domain/content.ts`：

- `Letter`：信件业务字段，兼容 520 互动页和弹窗正文。
- `Album`：相册元数据、经历日期/地点、封面媒体 ID 与有序媒体列表；可选照片级注记属于本册展示信息。
- `Memory`：纪念内容、发生时间与媒体 ID 列表。
- `FestivalPage`：页面 ID、Hash、生命周期、开放时间和档案元数据。
- `MediaAsset`：媒体类型、URL、可访问文本、尺寸/时长、加载角色和同一媒体的可选派生版本。

只读接口位于 `Cabinet/src/domain/contentRepository.ts`：

```ts
interface ReadonlyContentRepository {
  listLetters(): readonly Letter[];
  getLetter(id: string): Letter | undefined;
  listAlbums(): readonly Album[];
  listMemories(): readonly Memory[];
  listFestivalPages(): readonly FestivalPage[];
  listMediaAssets(): readonly MediaAsset[];
  getMediaAsset(id: string): MediaAsset | undefined;
}
```

当前 `EnvelopeStack` 和 `PolaroidGallery` 均通过只读内容仓储读取数据，组件 Props 和 URL 不变。相册仓储提供 `SCOPE.md` 已批准的五册静态内容；记忆集合仍为空。这些本地快照不代表已接入后端。

## 稳定不变式

- 仓储只读；调用方不能通过返回值修改 adapter 内部集合。
- ID 在一个 `spaceId` 内稳定；排序由 `sortOrder` 决定，不能以数组位置作为持久化 ID。
- `visibility` 和 `FestivalPage.lifecycle` 是内容状态，不由客户端日期判断替换；draft 页面不得被日期自动发布。
- 缺失记录返回 `undefined`，批量读取返回空数组，不用异常表示“没有内容”。
- 相册的 `startDate`/`endDate` 描述经历本身，`datePrecision` 只表达已知精度；缺失日期不得由客户端补成具体日。
- 相册组内顺序由 `mediaAssetIds` 或 `photos` 的稳定顺序决定；`coverMediaAssetId` 必须引用同册媒体，不能由文件名推断。
- `MediaAsset.variants` 只表达同一媒体的 thumb/medium/large 派生 URL；派生图必须去除 EXIF，页面按实际观看状态选择分辨率，不把高清图作为索引首屏资源。
- 本地旧种子可缺少尚未登记的时间元数据；HTTP/数据库边界必须补齐 `spaceId`、`createdAt`、`updatedAt`、`sortOrder` 和可见性。

## HTTP adapter 草案

以下是目标契约，不表示当前已经实现：

### 鉴权与授权

- 每次读取都由服务端根据会话令牌和 `spaceId` 授权；客户端日期、Hash 或隐藏按钮不是安全边界。
- 未登录、无权访问和已撤销内容分别映射为 `UNAUTHENTICATED`、`FORBIDDEN` 和 `NOT_FOUND`，不返回私人字段或可猜测的媒体源地址。
- adapter 只把通过 schema 校验的响应转换为领域类型，禁止把原始 DTO 透传到页面。

### 错误

统一错误至少包含稳定 `code`、用户可理解的 `message`、可选 `requestId` 和是否可重试的 `retryable`。网络超时/5xx 可重试；鉴权失败、校验失败和不存在不可盲目重试。

### 缓存

列表读取支持 `ETag`/`If-None-Match` 或等价版本号；adapter 可使用内存快照和短期 HTTP 缓存。私密数据不得写入公共 CDN 或持久化到未经授权的 localStorage；发布状态变化必须使相关快照失效。

### 时区

创建/更新时间使用带时区的 ISO 8601 时间戳；仅日期的节日开放日明确绑定业务时区。服务端保存原始时区语义，客户端只负责展示和本地化，不重新推断发布资格。

### 媒体 URL

`MediaAsset` 只承载服务端授权后得到的短期 URL、媒体类型和展示元数据。HTTP adapter 负责刷新过期 URL；大文件进入对象存储，数据库只保存元数据，不把二进制放入领域响应。

### 迁移种子

- 本地 TS/JSON 种子转换为版本化、可重复执行的迁移输入，保留稳定 ID、`spaceId`、排序和可见性。
- 迁移必须幂等：重复运行不产生重复内容；正式执行前提供 dry-run、冲突报告和可回滚备份。
- 当前不执行迁移，也不创建数据库；只有任务8获得授权后才选择具体存储和鉴权方案。

## 兼容与迁移

- v1 兼容当前 Hash、页面 Props 和本地内容展示。
- 新 adapter 先实现 `ReadonlyContentRepository`，通过同一页面验收后再替换 `getContentRepository()` 的实现。
- 领域字段的删除或语义改变需要新版本或兼容映射；API DTO 可以独立版本化，但不得把 DTO 名称提升为页面契约。

## 变更权限

涉及领域字段、仓储方法、鉴权或媒体访问语义的变更由项目维护者批准，并同步更新本契约、`SCOPE.md` 和相关任务。后端供应商、数据库和对象存储的选择不属于任务7授权范围。

## 验证

- `cd Cabinet && npm run lint`：验证领域类型、adapter 和现有页面类型兼容。
- `cd Cabinet && npm run build`：验证生产构建仍保持现有路由和资源边界。
- `cd Cabinet && npm run check:links`：验证契约与项目文档链接。
