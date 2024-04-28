import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
import { bakat3Array } from './bakat3Array';

@Injectable()
export class Bakat3Seeder implements Seeder {
  constructor(
    @InjectRepository(Bakat3Entity)
    private database: Repository<Bakat3Entity>,
  ) {}
  async seed(): Promise<any> {
    // Insert into the database.
    try {
      const data = await this.database.insert(bakat3Array);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async drop(): Promise<any> {
    return;
  }
}
