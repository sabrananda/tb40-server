import { PostAssesmentDTO } from './result.dto';
import { Repository } from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';
import { Bakat6Entity } from '../bakat6/bakat6.entity';
import { Bakat3Entity } from '../bakat3/bakat3.entity';
import { PerbaikanEntity } from '../perbaikan/perbaikan.entity';
export declare class ResultService {
    private databaseBakat40;
    private databaseBakat6;
    private databaseBakat3;
    private databasePerbaikan;
    constructor(databaseBakat40: Repository<Bakat40Entity>, databaseBakat6: Repository<Bakat6Entity>, databaseBakat3: Repository<Bakat3Entity>, databasePerbaikan: Repository<PerbaikanEntity>);
    getAssessmentResult(body: PostAssesmentDTO): Promise<any>;
    getDefaultResultStates(): Promise<any>;
}
