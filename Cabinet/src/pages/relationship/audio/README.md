# 相恋时光 · 音频

- 正式 BGM：`canonInD.mp3`
- `assets.ts` 通过 `?url` 导出 `RELATIONSHIP_BGM_URL`
- `loadRelationship.ts` 用 `warmAudioStream` 后台预热，**不挡进页**
- 页内 `RelationshipAmbient`：mount 后按开关播放；unmount / 关闭时 `stopHtmlAudio`，并移除 `canplay` / `pointerdown`
