import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostAssesmentDTO } from './result.dto';
import { ResultService } from './result.service';

@Controller('v1/result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  @Get()
  async getResult() {
    return 'here the result';
  }
  @Get('/getDefaultResultStates')
  async getDefaultResultStates() {
    return this.resultService.getDefaultResultStates();
  }
  @Post()
  async getAssessmentResult(@Body() body: PostAssesmentDTO): Promise<string> {
    return this.resultService.getAssessmentResult(body);
  }
}
