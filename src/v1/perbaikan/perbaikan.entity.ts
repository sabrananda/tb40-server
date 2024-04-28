import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';

@Entity()
export class PerbaikanEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  perbaikan: string;

  @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id)
  bakat40: Bakat40Entity;
  @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id)
  bakat40_perbaikan: Bakat40Entity;

  //   @Column()
  //   @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id)
  //   bakat40_perbaikan_id: Bakat40Entity;
}
