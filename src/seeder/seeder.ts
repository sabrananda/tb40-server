import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { typeormConfig } from '../config/typeorm-sqlite.config';
import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { Bakat40Seeder } from './bakat40.seeder';
import { PerbaikanSeeder } from './perbaikanBakat40Array.seeder';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
import { Bakat6Entity } from 'src/v1/bakat6/bakat6.entity';
import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
import { Bakat6Seeder } from './bakat6.seeder';
import { Bakat3Seeder } from './bakat3.seeder';
import { Bakat18Entity } from 'src/v1/bakat18/bakat18.entity';
import { ClearTruncate } from './clear';
import { Bakat18Seeder } from './bakat18.seeder';
seeder({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([PerbaikanEntity]),
    TypeOrmModule.forFeature([Bakat40Entity]),
    TypeOrmModule.forFeature([Bakat18Entity]),
    TypeOrmModule.forFeature([Bakat6Entity]),
    TypeOrmModule.forFeature([Bakat3Entity]),
  ],
  // }).run([Bakat6Seeder, Bakat3Seeder]);
}).run([
  ClearTruncate,
  Bakat6Seeder,
  Bakat40Seeder,
  PerbaikanSeeder,
  Bakat3Seeder,
  Bakat18Seeder,
]);
