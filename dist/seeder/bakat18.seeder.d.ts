import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Bakat18Entity } from 'src/v1/bakat18/bakat18.entity';
export declare class Bakat18Seeder implements Seeder {
    private database;
    constructor(database: Repository<Bakat18Entity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
