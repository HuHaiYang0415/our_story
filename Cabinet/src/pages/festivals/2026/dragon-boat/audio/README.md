# 端午页音频

## 内置音效

`scroll/audio/DragonBoatSound.ts` 使用 Web Audio 合成，无需额外素材：

- 展卷：纸张开
- morph-ink / morph-jiang / morph-boat / morph-zongzi-seal
- 彩蛋点击：木鱼/印章
- 进入伍幕：拆信
- 背景音乐：默认五声音阶环境 loop（极轻）

页头音量按钮可静音。

## 可选背景音乐文件

将环境音命名为 `ambient.mp3` 放在此目录后，在 `scroll/audio/registerAmbient.ts` 中取消注释导入行即可替换合成 BGM。
