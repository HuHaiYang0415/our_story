#!/usr/bin/env python3
"""Compress and resize raster images used by the Cabinet site."""

from __future__ import annotations

import sys
from io import BytesIO
from pathlib import Path

from PIL import Image

CABINET_ROOT = Path(__file__).resolve().parent.parent
FESTIVAL_IMAGE_DIR = (
    CABINET_ROOT / "src/components/2026/Festival_2026_ChildrenDay/image"
)
STAMP_IMAGE_DIR = CABINET_ROOT / "image"
ICON_PATHS = [
    CABINET_ROOT / "public/icon.png",
    CABINET_ROOT.parent / "icon.png",
]

STAMP_MAX_SIDE = 512
STAMP_JPEG_QUALITY = 85

# Longest side limits tuned to actual UI display sizes (@2x retina headroom).
MAX_SIDE_RULES: list[tuple[str, int]] = [
    ("gameMemory/", 256),
    ("gameWhackAMole/mole_game_background.jpg", 768),
    ("gameWhackAMole/", 512),
    ("room_background.jpg", 1024),
    ("room_background.png", 1536),
    ("card_box.png", 512),
]

JPEG_QUALITY_RULES: list[tuple[str, int]] = [
    ("room_background.jpg", 82),
    ("gameWhackAMole/mole_game_background.jpg", 82),
]
DEFAULT_JPEG_QUALITY = 85

ICON_MAX_SIDE = 512


def max_side_for(rel: str) -> int:
    for pattern, limit in MAX_SIDE_RULES:
        if pattern.endswith("/"):
            if rel.replace("\\", "/").startswith(pattern):
                return limit
        elif rel.replace("\\", "/") == pattern or rel.replace("\\", "/").endswith("/" + pattern):
            return limit
    return 1024


def resize_if_needed(im: Image.Image, max_side: int) -> Image.Image:
    w, h = im.size
    longest = max(w, h)
    if longest <= max_side:
        return im
    scale = max_side / longest
    new_size = (max(1, round(w * scale)), max(1, round(h * scale)))
    return im.resize(new_size, Image.Resampling.LANCZOS)


def save_png(im: Image.Image, dest: Path | BytesIO) -> None:
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
    im.save(dest, format="PNG", optimize=True, compress_level=9)


def optimize_jpeg_file(
    path: Path,
    max_side: int,
    quality: int,
) -> tuple[int, int, tuple[int, int], tuple[int, int]]:
    before = path.stat().st_size
    with Image.open(path) as im:
        old_size = im.size
        resized = resize_if_needed(im.convert("RGB"), max_side)
        buffer = BytesIO()
        resized.save(
            buffer,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
        )
        optimized_bytes = buffer.getvalue()
        if len(optimized_bytes) >= before and resized.size == old_size:
            return before, before, old_size, old_size
        path.write_bytes(optimized_bytes)
        return before, len(optimized_bytes), old_size, resized.size


def jpeg_quality_for(rel: str) -> int:
    normalized = rel.replace("\\", "/")
    for pattern, quality in JPEG_QUALITY_RULES:
        if normalized == pattern or normalized.endswith("/" + pattern):
            return quality
    return DEFAULT_JPEG_QUALITY


def optimize_file(path: Path, max_side: int) -> tuple[int, int, tuple[int, int], tuple[int, int]]:
    before = path.stat().st_size
    with Image.open(path) as im:
        old_size = im.size
        resized = resize_if_needed(im, max_side)
        buffer = BytesIO()
        save_png(resized, buffer)
        optimized_bytes = buffer.getvalue()
        if len(optimized_bytes) >= before and resized.size == old_size:
            return before, before, old_size, old_size
        path.write_bytes(optimized_bytes)
        return before, len(optimized_bytes), old_size, resized.size


def main() -> int:
    rows: list[tuple[str, int, int, str, str]] = []
    total_before = 0
    total_after = 0

    if not FESTIVAL_IMAGE_DIR.exists():
        print(f"Missing image dir: {FESTIVAL_IMAGE_DIR}", file=sys.stderr)
        return 1

    for path in sorted(FESTIVAL_IMAGE_DIR.rglob("*")):
        if path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"}:
            continue
        rel = str(path.relative_to(FESTIVAL_IMAGE_DIR))
        limit = max_side_for(rel)
        if path.suffix.lower() in {".jpg", ".jpeg"}:
            before, after, old_dim, new_dim = optimize_jpeg_file(
                path, limit, jpeg_quality_for(rel)
            )
            rule = f"max {limit}px jpeg q{jpeg_quality_for(rel)}"
        else:
            before, after, old_dim, new_dim = optimize_file(path, limit)
            rule = f"max {limit}px"
        total_before += before
        total_after += after
        dim_note = f"{old_dim[0]}x{old_dim[1]}"
        if old_dim != new_dim:
            dim_note += f" -> {new_dim[0]}x{new_dim[1]}"
        rows.append((rel, before, after, dim_note, rule))

    if STAMP_IMAGE_DIR.exists():
        for path in sorted(STAMP_IMAGE_DIR.glob("stamp-*.jpg")):
            rel = str(path.relative_to(CABINET_ROOT.parent))
            before, after, old_dim, new_dim = optimize_jpeg_file(
                path, STAMP_MAX_SIDE, STAMP_JPEG_QUALITY
            )
            total_before += before
            total_after += after
            dim_note = f"{old_dim[0]}x{old_dim[1]}"
            if old_dim != new_dim:
                dim_note += f" -> {new_dim[0]}x{new_dim[1]}"
            rows.append(
                (rel, before, after, dim_note, f"max {STAMP_MAX_SIDE}px jpeg q{STAMP_JPEG_QUALITY}")
            )

    for icon_path in ICON_PATHS:
        if not icon_path.exists():
            continue
        before, after, old_dim, new_dim = optimize_file(icon_path, ICON_MAX_SIDE)
        total_before += before
        total_after += after
        rel = str(icon_path.relative_to(CABINET_ROOT.parent))
        dim_note = f"{old_dim[0]}x{old_dim[1]}"
        if old_dim != new_dim:
            dim_note += f" -> {new_dim[0]}x{new_dim[1]}"
        rows.append((rel, before, after, dim_note, f"max {ICON_MAX_SIDE}px"))

    print(f"{'File':<52} {'Before':>9} {'After':>9} {'Saved':>7}  Dimensions")
    print("-" * 100)
    for rel, before, after, dim_note, rule in rows:
        saved = max(0, before - after)
        pct = (saved / before * 100) if before else 0
        print(
            f"{rel:<52} {before/1024:>7.1f}K {after/1024:>7.1f}K {pct:>5.0f}%  {dim_note} ({rule})"
        )
    print("-" * 100)
    print(
        f"Total: {total_before/1024/1024:.2f} MB -> {total_after/1024/1024:.2f} MB "
        f"({max(0, total_before-total_after)/1024/1024:.2f} MB saved)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
