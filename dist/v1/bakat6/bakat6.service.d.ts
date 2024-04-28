import { Repository } from 'typeorm';
import { Bakat6Entity } from './bakat6.entity';
export declare class Bakat6Service {
    private database;
    constructor(database: Repository<Bakat6Entity>);
    getBakat6(): Promise<Bakat6Entity[]>;
}
