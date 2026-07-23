import json

files = [
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\zh.json",
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\en.json",
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\lo.json"
]

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Truncate alts to 13 items
    if "gallery" in data and "alts" in data["gallery"]:
        data["gallery"]["alts"] = data["gallery"]["alts"][:13]
    
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Truncated gallery alts to 13")