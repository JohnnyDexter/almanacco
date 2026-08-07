export type Lang = "ja" | "it" | "en";

export const langs: Lang[] = ["ja", "it", "en"];

export const langLabels: Record<Lang, string> = {
  ja: "日本語",
  it: "Italiano",
  en: "English",
};

export const langPaths: Record<Lang, string> = {
  ja: "/ja/",
  it: "/it/",
  en: "/en/",
};

export interface ProductItem {
  name: string;
  category: string;
  description: string;
  /** Percorso dell'immagine in public/, es. "/images/04-olive-valeri.jpg". Se assente, la card mostra un placeholder. */
  image?: string;
}

export interface SiteContent {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    shop: string;
    sekki: string;
    journal: string;
    events: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    /** Claim del brand, tenuto identico nelle tre lingue: compare anche nel logo. */
    tagline: string;
    cta: string;
  };
  sekkiWidget: {
    kicker: string;
    title: string;
    description: string;
    prevLabel: string;
    nextLabel: string;
    ctaLabel: string;
  };
  categories: {
    kicker: string;
    title: string;
    ctaLabel: string;
    items: { title: string; image?: string }[];
  };
  journal: {
    kicker: string;
    title: string;
    text: string;
    ctaLabel: string;
  };
  journalPage: {
    kicker: string;
    title: string;
    intro: string;
    articles: { title: string; excerpt: string }[];
    comingSoonNote: string;
  };
  sekkiPage: {
    kicker: string;
    title: string;
    intro: string[];
    seasons: { spring: string; summer: string; autumn: string; winter: string };
  };
  newsletter: {
    title: string;
    text: string;
    placeholder: string;
    ctaLabel: string;
    disabledNote: string;
  };
  storia: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  prodotti: {
    kicker: string;
    title: string;
    intro: string;
    items: ProductItem[];
  };
  almanacco: {
    kicker: string;
    title: string;
    intro: string;
    eventLabel: string;
    eventTitle: string;
    eventText: string;
    pairingLabel: string;
    pairingText: string;
    moreNote: string;
  };
  contatti: {
    kicker: string;
    title: string;
    shopName: string;
    addressLabel: string;
    addressLines: string[];
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hoursValue: string;
    socialLabel: string;
    socialValue: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
    philosophyLabel: string;
    calendarLabel: string;
    paymentsLabel: string;
    /** Testo prima del link "IKITARIA" nel credito di fondo pagina. */
    creditPrefix: string;
    /** Testo dopo il link "IKITARIA" (può essere vuoto). */
    creditSuffix: string;
  };
  /** Etichetta breve usata come kicker nelle pagine ancora scheletriche. */
  comingSoonLabel: string;
}

export const content: Record<Lang, SiteContent> = {
  ja: {
    htmlLang: "ja",
    meta: {
      title: "Almanacco（アルマナッコ）| 横須賀のマルケ州イタリア食材店",
      description:
        "神奈川県横須賀市にあるイタリア食材店 Almanacco。イタリア・マルケ州のオリーブオイルとワインを、日本の季節の暦とともにお届けします。",
    },
    nav: {
      home: "ホーム",
      shop: "ショップ",
      sekki: "節気",
      journal: "ジャーナル",
      events: "イベント",
      about: "私たちについて",
      contact: "お問い合わせ",
    },
    hero: {
      title: "Almanacco",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "コレクションを見る",
    },
    sekkiWidget: {
      kicker: "季節のリズム",
      title: "今の節気",
      description: "日本で時を刻む二十四節気の暦。ここでマルケのアルマナッコと出会います。",
      prevLabel: "前の節気",
      nextLabel: "次の節気",
      ctaLabel: "もっと詳しく",
    },
    categories: {
      kicker: "畑から店先へ",
      title: "カテゴリー",
      ctaLabel: "セレクションを見る",
      items: [
        { title: "オイル＆調味料", image: "/images/04-olive-valeri.jpg" },
        { title: "ワイン＆飲料", image: "/images/05-botti-murola.jpg" },
        { title: "陶器と手仕事" },
        { title: "アルマナッコの日記帳" },
      ],
    },
    journal: {
      kicker: "店の日記から",
      title: "物語、場所、出会い",
      text: "マルケの丘陵地帯から横須賀の街角まで。私たちが店に選ぶものを育て、作り、食卓に運ぶ人々の物語です。",
      ctaLabel: "ジャーナルを読む",
    },
    journalPage: {
      kicker: "店の日記から",
      title: "ジャーナル",
      intro: "Almanacco から届ける物語、出会った人々、季節ごとの小さな覚え書き。このジャーナルは始まったばかりです。少しずつ記事を重ねていきます。",
      articles: [
        {
          title: "「Almanacco」という名前を選んだ理由",
          excerpt: "マルケの農事暦と日本の二十四節気、遠く離れた二つの暦がこの店の名前の中で出会うまでの物語。",
        },
        {
          title: "横須賀で迎えた最初の1年",
          excerpt: "Almanacco の最初の数ヶ月を振り返って。マルケからの最初の荷物、店での最初の集まり、その道のりで学んだこと。",
        },
      ],
      comingSoonNote: "全文はこちらのページに近日公開予定です。",
    },
    sekkiPage: {
      kicker: "季節を刻む暦",
      title: "二十四節気",
      intro: [
        "日本では、二十四節気が昔から季節のリズムを刻んできました。春のはじまりを告げる立春から、一年で最も寒い大寒まで、24の名前が、ひとつの収穫から次の収穫へと移りゆく小さな変化を伝えています。",
        "それは、マルケ州の農村で「アルマナッコ」が果たしてきた役割と同じです。種をまく時、収穫する時、祭りを祝う時を知ること。生まれた場所は遠く離れていても、過ぎゆく時間に耳を澄ませるという、同じ心から生まれた二つの暦です。",
      ],
      seasons: { spring: "春", summer: "夏", autumn: "秋", winter: "冬" },
    },
    newsletter: {
      title: "つながりを保つ",
      text: "季節のお知らせ、新着情報、次の会のご案内。急がず、店からゆっくりお届けします。",
      placeholder: "メールアドレス",
      ctaLabel: "登録する",
      disabledNote: "登録機能は近日公開です",
    },
    storia: {
      kicker: "なぜ「アルマナッコ」なのか",
      title: "物語",
      paragraphs: [
        "アルマナッコ（almanacco）とは、イタリアの農村で昔から使われてきた「暦」のこと。種をまく日、収穫の時期、村の祭りの予定までもが、一冊の暦に書き込まれていました。マルケ州の農家にとって、それは単なるカレンダーではなく、土地と共に生きるための知恵の記録でした。",
        "日本には、同じように季節を読み解くための暦があります。二十四節気です。立春から大寒まで、24の名前がついた季節の節目は、農作業や暮らしのリズムを細やかに教えてくれます。マルケの農事暦と、日本の二十四節気。生まれた場所も言葉も違うのに、同じ願い——季節を見失わずに生きること——から生まれた、よく似た知恵です。",
        "私たちの店の名前を「Almanacco」としたのは、この二つの暦を並べて見せたかったからです。横須賀で暮らす私たちが、マルケ州の畑で摘まれたオリーブとぶどうを、季節の言葉とともにお届けする。それが、この小さな店の役目だと思っています。",
      ],
    },
    prodotti: {
      kicker: "畑から棚へ",
      title: "商品",
      intro:
        "マルケ州の生産者から届く、オリーブオイル、ワイン、パスタ。大量生産ではなく、家族や小さな生産者が丁寧に作るものだけを選んでいます。",
      items: [
        {
          name: "Frantoio Valeri",
          category: "エキストラバージンオリーブオイル",
          description:
            "マルケ州の在来品種「ミニョーラ（Mignola）」から搾られたエキストラバージンオリーブオイル。青々とした香りとほのかな辛みが特徴で、収穫からすぐに搾油する昔ながらの製法を守っています。",
          image: "/images/04-olive-valeri.jpg",
        },
        {
          name: "Cantina Murola",
          category: "ワイン",
          description:
            "マルケ州の小さな家族経営ワイナリー、ムローラ醸造所のワイン。畑仕事から瓶詰めまで家族の手で行われ、土地の個性をそのまま映した味わいです。",
          image: "/images/05-botti-murola.jpg",
        },
        {
          name: "Colmone della Marca",
          category: "ワイン",
          description:
            "ファットリア・コルモーネが手がけるワイン「Colmone della Marca」。マルケの丘陵地帯らしい、果実味と穏やかな酸のバランスが持ち味です。",
        },
        {
          name: "Pasta Mancini",
          category: "パスタ",
          description:
            "マルケ州の職人的パスタ工房マンチーニ。ブロンズダイスによる押し出し成形と、低温でじっくり時間をかけた乾燥が特徴で、小麦本来の香りをそのまま生かしています。",
        },
      ],
    },
    almanacco: {
      kicker: "季節をめぐる",
      title: "季節の暦",
      intro:
        "私たちは季節ごとに、マルケの味を囲む小さな集まりを開いています。イタリアの家庭料理と、日本の暦が重なる瞬間を、料理とワインで表現しています。",
      eventLabel: "開催した会",
      eventTitle: "タリアテッレ・アル・ラグーと、マルケ風マットネッラ",
      eventText:
        "マルケ地方の伝統料理、手打ちタリアテッレのラグーソースがけ。仕上げには、地元で愛される伝統菓子「マットネッラ」を添えました。素朴で滋味深い、農家の食卓そのものの味です。",
      pairingLabel: "ペアリング",
      pairingText: "Cantina Murola のワインと共に。土地の料理には、土地のワインを。",
      moreNote: "他の会も近日追加予定です。季節ごとにこのページを更新していきます。",
    },
    contatti: {
      kicker: "お店へ",
      title: "アクセス",
      shopName: "Almanacco",
      addressLabel: "住所",
      addressLines: [
        "〒237-0075",
        "神奈川県横須賀市田浦町1-54",
        "月見台住宅 A29",
      ],
      emailLabel: "メール",
      email: "info@ikitaria.com",
      hoursLabel: "営業時間",
      hoursValue: "近日公開予定",
      socialLabel: "SNS",
      socialValue: "近日公開予定",
      note: "営業時間・SNSアカウントは現在準備中です。決まり次第、こちらに掲載いたします。",
    },
    footer: {
      tagline: "マルケの畑から、横須賀の暦へ。",
      rights: "All rights reserved.",
      philosophyLabel: "考え方",
      calendarLabel: "暦",
      paymentsLabel: "お支払い方法（近日対応）",
      creditPrefix: "Almanacco は ",
      creditSuffix: " のプロジェクトです",
    },
    comingSoonLabel: "近日公開",
  },
  it: {
    htmlLang: "it",
    meta: {
      title: "Almanacco | Olio e vino delle Marche a Yokosuka",
      description:
        "Almanacco è la bottega a Yokosuka, Giappone, che porta l'olio extravergine e il vino delle Marche, seguendo il ritmo delle stagioni tra Italia e Giappone.",
    },
    nav: {
      home: "Home",
      shop: "Shop",
      sekki: "Sekki",
      journal: "Journal",
      events: "Eventi",
      about: "Chi siamo",
      contact: "Contatti",
    },
    hero: {
      title: "Almanacco",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "Scopri la collezione",
    },
    sekkiWidget: {
      kicker: "Il ritmo delle stagioni",
      title: "Il sekki del momento",
      description: "Il calendario delle 24 micro-stagioni che scandisce il tempo in Giappone, e che qui incontra l'almanacco marchigiano.",
      prevLabel: "Sekki precedente",
      nextLabel: "Sekki successivo",
      ctaLabel: "Scopri di più",
    },
    categories: {
      kicker: "Dal campo alla bottega",
      title: "Le nostre categorie",
      ctaLabel: "Scopri la selezione",
      items: [
        { title: "Olio & Condimenti", image: "/images/04-olive-valeri.jpg" },
        { title: "Vini & Bevande", image: "/images/05-botti-murola.jpg" },
        { title: "Ceramica & Artigianato" },
        { title: "Il Diario Almanacco" },
      ],
    },
    journal: {
      kicker: "Dal diario di bottega",
      title: "Storie, luoghi, incontri",
      text: "Racconti dalle colline marchigiane e dalle strade di Yokosuka: le persone che coltivano, producono e portano in tavola ciò che scegliamo per il negozio.",
      ctaLabel: "Leggi il Journal",
    },
    journalPage: {
      kicker: "Dal diario di bottega",
      title: "Journal",
      intro: "Racconti, persone e piccoli appunti di stagione da Almanacco: la nostra rubrica è appena nata e crescerà un articolo alla volta.",
      articles: [
        {
          title: "Perché abbiamo scelto il nome Almanacco",
          excerpt: "Il racconto di come due calendari lontanissimi — quello contadino delle Marche e i 24 sekki giapponesi — si sono incontrati nel nome di questo negozio.",
        },
        {
          title: "Il nostro primo anno a Yokosuka",
          excerpt: "Uno sguardo indietro sui primi mesi di Almanacco: le prime spedizioni dalle Marche, i primi incontri in negozio, quello che abbiamo imparato per strada.",
        },
      ],
      comingSoonNote: "Il racconto completo, presto su questa pagina.",
    },
    sekkiPage: {
      kicker: "Il calendario che scandisce le stagioni",
      title: "I 24 Sekki",
      intro: [
        "In Giappone i 24 sekki scandiscono da secoli il ritmo delle stagioni: dal Risshun, l'inizio della primavera, al Daikan, il freddo più intenso dell'anno, ventiquattro nomi segnano i piccoli passaggi che portano da un raccolto all'altro.",
        "È lo stesso bisogno che, nelle campagne marchigiane, teneva vivo l'almanacco contadino: sapere quando seminare, quando raccogliere, quando festeggiare. Due calendari nati lontanissimi tra loro, che raccontano la stessa attenzione al tempo che passa.",
      ],
      seasons: { spring: "Primavera", summer: "Estate", autumn: "Autunno", winter: "Inverno" },
    },
    newsletter: {
      title: "Resta in contatto",
      text: "Novità di stagione, nuovi arrivi e le date dei prossimi incontri: dritte dalla bottega, senza fretta.",
      placeholder: "La tua email",
      ctaLabel: "Iscriviti",
      disabledNote: "Iscrizione in arrivo",
    },
    storia: {
      kicker: "Perché si chiama Almanacco",
      title: "Storia",
      paragraphs: [
        "Nelle campagne italiane, l'almanacco era il libro dove si annotava tutto: il giorno buono per la semina, i tempi della raccolta, le feste del paese. Per i contadini delle Marche non era un semplice calendario, ma il modo in cui si teneva memoria del rapporto con la terra, stagione dopo stagione.",
        "In Giappone esiste qualcosa di sorprendentemente simile: i 24 sekki, le ventiquattro suddivisioni stagionali che dal Risshun (l'inizio della primavera) al Daikan (il freddo più intenso) scandiscono da secoli i lavori agricoli e la vita quotidiana. Nate in luoghi e lingue diverse, l'almanacco contadino marchigiano e i sekki giapponesi rispondono allo stesso bisogno: non perdere il filo delle stagioni.",
        "Abbiamo chiamato questo negozio Almanacco proprio per mettere questi due calendari fianco a fianco. Da Yokosuka, portiamo l'olio e il vino raccolti nei campi delle Marche insieme al racconto delle stagioni che li hanno fatti nascere: è questo, in fondo, il senso di questa piccola bottega.",
      ],
    },
    prodotti: {
      kicker: "Dal campo allo scaffale",
      title: "Prodotti",
      intro:
        "Selezioniamo olio, vino e pasta direttamente da piccoli produttori marchigiani, spesso a conduzione familiare, che lavorano lontano dalla grande distribuzione.",
      items: [
        {
          name: "Frantoio Valeri",
          category: "Olio extravergine d'oliva",
          description:
            "Olio extravergine spremuto dalla cultivar autoctona Mignola. Note erbacee decise e un finale leggermente piccante, frutto di una molitura rapida che segue ancora i tempi della raccolta.",
          image: "/images/04-olive-valeri.jpg",
        },
        {
          name: "Cantina Murola",
          category: "Vino",
          description:
            "I vini della Cantina Murola, piccola realtà familiare marchigiana dove la vigna e la cantina sono ancora affari di famiglia, dalla potatura all'imbottigliamento.",
          image: "/images/05-botti-murola.jpg",
        },
        {
          name: "Colmone della Marca",
          category: "Vino",
          description:
            "Il vino Colmone della Marca, firmato dalla Fattoria Colmone: frutto pieno e acidità equilibrata, l'impronta tipica delle colline marchigiane.",
        },
        {
          name: "Pasta Mancini",
          category: "Pasta",
          description:
            "Il pastificio artigianale Mancini, nelle Marche, noto per la trafilatura al bronzo e per un'essiccazione lenta a bassa temperatura, che preservano tutto il profumo del grano.",
        },
      ],
    },
    almanacco: {
      kicker: "Il tempo delle stagioni",
      title: "Almanacco stagionale",
      intro:
        "Organizziamo periodicamente piccoli incontri a tema stagionale, dove la cucina marchigiana incontra il calendario giapponese, tra un piatto e un bicchiere di vino.",
      eventLabel: "Un evento realizzato",
      eventTitle: "Tagliatelle al ragù e mattonella marchigiana",
      eventText:
        "Tagliatelle fatte a mano condite con un ragù tradizionale, seguite dalla mattonella, il dolce marchigiano di casa. Un menù semplice e sostanzioso, come quelli delle tavole contadine.",
      pairingLabel: "In abbinamento",
      pairingText: "I vini della Cantina Murola: la cucina del territorio merita il vino dello stesso territorio.",
      moreNote: "Altri incontri in arrivo: torneremo ad aggiornare questa pagina a ogni nuova stagione.",
    },
    contatti: {
      kicker: "Vieni a trovarci",
      title: "Contatti",
      shopName: "Almanacco",
      addressLabel: "Indirizzo",
      addressLines: [
        "A29 Tsukimidai Jutaku",
        "1-54 Taura-cho, Yokosuka",
        "Kanagawa 237-0075, Giappone",
      ],
      emailLabel: "Email",
      email: "info@ikitaria.com",
      hoursLabel: "Orari",
      hoursValue: "In arrivo",
      socialLabel: "Social",
      socialValue: "In arrivo",
      note: "Orari di apertura e canali social sono ancora in definizione: saranno pubblicati qui appena disponibili.",
    },
    footer: {
      tagline: "Dai campi delle Marche all'almanacco di Yokosuka.",
      rights: "Tutti i diritti riservati.",
      philosophyLabel: "La Filosofia",
      calendarLabel: "Il Calendario",
      paymentsLabel: "Metodi di pagamento (in arrivo)",
      creditPrefix: "Almanacco è un progetto di ",
      creditSuffix: "",
    },
    comingSoonLabel: "In arrivo",
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Almanacco | Olive oil and wine from the Marche in Yokosuka",
      description:
        "Almanacco is a small shop in Yokosuka, Japan, bringing extra virgin olive oil and wine from the Marche region, following the rhythm of the seasons between Italy and Japan.",
    },
    nav: {
      home: "Home",
      shop: "Shop",
      sekki: "Sekki",
      journal: "Journal",
      events: "Events",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Almanacco",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "Explore the collection",
    },
    sekkiWidget: {
      kicker: "The rhythm of the seasons",
      title: "The current sekki",
      description: "The calendar of 24 micro-seasons that marks time in Japan, meeting the Marche almanac here.",
      prevLabel: "Previous sekki",
      nextLabel: "Next sekki",
      ctaLabel: "Learn more",
    },
    categories: {
      kicker: "From the field to the shop",
      title: "Our categories",
      ctaLabel: "Discover the selection",
      items: [
        { title: "Oil & Condiments", image: "/images/04-olive-valeri.jpg" },
        { title: "Wine & Beverages", image: "/images/05-botti-murola.jpg" },
        { title: "Ceramics & Crafts" },
        { title: "The Almanacco Diary" },
      ],
    },
    journal: {
      kicker: "From the shop journal",
      title: "Stories, places, encounters",
      text: "Stories from the hills of the Marche and the streets of Yokosuka: the people who grow, make, and bring to the table what we choose for the shop.",
      ctaLabel: "Read the Journal",
    },
    journalPage: {
      kicker: "From the shop journal",
      title: "Journal",
      intro: "Stories, people, and seasonal notes from Almanacco: our journal has just begun, and it will grow one article at a time.",
      articles: [
        {
          title: "Why we chose the name Almanacco",
          excerpt: "The story of how two calendars from opposite sides of the world — the Marche farmers' almanac and Japan's 24 sekki — met in the name of this shop.",
        },
        {
          title: "Our first year in Yokosuka",
          excerpt: "A look back at Almanacco's first months: the first shipments from the Marche, the first gatherings in the shop, and what we learned along the way.",
        },
      ],
      comingSoonNote: "The full story, coming soon to this page.",
    },
    sekkiPage: {
      kicker: "The calendar that marks the seasons",
      title: "The 24 Sekki",
      intro: [
        "In Japan, the 24 sekki have long marked the rhythm of the seasons: from Risshun, the start of spring, to Daikan, the depth of winter, twenty-four names trace the small shifts that carry one harvest into the next.",
        "It's the same need that kept the farmers' almanac alive in the Marche countryside: knowing when to sow, when to harvest, when to celebrate. Two calendars born worlds apart, telling the same story of paying attention to passing time.",
      ],
      seasons: { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" },
    },
    newsletter: {
      title: "Stay in touch",
      text: "Seasonal news, new arrivals, and dates for upcoming gatherings — straight from the shop, at our own pace.",
      placeholder: "Your email",
      ctaLabel: "Subscribe",
      disabledNote: "Sign-up coming soon",
    },
    storia: {
      kicker: "Why we're called Almanacco",
      title: "Story",
      paragraphs: [
        "In the Italian countryside, the almanacco (almanac) was the book where everything was written down: the right day for sowing, the time for harvest, the village festivals. For farming families in the Marche, it wasn't just a calendar — it was how the relationship with the land was remembered, season after season.",
        "Japan has something remarkably similar: the 24 sekki, the twenty-four seasonal divisions that, from Risshun (the start of spring) to Daikan (the depth of winter), have long guided farm work and daily life. Born in different places and languages, the Marche farmers' almanac and the Japanese sekki answer the same need: never losing track of the seasons.",
        "We named this shop Almanacco to place these two calendars side by side. From Yokosuka, we bring olive oil and wine harvested in the fields of the Marche, together with the story of the seasons that shaped them — that, in the end, is what this small shop is about.",
      ],
    },
    prodotti: {
      kicker: "From the field to the shelf",
      title: "Products",
      intro:
        "We source olive oil, wine, and pasta directly from small producers in the Marche, often family-run, working outside the reach of large-scale distribution.",
      items: [
        {
          name: "Frantoio Valeri",
          category: "Extra virgin olive oil",
          description:
            "Extra virgin olive oil pressed from the native Mignola cultivar. Bold, grassy notes and a lightly peppery finish, the result of rapid milling that still follows the pace of the harvest.",
          image: "/images/04-olive-valeri.jpg",
        },
        {
          name: "Cantina Murola",
          category: "Wine",
          description:
            "Wines from Cantina Murola, a small family-run winery in the Marche where the vineyard and the cellar are still a family affair, from pruning to bottling.",
          image: "/images/05-botti-murola.jpg",
        },
        {
          name: "Colmone della Marca",
          category: "Wine",
          description:
            "Colmone della Marca, produced by Fattoria Colmone: full fruit and balanced acidity, the signature of the Marche hills.",
        },
        {
          name: "Pasta Mancini",
          category: "Pasta",
          description:
            "Pasta from the Mancini workshop in the Marche, known for bronze-die extrusion and slow, low-temperature drying that preserve the full aroma of the wheat.",
        },
      ],
    },
    almanacco: {
      kicker: "The time of the seasons",
      title: "Seasonal almanac",
      intro:
        "We periodically host small seasonal gatherings where Marche cooking meets the Japanese calendar, over a dish and a glass of wine.",
      eventLabel: "An event we hosted",
      eventTitle: "Tagliatelle al ragù and mattonella marchigiana",
      eventText:
        "Hand-cut tagliatelle with a traditional ragù, followed by mattonella, the classic Marche dessert. A simple, hearty menu, just like a farmhouse table.",
      pairingLabel: "Paired with",
      pairingText: "Wines from Cantina Murola — food from the land deserves wine from the same land.",
      moreNote: "More gatherings are on the way: we'll update this page with each new season.",
    },
    contatti: {
      kicker: "Come visit us",
      title: "Contact",
      shopName: "Almanacco",
      addressLabel: "Address",
      addressLines: [
        "A29 Tsukimidai Jutaku",
        "1-54 Taura-cho, Yokosuka",
        "Kanagawa 237-0075, Japan",
      ],
      emailLabel: "Email",
      email: "info@ikitaria.com",
      hoursLabel: "Hours",
      hoursValue: "Coming soon",
      socialLabel: "Social",
      socialValue: "Coming soon",
      note: "Opening hours and social channels are still being finalized and will be published here as soon as they're ready.",
    },
    footer: {
      tagline: "From the fields of the Marche to the Yokosuka almanac.",
      rights: "All rights reserved.",
      philosophyLabel: "The Philosophy",
      calendarLabel: "The Calendar",
      paymentsLabel: "Payment methods (coming soon)",
      creditPrefix: "Almanacco is a project by ",
      creditSuffix: "",
    },
    comingSoonLabel: "Coming soon",
  },
};
