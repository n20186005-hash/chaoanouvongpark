import type { Lang } from './ui';

// Architecture / observable characteristics, cultural context, and a
// three-stage route specific to each venue. The | delimiters are steps.
type Profile = [string, string, string];
type LocalizedProfile = Record<Lang, Profile>;
export const ATTRACTION_PROFILES: Record<string, LocalizedProfile> = {
  patuxai: {
    zh: ['从澜沧大道远望拱门的对称轮廓，再靠近观察拱券、柱体与带有老挝传统元素的顶部装饰；环绕纪念碑的城市轴线也是景观的一部分。','纪念建筑把现代国家记忆与本地装饰语言放在一起；了解它与20世纪老挝历史的联系，避免只把这里当作仿欧洲凯旋门的建筑。','从澜沧大道较远处先拍摄道路与拱门的轴线|走近纪念碑，观察四面立面和周边广场|若现场允许登高，再按公布路线进入；否则从公共区域返回'],
    en: ['Start with the arch’s symmetrical silhouette from Lane Xang Avenue, then study its vaults, pillars and Lao-style roof ornament. The boulevard axis is part of the composition.','The memorial brings modern national memory together with local decorative language; consider its twentieth-century context rather than treating it only as a European-style arch.','Frame the boulevard and arch together from a safe distant viewpoint|Approach the monument to compare its facades and plaza setting|Ascend only if the current entrance permits it; otherwise return through the public grounds'],
    lo: ['ເບິ່ງຮູບຊົງສົມມາດຂອງປະຕູໄຊຈາກຖະໜົນລ້ານຊ້າງ ແລ້ວສັງເກດຊ່ອງໂຄ້ງ ເສົາ ແລະ ລວດລາຍຫຼັງຄາລາວ.','ອະນຸສອນສະຖານນີ້ເຊື່ອມປະຫວັດສາດສະໄໝໃໝ່ກັບສິລະປະລາວ ຄວນຮຽນຮູ້ຄວາມໝາຍທາງປະຫວັດ.','ຖ່າຍພາບປະຕູໄຊກັບຖະໜົນລ້ານຊ້າງຈາກບ່ອນປອດໄພ|ຍ່າງເບິ່ງດ້ານຕ່າງໆ ແລະ ລານອ້ອມຂ້າງ|ຂຶ້ນຊົມພຽງເມື່ອເປີດໃຫ້ເຂົ້າ ຫຼື ກັບທາງສາທາລະນະ'],
  },
  'pha-that-luang': {
    zh: ['金色方形塔基之上层层收束的塔体，是塔銮最鲜明的建筑特征；远看整体比例，近看围墙、礼拜空间与相邻寺院的界线。','塔銮不仅是摄影地标，也是佛教朝圣及节庆活动的场所。塔銮节期间人流和礼仪安排与普通日子不同。','先从允许停留的广场位置观看金塔全景|沿开放参观的外围路线观察塔基及围墙|如有宗教活动，保持通道畅通，再前往北寺或南寺'],
    en: ['The golden stupa rises in receding tiers above a broad square base. Compare its overall proportions from a distance, then inspect the enclosing walls and the distinction between stupa and neighboring monasteries.','Pha That Luang is a living Buddhist pilgrimage landmark as well as a national symbol. Festival processions and worship require different visitor behavior from an ordinary sightseeing day.','View the complete golden stupa from a permitted open plaza|Walk the accessible perimeter and observe its base and enclosure|Keep worship routes clear; continue separately to Wat That Luang Neua or Tai'],
    lo: ['ພະທາດສີຄຳມີຖານສີ່ຫຼ່ຽມ ແລະ ສ່ວນຍອດຫຼຸດລັ່ນຂຶ້ນໄປ. ສັງເກດຮົ້ວ ລານ ແລະ ວັດໃກ້ຄຽງທີ່ແຍກຈາກອົງພະທາດ.','ພະທາດຫຼວງເປັນບ່ອນສັກກາລະບູຊາ ແລະ ສັນຍາລັກຂອງຊາດ; ໃນງານບຸນຕ້ອງເຄົາລົບຂະບວນພິທີ.','ຊົມອົງພະທາດຈາກລານທີ່ອະນຸຍາດ|ຍ່າງສັງເກດຖານ ແລະ ຮົ້ວພະທາດ|ຫຼີກທາງພິທີ ແລ້ວໄປວັດທາດຫຼວງເໜືອ ຫຼື ໃຕ້'],
  },
  'wat-si-muang': {
    zh: ['观察正殿、供奉区域与庭院中往来的人流。这里是活跃寺院，建筑细节须与实际正在进行的祈祷仪式一同理解。','西孟寺与万象城柱、守护信仰有关；供花和祈愿是当地生活的一部分，不应干扰信众的仪式。','从 Rue Bourichane 一带确认寺院入口与礼仪告示|在开放庭院了解供奉次序，观察主殿外观|在不打扰祈祷者的前提下离开，可接续城柱相关地点'],
    en: ['Look at the main hall, offering areas and the movement of worshippers through the courtyard. Architectural details are best understood alongside its active devotional use.','Wat Si Muang is connected with the city-pillar and protective-spirit tradition. Flowers and personal prayers are part of ordinary religious life, not a staged visitor display.','Find the temple entrance and read etiquette signs near Rue Bourichane|Observe the open courtyard, offerings and main hall exterior|Leave without interrupting worship and consider the city-pillar shrine as a separate stop'],
    lo: ['ສັງເກດສິມ ບ່ອນຖວາຍເຄື່ອງ ແລະ ການໄປມາຂອງຜູ້ມາໄຫວ້ໃນລານວັດ.','ວັດສີເມືອງຜູກພັນກັບຫຼັກເມືອງ ແລະ ຄວາມເຊື່ອປົກປ້ອງເມືອງ; ຢ່າລົບກວນຜູ້ປະກອບພິທີ.','ຫາທາງເຂົ້າວັດ ແລະ ອ່ານລະບຽບ|ຊົມລານ ບ່ອນຖວາຍເຄື່ອງ ແລະ ດ້ານນອກສິມ|ອອກຈາກວັດໂດຍບໍ່ລົບກວນ ແລະ ໄປຫໍຫຼັກເມືອງໄດ້'],
  },
  'that-dam': {
    zh: ['黑塔的风化砖面、逐层收束的塔身和植被痕迹，与金碧辉煌的塔銮形成鲜明反差。它位于环岛中央，不能把道路当作景点步道。','关于黑塔有地方传说；应区分口述故事与可核实的建筑年代。这里也反映老城区如何围绕古迹继续发展。','先在环岛外侧安全位置看整座砖塔|利用沿街步道观察风化纹理与周围街景|不穿越车流接近塔身，之后沿合法人行道前往市中心其他地标'],
    en: ['Study the weathered brick courses, narrowing profile and traces of vegetation. The dark surface contrasts strongly with gilded shrines, while traffic circles the monument.','Local stories surround That Dam; distinguish folklore from documented dates. Its setting illustrates how modern streets have grown around an older landmark.','See the whole brick stupa from a safe position outside the roundabout|Observe the patina and street setting from public sidewalks|Do not cross moving traffic to reach the base; continue on legal pedestrian routes'],
    lo: ['ທາດດຳມີຊັ້ນອິດເກົ່າ ຜິວຄ້ຳ ແລະ ຮູບຊົງຫຼຸດລັ່ນ; ຖະໜົນວົງວຽນລ້ອມຮອບທາດ.','ທາດດຳມີຕຳນານທ້ອງຖິ່ນ; ຄວນແຍກຕຳນານອອກຈາກຂໍ້ມູນປະຫວັດ ແລະ ສັງເກດເມືອງຮອບຂ້າງ.','ຊົມທາດຈາກຂອບວົງວຽນທີ່ປອດໄພ|ສັງເກດອິດເກົ່າ ແລະ ຖະໜົນຮອບຂ້າງ|ບໍ່ຂ້າມລົດໄປຫາຖານທາດ ແລະ ຍ່າງຕໍ່ຕາມທາງປອດໄພ'],
  },
  'wat-ong-teu': {
    zh: ['佛殿内的大型青铜佛像是理解翁寺的关键，建筑上可留意雕刻木构和多层屋顶的衔接；室内拍摄须先查现场规定。','翁寺与佛教研学及僧侣生活相关。参观时应保持殿内安静，不能把供奉佛像当作可触摸的展品。','从 Setthathirath 路确认寺门入口|在允许进入的区域观看佛殿、木雕和青铜佛像|沿老城区继续前往米赛寺或因彭寺，不穿越寺院私人区域'],
    en: ['The large bronze Buddha is a defining feature of the main hall. Notice carved wooden work and how the layered roof connects to the hall; check any interior photo restrictions.','The monastery has connections to Buddhist learning as well as worship. Keep quiet near monks and visitors and never treat sacred images as hands-on exhibits.','Enter from the Setthathirath Road side and follow temple notices|Visit permitted hall areas to see the bronze image and woodcarving|Continue through public old-town streets toward Wat Mixay or Wat Inpeng'],
    lo: ['ພະພຸດທະຮູບສຳລິດໃຫຍ່ໃນສິມເປັນຈຸດເດັ່ນ; ສັງເກດລາຍໄມ້ແກະ ແລະ ຫຼັງຄາຊັ້ນ.','ວັດອົງຕື້ເຊື່ອມກັບການຮຽນພຸດທະສາສະໜາ ແລະ ການໄຫວ້ພະ; ຢ່າຈັບພະພຸດທະຮູບ.','ເຂົ້າຈາກທາງຖະໜົນເສດຖາທິລາດ ແລະ ອ່ານປ້າຍ|ຊົມສິມ ພະສຳລິດ ແລະ ລາຍໄມ້ໃນບ່ອນທີ່ອະນຸຍາດ|ໄປວັດມີໄຊ ຫຼື ວັດອິນແປງຕາມຖະໜົນສາທາລະນະ'],
  },
  'wat-mixay': {
    zh: ['米赛寺的入口守护像与主殿屋顶适合从街道和院内两个角度观察；近拍雕刻时留意是否有人在诵经。','它是老城区日常使用的寺庙，与周边旅馆和商铺共享街区空间。寺院的宁静不代表可以打扰僧侣。','从老城公共街道辨认寺门和守护雕塑|进入允许开放的院落，观察主殿屋顶和佛教装饰|沿 Setthathirath 路步行至翁寺或因彭寺'],
    en: ['The gateway guardians and hall roofline reward viewing from both the street and open courtyard. Avoid close-up photography when people are praying.','Wat Mixay remains part of neighborhood religious life amid guesthouses and shops; its calm setting is not permission to interrupt monks.','Identify the gate and guardian figures from the old-town street|Use the permitted courtyard to study the hall roof and decoration|Follow Setthathirath Road to Wat Ong Teu or Wat Inpeng'],
    lo: ['ຊຸ້ມປະຕູ ຮູບຜູ້ພິທັກ ແລະ ຫຼັງຄາສິມແມ່ນຈຸດສັງເກດຂອງວັດມີໄຊ.','ວັດມີໄຊຍັງເປັນວັດຂອງຊຸມຊົນທ່າມກາງຮ້ານ ແລະ ທີ່ພັກ; ຢ່າລົບກວນພະສົງ.','ເບິ່ງຊຸ້ມປະຕູ ແລະ ຮູບປັ້ນຈາກຖະໜົນ|ເຂົ້າລານທີ່ເປີດແລ້ວຊົມສິມ|ຍ່າງຕາມຖະໜົນໄປວັດອົງຕື້ ຫຼື ວັດອິນແປງ'],
  },
  'wat-inpeng': {
    zh: ['色彩丰富的入口牌坊、精细的装饰线条和寺院院落是因彭寺的主要建筑观察点。尽量从完整立面开始，再留意局部雕饰。','因彭寺反映老城区佛教工匠艺术，也是一处持续使用的宗教空间，观察与拍摄都应给当地礼拜活动让路。','沿 Setthathirath 路寻找有彩色装饰的入口|在开放庭院观察门框雕饰与主殿的比例|离开后沿同一区域前往翁寺或河滨街道'],
    en: ['The colorful gateway, fine decorative lines and courtyard are the primary visual subjects. Start with the whole facade before looking closely at sculpted details.','Wat Inpeng reflects local Buddhist craftsmanship while remaining a working religious space; give worshippers priority over photography.','Find the bright decorated entrance on Setthathirath Road|Compare gateway detail with the main hall from the open courtyard|Continue along public streets toward Wat Ong Teu or the riverfront'],
    lo: ['ຊຸ້ມປະຕູສີສັນ ລວດລາຍປະດັບ ແລະ ລານວັດເປັນຈຸດເດັ່ນຂອງວັດອິນແປງ.','ວັດອິນແປງສະທ້ອນຝີມືຊ່າງພຸດທະສິລະປະ; ໃຫ້ທາງຜູ້ມາໄຫວ້ກ່ອນການຖ່າຍຮູບ.','ຫາຊຸ້ມປະຕູສີສັນຢູ່ຖະໜົນເສດຖາທິລາດ|ຊົມລາຍປະດັບ ແລະ ສິມຈາກລານເປີດ|ຍ່າງຕໍ່ໄປວັດອົງຕື້ ຫຼື ທາງແຄມຂອງ'],
  },
  'wat-haysok': {
    zh: ['海索寺的层叠屋顶与木石装饰在狭窄街巷间尤其醒目，建议从不挡路的位置观看院落纵深。','这里保留着居民日常到寺院祈祷的节奏；游览时应注意僧侣空间、院落生活与游客行走范围的区别。','沿 Hengboun 路抵达寺门，先辨认出入口|进入允许开放的庭院观察屋顶与主殿，不进入僧房|沿原街巷返回老城公共道路，可接续市场或河滨'],
    en: ['Layered rooflines and carved details stand out between the surrounding lanes. View the depth of the courtyard without blocking the entrance.','Local worship continues here. Distinguish the public courtyard from monks’ quarters and keep the rhythm of neighborhood religious life undisturbed.','Reach the temple gate from Hengboun Road and identify visitor access|Observe the hall roof from the open courtyard, staying out of residential areas|Return to the old-town streets for a market or riverside stop'],
    lo: ['ຫຼັງຄາຫຼາຍຊັ້ນ ແລະ ລວດລາຍວັດໄຮໂສກເຫັນຊັດໃນຊອຍໃຈກາງເມືອງ.','ຊາວບ້ານຍັງມາໄຫວ້ພະຢູ່ວັດນີ້; ແຍກລານທົ່ວໄປອອກຈາກກຸດຕິພະສົງ.','ມາຮອດປະຕູວັດຈາກຖະໜົນ Hengboun|ຊົມຫຼັງຄາສິມຈາກລານທີ່ເປີດ|ກັບທາງສາທາລະນະໄປຕະຫຼາດ ຫຼື ແຄມຂອງ'],
  },
  'wat-chan': {
    zh: ['占寺的寺院主殿与河滨街区紧邻，观察院落布局时可以注意传统宗教建筑如何嵌入商业街网。','这里与河畔社区往来有关，适合把寺庙文化和沿湄公河的城市日常结合起来了解。','从 Fa Ngum 路周边确认寺院正门|在允许进入的庭院观察主殿，避开礼拜者|返回河滨公共街道，继续至夜市或公园步道'],
    en: ['The temple hall sits close to the riverfront street network. Study the courtyard arrangement to see how sacred architecture fits into an active trading neighborhood.','Wat Chan belongs to a lived-in riverside community; pair the temple’s religious role with an understanding of everyday Mekong-side street life.','Locate the temple entrance from the Fa Ngum Road area|Observe the hall and courtyard without entering private monastic areas|Rejoin the public riverside street for the night market or promenade'],
    lo: ['ວັດຈັນມີສິມ ແລະ ລານວັດໃກ້ຖະໜົນແຄມຂອງ; ສັງເກດການຢູ່ຮ່ວມກັບຍ່ານຄ້າຂາຍ.','ວັດຈັນເປັນສ່ວນຂອງຊີວິດຊຸມຊົນແຄມຂອງ ເຊື່ອມວັດທະນະທຳວັດກັບຖະໜົນເກົ່າ.','ຫາປະຕູວັດຈາກຍ່ານຖະໜົນຟ້າງຸ່ມ|ຊົມສິມ ແລະ ລານໃນເຂດທີ່ອະນຸຍາດ|ກັບໄປທາງແຄມຂອງ ແລ້ວທ່ຽວຕະຫຼາດກາງຄືນ'],
  },
  'wat-xieng-nyeun': {
    zh: ['小型佛殿的多层屋檐、那伽蛇形栏杆及门廊装饰是值得观察的细节；照片应包含足够背景以辨识这座寺院。','香云寺与老河滨社区的宗教生活相连。与大型纪念寺院相比，它更适合安静地认识街区中的日常信仰。','从 Fa Ngum 路附近按独立地图核对寺门|沿开放庭院观察蛇形扶栏、屋顶与主殿|从公共巷道返回河滨，继续步行而不穿越僧侣生活区'],
    en: ['The compact hall has layered eaves, naga-like stair rails and decorated portals. Include enough of the courtyard in photographs to identify this particular temple.','Wat Xieng Nyeun connects Buddhist practice to the old riverfront community; its quieter scale offers a contrast with monumental temples.','Confirm the temple entrance near Fa Ngum Road using its own map pin|Study the naga rails, roof and hall from accessible courtyard space|Return by public lanes to the riverfront without crossing monastic quarters'],
    lo: ['ສິມຂະໜາດນ້ອຍມີຫຼັງຄາຊັ້ນ ຮາວຂັ້ນໄດຮູບນາກ ແລະ ລວດລາຍຊຸ້ມປະຕູ.','ວັດຊຽງຍືນເຊື່ອມຊີວິດພຸດທະສາສະໜາກັບຊຸມຊົນແຄມຂອງ ທີ່ສະຫງົບກວ່າວັດໃຫຍ່.','ກວດທາງເຂົ້າວັດຢູ່ໃກ້ຖະໜົນຟ້າງຸ່ມ|ຊົມຮາວນາກ ຫຼັງຄາ ແລະ ສິມຈາກລານ|ກັບທາງສາທາລະນະໄປແຄມຂອງ'],
  },
  'cope-visitor-centre': {
    zh:['展厅重点在教育展示而非建筑外观，适合按入口说明观看假肢、未爆弹相关资料及康复故事的不同展区。','COPE 与康复服务有关，展览涉及真实受害者经历，应以尊重的态度阅读，不把伤痛故事当作猎奇素材。','从 Khouvieng 路进入医疗康复中心院区并寻找 COPE 标识|按照开放展区的参观动线阅读未爆弹与康复主题展示|在出口查阅支持或延伸学习资料，再返回院区公共通道'],
    en:['Focus on interpretive displays rather than the building facade: prosthetic devices, UXO context and rehabilitation stories are presented in distinct exhibits.','COPE is connected to rehabilitation services. Personal experiences deserve thoughtful attention, not sensational photography.','Enter the rehabilitation-centre grounds from Khouvieng Road and find COPE signs|Follow the open exhibition sequence on UXO and rehabilitation|Read further-learning information before exiting by the public grounds'],
    lo:['ຈຸດສຳຄັນຄືນິທັດສະການກ່ຽວກັບຂາທຽມ ລະເບີດບໍ່ທັນແຕກ ແລະ ການຟື້ນຟູ ບໍ່ແມ່ນພຽງດ້ານນອກອາຄານ.','ເລື່ອງລາວຂອງຜູ້ປະສົບເຫດແມ່ນປະສົບການຈິງ; ຄວນອ່ານ ແລະ ຖ່າຍຮູບດ້ວຍຄວາມເຄົາລົບ.','ເຂົ້າເຂດສູນຟື້ນຟູຈາກຖະໜົນ Khouvieng ແລະ ຫາປ້າຍ COPE|ຊົມນິທັດສະການລະເບີດ ແລະ ການຟື້ນຟູ|ອ່ານຂໍ້ມູນເພີ່ມກ່ອນອອກທາງສາທາລະນະ'],
  },
  'lao-national-museum': {
    zh:['按照馆方当期开放的展厅观察考古器物、历史照片与说明文字，不应依据旧馆照片推断现用展厅布局。','国家博物馆展示的是老挝不同时代的历史叙事，参观时区分文物年代、展陈说明与后世解读。','出发前核对国家博物馆目前实际馆址和入口|按当期展陈从考古到近现代主题循序浏览|到出口查阅专题说明，并按馆方允许的方式记录展品'],
    en:['Follow the current gallery layout through historical objects, archaeological material and documentary displays. Old photos of a previous museum building may not represent today’s exhibition rooms.','The national collection narrates different periods of Lao history; distinguish object dates and museum interpretation while reading labels.','Confirm the museum’s current premises and public entrance before traveling|Follow the accessible galleries from early history toward later themes|Use exit materials for further reading and obey exhibit photography notices'],
    lo:['ຊົມວັດຖຸໂບຮານ ຮູບພາບປະຫວັດ ແລະ ປ້າຍອະທິບາຍຕາມຫ້ອງສະແດງທີ່ເປີດ; ຮູບອາຄານເກົ່າອາດບໍ່ກົງກັບບ່ອນປັດຈຸບັນ.','ພິພິທະພັນສະແດງປະຫວັດລາວຫຼາຍຍຸກ ຄວນອ່ານວັນເວລາ ແລະ ຄຳອະທິບາຍຂອງວັດຖຸ.','ກວດທີ່ຕັ້ງ ແລະ ປະຕູເຂົ້າປັດຈຸບັນ|ຊົມຫ້ອງສະແດງຕາມລຳດັບຍຸກສະໄໝ|ອ່ານຂໍ້ມູນເພີ່ມ ແລະ ເຄົາລົບກົດການຖ່າຍຮູບ'],
  },
  'lao-textile-museum': {
    zh:['比较传统木织机、织物纹样与染色材料，尤其留意经纬线如何构成不同图案，而不仅拍摄成品布料。','织布既是手工技术，也是族群记忆与日常服饰的一部分；展品说明有助于分辨不同地区的织造传统。','从 Nongtha Tai 一带按地图抵达馆区|沿馆方路线看织机、布样及可能开放的工艺演示|在允许的区域细看纹样并记录材料名称，之后返回主路'],
    en:['Compare wooden looms, woven patterns and dye materials. Watch how warp and weft produce motifs rather than photographing finished fabrics alone.','Textiles connect craft technique, regional identity and everyday dress; read labels before assigning a pattern to a particular community.','Use the specific museum map to reach Nongtha Tai|Follow displays of looms, cloth and any demonstrations offered that day|Examine permitted pattern details and note materials before returning to the main road'],
    lo:['ສັງເກດກີ່ໄມ້ ລາຍຜ້າ ແລະ ວັດຖຸຍ້ອມສີ ໂດຍເບິ່ງວິທີເສັ້ນຍືນ ແລະ ເສັ້ນພຸ່ງສ້າງລວດລາຍ.','ຜ້າທໍເຊື່ອມຝີມືຊ່າງ ອັດຕະລັກຊຸມຊົນ ແລະ ເສື້ອຜ້າປະຈຳວັນ; ອ່ານປ້າຍກ່ອນລະບຸລາຍຜ້າ.','ໃຊ້ແຜນທີ່ໄປບ້ານໜອງທາໃຕ້|ຊົມກີ່ ຜ້າທໍ ແລະ ການສາທິດຖ້າມີ|ເບິ່ງລາຍຜ້າໃນເຂດທີ່ອະນຸຍາດແລ້ວກັບຖະໜົນໃຫຍ່'],
  },
  'kaysone-phomvihane-museum': {
    zh:['重点观察历史照片、档案、生活物件及展陈时间线，而非只拍摄博物馆的外观。','凯山·丰威汉相关展览涉及老挝现代国家建设的官方历史叙事，宜结合展品年代与说明理解。','从 Kaysone Phomvihane 路抵达馆区并核对入口|按人物生平与历史时间线阅读照片、文献和实物|离馆前复查感兴趣的展品说明，勿触碰陈列物'],
    en:['Focus on photographs, archival documents, personal objects and chronological interpretation rather than only the exterior.','The displays address Kaysone Phomvihane within modern Lao state history; pay attention to dates and the museum’s interpretive framework.','Locate the museum entrance from Kaysone Phomvihane Road|Follow the biographical and historical timeline through documents and objects|Revisit key labels before leaving without touching exhibits'],
    lo:['ເບິ່ງຮູບປະຫວັດ ເອກະສານ ສິ່ງຂອງສ່ວນຕົວ ແລະ ລຳດັບເວລາຂອງນິທັດສະການ.','ເນື້ອໃນກ່ຽວກັບທ່ານໄກສອນຜູກກັບປະຫວັດລາວສະໄໝໃໝ່; ຄວນອ່ານປີ ແລະ ປ້າຍອະທິບາຍ.','ຫາທາງເຂົ້າຈາກຖະໜົນໄກສອນ ພົມວິຫານ|ຊົມເອກະສານ ແລະ ສິ່ງຂອງຕາມລຳດັບເວລາ|ອ່ານປ້າຍທີ່ສົນໃຈກ່ອນອອກ ໂດຍບໍ່ຈັບວັດຖຸ'],
  },
  'lao-army-history-museum': {
    zh:['室内展厅和室外装备可能展示坦克、火炮及历史图片；应根据实物标识分辨年代和用途，不把所有装备视为同一时期。','军事博物馆呈现国家军队历史。参观时可结合历史背景理解展品，也须遵守馆方对拍摄和管制区域的规定。','从馆方指定入口进入并确认可参观展区|沿展厅阅读武器装备及历史图像的说明|如室外展示开放，再从允许通行的路线观察大型装备'],
    en:['Indoor and outdoor displays may include armored equipment, artillery and historical images. Read the object labels before assuming every item belongs to the same period.','The museum presents the history of the Lao armed forces; interpret equipment in context and respect any restrictions on photography or access.','Enter at the designated visitor entrance and check open galleries|Read equipment labels and historical photographs inside|Visit any accessible outdoor displays using posted visitor paths'],
    lo:['ຫ້ອງສະແດງ ແລະ ລານອາດມີລົດຖັງ ປືນໃຫຍ່ ແລະ ຮູບປະຫວັດ; ອ່ານປ້າຍກ່ອນລະບຸຍຸກຂອງອຸປະກອນ.','ພິພິທະພັນນຳສະເໜີປະຫວັດກອງທັບລາວ ຕ້ອງເຄົາລົບເຂດຈຳກັດ ແລະ ກົດຖ່າຍຮູບ.','ເຂົ້າປະຕູທີ່ກຳນົດ ແລະ ກວດຫ້ອງທີ່ເປີດ|ອ່ານປ້າຍອຸປະກອນ ແລະ ຮູບປະຫວັດ|ຖ້າລານເປີດ ຈຶ່ງຊົມອຸປະກອນໃຫຍ່ຕາມທາງທີ່ອະນຸຍາດ'],
  },
  'buddha-park': {
    zh:['香昆佛像公园有大量姿态各异的宗教主题雕塑，尤其值得区分大型卧佛、神像群与造型奇特的结构；园区多为露天。','佛像公园是一处20世纪艺术创作场所，融合佛教和印度教图像，并非年代久远的传统寺院遗址。','从 Tha Deua 路一侧入口确认票价与开放区域|沿主步道依次观察大型卧佛、雕像群及醒目的造型建筑|按标识返回入口，炎热时在有阴影处休息；勿攀爬禁入雕塑'],
    en:['Look for the varied religious sculptures, the large reclining Buddha and unusually shaped structures. Much of the park is exposed to sun.','Created in the twentieth century, Buddha Park combines Buddhist and Hindu imagery; it is a modern sculpture environment, not an ancient monastic ruin.','Check entrance rules from the Tha Deua Road side|Follow main paths to the reclining Buddha, statue groups and sculptural structures|Return using marked paths, resting in shade and avoiding prohibited climbing'],
    lo:['ສວນພະມີຮູບປັ້ນສາສະໜາຫຼາຍແບບ ພະນອນໃຫຍ່ ແລະ ອາຄານຮູບຊົງແປກ; ລານຫຼາຍບ່ອນຢູ່ກາງແດດ.','ສວນພະສ້າງໃນສະຕະວັດທີ 20 ປະສົມຮູບພຸດ ແລະ ຮິນດູ ບໍ່ແມ່ນຊາກວັດໂບຮານ.','ກວດປະຕູ ແລະ ຄ່າເຂົ້າຈາກທາງຖະໜົນທ່າເດື່ອ|ຍ່າງຊົມພະນອນ ແລະ ກຸ່ມຮູບປັ້ນຕາມທາງ|ກັບປະຕູຕາມປ້າຍ ແລະ ພັກຮົ່ມເມື່ອຮ້ອນ'],
  },
  'talat-sao': {
    zh:['从建筑外观辨认早市区域，再观察不同摊区的纺织品、饰品和日用品；较新的商场与传统市场的经营方式并不相同。','Talat Sao 是万象居民采购和游客购物交汇的空间，比较商品材质、标价及当地交易习惯比只拍摄摊位更有价值。','从澜沧大道一带进入早市商业区|先看传统摊区，再按需要进入现代商场，比较布料与手工商品|从原有公共出口离开；保管财物并询问商家是否可拍摄'],
    en:['Identify the market building from the street, then compare textiles, jewelry and daily goods across stall areas. Modern retail and older market sections operate differently.','Talat Sao brings resident shopping and tourism together. Materials, listed prices and local trading customs give more insight than stall photographs alone.','Enter the market district from the Lane Xang Avenue side|Browse traditional stalls, then compare goods in newer retail areas if open|Exit by public routes, watch belongings and ask before photographing sellers'],
    lo:['ເບິ່ງອາຄານຕະຫຼາດຈາກຖະໜົນ ແລ້ວສຳຫຼວດຜ້າແພ ເຄື່ອງປະດັບ ແລະ ສິນຄ້າໃນແຜງ; ຫ້າງໃໝ່ກັບຕະຫຼາດເກົ່າມີບັນຍາກາດຕ່າງກັນ.','ຕະຫຼາດເຊົ້າເປັນບ່ອນຊື້ຂາຍຂອງຊາວເມືອງ ແລະ ຜູ້ມາທ່ຽວ; ຄວນເບິ່ງວັດຖຸ ລາຄາ ແລະ ມາລະຍາດການຄ້າ.','ເຂົ້າເຂດຕະຫຼາດຈາກທາງຖະໜົນລ້ານຊ້າງ|ຊົມແຜງເກົ່າ ແລະ ຮ້ານໃໝ່ຕາມທີ່ເປີດ|ອອກທາງສາທາລະນະ ຮັກສາສິ່ງຂອງ ແລະ ຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບ'],
  },
  'nam-phou-fountain': {
    zh:['南普喷泉所在的小广场及环绕建筑围出一个城市会面空间；要注意喷泉是否运行与周边店铺景观是两回事。','它是万象老城区常用的集合地点，反映咖啡馆文化与街道公共生活；喷泉并非全天持续运行的表演设施。','从广场外的人行道辨认喷泉与周边街口|在不挡店家出入口的位置观察广场尺度与座椅|沿合法人行道继续到附近街巷或文化宫'],
    en:['The small square, fountain basin and surrounding buildings form a recognizable meeting space. A non-operating fountain still has a distinct urban setting.','Nam Phou is part of old-town café and street life, not a continuously scheduled fountain performance.','Identify the basin and intersecting streets from an outer sidewalk|Observe the square and seating without blocking café access|Continue by pedestrian streets toward other central landmarks'],
    lo:['ລານນ້ຳພຸ ອ່າງນ້ຳ ແລະ ອາຄານຮອບຂ້າງສ້າງບ່ອນນັດພົບກາງເມືອງ; ນ້ຳພຸອາດບໍ່ໄຫຼທຸກເວລາ.','ນ້ຳພຸເປັນສ່ວນຂອງຊີວິດຮ້ານກາເຟ ແລະ ຖະໜົນເກົ່າ ບໍ່ແມ່ນການສະແດງນ້ຳພຸຕະຫຼອດວັນ.','ເບິ່ງອ່າງນ້ຳພຸ ແລະ ທາງແຍກຈາກຟຸດບາດ|ຊົມລານ ແລະ ທີ່ນັ່ງໂດຍບໍ່ຂວາງຮ້ານ|ຍ່າງຕໍ່ໄປຕາມຖະໜົນສາທາລະນະ'],
  },
  'national-cultural-hall': {
    zh:['从 Samsenthai 路一带观察文化宫的公共建筑立面、入口台阶和活动海报；内部空间只有在活动或开放安排允许时才进入。','文化宫是演出、会议与艺术活动场所，与开放式寺院不同，观众体验取决于当期节目与入场安排。','从公共街道观看建筑正面和入口公告|若有可参加的正式活动，按票务和安检进入|没有开放活动则只赏外观，再前往老城区其他文化地点'],
    en:['From Samsenthai Road, observe the civic facade, entrance steps and event posters. Interior access depends on a scheduled public event.','The hall hosts performances and cultural gatherings, unlike an always-open park; its visitor experience depends on the programme.','See the main facade and event announcements from public space|Enter only for a permitted scheduled event with applicable ticketing|Otherwise treat it as an exterior stop and continue into old Vientiane'],
    lo:['ຈາກຖະໜົນສາມແສນໄທ ສັງເກດດ້ານໜ້າ ຂັ້ນໄດ ແລະ ປ້າຍກິດຈະກຳ; ການເຂົ້າພາຍໃນຂຶ້ນກັບລາຍການ.','ຫໍວັດທະນະທຳເປັນບ່ອນການສະແດງ ແລະ ກິດຈະກຳ ບໍ່ແມ່ນສວນທີ່ເຂົ້າໄດ້ຕະຫຼອດ.','ຊົມດ້ານໜ້າ ແລະ ປ້າຍງານຈາກທາງສາທາລະນະ|ເຂົ້າພຽງເມື່ອມີງານທີ່ອະນຸຍາດ|ຖ້າບໍ່ມີງານ ຊົມພາຍນອກແລ້ວຍ່າງຕໍ່'],
  },
  'fa-ngum-statue': {
    zh:['从公园安全视角观察法昂王雕像的姿势、底座与周边空间，把雕像主体和所在的纪念园一同拍摄。','法昂王与14世纪澜沧王国的建立有关，这座近现代纪念雕像承载的是对早期王国的历史记忆。','先从公园入口位置辨识法昂王雕像及底座|环绕允许通行的地面观察雕像姿势与纪念空间|阅读纪念说明后离开，避免攀爬底座或进入受限区域'],
    en:['Observe King Fa Ngum’s pose, pedestal and park context from public viewpoints. Frame the commemorative space alongside the statue.','The modern monument recalls the fourteenth-century foundation tradition of Lan Xang and should be interpreted as historical remembrance.','Identify the statue and pedestal from the park approach|Walk through permitted areas to compare the pose and setting|Read any memorial inscriptions without climbing the base'],
    lo:['ສັງເກດທ່າທາງພະເຈົ້າຟ້າງຸ່ມ ຖານຮູບປັ້ນ ແລະ ບໍລິເວນສວນຈາກຈຸດສາທາລະນະ.','ອະນຸສາວະລີນີ້ລະນຶກການສ້າງລ້ານຊ້າງໃນສະຕະວັດທີ 14 ເປັນຄວາມຊົງຈຳທາງປະຫວັດ.','ຫາຮູບປັ້ນ ແລະ ຖານຈາກທາງເຂົ້າສວນ|ຍ່າງຊົມຈາກບ່ອນທີ່ອະນຸຍາດ|ອ່ານປ້າຍອະນຸສອນໂດຍບໍ່ປີນຖານ'],
  },
  'city-pillar-shrine': {
    zh:['神祠的供奉空间、屋顶与门廊应结合祭拜动线观察；拍照时应避开正在进行的仪式及私人祈愿。','城柱信仰象征城市守护和地方记忆，与西孟寺的相关传统可以对照，但两处是不同参观点。','在外侧先观察神祠建筑与参拜入口|沿现场允许的动线观看供奉空间，不阻挡香客|离开后可单独前往西孟寺理解相关信仰背景'],
    en:['View the shrine roof, portico and offering space in relation to the worship route. Avoid recording private prayers or interrupting ceremonies.','The city-pillar tradition concerns urban protection and civic memory. It can be compared with Wat Si Muang, but the two are separate places.','Observe the shrine facade and worship entrance from outside|Follow the permitted path around offering areas without blocking devotees|Visit Wat Si Muang separately if you wish to compare related traditions'],
    lo:['ຊົມຫຼັງຄາ ຊຸ້ມປະຕູ ແລະ ບ່ອນຖວາຍເຄື່ອງໂດຍຄຳນຶງເຖິງທາງຜູ້ມາໄຫວ້; ຢ່າຖ່າຍພິທີສ່ວນຕົວ.','ຄວາມເຊື່ອຫຼັກເມືອງກ່ຽວກັບການປົກປ້ອງເມືອງ ສາມາດສຶກສາຄູ່ກັບວັດສີເມືອງແຕ່ເປັນຄົນລະບ່ອນ.','ຊົມດ້ານໜ້າ ແລະ ທາງເຂົ້າຫໍ|ເດີນຕາມທາງທີ່ອະນຸຍາດໂດຍບໍ່ຂວາງຜູ້ໄຫວ້|ຈາກນັ້ນຈຶ່ງໄປວັດສີເມືອງຕ່າງຫາກ'],
  },
  'wat-that-luang-neua': {
    zh:['塔銮北寺有自己的佛殿、院落及僧侣空间，与金色主塔的围墙和开放区域不同，观察时应清楚区分两者。','北寺是塔銮宗教区的一部分，参观重点在持续运行的寺院生活，而不只是把金塔纳入照片背景。','先在塔銮区域地图上确认北寺独立入口|于开放庭院观察佛殿与寺院建筑，不进入僧房|沿允许路线返回塔銮公共区域，另行参观金塔'],
    en:['Wat That Luang Neua has its own hall, courtyard and monastic areas distinct from the golden stupa enclosure. Keep these spaces separate in your observations.','The northern monastery is part of the wider That Luang religious landscape and is a working temple, not merely a backdrop for stupa photography.','Find the monastery’s separate northern entrance on the map|Observe the hall from open courtyard areas without entering monks’ quarters|Return by permitted paths to the main That Luang public precinct'],
    lo:['ວັດທາດຫຼວງເໜືອມີສິມ ລານ ແລະ ກຸດຕິຂອງຕົນ ແຍກຈາກຮົ້ວອົງພະທາດສີຄຳ.','ວັດເໜືອເປັນວັດທີ່ມີຊີວິດທາງສາສະໜາ ບໍ່ແມ່ນພຽງພື້ນຫຼັງຖ່າຍຮູບພະທາດ.','ຫາທາງເຂົ້າວັດເໜືອຕ່າງຫາກໃນແຜນທີ່|ຊົມສິມຈາກລານເປີດ ບໍ່ເຂົ້າກຸດຕິ|ກັບໄປເຂດພະທາດຕາມທາງອະນຸຍາດ'],
  },
  'wat-that-luang-tai': {
    zh:['塔銮南寺的独立佛殿、装饰和庭院可与北寺比较；视角应落在南寺自身建筑，而不是误把旁边金塔当作寺院主体。','南寺与大型宗教节庆的空间环境相邻，平日也有寺院礼拜活动，应遵守信众通行与僧房限制。','从塔銮南侧按专属地图找到寺门|先看南寺佛殿和庭院装饰，再比较远处金塔的位置|沿公共路线离开，如想看金塔需另外进入对应参观区域'],
    en:['Compare the southern monastery’s own hall, ornament and courtyard with the northern temple. Do not label the neighboring golden stupa as Wat That Luang Tai itself.','The temple lies within a major ceremonial district and maintains its own worship routines; avoid interrupting devotees or entering residential quarters.','Find the separate southern temple entrance using its map pin|Observe the hall, courtyard decoration and relationship to the distant stupa|Leave by public paths and enter the main stupa area separately if desired'],
    lo:['ວັດທາດຫຼວງໃຕ້ມີສິມ ລວດລາຍ ແລະ ລານຂອງຕົນ; ຢ່າສັບສົນກັບອົງພະທາດສີຄຳຂ້າງໆ.','ວັດໃຕ້ຢູ່ໃນເຂດງານບຸນໃຫຍ່ ແລະ ຍັງມີພິທີປະຈຳວັນ; ຢ່າລົບກວນຜູ້ໄຫວ້.','ຫາປະຕູວັດໃຕ້ຕ່າງຫາກຈາກແຜນທີ່|ຊົມສິມ ລານ ແລະ ຕຳແໜ່ງພະທາດໄກໆ|ອອກທາງສາທາລະນະ ແລ້ວເຂົ້າພະທາດຕ່າງຫາກ'],
  },
  'lao-art-museum': {
    zh:['重点看木雕佛像、人物与浮雕如何在现代展厅的灯光和展示空间中排列；应结合题签了解材料与工艺。','艺术博物馆将传统雕刻语言放进当代展陈环境，可讨论工匠技艺如何被保存与重新解读。','按馆址地图到达 Sivilay 区域并确认展览入口|从展厅整体布局进入，逐区观察木雕造型与细节|核对摄影规定，再到附属公共空间或原入口离开'],
    en:['Notice how carved wooden Buddhist figures and reliefs are displayed under contemporary gallery lighting. Labels can clarify materials and craftsmanship.','The museum places traditional carving in a modern exhibition setting, inviting discussion of how local artistic techniques are preserved and reinterpreted.','Reach the Sivilay-area museum entrance using its own map pin|Follow the gallery sequence from large sculptural groups to details|Check photography rules before visiting other public facilities or exiting'],
    lo:['ສັງເກດຮູບໄມ້ແກະ ພະພຸດທະຮູບ ແລະ ພາບນູນທີ່ຈັດວາງໃນຫ້ອງສະແດງສະໄໝໃໝ່; ອ່ານປ້າຍວັດສະດຸ.','ພິພິທະພັນນຳສິລະປະໄມ້ແກະດັ້ງເດີມມາຈັດສະແດງໃໝ່ ເພື່ອຮັກສາ ແລະ ອະທິບາຍຝີມືຊ່າງ.','ໃຊ້ແຜນທີ່ໄປທາງສີວິໄລ ແລະ ຫາປະຕູພິພິທະພັນ|ຊົມກຸ່ມຮູບໄມ້ແກະແລ້ວສັງເກດລາຍລະອຽດ|ກວດກົດຖ່າຍຮູບກ່ອນອອກ'],
  },
  'friendship-bridge': {
    zh:['从合法公共观景处远看跨河桥梁与口岸设施，桥面属于国际交通通道，不能把它当作自由步行或摄影的平台。','第一泰老友谊大桥象征两国交通连接，也承担边境通关功能。参观与跨境旅行是两种不同计划。','先确认自己要去的是老挝一侧公共区域还是正式口岸|从允许停留的位置观察桥梁与湄公河，不进入车道|需要过境者按海关与交通安排办理；纯观景者原路离开'],
    en:['View the river span and border facilities only from lawful public vantage points. The deck is an international traffic corridor, not a casual photography walkway.','The first Friendship Bridge represents Lao–Thai connectivity while functioning as a working border crossing. Looking at the bridge and crossing the border require different plans.','Identify whether you are visiting a public viewpoint or the official checkpoint|Observe the span without entering traffic or restricted lanes|Use formal immigration and transport procedures if crossing; otherwise return by the public route'],
    lo:['ຊົມຂົວຂ້າມແມ່ນ້ຳ ແລະ ດ່ານຈາກຈຸດສາທາລະນະທີ່ອະນຸຍາດ; ຜິວຂົວເປັນທາງຄົມມະນາຄົມສາກົນ.','ຂົວມິດຕະພາບເຊື່ອມລາວ ແລະ ໄທ ພ້ອມທັງເປັນດ່ານຊາຍແດນ; ການຊົມຂົວຕ່າງຈາກການຂ້າມປະເທດ.','ກວດວ່າຈະໄປຈຸດຊົມສາທາລະນະ ຫຼື ດ່ານທາງການ|ຊົມຂົວຈາກບ່ອນທີ່ອະນຸຍາດ ບໍ່ເຂົ້າທາງລົດ|ຖ້າຂ້າມແດນໃຫ້ປະຕິບັດຕາມດ່ານ ຫຼື ກັບທາງເກົ່າ'],
  },
  'king-anouvong-monument': {
    zh:['从公园主轴观察国王雕像伸向湄公河的手势、佩剑、底座与河岸视线，最好让雕像与河水同时入镜。','雕像纪念万象末代王朝时期的昭阿奴翁，河滨位置赋予其纪念意义；它与公园一般休闲空间使用规则不同。','从公园公共步道走向高大的国王雕像|在不攀爬底座的位置观察雕像方向与河岸关系|再沿湄公河滨散步道前往日落观景区'],
    en:['Read the king’s extended arm, sword and pedestal in relation to the Mekong-facing axis. A photograph including river and statue explains the setting.','The monument recalls King Anouvong and Vientiane’s nineteenth-century history. Its commemorative space deserves different conduct from an ordinary recreation lawn.','Approach the tall statue using Chao Anouvong Park’s public paths|Observe the gesture and river-facing orientation without climbing the base|Continue along the Mekong promenade for a separate sunset view'],
    lo:['ສັງເກດພະຫັດທີ່ຊີ້ໄປແມ່ນ້ຳ ດາບ ຖານຮູບປັ້ນ ແລະ ທິດທາງແຄມຂອງ.','ອະນຸສາວະລີລະນຶກພະເຈົ້າອະນຸວົງ ແລະ ປະຫວັດວຽງຈັນສະຕະວັດທີ 19; ຄວນເຄົາລົບບໍລິເວນອະນຸສອນ.','ຍ່າງຈາກທາງສວນໄປຫາຮູບປັ້ນໃຫຍ່|ຊົມທ່າທາງ ແລະ ທິດແມ່ນ້ຳໂດຍບໍ່ປີນຖານ|ຍ່າງຕໍ່ໄປທາງແຄມຂອງຊົມຕາເວັນຕົກ'],
  },
  'vientiane-night-market': {
    zh:['红色棚顶、狭长摊道以及服装纪念品展示构成夜市的主要画面；与傍晚公园人流一起观察更能理解河滨活动。','夜市是流动摊商经营空间，摊位数量、商品及营业时间都可能变化。拍摄摊主和顾客前应征求同意。','日落前先沿 Fa Ngum 河滨确认夜市实际入口|沿开放摊道分区浏览服饰、纪念品与周边小吃|从公共出口返回河滨步道，避开收摊车辆与拥挤路段'],
    en:['Red-topped stalls, narrow aisles and clothing displays define the evening market. The contrast with promenade activity reveals the riverfront’s changing daily rhythm.','This is a working vendor district, not a fixed museum; layouts and hours vary. Ask before photographing sellers or shoppers.','Find the operating market entrance along the Fa Ngum riverside near dusk|Browse open aisles and compare clothing, souvenirs and nearby food areas|Return by a public exit and watch for closing vehicles or crowded junctions'],
    lo:['ຫຼັງຄາຜ້າເຕັນສີແດງ ທາງຍ່າງແຄບ ແລະ ແຜງເສື້ອຜ້າເປັນພາບເດັ່ນຂອງຕະຫຼາດຍາມແລງ.','ຕະຫຼາດມີຜູ້ຄ້າປັບແຜງ ແລະ ເວລາເປີດໄດ້; ຄວນຂໍອະນຸຍາດກ່ອນຖ່າຍພໍ່ຄ້າແມ່ຄ້າ.','ກວດທາງເຂົ້າຕະຫຼາດຢູ່ຖະໜົນຟ້າງຸ່ມກ່ອນຄ່ຳ|ຍ່າງຕາມຊອຍແຜງເສື້ອຜ້າ ແລະ ຂອງທີ່ລະນຶກ|ກັບທາງແຄມຂອງໂດຍຫຼີກລົດເກັບແຜງ'],
  },
  'mekong-riverside-promenade': {
    zh:['宽阔的河岸视野、季节变化的沙洲和跨河眺望是步道的自然看点；拍照时可把栏杆、河岸与晚霞形成前后层次。','湄公河既是城市休闲景观，也是跨境河流和季节性水文环境。日落时段人流多，勿将河滩视作全天安全通道。','从昭阿奴翁公园一侧进入正式河滨公共步道|沿允许通行的铺装路段寻找不同河景视角|日落后从亮灯的城市路口返回，不下到陌生河滩'],
    en:['The broad river prospect, seasonal sandbars and views toward Thailand define this promenade. Combine railings, bank and sunset sky to show depth.','The Mekong is both a civic leisure landscape and a changing international river. Low-water banks are not automatically safe public paths.','Enter the formal riverside walkway near Chao Anouvong Park|Use the paved public section to compare river views and sunset angles|Return through lit city-side junctions after dusk rather than descending unknown riverbanks'],
    lo:['ທິວທັດແມ່ນ້ຳກວ້າງ ຫາດຊາຍຕາມລະດູ ແລະ ຝັ່ງໄທເປັນຈຸດເດັ່ນ; ຖ່າຍພາບໃຫ້ມີຝັ່ງນ້ຳ ແລະ ຟ້າຍາມແລງ.','ແມ່ນ້ຳຂອງເປັນທັງບ່ອນພັກຜ່ອນ ແລະ ແມ່ນ້ຳຊາຍແດນທີ່ລະດັບນ້ຳປ່ຽນຕາມລະດູ.','ເຂົ້າທາງຍ່າງແຄມຂອງຈາກສວນເຈົ້າອະນຸວົງ|ຍ່າງຕາມທາງປູພື້ນແລ້ວຊົມມຸມແມ່ນ້ຳ|ຫຼັງຄ່ຳໃຫ້ກັບທາງຖະໜົນມີແສງ ບໍ່ລົງຫາດທີ່ບໍ່ຮູ້ຈັກ'],
  },
  'wat-sokpaluang': {
    zh:['索帕銮寺的佛殿、树木与安静的院落构成不同于市中心密集街区的观察环境；若有禅修活动应保持距离和安静。','这座寺院与当地禅修传统相关，游客不应把静修空间当成自由参观或拍摄的活动区。','从 Sok Pa Luang 区域按专属地图确认寺院入口|沿开放路径观察佛殿与林荫环境，不进入正在禅修的空间|从原路安静离开，交通回程需另外安排'],
    en:['The hall, trees and quiet courtyard provide a different setting from dense central streets. Give any meditation activity privacy and space.','Wat Sok Pa Luang is associated with meditation practice; a quiet retreat area is not a freely accessible photo set.','Confirm the entrance in the Sok Pa Luang district using its own map pin|Observe the hall and shaded grounds only along accessible paths|Leave quietly by the same public route and arrange onward transport separately'],
    lo:['ສິມ ຕົ້ນໄມ້ ແລະ ລານສະຫງົບຂອງວັດໂສກປ່າຫຼວງຕ່າງຈາກຖະໜົນໃຈກາງເມືອງ; ຢ່າລົບກວນການພາວະນາ.','ວັດນີ້ຜູກພັນກັບການນັ່ງສະມາທິ ບໍ່ຄວນເຂົ້າເຂດສະຫງົບເພື່ອຖ່າຍຮູບໂດຍພະລະການ.','ຫາປະຕູວັດໃນເຂດໂສກປ່າຫຼວງຈາກແຜນທີ່|ຊົມສິມ ແລະ ສວນຮົ່ມໃນທາງທີ່ເປີດ|ອອກທາງເກົ່າຢ່າງສະຫງົບ ແລະ ຈັດລົດກັບ'],
  },
};
