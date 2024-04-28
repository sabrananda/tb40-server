import { Bakat40DTO, Pernyataan } from './bakat40.dto';
import { Bakat40Service } from './bakat40.service';
export declare class Bakat40Controller {
    private readonly bakat40Service;
    constructor(bakat40Service: Bakat40Service);
    getResult(): Promise<Bakat40DTO[]>;
    getPernyataan(): Promise<Pernyataan[]>;
}
