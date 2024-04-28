import { Injectable } from '@nestjs/common';

@Injectable()
export class V1Service {
  getV1(): string {
    console.log('tes');
    return 'here api version 1';
  }
}
