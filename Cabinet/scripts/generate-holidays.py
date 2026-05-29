#!/usr/bin/env python3
"""
生成节日日期表（北京时间自然日 YYYY-MM-DD）。

规则：
- 公历固定日、农历固定日由 lunar-python 换算；
- 清明节固定为每年公历 4 月 4 日至 6 日（三天）；
- 春节含农历正月初一至初八；除夕为正月初一公历日减一天。

依赖: pip install lunar-python
"""
from __future__ import annotations

import json
import os
from datetime import date, datetime, timedelta, timezone

try:
    from lunar_python import Lunar
except ImportError as e:
    raise SystemExit("请先安装: pip install lunar-python") from e

TZ_CN = timezone(timedelta(hours=8))
START_YEAR = 2026
END_YEAR = 2095
DATE_MIN = date(START_YEAR, 1, 1)
DATE_MAX = date(END_YEAR, 12, 31)

HOLIDAY_ORDER = [
    "元旦",
    "情人节",
    "清明",
    "劳动节",
    "儿童节",
    "端午节",
    "七夕",
    "国庆节",
    "中秋节",
    "重阳节",
    "圣诞节",
    "除夕",
    "春节",
    "元宵节",
]

# 公历月-日
SOLAR_FIXED = [
    ("元旦", 1, 1),
    ("情人节", 2, 14),
    ("劳动节", 5, 1),
    ("儿童节", 6, 1),
    ("国庆节", 10, 1),
    ("圣诞节", 12, 25),
]

# 农历月-日（除春节、除夕外）
LUNAR_FIXED = [
    ("元宵节", 1, 15),
    ("端午节", 5, 5),
    ("七夕", 7, 7),
    ("中秋节", 8, 15),
    ("重阳节", 9, 9),
]

SPRING_FESTIVAL_LUNAR_DAYS = 8  # 正月初一至初八
QINGMING_SOLAR_DAYS = (4, 5, 6)  # 清明节：4 月 4–6 日


def in_range(ymd: str) -> bool:
    d = date.fromisoformat(ymd)
    return DATE_MIN <= d <= DATE_MAX


def solar_year_of(ymd: str) -> int:
    return int(ymd[:4])


def add_entry(entries: list[dict], name: str, ymd: str, kind: str) -> None:
    if not in_range(ymd):
        return
    y = solar_year_of(ymd)
    entries.append({"name": name, "date": ymd, "year": y, "kind": kind})


def collect_solar_fixed(year: int) -> list[dict]:
    items: list[dict] = []
    for name, month, day in SOLAR_FIXED:
        ymd = f"{year:04d}-{month:02d}-{day:02d}"
        add_entry(items, name, ymd, "solar")
    return items


def collect_qingming(year: int) -> list[dict]:
    items: list[dict] = []
    for day in QINGMING_SOLAR_DAYS:
        ymd = f"{year:04d}-04-{day:02d}"
        add_entry(items, "清明", ymd, "solar")
    return items


def lunar_to_ymd(lunar_year: int, lunar_month: int, lunar_day: int) -> str:
    return Lunar.fromYmd(lunar_year, lunar_month, lunar_day).getSolar().toYmd()


def collect_lunar_year(lunar_year: int) -> list[dict]:
    items: list[dict] = []
    cny = lunar_to_ymd(lunar_year, 1, 1)
    cny_date = date.fromisoformat(cny)
    chuxi = (cny_date - timedelta(days=1)).isoformat()
    add_entry(items, "除夕", chuxi, "lunar")

    for day in range(1, SPRING_FESTIVAL_LUNAR_DAYS + 1):
        add_entry(items, "春节", lunar_to_ymd(lunar_year, 1, day), "lunar")

    for name, month, day in LUNAR_FIXED:
        add_entry(items, name, lunar_to_ymd(lunar_year, month, day), "lunar")

    return items


def build_by_date_names(entries: list[dict]) -> dict[str, list[str]]:
    by_date: dict[str, list[str]] = {}
    order_index = {n: i for i, n in enumerate(HOLIDAY_ORDER)}
    for e in sorted(entries, key=lambda x: (x["date"], order_index.get(x["name"], 99))):
        key = e["date"]
        if key not in by_date:
            by_date[key] = []
        if e["name"] not in by_date[key]:
            by_date[key].append(e["name"])
    return by_date


def main() -> None:
    all_entries: list[dict] = []

    for year in range(START_YEAR, END_YEAR + 1):
        all_entries.extend(collect_solar_fixed(year))
        all_entries.extend(collect_qingming(year))

    # 覆盖可能落在表外的除夕/春节：农历年略宽于公历范围
    for lunar_year in range(START_YEAR - 1, END_YEAR + 2):
        all_entries.extend(collect_lunar_year(lunar_year))

    all_entries.sort(key=lambda x: (x["date"], x["name"]))

    seen: set[tuple[str, str]] = set()
    unique: list[dict] = []
    for e in all_entries:
        key = (e["name"], e["date"])
        if key in seen:
            continue
        seen.add(key)
        unique.append(e)

    years_data: dict[str, list[dict]] = {}
    for e in unique:
        ys = str(e["year"])
        years_data.setdefault(ys, []).append(
            {"name": e["name"], "date": e["date"], "kind": e["kind"]}
        )
    for ys in years_data:
        years_data[ys].sort(key=lambda x: x["date"])

    out = {
        "meta": {
            "version": 2,
            "description": "节日日期表（北京时间自然日）；不含法定调休放假安排",
            "yearRange": [START_YEAR, END_YEAR],
            "timezone": "Asia/Shanghai",
            "datePrecision": "day",
            "rules": {
                "springFestival": "农历正月初一至初八（均为春节）",
                "chuxi": "春节正月初一对应公历日减一天",
                "qingming": "每年公历 4 月 4 日至 6 日（三天，均为清明）",
            },
            "holidayOrder": HOLIDAY_ORDER,
            "generatedAt": datetime.now(TZ_CN).strftime("%Y-%m-%d"),
            "generator": "Cabinet/scripts/generate-holidays.py (lunar-python / 寿星万年历)",
        },
        "festivals": unique,
        "years": years_data,
        "byDate": {
            "names": build_by_date_names(unique),
        },
    }

    out_path = os.path.normpath(
        os.path.join(os.path.dirname(__file__), "..", "src", "data", "holidays.json")
    )
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)

    y2026 = years_data["2026"]
    print(f"Wrote {len(unique)} entries -> {out_path}")
    for name in ("元旦", "春节", "除夕", "清明"):
        sample = [x for x in y2026 if x["name"] == name]
        if name in ("春节", "清明"):
            print(f"  2026 {name}: {len(sample)} 天 ({sample[0]['date']} .. {sample[-1]['date']})")
        elif sample:
            print(f"  2026 {name}: {sample[0]['date']}")


if __name__ == "__main__":
    main()
