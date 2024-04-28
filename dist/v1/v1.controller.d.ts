import { V1Service } from './v1.service';
export declare class V1Controller {
    private readonly v1Service;
    constructor(v1Service: V1Service);
    getResult(): string;
}
