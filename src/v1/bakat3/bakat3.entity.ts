import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bakat3Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latin: string;

  @Column()
  arab: string;

  @Column()
  arti: string;

  @Column()
  gayaBelajar_arab: string;

  @Column()
  gayaBelajar_latin: string;

  @Column()
  gayaBelajar_arti: string;

  @Column()
  deskripsiGayaBelajar1: string;

  @Column()
  deskripsiGayaBelajar2: string;

  @Column()
  tempatBelajar: string;

  @Column()
  bahasaHati: string;

  @Column()
  deskripsiBahasa: string;
}
