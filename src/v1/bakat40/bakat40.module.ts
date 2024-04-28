import { Module } from '@nestjs/common';
import { Bakat40Service } from './bakat40.service';
import { Bakat40Controller } from './bakat40.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bakat40Entity } from './bakat40.entity';

@Module({
  providers: [Bakat40Service],
  controllers: [Bakat40Controller],
  imports: [TypeOrmModule.forFeature([Bakat40Entity])],
})
export class Bakat40Module {}
