import { Module } from '@nestjs/common';
import { V1Service } from './v1.service';
import { V1Controller } from './v1.controller';
import { ResultModule } from './result/result.module';
import { Bakat40Module } from './bakat40/bakat40.module';
import { PerbaikanModule } from './perbaikan/perbaikan.module';
import { Bakat6Module } from './bakat6/bakat6.module';
import { Bakat3Module } from './bakat3/bakat3.module';
import { Bakat18Module } from './bakat18/bakat18.module';

@Module({
  imports: [
    ResultModule,
    PerbaikanModule,
    Bakat6Module,
    Bakat3Module,
    Bakat18Module,
    Bakat40Module,
  ],
  providers: [V1Service],
  controllers: [V1Controller],
})
export class V1Module {}
