import { Bakat, KekuatanDanKelemahan } from '../result.dto';

export function bakatHandler(
  nama: string,
  kekuatanDanKelemahan: KekuatanDanKelemahan,
) {
  const bakat: Bakat = {
    judul: 'Bakat',
    deskripsiJudul:
      'Bakat yang dimaksud adalah sifat (karakter) yang mendorong seseorang untuk bekerja atau beramal (Kinerja FISIK) sesuai dengan karakter unik yang dimilikinya',
    judulKekuatan: 'Bakat Kekuatan',
    judulKelemahan: 'Bakat Kelemahan',
    bakatKekuatan: [],
    bakatKelemahan: [],
  };
  for (let i = 0; i < 6; i++) {
    bakat.bakatKekuatan.push({
      judul: `${i + 1}. ${kekuatanDanKelemahan.bakatKekuatan[i].latin} / ${kekuatanDanKelemahan.bakatKekuatan[i].arab} (${kekuatanDanKelemahan.bakatKekuatan[i].arti})`,
      deskripsiJudul: `Bakat terkuat ${nama} adalah ${kekuatanDanKelemahan.bakatKekuatan[i].latin} / ${kekuatanDanKelemahan.bakatKekuatan[i].arab} (${kekuatanDanKelemahan.bakatKekuatan[i].arti}), yaitu ${kekuatanDanKelemahan.bakatKekuatan[i].definisi}, sehingga bakat ini menjadikannya ${kekuatanDanKelemahan.bakatKekuatan[i].label}.`,
      profesi: `Profesi atau peran yang sesuai dengan bakat ini antara lain: ${kekuatanDanKelemahan.bakatKekuatan[i].profesi}.`,
      jurusan: `Jurusan studi yang sesuai dengan bakat ini antara lain: ${kekuatanDanKelemahan.bakatKekuatan[i].jurusan}.`,
    });
    bakat.bakatKelemahan.push({
      judul: `${i + 1}. ${kekuatanDanKelemahan.bakatKelemahan[i].latin} / ${kekuatanDanKelemahan.bakatKelemahan[i].arab} (${kekuatanDanKelemahan.bakatKelemahan[i].arti})`,
      deskripsiJudul: `Bakat terkuat ${nama} adalah ${kekuatanDanKelemahan.bakatKelemahan[i].latin} / ${kekuatanDanKelemahan.bakatKelemahan[i].arab} (${kekuatanDanKelemahan.bakatKelemahan[i].arti}), yaitu ${kekuatanDanKelemahan.bakatKelemahan[i].definisi}, sehingga bakat ini menjadikannya ${kekuatanDanKelemahan.bakatKelemahan[i].label}.`,
      profesi: `Profesi atau peran yang sesuai dengan bakat ini antara lain: ${kekuatanDanKelemahan.bakatKelemahan[i].profesi}.`,
      jurusan: `Jurusan studi yang sesuai dengan bakat ini antara lain: ${kekuatanDanKelemahan.bakatKelemahan[i].jurusan}.`,
    });
  }

  return bakat;
}
