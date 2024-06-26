import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bakat40DTO, Pernyataan } from './bakat40.dto';
import { Bakat40Entity } from './bakat40.entity';

@Injectable()
export class Bakat40Service {
  constructor(
    @InjectRepository(Bakat40Entity)
    private database: Repository<Bakat40Entity>,
  ) {}

  async getBakat40(): Promise<Bakat40DTO[]> {
    const result = await this.database
      .createQueryBuilder('bakat40')
      .leftJoinAndSelect('bakat40.perbaikan', 'perbaikan')
      .addOrderBy('bakat40.id', 'ASC')
      .leftJoinAndSelect('perbaikan.bakat40_perbaikan', 'bakat40_perbaikan')
      .select([
        'bakat40',
        'perbaikan.id',
        'perbaikan.perbaikan',
        'bakat40_perbaikan.id',
        'bakat40_perbaikan.arab',
        'bakat40_perbaikan.latin',
      ])
      //   .leftJoinAndSelect('bakat40.bakat6', 'bakat6')
      .addOrderBy('perbaikan.id', 'ASC')
      .getMany();
    return result;
  }

  async getPernyataan(): Promise<Pernyataan[]> {
    try {
      const json = await this.database.find({
        select: {
          id: true,
          pernyataan: true,
        },
      });
      json.sort((a, b) => a.id - b.id);
      return json;
    } catch (error) {
      throw error;
    }
  }
}
