import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
export declare class Bakat3Seeder implements Seeder {
    private database;
    constructor(database: Repository<Bakat3Entity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
