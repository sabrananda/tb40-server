import { Controller, Get } from '@nestjs/common';
import { Bakat40DTO, Pernyataan } from './bakat40.dto';
import { Bakat40Service } from './bakat40.service';

@Controller('v1/bakat40')
export class Bakat40Controller {
  constructor(private readonly bakat40Service: Bakat40Service) {}

  @Get()
  getResult(): Promise<Bakat40DTO[]> {
    return this.bakat40Service.getBakat40();
  }
  @Get('/pernyataan')
  getPernyataan(): Promise<Pernyataan[]> {
    return this.bakat40Service.getPernyataan();
  }
}
