import { Skor40DTO } from '../result.dto';

export function bakat6Handler(bakat40Skor: Skor40DTO[]) {
  const bakat6 = [
    { id: 1, average: 0 },
    { id: 2, average: 0 },
    { id: 3, average: 0 },
    { id: 4, average: 0 },
    { id: 5, average: 0 },
    { id: 6, average: 0 },
  ];

  // bercita-cita tinggi & perfeksionis, harga diri & berwibawa, bertekad kuat & bersemangat
  bakat6[1 - 1].average =
    (bakat40Skor[13 - 1].skor +
      bakat40Skor[16 - 1].skor +
      bakat40Skor[18 - 1].skor +
      bakat40Skor[40 - 1].skor +
      bakat40Skor[4 - 1].skor +
      bakat40Skor[25 - 1].skor) /
    6;
  // berfirasat & cerdik, berprasangka baik & cerdas, ahli hikmah
  bakat6[2 - 1].average =
    (bakat40Skor[8 - 1].skor +
      bakat40Skor[26 - 1].skor +
      bakat40Skor[14 - 1].skor +
      bakat40Skor[6 - 1].skor +
      bakat40Skor[11 - 1].skor) /
    5;
  // jujur & menjaga diri, pendiam & pemalu, sederhana & rendah hati
  bakat6[3 - 1].average =
    (bakat40Skor[34 - 1].skor +
      bakat40Skor[15 - 1].skor +
      bakat40Skor[33 - 1].skor +
      bakat40Skor[10 - 1].skor +
      bakat40Skor[28 - 1].skor +
      bakat40Skor[37 - 1].skor) /
    6;
  // pemberani, pencemburu & kompetitif, penasehat & komunikatif, menolong & dermawan
  bakat6[4 - 1].average =
    (bakat40Skor[35 - 1].skor +
      bakat40Skor[9 - 1].skor +
      bakat40Skor[22 - 1].skor +
      bakat40Skor[24 - 1].skor +
      bakat40Skor[7 - 1].skor +
      bakat40Skor[27 - 1].skor +
      bakat40Skor[19 - 1].skor) /
    7;
  // bekerjasama, bersatu, adil & menepati janji, humoris & berseri-seri, lemah lembut & penuh cinta
  bakat6[5 - 1].average =
    (bakat40Skor[36 - 1].skor +
      bakat40Skor[38 - 1].skor +
      bakat40Skor[1 - 1].skor +
      bakat40Skor[39 - 1].skor +
      bakat40Skor[23 - 1].skor +
      bakat40Skor[5 - 1].skor +
      bakat40Skor[30 - 1].skor +
      bakat40Skor[21 - 1].skor) /
    8;
  // berbelas kasih & melayani, penjaga rahasia & menutup aib, bertanggung jawab, tidak tergesa, santun & penyabar
  bakat6[6 - 1].average =
    (bakat40Skor[29 - 1].skor +
      bakat40Skor[17 - 1].skor +
      bakat40Skor[20 - 1].skor +
      bakat40Skor[31 - 1].skor +
      bakat40Skor[2 - 1].skor +
      bakat40Skor[3 - 1].skor +
      bakat40Skor[12 - 1].skor +
      bakat40Skor[32 - 1].skor) /
    8;
  //

  bakat6.sort(function (a, b) {
    return b.average - a.average;
  });
  const ranks6: number[] = [];
  bakat6.map((avg) => {
    ranks6.push(avg.id);
  });
  // console.log(bakat6);
  // console.log(ranks6);
  return ranks6;
}
