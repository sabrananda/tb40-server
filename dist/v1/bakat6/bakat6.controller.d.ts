import { Bakat6DTO } from './bakat6.dto';
import { Bakat6Service } from './bakat6.service';
export declare class Bakat6Controller {
    private readonly bakat6Service;
    constructor(bakat6Service: Bakat6Service);
    getBakat6(): Promise<Bakat6DTO[]>;
}
