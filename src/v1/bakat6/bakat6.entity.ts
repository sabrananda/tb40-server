import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';

@Entity()
export class Bakat6Entity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  arab: string;

  @Column()
  latin: string;

  @Column()
  arti: string;

  @Column()
  label1: string;

  @Column()
  berlebihan: string;

  @Column()
  label2: string;

  @Column()
  definisi: string;
  @Column()
  bakat40_id: string;

  @OneToMany(() => Bakat40Entity, (bakat40) => bakat40.bakat6, {
    onDelete: 'SET NULL',
  })
  @JoinTable()
  bakat40: Bakat40Entity[];
}
