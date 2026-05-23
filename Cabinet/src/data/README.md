# solar-terms.json

未来 **70 年**（2026–2095）24 节气 **日期表**（北京时间 **自然日** `YYYY-MM-DD`，无时分秒）。

与纸质/手机日历一致：某日显示「春分」，则整天按春分所在节气段与季节规则查表。

## 四季划分（`byDate.season`）

以 **春分、夏至、秋分、冬至** 四个**日期**为界：

| 季节 | 区间（含节当日） |
|------|------------------|
| spring | 春分日 → 夏至日前 |
| summer | 夏至日 → 秋分日前 |
| autumn | 秋分日 → 冬至日前 |
| winter | 冬至日 → 次年春分日前 |

## 字段说明

| 字段 | 说明 |
|------|------|
| `terms` | 全部节气（1680 条）：`name`、`date`、`longitude` |
| `years["2026"]` | 该公历年 24 节气 |
| `byDate.term` | 日期 → 当日节气名 |
| `byDate.season` | 日期 → `spring` / `summer` / `autumn` / `winter` |

生成使用 **lunar-python（寿星万年历）**，与常见手机历书、黄历网的节气日期一致。

## 重新生成

```bash
pip install lunar-python
npm run generate:solar-terms
```

## 代码

见 `src/solarTerms.ts`。
