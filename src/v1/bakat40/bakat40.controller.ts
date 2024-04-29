import { Controller, Get, Res } from '@nestjs/common';
import { Bakat40DTO, Pernyataan } from './bakat40.dto';
import { Bakat40Service } from './bakat40.service';
import { Response } from 'express';
@Controller('v1/bakat40')
export class Bakat40Controller {
  constructor(private readonly bakat40Service: Bakat40Service) {}

  @Get()
  getResult(): Promise<Bakat40DTO[]> {
    return this.bakat40Service.getBakat40();
  }
  @Get('/pernyataan')
  async getPernyataan(@Res() res: Response): Promise<Response> {
    const pernyataan = await this.bakat40Service.getPernyataan();
    res.appendHeader('Access-Control-Allow-Credentials', 'true');
    res.appendHeader('Access-Control-Allow-Origin', 'https://tb40.vercel.app'); // replace this your actual origin
    res.appendHeader(
      'Access-Control-Allow-Methods',
      'GET,DELETE,PATCH,POST,PUT',
    );
    res.appendHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    );
    const body = JSON.stringify(pernyataan);
    res.json(body);
    return res;
  }
}
