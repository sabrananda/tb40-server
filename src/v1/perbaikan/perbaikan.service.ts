import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerbaikanBakat40 } from './perbaikan.dto';
import { PerbaikanEntity } from './perbaikan.entity';

@Injectable()
export class PerbaikanService {
  constructor(
    @InjectRepository(PerbaikanEntity)
    private database: Repository<PerbaikanEntity>,
  ) {}
  //   getBakat40(): string {
  //     return 'ini bakat 40';
  //   }
  async getPerbaikan(): Promise<PerbaikanBakat40[]> {
    return this.database.find({
      relations: {
        bakat40: true,
        bakat40_perbaikan: true,
      },
      select: {
        id: true,
        bakat40: { latin: true },
        bakat40_perbaikan: { latin: true },
        perbaikan: true,
      },
    });
  }
}
