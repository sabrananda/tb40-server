import { Test, TestingModule } from '@nestjs/testing';
import { PerbaikanService } from './perbaikan.service';

describe('PerbaikanService', () => {
  let service: PerbaikanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerbaikanService],
    }).compile();

    service = module.get<PerbaikanService>(PerbaikanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
