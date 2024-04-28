import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { PerbaikanEntity } from 'src/v1/perbaikan/perbaikan.entity';
import { Repository } from 'typeorm';
import { PotensiSifatTercela } from '../result.dto';
export declare function potensiSifatTercelaHandler(nama: string, kekuatanDanKelemahan: {
    bakatKekuatan: Bakat40Entity[];
    bakatKelemahan: Bakat40Entity[];
}, databasePerbaikan: Repository<PerbaikanEntity>): Promise<PotensiSifatTercela>;
