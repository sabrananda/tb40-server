"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potensiSifatTercelaHandler = void 0;
async function potensiSifatTercelaHandler(nama, kekuatanDanKelemahan, databasePerbaikan) {
    const potensiSifatTercela = {
        judul: 'POTENSI MUNCULNYA SIFAT TERCELA & SOLUSINYA',
        deskripsiJudul: '“Setiap sifat mulia terkepung diantara dua sifat tercela. Sifat mulia berada di tengah sedang yang berada di kedua ujungnya adalah sifat tercela”.',
        referensi: '(Ibnul Qayyim, Madaarijus Saalikin, 2/295)',
        paragraf1: '',
        paragraf2: '',
        paragraf3: '',
        paragraf4: '',
    };
    const perbaikan = await databasePerbaikan.find({
        select: {
            bakat40_perbaikan: { definisi: true },
            id: true,
            perbaikan: true,
            bakat40: { id: true },
        },
        relations: { bakat40_perbaikan: true, bakat40: true },
        where: {
            bakat40: [
                { id: kekuatanDanKelemahan.bakatKekuatan[0].id },
                { id: kekuatanDanKelemahan.bakatKelemahan[0].id },
            ],
        },
    });
    const perbaikanBerlebihan_first = perbaikan.filter((data) => data.perbaikan === 'berlebihan' &&
        data.bakat40.id === kekuatanDanKelemahan.bakatKekuatan[0].id)[0];
    const terkuat = kekuatanDanKelemahan.bakatKekuatan[0];
    const terlemah = kekuatanDanKelemahan.bakatKelemahan[0];
    potensiSifatTercela.paragraf1 = `Karena ${nama} memiliki bakat terkuat ${terkuat.latin.toLowerCase()} / ${terkuat.arab} (${terkuat.arti.toLowerCase()}), maka berpotensi akan muncul sifat tercela ${terkuat.berlebihan_tulisan.toLowerCase()}, yaitu ${terkuat.berlebihan_deskripsi.toLowerCase()}.`;
    potensiSifatTercela.paragraf2 = `${terkuat.berlebihan_perbaikan} Yaitu dengan cara antara lain ${perbaikanBerlebihan_first.bakat40_perbaikan.definisi}`;
    potensiSifatTercela.paragraf3 = `Dan karena ${nama} juga memiliki kelemahan pada sifat ${terlemah.latin.toLowerCase()} / ${terlemah.arab} (${terlemah.arti.toLowerCase()}), yaitu ${nama} kurang ${terlemah.label}, maka berpotensi akan muncul sifat tercela ${terlemah.lalai_tulisan}, yaitu ${terlemah.lalai_deskripsi}`;
    potensiSifatTercela.paragraf4 = `${terlemah.lalai_perbaikan} Yaitu dengan cara antara lain ${terlemah.definisi}.`;
    return potensiSifatTercela;
}
exports.potensiSifatTercelaHandler = potensiSifatTercelaHandler;
//# sourceMappingURL=potensiSifatTercelaHandler.js.map