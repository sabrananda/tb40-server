import { Module } from '@nestjs/common';
import { Bakat18Controller } from './bakat18.controller';
import { Bakat18Service } from './bakat18.service';

@Module({
  controllers: [Bakat18Controller],
  providers: [Bakat18Service],
})
export class Bakat18Module {}
