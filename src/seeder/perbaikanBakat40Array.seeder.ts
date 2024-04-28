import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
import { perbaikanBakat40 } from './perbaikanBakat40Array';
@Injectable()
export class PerbaikanSeeder implements Seeder {
  constructor(
    @InjectRepository(PerbaikanEntity)
    private database: Repository<PerbaikanEntity>,
  ) {}
  async seed(): Promise<any> {
    // Insert into the database.
    try {
      const data = await this.database.insert(perbaikanBakat40);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async drop(): Promise<any> {
    return;
  }
}
