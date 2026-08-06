import type { Locale } from './config';

export const navItems = {
  ja: [
    ['about', '私たちについて'],
    ['products', 'プロダクト'],
    ['journal', 'ジャーナル'],
    ['events', 'イベント'],
    ['access', 'アクセス'],
    ['contact', 'お問い合わせ'],
  ],
  en: [
    ['about', 'About'],
    ['products', 'Products'],
    ['journal', 'Journal'],
    ['events', 'Events'],
    ['access', 'Access'],
    ['contact', 'Contact'],
  ],
  it: [
    ['about', 'Chi siamo'],
    ['products', 'Prodotti'],
    ['journal', 'Diario'],
    ['events', 'Eventi'],
    ['access', 'Accesso'],
    ['contact', 'Contatti'],
  ],
} as const satisfies Record<Locale, readonly (readonly [string, string])[]>;

export const home = {
  ja: {
    metaTitle: 'ALMANACCO｜イタリアの食と暮らしを日本へ',
    metaDescription: 'ALMANACCOは、イタリアの職人性と日本の美意識を結ぶ、プレミアムな食と暮らしのセレクトブランドです。',
    eyebrow: '静けさを纏うイタリアンライフスタイル',
    title: '日々の食卓に、季節の余韻を。',
    intro: '土地の暦に寄り添い、誠実につくられた味と道具だけを選び、日本の暮らしへ丁寧に届けます。',
    cta: 'プロダクトを見る',
    secondary: 'ブランドを知る',
  },
  en: {
    metaTitle: 'ALMANACCO | Italian food and living for Japan',
    metaDescription: 'ALMANACCO curates premium Italian food, craft, and seasonal living essentials for Japan.',
    eyebrow: 'Italian lifestyle with quiet refinement',
    title: 'Seasonal moments for the everyday table.',
    intro: 'We select honest flavors and objects shaped by place, craft, and time, then present them with Japanese restraint.',
    cta: 'View products',
    secondary: 'Our story',
  },
  it: {
    metaTitle: 'ALMANACCO | Sapori e vita italiana per il Giappone',
    metaDescription: 'ALMANACCO seleziona prodotti gastronomici, artigianato e rituali stagionali italiani per il Giappone.',
    eyebrow: 'Lifestyle italiano con sobria eleganza',
    title: 'La stagione quotidiana, a tavola.',
    intro: 'Scegliamo sapori e oggetti sinceri, nati da luogo, mestiere e tempo, per presentarli con sensibilità giapponese.',
    cta: 'Scopri i prodotti',
    secondary: 'La nostra storia',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export const pageCopy = {
  ja: {
    about: ['私たちについて', '土地、季節、職人の手仕事を尊び、イタリアの豊かな日常を日本の感性に合わせて編集します。'],
    products: ['プロダクト', 'オリーブオイル、調味料、保存食、テーブルウェアなど、長く愛せる定番を丁寧に選びます。'],
    journal: ['ジャーナル', '生産者の背景、季節のレシピ、旅の記録、イベントレポートを静かな編集視点で綴ります。'],
    events: ['イベント', '試食会、ワークショップ、ポップアップなど、ALMANACCOの世界観を体験する機会をご案内します。'],
    access: ['アクセス', '東京ショールームへのアクセス、営業時間、予約についてご確認いただけます。'],
    contact: ['お問い合わせ', '卸、取材、イベント、ギフトのご相談など、お気軽にお問い合わせください。'],
  },
  en: {
    about: ['About', 'We edit the richness of Italian everyday life through place, season, craft, and a Japanese sense of restraint.'],
    products: ['Products', 'Olive oil, condiments, preserves, and table objects selected for quiet beauty and lasting use.'],
    journal: ['Journal', 'Producer stories, seasonal recipes, travel notes, and event reports from an editorial point of view.'],
    events: ['Events', 'Tastings, workshops, and pop-ups where guests can experience the ALMANACCO world.'],
    access: ['Access', 'Showroom location, opening hours, and reservation details for Tokyo visits.'],
    contact: ['Contact', 'For wholesale, press, events, and gifts, please contact the ALMANACCO team.'],
  },
  it: {
    about: ['Chi siamo', 'Interpretiamo la ricchezza della vita quotidiana italiana attraverso luogo, stagione, mestiere e sobrietà giapponese.'],
    products: ['Prodotti', 'Olio, condimenti, conserve e oggetti per la tavola scelti per bellezza discreta e uso duraturo.'],
    journal: ['Diario', 'Storie di produttori, ricette stagionali, appunti di viaggio e report degli eventi.'],
    events: ['Eventi', 'Degustazioni, workshop e pop-up per vivere il mondo ALMANACCO.'],
    access: ['Accesso', 'Indirizzo showroom, orari e dettagli di prenotazione per le visite a Tokyo.'],
    contact: ['Contatti', 'Per wholesale, stampa, eventi e regali, contatta il team ALMANACCO.'],
  },
} as const;
