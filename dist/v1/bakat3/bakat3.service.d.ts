import { Repository } from 'typeorm';
import { Bakat3Entity } from './bakat3.entity';
export declare class Bakat3Service {
    private database;
    constructor(database: Repository<Bakat3Entity>);
    getBakat3(): Promise<Bakat3Entity[]>;
}
