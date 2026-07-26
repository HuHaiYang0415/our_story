"""Remove / transparentize fill:#ffffff paths in Little Prince SVGs."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(r"d:\study\cursor\demo\Cabinet\src\pages\relationship\images")
FILES = [
    "theLittlePrince01.svg",
    "theLittlePrince02.svg",
    "theLittlePrince03.svg",
]

# Self-closing path with white fill in style=
WHITE_PATH_RE = re.compile(
    r'<path\b(?=[^>]*\bstyle="[^"]*fill:\s*#fff(?:fff)?\b[^"]*")[^>]*?/>',
    re.IGNORECASE,
)
# Also attribute form fill="#ffffff"
WHITE_PATH_ATTR_RE = re.compile(
    r'<path\b(?=[^>]*\bfill="#fff(?:fff)?"[^>]*)[^>]*?/>',
    re.IGNORECASE,
)
# Leftover style fill whites (safety)
WHITE_FILL_STYLE_RE = re.compile(
    r"(fill:\s*)#fff(?:fff)?\b",
    re.IGNORECASE,
)
WHITE_FILL_ATTR_RE = re.compile(
    r'(\bfill=")(?:#fff(?:fff)?|white)(")',
    re.IGNORECASE,
)
PAGECOLOR_RE = re.compile(r'pagecolor="#ffffff"', re.IGNORECASE)


def process(text: str) -> tuple[str, dict[str, int]]:
    stats = {
        "removed_style_paths": 0,
        "removed_attr_paths": 0,
        "style_rewrites": 0,
        "attr_rewrites": 0,
        "pagecolor": 0,
    }

    def drop_style(m: re.Match[str]) -> str:
        stats["removed_style_paths"] += 1
        return ""

    def drop_attr(m: re.Match[str]) -> str:
        stats["removed_attr_paths"] += 1
        return ""

    text2, n1 = WHITE_PATH_RE.subn(drop_style, text)
    stats["removed_style_paths"] = n1
    text3, n2 = WHITE_PATH_ATTR_RE.subn(drop_attr, text2)
    stats["removed_attr_paths"] = n2

    def rewrite_style(m: re.Match[str]) -> str:
        stats["style_rewrites"] += 1
        return m.group(1) + "none"

    def rewrite_attr(m: re.Match[str]) -> str:
        stats["attr_rewrites"] += 1
        return m.group(1) + "none" + m.group(2)

    text4, n3 = WHITE_FILL_STYLE_RE.subn(rewrite_style, text3)
    stats["style_rewrites"] = n3
    text5, n4 = WHITE_FILL_ATTR_RE.subn(rewrite_attr, text4)
    stats["attr_rewrites"] = n4

    text6, n5 = PAGECOLOR_RE.subn('pagecolor="none"', text5)
    stats["pagecolor"] = n5

    # Tighten leftover blank lines from removals (light touch)
    text6 = re.sub(r"\n{3,}", "\n\n", text6)
    return text6, stats


def main() -> None:
    for name in FILES:
        path = ROOT / name
        original = path.read_text(encoding="utf-8", errors="replace")
        if not original.rstrip().endswith("</svg>"):
            raise SystemExit(f"{name} is truncated; abort")
        cleaned, stats = process(original)
        if not cleaned.rstrip().endswith("</svg>"):
            raise SystemExit(f"{name} lost </svg> after clean; abort")
        remain = len(
            re.findall(r"fill:\s*#fff(?:fff)?\b|fill=\"#fff(?:fff)?\"", cleaned, re.I)
        )
        path.write_text(cleaned, encoding="utf-8", newline="\n")
        print(
            f"{name}: {len(original)} -> {len(cleaned)} "
            f"removed_paths={stats['removed_style_paths'] + stats['removed_attr_paths']} "
            f"rewrites={stats['style_rewrites'] + stats['attr_rewrites']} "
            f"remain_white={remain}"
        )


if __name__ == "__main__":
    main()
