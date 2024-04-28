"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kekuatanKelemahanHandler = void 0;
async function kekuatanKelemahanHandler(ranks40, databaseBakat40) {
    const whereStatement = [];
    for (let i = 0; i < 6; i++) {
        whereStatement.push({ id: ranks40[i] });
    }
    for (let i = 39; i > 33; i--) {
        whereStatement.push({ id: ranks40[i] });
    }
    const bakatUnsort = await databaseBakat40.find({
        select: {
            id: true,
            label: true,
            arab: true,
            definisi: true,
            profesi: true,
            jurusan: true,
            latin: true,
            arti: true,
            berlebihan_arab: true,
            berlebihan_deskripsi: true,
            berlebihan_tulisan: true,
            berlebihan_perbaikan: true,
            lalai_tulisan: true,
            lalai_deskripsi: true,
            lalai_perbaikan: true,
        },
        where: whereStatement,
    });
    const bakatKekuatan = [];
    const bakatKelemahan = [];
    for (let i = 0; i < 6; i++) {
        const idx = bakatUnsort.findIndex((value) => value.id == ranks40[i]);
        bakatKekuatan.push(bakatUnsort[idx]);
    }
    for (let i = 39; i > 33; i--) {
        const idx = bakatUnsort.findIndex((value) => value.id == ranks40[i]);
        bakatKelemahan.push(bakatUnsort[idx]);
    }
    const kuatLemah = {
        bakatKekuatan,
        bakatKelemahan,
    };
    return kuatLemah;
}
exports.kekuatanKelemahanHandler = kekuatanKelemahanHandler;
//# sourceMappingURL=kekuatanKelemahanHandler.js.map