import { Repository } from 'typeorm';
import { Bakat40DTO, Pernyataan } from './bakat40.dto';
import { Bakat40Entity } from './bakat40.entity';
export declare class Bakat40Service {
    private database;
    constructor(database: Repository<Bakat40Entity>);
    getBakat40(): Promise<Bakat40DTO[]>;
    getPernyataan(): Promise<Pernyataan[]>;
}
