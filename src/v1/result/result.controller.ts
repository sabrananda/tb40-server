import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PostAssesmentDTO } from './result.dto';
import { ResultService } from './result.service';
import { Response } from 'express';

@Controller('v1/result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  @Get()
  async getResult() {
    return 'here the result';
  }
  @Get('/getDefaultResultStates')
  getDefaultResultStates() {
    return this.resultService.getDefaultResultStates();
  }
  @Post()
  async getAssessmentResult(
    @Body() body: PostAssesmentDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    // app.use((req: Request, res: Response) => {
    //     res.headers.set('Access-Control-Allow-Origin', 'https://tb40.vercel.app');
    //     res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    //     res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    //   });
    const out = await this.resultService.getAssessmentResult(body);
    res
      .setHeader('Access-Control-Allow-Origin', 'https://tb40.vercel.app')
      .json(out);
    return res;
  }
}
