#!/usr/bin/env python3
"""Generate the favicon and app-icon set from the brand mark.

    python3 scripts/generate-icons.py

Sources are the hand-maintained SVGs in public/brand/:
  mark-cloud.svg   the LMV monogram knocked out of the indigo cloud (favicon, icons)
  mark-bleed.svg   the monogram on a full-bleed indigo square (apple-touch, maskable)
public/favicon.svg is a copy of mark-cloud.svg.

Rendering goes through headless Chrome, not ImageMagick or a Python SVG
library: the exported paths use clip-paths that those renderers drop. Chrome
opens each source SVG directly (an <img> from a file: page stays blank) at
1024px; Pillow downsamples, which is sharper than asking Chrome for each size.
"""
import pathlib
import subprocess
import tempfile

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public"
BRAND = OUT / "brand"
CHROME = "google-chrome"


def render(svg: pathlib.Path, size: int = 1024) -> Image.Image:
    """Open the SVG itself in Chrome with an explicit pixel size and screenshot it."""
    with tempfile.TemporaryDirectory() as tmp:
        sized = pathlib.Path(tmp) / "mark.svg"
        text = svg.read_text()
        text = text.replace("<svg ", f'<svg width="{size}" height="{size}" ', 1)
        sized.write_text(text)
        png = pathlib.Path(tmp) / "out.png"
        subprocess.run([
            CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--default-background-color=00000000",
            f"--window-size={size},{size}", f"--screenshot={png}", f"file://{sized}",
        ], check=True, capture_output=True)
        return Image.open(png).convert("RGBA")


def main() -> None:
    (OUT / "icons").mkdir(parents=True, exist_ok=True)
    cloud = render(BRAND / "mark-cloud.svg")
    bleed = render(BRAND / "mark-bleed.svg")
    fit = lambda im, n: im.resize((n, n), Image.LANCZOS)

    fit(cloud, 16).save(OUT / "favicon-16.png")
    fit(cloud, 32).save(OUT / "favicon-32.png")
    fit(cloud, 48).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # iOS masks the corners itself, so ship a square with no transparency.
    fit(bleed, 180).convert("RGB").save(OUT / "apple-touch-icon.png")

    for n in (192, 512):
        fit(cloud, n).save(OUT / "icons" / f"icon-{n}.png")
        fit(bleed, n).save(OUT / "icons" / f"maskable-{n}.png")

    print("icons written to public/")


if __name__ == "__main__":
    main()
