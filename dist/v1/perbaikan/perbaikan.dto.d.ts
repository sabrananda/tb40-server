import { Bakat40Entity } from '../bakat40/bakat40.entity';
export type PerbaikanBakat40 = {
    id: number;
    bakat40: Bakat40Entity;
    bakat40_perbaikan: Bakat40Entity;
    perbaikan: string;
};
