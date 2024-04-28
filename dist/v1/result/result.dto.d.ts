import { Bakat40Entity } from '../bakat40/bakat40.entity';
export type PotensiSifatTercela = {
    judul: string;
    deskripsiJudul: string;
    referensi: string;
    paragraf1: string;
    paragraf2: string;
    paragraf3: string;
    paragraf4: string;
};
export type BahasaHati = {
    judul: string;
    deskripsiJudul: string;
    judulUraian: string;
    uraian: UraianBahasaHati[];
};
export type GayaBelajar = {
    judul: string;
    deskripsiJudul: string;
    judulUraian: string;
    uraian: UraianGayaBelajar[];
};
export type KuatDanLemah = {
    judul: string;
    deskripsiJudul: string;
    profesi: string;
    jurusan: string;
};
type UraianGayaBelajar = {
    judul: string;
    deskripsiGayaBelajar1: string;
    tempatBelajar: string;
};
type UraianBahasaHati = {
    judul: string;
    deskripsiJudul: string;
};
type Identitas = {
    nama: string;
};
export type PostAssessmentResultDTO = {
    identitas: Identitas;
    ranks40: number[];
    kepribadian: Kepribadian;
    bakat: Bakat;
    gayaBelajar: GayaBelajar;
    bahasaHati: BahasaHati;
    potensiSifatTercela: PotensiSifatTercela;
};
export type Skor40DTO = {
    id: number;
    skor: number;
};
export type PostAssesmentDTO = {
    nama: string;
    skor40: Skor40DTO[];
};
export type LabelJulukan = {
    id: number;
    label1: string;
    label2: string;
    arab: string;
    latin: string;
};
export type Julukan = {
    julukan1: string;
    julukan2: string;
};
export type Bakat3First = {
    arti: string;
    deskripsiBahasa: string;
    deskripsiGayaBelajar1: string;
};
export type Bakat = {
    judul: string;
    deskripsiJudul: string;
    judulKekuatan: string;
    judulKelemahan: string;
    bakatKekuatan: KuatDanLemah[];
    bakatKelemahan: KuatDanLemah[];
};
export type Kepribadian = {
    judul: string;
    paragraf1: string;
    paragraf2: string;
    judulJulukan: string;
    julukan: string;
    paragraf3: string;
    paragraf4: string;
};
export type KekuatanDanKelemahan = {
    bakatKekuatan: Bakat40Entity[];
    bakatKelemahan: Bakat40Entity[];
};
export {};
