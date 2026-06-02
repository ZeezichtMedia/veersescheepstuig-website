#!/usr/bin/env python3
"""
Importeert Coria-oefenbestanden (HTML) in de website.

Gebruik:
    python3 scripts/import-coria.py <pad-naar-zip-of-map>

- Leest alle .html-bestanden uit een zip of map.
- Kopieert ze met nette, URL-veilige namen naar public/coria/.
- Genereert src/data/coriaSongs.json met {num, title, file} per lied.

De ledenportaal-pagina leest die JSON en toont de doorzoekbare lijst.
Voeg later een lied toe door het HTML-bestand bij te leveren en dit
script opnieuw te draaien met de volledige set.
"""
import sys
import os
import re
import json
import shutil
import zipfile
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(ROOT, "public", "coria")
DATA_FILE = os.path.join(ROOT, "src", "data", "coriaSongs.json")


def fix_encoding(name: str) -> str:
    """Repareer zip-namen die als cp437 i.p.v. utf-8 zijn gelezen."""
    try:
        return name.encode("cp437").decode("utf-8")
    except (UnicodeEncodeError, UnicodeDecodeError):
        return name


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return re.sub(r"-+", "-", text).strip("-")


def parse(filename: str):
    base = filename[:-5] if filename.lower().endswith(".html") else filename
    m = re.match(r"^(\d+)[.\s]+(.*)$", base)
    if m:
        num = int(m.group(1))
        title = m.group(2)
    else:
        num = None
        title = base
    title = re.sub(r"\s+", " ", title).strip(" .")
    return num, title


def read_sources(path: str):
    """Geef lijst van (originele_naam, bytes) voor elk html-bestand."""
    items = []
    if os.path.isdir(path):
        for root, _dirs, files in os.walk(path):
            for fn in files:
                if fn.lower().endswith(".html"):
                    with open(os.path.join(root, fn), "rb") as f:
                        items.append((fn, f.read()))
    elif zipfile.is_zipfile(path):
        zf = zipfile.ZipFile(path)
        for info in zf.infolist():
            if info.filename.lower().endswith(".html"):
                name = fix_encoding(os.path.basename(info.filename))
                items.append((name, zf.read(info)))
    else:
        raise SystemExit(f"Geen zip of map: {path}")
    return items


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Gebruik: python3 scripts/import-coria.py <zip-of-map>")
    src = sys.argv[1]
    items = read_sources(src)
    if not items:
        raise SystemExit("Geen HTML-bestanden gevonden.")

    rows = []
    for name, data in items:
        num, title = parse(name)
        rows.append({"num": num, "title": title, "_data": data})

    rows.sort(key=lambda r: (r["num"] is None, r["num"] or 0, r["title"].lower()))

    seen = {}
    for r in rows:
        base = (f"{r['num']:03d}-" if r["num"] is not None else "") + slugify(r["title"])
        slug = base or "lied"
        if slug in seen:
            seen[slug] += 1
            slug = f"{slug}-{seen[slug]}"
        else:
            seen[slug] = 1
        r["file"] = slug + ".html"

    # Schone doelmap
    if os.path.isdir(PUBLIC_DIR):
        shutil.rmtree(PUBLIC_DIR)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

    for r in rows:
        with open(os.path.join(PUBLIC_DIR, r["file"]), "wb") as f:
            f.write(r["_data"])

    out = [{"num": r["num"], "title": r["title"], "file": r["file"]} for r in rows]
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)

    print(f"{len(rows)} bestanden gekopieerd naar public/coria/")
    print(f"Lijst geschreven naar src/data/coriaSongs.json")


if __name__ == "__main__":
    main()
