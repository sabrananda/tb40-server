import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { Repository } from 'typeorm';
export declare function kekuatanKelemahanHandler(ranks40: number[], databaseBakat40: Repository<Bakat40Entity>): Promise<{
    bakatKekuatan: Bakat40Entity[];
    bakatKelemahan: Bakat40Entity[];
}>;
