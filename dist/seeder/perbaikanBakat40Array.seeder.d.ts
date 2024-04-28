import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
export declare class PerbaikanSeeder implements Seeder {
    private database;
    constructor(database: Repository<PerbaikanEntity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
