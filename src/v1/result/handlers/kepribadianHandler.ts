import {
  Bakat3First,
  Julukan,
  KekuatanDanKelemahan,
  Kepribadian,
  LabelJulukan,
} from '../result.dto';

export function kepribadianHandler(
  bakat3_first: Bakat3First,
  ranks6_first: number,
  ranks18_first: number,
  nama: string,
  introvertAverage: number,
  extrovertAverage: number,
  labelJulukan: LabelJulukan[],
  kekuatanDanKelemahan: KekuatanDanKelemahan,
  julukan: Julukan,
) {
  const kepribadian: Kepribadian = {
    judul: '',
    judulJulukan: '',
    julukan: '',
    paragraf1: '',
    paragraf2: '',
    paragraf3: '',
    paragraf4: '',
  };
  const extrovert_introvert =
    introvertAverage > extrovertAverage
      ? 'introvert (senang dengan kesendirian)'
      : 'extrovert (senang bertemu orang)';

  const pribadi6 =
    labelJulukan[labelJulukan.findIndex((lbl) => lbl.id === ranks6_first)];
  kepribadian.judul = `Kepribadian ${nama}`;
  kepribadian.paragraf1 = `${nama} memiliki kepribadian ${extrovert_introvert}. Secara umum jiwanya cenderung suka ${bakat3_first.arti}. Disamping ${nama} cenderung suka ${pribadi6.latin} (${pribadi6.arab}) ${nama} juga memiliki kecenderungan ${pribadi18(ranks18_first)}.`;

  (kepribadian.paragraf2 = `${nama} adalah pribadi yang ${kekuatanDanKelemahan.bakatKekuatan[0].label}, ${kekuatanDanKelemahan.bakatKekuatan[1].label}, ${kekuatanDanKelemahan.bakatKekuatan[2].label}, ${kekuatanDanKelemahan.bakatKekuatan[3].label}, dan ${kekuatanDanKelemahan.bakatKekuatan[4].label}.`),
    (kepribadian.judulJulukan = `Sehingga ${nama} dijuluki:`);
  kepribadian.julukan = `${julukan.julukan1} yang ${julukan.julukan2}`;
  kepribadian.paragraf3 = `${bakat3_first.deskripsiGayaBelajar1}`;
  kepribadian.paragraf4 = `Penyentuh perasaan yang paling efektif untuk ${nama} adalah ${bakat3_first.deskripsiBahasa}`;

  return kepribadian;
}

function pribadi18(rank18_first: number) {
  switch (rank18_first) {
    case 1:
      return 'bekerja keras karena ambisi';
    case 2:
      return 'bekerja keras karena wibawa';
    case 3:
      return 'bekerja keras karena giat bekerja';
    case 4:
      return 'berpikir imajinatif';
    case 5:
      return 'berpikir positif';
    case 6:
      return 'berpikir analitis';
    case 7:
      return 'apa adanya';
    case 8:
      return 'berdiam diri';
    case 9:
      return 'merendah';
    case 10:
      return 'mempengaruhi dengan cara menguasai';
    case 11:
      return 'mempengaruhi dengan cara memotivasi';
    case 12:
      return 'mempengaruhi dengan cara menolong';
    case 13:
      return 'memanfaatkan hubungan';
    case 14:
      return 'memulai hubungan baru';
    case 15:
      return 'menguatkan hubungan yang ada';
    case 16:
      return 'melayani dengan cara memberi';
    case 17:
      return 'melayani dengan cara menjaga';
    case 18:
      return 'melayani dengan cara mengalah';
    default:
      '';
  }
}
