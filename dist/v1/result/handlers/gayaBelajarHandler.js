"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gayaBelajarHandler = void 0;
function gayaBelajarHandler(nama, bakat3SortByRanks3) {
    const gayaBelajar = {
        judul: 'GAYA BELAJAR',
        deskripsiJudul: 'Gaya belajar adalah cara efektif yang dilakukan oleh seseorang dalam menggunakan inderanya dalam belajar untuk menerima ilmu atau pengetahuan (Kinerja AKAL).',
        judulUraian: `Urutan gaya belajar ${nama} adalah:`,
        uraian: [],
    };
    bakat3SortByRanks3.map((bkt3) => {
        gayaBelajar.uraian.push({
            judul: `${bkt3.gayaBelajar_arab} / ${bkt3.gayaBelajar_arti}`,
            deskripsiGayaBelajar1: bkt3.deskripsiGayaBelajar1,
            tempatBelajar: bkt3.tempatBelajar,
        });
    });
    return gayaBelajar;
}
exports.gayaBelajarHandler = gayaBelajarHandler;
//# sourceMappingURL=gayaBelajarHandler.js.map