import { Controller, Get } from '@nestjs/common';
import { Bakat3DTO } from './bakat3.dto';
import { Bakat3Service } from './bakat3.service';

@Controller('v1/bakat3')
export class Bakat3Controller {
  constructor(private readonly bakat3Service: Bakat3Service) {}

  @Get()
  getBakat3(): Promise<Bakat3DTO[]> {
    return this.bakat3Service.getBakat3();
  }
}
