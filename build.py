"""Construye Coco & Lena a partir del código fuente.

    python build.py              -> public/  (la web instalable que publica Vercel)
    python build.py --artifact   -> además dist/ (versión para el artifact de Claude)
    python build.py --preview    -> además _preview.html (para probar la versión del artifact en local)

Antes hay que tener las voces: python build_audio.py (crea public/audio/).
Los scripts se incrustan en un solo HTML para que acentos y emojis no dependan
de cómo el servidor declare la codificación de los .js.
"""
import json
import pathlib
import re
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
AUDIO = PUBLIC / "audio"
APP = "Coco &amp; Lena"

SKELETON_HEAD = (
    '<!doctype html><html><head><meta charset="utf-8">'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
    "<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);"
    "padding-bottom:env(safe-area-inset-bottom)}body{margin:0;font:14px system-ui}"
    "img{max-width:100%}[hidden]{display:none!important}</style></head><body>"
)
SITE_HEAD = f"""<!doctype html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>{APP}</title>
<meta name="description" content="Coco enseña español a los niños en la Isla Ñ; Lena enseña alemán A1.4 → A2 en la Werkstatt Ü. Voces reales, juegos y repetición espaciada.">
<meta name="robots" content="noindex,nofollow">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icon-192.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="{APP}">
<meta name="theme-color" content="#13A8B5">
<style>:root{{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}}body{{margin:0;font:14px system-ui}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>
</head><body>
"""
MANIFEST = {
    "name": "Coco & Lena", "short_name": "Coco & Lena", "start_url": "./", "scope": "./", "display": "standalone",
    "background_color": "#13A8B5", "theme_color": "#13A8B5", "orientation": "any", "lang": "es",
    "description": "Español para niños con Coco y alemán A1.4 → A2 con Lena.",
    "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
              {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
              {"src": "icon-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}],
}
VERCEL = {
    "framework": None,
    "outputDirectory": "public",
    "headers": [
        {"source": "/audio/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=604800"}]},
        {"source": "/sw.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]},
        {"source": "/(index.html)?", "headers": [{"key": "Cache-Control", "value": "no-cache"}]},
    ],
}


def manifest_js() -> str:
    m = AUDIO / "manifest.json"
    data = json.loads(m.read_text(encoding="utf-8")) if m.exists() else None
    return "window.AUDIO_MANIFEST=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";"


def build() -> str:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    man = manifest_js()
    (ROOT / "audio-manifest.js").write_text(man, encoding="utf-8")

    def inline(m: re.Match) -> str:
        name = m.group(1)
        if name != "audio-manifest.js" and not (ROOT / name).exists():
            print("AVISO: falta", name)
            return ""
        src = man if name == "audio-manifest.js" else (ROOT / name).read_text(encoding="utf-8")
        if "</script" in src.lower():
            raise SystemExit(f"{name} contiene </script>")
        return "<script>\n" + src + "\n</script>"

    out = re.sub(r'<script src="([\w./-]+\.js)"></script>', inline, html)
    if "<script src=" in out:
        raise SystemExit("quedó un <script src> sin incrustar")
    return out


def icon(size: int, safe: float, rounded: bool):
    from PIL import Image, ImageDraw, ImageFont
    s = size * 4
    img = Image.new("RGBA", (s, s))
    top, bot = (0x25, 0xBC, 0xC8), (0x0E, 0x95, 0xB8)
    grad = Image.new("RGBA", (s, s))
    d = ImageDraw.Draw(grad)
    for y in range(s):
        t = y / s
        d.line([(0, y), (s, y)], fill=tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3)) + (255,))
    d.ellipse([s * .08, s * .74, s * .92, s * 1.3], fill=(255, 231, 168, 255))
    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * .22) if rounded else 0, fill=255)
    img.paste(grad, (0, 0), mask)
    d = ImageDraw.Draw(img)
    font = ImageFont.truetype(r"C:\Windows\Fonts\seguibl.ttf", int(s * .46 * safe))
    for ch, x, col in (("Ñ", .30, (255, 224, 138, 255)), ("Ü", .70, (255, 255, 255, 255))):
        cx, cy = s * (.5 + (x - .5) * safe), s * .47
        d.text((cx + s * .012, cy + s * .016), ch, font=font, fill=(10, 90, 110, 120), anchor="mm")
        d.text((cx, cy), ch, font=font, fill=col, anchor="mm")
    return img.resize((size, size), Image.LANCZOS)


def build_site(out: str) -> None:
    PUBLIC.mkdir(exist_ok=True)
    body = out[out.index('<link rel="preconnect"'):]
    (PUBLIC / "index.html").write_text(SITE_HEAD + body + "\n</body></html>\n", encoding="utf-8")
    shutil.copy2(ROOT / "sw.js", PUBLIC / "sw.js")
    (PUBLIC / "manifest.webmanifest").write_text(json.dumps(MANIFEST, ensure_ascii=False, indent=1), encoding="utf-8")
    (ROOT / "vercel.json").write_text(json.dumps(VERCEL, indent=1) + "\n", encoding="utf-8")
    icons = {"icon-512.png": (512, 1, True), "icon-192.png": (192, 1, True), "icon-maskable.png": (512, .78, False), "apple-touch-icon.png": (180, 1, False)}
    try:
        for name, args in icons.items():
            icon(*args).save(PUBLIC / name)
    except (ImportError, OSError):
        if not all((PUBLIC / n).exists() for n in icons):
            raise
        print("(iconos sin regenerar: falta Pillow o la fuente; se usan los existentes)")
    n = len(list(AUDIO.glob("*.mp3")))
    print("public/ listo:", len(out.encode("utf-8")) // 1024, "KB +", n, "paquetes de voz")


def build_artifact(out: str) -> None:
    dist = ROOT / "dist"
    if (dist / "audio").exists():
        shutil.rmtree(dist / "audio")
    (dist / "audio").mkdir(parents=True)
    for f in AUDIO.glob("*.mp3"):
        shutil.copy2(f, dist / "audio" / f.name)
    (dist / "aprende-idiomas.html").write_text(out, encoding="utf-8")
    print("dist/ listo (artifact)")


def main() -> None:
    out = build()
    build_site(out)
    if "--artifact" in sys.argv:
        build_artifact(out)
    if "--preview" in sys.argv:
        (ROOT / "_preview.html").write_text(SKELETON_HEAD + out + "</body></html>", encoding="utf-8")
        print("_preview.html listo")


if __name__ == "__main__":
    main()
