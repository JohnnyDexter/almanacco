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
}

// I 24 sekki, in ordine dall'inizio della primavera (risshun).
export const sekki: Sekki[] = [
  { kanji: "立春", romaji: "Risshun" },
  { kanji: "雨水", romaji: "Usui" },
  { kanji: "啓蟄", romaji: "Keichitsu" },
  { kanji: "春分", romaji: "Shunbun" },
  { kanji: "清明", romaji: "Seimei" },
  { kanji: "穀雨", romaji: "Kokuu" },
  { kanji: "立夏", romaji: "Rikka" },
  { kanji: "小満", romaji: "Shōman" },
  { kanji: "芒種", romaji: "Bōshu" },
  { kanji: "夏至", romaji: "Geshi" },
  { kanji: "小暑", romaji: "Shōsho" },
  { kanji: "大暑", romaji: "Taisho" },
  { kanji: "立秋", romaji: "Risshū" },
  { kanji: "処暑", romaji: "Shosho" },
  { kanji: "白露", romaji: "Hakuro" },
  { kanji: "秋分", romaji: "Shūbun" },
  { kanji: "寒露", romaji: "Kanro" },
  { kanji: "霜降", romaji: "Sōkō" },
  { kanji: "立冬", romaji: "Rittō" },
  { kanji: "小雪", romaji: "Shōsetsu" },
  { kanji: "大雪", romaji: "Taisetsu" },
  { kanji: "冬至", romaji: "Tōji" },
  { kanji: "小寒", romaji: "Shōkan" },
  { kanji: "大寒", romaji: "Daikan" },
];
