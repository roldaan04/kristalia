"""
Genera variantes WebP redimensionadas de las imágenes de las landings.

Script puntual (no forma parte del build): se ejecuta a mano cuando se añade o
cambia una imagen y sus resultados se versionan junto al original.

    python scripts/optimize-images.py

- Nunca modifica ni borra los originales.
- Nunca amplía: si el original es más estrecho que el ancho pedido, ese ancho
  se sustituye por el del original.
- Respeta la orientación EXIF (las fotos de móvil la traen).

Requiere Pillow (pip install pillow).
"""
from pathlib import Path

from PIL import Image, ImageOps

ASSETS = Path(__file__).resolve().parent.parent / 'src' / 'assets'

HERO = (828, 1280, 1920)
LANDSCAPE = (800, 1200)
PORTRAIT = (600, 900)

# (origen relativo a src/assets, nombre base de salida o None, anchos)
JOBS = [
    # Heroes (LCP)
    ('fachadas/edificio-fachada-acristalada.webp', None, HERO),
    ('cristales/fondoImageAtico.webp', None, HERO),
    ('particulares/particular.webp', None, HERO),
    ('cristales/pexels-padel-1.webp', None, HERO),
    # Contenido apaisado
    ('paneles-solares/paneles2.webp', None, LANDSCAPE),
    ('paneles-solares/paneles.webp', None, LANDSCAPE),
    ('cristales/cristalera.webp', None, LANDSCAPE),
    ('escaparates/escaparateCalle.webp', None, LANDSCAPE),
    # Contenido vertical
    ('cristales/cristalera.jpg', 'cristalera-porche', PORTRAIT),
    ('cristales/limpieza.webp', None, PORTRAIT),
    ('cristales/cristalera3.webp', None, PORTRAIT),
    ('cristales/casa.webp', None, PORTRAIT),
    ('cristales/cristalera2.webp', None, PORTRAIT),
    ('fachadas/fachadaAcristalada.webp', None, PORTRAIT),
    ('cristales/cristaleraChalet.webp', None, PORTRAIT),
    ('cristales/cristaleraCerrado.webp', None, PORTRAIT),
    ('cristales/pexels-padel-2.webp', None, PORTRAIT),
    # Logo (se muestra a 44-62 px; 128 px cubre pantallas 2x)
    ('logo.png', 'logo', (128,)),
]


def quality_for(width):
    # Los anchos de escritorio admiten algo más de compresión sin pérdida visible.
    return 72 if width >= 1600 else 78


def main():
    total_in = total_out = 0
    for src_rel, out_stem, widths in JOBS:
        src = ASSETS / src_rel
        im = ImageOps.exif_transpose(Image.open(src))
        has_alpha = im.mode in ('RGBA', 'LA') or 'transparency' in im.info
        im = im.convert('RGBA' if has_alpha else 'RGB')
        stem = out_stem or src.stem
        total_in += src.stat().st_size

        for w in sorted({min(w, im.width) for w in widths}):
            h = round(im.height * w / im.width)
            out = src.with_name(f'{stem}-{w}.webp')
            resized = im if w == im.width else im.resize((w, h), Image.Resampling.LANCZOS)
            q = 90 if has_alpha else quality_for(w)
            resized.save(out, 'WEBP', quality=q, method=6)
            size = out.stat().st_size
            total_out += size
            print(f'{out.relative_to(ASSETS)!s:55} {w}x{h:<5} {size // 1024:>4} KB')

    print(f'\nOriginales: {total_in // 1024} KB  ->  variantes generadas: {total_out // 1024} KB')


if __name__ == '__main__':
    main()
