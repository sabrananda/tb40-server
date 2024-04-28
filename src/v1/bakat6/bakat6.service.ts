import { All, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bakat6Entity } from './bakat6.entity';

@Injectable()
export class Bakat6Service {
  constructor(
    @InjectRepository(Bakat6Entity)
    private database: Repository<Bakat6Entity>,
  ) {}

  async getBakat6() {
    const data = await this.database.find({
      relations: { bakat40: true },
      //   select: {  bakat40: { id: true } },
    });
    return data;
    // return await this.database
    //   .createQueryBuilder('bakat6')
    //   .leftJoinAndSelect('bakat6.bakat40', 'bakat40')
    //   .select(['bakat6', 'bakat40'])
    //   .getMany();
  }
}
