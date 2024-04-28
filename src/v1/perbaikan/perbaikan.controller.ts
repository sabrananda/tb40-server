import { Controller, Get } from '@nestjs/common';
import { PerbaikanBakat40 } from './perbaikan.dto';
import { PerbaikanService } from './perbaikan.service';

@Controller('v1/perbaikan')
export class PerbaikanController {
  constructor(private readonly perbaikanService: PerbaikanService) {}

  @Get()
  getResult(): Promise<PerbaikanBakat40[]> {
    return this.perbaikanService.getPerbaikan();
  }
}
