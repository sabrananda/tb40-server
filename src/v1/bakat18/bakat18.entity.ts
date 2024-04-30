import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Bakat18Entity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  pribadi: string;
}
