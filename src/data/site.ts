export const languages = {
  ja: '日本語',
  en: 'English',
  it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ja';

export const localizedPaths = {
  ja: '',
  en: 'en',
  it: 'it',
} as const;

export const nav = {
  ja: [
    ['/', 'ホーム'], ['/about/', '私たちについて'], ['/products/', 'プロダクト'], ['/journal/', 'ジャーナル'], ['/events/', 'イベント'], ['/access/', 'アクセス'], ['/contact/', 'お問い合わせ'],
  ],
  en: [
    ['/en/', 'Home'], ['/en/about/', 'About'], ['/en/products/', 'Products'], ['/en/journal/', 'Journal'], ['/en/events/', 'Events'], ['/en/access/', 'Access'], ['/en/contact/', 'Contact'],
  ],
  it: [
    ['/it/', 'Home'], ['/it/about/', 'Chi siamo'], ['/it/products/', 'Prodotti'], ['/it/journal/', 'Diario'], ['/it/events/', 'Eventi'], ['/it/access/', 'Accesso'], ['/it/contact/', 'Contatti'],
  ],
} as const;

export const copy = {
  ja: {
    eyebrow: '静けさを纏うイタリアンライフスタイル',
    title: '日々の食卓に、季節の余韻を。',
    description: 'ALMANACCOは、イタリアの職人性と日本の美意識を結ぶ、食と暮らしのセレクトブランドです。',
    cta: 'プロダクトを見る',
    secondary: 'ブランドを知る',
  },
  en: {
    eyebrow: 'Italian lifestyle with quiet refinement',
    title: 'Seasonal moments for the everyday table.',
    description: 'ALMANACCO curates food and living essentials that connect Italian craft with Japanese sensibility.',
    cta: 'View products',
    secondary: 'Our story',
  },
  it: {
    eyebrow: 'Lifestyle italiano con sobria eleganza',
    title: 'La stagione quotidiana, a tavola.',
    description: 'ALMANACCO seleziona sapori e oggetti per la casa, unendo artigianalità italiana e sensibilità giapponese.',
    cta: 'Scopri i prodotti',
    secondary: 'La nostra storia',
  },
} as const;

export const products = [
  { name: 'Olio Verde', detail: 'Cold-pressed extra virgin olive oil', tone: 'forest' },
  { name: 'Sale di Mare', detail: 'Hand-harvested sea salt', tone: 'brass' },
  { name: 'Casa Linen', detail: 'Table linen in natural fibers', tone: 'terracotta' },
];

export const events = [
  { date: '2026.09.12', title: 'Seasonal tasting salon', place: 'Tokyo' },
  { date: '2026.10.04', title: 'Olive harvest talk', place: 'Kyoto' },
];
