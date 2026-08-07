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

export interface PageSkeletonContent {
  title: string;
  description: string;
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
    about: string;
    contact: string;
  };
  /** Titolo + descrizione placeholder per le pagine ancora scheletriche. */
  pages: {
    shop: PageSkeletonContent;
    sekki: PageSkeletonContent;
    journal: PageSkeletonContent;
    about: PageSkeletonContent;
    contact: PageSkeletonContent;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    /** Claim del brand, tenuto identico nelle tre lingue: compare anche nel logo. */
    tagline: string;
    cta: string;
    wheelCaption: string;
  };
  sekkiWidget: {
    kicker: string;
    title: string;
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
  };
  contatti: {
    kicker: string;
    title: string;
    shopName: string;
    addressLabel: string;
    addressLines: string[];
    hoursLabel: string;
    hoursValue: string;
    socialLabel: string;
    socialValue: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
    columnTitle: string;
    paymentsLabel: string;
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
      about: "私たちについて",
      contact: "お問い合わせ",
    },
    pages: {
      shop: {
        title: "ショップ",
        description: "マルケの厳選商品を紹介するページを準備中です。近日公開。",
      },
      sekki: {
        title: "節気",
        description: "二十四節気とイタリア農事暦を巡るページを準備中です。近日公開。",
      },
      journal: {
        title: "ジャーナル",
        description: "店主の記録やお知らせを綴るページを準備中です。近日公開。",
      },
      about: {
        title: "私たちについて",
        description: "Almanacco の物語を紹介するページを準備中です。近日公開。",
      },
      contact: {
        title: "お問い合わせ",
        description: "アクセス情報のページを準備中です。近日公開。",
      },
    },
    hero: {
      kicker: "横須賀 · マルケの味",
      title: "Almanacco",
      subtitle:
        "イタリア中部マルケ州のオリーブオイルとワインを、横須賀の小さな店から。畑の暦と、日本の二十四節気。ふたつの季節のリズムが、ここで出会います。",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "コレクションを見る",
      wheelCaption: "外周＝イタリア農事暦の12か月　内周＝二十四節気",
    },
    sekkiWidget: {
      kicker: "季節のリズム",
      title: "今の節気",
      prevLabel: "前の節気",
      nextLabel: "次の節気",
      ctaLabel: "もっと詳しく",
    },
    categories: {
      kicker: "畑から店先へ",
      title: "カテゴリー",
      ctaLabel: "セレクションを見る",
      items: [
        { title: "オリーブオイル", image: "/images/04-olive-valeri.jpg" },
        { title: "ワイン", image: "/images/05-botti-murola.jpg" },
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
      hoursLabel: "営業時間",
      hoursValue: "近日公開予定",
      socialLabel: "SNS",
      socialValue: "近日公開予定",
      note: "営業時間・SNSアカウントは現在準備中です。決まり次第、こちらに掲載いたします。",
    },
    footer: {
      tagline: "マルケの畑から、横須賀の暦へ。",
      rights: "All rights reserved.",
      columnTitle: "探す",
      paymentsLabel: "お支払い方法（近日対応）",
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
      about: "Chi siamo",
      contact: "Contatti",
    },
    pages: {
      shop: {
        title: "Shop",
        description: "La pagina dedicata ai nostri prodotti è in preparazione. Presto online.",
      },
      sekki: {
        title: "Sekki",
        description: "La pagina dedicata ai 24 sekki e al calendario agricolo è in preparazione. Presto online.",
      },
      journal: {
        title: "Journal",
        description: "Il diario di bottega, tra racconti e novità, è in preparazione. Presto online.",
      },
      about: {
        title: "Chi siamo",
        description: "La pagina che racconta la storia di Almanacco è in preparazione. Presto online.",
      },
      contact: {
        title: "Contatti",
        description: "La pagina con indirizzo e orari è in preparazione. Presto online.",
      },
    },
    hero: {
      kicker: "Yokosuka · Sapori delle Marche",
      title: "Almanacco",
      subtitle:
        "Olio extravergine e vino delle Marche, da una piccola bottega a Yokosuka. Il calendario agricolo italiano e i 24 sekki giapponesi: due modi di scandire le stagioni che qui si incontrano.",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "Scopri la collezione",
      wheelCaption: "Anello esterno: i 12 mesi del calendario agricolo — Anello interno: i 24 sekki",
    },
    sekkiWidget: {
      kicker: "Il ritmo delle stagioni",
      title: "Il sekki del momento",
      prevLabel: "Sekki precedente",
      nextLabel: "Sekki successivo",
      ctaLabel: "Scopri di più",
    },
    categories: {
      kicker: "Dal campo alla bottega",
      title: "Le nostre categorie",
      ctaLabel: "Scopri la selezione",
      items: [
        { title: "Olio", image: "/images/04-olive-valeri.jpg" },
        { title: "Vini", image: "/images/05-botti-murola.jpg" },
        { title: "Ceramica & Artigianato" },
        { title: "Diario Almanacco" },
      ],
    },
    journal: {
      kicker: "Dal diario di bottega",
      title: "Storie, luoghi, incontri",
      text: "Racconti dalle colline marchigiane e dalle strade di Yokosuka: le persone che coltivano, producono e portano in tavola ciò che scegliamo per il negozio.",
      ctaLabel: "Leggi il Journal",
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
      hoursLabel: "Orari",
      hoursValue: "In arrivo",
      socialLabel: "Social",
      socialValue: "In arrivo",
      note: "Orari di apertura e canali social sono ancora in definizione: saranno pubblicati qui appena disponibili.",
    },
    footer: {
      tagline: "Dai campi delle Marche all'almanacco di Yokosuka.",
      rights: "Tutti i diritti riservati.",
      columnTitle: "Esplora",
      paymentsLabel: "Metodi di pagamento (in arrivo)",
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
      about: "About",
      contact: "Contact",
    },
    pages: {
      shop: {
        title: "Shop",
        description: "Our products page is being prepared. Coming soon.",
      },
      sekki: {
        title: "Sekki",
        description: "A page on the 24 sekki and the agricultural calendar is being prepared. Coming soon.",
      },
      journal: {
        title: "Journal",
        description: "Our shop journal, stories and updates, is being prepared. Coming soon.",
      },
      about: {
        title: "About",
        description: "The page telling Almanacco's story is being prepared. Coming soon.",
      },
      contact: {
        title: "Contact",
        description: "Our address and hours page is being prepared. Coming soon.",
      },
    },
    hero: {
      kicker: "Yokosuka · Flavors of the Marche",
      title: "Almanacco",
      subtitle:
        "Extra virgin olive oil and wine from the Marche, from a small shop in Yokosuka. The Italian agricultural calendar and Japan's 24 sekki: two ways of marking the seasons, meeting here.",
      tagline: "INCONTRO TRA CULTURE, CUSTODE DEL TEMPO",
      cta: "Explore the collection",
      wheelCaption: "Outer ring: the 12 months of the agricultural calendar — Inner ring: the 24 sekki",
    },
    sekkiWidget: {
      kicker: "The rhythm of the seasons",
      title: "The current sekki",
      prevLabel: "Previous sekki",
      nextLabel: "Next sekki",
      ctaLabel: "Learn more",
    },
    categories: {
      kicker: "From the field to the shop",
      title: "Our categories",
      ctaLabel: "Discover the selection",
      items: [
        { title: "Olive Oil", image: "/images/04-olive-valeri.jpg" },
        { title: "Wine", image: "/images/05-botti-murola.jpg" },
        { title: "Ceramics & Crafts" },
        { title: "Almanacco Diary" },
      ],
    },
    journal: {
      kicker: "From the shop journal",
      title: "Stories, places, encounters",
      text: "Stories from the hills of the Marche and the streets of Yokosuka: the people who grow, make, and bring to the table what we choose for the shop.",
      ctaLabel: "Read the Journal",
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
      hoursLabel: "Hours",
      hoursValue: "Coming soon",
      socialLabel: "Social",
      socialValue: "Coming soon",
      note: "Opening hours and social channels are still being finalized and will be published here as soon as they're ready.",
    },
    footer: {
      tagline: "From the fields of the Marche to the Yokosuka almanac.",
      rights: "All rights reserved.",
      columnTitle: "Explore",
      paymentsLabel: "Payment methods (coming soon)",
    },
    comingSoonLabel: "Coming soon",
  },
};
