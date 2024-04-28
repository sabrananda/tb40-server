import { BaseEntity } from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';
export declare class PerbaikanEntity extends BaseEntity {
    id: number;
    perbaikan: string;
    bakat40: Bakat40Entity;
    bakat40_perbaikan: Bakat40Entity;
}
