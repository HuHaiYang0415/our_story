# 相恋时光 · 音频

- 正式 BGM：`canonInD.mp3`
- `assets.ts` 通过 `?url` 导出 `RELATIONSHIP_BGM_URL`
- `loadRelationship.ts` 不预热 BGM；进页不创建音频实例
- 页内 `RelationshipAmbient`：仅用户点击音乐按钮后播放；unmount / 关闭时 `stopHtmlAudio`，并移除 `canplay` / `pointerdown`
