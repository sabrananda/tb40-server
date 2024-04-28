import { Controller, Get } from '@nestjs/common';
import { Bakat6DTO } from './bakat6.dto';
import { Bakat6Service } from './bakat6.service';

@Controller('v1/bakat6')
export class Bakat6Controller {
  constructor(private readonly bakat6Service: Bakat6Service) {}

  @Get()
  getBakat6(): Promise<Bakat6DTO[]> {
    return this.bakat6Service.getBakat6();
  }
}
