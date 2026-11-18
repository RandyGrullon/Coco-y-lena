"""Genera las voces de la página con voces neuronales (edge-tts) y las agrupa en
paquetes MP3 pequeños + un índice (public/audio/manifest.json).

    python build_audio.py          # genera lo que falte (usa la caché audio-cache/)
    python build_audio.py --dry    # solo cuenta los clips

La clave de cada clip es  etiqueta|texto  (texto sin «…» y con espacios normalizados);
la página pide exactamente esa clave. Si cambias un texto, vuelve a ejecutar esto.
"""
import asyncio
import hashlib
import json
import pathlib
import re
import subprocess
import sys

import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent
CACHE = ROOT / "audio-cache"
OUT = ROOT / "public" / "audio"
FFMPEG = pathlib.Path.home() / "AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1.2-full_build/bin/ffmpeg.exe"

# etiqueta -> (voz, velocidad, tono)
V = {
    "coco": ("es-DO-EmilioNeural", "-5%", "+25Hz"),
    "mia": ("es-MX-DaliaNeural", "-5%", "+15Hz"),
    "alex": ("es-ES-AlvaroNeural", "-5%", "+20Hz"),
    "valen": ("es-AR-ElenaNeural", "-5%", "+12Hz"),
    "k-lat": ("es-MX-DaliaNeural", "-12%", "+0Hz"),
    "k-es": ("es-ES-ElviraNeural", "-12%", "+0Hz"),
    "r-es": ("es-ES-XimenaNeural", "-8%", "+0Hz"),
    "r-mx": ("es-MX-JorgeNeural", "-8%", "+0Hz"),
    "r-do": ("es-DO-RamonaNeural", "-8%", "+0Hz"),
    "r-ar": ("es-AR-TomasNeural", "-8%", "+0Hz"),
    "r-co": ("es-CO-SalomeNeural", "-8%", "+0Hz"),
    "r-ve": ("es-VE-SebastianNeural", "-8%", "+0Hz"),
    "r-cl": ("es-CL-CatalinaNeural", "-8%", "+0Hz"),
    "r-pr": ("es-PR-KarinaNeural", "-8%", "+0Hz"),
    "r-cu": ("es-CU-ManuelNeural", "-8%", "+0Hz"),
    "k-de": ("de-DE-TanjaNeural", "-5%", "+0Hz"),
    "k-en": ("en-US-AnaNeural", "-5%", "+0Hz"),
    "de-f": ("de-DE-TanjaNeural", "-6%", "+0Hz"),
    "de-m": ("de-DE-ChristophNeural", "-6%", "+0Hz"),
    "de-f2": ("de-AT-IngridNeural", "-6%", "+0Hz"),
    "de-m2": ("de-AT-JonasNeural", "-6%", "+0Hz"),
    "de-f3": ("de-CH-LeniNeural", "-6%", "+0Hz"),
    "de-m3": ("de-CH-JanNeural", "-6%", "+0Hz"),
}
SLOW = "-30%"
CAST = {"coco": "coco", "mia": "mia", "alex": "alex", "valen": "valen"}
PAIR_TAGS = ["de-f", "de-m", "de-f2", "de-m2", "de-f3", "de-m3"]


def norm(t: str) -> str:
    return re.sub(r"\s+", " ", str(t).replace("…", "")).strip()


def spoken(t: str) -> str:
    return norm(t).replace(" / ", ", ")


def fill(q: str, ans: str) -> str:
    blanks, words = q.count("___"), ans.split(" ")
    if blanks > 1 and len(words) == blanks:
        for w in words:
            q = q.replace("___", w, 1)
    else:
        q = q.replace("___", ans, 1)
    if "→" in q:
        q = q.split("→")[1]
    q = re.sub(r"\s*\([^)]*\)", "", q)
    q = re.sub(r"\s+([.!?])", r"\1", q)
    return q.strip()


def dialog_tags(who: dict) -> dict:
    pools, out = {"f": ["de-f", "de-f2", "de-f3"], "m": ["de-m", "de-m2", "de-m3"]}, {}
    for k, (_, g) in who.items():
        p = pools[g]
        out[k] = p.pop(0) if len(p) > 1 else p[0]
    return out


def load_data():
    js = "global.window={};require('./es-data.js');require('./de-data.js');process.stdout.write(JSON.stringify({ES:window.ES,DE:window.DE}))"
    raw = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, check=True).stdout
    d = json.loads(raw.decode("utf-8"))
    return d["ES"], d["DE"]


def collect(ES, DE):
    groups: dict[str, list] = {}
    seen = set()

    def add(g, tag, text, rate=None):
        t = norm(text)
        if not t:
            return
        tag2 = tag + ("~s" if rate else "")
        key = tag2 + "|" + t
        if key in seen:
            return
        seen.add(key)
        voice, r, p = V[tag]
        groups.setdefault(g, []).append({"key": key, "text": spoken(text), "voice": voice, "rate": rate or r, "pitch": p})

    # ---- Isla Ñ ----
    for u in ES["units"]:
        g = "k-" + u["id"]
        for w in u["words"]:
            for nt in ("k-lat", "k-es"):
                add(g, nt, w["es"])
            for r, t in (w.get("vary") or {}).items():
                add(g, "r-" + r, t)
        for l in u["story"]:
            add(g, CAST[l["who"]], l["es"])
        for q in u["questions"]:
            for nt in ("k-lat", "k-es"):
                add(g, nt, q["q"])
        for p in u["phrases"]:
            for nt in ("k-lat", "k-es"):
                add(g, nt, p["es"])
        for s in u.get("sounds") or []:
            for nt in ("k-lat", "k-es"):
                add(g, nt, s["es"])
        for c in u.get("tpr") or []:
            add(g, "alex", "Simón dice: " + c["es"] + ".")
            add(g, "alex", c["es"] + ".")
    for s in ES["slang"]:
        add("k-slang", "r-" + s["r"], s.get("ex") or s["es"])
    for k, v in ES["narr"].items():
        add("k-narr", "k-de", v["de"])
        add("k-narr", "k-en", v["en"])
    for arr in ES["lines"].values():
        for t in arr:
            add("k-coco", "coco", t)
    for it in ES["shop"]:
        add("k-coco", "k-lat", it["es"])

    # ---- Werkstatt Ü ----
    for i, v in enumerate(DE["vocab"]):
        th, art, w, pl, es, ex = v
        word = (art + " " + w) if art in ("der", "die", "das") else w
        wt, et = ("de-f", "de-m") if i % 2 == 0 else ("de-m", "de-f")
        add("d-v-" + th, wt, word)
        if ex:
            add("d-v-" + th, et, ex)
    for gr in DE["grammar"]:
        g = "d-g-" + gr["id"]
        for e in gr["ex"]:
            add(g, "de-m", e)
        for it in gr["items"]:
            if it["t"] == "order":
                full = " ".join(it["w"])
            elif it["t"] == "mc":
                full = fill(it["q"], it["o"][it["a"]]) if "___" in it["q"] else it["o"][it["a"]]
            else:
                full = fill(it["q"], it["a"][0])
            add(g, "de-f", full)
    for d in DE["dialogs"]:
        tags = dialog_tags(d["who"])
        for s, de, _ in d["lines"]:
            add("d-dl-" + d["id"], tags[s], de)
            add("d-ds-" + d["id"], tags[s], de, rate=SLOW)
    for i, p in enumerate(DE["pairs"]):
        for a, b in p["p"]:
            for t in PAIR_TAGS:
                add("d-p-" + str(i), t, a)
                add("d-p-" + str(i), t, b)
    for s in DE["slang"]:
        add("d-slang", "de-m", s["de"])
        add("d-slang", "de-f", s["ex"])
    ex = DE["exam"]
    for it in ex["hoeren"]:
        parts = [x.strip() for x in re.split(r"(Frau:|Mann:)", it["text"]) if x.strip()]
        if len(parts) == 1:
            add("d-exam", "de-f", parts[0])
        g = "de-f"
        for x in parts:
            if x == "Frau:":
                g = "de-f"
            elif x == "Mann:":
                g = "de-m"
            elif len(parts) > 1:
                add("d-exam", g, x)
    for c in ex["sprechen3"]:
        add("d-exam", "de-f", c["ej"])
    for q, a in ex["ex2"].values():
        add("d-exam", "de-f", q + " " + a)
    add("d-exam", "de-m", ex["selbst"])
    for l in "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß":
        add("d-exam", "de-f", l)
    co = DE["coach"]
    for k in ("hello", "done", "level"):
        for de, _ in co[k]:
            add("d-coach", "de-f", de)
    for k in ("right", "wrong"):
        for de in co[k]:
            add("d-coach", "de-f", de)
    return groups


def cache_path(c) -> pathlib.Path:
    h = hashlib.sha1(f'{c["voice"]}|{c["rate"]}|{c["pitch"]}|{c["text"]}'.encode("utf-8")).hexdigest()[:20]
    return CACHE / (h + ".mp3")


async def synth_all(clips):
    todo = [c for c in clips if not cache_path(c).exists()]
    print(f"{len(clips)} clips, {len(todo)} por generar", flush=True)
    sem = asyncio.Semaphore(6)
    done = 0

    async def one(c):
        nonlocal done
        p = cache_path(c)
        async with sem:
            for attempt in range(4):
                try:
                    tmp = p.with_suffix(".part")
                    await edge_tts.Communicate(c["text"], c["voice"], rate=c["rate"], pitch=c["pitch"]).save(str(tmp))
                    if tmp.stat().st_size < 500:
                        raise RuntimeError("audio vacío")
                    tmp.replace(p)
                    break
                except Exception as e:  # noqa: BLE001
                    if attempt == 3:
                        print("FALLÓ", c["key"], e, flush=True)
                    await asyncio.sleep(1.5 * (attempt + 1))
        done += 1
        if done % 100 == 0:
            print(f"  {done}/{len(todo)}", flush=True)

    await asyncio.gather(*(one(c) for c in todo))


BR2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0]
BR1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0]
SR = {3: (44100, 48000, 32000), 2: (22050, 24000, 16000), 0: (11025, 12000, 8000)}


def frames(data: bytes):
    """Devuelve (bytes_de_frames, duración_s) de un MP3, sin cabeceras ID3/Xing."""
    i = 0
    if data[:3] == b"ID3":
        i = 10 + ((data[6] & 127) << 21 | (data[7] & 127) << 14 | (data[8] & 127) << 7 | (data[9] & 127))
    out, dur = bytearray(), 0.0
    while i + 4 <= len(data):
        b1, b2 = data[i + 1], data[i + 2]
        if data[i] != 0xFF or (b1 & 0xE0) != 0xE0:
            i += 1
            continue
        ver, layer, bri, sri, pad = (b1 >> 3) & 3, (b1 >> 1) & 3, (b2 >> 4) & 15, (b2 >> 2) & 3, (b2 >> 1) & 1
        if layer != 1 or ver == 1 or sri == 3 or bri in (0, 15):
            i += 1
            continue
        sr = SR[ver][sri]
        if ver == 3:
            ln, spf = 144 * BR1[bri] * 1000 // sr + pad, 1152
        else:
            ln, spf = 72 * BR2[bri] * 1000 // sr + pad, 576
        fr = data[i:i + ln]
        if len(fr) < ln:
            break
        if b"Xing" not in fr[:48] and b"Info" not in fr[:48]:
            out += fr
            dur += spf / sr
        i += ln
    return bytes(out), dur


def silence() -> bytes:
    p = CACHE / "_silence.mp3"
    if not p.exists():
        subprocess.run([str(FFMPEG), "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "0.25",
                        "-c:a", "libmp3lame", "-b:a", "48k", "-write_xing", "0", "-id3v2_version", "0", str(p)], check=True)
    return frames(p.read_bytes())


def build_sprites(groups):
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("*.mp3"):
        old.unlink()
    gap, gap_d = silence()
    files, clips_idx, total = [], {}, 0
    for g, clips in groups.items():
        buf, t = bytearray(gap), gap_d
        for c in clips:
            p = cache_path(c)
            if not p.exists():
                continue
            fr, d = frames(p.read_bytes())
            if not fr:
                continue
            clips_idx[c["key"]] = [len(files), round(t, 3), round(d, 3)]
            buf += fr + gap
            t += d + gap_d
        (OUT / (g + ".mp3")).write_bytes(buf)
        files.append("audio/" + g + ".mp3")
        total += len(buf)
    (OUT / "manifest.json").write_text(json.dumps({"f": files, "c": clips_idx}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{len(files)} paquetes, {len(clips_idx)} clips, {total // 1024} KB en total")


def main():
    ES, DE = load_data()
    groups = collect(ES, DE)
    allc = [c for cl in groups.values() for c in cl]
    if "--dry" in sys.argv:
        print(len(groups), "grupos,", len(allc), "clips")
        for g, cl in groups.items():
            print(" ", g, len(cl))
        return
    CACHE.mkdir(exist_ok=True)
    asyncio.run(synth_all(allc))
    build_sprites(groups)


if __name__ == "__main__":
    main()
