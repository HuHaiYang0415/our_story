#!/usr/bin/env python3
"""
生成 24 节气日期表（北京时间自然日），与民间/日历一致的寿星万年历算法。

依赖: pip install lunar-python
"""
from __future__ import annotations

import json
import os
from datetime import datetime, timedelta, timezone

try:
    from lunar_python import Lunar
except ImportError as e:
    raise SystemExit("请先安装: pip install lunar-python") from e

TERM_DEFS = [
    ("立春", 315),
    ("雨水", 330),
    ("惊蛰", 345),
    ("春分", 0),
    ("清明", 15),
    ("谷雨", 30),
    ("立夏", 45),
    ("小满", 60),
    ("芒种", 75),
    ("夏至", 90),
    ("小暑", 105),
    ("大暑", 120),
    ("立秋", 135),
    ("处暑", 150),
    ("白露", 165),
    ("秋分", 180),
    ("寒露", 195),
    ("霜降", 210),
    ("立冬", 225),
    ("小雪", 240),
    ("大雪", 255),
    ("冬至", 270),
    ("小寒", 285),
    ("大寒", 300),
]

TERM_NAMES = [t[0] for t in TERM_DEFS]
TERM_LON = dict(TERM_DEFS)
TERM_NAME_SET = set(TERM_NAMES)

# getJieQiTable 内英文键 → 中文节气名
KEY_ALIASES = {
    "DA_XUE": "大雪",
    "DONG_ZHI": "冬至",
    "XIAO_HAN": "小寒",
    "DA_HAN": "大寒",
    "LI_CHUN": "立春",
    "YU_SHUI": "雨水",
    "JING_ZHE": "惊蛰",
}

TZ_CN = timezone(timedelta(hours=8))
START_YEAR = 2026
END_YEAR = 2095


def resolve_term_key(key: str) -> str | None:
    name = KEY_ALIASES.get(key, key)
    return name if name in TERM_NAME_SET else None


def collect_terms_for_year(year: int) -> list[dict]:
    seen: dict[str, str] = {}
    for month in (1, 6, 12):
        table = Lunar.fromYmd(year, month, 1).getJieQiTable()
        for key, solar in table.items():
            name = resolve_term_key(key)
            if not name:
                continue
            ymd = solar.toYmd()
            if int(ymd[:4]) != year:
                continue
            if name in seen:
                continue
            seen[name] = ymd

    if len(seen) != 24:
        missing = TERM_NAME_SET - set(seen)
        raise RuntimeError(f"{year} 年节气不完整，缺少: {sorted(missing)}")

    items = [
        {"name": name, "longitude": TERM_LON[name], "date": seen[name]}
        for name in TERM_NAMES
        if name in seen
    ]
    items.sort(key=lambda x: x["date"])
    return items


def anchor_date(terms: list[dict], name: str, year: int) -> datetime.date | None:
    for t in terms:
        if t["name"] == name and t["date"].startswith(f"{year}-"):
            return datetime.strptime(t["date"], "%Y-%m-%d").date()
    return None


def season_for_date(d: datetime.date, terms: list[dict]) -> str:
    y = d.year
    spring = anchor_date(terms, "春分", y)
    summer = anchor_date(terms, "夏至", y)
    autumn = anchor_date(terms, "秋分", y)
    winter = anchor_date(terms, "冬至", y - 1) or anchor_date(terms, "冬至", y)
    if not spring:
        spring = anchor_date(terms, "春分", y + 1)
    if not all([spring, summer, autumn, winter]):
        return "spring"
    if spring <= d < summer:
        return "spring"
    if summer <= d < autumn:
        return "summer"
    if autumn <= d < winter:
        return "autumn"
    return "winter"


def term_for_date(d: datetime.date, sorted_terms: list[dict]) -> str:
    key = d.isoformat()
    last: str | None = None
    for t in sorted_terms:
        if t["date"] <= key:
            last = t["name"]
        else:
            break
    return last or "冬至"


def build_by_date_maps(terms: list[dict]) -> tuple[dict[str, str], dict[str, str]]:
    sorted_terms = sorted(terms, key=lambda x: x["date"])
    by_term: dict[str, str] = {}
    by_season: dict[str, str] = {}

    start = datetime(START_YEAR, 1, 1).date()
    end = datetime(END_YEAR, 12, 31).date()
    d = start
    while d <= end:
        key = d.isoformat()
        by_term[key] = term_for_date(d, sorted_terms)
        by_season[key] = season_for_date(d, sorted_terms)
        d += timedelta(days=1)

    return by_term, by_season


def main() -> None:
    years_data: dict[str, list] = {}
    all_terms: list[dict] = []

    for year in range(START_YEAR, END_YEAR + 1):
        terms = collect_terms_for_year(year)
        years_data[str(year)] = terms
        for t in terms:
            all_terms.append({**t, "year": year})

    all_terms.sort(key=lambda x: x["date"])
    seen: set[tuple[str, str]] = set()
    unique: list[dict] = []
    for t in all_terms:
        key = (t["name"], t["date"])
        if key in seen:
            continue
        seen.add(key)
        unique.append(t)

    by_term, by_season = build_by_date_maps(unique)

    out = {
        "meta": {
            "version": 3,
            "description": "24节气日期表（北京时间自然日），与常见历书一致",
            "yearRange": [START_YEAR, END_YEAR],
            "timezone": "Asia/Shanghai",
            "datePrecision": "day",
            "dateNote": "交节所在公历日；算法为寿星万年历（lunar-python），非粗略天文近似",
            "seasonRule": {
                "type": "equinox-solstice",
                "anchors": ["春分", "夏至", "秋分", "冬至"],
                "spring": "春分日(含) 至 夏至日前",
                "summer": "夏至日(含) 至 秋分日前",
                "autumn": "秋分日(含) 至 冬至日前",
                "winter": "冬至日(含) 至 次年春分日前",
            },
            "termOrder": TERM_NAMES,
            "generatedAt": datetime.now(TZ_CN).strftime("%Y-%m-%d"),
            "generator": "Cabinet/scripts/generate-solar-terms.py (lunar-python / 寿星万年历)",
        },
        "terms": unique,
        "years": years_data,
        "byDate": {
            "term": by_term,
            "season": by_season,
        },
    }

    out_path = os.path.normpath(
        os.path.join(os.path.dirname(__file__), "..", "src", "data", "solar-terms.json")
    )
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)

    print(f"Wrote {len(unique)} entries -> {out_path}")
    for n in ("春分", "夏至", "秋分", "冬至"):
        t = next(x for x in years_data["2026"] if x["name"] == n)
        print(f"  2026 {n}: {t['date']}")


if __name__ == "__main__":
    main()
