import json

files = [
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\zh.json",
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\en.json",
    "c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\lo.json"
]

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    lang = path.split("\\")[-1].split(".")[0]
    
    if lang == "zh":
        data["guide"] = {
            "label": "游览指南",
            "heading": "游玩建议",
            "lead": "为在昭阿奴翁公园轻松度过傍晚而准备的实用建议。",
            "hours": {
                "tag": "⏰ 时间",
                "time": "全天开放",
                "items": [
                    { "label": "最佳时段", "value": "17:30 - 18:30" },
                    { "label": "夜市时间", "value": "18:00 - 22:00" }
                ]
            },
            "fees": {
                "tag": "🎟️ 费用",
                "title": "免费入场",
                "items": [
                    { "title": "门票", "desc": "完全免费的公共空间" }
                ],
                "note": "公共洗手间收费约 2,000-3,000 基普"
            },
            "transport": {
                "tag": "🚲 交通",
                "title": "前往公园",
                "items": [
                    { "title": "步行", "desc": "市中心步行10-15分钟" },
                    { "title": "嘟嘟车 (Tuk-tuk)", "desc": "告诉司机去湄公河夜市" },
                    { "title": "自行车", "desc": "沿着河边骑行非常惬意" }
                ]
            },
            "hazeSeason": {
                "tag": "🌫️ 烟霾季节提醒",
                "text": "2月至4月旱季末期可能会有农业焚烧导致的烟霾，影响日落视野。"
            },
            "faqTitle": "常见问题",
            "faqs": [
                { "q": "公园安全吗？", "a": "非常安全，晚上有大量本地市民和游客散步。" }
            ]
        }
    elif lang == "en":
        data["guide"] = {
            "label": "Visitor Guide",
            "heading": "Visit Tips",
            "lead": "Straightforward, useful advice for a relaxed evening at Chao Anouvong Park.",
            "hours": {
                "tag": "⏰ Hours",
                "time": "Open 24 hours",
                "items": [
                    { "label": "Best time", "value": "17:30 - 18:30" },
                    { "label": "Night market", "value": "18:00 - 22:00" }
                ]
            },
            "fees": {
                "tag": "🎟️ Fees",
                "title": "Free Entry",
                "items": [
                    { "title": "Admission", "desc": "Completely free public space" }
                ],
                "note": "Public restrooms cost around 2,000-3,000 Kip"
            },
            "transport": {
                "tag": "🚲 Transport",
                "title": "Getting there",
                "items": [
                    { "title": "Walking", "desc": "10-15 mins walk from city center" },
                    { "title": "Tuk-tuk", "desc": "Tell the driver to go to the Mekong night market" },
                    { "title": "Bicycle", "desc": "Cycling along the river is very pleasant" }
                ]
            },
            "hazeSeason": {
                "tag": "🌫️ Haze Season",
                "text": "Late dry season (Feb to April) may have agricultural burning haze, affecting sunset views."
            },
            "faqTitle": "FAQ",
            "faqs": [
                { "q": "Is the park safe?", "a": "Very safe, with many locals and tourists walking around at night." }
            ]
        }
    elif lang == "lo":
        data["guide"] = {
            "label": "ຄູ່ມືທ່ອງທ່ຽວ",
            "heading": "ຄຳແນະນຳການທ່ອງທ່ຽວ",
            "lead": "ຄຳແນະນຳທີ່ເປັນປະໂຫຍດສຳລັບການພັກຜ່ອນຕອນແລງທີ່ສວນເຈົ້າອະນຸວົງ.",
            "hours": {
                "tag": "⏰ ເວລາເປີດ",
                "time": "ເປີດ 24 ຊົ່ວໂມງ",
                "items": [
                    { "label": "ເວລາທີ່ດີທີ່ສຸດ", "value": "17:30 - 18:30" },
                    { "label": "ຕະຫຼາດກາງຄືນ", "value": "18:00 - 22:00" }
                ]
            },
            "fees": {
                "tag": "🎟️ ຄ່າທຳນຽມ",
                "title": "ເຂົ້າຊົມຟຣີ",
                "items": [
                    { "title": "ຄ່າເຂົ້າ", "desc": "ພື້ນທີ່ສາທາລະນະຟຣີທັງໝົດ" }
                ],
                "note": "ຫ້ອງນ້ຳສາທາລະນະປະມານ 2,000-3,000 ກີບ"
            },
            "transport": {
                "tag": "🚲 ການເດີນທາງ",
                "title": "ວິທີໄປ",
                "items": [
                    { "title": "ຍ່າງ", "desc": "ຍ່າງ 10-15 ນາທີຈາກໃຈກາງເມືອງ" },
                    { "title": "ລົດຕຸກຕຸກ", "desc": "ບອກຄົນຂັບໃຫ້ໄປຕະຫຼາດກາງຄືນແຄມຂອງ" },
                    { "title": "ລົດຖີບ", "desc": "ຂີ່ລົດຖີບລຽບແຄມແມ່ນ້ຳມ່ວນຫຼາຍ" }
                ]
            },
            "hazeSeason": {
                "tag": "🌫️ ລະດູໝອກຄວັນ",
                "text": "ທ້າຍລະດູແລ້ງ (ກຸມພາ ຫາ ເມສາ) ອາດມີໝອກຄວັນຈາກການຈູດກະສິກຳ, ກະທົບຕໍ່ການຊົມຕາເວັນຕົກດິນ."
            },
            "faqTitle": "ຄຳຖາມທີ່ພົບເລື້ອຍ",
            "faqs": [
                { "q": "ສວນປອດໄພບໍ່?", "a": "ປອດໄພຫຼາຍ, ມີຄົນທ້ອງຖິ່ນ ແລະ ນັກທ່ອງທ່ຽວຫຼາຍໃນຕອນກາງຄືນ." }
            ]
        }
    
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Fixed guide section")