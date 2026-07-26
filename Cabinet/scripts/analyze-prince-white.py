"""Analyze white fills in Little Prince SVGs."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(r"d:\study\cursor\demo\Cabinet\src\pages\relationship\images")
FILES = [
    "theLittlePrince01.svg",
    "theLittlePrince02.svg",
    "theLittlePrince03.svg",
]

PATH_RE = re.compile(
    r"<path\b([^>]*?)\s*/>|<path\b([^>]*)>(.*?)</path>",
    re.DOTALL | re.IGNORECASE,
)
STYLE_RE = re.compile(r'style="([^"]*)"')
D_RE = re.compile(r'\bd="([^"]*)"')
ID_RE = re.compile(r'\bid="([^"]*)"')


def parse_style(style: str) -> dict[str, str]:
    out: dict[str, str] = {}
    for part in style.split(";"):
        if ":" not in part:
            continue
        k, v = part.split(":", 1)
        out[k.strip()] = v.strip()
    return out


def d_extent(d: str) -> tuple[float, float, float, float] | None:
    nums = [float(x) for x in re.findall(r"[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?", d)]
    if len(nums) < 2:
        return None
    xs, ys = nums[0::2], nums[1::2]
    if not xs or not ys:
        return None
    return min(xs), min(ys), max(xs), max(ys)


def main() -> None:
    for name in FILES:
        text = (ROOT / name).read_text(encoding="utf-8", errors="replace")
        whites = []
        for m in PATH_RE.finditer(text):
            attrs = m.group(1) or m.group(2) or ""
            style_m = STYLE_RE.search(attrs)
            if not style_m:
                continue
            style = parse_style(style_m.group(1))
            fill = style.get("fill", "").lower()
            if fill not in {"#ffffff", "#fff", "white"}:
                continue
            d_m = D_RE.search(attrs) or D_RE.search(m.group(0))
            d = d_m.group(1) if d_m else ""
            pid = ID_RE.search(attrs)
            ext = d_extent(d)
            area = 0.0
            if ext:
                area = max(0.0, ext[2] - ext[0]) * max(0.0, ext[3] - ext[1])
            whites.append(
                {
                    "id": pid.group(1) if pid else "?",
                    "opacity": style.get("fill-opacity", "1"),
                    "d_len": len(d),
                    "ext": ext,
                    "area": area,
                    "snip": d[:80],
                }
            )
        whites.sort(key=lambda w: w["area"], reverse=True)
        print(f"==== {name}: {len(whites)} white paths ====")
        for w in whites[:15]:
            print(
                f"  id={w['id']} area={w['area']:.2f} opacity={w['opacity']} "
                f"ext={w['ext']} d_len={w['d_len']}"
            )
            print(f"    {w['snip']}...")
        if len(whites) > 15:
            print(f"  ... +{len(whites) - 15} more")
        print()


if __name__ == "__main__":
    main()
