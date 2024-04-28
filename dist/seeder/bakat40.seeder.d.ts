import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
export declare class Bakat40Seeder implements Seeder {
    private database;
    constructor(database: Repository<Bakat40Entity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
