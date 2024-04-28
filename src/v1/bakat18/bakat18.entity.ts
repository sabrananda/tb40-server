import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bakat18Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pribadi: string;
}
