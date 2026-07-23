import json

files = [
    ("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\zh.json", {
        "privacy": {
            "title": "隐私政策",
            "updated": "最后更新：2026年7月",
            "sections": [
                { "h": "1. 信息收集", "p": "本站为静态网站，不主动收集个人身份信息。" },
                { "h": "2. Cookie 与分析", "p": "我们可能使用第三方匿名分析工具来了解页面访问情况。这些工具会使用 Cookie。" },
                { "h": "3. 外部链接", "p": "本站包含指向第三方网站（如 Google Maps）的链接。我们对其隐私政策不负责。" }
            ]
        },
        "terms": {
            "title": "服务条款",
            "updated": "最后更新：2026年7月",
            "sections": [
                { "h": "1. 接受条款", "p": "访问本站即表示您同意这些条款。" },
                { "h": "2. 信息免责", "p": "本站信息仅供参考。由于公园状况或政策变动，我们不保证所有信息的绝对准确。" },
                { "h": "3. 知识产权", "p": "除另有说明，本站内容受版权保护。仅限非商业性参考使用。" }
            ]
        },
        "cookies": {
            "title": "Cookie 设置",
            "updated": "最后更新：2026年7月",
            "sections": [
                { "h": "管理您的偏好", "p": "您可以在浏览器设置中禁用或清除 Cookie。由于本站不强制要求登录，禁用 Cookie 不会影响您阅读指南。" }
            ]
        }
    }),
    ("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\en.json", {
        "privacy": {
            "title": "Privacy Policy",
            "updated": "Last updated: July 2026",
            "sections": [
                { "h": "1. Information Collection", "p": "This is a static site and does not actively collect personally identifiable information." },
                { "h": "2. Cookies & Analytics", "p": "We may use third-party anonymous analytics to understand site usage. These tools use cookies." },
                { "h": "3. External Links", "p": "This site contains links to third-party websites (like Google Maps). We are not responsible for their privacy policies." }
            ]
        },
        "terms": {
            "title": "Terms of Service",
            "updated": "Last updated: July 2026",
            "sections": [
                { "h": "1. Acceptance of Terms", "p": "By accessing this site, you agree to these terms." },
                { "h": "2. Disclaimer", "p": "Information is for reference only. We do not guarantee absolute accuracy due to changes in park conditions." },
                { "h": "3. Intellectual Property", "p": "Unless otherwise stated, content is copyrighted for non-commercial reference only." }
            ]
        },
        "cookies": {
            "title": "Cookie Settings",
            "updated": "Last updated: July 2026",
            "sections": [
                { "h": "Manage Preferences", "p": "You can disable cookies in your browser settings. Disabling cookies will not affect your ability to read the guide." }
            ]
        }
    }),
    ("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\lo.json", {
        "privacy": {
            "title": "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
            "updated": "ອັບເດດຫຼ້າສຸດ: ກໍລະກົດ 2026",
            "sections": [
                { "h": "1. ການເກັບກຳຂໍ້ມູນ", "p": "ນີ້ແມ່ນເວັບໄຊທ໌ສະຖິດ ແລະ ບໍ່ໄດ້ເກັບກຳຂໍ້ມູນສ່ວນຕົວຂອງທ່ານ." },
                { "h": "2. ຄຸກກີ້ ແລະ ການວິເຄາະ", "p": "ພວກເຮົາອາດຈະໃຊ້ເຄື່ອງມືວິເຄາະແບບບໍ່ລະບຸຊື່ເພື່ອເຂົ້າໃຈການນຳໃຊ້ເວັບໄຊທ໌. ເຄື່ອງມືເຫຼົ່ານີ້ໃຊ້ຄຸກກີ້." },
                { "h": "3. ລິ້ງພາຍນອກ", "p": "ເວັບໄຊທ໌ນີ້ມີລິ້ງໄປຫາເວັບໄຊທ໌ພາກສ່ວນທີສາມ (ເຊັ່ນ Google Maps). ພວກເຮົາບໍ່ຮັບຜິດຊອບຕໍ່ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງພວກເຂົາ." }
            ]
        },
        "terms": {
            "title": "ເງື່ອນໄຂການໃຫ້ບໍລິການ",
            "updated": "ອັບເດດຫຼ້າສຸດ: ກໍລະກົດ 2026",
            "sections": [
                { "h": "1. ການຍອມຮັບເງື່ອນໄຂ", "p": "ການເຂົ້າເຖິງເວັບໄຊທ໌ນີ້ໝາຍຄວາມວ່າທ່ານຍອມຮັບເງື່ອນໄຂເຫຼົ່ານີ້." },
                { "h": "2. ການປະຕິເສດຄວາມຮັບຜິດຊອບ", "p": "ຂໍ້ມູນແມ່ນສຳລັບການອ້າງອີງເທົ່ານັ້ນ. ພວກເຮົາບໍ່ຮັບປະກັນຄວາມຖືກຕ້ອງທັງໝົດເນື່ອງຈາກການປ່ຽນແປງຂອງສວນ." },
                { "h": "3. ຊັບສິນທາງປັນຍາ", "p": "ເວັ້ນເສຍແຕ່ຈະລະບຸໄວ້ເປັນຢ່າງອື່ນ, ເນື້ອຫາມີລິຂະສິດສຳລັບການອ້າງອີງທີ່ບໍ່ແມ່ນການຄ້າເທົ່ານັ້ນ." }
            ]
        },
        "cookies": {
            "title": "ການຕັ້ງຄ່າຄຸກກີ້",
            "updated": "ອັບເດດຫຼ້າສຸດ: ກໍລະກົດ 2026",
            "sections": [
                { "h": "ຈັດການການຕັ້ງຄ່າ", "p": "ທ່ານສາມາດປິດຄຸກກີ້ໃນການຕັ້ງຄ່າບຣາວເຊີຂອງທ່ານ. ການປິດຄຸກກີ້ຈະບໍ່ມີຜົນຕໍ່ການອ່ານຄູ່ມື." }
            ]
        }
    })
]

for path, legal in files:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    data["legal"] = legal
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Added legal sections")
