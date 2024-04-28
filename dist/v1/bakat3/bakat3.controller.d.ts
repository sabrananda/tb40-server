import { Bakat3DTO } from './bakat3.dto';
import { Bakat3Service } from './bakat3.service';
export declare class Bakat3Controller {
    private readonly bakat3Service;
    constructor(bakat3Service: Bakat3Service);
    getBakat3(): Promise<Bakat3DTO[]>;
}
