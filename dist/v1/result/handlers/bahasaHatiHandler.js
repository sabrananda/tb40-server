"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bahasaHatiHandler = void 0;
function bahasaHatiHandler(nama, bakat3SortByRanks3) {
    const bahasaHati = {
        judul: 'Bahasa Hati',
        deskripsiJudul: 'Bahasa hati adalah bahasa yang digunakan untuk menumbuhkan mahabbah dengan menyentuh hati seseorang sehingga dirinya merasa disayangi atau dicintai (Kinerja HATI).',
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
exports.bahasaHatiHandler = bahasaHatiHandler;
//# sourceMappingURL=bahasaHatiHandler.js.map