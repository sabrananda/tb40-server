import { Repository } from 'typeorm';
import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { Bakat18Entity } from 'src/v1/bakat18/bakat18.entity';
import { Bakat6Entity } from 'src/v1/bakat6/bakat6.entity';
import { Bakat3Entity } from 'src/v1/bakat3/bakat3.entity';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
import { Seeder } from 'nestjs-seeder';
export declare class ClearTruncate implements Seeder {
    private database_bakat40;
    private database_bakat18;
    private database_bakat6;
    private database_bakat3;
    private database_perbaikan;
    constructor(database_bakat40: Repository<Bakat40Entity>, database_bakat18: Repository<Bakat18Entity>, database_bakat6: Repository<Bakat6Entity>, database_bakat3: Repository<Bakat3Entity>, database_perbaikan: Repository<PerbaikanEntity>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
