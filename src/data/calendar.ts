// Anello esterno: i 12 mesi del calendario agricolo italiano.
// Anello interno: i 24 sekki (nijushi sekki) del calendario stagionale giapponese.

export interface MonthLabel {
  it: string;
  en: string;
  ja: string;
}

export const italianMonths: MonthLabel[] = [
  { it: "Gennaio", en: "January", ja: "1月" },
  { it: "Febbraio", en: "February", ja: "2月" },
  { it: "Marzo", en: "March", ja: "3月" },
  { it: "Aprile", en: "April", ja: "4月" },
  { it: "Maggio", en: "May", ja: "5月" },
  { it: "Giugno", en: "June", ja: "6月" },
  { it: "Luglio", en: "July", ja: "7月" },
  { it: "Agosto", en: "August", ja: "8月" },
  { it: "Settembre", en: "September", ja: "9月" },
  { it: "Ottobre", en: "October", ja: "10月" },
  { it: "Novembre", en: "November", ja: "11月" },
  { it: "Dicembre", en: "December", ja: "12月" },
];

export interface Sekki {
  kanji: string;
  romaji: string;
  /** Mese solare di inizio (1-12). Le date reali possono variare di un giorno da un anno all'altro. */
  month: number;
  /** Giorno approssimativo di inizio nel calendario gregoriano. */
  day: number;
  meaning: MonthLabel;
}

// I 24 sekki, in ordine dall'inizio della primavera (risshun). Le date sono le
// medie tradizionali usate negli almanacchi giapponesi: possono spostarsi di
// un giorno da un anno all'altro in base al calcolo astronomico esatto.
export const sekki: Sekki[] = [
  { kanji: "立春", romaji: "Risshun", month: 2, day: 4, meaning: { ja: "春のはじまり", it: "Inizio della primavera", en: "Spring begins" } },
  { kanji: "雨水", romaji: "Usui", month: 2, day: 19, meaning: { ja: "雪から雨へ", it: "La neve si scioglie in pioggia", en: "Snow turns to rain" } },
  { kanji: "啓蟄", romaji: "Keichitsu", month: 3, day: 6, meaning: { ja: "虫たちが目覚める", it: "Gli insetti si risvegliano", en: "Insects awaken" } },
  { kanji: "春分", romaji: "Shunbun", month: 3, day: 21, meaning: { ja: "昼と夜が等しくなる", it: "Equinozio di primavera", en: "Spring equinox" } },
  { kanji: "清明", romaji: "Seimei", month: 4, day: 5, meaning: { ja: "すべてが清らかに輝く", it: "Aria limpida e luminosa", en: "Clear and bright" } },
  { kanji: "穀雨", romaji: "Kokuu", month: 4, day: 20, meaning: { ja: "穀物を潤す春の雨", it: "Piogge che nutrono i raccolti", en: "Grain rains" } },
  { kanji: "立夏", romaji: "Rikka", month: 5, day: 5, meaning: { ja: "夏のはじまり", it: "Inizio dell'estate", en: "Summer begins" } },
  { kanji: "小満", romaji: "Shōman", month: 5, day: 21, meaning: { ja: "命が満ち始める", it: "Il grano comincia a maturare", en: "Grain begins to fill" } },
  { kanji: "芒種", romaji: "Bōshu", month: 6, day: 6, meaning: { ja: "稲や麦の種まき", it: "Tempo di semina dei cereali", en: "Grain in ear" } },
  { kanji: "夏至", romaji: "Geshi", month: 6, day: 21, meaning: { ja: "一年で最も昼が長い日", it: "Solstizio d'estate", en: "Summer solstice" } },
  { kanji: "小暑", romaji: "Shōsho", month: 7, day: 7, meaning: { ja: "暑さが本格化する", it: "Il caldo si fa sentire", en: "Small heat" } },
  { kanji: "大暑", romaji: "Taisho", month: 7, day: 23, meaning: { ja: "一年で最も暑い頃", it: "Il culmine della calura", en: "Great heat" } },
  { kanji: "立秋", romaji: "Risshū", month: 8, day: 8, meaning: { ja: "秋のはじまり", it: "Inizio dell'autunno", en: "Autumn begins" } },
  { kanji: "処暑", romaji: "Shosho", month: 8, day: 23, meaning: { ja: "暑さが収まる頃", it: "Il caldo comincia a calare", en: "Heat subsides" } },
  { kanji: "白露", romaji: "Hakuro", month: 9, day: 8, meaning: { ja: "秋の露が結び始める", it: "Le prime rugiade d'autunno", en: "White dew" } },
  { kanji: "秋分", romaji: "Shūbun", month: 9, day: 23, meaning: { ja: "昼と夜が等しくなる", it: "Equinozio d'autunno", en: "Autumn equinox" } },
  { kanji: "寒露", romaji: "Kanro", month: 10, day: 8, meaning: { ja: "冷たい露が降りる頃", it: "La rugiada si fa fredda", en: "Cold dew" } },
  { kanji: "霜降", romaji: "Sōkō", month: 10, day: 23, meaning: { ja: "霜が降り始める", it: "Le prime brinate", en: "Frost descends" } },
  { kanji: "立冬", romaji: "Rittō", month: 11, day: 7, meaning: { ja: "冬のはじまり", it: "Inizio dell'inverno", en: "Winter begins" } },
  { kanji: "小雪", romaji: "Shōsetsu", month: 11, day: 22, meaning: { ja: "雪がちらつき始める", it: "Le prime nevi leggere", en: "Light snow" } },
  { kanji: "大雪", romaji: "Taisetsu", month: 12, day: 7, meaning: { ja: "雪が本格的に降る頃", it: "La neve si fa fitta", en: "Heavy snow" } },
  { kanji: "冬至", romaji: "Tōji", month: 12, day: 21, meaning: { ja: "一年で最も夜が長い日", it: "Solstizio d'inverno", en: "Winter solstice" } },
  { kanji: "小寒", romaji: "Shōkan", month: 1, day: 5, meaning: { ja: "寒さが増していく", it: "Il freddo si intensifica", en: "Small cold" } },
  { kanji: "大寒", romaji: "Daikan", month: 1, day: 20, meaning: { ja: "一年で最も寒い頃", it: "Il gelo più intenso dell'anno", en: "Great cold" } },
];

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Giorni cumulativi prima di ogni mese (anno non bisestile: le date dei
// sekki sono comunque medie approssimative, un giorno di scarto non conta).
const CUM_DAYS_BEFORE_MONTH = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

function dayOfYear(month: number, day: number): number {
  return CUM_DAYS_BEFORE_MONTH[month - 1] + day;
}

// Ruota il giorno dell'anno in modo che Risshun (il primo sekki, inizio
// primavera) sia il giorno 0: così l'ordine dei 24 sekki è sempre crescente,
// anche per gli ultimi due (Shōkan e Daikan, che cadono in gennaio) che
// altrimenti "tornerebbero indietro" rispetto a dicembre.
const RISSHUN_OFFSET = dayOfYear(sekki[0].month, sekki[0].day);

function rotatedDayOfYear(month: number, day: number): number {
  return (dayOfYear(month, day) - RISSHUN_OFFSET + 365) % 365;
}

/** Indice (0-23) del sekki corrente in base alla data fornita (default: oggi). */
export function getCurrentSekkiIndex(date: Date = new Date()): number {
  const target = rotatedDayOfYear(date.getMonth() + 1, date.getDate());
  let current = sekki.length - 1;
  for (let i = 0; i < sekki.length; i++) {
    const s = sekki[i];
    if (rotatedDayOfYear(s.month, s.day) <= target) {
      current = i;
    } else {
      break;
    }
  }
  return current;
}

/** Formatta l'intervallo di date (inizio del sekki -> giorno prima del successivo). */
export function formatSekkiDateRange(lang: keyof MonthLabel, index: number): string {
  const s = sekki[index];
  const next = sekki[(index + 1) % sekki.length];

  let endMonth = next.month;
  let endDay = next.day - 1;
  if (endDay < 1) {
    endMonth = endMonth === 1 ? 12 : endMonth - 1;
    endDay = DAYS_IN_MONTH[endMonth - 1];
  }

  const startName = italianMonths[s.month - 1];
  const endName = italianMonths[endMonth - 1];
  const sameMonth = s.month === endMonth;

  if (lang === "ja") {
    return sameMonth
      ? `${startName.ja}${s.day}日〜${endDay}日ごろ`
      : `${startName.ja}${s.day}日〜${endName.ja}${endDay}日ごろ`;
  }
  if (lang === "it") {
    return sameMonth
      ? `${s.day}–${endDay} ${startName.it.toLowerCase()} circa`
      : `${s.day} ${startName.it.toLowerCase()} – ${endDay} ${endName.it.toLowerCase()} circa`;
  }
  return sameMonth
    ? `${startName.en} ${s.day}–${endDay}`
    : `${startName.en} ${s.day} – ${endName.en} ${endDay}`;
}
