"""压缩 image/ 下的素材，原图备份到 image/_originals/"""
import os
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "image"
ORIG = ROOT / "_originals"
MAX_PHOTO = 1080
MAX_BG = 1080
MAX_STICKER = 320
JPEG_QUALITY = 82
PNG_OPTIMIZE = True


def backup_once(path: Path) -> None:
    ORIG.mkdir(exist_ok=True)
    dest = ORIG / path.name
    if not dest.exists():
        shutil.copy2(path, dest)


def compress_jpeg(path: Path, max_side: int) -> None:
    backup_once(path)
    img = Image.open(path)
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")
    w, h = img.size
    if max(w, h) > max_side:
        ratio = max_side / max(w, h)
        img = img.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS)
    img.save(path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def compress_png(path: Path, max_side: int) -> None:
    backup_once(path)
    img = Image.open(path)
    if img.mode == "P":
        img = img.convert("RGBA")
    w, h = img.size
    if max(w, h) > max_side:
        ratio = max_side / max(w, h)
        img = img.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS)
    img.save(path, "PNG", optimize=PNG_OPTIMIZE)


def main() -> None:
    rules = {
        "travel-photo-1.jpg": MAX_PHOTO,
        "travel-photo-2.jpg": MAX_PHOTO,
        "first-meet-sparkler.jpg": MAX_PHOTO,
        "walk-not-holding-hands.jpg": MAX_PHOTO,
        "plead-beg.jpg": MAX_STICKER,
        "bg-opening.png": MAX_BG,
        "bg-walk.png": MAX_BG,
        "walk-holding-hands.png": MAX_BG,
        "flower-preserved.png": MAX_BG,
        "gift-curtain.png": MAX_PHOTO,
    }
    for name, max_side in rules.items():
        path = ROOT / name
        if not path.exists():
            continue
        before = path.stat().st_size
        if path.suffix.lower() in (".jpg", ".jpeg"):
            compress_jpeg(path, max_side)
        elif path.suffix.lower() == ".png":
            compress_png(path, max_side)
        after = path.stat().st_size
        print(f"{name}: {before // 1024}KB -> {after // 1024}KB")


if __name__ == "__main__":
    main()
