import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Bakat6Entity } from 'src/v1/bakat6/bakat6.entity';
export declare class Bakat6Seeder implements Seeder {
    private database;
    constructor(database: Repository<Bakat6Entity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
