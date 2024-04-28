import { Skor40DTO } from '../result.dto';

export function bakat18Handler(
  //   bakat18: BakatAverage[],
  bakat40Skor: Skor40DTO[],
) {
  const bakat18 = [
    { id: 1, average: 0 },
    { id: 2, average: 0 },
    { id: 3, average: 0 },
    { id: 4, average: 0 },
    { id: 5, average: 0 },
    { id: 6, average: 0 },
    { id: 7, average: 0 },
    { id: 8, average: 0 },
    { id: 9, average: 0 },
    { id: 10, average: 0 },
    { id: 11, average: 0 },
    { id: 12, average: 0 },
    { id: 13, average: 0 },
    { id: 14, average: 0 },
    { id: 15, average: 0 },
    { id: 16, average: 0 },
    { id: 17, average: 0 },
    { id: 18, average: 0 },
  ];
  // bercita-cita tinggi & perfeksionis
  bakat18[1 - 1].average =
    (bakat40Skor[13 - 1].skor + bakat40Skor[16 - 1].skor) / 2;
  // harga diri & berwibawa
  bakat18[2 - 1].average =
    (bakat40Skor[18 - 1].skor + bakat40Skor[40 - 1].skor) / 2;
  // bertekad kuat & bersemangat
  bakat18[3 - 1].average =
    (bakat40Skor[4 - 1].skor + bakat40Skor[25 - 1].skor) / 2;
  // berfirasat & cerdik
  bakat18[4 - 1].average =
    (bakat40Skor[8 - 1].skor + bakat40Skor[26 - 1].skor) / 2;
  // berprasangka baik & cerdas
  bakat18[5 - 1].average =
    (bakat40Skor[14 - 1].skor + bakat40Skor[6 - 1].skor) / 2;
  // ahli hikmah
  bakat18[6 - 1].average = bakat40Skor[11 - 1].skor;
  // jujur & menjaga diri
  bakat18[7 - 1].average =
    (bakat40Skor[34 - 1].skor + bakat40Skor[15 - 1].skor) / 2;
  // pendiam & pemalu
  bakat18[8 - 1].average =
    (bakat40Skor[33 - 1].skor + bakat40Skor[10 - 1].skor) / 2;
  // sederhana & rendah hati
  bakat18[9 - 1].average =
    (bakat40Skor[28 - 1].skor + bakat40Skor[37 - 1].skor) / 2;
  // pemberani, pencemburu & kompetitif
  bakat18[10 - 1].average =
    (bakat40Skor[35 - 1].skor +
      bakat40Skor[9 - 1].skor +
      bakat40Skor[22 - 1].skor) /
    3;
  // penasehat & komunikatif
  bakat18[11 - 1].average =
    (bakat40Skor[24 - 1].skor + bakat40Skor[7 - 1].skor) / 2;
  // menolong & dermawan
  bakat18[12 - 1].average =
    (bakat40Skor[27 - 1].skor + bakat40Skor[19 - 1].skor) / 2;
  // bekerjasama, bersatu, adil & menepati janji
  bakat18[13 - 1].average =
    (bakat40Skor[36 - 1].skor +
      bakat40Skor[38 - 1].skor +
      bakat40Skor[1 - 1].skor +
      bakat40Skor[39 - 1].skor) /
    4;
  // humoris & berseri-seri
  bakat18[14 - 1].average =
    (bakat40Skor[23 - 1].skor + bakat40Skor[5 - 1].skor) / 2;
  // lemah lembut & penuh cinta
  bakat18[15 - 1].average =
    (bakat40Skor[30 - 1].skor + bakat40Skor[21 - 1].skor) / 2;
  // berbelas kasih & melayani
  bakat18[16 - 1].average =
    (bakat40Skor[29 - 1].skor + bakat40Skor[17 - 1].skor) / 2;
  // penjaga rahasia & menutup aib
  bakat18[17 - 1].average =
    (bakat40Skor[20 - 1].skor + bakat40Skor[31 - 1].skor) / 2;
  // bertanggung jawab, tidak tergesa, santun & penyabar
  bakat18[18 - 1].average =
    (bakat40Skor[2 - 1].skor +
      bakat40Skor[3 - 1].skor +
      bakat40Skor[12 - 1].skor +
      bakat40Skor[32 - 1].skor) /
    4;
  bakat18.sort(function (a, b) {
    return b.average - a.average;
  });
  let ranks18: number[] = [];

  bakat18.map((avg) => {
    ranks18.push(avg.id);
  });

  // console.log(bakat18);
  // console.log(ranks18);
  return ranks18;
}
