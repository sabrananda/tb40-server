import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';

@Entity()
export class PerbaikanEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  perbaikan: string;

  @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id, { nullable: true })
  bakat40: Bakat40Entity;
  @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id, { nullable: true })
  bakat40_perbaikan: Bakat40Entity;

  //   @Column()
  //   @ManyToOne(() => Bakat40Entity, (bakat40) => bakat40.id)
  //   bakat40_perbaikan_id: Bakat40Entity;
}
