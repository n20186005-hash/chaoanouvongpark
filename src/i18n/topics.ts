import type { Lang } from './ui';

export type TopicSlug = 'chao-anouvong-statue' | 'photos' | 'mekong-sunset' | 'night-market';

export interface TopicSection {
  title: string;
  text: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  title: string;
  description: string;
  intro: string;
  sections: TopicSection[];
  gallery: number[];
  faqs: TopicFaq[];
  related: TopicSlug[];
}

export const TOPIC_SLUGS: TopicSlug[] = [
  'chao-anouvong-statue',
  'photos',
  'mekong-sunset',
  'night-market',
];

export const TOPICS: Record<Lang, Record<TopicSlug, TopicContent>> = {
  en: {
    'chao-anouvong-statue': {
      title: 'Chao Anouvong Statue | Vientiane Riverside Monument',
      description:
        'The bronze King Anouvong statue in Chao Anouvong Park — its height, symbolism, history and how to visit this Vientiane landmark on the Mekong.',
      intro:
        'At the heart of Chao Anouvong Park stands a towering bronze statue of King Anouvong, the last king of the Vientiane Kingdom and a national hero of Laos.',
      sections: [
        {
          title: 'The monument',
          text: 'Cast in bronze and unveiled in 2010 for the 450th anniversary of Vientiane, the statue stands about 8 metres tall — about 14 metres including its base — on the Mekong shore.',
        },
        {
          title: 'Symbolism & pose',
          text: 'In armour, the king grips a sword in one hand and points firmly across the Mekong toward Thailand with the other, a gesture of Lao dignity and remembrance of former territory.',
        },
        {
          title: 'Visiting the statue',
          text: 'The park is free and open 24 hours. Come at golden hour for the best light, dress modestly, and never climb the base or railing. A champa or marigold garland may be laid at the offering altar.',
        },
      ],
      gallery: [1, 2, 10, 12],
      faqs: [
        {
          q: 'What is the Chao Anouvong statue?',
          a: 'A bronze monument of King Anouvong (r. 1805–1828), the last king of the Vientiane Kingdom, unveiled in 2010 as the centrepiece of the park.',
        },
        {
          q: 'How tall is the statue?',
          a: 'About 8 metres tall, about 14 metres including its base.',
        },
        {
          q: 'Is there an entrance fee to see the statue?',
          a: 'No — the park and statue are a fully open public space, free and accessible 24 hours a day.',
        },
        {
          q: "What does the statue's gesture mean?",
          a: 'One hand holds a sword while the other points across the Mekong toward Thailand, symbolising Lao independence, dignity and memory of the homeland.',
        },
        {
          q: 'Can visitors climb the statue base?',
          a: 'No. The king is a revered national hero; please keep a respectful distance and do not climb the base or railing.',
        },
      ],
      related: ['mekong-sunset', 'photos', 'night-market'],
    },
    photos: {
      title: 'Chao Anouvong Park Photos | Best Shots & Viewpoints',
      description:
        'Photo guide to Chao Anouvong Park — best viewpoints, golden-hour and blue-hour times, and what to capture by the Mekong in Vientiane.',
      intro:
        'From the bronze king at golden hour to the lantern-lit night market, Chao Anouvong Park offers postcard views in every light.',
      sections: [
        {
          title: 'Best light windows',
          text: 'Golden hour runs about 17:30–18:00, sunset is around 18:25, and blue hour about 18:45–19:15 — exact times shift through the year.',
        },
        {
          title: 'Top photo spots',
          text: 'Shoot the statue from 45° in front for a golden rim; from the riverside steps frame Nong Khai’s afterglow and its reflection on the water.',
        },
        {
          title: 'Quick tips',
          text: 'Arrive 30 minutes early to claim a spot, bring a small tripod for blue-hour long exposures, and never climb the railing for a shot.',
        },
      ],
      gallery: [1, 3, 7, 8, 11, 12, 9],
      faqs: [
        {
          q: 'When is the best light for photos?',
          a: 'Golden hour (about 17:30–18:00) and blue hour (about 18:45–19:15) give the warmest and most dramatic light on the statue and river.',
        },
        {
          q: 'Where is the best spot for the statue?',
          a: 'A 45° front angle catches the low sun for a golden rim; the riverside steps frame the Mekong and the Thai shore across the water.',
        },
        {
          q: 'Can I use a drone for aerial shots?',
          a: 'Not recommended without permission — the park borders the Mekong international boundary and lies near government areas; unauthorised drones risk confiscation or a fine.',
        },
        {
          q: 'What should I bring for night photos?',
          a: 'A small travel tripod and a phone in Night mode (or a camera at low ISO with a long exposure) capture the blue-hour lantern lights best.',
        },
      ],
      related: ['mekong-sunset', 'chao-anouvong-statue', 'night-market'],
    },
    'mekong-sunset': {
      title: 'Mekong Sunset at Chao Anouvong Park | Best Time & View',
      description:
        'When and where to watch the Mekong sunset from Chao Anouvong Park in Vientiane — golden hour times, blue hour and photo tips.',
      intro:
        'As the sun drops behind the Thai shore, the Mekong turns gold then deep blue — the park’s most celebrated moment.',
      sections: [
        {
          title: 'When to come',
          text: 'Arrive around 17:00–17:30; the sun typically sets near 18:25, though times vary by season. Mornings are calm if you prefer quiet.',
        },
        {
          title: 'Where to watch',
          text: 'The riverside steps and the open promenade facing Nong Khai are best — the king is rimmed with gold and the wide river glows.',
        },
        {
          title: 'Seasons & haze',
          text: 'Nov–Jan gives the clearest skies; Feb–Apr can bring late-season haze; the wet season is lush but rainy, so check the live forecast.',
        },
      ],
      gallery: [3, 11, 1, 12, 8],
      faqs: [
        {
          q: 'What time is sunset at the park?',
          a: 'Around 18:25 in Vientiane, but the exact time shifts through the year; golden hour begins roughly 17:30.',
        },
        {
          q: 'Where is the best sunset viewpoint?',
          a: 'The riverside steps and promenade facing Nong Khai, Thailand, across the Mekong — you see the sun set over the opposite bank.',
        },
        {
          q: 'Is the sunset good all year?',
          a: 'It is best in the dry season (Nov–Jan). In Feb–Apr haze may tint the sky red rather than gold; the wet season can be cloudy or rainy.',
        },
        {
          q: 'Can I watch the sunset from a café?',
          a: 'Yes — riverside restaurants and cafés along Fa Ngum Road offer seated views, though the open promenade is the most popular spot.',
        },
      ],
      related: ['photos', 'chao-anouvong-statue', 'night-market'],
    },
    'night-market': {
      title: 'Vientiane Night Market by Chao Anouvong Park | Food & Hours',
      description:
        'The Vientiane Night Market beside Chao Anouvong Park — opening hours, street food, prices and tips for an evening by the Mekong.',
      intro:
        'After sunset the red-roofed stalls beside the park merge into the largest night market in Vientiane, full of food, clothes and crafts.',
      sections: [
        {
          title: 'Hours & atmosphere',
          text: 'Stalls begin setting up around 17:30–18:00 and wind down by roughly 22:30 every evening along the riverside promenade.',
        },
        {
          title: 'Food & drinks',
          text: 'Fresh juices and smoothies, Lao BBQ skewers, papaya salad and banana pancakes — most items run about 10,000–20,000 LAK.',
        },
        {
          title: 'Tips for visitors',
          text: 'Carry Lao kip in small notes (cards are rarely used at stalls), watch your belongings in crowds, and budget about 2,000–3,000 kip for public toilets.',
        },
      ],
      gallery: [4, 5, 13, 6, 9],
      faqs: [
        {
          q: 'What time does the Vientiane night market open?',
          a: 'Stalls set up around 17:30–18:00 and usually wind down by about 22:30 every evening.',
        },
        {
          q: 'Is the night market free to enter?',
          a: 'Yes — browsing is free; you only pay for the food, drinks and goods you buy.',
        },
        {
          q: 'What payment is accepted?',
          a: 'Most stalls are cash only. Carry Lao kip; some accept Thai baht or US dollars but give change in kip at a loss. Cards are rarely usable.',
        },
        {
          q: 'Is the night market safe?',
          a: 'Very safe and well lit with many local families. As in any crowd, keep an eye on your bag, phone and wallet.',
        },
      ],
      related: ['chao-anouvong-statue', 'mekong-sunset', 'photos'],
    },
  },

  lo: {
    'chao-anouvong-statue': {
      title: 'ຮູບປັ້ນເຈົ້າອະນຸວົງ | ອານຸສາວະລີຝັ່ງແມ່ນ້ຳວຽງຈັນ',
      description:
        'ຮູບປັ້ນສຳລິດເຈົ້າອະນຸວົງໃນສວນເຈົ້າອະນຸວົງ — ຄວາມສູງ, ຄວາມໝາຍ, ປະຫວັດສາດ ແລະ ວິທີການເຂົ້າຊມສະຖານທີ່ນີ້ແຄມແມ່ນ້ຳຂອງ.',
      intro:
        'ຢູ່ກາງສວນເຈົ້າອະນຸວົງມີຮູບປັ້ນສຳລິດເຈົ້າອະນຸວົງທີ່ສູງຕັ້ງຕະຫຼາດ — ພະເຈົ້າອະນຸວົງອົງສຸດທ້າຍຂອງອານາຈັກວຽງຈັນ ແລະ ວີລະຊົນປະຈຳຊາດຂອງລາວ.',
      sections: [
        {
          title: 'ອານຸສາວະລີ',
          text: 'ປັ້ນດ້ວຍທອງແດງ ແລະ ສະເຫຼີມສະຫຼອງໃນປີ 2010 ເພື່ອຄົບຮອບ 450 ປີຂອງວຽງຈັນ, ຮູບປັ້ນນີ້ສູງປະມານ 8 ແມັດ — ຫຼືປະມານ 14 ແມັດລວມຕັ້ງຖານ — ຢູ່ຝັ່ງແມ່ນ້ຳຂອງ.',
        },
        {
          title: 'ຄວາມໝາຍ ແລະ ທ່າທາງ',
          text: 'ສະວມຊຸດກຳມະລັງ, ພະອົງຈັບອາວດາບດ້ວຍມືຂ້າງໜຶ່ງ ແລະ ຊີ້ໄປທາງຂ້າມແມ່ນ້ຳຂອງສູ່ປະເທດໄທດ້ວຍອີກຂ້າງໜຶ່ງ — ເປັນທ່າທາງແຫ່ງຄວາມສຸພາບ ແລະ ຄວາມຊົດຊ້າດຂອງລາວ.',
        },
        {
          title: 'ການເຂົ້າຊມຮູບປັ້ນ',
          text: 'ສວນແຫ່ງນີ້ເຂົ້າຟຣີ ແລະ ເປີດ 24 ຊົ່ວໂມງ. ມາໃນເວລາແສງສີທອງສຳລັບແສງທີ່ດີທີ່ສຸດ, ໃສ່ຊຸດໃຫ້ສະລວມ, ແລະ ຢ່າຂຶ້ນຖານຫຼືລ້ອມຮູບປັ້ນ. ສາມາດວາງພວກດອກຈຳປາຫຼືດອກມະລິກທີ່ບ່ອນບູຊາ.',
        },
      ],
      gallery: [1, 2, 10, 12],
      faqs: [
        {
          q: 'ຮູບປັ້ນເຈົ້າອະນຸວົງແມ່ນຫຍັງ?',
          a: 'ອານຸສາວະລີສຳລິດຂອງເຈົ້າອະນຸວົງ (ຄ.ສ. 1805–1828), ພະເຈົ້າອົງສຸດທ້າຍຂອງອານາຈັກວຽງຈັນ, ສະເຫຼີມສະຫຼອງໃນປີ 2010 ເປັນໃຈກາງຂອງສວນ.',
        },
        {
          q: 'ຮູບປັ້ນສູງປານໃດ?',
          a: 'ສູງປະມານ 8 ແມັດ, ຫຼືປະມານ 14 ແມັດລວມຕັ້ງຖານ.',
        },
        {
          q: 'ມີຄ່າບໍລິການເຂົ້າຊມຮູບປັ້ນບໍ?',
          a: 'ບໍ່ — ສວນ ແລະ ຮູບປັ້ນແມ່ນພື້ນທີ່ສາທາລະນະເປີດໂລ່ງ, ເຂົ້າຟຣີ ແລະ ເຂົ້າເຖິງໄດ້ 24 ຊົ່ວໂມງ.',
        },
        {
          q: 'ທ່າທາງຂອງຮູບປັ້ນໝາຍຊິແນໃດ?',
          a: 'ມືຂ້າງໜຶ່ງຈັບອາວດາບ ອີກຂ້າງໜຶ່ງຊີ້ຂ້າມແມ່ນ້ຳຂອງສູ່ປະເທດໄທ — ໝາຍເຖິງຄວາມເປັນອິດສະລະ, ຄວາມສຸພາບ ແລະ ຄວາມຊົດຊ້າດ.',
        },
        {
          q: 'ຜູ້ເຂົ້າຊມສາມາດຂຶ້ນຖານຮູບປັ້ນໄດ້ບໍ?',
          a: 'ບໍ່. ເຈົ້າອະນຸວົງເປັນວີລະຊົນທີ່ຮັກສາການເຄົາລົບ; ກະລຸນາຮັກສາລະຍະຫ່າງ ແລະ ຢ່າຂຶ້ນຖານຫຼືລ້ອມຮູບປັ້ນ.',
        },
      ],
      related: ['mekong-sunset', 'photos', 'night-market'],
    },
    photos: {
      title: 'ຮູບພາບສວນເຈົ້າອະນຸວົງ | ຈຸດ ແລະ ເວລາຖ່າຍທີ່ດີທີ່ສຸດ',
      description:
        'ຄູ່ມືຖ່າຍຮູບສວນເຈົ້າອະນຸວົງ — ຈຸດຖ່າຍຮູບ, ເວລາແສງສີທອງ ແລະ ແສງສີຟ້າ, ແລະສິ່ງທີ່ຄວນຖ່າຍແຄມແມ່ນ້ຳຂອງໃນວຽງຈັນ.',
      intro:
        'ຕັ້ງແຕ່ພະເຈົ້າສຳລິດໃນແສງສີທອງ ໄປຈົນຮອງຕະຫຼາດກາງຄືນ, ສວນເຈົ້າອະນຸວົງໃຫ້ທິວທັດສວຍງາມໃນທຸກແສງ.',
      sections: [
        {
          title: 'ເວລາແສງທີ່ດີທີ່ສຸດ',
          text: 'ແສງສີທອງປະມານ 17:30–18:00, ຕາເວັນຕົກດິນປະມານ 18:25, ແລະ ແສງສີຟ້າປະມານ 18:45–19:15 — ເວລາແທ້ຈະເປັນໄປຕາມລະດູ.',
        },
        {
          title: 'ຈຸດຖ່າຍຮູບທີ່ດີ',
          text: 'ຖ່າຍຮູບປັ້ນຈາກມຸມ 45° ດ້ານໜ້າເພື່ອແສງສີທອງລຸ້ມຂອບ; ຈາກຂັ້ນແກວ່ງແຄມແມ່ນ້ຳຈັບພາບສົງສະຫຼວງຂ້າງໂນງໄຂ້ ແລະການສະທ້ອນໃນນ້ຳ.',
        },
        {
          title: 'ເຄິ່ງງາຍໆ',
          text: 'ມາກ່ອນ 30 ນາທີເພື່ອຮັບບ່ອນ, ເອົາຂາແກ້ວຕິດຕົວສຳລັບຖ່າຍແສງສີຟ້າ, ແລະ ຢ່າຂຶ້ນລ້ອມເພື່ອຖ່າຍຮູບ.',
        },
      ],
      gallery: [1, 3, 7, 8, 11, 12, 9],
      faqs: [
        {
          q: 'ເວລາໃດແສງດີທີ່ສຸດສຳລັບຖ່າຍຮູບ?',
          a: 'ແສງສີທອງ (ປະມານ 17:30–18:00) ແລະ ແສງສີຟ້າ (ປະມານ 18:45–19:15) ໃຫ້ແສງອຸ່ນ ແລະ ງາມທີ່ສຸດຕໍ່ຮູບປັ້ນ ແລະ ແມ່ນ້ຳ.',
        },
        {
          q: 'ຈຸດໃດດີທີ່ສຸດສຳລັບຮູບປັ້ນ?',
          a: 'ມຸມ 45° ດ້ານໜ້າຈັບແສງຕາເວັນຕໍ້າໆໃຫ້ຂອບທອງ; ຂັ້ນແກ້ວແຄມແມ່ນ້ຳຈັບພາບແມ່ນ້ຳ ແລະ ຝັ່ງໂນງໄຂ້ຂ້າມນ້ຳ.',
        },
        {
          q: 'ຂ້ອຍໃຊ້ດຣອນຖ່າຍພາບຈາກທ້ອງຟ້າໄດ້ບໍ?',
          a: 'ບໍ່ແນະນຳຖ້າບໍ່ໄດ້ອະນຸຍາດ — ສວນຢູ່ເຂດຊາຍແດນລະຫວ່າງປະເທດແມ່ນ້ຳຂອງ ແລະ ໃກ້ບ່ອນລັດຖະບານ; ດຣອນທີ່ບໍ່ໄດ້ອະນຸຍາດເສຍຄ່າາພາບ ຫຼື ຖືກປັບໄຫມ.',
        },
        {
          q: 'ຕ້ອງເອົາຫຍັງມາຖ່າຍຮູບກາງຄືນ?',
          a: 'ຂາແກ້ວຕິດຕົວນ້ອຍ ແລະ ໂທລະສັບໃນໂຫມດກາງຄືນ (ຫຼືກ້ອງໃນ ISO ຕ່ຳ + ເປີດເວລາດົນ) ຈັບໂລງສົງສະຫຼວງໄດ້ດີທີ່ສຸດ.',
        },
      ],
      related: ['mekong-sunset', 'chao-anouvong-statue', 'night-market'],
    },
    'mekong-sunset': {
      title: 'ຕາເວັນຕົກດິນແມ່ນ້ຳຂອງສວນເຈົ້າອະນຸວົງ | ເວລາ ແລະ ຈຸດຊົມ',
      description:
        'ເວລາ ແລະ ຈຸດຊົມຕາເວັນຕົກດິນແມ່ນ້ຳຂອງຈາກສວນເຈົ້າອະນຸວົງໃນວຽງຈັນ — ເວລາແສງສີທອງ, ແສງສີຟ້າ ແລະ ເຄິ່ງຖ່າຍຮູບ.',
      intro:
        'ເມື່ອຕາເວັນຕົກດິນເບື້ອງຫຼັງຝັ່ງໂນງໄຂ້, ແມ່ນ້ຳຂອງປ່ຽນເປັນສີທອງແລ້ວກໍເປັນສີຟ້າເຂັ້ມ — ຊ່ວງເວລາທີ່ສວຍທີ່ສຸດຂອງສວນ.',
      sections: [
        {
          title: 'ຄວນມາເມື່ອໃດ',
          text: 'ມາປະມານ 17:00–17:30; ຕາເວັນມັກຕົກດິນໃກ້ 18:25 ແຕ່ເວລາຈະເປັນໄປຕາມລະດູ. ຕອນເຊົ້າຈະງຽບສະຫງົບຖ້າທ່ານບໍ່ມັກຄົນ.',
        },
        {
          title: 'ຊົມຈາກບ່ອນໃດ',
          text: 'ຂັ້ນແກ້ວແຄມແມ່ນ້ຳ ແລະ ທາງເດີນທີ່ເປີດໂລ່ງຫັນໜ້າໂນງໄຂ້ເປັນບ່ອນດີທີ່ສຸດ — ພະເຈົ້າຈະຖືກແສງທອງລຸ້ມ ແລະ ແມ່ນ້ຳກວ້າງຈະເປັນສີສະຫຼວງ.',
        },
        {
          title: 'ລະດູ ແລະ ໝອກຄວັນ',
          text: 'ພະຈັກ-ມັງກອນ ແສງຟ້າຈະໃສໂລ່ງສຸດ; ກຸມພາ-ເມສາ ອາດມີໝອກຄວັນທ້າຍລະດູ; ລະດູຝົນງາມແຕ່ຝົນຕົກ, ກະລຸນາເຊັກພະຍາກອນສົດ.',
        },
      ],
      gallery: [3, 11, 1, 12, 8],
      faqs: [
        {
          q: 'ຕາເວັນຕົກດິນກ່ຽວເວລາໃດຢູ່ສວນ?',
          a: 'ໃກ້ 18:25 ຢູ່ວຽງຈັນ ແຕ່ເວລາແທ້ຈະເປັນໄປຕາມລະດູ; ແສງສີທອງເລີ່ມປະມານ 17:30.',
        },
        {
          q: 'ຈຸດໃດຊົມຕາເວັນຕົກດິນດີທີ່ສຸດ?',
          a: 'ຂັ້ນແກ້ວແຄມແມ່ນ້ຳ ແລະ ທາງເດີນທີ່ເປີດໂລ່ງຫັນໂນງໄຂ້ຂ້າມຝັ່ງ — ທ່ານເຫັນຕາເວັນຕົກຢູ່ເບື້ອງຫຼັງຝັ່ງຕົກ.',
        },
        {
          q: 'ຕາເວັນຕົກດິນສວຍທຸກລະດູບໍ?',
          a: 'ດີທີ່ສຸດໃນລະດູແຫ້ງ (ພະຈັກ-ມັງກອນ). ກຸມພາ-ເມສາ ໝອກຄວັນອາດເຮັດໃຫ້ຟ້າເປັນສີແດງແທນທີ່ຈະເປັນທອງ; ລະດູຝົນອາດຂຸ້ມ ຫຼື ຝົນຕົກ.',
        },
        {
          q: 'ຂ້ອຍຊົມຕາເວັນຕົກຈາກຮ້ານກາເຟໄດ້ບໍ?',
          a: 'ໄດ້ — ຮ້ານອາຫານ ແລະ ກາເຟແຄມແມ່ນ້ຳຕາມຖະໜົນຟາງຸ້ມໃຫ້ທິວທັດນັ່ງໄດ້, ແຕ່ທາງເດີນແຄມແມ່ນ້ຳແມ່ນບ່ອນທີ່ນິຍົມທີ່ສຸດ.',
        },
      ],
      related: ['photos', 'chao-anouvong-statue', 'night-market'],
    },
    'night-market': {
      title: 'ຕະຫຼາດກາງຄືນວຽງຈັນເຊິງສວນເຈົ້າອະນຸວົງ | ອາຫານ ແລະ ເວລາເປີດ',
      description:
        'ຕະຫຼາດກາງຄືນວຽງຈັນຂ້າງສວນເຈົ້າອະນຸວົງ — ເວລາເປີດ, ອາຫານຕາມຖະໜົນ, ລາຄາ ແລະ ເຄິ່ງສຳລັບຄ່ຳຢູ່ແຄມແມ່ນ້ຳຂອງ.',
      intro:
        'ຫຼັງຕາເວັນຕົກ, ຫຼັງຄາແດງຂ້າງສວນຕໍ່ກັນເປັນຕະຫຼາດກາງຄືນທີ່ໃຫຍ່ທີ່ສຸດໃນວຽງຈັນ — ເຕັມໄປດ້ວຍອາຫານ, ເຄື່ອງນຸ່ງ ແລະ ຫັດຖະກຳ.',
      sections: [
        {
          title: 'ເວລາ ແລະ ບັນຍາກາດ',
          text: 'ແບ້ງເລີ່ມຕັ້ງປະມານ 17:30–18:00 ແລະ ປິດປະມານ 22:30 ທຸກໆຄຳຕາມທາງເດີນແຄມແມ່ນ້ຳ.',
        },
        {
          title: 'ອາຫານ ແລະ ເຄື່ອງດື່ມ',
          text: 'ນ້ຳຜັກຫວານ ແລະ ສະໂມທີ, ເຂົ້າໜົມປີ້ງລາວ, ໝາກຂີ້ຫນາວປີ້ງ, ແລະ ແພນເຄັກ — ສ່ວນໃຫຍ່ລາຄາປະມານ 10,000–20,000 ກີບ.',
        },
        {
          title: 'ເຄິ່ງສຳລັບຜູ້ເຂົ້າຊມ',
          text: 'ຕິດເງິນກີບລາວໃນຈຳນວນນ້ອຍ (ແທບບໍ່ໃຊ້ບັດຢູ່ແບ້ງ), ລະວັງຂອງຂອງຕົນໃນຝູງ, ແລະເຕົມເງິນຫ້ອງນ້ຳປະມານ 2,000–3,000 ກີບ.',
        },
      ],
      gallery: [4, 5, 13, 6, 9],
      faqs: [
        {
          q: 'ຕະຫຼາດກາງຄືນວຽງຈັນເປີດເວລາໃດ?',
          a: 'ແບ້ງຕັ້ງປະມານ 17:30–18:00 ແລະ ມັກປິດປະມານ 22:30 ທຸກໆຄຳ.',
        },
        {
          q: 'ການເຂົ້າຕະຫຼາດກາງຄືນເສຍຄ່າເຂົ້າບໍ?',
          a: 'ບໍ່ — ການເດີນທັດຟຣີ; ທ່ານຈ່າຍພຽງແຕ່ອາຫານ, ເຄື່ອງດື່ມ ແລະ ສິນຄ້າທີ່ຊື້.',
        },
        {
          q: 'ຮັບຈ່າຍເງິນແບບໃດ?',
          a: 'ແບ້ງສ່ວນໃຫຍ່ຮັບເງິນສົດເທົ່ານັ້ນ. ຕິດເງິນກີບລາວ; ບາງແຫ່ງຮັບບາດໄທ ຫຼື ໂດລາສະຫລະລັດ ແຕ່ໃຫ້ທອນເປັນກີບ. ແທບບໍໃຊ້ບັດ.',
        },
        {
          q: 'ຕະຫຼາດກາງຄືນປອດໄພບໍ?',
          a: 'ປອດໄພຫຼາຍ ແລະ ແສງສະຫວ່າງມີຄອບຄົວທ້ອງຖິ່ນຫຼາຍ. ເຫມືອນຝູງທົ່ວໄປ, ລະວັງກະເປົາ, ໂທລະສັບ ແລະ ປີ້ຂອງທ່ານ.',
        },
      ],
      related: ['chao-anouvong-statue', 'mekong-sunset', 'photos'],
    },
  },

  zh: {
    'chao-anouvong-statue': {
      title: '昭阿奴翁国王雕像 | 万象河畔地标',
      description:
        '昭阿奴翁公园内的青铜国王雕像——高度、寓意、历史与参观方式，老挝万象湄公河畔地标。',
      intro:
        '昭阿奴翁公园的中心矗立着一尊高大的青铜国王雕像——昭阿奴翁，万象王国末代国王，也是老挝的民族英雄。',
      sections: [
        {
          title: '雕像本身',
          text: '雕像为青铜铸造，于2010年万象建城450周年时揭幕，本体高约8米（含基座约14米），立于湄公河畔。',
        },
        {
          title: '寓意与姿态',
          text: '国王身披铠甲，一手握剑，另一手指向湄公河对岸的泰国，象征老挝的独立、尊严与对故土的怀念。',
        },
        {
          title: '参观雕像',
          text: '公园免费、全天24小时开放。建议在黄金时刻前来光线最佳；着装端庄，切勿攀爬基座或栏杆；可在祭坛献上占芭花或万寿菊编成的花环。',
        },
      ],
      gallery: [1, 2, 10, 12],
      faqs: [
        {
          q: '昭阿奴翁雕像是什么？',
          a: '为昭阿奴翁国王（1805–1828年在位）所立的青铜纪念像，万象王国末代国王，于2010年作为公园核心揭幕。',
        },
        {
          q: '雕像有多高？',
          a: '本体高约8米，含基座约14米。',
        },
        {
          q: '参观雕像要门票吗？',
          a: '不需要，公园与雕像都是完全开放的公共空间，免费且24小时可达。',
        },
        {
          q: '雕像的手势有何含义？',
          a: '一手握剑，另一手指向湄公河对岸的泰国，象征老挝的独立、尊严与对故土的记忆。',
        },
        {
          q: '游客可以爬上雕像基座吗？',
          a: '不可以。国王是受敬仰的民族英雄，请保持适当距离，切勿攀爬基座或栏杆。',
        },
      ],
      related: ['mekong-sunset', 'photos', 'night-market'],
    },
    photos: {
      title: '昭阿奴翁公园摄影 | 最佳机位与取景',
      description:
        '昭阿奴翁公园摄影指南——最佳观景机位、黄金时刻与蓝调时刻，以及万象湄公河畔值得记录的画面。',
      intro:
        '从黄金时刻的青铜国王到灯火阑珊的夜市，昭阿奴翁公园在每一种光线下都像明信片般动人。',
      sections: [
        {
          title: '最佳光线时段',
          text: '黄金时刻约17:30–18:00，日落约18:25，蓝调时刻约18:45–19:15——具体时间随季节变化。',
        },
        {
          title: '推荐机位',
          text: '从雕像正前方45°拍摄可捕捉低角度的金色轮廓；在河畔台阶可框住对岸农开(Nong Khai)的晚霞与水面倒影。',
        },
        {
          title: '实用小贴士',
          text: '提前30分钟到场占位，蓝调长曝光带轻便三脚架，切勿为取景攀爬栏杆。',
        },
      ],
      gallery: [1, 3, 7, 8, 11, 12, 9],
      faqs: [
        {
          q: '什么时候光线最适合拍照？',
          a: '黄金时刻（约17:30–18:00）与蓝调时刻（约18:45–19:15）为雕像与河面带来最温暖、最具戏剧性的光线。',
        },
        {
          q: '拍雕像最好的位置是哪里？',
          a: '45°正面角度能借低角度阳光勾出金边；河畔台阶则能框住湄公河与对岸泰国 shoreline。',
        },
        {
          q: '可以用无人机航拍吗？',
          a: '不建议在未获许可的情况下使用——公园紧邻湄公河国际边界且靠近政府区域；未经授权的无人机可能被没收或罚款。',
        },
        {
          q: '拍夜景要带什么？',
          a: '轻便旅行三脚架加手机夜景模式（或相机低ISO长曝光）最能捕捉蓝调时刻的灯笼灯光。',
        },
      ],
      related: ['mekong-sunset', 'chao-anouvong-statue', 'night-market'],
    },
    'mekong-sunset': {
      title: '湄公河日落 · 昭阿奴翁公园 | 最佳时间与观景点',
      description:
        '万象昭阿奴翁公园看湄公河日落的时间与地点——黄金时刻、蓝调时刻与拍摄建议。',
      intro:
        '当夕阳落在泰国一侧的地平线下，湄公河先染成金色、再转为深蓝——这是公园最令人称道的时刻。',
      sections: [
        {
          title: '何时前往',
          text: '约17:00–17:30到场；日落通常在18:25前后，具体随季节浮动。若喜欢清静，清晨也很安宁。',
        },
        {
          title: '何处观赏',
          text: '面朝农开(Nong Khai)的河畔台阶与开阔步道最佳——国王雕像被镶上金边，宽阔的河面泛起微光。',
        },
        {
          title: '季节与雾霾',
          text: '11月至1月天空最清澈；2月至4月后期可能有烧荒雾霾；雨季葱郁但多雨，建议查看实时预报。',
        },
      ],
      gallery: [3, 11, 1, 12, 8],
      faqs: [
        {
          q: '公园日落大约几点？',
          a: '万象约在18:25前后，但具体时间随季节变化；黄金时刻大约从17:30开始。',
        },
        {
          q: '哪里看日落最好？',
          a: '面朝对岸泰国农开的河畔台阶与步道——可以看到太阳在对岸地平线落下。',
        },
        {
          q: '一年四季日落都好看吗？',
          a: '旱季（11–1月）最佳。2–4月雾霾可能让天空偏红而非金黄；雨季则多云或降雨。',
        },
        {
          q: '可以在咖啡馆里看日落吗？',
          a: '可以——法昂路(Fa Ngum)沿线的河畔餐厅与咖啡馆提供就坐观景，但开阔步道仍是最受欢迎的位置。',
        },
      ],
      related: ['photos', 'chao-anouvong-statue', 'night-market'],
    },
    'night-market': {
      title: '昭阿奴翁公园旁 · 万象夜市 | 美食与营业时间',
      description:
        '昭阿奴翁公园旁的万象夜市——营业时间、街头美食、价格与河畔夜晚的实用建议。',
      intro:
        '日落后，公园旁红色顶棚的摊位连成一片，成为万象最大的夜市，满是美食、服饰与手工艺品。',
      sections: [
        {
          title: '营业时间与氛围',
          text: '摊位约17:30–18:00开始摆出，每晚约22:30前收摊，沿着河畔步道排开。',
        },
        {
          title: '美食与饮品',
          text: '鲜榨果汁与冰沙、老挝烤肉串、青木瓜沙拉和香蕉煎饼——多数单品约10,000–20,000基普。',
        },
        {
          title: '给游客的小贴士',
          text: '备好小面额老挝基普（摊位很少刷卡），在人群中看管好随身物品，公共厕所约2,000–3,000基普。',
        },
      ],
      gallery: [4, 5, 13, 6, 9],
      faqs: [
        {
          q: '万象夜市几点开始？',
          a: '摊位约17:30–18:00开始摆出，通常约22:30收摊，每晚皆然。',
        },
        {
          q: '进夜市要门票吗？',
          a: '不需要——逛街免费，只需为您购买的食品和商品付费。',
        },
        {
          q: '接受什么支付方式？',
          a: '多数摊位仅收现金。请备老挝基普；部分收泰铢或美元但找零为基普、汇率不利。摊位几乎无法刷卡。',
        },
        {
          q: '夜市安全吗？',
          a: '非常安全，灯光充足且有不少当地家庭。像任何人群聚集处一样，请看管好包、手机与钱包。',
        },
      ],
      related: ['chao-anouvong-statue', 'mekong-sunset', 'photos'],
    },
  },
};
