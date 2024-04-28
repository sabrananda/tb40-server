import { Repository } from 'typeorm';
import { PerbaikanBakat40 } from './perbaikan.dto';
import { PerbaikanEntity } from './perbaikan.entity';
export declare class PerbaikanService {
    private database;
    constructor(database: Repository<PerbaikanEntity>);
    getPerbaikan(): Promise<PerbaikanBakat40[]>;
}
