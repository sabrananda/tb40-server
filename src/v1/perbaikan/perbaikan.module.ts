import { Module } from '@nestjs/common';
import { PerbaikanService } from './perbaikan.service';
import { PerbaikanController } from './perbaikan.controller';
import { PerbaikanEntity } from './perbaikan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PerbaikanService],
  controllers: [PerbaikanController],
  imports: [TypeOrmModule.forFeature([PerbaikanEntity])],
})
export class PerbaikanModule {}
