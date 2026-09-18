# 相纸页纸物素材

本目录仅为相纸页的局部装饰和题签字形，不包含用户照片。封面与条带使用仓储压缩缩略图，册内当前大图使用经用户明确批准的 `gallery/originals/` 静态原图；不从示意图裁出照片、文字或地图。以下导出登记中的旧 S2／本地未发布表述仅记录历史，当前交互及公开许可见 SCOPE 与 PRD 第16节。

## 生成素材

- `warm-paper.webp`：512×512，22,174 bytes；低对比纸纤维，用于照片留白、S2 相纸边和地图预览纸面。
- `stamp-frame.webp`：648×900，90,074 bytes；纸框的内部照片窗口与外部均为透明 alpha，纸纤维/不规则齿孔为生成素材，而非 CSS 假纹理。
- `paper-tag.webp`：640×131，20,254 bytes；透明边缘纸签，按钮文字和触控热区仍是 HTML。
- `coral-ticket.webp`：129×640，29,292 bytes；仅前景邮票后方的一处珊瑚色票根。

以上由内置 imagegen 生成；每个同名 `.webp.json` 保存发送给工具的精确提示词。原始 PNG 留在本机生成目录，机械导出只去掉空白透明画布并缩小/压缩，不改造照片或纸物轮廓。导出脚本为工作区 `.impeccable/gallery-assets/prepare.py`。纹理、纸框、纸签和票根没有私人信息；透明 alpha 保留，照片不应用环境染色。

这些是合成装饰，不是真实扫描件或内容证明。公开部署仍需遵循 `SCOPE.md` 的发布授权。

## 用户提供的叶影背景

- `leaf-shadow.webp`：1536×1024，28,848 bytes；相纸页的背景环境，不是相册内容照片。使用用户在本会话上传的 `叶影.png`，原 PNG 为 2,006,657 bytes；原图未覆盖、未复制为发布资源。
- 用户明确要求接入；生成工具、实际生成提示词和独立公开许可未提供，不补造来源。先前建议提示词保存在局部设计记录，同名 `.webp.json` 记录接收来源及输出事实，而非声称由代理生成。
- 原 PNG SHA-256：`1f2a142fd4d5a96bb71d5affb1a6eb226e5e06a093b36668dcb1b04570d75ba8`。工作区 `.impeccable/gallery-assets/export-leaf-shadow.py` 仅做方向归一、RGB 转换及 WebP quality 82 编码，没有生成、改绘、去底或裁出新轮廓；输出不携带源 EXIF。
- 桌面低对比覆盖背景；手机环境渐隐只作用于该背景层，保留照片原色。地图和册内观看减弱叶影，日夜暂时完全一致；聚焦大图与小记已按最新请求移除。未运行发布同步命令。

## 题签字体

- 来源：[Google Fonts / Long Cang](https://github.com/google/fonts/tree/main/ofl/longcang)，与全站已有 `Long Cang` 字体角色一致。
- 原始 `LongCang-Regular.ttf` 的 SHA-256：`e5bf2c3f24ef2327c6f136d8f73e2f9dfdf44896fdbeb35a9515f44777bb91bc`。
- 许可：[SIL OFL 1.1 原文](https://github.com/google/fonts/blob/main/ofl/longcang/OFL.txt)，完整副本为 `OFL.LongCang.txt`；许可不能因字体子集导出而移除。
- `gallery-hand.woff`：7,520 bytes，最新题签字符集为 `迪士尼告白节日灵隐寺日常0123456789张照片`。FontTools 仅安装到忽略版本控制的本地工具目录，不新增应用运行时依赖；原 OFL 许可完整保留。
- 仅邮票题签使用这个局部字体；正文与共享控件不更换字体。新增确认标题时需更新子集，缺字临时回退楷体/原有手写栈。原始字体仅作为本地导出输入，未作为多 MB 首屏资源发布。

```powershell
pyftsubset LongCang-Regular.ttf '--text=迪士尼告白节日灵隐寺日常0123456789张照片' --flavor=woff --output-file=gallery-hand.woff
```
