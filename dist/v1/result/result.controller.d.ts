import { PostAssesmentDTO } from './result.dto';
import { ResultService } from './result.service';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    getResult(): Promise<string>;
    getDefaultResultStates(): Promise<any>;
    getAssessmentResult(body: PostAssesmentDTO): Promise<string>;
}
