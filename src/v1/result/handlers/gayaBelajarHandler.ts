import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
import { GayaBelajar } from '../result.dto';

export function gayaBelajarHandler(
  nama: string,
  bakat3SortByRanks3: {
    id: number;
    arab: string;
    arti: string;
    deskripsiGayaBelajar1: string;
    tempatBelajar: string;
    gayaBelajar_arab: string;
    gayaBelajar_arti: string;
  }[],
) {
  //   console.log(bakat3);
  const gayaBelajar: GayaBelajar = {
    judul: 'GAYA BELAJAR',
    deskripsiJudul:
      'Gaya belajar adalah cara efektif yang dilakukan oleh seseorang dalam menggunakan inderanya dalam belajar untuk menerima ilmu atau pengetahuan (Kinerja AKAL).',
    judulUraian: `Urutan gaya belajar ${nama} adalah:`,
    uraian: [],
  };
  //   const bakat3SortByRanks3: {
  //     id: number;
  //     arab: string;
  //     arti: string;
  //     deskripsiGayaBelajar1: string;
  //     tempatBelajar: string;
  //     gayaBelajar_arab: string;
  //     gayaBelajar_arti: string;
  //   }[] = [];
  //   ranks3.map((rank3, idx) => {
  //     const data =
  //       bakat3[bakat3.findIndex((bkt) => bkt.id === ranks3[rank3 - 1])];
  //     bakat3SortByRanks3.push(data);
  //   });
  bakat3SortByRanks3.map((bkt3) => {
    gayaBelajar.uraian.push({
      judul: `${bkt3.gayaBelajar_arab} / ${bkt3.gayaBelajar_arti}`,
      deskripsiGayaBelajar1: bkt3.deskripsiGayaBelajar1,
      tempatBelajar: bkt3.tempatBelajar,
    });
  });

  return gayaBelajar;
}
