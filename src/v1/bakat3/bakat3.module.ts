import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bakat3Controller } from './bakat3.controller';
import { Bakat3Entity } from './bakat3.entity';
import { Bakat3Service } from './bakat3.service';

@Module({
  controllers: [Bakat3Controller],
  providers: [Bakat3Service],
  imports: [TypeOrmModule.forFeature([Bakat3Entity])],
})
export class Bakat3Module {}
