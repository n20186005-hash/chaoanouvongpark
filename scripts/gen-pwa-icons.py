#!/usr/bin/env python3
"""Generate PWA icons for Chao Anouvong Park.

Draws a themed emblem (teak background, gold Mekong sun + river wave,
monument silhouette) and writes:
  public/icons/icon-192.png
  public/icons/icon-512.png
  public/icons/icon-512-maskable.png  (full-bleed, safe-zone content)
  public/icons/apple-touch-icon.png   (180x180)
"""
import math
import os
from PIL import Image, ImageDraw

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "icons")
TEAK_DEEP = (31, 26, 23)        # #1f1a17
TEAK = (58, 47, 42)             # #3a2f2a
GOLD = (212, 175, 55)           # #d4af37
GOLD_BRIGHT = (240, 217, 122)   # #f0d97a
RIVER = (180, 210, 220)         # soft river sheen
SILHOUETTE = (20, 16, 14)


def draw_emblem(size, maskable):
    # Supersample for crisp edges
    ss = 4
    s = size * ss
    img = Image.new("RGBA", (s, s), TEAK_DEEP)
    d = ImageDraw.Draw(img)

    # subtle inner panel
    pad = int(s * 0.06)
    d.rounded_rectangle([pad, pad, s - pad, s - pad], radius=int(s * 0.10), fill=TEAK)

    # safe scale: maskable keeps content within central 80%
    scale = 0.80 if maskable else 1.0
    cx, cy = s / 2, s / 2

    # Monument silhouette (stylized king statue on a base), centered
    mh = int(s * 0.46 * scale)           # total monument height
    base_w = int(s * 0.20 * scale)
    base_h = int(s * 0.07 * scale)
    top = int(cy - mh / 2)
    bottom = int(cy + mh / 2)
    # base trapezoid
    d.polygon(
        [
            (cx - base_w, bottom),
            (cx - base_w * 0.6, bottom - base_h),
            (cx + base_w * 0.6, bottom - base_h),
            (cx + base_w, bottom),
        ],
        fill=SILHOUETTE,
    )
    # column / body
    col_w = int(s * 0.06 * scale)
    col_top = top + int(s * 0.10 * scale)
    d.rectangle([cx - col_w, col_top, cx + col_w, bottom - base_h], fill=SILHOUETTE)
    # head
    head_r = int(s * 0.045 * scale)
    head_y = col_top - int(head_r * 0.2)
    d.ellipse([cx - head_r, head_y - head_r, cx + head_r, head_y + head_r], fill=SILHOUETTE)
    # sword / arm pointing (gold accent)
    arm_y = int((col_top + bottom - base_h) / 2)
    d.line([cx + col_w, arm_y, cx + int(s * 0.16 * scale), arm_y - int(s * 0.04 * scale)], fill=GOLD, width=max(2, int(s * 0.012 * scale)))

    # Sun behind monument (gold disc, upper)
    sun_r = int(s * 0.20 * scale)
    sun_y = int(cy - s * 0.16 * scale)
    d.ellipse([cx - sun_r, sun_y - sun_r, cx + sun_r, sun_y + sun_r], fill=GOLD)

    # River waves near bottom (gold + sheen)
    wy = int(cy + s * 0.26 * scale)
    amp = int(s * 0.018 * scale)
    step = max(2, int(s * 0.02))
    for yoff, col in ((0, GOLD), (int(s * 0.03 * scale), RIVER)):
        pts = []
        for x in range(0, s + step, step):
            yy = wy + yoff + int(amp * math.sin((x / s) * math.pi * 4))
            pts.append((x, yy))
        d.line(pts, fill=col, width=max(2, int(s * 0.012 * scale)), joint="curve")

    img = img.resize((size, size), Image.LANCZOS)
    return img


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    specs = [
        ("icon-192.png", 192, False),
        ("icon-512.png", 512, False),
        ("icon-512-maskable.png", 512, True),
        ("apple-touch-icon.png", 180, False),
    ]
    for name, size, mask in specs:
        img = draw_emblem(size, mask)
        img.save(os.path.join(OUT_DIR, name), "PNG")
        print("wrote", os.path.join(OUT_DIR, name))


if __name__ == "__main__":
    main()
