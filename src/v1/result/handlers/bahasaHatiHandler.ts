import { BahasaHati } from '../result.dto';

export function bahasaHatiHandler(
  nama: string,
  bakat3SortByRanks3: {
    id: number;
    arab: string;
    arti: string;
    deskripsiGayaBelajar1: string;
    tempatBelajar: string;
    gayaBelajar_arab: string;
    gayaBelajar_arti: string;
    bahasaHati: string;
    deskripsiBahasa: string;
  }[],
) {
  const bahasaHati: BahasaHati = {
    judul: 'Bahasa Hati',
    deskripsiJudul:
      'Bahasa hati adalah bahasa yang digunakan untuk menumbuhkan mahabbah dengan menyentuh hati seseorang sehingga dirinya merasa disayangi atau dicintai (Kinerja HATI).',
    judulUraian: `Urutan bahasa hati yang dapat menyentuh hati ${nama} adalah:`,
    uraian: [],
  };
  bakat3SortByRanks3.map((data) => {
    bahasaHati.uraian.push({
      judul: data.bahasaHati,
      deskripsiJudul: data.deskripsiBahasa,
    });
  });
  return bahasaHati;
}
