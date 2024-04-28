import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';
import { Bakat6Entity } from '../bakat6/bakat6.entity';
import { Bakat3Entity } from '../bakat3/bakat3.entity';
import { PerbaikanEntity } from '../perbaikan/perbaikan.entity';

@Module({
  providers: [ResultService],
  controllers: [ResultController],
  imports: [
    TypeOrmModule.forFeature([
      Bakat40Entity,
      Bakat6Entity,
      Bakat3Entity,
      PerbaikanEntity,
    ]),
  ],
})
export class ResultModule {}
