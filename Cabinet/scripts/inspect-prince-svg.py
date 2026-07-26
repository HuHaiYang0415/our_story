from pathlib import Path
import re

root = Path(r"D:/文档/个人素材")
for name in ["theLittePrince01.svg", "theLittePrince02.svg", "theLittePrince03.svg"]:
    p = root / name
    text = p.read_text(encoding="utf-8", errors="replace")
    print("====", name, "len", len(text), "endswith", text.rstrip().endswith("</svg>"))
    for m in re.finditer(
        r'fill:#ffffff|fill:#FFFFFF|fill:white|fill="#fff"|fill="#ffffff"|fill="#FFFFFF"',
        text,
    ):
        start = max(0, m.start() - 100)
        end = min(len(text), m.end() + 140)
        snip = re.sub(r"\s+", " ", text[start:end])
        print(" ", snip[:220])
    print()
