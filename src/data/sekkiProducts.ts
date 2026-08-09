// Collega ciascuno dei 24 sekki (stesso ordine dell'array `sekki` in calendar.ts)
// al prodotto del catalogo più coerente con la stagione, per il blocco
// "Prodotto della stagione" nel widget del sekki. Aggiornare qui quando il
// catalogo cresce: i componenti che lo consumano non vanno toccati.
//
// Logica stagionale usata: olio nuovo in autunno (raccolta e frangitura delle
// olive marchigiane, ottobre-dicembre), vino corposo nel cuore dell'inverno,
// pasta con verdure fresche in primavera, vino più leggero in estate.
export const sekkiProductNames: string[] = [
  "Colmone della Marca", // 0  Risshun
  "Colmone della Marca", // 1  Usui
  "Pasta Mancini", // 2  Keichitsu
  "Pasta Mancini", // 3  Shunbun
  "Pasta Mancini", // 4  Seimei
  "Pasta Mancini", // 5  Kokuu
  "Pasta Mancini", // 6  Rikka
  "Pasta Mancini", // 7  Shōman
  "Cantina Murola", // 8  Bōshu
  "Cantina Murola", // 9  Geshi
  "Cantina Murola", // 10 Shōsho
  "Cantina Murola", // 11 Taisho
  "Cantina Murola", // 12 Risshū
  "Cantina Murola", // 13 Shosho (il caldo comincia a calare)
  "Frantoio Valeri", // 14 Hakuro
  "Frantoio Valeri", // 15 Shūbun
  "Frantoio Valeri", // 16 Kanro
  "Frantoio Valeri", // 17 Sōkō
  "Frantoio Valeri", // 18 Rittō
  "Frantoio Valeri", // 19 Shōsetsu
  "Frantoio Valeri", // 20 Taisetsu
  "Frantoio Valeri", // 21 Tōji
  "Colmone della Marca", // 22 Shōkan
  "Colmone della Marca", // 23 Daikan
];

/** Slug ASCII stabile per un nome prodotto, usato come id della card in Shop. */
export function productSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
