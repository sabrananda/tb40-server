import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bakat6Entity } from '../bakat6/bakat6.entity';
import { PerbaikanEntity } from '../perbaikan/perbaikan.entity';

@Entity()
export class Bakat40Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  arab: string;

  @Column()
  latin: string;

  @Column()
  arti: string;

  @Column()
  label: string;

  @Column()
  definisi: string;

  @Column()
  profesi: string;

  @Column()
  jurusan: string;

  @Column()
  lalai_arab: string;

  @Column()
  lalai_tulisan: string;

  @Column()
  lalai_deskripsi: string;

  @Column()
  lalai_perbaikan: string;
  @Column()
  berlebihan_arab: string;
  @Column()
  berlebihan_tulisan: string;
  @Column()
  berlebihan_deskripsi: string;
  @Column()
  berlebihan_perbaikan: string;
  @Column()
  pernyataan: string;

  @OneToMany(() => PerbaikanEntity, (perbaikan) => perbaikan.bakat40, {
    onDelete: 'SET NULL',
  })
  @JoinTable()
  perbaikan: PerbaikanEntity[];

  @ManyToOne(() => Bakat6Entity, (bakat6) => bakat6.id, { nullable: true })
  bakat6: Bakat6Entity;
  //   @OneToMany(
  //     () => PerbaikanEntity,
  //     (perbaikan) => perbaikan.bakat40_perbaikan_id,
  //     {
  //       onDelete: 'SET NULL',
  //     },
  //   )
  //   @JoinTable()
  //   bakat40_perbaikan_id: PerbaikanEntity[];
}
