// 全局站点配置（Chao Anouvong Park / 昭阿奴翁公园 / ສວນເຈົ້າອະນຸວົງ）
// 站点域名单一来源：Canonical / sitemap / JSON-LD / OG 全部引用 self.DOMAIN，避免硬编码错误地址
// 站点域名单一来源：Canonical / sitemap / JSON-LD / OG 全部引用 self.DOMAIN，避免硬编码错误地址。
// 部署时可通过环境变量 CURRENT_SITE_DOMAIN 覆盖；默认即本站正确域名。
const DOMAIN = (process.env.CURRENT_SITE_DOMAIN || 'https://chaoanouvongpark.com').replace(/\/$/, '');

export const siteConfig = {
  // 景点名称（多语言）
  name: {
    lo: 'ສວນເຈົ້າອະນຸວົງ',
    en: 'Chao Anouvong Park',
    zh: '昭阿奴翁公园',
  },

  // 站点域名（用于 Canonical / sitemap / JSON-LD）
  domain: DOMAIN,

  // 简短描述（备用；页面实际描述来自 i18n meta）
  description: {
    lo: 'ສວນເຈົ້າອະນຸວົງ - ສວນສາທາລະນະແຄມແມ່ນ້ຳຂອງ ໃນນະຄອນຫຼວງວຽງຈັນ',
    en: 'Chao Anouvong Park — a riverside city park in Vientiane, Laos.',
    zh: '昭阿奴翁公园——老挝万象湄公河畔的城市公园。',
  },

  // 联系电话
  phone: '',
  phoneDisplay: '',

  // 评分与评论数（Google 商家资料）
  rating: 4.2,
  reviewCount: '6,873',

  // 实时天气/日落 API 坐标（Chao Anouvong Park, Vientiane, Laos）
  coords: {
    lat: Number(import.meta.env.PUBLIC_LAT) || 17.9615592,
    lng: Number(import.meta.env.PUBLIC_LNG) || 102.6073178,
  },

  // Google Maps 跳转链接
  mapsUrl: import.meta.env.PUBLIC_MAPS_URL || 'https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA',

  // Google Maps 嵌入
  googleMapsEmbed:
    import.meta.env.PUBLIC_MAPS_EMBED ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.369048300004!2d102.60731779999999!3d17.9615592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312468891baae699%3A0x809d0bc8d450810b!2z5pit6Zi_5aW057-B5YWs5Zut!5e0!3m2!1szh-CN!2sus!4v1784773187479!5m2!1szh-CN!2sus',

  // 地址与 Plus Code
  address: import.meta.env.PUBLIC_ADDRESS || 'Vientiane 01600 Laos',
  plusCode: import.meta.env.PUBLIC_PLUS_CODE || 'XJ64+JW Vientiane, Laos',

  // 画廊图片前缀
  galleryPrefix: 'chao-anouvong-park-',

  // JSON-LD sameAs
  sameAs: [
    'https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA',
    DOMAIN,
  ],

  // 页脚引用来源
  sources: [
    {
      name: {
        lo: 'ອົງການທ່ອງທ່ຽວແຫ່ງຊາດລາວ',
        en: 'Tourism Laos (National Tourism Administration)',
        zh: '老挝国家旅游局',
      },
      url: 'https://www.tourismlaos.org',
    },
    {
      name: {
        lo: 'ນະຄອນຫຼວງວຽງຈັນ',
        en: 'Vientiane Capital Administration',
        zh: '万象市政府',
      },
      url: 'https://vientianecapital.gov.la',
    },
    {
      name: {
        lo: 'Google Maps',
        en: 'Google Maps listing',
        zh: 'Google 地图商家页',
      },
      url: 'https://maps.app.goo.gl/Zup1C9cs3wpiu2FSA',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
