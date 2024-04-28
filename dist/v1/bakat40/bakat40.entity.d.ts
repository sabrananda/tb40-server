import { BaseEntity } from 'typeorm';
import { Bakat6Entity } from '../bakat6/bakat6.entity';
import { PerbaikanEntity } from '../perbaikan/perbaikan.entity';
export declare class Bakat40Entity extends BaseEntity {
    id: number;
    arab: string;
    latin: string;
    arti: string;
    label: string;
    definisi: string;
    profesi: string;
    jurusan: string;
    lalai_arab: string;
    lalai_tulisan: string;
    lalai_deskripsi: string;
    lalai_perbaikan: string;
    berlebihan_arab: string;
    berlebihan_tulisan: string;
    berlebihan_deskripsi: string;
    berlebihan_perbaikan: string;
    pernyataan: string;
    perbaikan: PerbaikanEntity[];
    bakat6: Bakat6Entity;
}
