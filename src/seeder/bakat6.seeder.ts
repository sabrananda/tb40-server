import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bakat6Entity } from 'src/v1/bakat6/bakat6.entity';
import { bakat6Array } from './bakat6Array';

@Injectable()
export class Bakat6Seeder implements Seeder {
  constructor(
    @InjectRepository(Bakat6Entity)
    private database: Repository<Bakat6Entity>,
  ) {}
  async seed(): Promise<any> {
    // Insert into the database.
    try {
      const data = await this.database.insert(bakat6Array);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async drop(): Promise<any> {
    return;
  }
}
