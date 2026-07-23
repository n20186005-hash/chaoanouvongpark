import json
import os

zh = {
  "meta": {
    "title": "昭阿奴翁公园（Chao Anouvong Park）— 万象湄公河畔的城市公园，老挝",
    "description": "一份独立、非营利的昭阿奴翁公园游览指南：国王雕像、湄公河日落、夜市与河畔步道——开放时间、位置与最佳游览季节。"
  },
  "header": {
    "home": "首页",
    "about": "关于",
    "history": "历史",
    "guide": "游览指南",
    "food": "附近美食",
    "gallery": "相册",
    "reviews": "评价",
    "map": "地图"
  },
  "hero": {
    "eyebrow": "万象 · 老挝",
    "titleMain": "昭阿奴翁公园",
    "titleAccent": "昭阿奴翁公园",
    "subtitle": "探索老挝万象的心脏地带——国王雕像面朝湄公河，河畔步道与壮丽的落日余晖交相辉映。",
    "slogan": "凝视历史的长河，在湄公河畔感受万象的脉搏。",
    "cta1": "规划行程",
    "cta2": "如何到达",
    "rating": "4.2",
    "reviewCount": "6,873",
    "viewLocation": "在 Google 地图上查看",
    "boardCategory": "万象景点",
    "boardTitle": "昭阿奴翁公园",
    "boardEn": "Chao Anouvong Park",
    "coordsLabel": "17.9616°N, 102.6073°E · 万象市中心",
    "plannerTitle": "日照与天色规划",
    "liveWeather": "实时",
    "plannerNote": "时间为按公园坐标估算",
    "defaultTemp": "31°",
    "defaultCond": "局部多云",
    "defaultWind": "8 公里/时",
    "sunsetIndexLabel": "今夜天色",
    "sunsetIndexDefault": "柔和日落",
    "goldenHourLabel": "黄金时刻",
    "sunsetLabel": "日落",
    "blueHourLabel": "蓝调时刻",
    "crowdWarningLabel": "人流",
    "defaultGolden": "17:35 – 18:05",
    "defaultSunset": "18:25",
    "defaultBlue": "18:45 – 19:15",
    "defaultTip": "清晨最清静",
    "lightCaption": "来自 Open-Meteo 的公园坐标实时数据",
    "weatherError": "无法加载天气",
    "goldenChanceLabel": "黄金光线概率"
  },
  "about": {
    "label": "关于公园",
    "heading": "湄公河畔的城市绿洲",
    "lead": "昭阿奴翁公园位于万象市中心，沿着湄公河岸延伸，是这座城市最受欢迎的公共空间之一。",
    "paragraph1": "公园以老挝历史上著名的昭阿奴翁国王（King Anouvong）命名。他的青铜雕像高高矗立，一手持剑，一手指向湄公河对岸的泰国，象征着老挝人民的独立与尊严。",
    "paragraph2": "白天，这里是绿意盎然的散步长廊；傍晚，当湄公河的日落将天空染成金色，公园便化身为充满活力的夜市和市民休闲的中心。",
    "quote": "在这里，你能看到万象最真实的市井生活与最美的夕阳。",
    "quoteAuthor": "一位旅行者",
    "stats": [
      { "value": "2010", "label": "公园落成" },
      { "value": "14公顷", "label": "占地面积" },
      { "value": "24小时", "label": "开放时间" }
    ],
    "highlights": [
      { "tag": "👑", "title": "国王雕像", "desc": "昭阿奴翁国王青铜雕像，高大威武，是万象的标志性地标之一。" },
      { "tag": "🌅", "title": "湄公河日落", "desc": "沿着河畔步道漫步，欣赏落日余晖洒在宽阔的湄公河面上。" },
      { "tag": "🎪", "title": "万象夜市", "desc": "夜幕降临，公园旁的红顶帐篷连成一片，万象最大的夜市在此展开。" }
    ],
    "editorTip": {
      "tag": "编辑建议",
      "text": "傍晚 17:30 左右抵达，先看日落，然后逛夜市品尝小吃。",
      "ctaLabel": "查看完整指南"
    }
  },
  "eco": {
    "label": "河畔与自然",
    "heading": "感受湄公河的呼吸",
    "quote": "一条流淌不息的母亲河——见证着这座城市的日落与黎明。",
    "intro": "昭阿奴翁公园沿着湄公河修筑，不仅是城市的防洪堤，更是市民亲近自然的绿地。清晨的微风与傍晚的凉意，让这里成为躲避热带酷暑的理想之地。",
    "microTitle": "气候与河流",
    "micro": [
      { "title": "凉爽的傍晚", "desc": "日落后河风吹拂，非常适合散步或慢跑。" },
      { "title": "宽阔的河岸", "desc": "旱季时水位下降，大片沙洲露出水面；雨季时河水丰沛。" },
      { "title": "绿树成荫", "desc": "公园内种植了大量热带树木，为白天提供阴凉。" }
    ],
    "plantsTitle": "园中植物",
    "plants": [
      {
        "title": "鸡蛋花（Plumeria）",
        "desc": "老挝的国花（占芭花），在公园里随处可见。",
        "items": [
          { "name": "白黄相间", "desc": "散发着淡雅的清香" }
        ]
      },
      {
        "title": "热带棕榈与草坪",
        "desc": "精心维护的绿地，是家庭野餐的好去处。",
        "items": [
          { "name": "遮荫树木", "desc": "为烈日下的游人提供庇护" }
        ]
      }
    ],
    "wildlifeTitle": "你可能看到的景象",
    "wildlife": [
      "傍晚归巢的飞鸟",
      "在草坪上嬉戏的孩童",
      "跳有氧操的当地居民",
      "在河畔吹风的旅行者"
    ],
    "lntTitle": "无痕游览",
    "lntIntro": "帮助保持公园洁净，尊重当地社区的生活方式。",
    "lnt": [
      "夜市小吃包装请投入垃圾桶",
      "尊重国王雕像的庄严",
      "不要将垃圾扔进湄公河",
      "爱护公园内的花草树木"
    ],
    "lntCheckHint": "边走边勾选——小小的举动让城市公园保持美丽",
    "checklist": {
      "title": "游览亮点",
      "intro": "一天中不同时刻的景致",
      "items": [
        { "emoji": "🌅", "name": "壮丽日落", "best": "傍晚 17:30-18:30", "rare": "晴天可见", "rareClass": "" },
        { "emoji": "🏃", "name": "市民晨练", "best": "清晨 06:00", "rare": "充满生活气息", "rareClass": "" },
        { "emoji": "🛍️", "name": "热闹夜市", "best": "18:00 之后", "rare": "每日皆有", "rareClass": "" }
      ]
    }
  },
  "history": {
    "label": "历史与文化",
    "heading": "昭阿奴翁国王的凝视",
    "intro": "公园的名字与中心雕像，承载着老挝人民对独立与尊严的深刻记忆。",
    "blocks": [
      {
        "title": "谁是昭阿奴翁？",
        "text": "昭阿奴翁（Chao Anouvong，1767–1829）是万象王国的最后一位国王。他在 19 世纪初曾试图反抗暹罗（泰国）的统治，争取老挝的独立。尽管最终失败，但他被老挝人民视为民族英雄。"
      },
      {
        "title": "雕像的象征意义",
        "text": "在公园中央，国王的青铜雕像高达 8 米，加上基座总高 14 米。他身披战袍，一手握着剑，另一只手坚定地指向对岸的泰国，象征着捍卫领土的决心。"
      },
      {
        "title": "建园背景",
        "text": "该公园于 2010 年为纪念万象建城 450 周年而落成。它不仅美化了湄公河畔，也成为进行国家庆典和节假日集会的重要场所。"
      },
      {
        "title": "今日的河畔",
        "text": "历史的硝烟早已散去，如今的昭阿奴翁公园是和平与繁荣的象征。人们在这里散步、锻炼、享受美食，历史的厚重与现代的宁静在这里完美交融。"
      }
    ],
    "legend": {
      "title": "民族英雄的记忆",
      "text": "在老挝的历史叙事中，昭阿奴翁是勇气的代名词。雕像前常有当地人敬献鲜花和香烛，表达对这位国王的崇敬与缅怀。"
    },
    "didYouKnow": {
      "title": "你知道吗？",
      "text": "这座雕像是老挝境内最大的青铜雕像之一。在特定的节日里，这里会举行隆重的祭祀和纪念活动，国王的雕像下会被鲜花簇拥。"
    },
    "folklore": {
      "title": "河畔的生活",
      "tale": "对于万象市民来说，湄公河不仅是自然边界，也是生活的中心。夜晚的河风带走白天的酷热，人们在这里聚集，延续着世代相传的河畔生活方式。",
      "shrineTitle": "关于尊重的提醒",
      "shrine": "在国王雕像附近，请保持适当的尊重，不要做出不雅的手势或攀爬基座。"
    },
    "compare": {
      "caption": "拖动滑块，对比白天的静谧与夜晚的繁华",
      "beforeLabel": "白天的公园",
      "afterLabel": "夜市的喧嚣"
    },
    "concrete": {
      "title": "现代景观与历史底蕴",
      "text": "公园的设计兼顾了现代城市规划与历史纪念。开阔的广场、整洁的步道与宏伟的雕像相得益彰，为万象市中心提供了一片难得的开阔视野。"
    },
    "sisterQuote": {
      "title": "一河两国的对话",
      "text": "站在公园里，隔着宽阔的湄公河，对岸就是泰国的廊开府。夜晚，两岸的灯火交相辉映，诉说着这条大河孕育的悠久文明。"
    }
  },
  "food": {
    "label": "美食与饮品",
    "heading": "夜市与街头美味",
    "lead": "随着夕阳西下，公园旁著名的万象夜市和无数小吃摊便开始苏醒。",
    "dishes": [
      { "tag": "🍹", "name": "鲜榨果汁与冰沙", "price": "约 15,000 基普", "desc": "新鲜的芒果、火龙果冰沙，解暑佳品。" },
      { "tag": "🍡", "name": "老挝烤肉串", "price": "约 10,000 基普", "desc": "炭火烤制的肉串，香气四溢。" },
      { "tag": "🥗", "name": "青木瓜沙拉", "price": "约 20,000 基普", "desc": "酸辣爽口的经典老挝开胃菜。" },
      { "tag": "🥞", "name": "香蕉煎饼", "price": "约 15,000 基普", "desc": "淋上炼乳的香甜薄饼，深受游客喜爱。" }
    ],
    "quote": {
      "text": "逛完夜市，买一份小吃坐在河边的台阶上吹风，这就是万象的夜晚。",
      "author": "一位常客"
    }
  },
  "gallery": {
    "label": "相册",
    "heading": "公园中的片刻",
    "intro": "公园里的一天——从清晨的宁静到傍晚的绚烂日落。",
    "historicalNote": "图片为公园氛围示意，会随时间与天气而变化。",
    "credits": "图片为示意与参考，非商业用途。",
    "alts": [
      "雄伟的昭阿奴翁国王青铜雕像",
      "湄公河畔绚丽的日落余晖",
      "夜晚红顶连绵的万象夜市",
      "在公园步道上散步的游人",
      "河岸边绿树成荫的草坪",
      "国王雕像特写",
      "傍晚在广场上跳有氧操的人群",
      "对岸泰国的灯火",
      "夜市里的老挝特色小吃摊",
      "盛开的占芭花",
      "公园里的休闲长椅",
      "早晨宁静的湄公河面",
      "游客在雕像前拍照留念",
      "沿河的景观大道",
      "充满生活气息的万象街头",
      "夜幕降临后的公园夜景"
    ],
    "viewLocation": "在 Google 地图上查看"
  },
  "reviews": {
    "label": "评价",
    "heading": "游客怎么说",
    "intro": "近期游客印象一瞥（摘自公开旅行评价）。",
    "disclaimer": "基于公开评价 · 非官方背书",
    "declaration": "评价整理自独立旅行平台，仅供参考",
    "featured": [
      { "text": "国王雕像很壮观，湄公河的日落绝对不容错过！", "source": "★ 5.0 · 旅客评价" },
      { "text": "非常适合晚上来散步，旁边的夜市很好逛，小吃也很多。", "source": "★ 5.0 · 游客留言" }
    ],
    "items": [
      { "text": "[必看：湄公河日落] 视野非常开阔，夕阳很美。", "rating": "5", "name": "Ana", "date": "2026 年 3 月" },
      { "text": "[国王雕像] 很有历史意义的地标，值得一看。", "rating": "5", "name": "Tom", "date": "2026 年 2 月" },
      { "text": "[夜市购物] 旁边的夜市很热闹，可以买到很多纪念品。", "rating": "4", "name": "Lina", "date": "2026 年 1 月" },
      { "text": "[休闲散步] 河风吹着很舒服，本地人很多。", "rating": "4", "name": "Wei", "date": "2026 年 2 月" },
      { "text": "[运动] 晚上有很多人在跳广场舞，很有活力。", "rating": "5", "name": "Ken", "date": "2025 年 12 月" },
      { "text": "[位置] 就在市中心，交通非常方便。", "rating": "5", "name": "Sora", "date": "2026 年 1 月" },
      { "text": "[美食] 夜市的小吃便宜又好吃。", "rating": "4", "name": "Pim", "date": "2026 年 3 月" },
      { "text": "[环境] 公园很干净，绿化做得很好。", "rating": "4", "name": "Dan", "date": "2026 年 2 月" }
    ],
    "viewLocation": "在 Google 地图上查看"
  },
  "sources": {
    "label": "来源",
    "heading": "我们的参考",
    "intro": "这份非营利的指南整合公开信息，帮助游客负责任地规划行程。",
    "photoTitle": "图片来源",
    "photoItems": [
      { "text": "所示场景为昭阿奴翁公园氛围示意", "linkLabel": "查看位置", "url": "https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA" }
    ],
    "factTitle": "事实与数据",
    "factText": "评分、开放时间与坐标整理自公开来源，可能变动——出行前请在现场核实。",
    "correctionTitle": "发现错误？",
    "correctionText": "我们是一个小型非营利团队。若有任何错误或过时信息，请告知，我们会修正。",
    "correctionMailto": "mailto:n20186005@gmail.com",
    "correctionCta": "给我们发邮件",
    "copyright": "昭阿奴翁公园指南 · 非营利游览资源"
  },
  "mapSection": {
    "label": "位置与地图",
    "heading": "找到昭阿奴翁公园",
    "lead": "位于万象市中心，沿着湄公河畔，是城市最显眼的地标之一。",
    "stats": [
      { "tag": "评分", "value": "4.2 ★", "sub": "来自 6,873 条评价" },
      { "tag": "开放", "value": "24小时", "sub": "全天开放" },
      { "tag": "区域", "value": "市中心", "sub": "万象，老挝" }
    ],
    "address": "Vientiane 01600 老挝",
    "plusCode": "Plus Code XJ64+JW 万象",
    "coords": "17.9616°N, 102.6073°E",
    "iframeTitle": "Google Maps：昭阿奴翁公园，万象，老挝"
  },
  "footer": {
    "brand": {
      "name": "昭阿奴翁公园",
      "tagline": "Chao Anouvong Park · 万象"
    },
    "about": "一份免费、非营利的昭阿奴翁公园游览指南——历史、日落，以及如何在这里度过一个悠闲的傍晚。",
    "navTitle": "探索",
    "navItems": [
      { "label": "关于", "href": "#about" },
      { "label": "历史", "href": "#history" },
      { "label": "游览指南", "href": "#guide" },
      { "label": "附近美食", "href": "#food" },
      { "label": "相册", "href": "#gallery" },
      { "label": "评价", "href": "#reviews" },
      { "label": "地图", "href": "#map" }
    ],
    "noteTitle": "须知",
    "note": "我们与园内任何摊贩无关联。信息可能变动——请在现场核实。",
    "mapsLabel": "Google Maps →",
    "sourcesTitle": "参考",
    "sourcesNote": "本指南链接公开来源以供核实。",
    "privacy": "隐私政策",
    "terms": "服务条款",
    "cookies": "Cookie 设置",
    "disclaimerLead": "昭阿奴翁公园指南是独立的非营利资源——并非任何机构或商家的官方网站。",
    "unofficial": "并非老挝旅游局或万象市政府的官方网站。",
    "dataSource": "天气数据由 Open-Meteo 提供。",
    "copyright": "© 2026 昭阿奴翁公园指南 · 非营利"
  },
  "guide": {
    "label": "游览指南",
    "heading": "游玩建议",
    "lead": "为在昭阿奴翁公园轻松度过傍晚而准备的实用建议。",
    "transport": {
      "title": "前往公园",
      "intro": "公园位于万象市中心，交通非常便利，步行或骑车皆可到达。",
      "options": [
        { "title": "步行", "desc": "如果你住在市中心（如洋人街区域），步行 10-15 分钟即可抵达公园。" },
        { "title": "嘟嘟车 (Tuk-tuk)", "desc": "在市内任何地方都可以轻松叫到嘟嘟车，告诉司机去湄公河边的夜市或国王雕像即可。" },
        { "title": "自行车/摩托车", "desc": "许多旅馆提供自行车租赁，沿着河边骑行是非常惬意的体验。" }
      ]
    },
    "tips": {
      "title": "实用贴士",
      "items": [
        { "title": "最佳游览时间", "desc": "傍晚 17:30 左右是最佳时机，既能看日落，又能接着逛夜市。" },
        { "title": "防晒与防蚊", "desc": "白天游览请注意防晒，傍晚在河边散步建议喷洒防蚊液。" },
        { "title": "现金准备", "desc": "逛夜市和小吃摊时，请准备足够的小面额基普现金。" }
      ]
    },
    "faq": {
      "title": "常见问题",
      "items": [
        { "q": "公园需要门票吗？", "a": "不需要，昭阿奴翁公园是完全免费的公共空间。" },
        { "q": "夜市几点开始？", "a": "夜市通常在每天傍晚 18:00 左右开始营业，一直持续到晚上 22:00 左右。" },
        { "q": "公园有洗手间吗？", "a": "公园内及附近有一些收费的公共洗手间（约 2,000-3,000 基普）。" }
      ]
    }
  }
}

en = {
  "meta": {
    "title": "Chao Anouvong Park — riverside city park, Vientiane, Laos",
    "description": "An independent, non-commercial visitor guide to Chao Anouvong Park: King Anouvong statue, Mekong sunset, night market and riverside walk — hours, how to get there, and the best time to visit."
  },
  "header": {
    "home": "Home",
    "about": "About",
    "history": "History",
    "guide": "Visitor guide",
    "food": "Nearby food",
    "gallery": "Gallery",
    "reviews": "Reviews",
    "map": "Map"
  },
  "hero": {
    "eyebrow": "Vientiane · Laos",
    "titleMain": "Chao Anouvong Park",
    "titleAccent": "Chao Anouvong Park",
    "subtitle": "Discover the heart of Vientiane — the King's statue facing the Mekong, riverside promenades, and stunning sunset views.",
    "slogan": "Gaze into history, feel the pulse of Vientiane by the Mekong.",
    "cta1": "Plan your visit",
    "cta2": "Getting there",
    "rating": "4.2",
    "reviewCount": "6,873",
    "viewLocation": "View on Google Maps",
    "boardCategory": "Vientiane attractions",
    "boardTitle": "Chao Anouvong Park",
    "boardEn": "Chao Anouvong Park",
    "coordsLabel": "17.9616°N, 102.6073°E · Vientiane Center",
    "plannerTitle": "Sun & sky planner",
    "liveWeather": "Live",
    "plannerNote": "Times are estimates for the park's location",
    "defaultTemp": "31°",
    "defaultCond": "Partly cloudy",
    "defaultWind": "8 km/h",
    "sunsetIndexLabel": "Tonight's sky",
    "sunsetIndexDefault": "Soft sunset",
    "goldenHourLabel": "Golden hour",
    "sunsetLabel": "Sunset",
    "blueHourLabel": "Blue hour",
    "crowdWarningLabel": "Crowds",
    "defaultGolden": "17:35 – 18:05",
    "defaultSunset": "18:25",
    "defaultBlue": "18:45 – 19:15",
    "defaultTip": "Quietest in the morning",
    "lightCaption": "Live data from Open-Meteo at the park's coordinates",
    "weatherError": "Could not load weather",
    "goldenChanceLabel": "Golden-light chance"
  },
  "about": {
    "label": "About the park",
    "heading": "An urban oasis by the Mekong",
    "lead": "Located in the center of Vientiane, Chao Anouvong Park stretches along the Mekong River and is one of the city's most popular public spaces.",
    "paragraph1": "The park is named after King Anouvong, a famous figure in Lao history. His bronze statue stands tall, holding a sword in one hand and pointing towards Thailand across the Mekong with the other, symbolizing the independence and dignity of the Lao people.",
    "paragraph2": "During the day, it is a lush green promenade; in the evening, as the Mekong sunset turns the sky golden, the park transforms into a vibrant night market and a hub for citizen recreation.",
    "quote": "Here you can see the most authentic street life of Vientiane and the most beautiful sunset.",
    "quoteAuthor": "a regular visitor",
    "stats": [
      { "value": "2010", "label": "Completed" },
      { "value": "14 ha", "label": "Area" },
      { "value": "24 hours", "label": "Open" }
    ],
    "highlights": [
      { "tag": "👑", "title": "King Anouvong Statue", "desc": "The majestic bronze statue of King Anouvong is one of Vientiane's iconic landmarks." },
      { "tag": "🌅", "title": "Mekong Sunset", "desc": "Stroll along the riverside path and watch the sunset glow over the wide Mekong River." },
      { "tag": "🎪", "title": "Vientiane Night Market", "desc": "As night falls, the red-roofed tents next to the park connect into the largest night market in Vientiane." }
    ],
    "editorTip": {
      "tag": "Editor's tip",
      "text": "Arrive around 17:30 to watch the sunset, then explore the night market for street food.",
      "ctaLabel": "See full guide"
    }
  },
  "eco": {
    "label": "Riverbank & nature",
    "heading": "Feel the breath of the Mekong",
    "quote": "A mother river flowing endlessly — witnessing the city's sunsets and dawns.",
    "intro": "Built along the Mekong River, Chao Anouvong Park is not only the city's flood embankment, but also a green space for citizens to get close to nature. The morning breeze and evening coolness make it an ideal place to escape the tropical heat.",
    "microTitle": "Weather & the river",
    "micro": [
      { "title": "Cool evenings", "desc": "The river breeze after sunset is perfect for walking or jogging." },
      { "title": "Wide riverbanks", "desc": "In the dry season, large sandbars emerge; in the wet season, the river is full." },
      { "title": "Shaded by trees", "desc": "The park is planted with tropical trees, providing shade during the day." }
    ],
    "plantsTitle": "Plants in the park",
    "plants": [
      {
        "title": "Frangipani (Plumeria)",
        "desc": "The national flower of Laos (Dok Champa), seen everywhere in the park.",
        "items": [
          { "name": "White and yellow", "desc": "Exuding a light, elegant fragrance" }
        ]
      },
      {
        "title": "Tropical palms & lawns",
        "desc": "Well-maintained green spaces, perfect for family picnics.",
        "items": [
          { "name": "Shade trees", "desc": "Providing shelter for visitors under the hot sun" }
        ]
      }
    ],
    "wildlifeTitle": "What you might see",
    "wildlife": [
      "Birds returning to their nests in the evening",
      "Children playing on the lawns",
      "Locals doing aerobics",
      "Travelers enjoying the river breeze"
    ],
    "lntTitle": "Leave No Trace",
    "lntIntro": "Help keep the park clean and respect the local community's way of life.",
    "lnt": [
      "Put night market food packaging in the bins",
      "Respect the solemnity of the King's statue",
      "Do not throw trash into the Mekong River",
      "Care for the park's plants and trees"
    ],
    "lntCheckHint": "Check off as you go — small actions keep the city park beautiful",
    "checklist": {
      "title": "Highlights by time",
      "intro": "Scenery at different times of the day",
      "items": [
        { "emoji": "🌅", "name": "Stunning sunset", "best": "17:30-18:30", "rare": "Visible on clear days", "rareClass": "" },
        { "emoji": "🏃", "name": "Morning exercise", "best": "Around 06:00", "rare": "Full of local life", "rareClass": "" },
        { "emoji": "🛍️", "name": "Bustling night market", "best": "After 18:00", "rare": "Every evening", "rareClass": "" }
      ]
    }
  },
  "history": {
    "label": "History & Culture",
    "heading": "The Gaze of King Anouvong",
    "intro": "The park's name and its central statue carry the deep memories of the Lao people's independence and dignity.",
    "blocks": [
      {
        "title": "Who was Chao Anouvong?",
        "text": "Chao Anouvong (1767–1829) was the last king of the Kingdom of Vientiane. In the early 19th century, he attempted to rebel against Siamese (Thai) rule and fight for Lao independence. Although he ultimately failed, he is regarded as a national hero by the Lao people."
      },
      {
        "title": "Symbolism of the statue",
        "text": "In the center of the park, the King's bronze statue stands 8 meters tall (14 meters with the base). Wearing a battle cloak, holding a sword in one hand, and pointing firmly towards Thailand across the river with the other, it symbolizes the determination to defend the territory."
      },
      {
        "title": "Background of the park",
        "text": "The park was inaugurated in 2010 to commemorate the 450th anniversary of the founding of Vientiane. It not only beautified the Mekong riverbank but also became an important venue for national celebrations and holiday gatherings."
      },
      {
        "title": "The riverbank today",
        "text": "The smoke of history has long dissipated, and today Chao Anouvong Park is a symbol of peace and prosperity. People walk, exercise, and enjoy food here, perfectly blending the weight of history with modern tranquility."
      }
    ],
    "legend": {
      "title": "Memory of a National Hero",
      "text": "In the Lao historical narrative, Chao Anouvong is synonymous with courage. Locals often offer flowers and incense in front of the statue to express their reverence and remembrance for the King."
    },
    "didYouKnow": {
      "title": "Did you know?",
      "text": "This statue is one of the largest bronze statues in Laos. During specific festivals, grand ceremonies and commemorative events are held here, and the King's statue is surrounded by flowers."
    },
    "folklore": {
      "title": "Riverside Life",
      "tale": "For the citizens of Vientiane, the Mekong River is not only a natural boundary but also the center of life. The night river breeze takes away the heat of the day, and people gather here, continuing the riverside lifestyle passed down for generations.",
      "shrineTitle": "A reminder of respect",
      "shrine": "Please maintain proper respect near the King's statue. Do not make inappropriate gestures or climb the base."
    },
    "compare": {
      "caption": "Drag the slider to compare the quiet day and bustling night",
      "beforeLabel": "Daytime park",
      "afterLabel": "Night market bustle"
    },
    "concrete": {
      "title": "Modern landscape & history",
      "text": "The park's design balances modern urban planning with historical commemoration. The open squares, clean paths, and majestic statues complement each other, providing a rare open view in the center of Vientiane."
    },
    "sisterQuote": {
      "title": "A dialogue across the river",
      "text": "Standing in the park, across the wide Mekong River is Nong Khai Province in Thailand. At night, the lights on both sides shine together, telling the long civilization nurtured by this great river."
    }
  },
  "food": {
    "label": "Food & Drink",
    "heading": "Night market & street food",
    "lead": "As the sun sets, the famous Vientiane Night Market next to the park and countless food stalls begin to awaken.",
    "dishes": [
      { "tag": "🍹", "name": "Fresh juice & smoothies", "price": "~ 15,000 LAK", "desc": "Fresh mango and dragon fruit smoothies, perfect for cooling down." },
      { "tag": "🍡", "name": "Lao BBQ skewers", "price": "~ 10,000 LAK", "desc": "Charcoal-grilled meat skewers, full of aroma." },
      { "tag": "🥗", "name": "Papaya salad", "price": "~ 20,000 LAK", "desc": "The classic Lao appetizer, spicy and refreshing." },
      { "tag": "🥞", "name": "Banana pancake", "price": "~ 15,000 LAK", "desc": "Sweet pancakes drizzled with condensed milk, loved by tourists." }
    ],
    "quote": {
      "text": "After walking the night market, buying a snack and sitting on the riverbank steps to enjoy the breeze—this is the Vientiane night.",
      "author": "a regular visitor"
    }
  },
  "gallery": {
    "label": "Gallery",
    "heading": "Moments in the park",
    "intro": "A day in the park — from morning tranquility to a brilliant sunset.",
    "historicalNote": "Images are illustrative of the park's atmosphere and vary with time and weather.",
    "credits": "Images for reference and non-commercial use.",
    "alts": [
      "The majestic bronze statue of King Chao Anouvong",
      "Brilliant sunset glow over the Mekong River",
      "The red-roofed Vientiane Night Market at night",
      "Visitors walking on the park promenade",
      "Tree-shaded lawns along the riverbank",
      "Close-up of the King's statue",
      "Crowds doing aerobics on the square in the evening",
      "Lights of Thailand across the river",
      "Lao street food stalls in the night market",
      "Blooming Dok Champa flowers",
      "Relaxing benches in the park",
      "Quiet surface of the Mekong River in the morning",
      "Tourists taking photos in front of the statue",
      "Scenic boulevard along the river",
      "Lively Vientiane street scenes",
      "Night view of the park after dark"
    ],
    "viewLocation": "View on Google Maps"
  },
  "reviews": {
    "label": "Reviews",
    "heading": "What visitors say",
    "intro": "A glance at recent visitor impressions (from public travel reviews).",
    "disclaimer": "Based on public reviews · not an official endorsement",
    "declaration": "Reviews compiled from independent travel platforms, for reference only",
    "featured": [
      { "text": "The King's statue is magnificent, and the Mekong sunset is absolutely not to be missed!", "source": "★ 5.0 · Traveler review" },
      { "text": "Great for an evening stroll, the night market next to it is fun with lots of snacks.", "source": "★ 5.0 · Visitor comment" }
    ],
    "items": [
      { "text": "[Must see: Sunset] The view is very open and the sunset is beautiful.", "rating": "5", "name": "Ana", "date": "March 2026" },
      { "text": "[King's Statue] A very historic landmark, worth seeing.", "rating": "5", "name": "Tom", "date": "February 2026" },
      { "text": "[Night Market] The night market next to it is lively, you can buy lots of souvenirs.", "rating": "4", "name": "Lina", "date": "January 2026" },
      { "text": "[Relaxing Walk] The river breeze is very comfortable, lots of locals.", "rating": "4", "name": "Wei", "date": "February 2026" },
      { "text": "[Exercise] Lots of people dancing in the square at night, very energetic.", "rating": "5", "name": "Ken", "date": "December 2025" },
      { "text": "[Location] Right in the city center, very convenient transportation.", "rating": "5", "name": "Sora", "date": "January 2026" },
      { "text": "[Food] Night market snacks are cheap and delicious.", "rating": "4", "name": "Pim", "date": "March 2026" },
      { "text": "[Environment] The park is clean and well-landscaped.", "rating": "4", "name": "Dan", "date": "February 2026" }
    ],
    "viewLocation": "View on Google Maps"
  },
  "sources": {
    "label": "Sources",
    "heading": "Our references",
    "intro": "This non-commercial guide compiles public info to help visitors plan responsibly.",
    "photoTitle": "Photo sources",
    "photoItems": [
      { "text": "Scenes shown are illustrative of Chao Anouvong Park", "linkLabel": "View location", "url": "https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA" }
    ],
    "factTitle": "Facts & figures",
    "factText": "Ratings, hours, and coords compiled from public sources and subject to change — verify locally before visiting.",
    "correctionTitle": "Spotted an error?",
    "correctionText": "We are a small non-commercial team. If you see any errors or outdated info, let us know and we'll fix it.",
    "correctionMailto": "mailto:n20186005@gmail.com",
    "correctionCta": "Email us",
    "copyright": "Chao Anouvong Park guide · non-commercial visitor resource"
  },
  "mapSection": {
    "label": "Location & Map",
    "heading": "Find Chao Anouvong Park",
    "lead": "Located in the center of Vientiane, along the Mekong River, it is one of the city's most prominent landmarks.",
    "stats": [
      { "tag": "Rating", "value": "4.2 ★", "sub": "from 6,873 reviews" },
      { "tag": "Open", "value": "24 hours", "sub": "Open all day" },
      { "tag": "Area", "value": "City Center", "sub": "Vientiane, Laos" }
    ],
    "address": "Vientiane 01600 Laos",
    "plusCode": "Plus Code XJ64+JW Vientiane",
    "coords": "17.9616°N, 102.6073°E",
    "iframeTitle": "Google Maps: Chao Anouvong Park, Vientiane, Laos"
  },
  "footer": {
    "brand": {
      "name": "Chao Anouvong Park",
      "tagline": "Chao Anouvong Park · Vientiane"
    },
    "about": "A free, non-commercial visitor guide to Chao Anouvong Park — history, sunsets, and how to spend a relaxing evening here.",
    "navTitle": "Explore",
    "navItems": [
      { "label": "About", "href": "#about" },
      { "label": "History", "href": "#history" },
      { "label": "Visitor guide", "href": "#guide" },
      { "label": "Nearby food", "href": "#food" },
      { "label": "Gallery", "href": "#gallery" },
      { "label": "Reviews", "href": "#reviews" },
      { "label": "Map", "href": "#map" }
    ],
    "noteTitle": "Please note",
    "note": "We are not affiliated with any vendors in the park. Info may change — verify locally.",
    "mapsLabel": "Google Maps →",
    "sourcesTitle": "References",
    "sourcesNote": "This guide links to public sources for verification.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "cookies": "Cookie Settings",
    "disclaimerLead": "The Chao Anouvong Park guide is an independent, non-commercial resource — not an official site of any agency or business.",
    "unofficial": "Not the official website of Tourism Laos or Vientiane City.",
    "dataSource": "Weather data provided by Open-Meteo.",
    "copyright": "© 2026 Chao Anouvong Park guide · non-commercial"
  },
  "guide": {
    "label": "Visitor Guide",
    "heading": "Visit Tips",
    "lead": "Straightforward, useful advice for a relaxed evening at Chao Anouvong Park.",
    "transport": {
      "title": "Getting there",
      "intro": "The park is centrally located in Vientiane, easily accessible by walking or cycling.",
      "options": [
        { "title": "Walking", "desc": "If you are staying in the city center, it's just a 10-15 minute walk to the park." },
        { "title": "Tuk-tuk", "desc": "Tuk-tuks are easy to hail anywhere in the city. Just tell the driver to go to the Mekong night market or King Anouvong statue." },
        { "title": "Bicycle/Motorbike", "desc": "Many guesthouses offer bike rentals. Cycling along the river is a very pleasant experience." }
      ]
    },
    "tips": {
      "title": "Practical tips",
      "items": [
        { "title": "Best time to visit", "desc": "Around 17:30 is the best time to watch the sunset and then stroll the night market." },
        { "title": "Sun & Mosquitoes", "desc": "Bring sun protection during the day, and mosquito repellent for evening river walks." },
        { "title": "Bring Cash", "desc": "Prepare small denomination Kip cash for the night market and food stalls." }
      ]
    },
    "faq": {
      "title": "FAQ",
      "items": [
        { "q": "Is there an entrance fee?", "a": "No, Chao Anouvong Park is a completely free public space." },
        { "q": "When does the night market open?", "a": "The night market usually starts around 18:00 every evening and lasts until about 22:00." },
        { "q": "Are there restrooms in the park?", "a": "There are some paid public restrooms in and around the park (about 2,000-3,000 Kip)." }
      ]
    }
  }
}

lo = {
  "meta": {
    "title": "ສວນເຈົ້າອະນຸວົງ (Chao Anouvong Park) — ສວນສາທາລະນະແຄມແມ່ນ້ຳຂອງ, ນະຄອນຫຼວງວຽງຈັນ",
    "description": "ຄູ່ມືການທ່ອງທ່ຽວສວນເຈົ້າອະນຸວົງທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລ: ຮູບປັ້ນພະເຈົ້າອະນຸວົງ, ຕາເວັນຕົກດິນແຄມແມ່ນ້ຳຂອງ, ຕະຫຼາດກາງຄືນ ແລະ ທາງຍ່າງແຄມແມ່ນ້ຳ — ເວລາເປີດ, ວິທີການເດີນທາງ ແລະ ເວລາທີ່ເໝາະສົມທີ່ສຸດ."
  },
  "header": {
    "home": "ໜ້າຫຼັກ",
    "about": "ກ່ຽວກັບ",
    "history": "ປະຫວັດສາດ",
    "guide": "ຄູ່ມືທ່ອງທ່ຽວ",
    "food": "ອາຫານໃກ້ຄຽງ",
    "gallery": "ຮູບພາບ",
    "reviews": "ຣີວິວ",
    "map": "ແຜນທີ່"
  },
  "hero": {
    "eyebrow": "ວຽງຈັນ · ລາວ",
    "titleMain": "ສວນເຈົ້າອະນຸວົງ",
    "titleAccent": "ສວນເຈົ້າອະນຸວົງ",
    "subtitle": "ຄົ້ນພົບຈຸດໃຈກາງຂອງນະຄອນຫຼວງວຽງຈັນ — ຮູບປັ້ນພະເຈົ້າອະນຸວົງທີ່ຫັນໜ້າໄປທາງແມ່ນ້ຳຂອງ, ທາງຍ່າງແຄມແມ່ນ້ຳ ແລະ ທິວທັດຕາເວັນຕົກດິນທີ່ສວຍງາມ.",
    "slogan": "ແນມເບິ່ງປະຫວັດສາດ, ສຳຜັດຊີວິດຂອງວຽງຈັນແຄມແມ່ນ້ຳຂອງ.",
    "cta1": "ວາງແຜນການເດີນທາງ",
    "cta2": "ວິທີການເດີນທາງ",
    "rating": "4.2",
    "reviewCount": "6,873",
    "viewLocation": "ເບິ່ງໃນ Google Maps",
    "boardCategory": "ສະຖານທີ່ທ່ອງທ່ຽວວຽງຈັນ",
    "boardTitle": "ສວນເຈົ້າອະນຸວົງ",
    "boardEn": "Chao Anouvong Park",
    "coordsLabel": "17.9616°N, 102.6073°E · ໃຈກາງເມືອງວຽງຈັນ",
    "plannerTitle": "ແຜນແສງ ແລະ ທ້ອງຟ້າ",
    "liveWeather": "ສົດ",
    "plannerNote": "ເວລາເປັນການປະເມີນສຳລັບທີ່ຕັ້ງຂອງສວນ",
    "defaultTemp": "31°",
    "defaultCond": "ມີເມກບາງສ່ວນ",
    "defaultWind": "8 ກມ/ຊມ",
    "sunsetIndexLabel": "ທ້ອງຟ້າຄືນນີ້",
    "sunsetIndexDefault": "ຕາເວັນຕົກດິນອ່ອນໆ",
    "goldenHourLabel": "ແສງສີທອງ",
    "sunsetLabel": "ຕາເວັນຕົກດິນ",
    "blueHourLabel": "ແສງສີຟ້າ",
    "crowdWarningLabel": "ຄວາມແອອັດ",
    "defaultGolden": "17:35 – 18:05",
    "defaultSunset": "18:25",
    "defaultBlue": "18:45 – 19:15",
    "defaultTip": "ງຽບສະຫງົບທີ່ສຸດໃນຕອນເຊົ້າ",
    "lightCaption": "ຂໍ້ມູນສົດຈາກ Open-Meteo ທີ່ຈຸດພິກັດຂອງສວນ",
    "weatherError": "ບໍ່ສາມາດໂຫຼດສະພາບອາກາດໄດ້",
    "goldenChanceLabel": "ໂອກາດແສງສີທອງ"
  },
  "about": {
    "label": "ກ່ຽວກັບສວນ",
    "heading": "ໂອເອຊິສກາງເມືອງແຄມແມ່ນ້ຳຂອງ",
    "lead": "ຕັ້ງຢູ່ໃຈກາງນະຄອນຫຼວງວຽງຈັນ, ສວນເຈົ້າອະນຸວົງທອດຍາວຕາມແຄມແມ່ນ້ຳຂອງ ແລະ ເປັນໜຶ່ງໃນພື້ນທີ່ສາທາລະນະທີ່ໄດ້ຮັບຄວາມນິຍົມທີ່ສຸດຂອງເມືອງ.",
    "paragraph1": "ສວນແຫ່ງນີ້ຕັ້ງຊື່ຕາມພະເຈົ້າອະນຸວົງ, ບຸກຄົນສຳຄັນໃນປະຫວັດສາດລາວ. ຮູບປັ້ນທອງແດງຂອງພະອົງຕັ້ງສະຫງ່າ, ມືໜຶ່ງຖືດາບ ແລະ ອີກມືໜຶ່ງຊີ້ໄປທາງປະເທດໄທຂ້າມແມ່ນ້ຳຂອງ, ເປັນສັນຍາລັກເຖິງເອກະລາດ ແລະ ກຽດສັກສີຂອງປະຊາຊົນລາວ.",
    "paragraph2": "ໃນຕອນກາງເວັນ, ທີ່ນີ້ແມ່ນທາງຍ່າງສີຂຽວທີ່ຮົ່ມເຢັນ; ໃນຕອນແລງ, ເມື່ອຕາເວັນຕົກດິນປ່ຽນທ້ອງຟ້າເປັນສີທອງ, ສວນຈະກາຍເປັນຕະຫຼາດກາງຄືນທີ່ມີຊີວິດຊີວາ ແລະ ສູນກາງການພັກຜ່ອນຂອງປະຊາຊົນ.",
    "quote": "ຢູ່ທີ່ນີ້ ເຈົ້າສາມາດເຫັນຊີວິດທ້ອງຖະໜົນທີ່ແທ້ຈິງທີ່ສຸດຂອງວຽງຈັນ ແລະ ຕາເວັນຕົກດິນທີ່ສວຍງາມທີ່ສຸດ.",
    "quoteAuthor": "ນັກທ່ອງທ່ຽວປະຈຳ",
    "stats": [
      { "value": "2010", "label": "ປີທີ່ສ້າງສຳເລັດ" },
      { "value": "14 ເຮັກຕາ", "label": "ເນື້ອທີ່" },
      { "value": "24 ຊົ່ວໂມງ", "label": "ເວລາເປີດ" }
    ],
    "highlights": [
      { "tag": "👑", "title": "ຮູບປັ້ນພະເຈົ້າອະນຸວົງ", "desc": "ຮູບປັ້ນທອງແດງອັນສະຫງ່າງາມຂອງພະເຈົ້າອະນຸວົງ ແມ່ນໜຶ່ງໃນສັນຍາລັກຂອງວຽງຈັນ." },
      { "tag": "🌅", "title": "ຕາເວັນຕົກດິນແຄມຂອງ", "desc": "ຍ່າງຫຼິ້ນຕາມທາງແຄມແມ່ນ້ຳ ແລະ ຊົມແສງຕາເວັນຕົກດິນສະທ້ອນເທິງໜ້ານ້ຳຂອງອັນກວ້າງໃຫຍ່." },
      { "tag": "🎪", "title": "ຕະຫຼາດກາງຄືນວຽງຈັນ", "desc": "ເມື່ອຄ່ຳລົງ, ເຕັ້ນຫຼັງຄາສີແດງຂ້າງສວນຈະເຊື່ອມຕໍ່ກັນເປັນຕະຫຼາດກາງຄືນທີ່ໃຫຍ່ທີ່ສຸດໃນວຽງຈັນ." }
    ],
    "editorTip": {
      "tag": "ຄຳແນະນຳຈາກບັນນາທິການ",
      "text": "ມາຮອດປະມານ 17:30 ເພື່ອຊົມຕາເວັນຕົກດິນ, ຈາກນັ້ນຍ່າງຫຼິ້ນຕະຫຼາດກາງຄືນເພື່ອຫາອາຫານແຄມທາງ.",
      "ctaLabel": "ເບິ່ງຄູ່ມືເຕັມ"
    }
  },
  "eco": {
    "label": "ແຄມແມ່ນ້ຳ ແລະ ທຳມະຊາດ",
    "heading": "ສຳຜັດລົມຫາຍໃຈຂອງແມ່ນ້ຳຂອງ",
    "quote": "ແມ່ນ້ຳແມ່ທີ່ໄຫຼບໍ່ຢຸດຢັ້ງ — ເປັນພະຍານເຖິງຕາເວັນຕົກດິນ ແລະ ອາລຸນຂອງເມືອງ.",
    "intro": "ສ້າງຂຶ້ນຕາມແຄມແມ່ນ້ຳຂອງ, ສວນເຈົ້າອະນຸວົງບໍ່ພຽງແຕ່ເປັນເຂື່ອນກັນນ້ຳຖ້ວມຂອງເມືອງ, ແຕ່ຍັງເປັນພື້ນທີ່ສີຂຽວໃຫ້ປະຊາຊົນໃກ້ຊິດກັບທຳມະຊາດ. ລົມພັດຕອນເຊົ້າ ແລະ ຄວາມເຢັນຕອນແລງເຮັດໃຫ້ທີ່ນີ້ເປັນສະຖານທີ່ທີ່ເໝາະສົມໃນການຫຼົບໜີຄວາມຮ້ອນເຂດຮ້ອນ.",
    "microTitle": "ສະພາບອາກາດ ແລະ ແມ່ນ້ຳ",
    "micro": [
      { "title": "ຕອນແລງທີ່ເຢັນສະບາຍ", "desc": "ລົມແມ່ນ້ຳຫຼັງຕາເວັນຕົກດິນ ເໝາະສຳລັບການຍ່າງ ຫຼື ແລ່ນ." },
      { "title": "ແຄມແມ່ນ້ຳກວ້າງຂວາງ", "desc": "ໃນລະດູແລ້ງ, ຫາດຊາຍຊາຍກວ້າງໃຫຍ່ຈະປະກົດຂຶ້ນ; ໃນລະດູຝົນ, ແມ່ນ້ຳຈະເຕັມປ່ຽມ." },
      { "title": "ຮົ່ມໄມ້ເຢັນສະບາຍ", "desc": "ສວນມີການປູກຕົ້ນໄມ້ເຂດຮ້ອນຫຼາຍຊະນິດ, ໃຫ້ຮົ່ມເງົາໃນຕອນກາງເວັນ." }
    ],
    "plantsTitle": "ພືດໃນສວນ",
    "plants": [
      {
        "title": "ດອກຈຳປາ (Plumeria)",
        "desc": "ດອກໄມ້ປະຈຳຊາດຂອງລາວ, ເຫັນໄດ້ທົ່ວໄປໃນສວນ.",
        "items": [
          { "name": "ສີຂາວ ແລະ ສີເຫຼືອງ", "desc": "ສົ່ງກິ່ນຫອມອ່ອນໆ" }
        ]
      },
      {
        "title": "ຕົ້ນປາມ ແລະ ສະໜາມຫຍ້າ",
        "desc": "ພື້ນທີ່ສີຂຽວທີ່ໄດ້ຮັບການດູແລເປັນຢ່າງດີ, ເໝາະສຳລັບການປິກນິກຄອບຄົວ.",
        "items": [
          { "name": "ຕົ້ນໄມ້ໃຫ້ຮົ່ມ", "desc": "ໃຫ້ບ່ອນພັກຜ່ອນສຳລັບນັກທ່ອງທ່ຽວໃຕ້ແສງແດດຮ້ອນ" }
        ]
      }
    ],
    "wildlifeTitle": "ສິ່ງທີ່ເຈົ້າອາດຈະເຫັນ",
    "wildlife": [
      "ນົກບິນກັບຮັງໃນຕອນແລງ",
      "ເດັກນ້ອຍຫຼິ້ນເທິງສະໜາມຫຍ້າ",
      "ຊາວບ້ານເຕັ້ນແອໂຣບິກ",
      "ນັກທ່ອງທ່ຽວຮັບລົມແມ່ນ້ຳ"
    ],
    "lntTitle": "ທ່ອງທ່ຽວແບບບໍ່ປະຮ່ອງຮອຍ",
    "lntIntro": "ຊ່ວຍຮັກສາຄວາມສະອາດຂອງສວນ ແລະ ເຄົາລົບວິຖີຊີວິດຂອງຊຸມຊົນທ້ອງຖິ່ນ.",
    "lnt": [
      "ຖິ້ມຂີ້ເຫຍື້ອຈາກຕະຫຼາດກາງຄືນລົງໃນຖັງ",
      "ເຄົາລົບຄວາມສັກສິດຂອງຮູບປັ້ນພະເຈົ້າອະນຸວົງ",
      "ຫ້າມຖິ້ມຂີ້ເຫຍື້ອລົງໃນແມ່ນ້ຳຂອງ",
      "ດູແລຕົ້ນໄມ້ ແລະ ດອກໄມ້ໃນສວນ"
    ],
    "lntCheckHint": "ໝາຍຕິກໃນຂະນະທີ່ຍ່າງ — ການກະທຳເລັກນ້ອຍຊ່ວຍໃຫ້ສວນສາທາລະນະສວຍງາມ",
    "checklist": {
      "title": "ຈຸດເດັ່ນຕາມເວລາ",
      "intro": "ທິວທັດໃນເວລາຕ່າງໆຂອງມື້",
      "items": [
        { "emoji": "🌅", "name": "ຕາເວັນຕົກດິນທີ່ສວຍງາມ", "best": "17:30-18:30", "rare": "ເຫັນໄດ້ໃນມື້ທີ່ທ້ອງຟ້າແຈ່ມໃສ", "rareClass": "" },
        { "emoji": "🏃", "name": "ອອກກຳລັງກາຍຕອນເຊົ້າ", "best": "ປະມານ 06:00", "rare": "ເຕັມໄປດ້ວຍຊີວິດທ້ອງຖິ່ນ", "rareClass": "" },
        { "emoji": "🛍️", "name": "ຕະຫຼາດກາງຄືນທີ່ຄຶກຄື້ນ", "best": "ຫຼັງ 18:00", "rare": "ທຸກໆແລງ", "rareClass": "" }
      ]
    }
  },
  "history": {
    "label": "ປະຫວັດສາດ ແລະ ວັດທະນະທຳ",
    "heading": "ສາຍຕາຂອງພະເຈົ້າອະນຸວົງ",
    "intro": "ຊື່ຂອງສວນ ແລະ ຮູບປັ້ນໃຈກາງນຳພາຄວາມຊົງຈຳອັນເລິກເຊິ່ງກ່ຽວກັບເອກະລາດ ແລະ ກຽດສັກສີຂອງປະຊາຊົນລາວ.",
    "blocks": [
      {
        "title": "ພະເຈົ້າອະນຸວົງແມ່ນໃຜ?",
        "text": "ພະເຈົ້າອະນຸວົງ (1767–1829) ແມ່ນກະສັດອົງສຸດທ້າຍຂອງອານາຈັກວຽງຈັນ. ໃນຕົ້ນສະຕະວັດທີ 19, ພະອົງພະຍາຍາມຕໍ່ຕ້ານການປົກຄອງຂອງສະຫຍາມ (ໄທ) ແລະ ຕໍ່ສູ້ເພື່ອເອກະລາດຂອງລາວ. ເຖິງແມ່ນວ່າໃນທີ່ສຸດພະອົງຈະປະລາໄຊ, ແຕ່ພະອົງໄດ້ຮັບການຍົກຍ້ອງວ່າເປັນວິລະບຸລຸດແຫ່ງຊາດໂດຍປະຊາຊົນລາວ."
      },
      {
        "title": "ສັນຍາລັກຂອງຮູບປັ້ນ",
        "text": "ຢູ່ໃຈກາງສວນ, ຮູບປັ້ນທອງແດງຂອງພະເຈົ້າອະນຸວົງສູງ 8 ແມັດ (ລວມຖານເປັນ 14 ແມັດ). ພະອົງສວມຊຸດຮົບ, ມືໜຶ່ງຖືດາບ, ແລະ ອີກມືໜຶ່ງຊີ້ຢ່າງໜັກແໜ້ນໄປທາງປະເທດໄທຂ້າມແມ່ນ້ຳ, ເປັນສັນຍາລັກເຖິງຄວາມຕັ້ງໃຈທີ່ຈະປົກປ້ອງດິນແດນ."
      },
      {
        "title": "ຄວາມເປັນມາຂອງສວນ",
        "text": "ສວນແຫ່ງນີ້ເປີດນຳໃຊ້ໃນປີ 2010 ເພື່ອສະເຫຼີມສະຫຼອງຄົບຮອບ 450 ປີຂອງການສ້າງຕັ້ງນະຄອນຫຼວງວຽງຈັນ. ມັນບໍ່ພຽງແຕ່ເຮັດໃຫ້ແຄມແມ່ນ້ຳຂອງສວຍງາມຂຶ້ນ ແຕ່ຍັງກາຍເປັນສະຖານທີ່ສຳຄັນສຳລັບການສະເຫຼີມສະຫຼອງລະດັບຊາດ ແລະ ການຊຸມນຸມໃນວັນພັກ."
      },
      {
        "title": "ແຄມແມ່ນ້ຳໃນມື້ນີ້",
        "text": "ຄວັນໄຟແຫ່ງປະຫວັດສາດໄດ້ຈາງຫາຍໄປດົນແລ້ວ, ແລະ ມື້ນີ້ສວນເຈົ້າອະນຸວົງເປັນສັນຍາລັກແຫ່ງສັນຕິພາບ ແລະ ຄວາມຈະເລີນຮຸ່ງເຮືອງ. ຜູ້ຄົນຍ່າງຫຼິ້ນ, ອອກກຳລັງກາຍ, ແລະ ເພີດເພີນກັບອາຫານຢູ່ທີ່ນີ້, ປະສົມປະສານນ້ຳໜັກຂອງປະຫວັດສາດເຂົ້າກັບຄວາມສະຫງົບສຸກໃນຍຸກປັດຈຸບັນ."
      }
    ],
    "legend": {
      "title": "ຄວາມຊົງຈຳຂອງວິລະບຸລຸດແຫ່ງຊາດ",
      "text": "ໃນການເລົ່າເລື່ອງປະຫວັດສາດລາວ, ພະເຈົ້າອະນຸວົງແມ່ນຄຳສັບຄ້າຍຄືກັນກັບຄວາມກ້າຫານ. ຊາວບ້ານມັກຈະນຳດອກໄມ້ ແລະ ທູບທຽນມາຖວາຍຕໍ່ໜ້າຮູບປັ້ນເພື່ອສະແດງຄວາມເຄົາລົບ ແລະ ລຳລຶກເຖິງພະອົງ."
    },
    "didYouKnow": {
      "title": "ເຈົ້າຮູ້ບໍ່?",
      "text": "ຮູບປັ້ນນີ້ແມ່ນໜຶ່ງໃນຮູບປັ້ນທອງແດງທີ່ໃຫຍ່ທີ່ສຸດໃນປະເທດລາວ. ໃນງານບຸນສະເພາະ, ຈະມີພິທີກຳ ແລະ ງານລຳລຶກທີ່ຍິ່ງໃຫຍ່ຈັດຂຶ້ນຢູ່ທີ່ນີ້, ແລະ ຮູບປັ້ນຂອງກະສັດຈະຖືກລ້ອມຮອບດ້ວຍດອກໄມ້."
    },
    "folklore": {
      "title": "ຊີວິດແຄມແມ່ນ້ຳ",
      "tale": "ສຳລັບຊາວວຽງຈັນ, ແມ່ນ້ຳຂອງບໍ່ພຽງແຕ່ເປັນຊາຍແດນທຳມະຊາດ ແຕ່ຍັງເປັນຈຸດສູນກາງຂອງຊີວິດ. ລົມແມ່ນ້ຳໃນຕອນກາງຄືນພັດເອົາຄວາມຮ້ອນຂອງກາງເວັນໄປ, ແລະ ຜູ້ຄົນມາເຕົ້າໂຮມກັນຢູ່ທີ່ນີ້, ສືບຕໍ່ວິຖີຊີວິດແຄມແມ່ນ້ຳທີ່ສືບທອດກັນມາຫຼາຍລຸ້ນຄົນ.",
      "shrineTitle": "ຄຳເຕືອນກ່ຽວກັບຄວາມເຄົາລົບ",
      "shrine": "ກະລຸນາຮັກສາຄວາມເຄົາລົບທີ່ເໝາະສົມໃກ້ກັບຮູບປັ້ນພະເຈົ້າອະນຸວົງ. ຢ່າສະແດງທ່າທາງທີ່ບໍ່ເໝາະສົມ ຫຼື ປີນຂຶ້ນຖານ."
    },
    "compare": {
      "caption": "ລາກແຖບເລື່ອນເພື່ອປຽບທຽບຄວາມງຽບສະຫງົບໃນຕອນກາງເວັນ ແລະ ຄວາມຄຶກຄື້ນໃນຕອນກາງຄືນ",
      "beforeLabel": "ສວນຕອນກາງເວັນ",
      "afterLabel": "ຄວາມຄຶກຄື້ນຂອງຕະຫຼາດກາງຄືນ"
    },
    "concrete": {
      "title": "ພູມສັນຖານທີ່ທັນສະໄໝ ແລະ ປະຫວັດສາດ",
      "text": "ການອອກແບບຂອງສວນສົມດຸນລະຫວ່າງການວາງແຜນຕົວເມືອງທີ່ທັນສະໄໝ ແລະ ການລຳລຶກເຖິງປະຫວັດສາດ. ຈະຕຸລັດທີ່ເປີດກວ້າງ, ທາງຍ່າງທີ່ສະອາດ, ແລະ ຮູບປັ້ນທີ່ສະຫງ່າງາມ ເສີມສ້າງເຊິ່ງກັນແລະກັນ, ໃຫ້ທິວທັດທີ່ເປີດກວ້າງທີ່ຫາໄດ້ຍາກໃນໃຈກາງວຽງຈັນ."
    },
    "sisterQuote": {
      "title": "ການສົນທະນາຂ້າມແມ່ນ້ຳ",
      "text": "ຢືນຢູ່ໃນສວນ, ຂ້າມແມ່ນ້ຳຂອງອັນກວ້າງໃຫຍ່ແມ່ນແຂວງໜອງຄາຍໃນປະເທດໄທ. ໃນຕອນກາງຄືນ, ແສງໄຟທັງສອງຝັ່ງສ່ອງແສງນຳກັນ, ບອກເລົ່າເຖິງອາລະຍະທຳອັນຍາວນານທີ່ໄດ້ຮັບການລ້ຽງດູໂດຍແມ່ນ້ຳໃຫຍ່ສາຍນີ້."
    }
  },
  "food": {
    "label": "ອາຫານ ແລະ ເຄື່ອງດື່ມ",
    "heading": "ຕະຫຼາດກາງຄືນ ແລະ ອາຫານແຄມທາງ",
    "lead": "ເມື່ອຕາເວັນຕົກດິນ, ຕະຫຼາດກາງຄືນວຽງຈັນທີ່ມີຊື່ສຽງຂ້າງສວນ ແລະ ຮ້ານອາຫານນັບບໍ່ຖ້ວນເລີ່ມຕື່ນຂຶ້ນ.",
    "dishes": [
      { "tag": "🍹", "name": "ນ້ຳໝາກໄມ້ປັ່ນສົດ", "price": "~ 15,000 ກີບ", "desc": "ນ້ຳໝາກມ່ວງ ແລະ ແກ້ວມັງກອນປັ່ນສົດ, ເໝາະສຳລັບການຄາຍຮ້ອນ." },
      { "tag": "🍡", "name": "ປີ້ງຊິ້ນ", "price": "~ 10,000 ກີບ", "desc": "ຊີ້ນປີ້ງເຕົາຖ່ານ, ຫອມກຸ່ນ." },
      { "tag": "🥗", "name": "ຕຳໝາກຫຸ່ງ", "price": "~ 20,000 ກີບ", "desc": "ອາຫານວ່າງລາວແບບຄລາສສິກ, ເຜັດ ແລະ ສົດຊື່ນ." },
      { "tag": "🥞", "name": "ໂຣຕີກ້ວຍ", "price": "~ 15,000 ກີບ", "desc": "ແພນເຄັກຫວານຮາດນົມຂຸ້ນ, ເປັນທີ່ຊື່ນຊອບຂອງນັກທ່ອງທ່ຽວ." }
    ],
    "quote": {
      "text": "ຫຼັງຈາກຍ່າງຕະຫຼາດກາງຄືນ, ຊື້ອາຫານວ່າງແລ້ວນັ່ງເທິງຂັ້ນໄດແຄມແມ່ນ້ຳເພື່ອຮັບລົມ—ນີ້ຄືຄືນຂອງວຽງຈັນ.",
      "author": "ນັກທ່ອງທ່ຽວປະຈຳ"
    }
  },
  "gallery": {
    "label": "ຮູບພາບ",
    "heading": "ຊ່ວງເວລາໃນສວນ",
    "intro": "ໜຶ່ງມື້ໃນສວນ — ຈາກຄວາມງຽບສະຫງົບໃນຕອນເຊົ້າ ເຖິງຕາເວັນຕົກດິນທີ່ສວຍງາມ.",
    "historicalNote": "ຮູບພາບສະແດງເຖິງບັນຍາກາດຂອງສວນ ແລະ ອາດປ່ຽນແປງຕາມເວລາ ແລະ ສະພາບອາກາດ.",
    "credits": "ຮູບພາບສຳລັບການອ້າງອີງ ແລະ ບໍ່ແມ່ນເພື່ອການຄ້າ.",
    "alts": [
      "ຮູບປັ້ນທອງແດງອັນສະຫງ່າງາມຂອງພະເຈົ້າອະນຸວົງ",
      "ແສງຕາເວັນຕົກດິນທີ່ສວຍງາມເທິງແມ່ນ້ຳຂອງ",
      "ຕະຫຼາດກາງຄືນວຽງຈັນຫຼັງຄາສີແດງໃນຕອນກາງຄືນ",
      "ນັກທ່ອງທ່ຽວຍ່າງຕາມທາງຍ່າງໃນສວນ",
      "ສະໜາມຫຍ້າທີ່ມີຮົ່ມໄມ້ຕາມແຄມແມ່ນ້ຳ",
      "ຮູບຖ່າຍໃກ້ໆຂອງຮູບປັ້ນພະເຈົ້າອະນຸວົງ",
      "ຝູງຊົນເຕັ້ນແອໂຣບິກເທິງຈະຕຸລັດໃນຕອນແລງ",
      "ແສງໄຟຂອງປະເທດໄທຂ້າມແມ່ນ້ຳ",
      "ຮ້ານອາຫານແຄມທາງໃນຕະຫຼາດກາງຄືນ",
      "ດອກຈຳປາບານ",
      "ຕັ່ງນັ່ງພັກຜ່ອນໃນສວນ",
      "ໜ້ານ້ຳຂອງທີ່ງຽບສະຫງົບໃນຕອນເຊົ້າ",
      "ນັກທ່ອງທ່ຽວຖ່າຍຮູບໜ້າຮູບປັ້ນ",
      "ຖະໜົນຊົມວິວລຽບແຄມແມ່ນ້ຳ",
      "ບັນຍາກາດຖະໜົນວຽງຈັນທີ່ມີຊີວິດຊີວາ",
      "ທິວທັດກາງຄືນຂອງສວນຫຼັງຕາເວັນຕົກດິນ"
    ],
    "viewLocation": "ເບິ່ງໃນ Google Maps"
  },
  "reviews": {
    "label": "ຣີວິວ",
    "heading": "ສິ່ງທີ່ນັກທ່ອງທ່ຽວເວົ້າ",
    "intro": "ພາບລວມຂອງຄວາມປະທັບໃຈຈາກນັກທ່ອງທ່ຽວເມື່ອບໍ່ດົນມານີ້ (ຈາກການຣີວິວການທ່ອງທ່ຽວສາທາລະນະ).",
    "disclaimer": "ອີງຕາມການຣີວິວສາທາລະນະ · ບໍ່ແມ່ນການຮັບຮອງຢ່າງເປັນທາງການ",
    "declaration": "ຣີວິວຖືກລວບລວມຈາກແພລດຟອມການທ່ອງທ່ຽວອິດສະຫຼະ, ສຳລັບການອ້າງອີງເທົ່ານັ້ນ",
    "featured": [
      { "text": "ຮູບປັ້ນພະເຈົ້າອະນຸວົງນັ້ນຍິ່ງໃຫຍ່ຫຼາຍ, ແລະ ຕາເວັນຕົກດິນແຄມແມ່ນ້ຳຂອງແມ່ນສິ່ງທີ່ບໍ່ຄວນພາດ!", "source": "★ 5.0 · ຣີວິວນັກທ່ອງທ່ຽວ" },
      { "text": "ເໝາະສຳລັບການຍ່າງຫຼິ້ນຕອນແລງ, ຕະຫຼາດກາງຄືນຂ້າງໆກໍມ່ວນ ແລະ ມີອາຫານວ່າງຫຼາຍ.", "source": "★ 5.0 · ຄວາມຄິດເຫັນຂອງນັກທ່ອງທ່ຽວ" }
    ],
    "items": [
      { "text": "[ຕ້ອງເບິ່ງ: ຕາເວັນຕົກດິນ] ວິວກວ້າງຫຼາຍ ແລະ ຕາເວັນຕົກດິນສວຍງາມ.", "rating": "5", "name": "Ana", "date": "ມີນາ 2026" },
      { "text": "[ຮູບປັ້ນພະເຈົ້າອະນຸວົງ] ສະຖານທີ່ສຳຄັນທາງປະຫວັດສາດ, ຄຸ້ມຄ່າທີ່ຈະໄປເບິ່ງ.", "rating": "5", "name": "Tom", "date": "ກຸມພາ 2026" },
      { "text": "[ຕະຫຼາດກາງຄືນ] ຕະຫຼາດກາງຄືນຂ້າງໆຄຶກຄື້ນດີ, ສາມາດຊື້ຂອງທີ່ລະນຶກໄດ້ຫຼາຍ.", "rating": "4", "name": "Lina", "date": "ມັງກອນ 2026" },
      { "text": "[ຍ່າງພັກຜ່ອນ] ລົມແມ່ນ້ຳພັດສະບາຍຫຼາຍ, ຄົນທ້ອງຖິ່ນຫຼາຍ.", "rating": "4", "name": "Wei", "date": "ກຸມພາ 2026" },
      { "text": "[ອອກກຳລັງກາຍ] ມີຄົນເຕັ້ນຫຼາຍຢູ່ຈະຕຸລັດຕອນກາງຄືນ, ມີພະລັງຫຼາຍ.", "rating": "5", "name": "Ken", "date": "ທັນວາ 2025" },
      { "text": "[ສະຖານທີ່] ຕັ້ງຢູ່ໃຈກາງເມືອງ, ການເດີນທາງສະດວກຫຼາຍ.", "rating": "5", "name": "Sora", "date": "ມັງກອນ 2026" },
      { "text": "[ອາຫານ] ອາຫານຕະຫຼາດກາງຄືນລາຄາຖືກ ແລະ ແຊບ.", "rating": "4", "name": "Pim", "date": "ມີນາ 2026" },
      { "text": "[ສະພາບແວດລ້ອມ] ສວນສະອາດ ແລະ ມີການຈັດສວນທີ່ດີ.", "rating": "4", "name": "Dan", "date": "ກຸມພາ 2026" }
    ],
    "viewLocation": "ເບິ່ງໃນ Google Maps"
  },
  "sources": {
    "label": "ແຫຼ່ງຂໍ້ມູນ",
    "heading": "ເອກະສານອ້າງອີງຂອງພວກເຮົາ",
    "intro": "ຄູ່ມືທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລນີ້ລວບລວມຂໍ້ມູນສາທາລະນະເພື່ອຊ່ວຍນັກທ່ອງທ່ຽວວາງແຜນຢ່າງມີຄວາມຮັບຜິດຊອບ.",
    "photoTitle": "ແຫຼ່ງທີ່ມາຂອງຮູບພາບ",
    "photoItems": [
      { "text": "ຮູບພາບທີ່ສະແດງເປັນພຽງພາບປະກອບຂອງສວນເຈົ້າອະນຸວົງ", "linkLabel": "ເບິ່ງສະຖານທີ່", "url": "https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA" }
    ],
    "factTitle": "ຂໍ້ເທັດຈິງ ແລະ ຕົວເລກ",
    "factText": "ຄະແນນ, ເວລາເປີດ, ແລະ ພິກັດ ຖືກລວບລວມຈາກແຫຼ່ງຂໍ້ມູນສາທາລະນະ ແລະ ອາດມີການປ່ຽນແປງ — ກະລຸນາກວດສອບຢູ່ສະຖານທີ່ຈິງກ່ອນເດີນທາງ.",
    "correctionTitle": "ພົບຂໍ້ຜິດພາດ?",
    "correctionText": "ພວກເຮົາເປັນທີມງານນ້ອຍໆທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລ. ຖ້າທ່ານພົບຂໍ້ຜິດພາດ ຫຼື ຂໍ້ມູນທີ່ຫຼ້າສະໄໝ, ກະລຸນາແຈ້ງໃຫ້ພວກເຮົາຊາບ ແລະ ພວກເຮົາຈະແກ້ໄຂ.",
    "correctionMailto": "mailto:n20186005@gmail.com",
    "correctionCta": "ສົ່ງອີເມວຫາພວກເຮົາ",
    "copyright": "ຄູ່ມືສວນເຈົ້າອະນຸວົງ · ຊັບພະຍາກອນນັກທ່ອງທ່ຽວທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລ"
  },
  "mapSection": {
    "label": "ສະຖານທີ່ ແລະ ແຜນທີ່",
    "heading": "ຊອກຫາສວນເຈົ້າອະນຸວົງ",
    "lead": "ຕັ້ງຢູ່ໃຈກາງນະຄອນຫຼວງວຽງຈັນ, ລຽບຕາມແຄມແມ່ນ້ຳຂອງ, ເປັນໜຶ່ງໃນສະຖານທີ່ສຳຄັນທີ່ໂດດເດັ່ນທີ່ສຸດຂອງເມືອງ.",
    "stats": [
      { "tag": "ຄະແນນ", "value": "4.2 ★", "sub": "ຈາກ 6,873 ຣີວິວ" },
      { "tag": "ເປີດ", "value": "24 ຊົ່ວໂມງ", "sub": "ເປີດຕະຫຼອດມື້" },
      { "tag": "ພື້ນທີ່", "value": "ໃຈກາງເມືອງ", "sub": "ວຽງຈັນ, ລາວ" }
    ],
    "address": "Vientiane 01600 ລາວ",
    "plusCode": "Plus Code XJ64+JW ວຽງຈັນ",
    "coords": "17.9616°N, 102.6073°E",
    "iframeTitle": "Google Maps: ສວນເຈົ້າອະນຸວົງ, ວຽງຈັນ, ລາວ"
  },
  "footer": {
    "brand": {
      "name": "ສວນເຈົ້າອະນຸວົງ",
      "tagline": "Chao Anouvong Park · ວຽງຈັນ"
    },
    "about": "ຄູ່ມືການທ່ອງທ່ຽວສວນເຈົ້າອະນຸວົງທີ່ບໍ່ເສຍຄ່າ ແລະ ບໍ່ສະແຫວງຫາຜົນກຳໄລ — ປະຫວັດສາດ, ຕາເວັນຕົກດິນ, ແລະ ວິທີການໃຊ້ເວລາຕອນແລງທີ່ຜ່ອນຄາຍຢູ່ທີ່ນີ້.",
    "navTitle": "ສຳຫຼວດ",
    "navItems": [
      { "label": "ກ່ຽວກັບ", "href": "#about" },
      { "label": "ປະຫວັດສາດ", "href": "#history" },
      { "label": "ຄູ່ມືທ່ອງທ່ຽວ", "href": "#guide" },
      { "label": "ອາຫານໃກ້ຄຽງ", "href": "#food" },
      { "label": "ຮູບພາບ", "href": "#gallery" },
      { "label": "ຣີວິວ", "href": "#reviews" },
      { "label": "ແຜນທີ່", "href": "#map" }
    ],
    "noteTitle": "ກະລຸນາຮັບຊາບ",
    "note": "ພວກເຮົາບໍ່ມີສ່ວນກ່ຽວຂ້ອງກັບຜູ້ຂາຍໃດໆໃນສວນ. ຂໍ້ມູນອາດມີການປ່ຽນແປງ — ກວດສອບຢູ່ສະຖານທີ່ຈິງ.",
    "mapsLabel": "Google Maps →",
    "sourcesTitle": "ເອກະສານອ້າງອີງ",
    "sourcesNote": "ຄູ່ມືນີ້ເຊື່ອມໂຍງໄປຍັງແຫຼ່ງຂໍ້ມູນສາທາລະນະເພື່ອການຢັ້ງຢືນ.",
    "privacy": "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    "terms": "ເງື່ອນໄຂການໃຫ້ບໍລິການ",
    "cookies": "ການຕັ້ງຄ່າຄຸກກີ້",
    "disclaimerLead": "ຄູ່ມືສວນເຈົ້າອະນຸວົງເປັນແຫຼ່ງຂໍ້ມູນອິດສະຫຼະທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລ — ບໍ່ແມ່ນເວັບໄຊທ໌ທາງການຂອງອົງການ ຫຼື ທຸລະກິດໃດໆ.",
    "unofficial": "ບໍ່ແມ່ນເວັບໄຊທ໌ທາງການຂອງການທ່ອງທ່ຽວລາວ ຫຼື ນະຄອນຫຼວງວຽງຈັນ.",
    "dataSource": "ຂໍ້ມູນສະພາບອາກາດໃຫ້ບໍລິການໂດຍ Open-Meteo.",
    "copyright": "© 2026 ຄູ່ມືສວນເຈົ້າອະນຸວົງ · ບໍ່ສະແຫວງຫາຜົນກຳໄລ"
  },
  "guide": {
    "label": "ຄູ່ມືທ່ອງທ່ຽວ",
    "heading": "ຄຳແນະນຳການທ່ອງທ່ຽວ",
    "lead": "ຄຳແນະນຳທີ່ເປັນປະໂຫຍດສຳລັບການພັກຜ່ອນຕອນແລງທີ່ສວນເຈົ້າອະນຸວົງ.",
    "transport": {
      "title": "ການເດີນທາງ",
      "intro": "ສວນຕັ້ງຢູ່ໃຈກາງນະຄອນຫຼວງວຽງຈັນ, ສາມາດຍ່າງ ຫຼື ຂີ່ລົດຖີບໄປໄດ້ຢ່າງສະດວກສະບາຍ.",
      "options": [
        { "title": "ຍ່າງ", "desc": "ຖ້າທ່ານພັກຢູ່ໃຈກາງເມືອງ, ໃຊ້ເວລາຍ່າງພຽງແຕ່ 10-15 ນາທີກໍຮອດສວນ." },
        { "title": "ລົດຕຸກຕຸກ", "desc": "ສາມາດເອີ້ນລົດຕຸກຕຸກໄດ້ງ່າຍທົ່ວເມືອງ. ພຽງແຕ່ບອກຄົນຂັບໃຫ້ໄປຕະຫຼາດກາງຄືນແຄມຂອງ ຫຼື ຮູບປັ້ນພະເຈົ້າອະນຸວົງ." },
        { "title": "ລົດຖີບ/ລົດຈັກ", "desc": "ເຮືອນພັກຫຼາຍແຫ່ງມີລົດຖີບໃຫ້ເຊົ່າ. ການຂີ່ລົດຖີບລຽບແຄມແມ່ນ້ຳເປັນປະສົບການທີ່ດີຫຼາຍ." }
      ]
    },
    "tips": {
      "title": "ຄຳແນະນຳທີ່ເປັນປະໂຫຍດ",
      "items": [
        { "title": "ເວລາທີ່ດີທີ່ສຸດໃນການໄປ", "desc": "ປະມານ 17:30 ແມ່ນເວລາທີ່ດີທີ່ສຸດໃນການຊົມຕາເວັນຕົກດິນ ແລະ ຍ່າງຫຼິ້ນຕະຫຼາດກາງຄືນ." },
        { "title": "ແສງແດດ ແລະ ຍຸງ", "desc": "ຄວນປ້ອງກັນແສງແດດໃນຕອນກາງເວັນ, ແລະ ໃຊ້ຢາກັນຍຸງສຳລັບການຍ່າງແຄມແມ່ນ້ຳໃນຕອນແລງ." },
        { "title": "ກຽມເງິນສົດ", "desc": "ກຽມເງິນກີບໃບນ້ອຍໆສຳລັບຕະຫຼາດກາງຄືນ ແລະ ຮ້ານອາຫານແຄມທາງ." }
      ]
    },
    "faq": {
      "title": "ຄຳຖາມທີ່ພົບເລື້ອຍ",
      "items": [
        { "q": "ຕ້ອງເສຍຄ່າເຂົ້າຊົມບໍ່?", "a": "ບໍ່, ສວນເຈົ້າອະນຸວົງເປັນພື້ນທີ່ສາທາລະນະທີ່ບໍ່ເສຍຄ່າເຂົ້າຊົມ." },
        { "q": "ຕະຫຼາດກາງຄືນເປີດຈັກໂມງ?", "a": "ຕະຫຼາດກາງຄືນມັກຈະເລີ່ມເປີດປະມານ 18:00 ໂມງຂອງທຸກໆແລງ ແລະ ເປີດຈົນເຖິງປະມານ 22:00 ໂມງ." },
        { "q": "ໃນສວນມີຫ້ອງນ້ຳບໍ່?", "a": "ມີຫ້ອງນ້ຳສາທາລະນະທີ່ເກັບຄ່າບໍລິການຢູ່ພາຍໃນ ແລະ ອ້ອມຮອບສວນ (ປະມານ 2,000-3,000 ກີບ)." }
      ]
    }
  }
}

with open("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\zh.json", "w", encoding="utf-8") as f:
    json.dump(zh, f, ensure_ascii=False, indent=2)

with open("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\en.json", "w", encoding="utf-8") as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

with open("c:\\Users\\Administrator\\Documents\\GitHub\\老过\\chao-anouvong-park\\src\\i18n\\lo.json", "w", encoding="utf-8") as f:
    json.dump(lo, f, ensure_ascii=False, indent=2)

print("JSON files generated successfully.")
