import { PerbaikanBakat40 } from './perbaikan.dto';
import { PerbaikanService } from './perbaikan.service';
export declare class PerbaikanController {
    private readonly perbaikanService;
    constructor(perbaikanService: PerbaikanService);
    getResult(): Promise<PerbaikanBakat40[]>;
}
