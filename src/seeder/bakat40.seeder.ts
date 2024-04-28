import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { bakat40Array } from './bakat40Array';

@Injectable()
export class Bakat40Seeder implements Seeder {
  constructor(
    @InjectRepository(Bakat40Entity)
    private database: Repository<Bakat40Entity>,
  ) {}
  async seed(): Promise<any> {
    // Insert into the database.
    try {
      const data = await this.database.insert(bakat40Array);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async drop(): Promise<any> {
    return;
  }
}
