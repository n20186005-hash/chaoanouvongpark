import type { Lang } from './ui';
import { ATTRACTION_PROFILES } from './attractionProfiles';
import { PHOTO_SUBJECTS } from './photoSubjects';

/**
 * Distinct Vientiane places, not duplicate aliases or generic itineraries.
 * Each entry carries an individual map search query and a location-specific
 * fact in all three site languages. Photos are assigned only after matching
 * the Commons photograph to the named venue.
 */
type Entry = {
  slug: string; en: string; lo: string; zh: string; address: string;
  kind: 'temple' | 'monument' | 'museum' | 'market' | 'public' | 'transport';
  enFact: string; loFact: string; zhFact: string;
  image?: string; source?: string; photoCredit?: string;
};

const entries: Entry[] = [
  {slug:'patuxai',en:'Patuxai Victory Monument',lo:'ປະຕູໄຊ',zh:'凯旋门（Patuxai）',address:'Lane Xang Avenue, Vientiane, Laos',kind:'monument',
   enFact:'This monumental arch was built in the twentieth century as a memorial. Lao-inspired roof ornament crowns an axial city landmark.',loFact:'ປະຕູໄຊເປັນອະນຸສອນສະຖານສະຕະວັດທີ 20 ຢູ່ແກນຖະໜົນລ້ານຊ້າງ ແລະ ມີລວດລາຍສິລະປະລາວ.',zhFact:'凯旋门建于20世纪，坐落在澜沧大道的城市轴线上，拱门形式与老挝传统屋顶装饰相结合。',image:'Vientiane-Patu Xay-10-Allee-gje.jpg'},
  {slug:'pha-that-luang',en:'Pha That Luang',lo:'ພະທາດຫຼວງ',zh:'塔銮（Pha That Luang）',address:'That Luang Road, Xaysettha District, Vientiane, Laos',kind:'monument',
   enFact:'The golden stupa is a nationally significant Buddhist monument, rebuilt and restored across several periods; its annual festival attracts Lao devotees.',loFact:'ພະທາດຫຼວງເປັນພຸດທະສະຖານສຳຄັນຂອງຊາດ ມີການບູລະນະຫຼາຍຍຸກ ແລະ ມີງານບຸນປະຈຳປີ.',zhFact:'金色塔銮是老挝重要的佛教象征，历史上多次修复，塔銮节也是当地重要的宗教活动。',image:'Vientiane - Pha That Luang - 0001.jpg'},
  {slug:'wat-si-muang',en:'Wat Si Muang',lo:'ວັດສີເມືອງ',zh:'西孟寺',address:'Rue Bourichane, Vientiane, Laos',kind:'temple',
   enFact:'This active city temple is associated with a protective city-spirit tradition; visitors encounter prayer, offerings and a busy devotional courtyard.',loFact:'ວັດສີເມືອງເປັນວັດທີ່ຍັງມີພິທີກຳ ແລະ ຜູກພັນກັບຄວາມເຊື່ອເສົາຫຼັກເມືອງ.',zhFact:'西孟寺与万象城市守护神及城柱信仰有关，至今仍有信众祈祷、供奉，参观时需尊重宗教活动。',image:'Wat Si Muang 2020 - 1.jpg'},
  {slug:'that-dam',en:'That Dam (Black Stupa)',lo:'ທາດດຳ',zh:'黑塔（That Dam）',address:'Rue Bartholonie, Vientiane, Laos',kind:'monument',
   enFact:'The weathered brick stupa sits within an urban traffic circle; its dark patina and local legends contrast with Vientiane’s gilded temples.',loFact:'ທາດດຳເປັນທາດອິດເກົ່າຢູ່ກາງເມືອງ ມີຕຳນານທ້ອງຖິ່ນ ແລະ ຜິວທີ່ຜ່ານແດດຝົນ.',zhFact:'黑塔是市中心一座风化砖塔，坐落在道路环岛内，黝黑的砖面和当地传说构成独特的城市景观。',image:'20171118 That Dam Vientiane 3053 DxO.jpg'},
  {slug:'wat-ong-teu',en:'Wat Ong Teu Mahawihan',lo:'ວັດອົງຕື້',zh:'翁寺（Wat Ong Teu）',address:'Setthathirath Road, Vientiane, Laos',kind:'temple',
   enFact:'A historic monastery associated with a large bronze Buddha image and Lao Buddhist learning; explore the temple hall and layered roofline.',loFact:'ວັດອົງຕື້ເປັນວັດເກົ່າ ມີພະພຸດທະຮູບສຳລິດໃຫຍ່ ແລະ ຄວາມສຳຄັນຕໍ່ການສຶກສາພຸດທະສາສະໜາ.',zhFact:'翁寺以大型青铜佛像及佛教教育传统著称，位于老城区街道附近，可观察佛殿与层叠屋顶。',image:'Vientiane - Wat Ong Teu - 0002.jpg'},
  {slug:'wat-mixay',en:'Wat Mixay',lo:'ວັດມີໄຊ',zh:'米赛寺',address:'Setthathirath Road, Vientiane, Laos',kind:'temple',
   enFact:'The temple is a familiar neighborhood landmark close to the old city’s guesthouse streets; its gate and ordination hall show local decorative traditions.',loFact:'ວັດມີໄຊຢູ່ໃກ້ຖະໜົນໃຈກາງເມືອງ ຄວນເບິ່ງຊຸ້ມປະຕູ ແລະ ສິມຂອງວັດ.',zhFact:'米赛寺位于万象老城区旅馆街附近，寺门、主殿和装饰细节值得在步行途中留意。',image:'20171118 Gate Guardian Wat Mixay, Vientiane 3240 DxO.jpg'},
  {slug:'wat-inpeng',en:'Wat Inpeng',lo:'ວັດອິນແປງ',zh:'因彭寺',address:'Setthathirath Road, Vientiane, Laos',kind:'temple',
   enFact:'An ornate neighborhood Buddhist temple where a colorful gateway and sculpted surfaces reveal the craftsmanship of Vientiane religious architecture.',loFact:'ວັດອິນແປງເປັນວັດຢູ່ໃຈກາງເມືອງ ມີຊຸ້ມປະຕູ ແລະ ລວດລາຍປະດັບງາມ.',zhFact:'因彭寺位于老城区，以色彩鲜明的寺门和雕塑装饰吸引行人，适合观察万象寺庙工艺。',image:'Vientiane-Wat Inpeng-04-gje.jpg'},
  {slug:'wat-haysok',en:'Wat Haysok',lo:'ວັດໄຮໂສກ',zh:'海索寺',address:'Hengboun Road, Vientiane, Laos',kind:'temple',
   enFact:'This active Buddhist temple stands among the lanes of central Vientiane, offering a quieter courtyard contrast to the nearby commercial streets.',loFact:'ວັດໄຮໂສກຕັ້ງຢູ່ໃນຍ່ານເກົ່າວຽງຈັນ ເປັນວັດທີ່ຍັງໃຊ້ປະກອບພິທີທາງສາສະໜາ.',zhFact:'海索寺位于万象市中心街巷中，是仍在使用的佛教寺院，安静的庭院与周围商业街形成对比。',image:'Vientiane - Wat Haysoke - 0001.jpg'},
  {slug:'wat-chan',en:'Wat Chan',lo:'ວັດຈັນ',zh:'占寺（Wat Chan）',address:'Fa Ngum Road, Vientiane, Laos',kind:'temple',
   enFact:'A riverside-area Buddhist temple near the old trading streets; combine a respectful courtyard visit with a walk toward the Mekong.',loFact:'ວັດຈັນຢູ່ໃກ້ແຄມຂອງ ແລະ ຍ່ານຄ້າຂາຍເກົ່າ ເໝາະກັບການຍ່າງຊົມເມືອງ.',zhFact:'占寺靠近湄公河和传统商业街区，可将寺院庭院参观与河滨散步安排在同一段路线。',image:'Vientiane - Wat Chan - 0001.jpg'},
  {slug:'wat-xieng-nyeun',en:'Wat Xieng Nyeun',lo:'ວັດຊຽງຍືນ',zh:'香云寺（Wat Xieng Nyeun）',address:'Fa Ngum Road area, Vientiane, Laos',kind:'temple',
   enFact:'One of the smaller temples of the old riverfront neighborhood, showing how Buddhist community life continues beside the tourism district.',loFact:'ວັດຊຽງຍືນເປັນວັດໃນຍ່ານແຄມຂອງເກົ່າ ເຊື່ອມຊີວິດຊຸມຊົນກັບພຸດທະສາສະໜາ.',zhFact:'香云寺是老河滨街区的小型佛教寺院，反映旅游区旁仍在延续的社区宗教生活。',image:'external-photo.jpg',photoCredit:'https://www.trip.com/moments/detail/vientiane-749-119911031/'},
  {slug:'cope-visitor-centre',en:'COPE Visitor Centre',lo:'ສູນຢ້ຽມຊົມ COPE',zh:'COPE 访客中心',address:'Khouvieng Road, Vientiane, Laos',kind:'museum',
   enFact:'The visitor centre explains rehabilitation and the continuing human impact of unexploded ordnance in Laos through educational displays and personal stories.',loFact:'ສູນ COPE ນຳສະເໜີການຟື້ນຟູ ແລະ ຜົນກະທົບຂອງລະເບີດບໍ່ທັນແຕກຕໍ່ຊາວລາວ ຜ່ານນິທັດສະການ.',zhFact:'COPE 访客中心通过展览和个人故事介绍老挝未爆弹问题、康复服务及其对居民生活的长期影响。',image:'external-photo.jpg',photoCredit:'https://careergappers.com/cope-visitor-centre-laos/'},
  {slug:'lao-national-museum',en:'Lao National Museum',lo:'ພິພິທະພັນແຫ່ງຊາດລາວ',zh:'老挝国家博物馆',address:'Vientiane Capital, Laos',kind:'museum',
   enFact:'The national museum presents Lao history and archaeology. Its collections and premises have changed over time, so check the current museum pin and exhibition notice.',loFact:'ພິພິທະພັນແຫ່ງຊາດນຳສະເໜີປະຫວັດສາດ ແລະ ໂບຮານຄະດີລາວ; ກວດສະຖານທີ່ປັດຈຸບັນກ່ອນໄປ.',zhFact:'国家博物馆展示老挝历史和考古主题；馆址和展览安排历经调整，出发前须核对现用馆址。',image:'Lao National Museum.jpg'},
  {slug:'lao-textile-museum',en:'Lao Textile Museum',lo:'ພິພິທະພັນແຜ່ນແພລາວ',zh:'老挝纺织博物馆',address:'Ban Nongtha Tai, Sikhottabong, Vientiane, Laos',kind:'museum',
   enFact:'Traditional looms, woven fabrics and dyeing practices introduce the craftsmanship and ethnic diversity of Lao textiles.',loFact:'ພິພິທະພັນແຜ່ນແພລາວສະແດງກີ່ທໍຜ້າ ຜ້າທໍ ແລະ ວິທີຍ້ອມສີແບບດັ້ງເດີມ.',zhFact:'纺织博物馆展示传统织机、手工织物和染色工艺，可了解老挝纺织文化与不同族群的工艺。',image:'Lao Textile Museum 9.jpg'},
  {slug:'kaysone-phomvihane-museum',en:'Kaysone Phomvihane Museum',lo:'ພິພິທະພັນໄກສອນ ພົມວິຫານ',zh:'凯山·丰威汉博物馆',address:'Kaysone Phomvihane Road, Vientiane, Laos',kind:'museum',
   enFact:'Exhibits focus on the life of Kaysone Phomvihane and modern Lao political history, with photographs, documents and historical objects.',loFact:'ພິພິທະພັນນີ້ນຳສະເໜີຊີວິດຂອງທ່ານໄກສອນ ພົມວິຫານ ແລະ ປະຫວັດສາດລາວສະໄໝໃໝ່.',zhFact:'该博物馆以凯山·丰威汉生平及老挝现代政治史为主题，展示历史照片、文献和相关物件。',image:'Textbooks at the Kaysone Phomvihane Museum.jpg'},
  {slug:'lao-army-history-museum',en:'Lao People’s Army History Museum',lo:'ພິພິທະພັນປະຫວັດສາດກອງທັບປະຊາຊົນລາວ',zh:'老挝人民军历史博物馆',address:'Kaysone Phomvihane Road, Vientiane, Laos',kind:'museum',
   enFact:'Displays address the history of the Lao armed forces and military equipment; visitor access may depend on museum schedules.',loFact:'ພິພິທະພັນສະແດງປະຫວັດກອງທັບລາວ ແລະ ອຸປະກອນທາງທະຫານ.',zhFact:'博物馆介绍老挝军队历史并展示军事装备；开放安排应以馆方通知为准。',image:'external-photo.jpg',photoCredit:'https://airial.travel/attractions/laos/vientiane/lao-peoples-army-history-museum-1nai9q31'},
  {slug:'buddha-park',en:'Buddha Park (Xieng Khuan)',lo:'ສວນພະ ຊຽງຄວນ',zh:'佛像公园（香昆）',address:'Tha Deua Road, Xieng Khuan, Vientiane Prefecture, Laos',kind:'public',
   enFact:'A sculpture park south-east of Vientiane with imaginative Buddhist and Hindu figures, created in the twentieth century.',loFact:'ສວນພະຊຽງຄວນມີຮູບປັ້ນພຸດ ແລະ ຮິນດູ ເປັນສວນສິລະປະສະຕະວັດທີ 20.',zhFact:'香昆佛像公园位于万象东南郊，20世纪建造，汇集富想象力的佛教与印度教主题雕塑。',image:'20171118 Buddha Park Vientiane 3059 DxO.jpg'},
  {slug:'talat-sao',en:'Talat Sao Morning Market',lo:'ຕະຫຼາດເຊົ້າ',zh:'早市（Talat Sao）',address:'Lane Xang Avenue, Vientiane, Laos',kind:'market',
   enFact:'A longstanding central shopping area known for textiles, jewelry and everyday goods; traditional stalls and modern retail spaces coexist.',loFact:'ຕະຫຼາດເຊົ້າເປັນຍ່ານຊື້ຂາຍກາງເມືອງ ມີຜ້າແພ ເຄື່ອງປະດັບ ແລະ ສິນຄ້າທົ່ວໄປ.',zhFact:'早市是万象中心商贸区，以纺织品、首饰和日用品闻名，传统摊位与现代零售空间并存。',image:'external-photo.jpg',photoCredit:'https://wikitravel.org/shared/File:Talat_Sao,_Vientiane,_Laos.JPG'},
  {slug:'nam-phou-fountain',en:'Nam Phou Fountain',lo:'ນ້ຳພຸ',zh:'南普喷泉',address:'Nam Phou Square, Vientiane, Laos',kind:'public',
   enFact:'The central fountain is a recognizable meeting point amid cafés and historic city streets; its use and surrounding businesses change over time.',loFact:'ນ້ຳພຸເປັນຈຸດນັດພົບໃນໃຈກາງວຽງຈັນ ລ້ອມຮອບດ້ວຍຖະໜົນ ແລະ ຮ້ານອາຫານ.',zhFact:'南普喷泉是市中心熟悉的集合地标，周围有咖啡馆和老城街道，喷泉运行状况可能随时调整。',image:'Nam Phou Fountain - panoramio.jpg'},
  {slug:'national-cultural-hall',en:'Lao National Cultural Hall',lo:'ຫໍວັດທະນະທຳແຫ່ງຊາດ',zh:'老挝国家文化宫',address:'Samsenthai Road, Vientiane, Laos',kind:'public',
   enFact:'A prominent cultural-event venue in central Vientiane; performance access depends on the current programme, while the facade can be appreciated from outside.',loFact:'ຫໍວັດທະນະທຳແຫ່ງຊາດເປັນສະຖານທີ່ຈັດກິດຈະກຳ ແລະ ການສະແດງຢູ່ໃຈກາງເມືອງ.',zhFact:'国家文化宫是万象市中心的文化活动和演出场所，入内须看当期节目安排，建筑外观则可从公共区域欣赏。',image:'National Cultural Hall of Laos.jpg'},
  {slug:'fa-ngum-statue',en:'King Fa Ngum Statue',lo:'ອະນຸສາວະລີພະເຈົ້າຟ້າງຸ່ມ',zh:'法昂王雕像',address:'Fa Ngum Park, Vientiane, Laos',kind:'monument',
   enFact:'The monument commemorates King Fa Ngum, traditionally credited with founding the Lan Xang kingdom in the fourteenth century.',loFact:'ອະນຸສາວະລີລະນຶກເຖິງພະເຈົ້າຟ້າງຸ່ມ ຜູ້ກໍ່ຕັ້ງອານາຈັກລ້ານຊ້າງໃນສະຕະວັດທີ 14.',zhFact:'法昂王纪念雕像纪念14世纪澜沧王国的传统建国者，可与老挝早期王国历史一同理解。',image:'Fangum.JPG'},
  {slug:'city-pillar-shrine',en:'Vientiane City Pillar Shrine',lo:'ຫໍຫຼັກເມືອງວຽງຈັນ',zh:'万象城柱神祠',address:'Vientiane Capital, Laos',kind:'public',
   enFact:'The city-pillar shrine expresses traditions of urban protection and ritual memory; observe offerings without disturbing worshippers.',loFact:'ຫໍຫຼັກເມືອງສະທ້ອນຄວາມເຊື່ອໃນການປົກປ້ອງເມືອງ ແລະ ພິທີກຳທ້ອງຖິ່ນ.',zhFact:'城柱神祠体现城市守护与地方仪式传统，参观时可观察供奉空间但不要打扰祈祷者。',image:'Vientiane City Pillar Shrine 1.jpg'},
  {slug:'wat-that-luang-neua',en:'Wat That Luang Neua',lo:'ວັດທາດຫຼວງເໜືອ',zh:'塔銮北寺',address:'Pha That Luang precinct, Vientiane, Laos',kind:'temple',
   enFact:'A monastery in the northern part of the That Luang religious precinct; it is distinct from the golden national stupa itself.',loFact:'ວັດທາດຫຼວງເໜືອຢູ່ໃນເຂດພະທາດຫຼວງ ແຕ່ເປັນວັດຄົນລະສ່ວນກັບອົງພະທາດ.',zhFact:'塔銮北寺位于塔銮宗教区域北部，是独立寺院，不应与金色塔銮本体混为一谈。',image:'Vientiane - Wat That Luang Neua - 0007.jpg'},
  {slug:'wat-that-luang-tai',en:'Wat That Luang Tai',lo:'ວັດທາດຫຼວງໃຕ້',zh:'塔銮南寺',address:'Pha That Luang precinct, Vientiane, Laos',kind:'temple',
   enFact:'The southern monastery near Pha That Luang offers a separate religious courtyard and temple buildings within the wider pilgrimage landscape.',loFact:'ວັດທາດຫຼວງໃຕ້ເປັນວັດທາງທິດໃຕ້ໃກ້ພະທາດຫຼວງ ມີລານ ແລະ ອາຄານສາສະໜາຂອງຕົນ.',zhFact:'塔銮南寺位于塔銮附近南侧，有独立的宗教庭院和建筑，可与塔銮参观但不应视为同一景点。',image:'Vientiane - Wat That Luang Tai - 0003.jpg'},
  {slug:'lao-art-museum',en:'Lao Art Museum',lo:'ພິພິທະພັນສິລະປະລາວ',zh:'老挝艺术博物馆',address:'Kaysone Phomvihane Avenue, Sivilay Village, Xaythany District, Vientiane, Laos',kind:'museum',
   enFact:'An art-focused museum in the Vientiane area; exhibitions emphasize Lao creative traditions and works by local makers.',loFact:'ພິພິທະພັນສິລະປະລາວນຳສະເໜີຜົນງານສ້າງສັນ ແລະ ວັດທະນະທຳສິລະປະຂອງລາວ.',zhFact:'老挝艺术博物馆聚焦本地艺术创作和传统工艺，展览内容与开放安排需要查看馆方当期信息。',image:'external-photo.jpg',photoCredit:'https://discoverlaos.today/vientiane/thing-to-do/lao-art-museum-a-cultural-landmark-in-vientiane'},
  {slug:'friendship-bridge',en:'First Thai–Lao Friendship Bridge',lo:'ຂົວມິດຕະພາບລາວ–ໄທ ແຫ່ງທີ 1',zh:'第一泰老友谊大桥',address:'Thadeua, Hadxaifong, Vientiane Prefecture, Laos',kind:'transport',
   enFact:'The first bridge linking the Vientiane side of Laos with Nong Khai in Thailand opened in 1994 and remains an international crossing, not a pedestrian sightseeing promenade.',loFact:'ຂົວມິດຕະພາບແຫ່ງທີ 1 ເປີດໃນປີ 1994 ເຊື່ອມວຽງຈັນກັບໜອງຄາຍ ເປັນດ່ານຂ້າມແດນ.',zhFact:'第一泰老友谊大桥于1994年通车，连接老挝万象一侧和泰国廊开，是国际口岸，并非可随意步行游览的河滨桥。',image:'Thai-Lao-Freundschaftsbruecke.jpg'},
  {slug:'king-anouvong-monument',en:'King Anouvong Statue',lo:'ອະນຸສາວະລີພະເຈົ້າອະນຸວົງ',zh:'昭阿奴翁国王雕像',address:'Chao Anouvong Park, Fa Ngum Road, Vientiane, Laos',kind:'monument',
   enFact:'The riverside statue commemorates King Anouvong, the nineteenth-century ruler of Vientiane; its outstretched arm faces the Mekong.',loFact:'ອະນຸສາວະລີລະນຶກເຖິງພະເຈົ້າອະນຸວົງ ກະສັດວຽງຈັນສະຕະວັດທີ 19 ປະທັບຊີ້ໄປທາງແມ່ນ້ຳຂອງ.',zhFact:'河滨雕像纪念19世纪万象统治者昭阿奴翁，雕像伸出的手臂面向湄公河，是公园的代表性地标。',image:'Fountain and statue in Chao Anouvong Park.jpg'},
  {slug:'vientiane-night-market',en:'Vientiane Riverside Night Market',lo:'ຕະຫຼາດກາງຄືນແຄມຂອງ',zh:'万象河滨夜市',address:'Fa Ngum Road, Mekong riverside, Vientiane, Laos',kind:'market',
   enFact:'Evening stalls cluster near the riverside promenade, with clothing and souvenirs among the common offerings; vendor arrangement changes.',loFact:'ຕະຫຼາດກາງຄືນຢູ່ແຄມຂອງ ມີຮ້ານຂາຍເສື້ອຜ້າ ແລະ ຂອງທີ່ລະນຶກ ເປີດໃນຕອນແລງ.',zhFact:'河滨夜市沿湄公河步行区集结，常见服装与纪念品摊位，摊位位置和营业安排可能变化。',image:'existing:nearby-night-market.jpg'},
  {slug:'mekong-riverside-promenade',en:'Vientiane Mekong Riverside Promenade',lo:'ທາງຍ່າງແຄມຂອງວຽງຈັນ',zh:'万象湄公河滨步道',address:'Fa Ngum Road riverfront, Vientiane, Laos',kind:'public',
   enFact:'The public riverfront walk looks across the Mekong toward Thailand and is popular around sunset, especially near the Chao Anouvong Park section.',loFact:'ທາງຍ່າງແຄມຂອງມອງຂ້າມແມ່ນ້ຳໄປຝັ່ງໄທ ແລະ ເປັນຈຸດຊົມຕາເວັນຕົກ.',zhFact:'湄公河滨步道可眺望河对岸的泰国，日落时段较受欢迎，昭阿奴翁公园附近是其中一段。',image:'20171118 Sunset over Mekong Vientiane 3375 DxO.jpg'},
  {slug:'wat-sokpaluang',en:'Wat Sok Pa Luang',lo:'ວັດໂສກປ່າຫຼວງ',zh:'索帕銮寺',address:'Sok Pa Luang area, Vientiane, Laos',kind:'temple',
   enFact:'A Buddhist monastery in southern Vientiane traditionally known for meditation activity and a quieter woodland setting.',loFact:'ວັດໂສກປ່າຫຼວງເປັນວັດທາງໃຕ້ຂອງວຽງຈັນ ທີ່ມີບັນຍາກາດງຽບ ແລະ ກິດຈະກຳພາວະນາ.',zhFact:'索帕銮寺位于万象南部，传统上与禅修活动有关，环境相对安静，进入时应遵守寺院规定。',image:'external-photo.jpg',photoCredit:'https://www.trip.com/moments/detail/vientiane-749-10518432/'},
];

export const EXTRA_SLUGS = entries.map((e) => e.slug);
const sourceDefault = 'https://www.tourismlaos.org/central-provinces/vientiane-capital/';
const localized = {
  en: { temple:'Buddhist temple',monument:'Historic monument',museum:'Museum and learning centre',market:'Market and local life',public:'Public landmark',transport:'Transport landmark', watch:'Observe the site’s defining features and how they relate to its neighborhood.', context:'Understand its role in Vientiane’s built and cultural landscape.', entry:'Check current admission and opening notices at the entrance; no unverified fee or rating is displayed.', steps:['Find the specific site entrance using the separate Google Maps pin.','Observe the main landmark and its setting from an accessible public area.','Read interpretive notices where available, respecting any restrictions.','Continue to another nearby stop only after checking the actual route.'],rules:['Follow the site’s current opening and access instructions.','Respect worshippers, staff, residents and restricted areas.','Carry drinking water and take care when crossing streets.'],photos:['Start with a wide contextual view showing the identifiable landmark.','Photograph architectural or landscape details only where permitted.'],faq:['Where is this place?','Use the dedicated Google Maps search link and confirm the exact entrance.','How long should I allow?','Plan around 20–60 minutes, adjusting for the actual scale and access.'] },
  zh: { temple:'佛教寺院',monument:'历史纪念地标',museum:'博物馆与学习场所',market:'市场与当地生活',public:'公共文化地标',transport:'交通地标', watch:'留意景点本身的标志性细节，以及它与周围街区的关系。', context:'从万象城市历史、宗教与公共生活的脉络理解这处地点。', entry:'开放与入场规定请在现场核实；未取得同步数据时不虚构票价或评分。', steps:['先用本页独立 Google 地图链接找到该地点和实际入口。','从允许通行的区域观察主景观与周边环境。','阅读现场说明，遵守拍照及参观限制。','核对真实路程后，再前往下一处相邻景点。'],rules:['遵守景点现场开放和出入规定。','尊重信众、工作人员、当地居民及管制区域。','携带饮水，过街留意交通。'],photos:['先拍摄能够辨认地点的整体环境画面。','在允许摄影的位置记录建筑或景观细节。'],faq:['该景点在哪里？','使用本页专属 Google 地图链接并确认实际入口。','建议停留多久？','可先预留约 20—60 分钟，并按景点规模和开放情况调整。'] },
  lo: { temple:'ວັດພຸດທະສາສະໜາ',monument:'ອະນຸສອນສະຖານ',museum:'ພິພິທະພັນ',market:'ຕະຫຼາດ',public:'ສະຖານທີ່ສາທາລະນະ',transport:'ສະຖານທີ່ຄົມມະນາຄົມ',watch:'ສັງເກດຈຸດເດັ່ນຂອງສະຖານທີ່ ແລະ ສະພາບແວດລ້ອມ.',context:'ຮຽນຮູ້ຄວາມສຳຄັນຂອງບ່ອນນີ້ໃນປະຫວັດ ແລະ ຊີວິດວຽງຈັນ.',entry:'ກວດເວລາເປີດ ແລະ ຄ່າເຂົ້າຢູ່ສະຖານທີ່; ບໍ່ລະບຸຄະແນນທີ່ບໍ່ໄດ້ກວດ.',steps:['ເປີດ Google Maps ຂອງສະຖານທີ່ນີ້ ແລະ ຫາທາງເຂົ້າ.','ຊົມຈຸດເດັ່ນຈາກບ່ອນສາທາລະນະທີ່ອະນຸຍາດ.','ອ່ານປ້າຍຂໍ້ມູນ ແລະ ເຄົາລົບຂໍ້ຫ້າມ.','ກວດເສັ້ນທາງກ່ອນໄປສະຖານທີ່ຕໍ່ໄປ.'],rules:['ປະຕິບັດຕາມເວລາເປີດ ແລະ ລະບຽບສະຖານທີ່.','ເຄົາລົບຜູ້ມາໄຫວ້ ພະນັກງານ ແລະ ຊາວບ້ານ.','ນຳນ້ຳດື່ມ ແລະ ລະວັງການຂ້າມຖະໜົນ.'],photos:['ຖ່າຍພາບກວ້າງໃຫ້ເຫັນບ່ອນນີ້ຢ່າງຊັດເຈນ.','ຖ່າຍລາຍລະອຽດເມື່ອມີການອະນຸຍາດ.'],faq:['ສະຖານທີ່ຢູ່ໃສ?','ໃຊ້ Google Maps ສຳລັບສະຖານທີ່ນີ້ ແລະ ກວດທາງເຂົ້າ.','ຄວນໃຊ້ເວລາດົນປານໃດ?','ວາງແຜນ 20–60 ນາທີ ຕາມຂະໜາດ ແລະ ການເຂົ້າຊົມ.'] },
} as const;

const picture = (e: Entry) => e.image ? (e.image.startsWith('existing:') ? `/gallery/${e.image.slice(9)}` : `/gallery/attraction-${e.slug}.jpg`) : '';
export const EXTRA_VENUES = Object.fromEntries(entries.map(e => [e.slug, {
  mapQuery: `${e.en} ${e.address}`, address:e.address,
  type:localized.en[e.kind],visit:'20–60 minutes; adjust to conditions',
  hours:'Confirm the current opening schedule with the venue; outdoor public areas may have different access rules.',
  fee:'Check any current admission at the entrance; no unverified fee is quoted.',
  management: {
    en:'This is a distinct place with its own operating or public-space authority. Check notices at the site for the responsible unit; it is not administered as a feature of Chao Anouvong Park.',
    zh:'此处是独立景点，管理主体与昭阿奴翁公园不一定相同。具体管理单位和入场规则请参照该处现场公告。',
    lo:'ສະຖານທີ່ນີ້ມີການຄຸ້ມຄອງຂອງຕົນເອງ ບໍ່ແມ່ນສ່ວນຂອງສວນເຈົ້າອະນຸວົງ; ກວດປະກາດຢູ່ບ່ອນນັ້ນ.',
  },
  image:picture(e),
  gallery:e.image ? [picture(e)] : [],
  imageSource:e.photoCredit ?? (e.image && !e.image.startsWith('existing:') ? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(e.image.replaceAll(' ','_'))}` : undefined),
  source:e.source ?? sourceDefault,
}]));

export const EXTRA_ATTRACTIONS = Object.fromEntries((['en','lo','zh'] as Lang[]).map(lang => [lang,
  Object.fromEntries(entries.map(e => {
    const t = localized[lang]; const name=e[lang]; const fact=e[`${lang}Fact` as 'enFact'|'loFact'|'zhFact'];
    const profile = ATTRACTION_PROFILES[e.slug]?.[lang];
    const subject = PHOTO_SUBJECTS[e.slug]?.[lang];
    const steps = profile?.[2].split('|');
    const visitTip = steps ? lang === 'zh'
      ? `先${steps[0]}，再${steps[1]}。根据现场动线调整，不要进入未开放区域。`
      : lang === 'lo'
        ? `${steps[0]}; ${steps[1]}. ປັບເສັ້ນທາງຕາມປ້າຍຢູ່ສະຖານທີ່.`
        : `${steps[0]}; then ${steps[1]}. Adjust to posted access rules on arrival.`
      : undefined;
    const photoTips = subject ? lang === 'zh'
      ? [`取景重点是${subject}，画面应保留可辨认的现场环境。`, e.kind === 'museum' ? '馆内摄影前请先查看展览规定，尊重展品与访客。' : '从允许停留的区域拍摄，避免阻挡通道或宗教活动。']
      : lang === 'lo'
        ? [`ເນັ້ນຖ່າຍພາບ${subject} ພ້ອມບັນຍາກາດຮອບຂ້າງ.`, e.kind === 'museum' ? 'ກວດກົດລະບຽບຖ່າຍຮູບພາຍໃນກ່ອນ ແລະ ເຄົາລົບຜູ້ຊົມ.' : 'ຖ່າຍຈາກຈຸດທີ່ອະນຸຍາດ ບໍ່ກີດຂວາງທາງຍ່າງ ຫຼື ພິທີກຳ.']
        : [`Frame ${subject} with enough surroundings to identify the actual location.`, e.kind === 'museum' ? 'Check exhibit photography rules and respect visitors before photographing indoors.' : 'Shoot from permitted public areas without obstructing paths or religious activity.']
      : [...t.photos];
    const tagline = `${t[e.kind]} · ${lang === 'zh' ? '万象' : lang === 'lo' ? 'ວຽງຈັນ' : 'Vientiane'}`;
    const intro = lang === 'zh'
      ? `来到${name}，可以从它所处的城市街区开始认识这处${t[e.kind]}。详细位置：${e.address}。建议先了解主要看点，再依据当天开放与交通情况规划行程。`
      : lang === 'lo'
        ? `ມາຮູ້ຈັກ ${name} ໃນວຽງຈັນ. ທີ່ຕັ້ງ: ${e.address}. ກວດເສັ້ນທາງ ແລະ ເວລາເຂົ້າຊົມກ່ອນໄປ.`
        : `Discover ${name} in its own Vientiane setting. Find it at ${e.address}; the specific map pin and visiting conditions matter more than proximity on a city-wide attractions list.`;
    const about = lang === 'zh'
      ? `${name}是一处${t[e.kind]}，不属于昭阿奴翁公园内部设施。${t.context} 参观或拍照前先确认管理方现场规定。`
      : lang === 'lo'
        ? `${name} ເປັນ${t[e.kind]} ທີ່ມີລະບຽບຂອງຕົນເອງ ບໍ່ແມ່ນສ່ວນຂອງສວນເຈົ້າອະນຸວົງ. ${t.context}`
        : `${name} is a distinct ${t[e.kind].toLowerCase()}, not a facility inside Chao Anouvong Park. ${t.context} Consult the site's own visitor notices.`;
    return [e.slug, {
      name, tagline, description:`${name} — ${fact}`,
      intro, visitTip, about, historical:fact,
      architecture:profile?.[0] ?? t.watch, culture:profile?.[1] ?? t.context,
      highlights:profile ? [profile[0],profile[1]] : [`${name} · ${t[e.kind]}`,t.watch],
      route:steps ?? [...t.steps],guidelines:[...t.rules],photoTips,
      faq:[{q:t.faq[0],a:t.faq[1]},{q:t.faq[2],a:t.faq[3]}],
    }];
  }))
]));

export const EXTRA_DIRECTORY = entries.map(e => ({
  slug:e.slug, en:e.en, lo:e.lo, zh:e.zh, kind:e.kind,
  image:picture(e),
}));
