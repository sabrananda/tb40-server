import { Controller, Get, Res } from '@nestjs/common';
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
  getPernyataan(@Res() res: Response): Promise<Pernyataan[]> {
    const pernyataan = this.bakat40Service.getPernyataan();
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Origin', '*'); // replace this your actual origin
    res.headers.set(
      'Access-Control-Allow-Methods',
      'GET,DELETE,PATCH,POST,PUT',
    );
    res.headers.set(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    );
    return pernyataan;
  }
}
