"""将大体积背景 PNG 转为 JPEG（无透明通道时）"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "image"
QUALITY = 78
MAX_W = 1080

for name in ("bg-opening.png", "bg-walk.png"):
    src = ROOT / name
    if not src.exists():
        continue
    img = Image.open(src).convert("RGB")
    w, h = img.size
    if w > MAX_W:
        img = img.resize((MAX_W, int(h * MAX_W / w)), Image.Resampling.LANCZOS)
    out = ROOT / name.replace(".png", ".jpg")
    img.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    print(f"{name} -> {out.name}: {out.stat().st_size // 1024}KB")
