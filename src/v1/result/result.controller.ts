import { Body, Controller, Get, Header, Post, Req, Res } from '@nestjs/common';
import { PostAssesmentDTO } from './result.dto';
import { ResultService } from './result.service';
// import { Response } from 'express';

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
  @Header('Access-Control-Allow-Origin', '*')
  async getAssessmentResult(
    @Body() body: PostAssesmentDTO,
    // @Req() req: Request,
    // @Res() res: Response,
  ): Promise<string> {
    // res.headers
    //   ): Promise<Response<any, Record<string, any>>> {
    // app.use((req: Request, res: Response) => {
    //     res.headers.set('Access-Control-Allow-Origin', 'https://tb40.vercel.app');
    //     res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    //     res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    //   });
    // const out = await this.resultService.getAssessmentResult(body);
    // res
    //   .setHeader('Access-Control-Allow-Origin', '*')
    //   .setHeader('Access-Control-Allow-Method', 'POST,GET,PUT,OPTIONS,DELETE')
    //   .json(out);
    return await this.resultService.getAssessmentResult(body);
  }
}
