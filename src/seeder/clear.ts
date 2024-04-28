import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { Bakat18Entity } from 'src/v1/bakat18/bakat18.entity';
import { Bakat6Entity } from 'src/v1/bakat6/bakat6.entity';
import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
import { Seeder } from 'nestjs-seeder';

@Injectable()
export class ClearTruncate implements Seeder {
  constructor(
    @InjectRepository(Bakat40Entity)
    private database_bakat40: Repository<Bakat40Entity>,
    @InjectRepository(Bakat18Entity)
    private database_bakat18: Repository<Bakat18Entity>,
    @InjectRepository(Bakat6Entity)
    private database_bakat6: Repository<Bakat6Entity>,
    @InjectRepository(Bakat3Entity)
    private database_bakat3: Repository<Bakat3Entity>,
    @InjectRepository(PerbaikanEntity)
    private database_perbaikan: Repository<PerbaikanEntity>,
  ) {}
  async seed(): Promise<any> {
    return;
  }
  //   async truncate(): Promise<any> {
  //     // Insert into the database.
  //     try {
  //       await this.database_bakat40.clear();
  //       await this.database_bakat6.clear();
  //       await this.database_perbaikan.clear();
  //       await this.database_bakat18.clear();
  //       await this.database_bakat3.clear();
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }

  async drop(): Promise<any> {
    try {
      await this.database_bakat18.clear();
      await this.database_bakat3.clear();
      await this.database_perbaikan.clear();
      await this.database_bakat40.clear();
      await this.database_bakat6.clear();
    } catch (error) {
      console.log(error);
    }
    return;
  }
}
