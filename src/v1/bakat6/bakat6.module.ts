import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bakat6Controller } from './bakat6.controller';
import { Bakat6Entity } from './bakat6.entity';
import { Bakat6Service } from './bakat6.service';

@Module({
  controllers: [Bakat6Controller],
  providers: [Bakat6Service],
  imports: [TypeOrmModule.forFeature([Bakat6Entity])],
})
export class Bakat6Module {}
