import { BaseEntity } from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';
export declare class Bakat6Entity extends BaseEntity {
    id: number;
    arab: string;
    latin: string;
    arti: string;
    label1: string;
    berlebihan: string;
    label2: string;
    definisi: string;
    bakat40_id: string;
    bakat40: Bakat40Entity[];
}
