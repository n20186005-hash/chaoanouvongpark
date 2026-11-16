import type { Lang } from './ui';

export const ATTRACTION_SLUGS = ['wat-si-saket', 'ho-phra-keo', 'presidential-palace'] as const;
export type AttractionSlug = typeof ATTRACTION_SLUGS[number];

type Attraction = {
  name: string;
  tagline: string;
  description: string;
  intro: string;
  about: string;
  historical: string;
  architecture: string;
  culture: string;
  highlights: string[];
  route: string[];
  guidelines: string[];
  photoTips: string[];
  faq: { q: string; a: string }[];
};

type Venue = {
  mapQuery: string;
  address: string;
  type: string;
  visit: string;
  hours: string;
  fee: string;
  management: { en: string; lo: string; zh: string };
  image: string;
  gallery: string[];
  source: string;
};

export const VENUES: Record<AttractionSlug, Venue> = {
  'wat-si-saket': {
    mapQuery: 'Wat Si Saket Setthathirath Road Vientiane Laos',
    address: 'Setthathirath Road, Ban Sisaket, Chanthabouly, Vientiane, Laos',
    type: 'Historic Buddhist temple and cultural heritage site',
    visit: '45–75 minutes',
    hours: 'Tourism Laos lists 08:00–12:00 and 13:00–17:00, closed on public holidays; check at entrance',
    fee: 'Tourism Laos lists 30,000 LAK; reconfirm locally before visiting',
    management: {
      en: 'Wat Si Saket is a protected historic temple and heritage site. The Vientiane city cultural administration has been listed as its proprietor, while national cultural-heritage authorities oversee monument protection. It is separate from Chao Anouvong Park. Local staff control entry, visitor conduct and any current fees.',
      lo: 'ວັດສີສະເກດເປັນວັດເກົ່າ ແລະ ສະຖານທີ່ມໍລະດົກ. ໜ່ວຍງານວັດທະນະທຳຂອງນະຄອນຫຼວງເຄີຍຖືກລະບຸເປັນຜູ້ຄຸ້ມຄອງ, ແລະ ໜ່ວຍງານມໍລະດົກລະດັບຊາດມີບົດບາດປົກປ້ອງ. ວັດນີ້ບໍ່ໄດ້ເປັນສ່ວນຂອງການຈັດການສວນເຈົ້າອະນຸວົງ; ໃຫ້ຖືຕາມປະກາດຂອງຜູ້ດູແລວັດ.',
      zh: '西萨格寺是受保护的历史寺院与文化遗产。公开历史资料曾列万象市文化部门为管理主体，国家文化遗产机构负责相关保护工作。寺院不属于昭阿奴翁公园的日常管理范围；入场、参观规范和现行收费以寺院现场管理人员公告为准。',
    },
    image: '/gallery/nearby-wat-si-saket.jpg',
    gallery: ['/gallery/nearby-wat-si-saket.jpg', '/gallery/wat-si-saket-cloister.jpg', '/gallery/wat-si-saket-detail.jpg'],
    source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
  },
  'ho-phra-keo': {
    mapQuery: 'Ho Phra Keo Museum Setthathirath Road Vientiane Laos',
    address: 'Setthathirath Road, opposite Wat Si Saket, Vientiane, Laos',
    type: 'Former royal Buddhist temple and heritage museum',
    visit: '30–60 minutes',
    hours: 'Museum access is subject to posted visiting hours; check on site',
    fee: 'Museum admission may apply; confirm the current amount on site',
    management: {
      en: 'Ho Phra Keo is a historic former royal temple now used as a cultural heritage museum. Its conservation and visitor access belong to the relevant Lao cultural-heritage authorities, not the city park. Consult the entrance notice for the current operating unit and admission rules.',
      lo: 'ຫໍພະແກ້ວເປັນອາຄານອະດີດວັດຫຼວງ ແລະ ສະຖານທີ່ມໍລະດົກ. ການອະນຸລັກ ແລະ ການເຂົ້າຊົມຂຶ້ນກັບໜ່ວຍງານວັດທະນະທຳທີ່ກ່ຽວຂ້ອງ, ບໍ່ແມ່ນຜູ້ຈັດການສວນແຄມຂອງ. ກວດປະກາດຢູ່ປະຕູກ່ອນເຂົ້າ.',
      zh: '玉佛寺原为王室寺院，现作为文化遗产参观场所。其维护、文物保护与入场管理归相关老挝文化遗产机构处理，不归河滨公园管理。具体运营单位、开放时间和票价应现场核实。',
    },
    image: '/gallery/nearby-ho-phra-keo.jpg',
    gallery: ['/gallery/ho-phra-keo-exterior.jpg', '/gallery/nearby-ho-phra-keo.jpg', '/gallery/ho-phra-keo-museum.jpg'],
    source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
  },
  'presidential-palace': {
    mapQuery: 'Presidential Palace Lane Xang Avenue Vientiane Laos',
    address: 'Lane Xang Avenue at Setthathirath Road, Vientiane, Laos',
    type: 'Government ceremonial building; exterior landmark',
    visit: '10–20 minutes for an exterior view',
    hours: 'Not a regular public walk-in attraction; exterior viewing from permitted public areas',
    fee: 'No ticket for viewing from public streets; interior tours are not assumed available',
    management: {
      en: 'The Presidential Palace is a Lao state building used for official purposes. Its access and security arrangements are determined by the relevant government authorities, not by the management of Chao Anouvong Park. Treat the visit as an exterior architectural stop and respect restricted areas.',
      lo: 'ຫໍຄຳປະທານປະເທດເປັນອາຄານຂອງລັດໃຊ້ໃນວຽກທາງການ. ການເຂົ້າເຖິງ ແລະ ຄວາມປອດໄພຂຶ້ນກັບໜ່ວຍງານລັດ, ບໍ່ແມ່ນຜູ້ດູແລສວນ. ຄວນຊົມດ້ານນອກຈາກຈຸດສາທາລະນະທີ່ອະນຸຍາດ.',
      zh: '主席府是老挝国家公务及礼仪用途建筑。其出入和安全管理由相关政府机构负责，不属于昭阿奴翁公园的管理范围。游客宜将其作为建筑外观观赏点，从允许停留的公共区域欣赏并遵守安保要求。',
    },
    image: '/gallery/nearby-presidential-palace.jpg',
    gallery: ['/gallery/nearby-presidential-palace.jpg', '/gallery/presidential-palace-view.jpg'],
    source: 'https://www.visitlaos.org/explore-laos/vientiane/',
  },
};

export const ATTRACTIONS: Record<Lang, Record<AttractionSlug, Attraction>> = {
  en: {
    'wat-si-saket': {
      name: 'Wat Si Saket', tagline: 'Vientiane’s historic cloister of Buddha images', description: 'Wat Si Saket visitor guide: architecture, King Anouvong history, opening hours, entry fee, walking route and Google Maps location in Vientiane.',
      intro: 'On Setthathirath Road, Wat Si Saket offers one of the most revealing encounters with Vientiane’s early nineteenth-century history. The temple is best known for an enclosed gallery filled with Buddha images and an ordination hall with layered roofs.',
      about: 'Wat Si Saket was established during King Anouvong’s reign, traditionally dated to 1818. Unlike much of Vientiane damaged during the Siamese campaign of 1827–1828, the monastery survived. Its architecture is a visible connection between Lao court history, Buddhist devotion and regional artistic exchange.',
      historical: 'Read the site as a survivor of the Vientiane Kingdom rather than as an isolated photo stop. The monastery underwent later conservation work; its historic surfaces and fragments help tell the story of the city before and after the nineteenth-century conflict.',
      architecture: 'Look for the enclosed cloister with niches of small Buddha images, the multi-tiered roof and the ordination hall, or sim. The repetition of niches creates a striking rhythm of light and shadow. Avoid touching fragile murals, sculpture or carved details.',
      culture: 'The temple is both a place of Buddhist heritage and a cultural collection. Speak softly, dress respectfully, and observe any separate rules for worship areas and museum rooms.',
      highlights: ['Buddha-image niches within the cloister', 'Layered roof and exterior proportions of the sim', 'Courtyard and gateway relationship to the historic street', 'Details of surviving mural and sculptural decoration'],
      route: ['Enter from the Setthathirath Road side and read the posted visitor rules.', 'Circle the courtyard slowly to understand the cloister layout.', 'Observe the ordination hall roofline and Buddha niches without touching historic surfaces.', 'Continue across the street to Ho Phra Keo, then toward the palace exterior and riverfront.'],
      guidelines: ['Cover shoulders and knees and remove shoes where instructed.', 'Check opening periods and admission at the entrance.', 'Avoid flash or photography wherever a sign restricts it.', 'Carry water; do not lean on delicate heritage walls.'],
      photoTips: ['Frame the repeating cloister niches from a permitted aisle.', 'Use side light on the roof edge and gateway.', 'Capture a courtyard-wide image before studying details.'],
      faq: [{ q: 'Why is Wat Si Saket important?', a: 'It preserves an early nineteenth-century temple complex associated with King Anouvong and is notable for surviving much of the destruction of Vientiane.' }, { q: 'How long should I stay?', a: 'Allow around 45–75 minutes for the cloister, temple exterior and careful observation.' }, { q: 'Can I walk to Ho Phra Keo?', a: 'Yes. The two historic sites face each other across Setthathirath Road; use the marked crossing and watch traffic.' }],
    },
    'ho-phra-keo': {
      name: 'Ho Phra Keo', tagline: 'Former royal temple and Lao art landmark', description: 'Ho Phra Keo Vientiane guide: royal temple history, architectural carvings, visitor tips, nearby sights and separate Google Maps directions.',
      intro: 'Facing Wat Si Saket in central Vientiane, Ho Phra Keo is a historic former royal temple. Its elegant steep roof, ornamented portals and religious artworks make it a strong complement to the neighboring cloister.',
      about: 'The original temple was established in the sixteenth century during the reign of Setthathirath to house the Emerald Buddha. That image was later taken to Siam; the historic site experienced destruction and reconstruction. Today visitors encounter a restored architectural setting and museum heritage.',
      historical: 'The story of Ho Phra Keo follows the movement of royal power and sacred objects between Lan Xang, Vientiane and Siam. Its present appearance is not an untouched sixteenth-century building, so distinguish the original foundation from later restoration.',
      architecture: 'Study the sweeping multi-tiered roof, sculpted doorway surrounds, terrace and standing Buddha images. The carved portal is especially photogenic when viewed from an angle that reveals the relief rather than flattening it head-on.',
      culture: 'This is a place to consider the cultural history of sacred images, not merely a palace-style backdrop. Interior photography or museum rules may differ from outdoor viewing rules.',
      highlights: ['Ornamental carved doorway and columns', 'Tiered Lao temple roof and raised terrace', 'Buddhist sculptures in the museum setting', 'Visual relationship with Wat Si Saket opposite'],
      route: ['Approach the building from its public entrance on Setthathirath Road.', 'Observe the full roof and terrace from the forecourt.', 'Study carvings and artworks in permitted visitor zones.', 'Cross to Wat Si Saket or continue toward the Presidential Palace exterior.'],
      guidelines: ['Verify current museum admission and operating hours at the entrance.', 'Follow dress and shoe-removal requirements.', 'Respect restrictions on interior photography.', 'Do not touch displayed sculptures or historic surfaces.'],
      photoTips: ['Use an oblique angle to show carved portal depth.', 'Include the roof layers from the courtyard.', 'Photograph details without flash where permitted.'],
      faq: [{ q: 'Is the Emerald Buddha still here?', a: 'No. The historic Emerald Buddha is in Bangkok; the Vientiane site is valued for its own architecture and cultural collection.' }, { q: 'Is Ho Phra Keo a functioning temple?', a: 'It is generally presented to visitors as a former royal temple and heritage museum; check current arrangements locally.' }, { q: 'What should I visit next?', a: 'Wat Si Saket is opposite, and the Presidential Palace exterior and Chao Anouvong Park can be added to a central Vientiane walk.' }],
    },
    'presidential-palace': {
      name: 'Presidential Palace, Vientiane', tagline: 'A formal civic landmark seen from the street', description: 'How to view the Presidential Palace in Vientiane responsibly: exterior architecture, location, nearby Wat Si Saket and Ho Phra Keo, walking route and visitor rules.',
      intro: 'At a prominent central intersection, the Presidential Palace stands behind formal landscaping and controlled grounds. The interest for most travelers is its stately exterior and its position between the historic temple district and the Mekong riverside.',
      about: 'The palace is associated with national official and ceremonial functions. Because it is a government building rather than a public museum, it should be described as an exterior sightseeing stop, not as an attraction offering routine entrance tickets or interior tours.',
      historical: 'The building reflects the transformation of Vientiane into the capital of a modern state. Its formal setting is different from the religious heritage of nearby temples and from the informal public life of the riverfront.',
      architecture: 'Notice the symmetric facade, broad roofline, ordered columns and garden axis. A wider street-level perspective better conveys its scale and official character than a close-up from restricted boundaries.',
      culture: 'Government buildings have a different role from visitor venues. Respect security staff, public barriers and local rules about stopping or photographing near entrances.',
      highlights: ['Symmetrical facade and formal architectural rhythm', 'Landscaped approach and civic setting', 'Relationship with Lane Xang Avenue', 'Contrast with adjacent religious and riverside landmarks'],
      route: ['Approach on public sidewalks near Lane Xang and Setthathirath.', 'Find a permitted exterior viewpoint without obstructing gates or traffic.', 'Continue to Wat Si Saket and Ho Phra Keo for cultural visits.', 'Finish at Chao Anouvong Park for the Mekong promenade.'],
      guidelines: ['Do not attempt to enter controlled grounds without an invitation or authorization.', 'Follow instructions from security personnel.', 'Avoid drones and restricted-angle photography.', 'Keep clear of driveway entrances and roadway traffic.'],
      photoTips: ['Use a wider lens from a permitted public sidewalk to show the full facade.', 'Look for a balanced, front-facing composition without crossing barriers.', 'Photograph in daylight to preserve architectural detail.'],
      faq: [{ q: 'Can tourists go inside the Presidential Palace?', a: 'Do not assume regular public access. It is a state building; plan for an exterior view only unless officially authorized.' }, { q: 'Is there an admission fee?', a: 'Viewing from a public street has no palace admission ticket. This does not imply access to the grounds.' }, { q: 'What can I combine it with?', a: 'Wat Si Saket, Ho Phra Keo and Chao Anouvong Park form a practical central Vientiane sightseeing cluster.' }],
    },
  },
  lo: {
    'wat-si-saket': {
      name: 'ວັດສີສະເກດ', tagline: 'ວັດເກົ່າກັບລະບຽງພະພຸດທະຮູບໃນວຽງຈັນ', description: 'ຄູ່ມືວັດສີສະເກດ: ປະຫວັດ, ສະຖາປັດຕະຍະກຳ, ເວລາ, ຄ່າເຂົ້າ, ເສັ້ນທາງ ແລະ ແຜນທີ່.',
      intro: 'ວັດສີສະເກດຕັ້ງຢູ່ຖະໜົນເສດຖາທິລາດ ແລະ ເປັນສະຖານທີ່ສຳຄັນສຳລັບຮຽນຮູ້ປະຫວັດວຽງຈັນໃນຕົ້ນສະຕະວັດທີ 19. ລະບຽງພະພຸດທະຮູບ ແລະ ຫຼັງຄາວັດເປັນຈຸດເດັ່ນ.',
      about: 'ວັດສີສະເກດສ້າງໃນສະໄໝເຈົ້າອະນຸວົງ ປະມານປີ 1818. ວັດນີ້ລອດພົ້ນຈາກການທຳລາຍຫຼາຍສ່ວນຂອງວຽງຈັນໃນປີ 1827–1828 ແລະ ເປັນມໍລະດົກສຳຄັນ.',
      historical: 'ການຢ້ຽມຊົມຊ່ວຍໃຫ້ເຫັນປະຫວັດອານາຈັກວຽງຈັນ ແລະ ຮ່ອງຮອຍການອະນຸລັກໃນຍຸກຕໍ່ມາ. ຄວນສັງເກດອາຄານ ແລະ ສິລະປະຢ່າງລະມັດລະວັງ.',
      architecture: 'ສັງເກດລະບຽງທີ່ມີຊ່ອງພະພຸດທະຮູບ, ຫຼັງຄາຫຼາຍຊັ້ນ ແລະ ພະອຸໂບສົດ. ແສງທີ່ຜ່ານລະບຽງເຮັດໃຫ້ເກີດເງົາງາມ.',
      culture: 'ວັດເປັນມໍລະດົກພຸດທະສາສະໜາ. ແຕ່ງກາຍສຸພາບ, ບໍ່ສົ່ງສຽງດັງ ແລະ ເຄົາລົບຂໍ້ຫ້າມໃນອາຄານ.',
      highlights: ['ຊ່ອງພະພຸດທະຮູບໃນລະບຽງ', 'ຫຼັງຄາຫຼາຍຊັ້ນຂອງສິມ', 'ລານວັດ ແລະ ປະຕູ', 'ລວດລາຍສິລະປະທີ່ຍັງເຫຼືອ'],
      route: ['ເຂົ້າຈາກຖະໜົນເສດຖາທິລາດ ແລະ ອ່ານປະກາດ.', 'ຍ່າງຊົມລານ ແລະ ລະບຽງ.', 'ສັງເກດຫຼັງຄາສິມ ແລະ ຮູບພະ.', 'ຂ້າມຖະໜົນໄປຫໍພະແກ້ວ ແລ້ວໄປທາງແຄມຂອງ.'],
      guidelines: ['ແຕ່ງກາຍປົກປິດບ່າ ແລະ ຫົວເຂົ່າ.', 'ກວດເວລາ ແລະ ຄ່າເຂົ້າຢູ່ປະຕູ.', 'ບໍ່ໃຊ້ແຟລຊຖ້າມີຂໍ້ຫ້າມ.', 'ຫ້າມຈັບຝາຜະໜັງ ຫຼື ຮູບປັ້ນເກົ່າ.'],
      photoTips: ['ຖ່າຍແຖວຊ່ອງພະຈາກລະບຽງທີ່ອະນຸຍາດ.', 'ໃຊ້ແສງຂ້າງເພື່ອເນັ້ນຫຼັງຄາ.', 'ຖ່າຍພາບກວ້າງຂອງລານວັດ.'],
      faq: [{ q: 'ວັດສີສະເກດສຳຄັນແນວໃດ?', a: 'ເປັນວັດເກົ່າສະໄໝເຈົ້າອະນຸວົງ ແລະ ລອດພົ້ນຈາກການທຳລາຍເມືອງຫຼາຍສ່ວນ.' }, { q: 'ຄວນຢູ່ຈັກນາທີ?', a: 'ປະມານ 45–75 ນາທີ.' }, { q: 'ໄປຫໍພະແກ້ວດ້ວຍການຍ່າງໄດ້ບໍ?', a: 'ໄດ້. ສອງສະຖານທີ່ຢູ່ຄົນລະຝັ່ງຖະໜົນ; ລະວັງການຈະລາຈອນ.' }],
    },
    'ho-phra-keo': {
      name: 'ຫໍພະແກ້ວ', tagline: 'ອະດີດວັດຫຼວງ ແລະ ສິລະປະລາວ', description: 'ຄູ່ມືຫໍພະແກ້ວວຽງຈັນ: ປະຫວັດ, ສິລະປະ, ເວລາ, ເສັ້ນທາງ ແລະ ແຜນທີ່.',
      intro: 'ຫໍພະແກ້ວຕັ້ງຢູ່ກົງຂ້າມວັດສີສະເກດ ເປັນອະດີດວັດຫຼວງທີ່ມີຫຼັງຄາງາມ, ປະຕູແກະສະຫຼັກ ແລະ ສິລະປະພຸດທະສາສະໜາ.',
      about: 'ວັດເດີມສ້າງໃນສະຕະວັດທີ 16 ສະໄໝພະເຈົ້າໄຊເສດຖາທິລາດ ເພື່ອປະດິດສະຖານພະແກ້ວມໍລະກົດ. ຕໍ່ມາພະແກ້ວຖືກຍ້າຍໄປສະຫຍາມ; ອາຄານໄດ້ຜ່ານການທຳລາຍ ແລະ ຟື້ນຟູ.',
      historical: 'ປະຫວັດຂອງຫໍພະແກ້ວສະທ້ອນຄວາມສຳພັນຂອງລ້ານຊ້າງ, ວຽງຈັນ ແລະ ສະຫຍາມ. ອາຄານທີ່ເຫັນປັດຈຸບັນມີການຟື້ນຟູ ບໍ່ແມ່ນອາຄານເດີມທັງໝົດ.',
      architecture: 'ເບິ່ງຫຼັງຄາຊ້ອນຊັ້ນ, ປະຕູແກະສະຫຼັກ, ລະບຽງ ແລະ ຮູບພະພຸດທະຮູບ. ມຸມຂ້າງເຮັດໃຫ້ເຫັນຄວາມເລິກຂອງລວດລາຍ.',
      culture: 'ບ່ອນນີ້ເໝາະສຳລັບຮຽນຮູ້ປະຫວັດຂອງພະພຸດທະຮູບ ແລະ ສິລະປະລາວ. ກົດການຖ່າຍຮູບພາຍໃນອາດແຕກຕ່າງຈາກພາຍນອກ.',
      highlights: ['ປະຕູ ແລະ ເສົາແກະສະຫຼັກ', 'ຫຼັງຄາລາວຫຼາຍຊັ້ນ', 'ພະພຸດທະຮູບພາຍໃນ', 'ວັດສີສະເກດກົງຂ້າມ'],
      route: ['ເຂົ້າຈາກຖະໜົນເສດຖາທິລາດ.', 'ເບິ່ງຫຼັງຄາ ແລະ ລະບຽງຈາກລານ.', 'ສັງເກດລວດລາຍ ແລະ ສິລະປະໃນຈຸດທີ່ອະນຸຍາດ.', 'ໄປວັດສີສະເກດ ຫຼື ຫໍຄຳປະທານປະເທດຕໍ່.'],
      guidelines: ['ກວດຄ່າເຂົ້າ ແລະ ເວລາເປີດ.', 'ແຕ່ງກາຍສຸພາບ ແລະ ຖອດເກີບຕາມປະກາດ.', 'ເຄົາລົບຂໍ້ຫ້າມການຖ່າຍຮູບ.', 'ຫ້າມຈັບຮູບປັ້ນ ຫຼື ຝາເກົ່າ.'],
      photoTips: ['ຖ່າຍປະຕູຈາກມຸມສະຫຼຽງ.', 'ໃຫ້ເຫັນຫຼັງຄາຫຼາຍຊັ້ນ.', 'ບໍ່ໃຊ້ແຟລຊໃນບ່ອນຫ້າມ.'],
      faq: [{ q: 'ພະແກ້ວມໍລະກົດຍັງຢູ່ບໍ?', a: 'ບໍ່. ພະແກ້ວມໍລະກົດປະດິດສະຖານຢູ່ບາງກອກ.' }, { q: 'ບ່ອນນີ້ເປັນວັດທີ່ໃຊ້ປະຈຳບໍ?', a: 'ໂດຍທົ່ວໄປເປັນອະດີດວັດ ແລະ ບ່ອນສະແດງມໍລະດົກ; ກວດສະພາບປັດຈຸບັນຢູ່ສະຖານທີ່.' }, { q: 'ຄວນໄປບ່ອນໃດຕໍ່?', a: 'ວັດສີສະເກດຢູ່ກົງຂ້າມ; ສາມາດໄປຫໍຄຳ ແລະ ສວນເຈົ້າອະນຸວົງຕໍ່.' }],
    },
    'presidential-palace': {
      name: 'ຫໍຄຳປະທານປະເທດ ວຽງຈັນ', tagline: 'ອາຄານລັດທີ່ຊົມໄດ້ຈາກດ້ານນອກ', description: 'ຄູ່ມືຊົມຫໍຄຳປະທານປະເທດ: ສະຖາປັດຕະຍະກຳ, ການເຂົ້າເຖິງ, ຈຸດຖ່າຍຮູບ ແລະ ແຜນທີ່.',
      intro: 'ຫໍຄຳປະທານປະເທດຢູ່ໃຈກາງວຽງຈັນ ມີອາຄານຮູບແບບສົມມາດ ແລະ ສວນທາງໜ້າ. ນັກທ່ອງທ່ຽວຄວນຊົມຈາກຈຸດສາທາລະນະທີ່ອະນຸຍາດ.',
      about: 'ອາຄານນີ້ໃຊ້ໃນວຽກທາງການ ແລະ ພິທີການຂອງລັດ. ບໍ່ຄວນວາງແຜນເຂົ້າຊົມພາຍໃນເຊັ່ນພິພິທະພັນ.',
      historical: 'ຫໍຄຳເປັນສ່ວນໜຶ່ງຂອງພາບລັກສະນະນະຄອນຫຼວງສະໄໝໃໝ່ ແລະ ແຕກຕ່າງຈາກວັດເກົ່າໃກ້ຄຽງ.',
      architecture: 'ສັງເກດດ້ານໜ້າທີ່ສົມມາດ, ເສົາ, ຫຼັງຄາ ແລະ ແນວສວນ. ພາບກວ້າງຈາກທາງສາທາລະນະເຫັນຮູບຊົງອາຄານໄດ້ດີ.',
      culture: 'ອາຄານລັດມີບົດບາດຕ່າງຈາກສະຖານທີ່ທ່ອງທ່ຽວ. ຕ້ອງເຄົາລົບເຈົ້າໜ້າທີ່ຮັກສາຄວາມປອດໄພ.',
      highlights: ['ດ້ານໜ້າອາຄານທີ່ສົມມາດ', 'ສວນ ແລະ ແນວທາງເຂົ້າ', 'ທິວທັດຖະໜົນລ້ານຊ້າງ', 'ຄວາມແຕກຕ່າງກັບວັດໃກ້ຄຽງ'],
      route: ['ຍ່າງມາຕາມທາງສາທາລະນະ.', 'ຊົມອາຄານຈາກຈຸດທີ່ອະນຸຍາດ.', 'ໄປວັດສີສະເກດ ແລະ ຫໍພະແກ້ວ.', 'ຕໍ່ໄປສວນເຈົ້າອະນຸວົງແຄມຂອງ.'],
      guidelines: ['ຫ້າມເຂົ້າພື້ນທີ່ຄວບຄຸມໂດຍບໍ່ມີອະນຸຍາດ.', 'ປະຕິບັດຕາມຄຳແນະນຳເຈົ້າໜ້າທີ່.', 'ບໍ່ໃຊ້ໂດຣນ ຫຼື ຖ່າຍຮູບໃນມຸມຕ້ອງຫ້າມ.', 'ບໍ່ກີດຂວາງປະຕູລົດ ແລະ ຖະໜົນ.'],
      photoTips: ['ຖ່າຍພາບກວ້າງຈາກທາງສາທາລະນະ.', 'ຈັດພາບໃຫ້ເຫັນດ້ານໜ້າສົມມາດ.', 'ໃຊ້ແສງກາງວັນເນັ້ນລາຍລະອຽດ.'],
      faq: [{ q: 'ນັກທ່ອງທ່ຽວເຂົ້າພາຍໃນໄດ້ບໍ?', a: 'ບໍ່ຄວນຄາດວ່າມີການເຂົ້າຊົມທົ່ວໄປ. ວາງແຜນຊົມດ້ານນອກ.' }, { q: 'ມີຄ່າເຂົ້າບໍ?', a: 'ຊົມຈາກຖະໜົນສາທາລະນະບໍ່ມີປີ້ເຂົ້າອາຄານ.' }, { q: 'ຄວນລວມກັບບ່ອນໃດ?', a: 'ວັດສີສະເກດ, ຫໍພະແກ້ວ ແລະ ສວນເຈົ້າອະນຸວົງ.' }],
    },
  },
  zh: {
    'wat-si-saket': {
      name: '西萨格寺（Wat Si Saket）', tagline: '万象历史佛像回廊与阿奴翁王时代遗产', description: '西萨格寺游览指南：具体地址、开放时间、门票、历史与建筑特色、拍照机位、步行路线和 Google 地图导航。',
      intro: '西萨格寺坐落于万象市中心 Setthathirath 路，是了解19世纪初万象王国历史的重点景点。寺院以围绕庭院的佛像回廊、层叠屋顶与古老的戒堂闻名，适合与对面的玉佛寺安排在同一个上午。',
      about: '西萨格寺建于阿奴翁王统治时期，通常记载为1818年。1827—1828年暹罗军队进攻万象时，城市许多建筑遭到破坏，寺院却保存下来。如今这里兼具佛教文化遗产、历史建筑及艺术观赏价值，值得放慢脚步了解。',
      historical: '寺院承载了万象王国最后时期的历史记忆。回廊中众多佛像及不同时期的修复痕迹，提供了理解19世纪战乱前后万象城市变迁的线索；不宜只把它当作拍照背景。',
      architecture: '建筑最鲜明的特征是回廊壁龛中密集的小型佛像、层叠的佛寺屋顶与中心戒堂（sim）。从庭院侧面观察，屋檐、柱列与佛像壁龛会形成层次丰富的光影。注意壁画与雕塑表面较脆弱。',
      culture: '这里既是佛教传统的见证，也是重要的历史文化场所。参观时应保持安静，遵从服装、脱鞋与摄影告示，尊重宗教空间和当地游客。',
      highlights: ['回廊中重复排列的佛像壁龛', '戒堂层叠屋顶与柱列比例', '庭院、古老入口与街道的关系', '壁画及装饰细节的保存痕迹'],
      route: ['从 Setthathirath 路入口进入，先了解当日参观规定。', '沿庭院缓慢行走，观察回廊佛像与空间布局。', '从允许停留的位置欣赏戒堂屋顶、墙面与柱列。', '出寺后前往街对面的玉佛寺，再接续主席府外观和河滨公园。'],
      guidelines: ['穿着遮盖肩膀与膝盖的服装，并遵从脱鞋提示。', '门票及当日开放时段以入口公告为准。', '禁止摄影的区域不要使用闪光灯或拍摄。', '不触摸古老壁画、佛像或墙面。'],
      photoTips: ['从允许的走道拍摄佛像壁龛的重复透视。', '利用侧光突显寺院屋顶与柱列。', '先拍摄庭院全景，再捕捉小型建筑细节。'],
      faq: [{ q: '为什么西萨格寺重要？', a: '它是阿奴翁王时代的寺院遗产，也是少数在19世纪万象遭到严重破坏后保存下来的历史建筑之一。' }, { q: '建议参观多久？', a: '建议45—75分钟，兼顾回廊、寺院外观和历史细节。' }, { q: '可以步行去玉佛寺吗？', a: '可以。两处景点隔着 Setthathirath 路相望，过街时请注意车辆。' }],
    },
    'ho-phra-keo': {
      name: '玉佛寺（Ho Phra Keo）', tagline: '万象昔日王室寺院与老挝宗教艺术', description: '万象玉佛寺完整游览指南：王室历史、雕刻与屋顶特色、开放与门票、参观路线、拍摄建议及 Google 地图。',
      intro: '玉佛寺位于西萨格寺对面，是万象中心城区极具代表性的前王室寺院建筑。高耸的多层屋顶、雕刻精致的门框与佛教艺术品，让它与附近西萨格寺构成一条紧凑的历史文化路线。',
      about: '玉佛寺最早由赛塔提拉王于16世纪兴建，曾用于供奉翡翠佛。翡翠佛后来被带往暹罗，现供奉于曼谷。寺院经历战乱与后期重建，如今所见并非完整保留的16世纪原建筑，应区别原址历史与现存建筑年代。',
      historical: '这里的历史反映了澜沧王国、万象与暹罗之间的王权和宗教文物流转。它既与老挝皇家传统相关，也体现不同历史时期的修复和保护。',
      architecture: '重点看层叠下垂的传统屋顶、雕刻繁复的门框、石阶与露台，以及庭院和展示区中的佛像。观察门廊时可从斜侧面构图，表现木石雕刻的深度与轮廓。',
      culture: '这里适合学习佛教圣像、皇家礼仪和建筑艺术的历史，而非只看金色装饰。内部展示空间与室外庭院的摄影规定可能不同，进入前应阅读标识。',
      highlights: ['雕刻精致的门框与立柱', '老挝传统的多层屋顶', '与佛教艺术相关的雕塑陈列', '与街对面西萨格寺的空间关系'],
      route: ['从 Setthathirath 路公共入口进入。', '在前庭欣赏整个建筑的屋顶与抬高的台基。', '参观允许进入的展厅和外廊，仔细观察雕刻。', '接着到西萨格寺或前往主席府外围。'],
      guidelines: ['在入口核对现行开放时间与票价。', '穿着得体，遵守脱鞋规定。', '室内摄影及闪光灯限制以现场标识为准。', '不要触碰文物和古老装饰表面。'],
      photoTips: ['从斜角拍摄门框雕刻，表现立体层次。', '从前庭展示屋顶的层叠线条。', '允许摄影时尽量使用自然光，不用闪光灯。'],
      faq: [{ q: '翡翠佛还在玉佛寺吗？', a: '不在。历史上的翡翠佛现供奉于曼谷；万象玉佛寺仍以建筑与文化遗产值得参观。' }, { q: '现在还是开放的宗教寺院吗？', a: '通常作为前王室寺院和文化遗产展示场所介绍，实际开放与参观安排以现场为准。' }, { q: '附近还有什么可参观？', a: '街对面是西萨格寺，还可以步行欣赏主席府外观并前往昭阿奴翁公园。' }],
    },
    'presidential-palace': {
      name: '万象主席府（Presidential Palace）', tagline: '老挝首都市中心的庄严市政地标', description: '万象主席府外观游览指南：具体位置、建筑特点、观赏视角、附近寺院、步行路线与 Google 地图。',
      intro: '万象主席府位于市中心重要道路交汇处，正式的建筑立面与整齐的绿化轴线格外醒目。对普通游客来说，这里更适合作为从西萨格寺、玉佛寺走向湄公河时的一处建筑外观观察点。',
      about: '主席府与国家公务及礼仪活动相关，不是常规开放的博物馆。参观计划应以从允许的公共人行道欣赏建筑外观为主，不应假设可以购买门票进入庭院或室内。',
      historical: '作为现代国家机构建筑，主席府展现了万象由历史王都发展为当代首都的另一个面向。它与周边古寺及民众聚集的河滨公园形成鲜明对比。',
      architecture: '观察对称的正立面、柱列、宽阔屋顶与园林中轴线。与近距离细节照相比，从允许的街道位置拍摄整体建筑，更容易呈现其庄严的规模与城市位置。',
      culture: '国家公务建筑与旅游景点有不同的使用性质。应尊重警卫指示、道路边界和相关摄影规定，不阻挡车辆及人员通行。',
      highlights: ['对称的主立面与柱列秩序', '庭院绿化和正式的入口轴线', '与 Lane Xang 大道的城市关系', '附近寺院与现代公务建筑的对照'],
      route: ['沿合法公共人行道抵达 Lane Xang 与 Setthathirath 路周边。', '从允许停留的位置欣赏建筑正立面，不靠近受限入口。', '步行前往西萨格寺和玉佛寺参观历史文化建筑。', '最后到昭阿奴翁公园欣赏湄公河风景。'],
      guidelines: ['未经授权不要进入管制区域。', '听从现场安保人员指示。', '不要使用无人机，也不要拍摄明确禁止的角度。', '不阻挡车辆入口和道路交通。'],
      photoTips: ['从合法人行道使用广角拍摄完整立面。', '利用建筑轴线构成平衡的正面画面。', '白天拍摄能更清楚呈现屋顶和柱列细节。'],
      faq: [{ q: '普通游客能进入万象主席府吗？', a: '不应假设可以自由入内。这里是公务建筑，通常应按外观景点规划，除非获得官方许可。' }, { q: '参观主席府需要门票吗？', a: '从公共街道欣赏外观无需购买建筑门票，但这不代表可以进入院内。' }, { q: '附近哪些景点可以连游？', a: '可与西萨格寺、玉佛寺和昭阿奴翁公园组成市中心步行路线。' }],
    },
  },
};
