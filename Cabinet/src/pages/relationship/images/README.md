# 相恋时光 · 插画

源文件：`D:\文档\个人素材\theLittePrince0x.svg`（完整版；勿用 `相恋时光纪念/relationship/` 下截断副本）。

| 项目内文件 | 时段 |
|------------|------|
| `theLittlePrince01.svg` | 凌晨 00:00–03:00 |
| `theLittlePrince02.svg` | 白昼 |
| `theLittlePrince03.svg` | 夜晚 |

透明处理：已删除全部 `fill:#ffffff` 路径（含大面积白底 `path1` 与零散白块），`pagecolor` 改为 `none`，便于融入页面昼夜渐变。重新从素材导入后可运行：

```bash
python scripts/clean-prince-white.py
```
