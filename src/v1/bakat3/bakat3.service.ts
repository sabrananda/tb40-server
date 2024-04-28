import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bakat3Entity } from './bakat3.entity';

@Injectable()
export class Bakat3Service {
  constructor(
    @InjectRepository(Bakat3Entity)
    private database: Repository<Bakat3Entity>,
  ) {}

  async getBakat3() {
    const data = await this.database.find();
    return data;
  }
}
