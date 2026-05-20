# 520 陪伴互动 H5

轻量选项互动，与 `story/` 长叙事分离。

## 流程

开场 → 过渡 → 散步（好啊/没问题）→ **出游照 x2** → **第一次见面仙女棒** → 牵手（分支插图）→ 夜宵 → 永生花 → 520 结尾

## 本地预览

```bash
cd companion-520
python -m http.server 8080
```

## 资源目录

| 目录 | 内容 |
|------|------|
| `image/` | 背景图、出游照、散步插图（见 `assets/images/README.md`） |
| `bgm/粉雾海.mp3` | 背景音乐，开场第一次点选项后播放 |

- **全屏背景**：已接入 `bg-opening.png`、`bg-walk.png`；夜宵/花/结尾暂复用上述背景
- **生图提示词**：`docs/image-prompts.md`
- 右上角 **音乐** 按钮可开关 BGM

## 自定义

| 文件 | 作用 |
|------|------|
| `content.js` | 文案、节点、`ASSETS` 路径 |
| `app.js` | 逻辑、背景加载 |
| `styles.css` | 主题渐变、遮罩、插图样式 |

## 部署

与 `story/README.md` 相同，可单独部署本目录到 Gitee Pages。
