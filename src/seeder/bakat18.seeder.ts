import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bakat18Entity } from 'src/v1/bakat18/bakat18.entity';
import { bakat18Array } from './bakat18Array';

@Injectable()
export class Bakat18Seeder implements Seeder {
  constructor(
    @InjectRepository(Bakat18Entity)
    private database: Repository<Bakat18Entity>,
  ) {}
  async seed(): Promise<any> {
    // Insert into the database.
    try {
      const data = await this.database.insert(bakat18Array);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async drop(): Promise<any> {
    return;
  }
}
