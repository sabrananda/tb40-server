import { Test, TestingModule } from '@nestjs/testing';
import { Bakat40Service } from './bakat40.service';

describe('Bakat40Service', () => {
  let service: Bakat40Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bakat40Service],
    }).compile();

    service = module.get<Bakat40Service>(Bakat40Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
