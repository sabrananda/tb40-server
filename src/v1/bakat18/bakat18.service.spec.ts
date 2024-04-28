import { Test, TestingModule } from '@nestjs/testing';
import { Bakat18Service } from './bakat18.service';

describe('Bakat18Service', () => {
  let service: Bakat18Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bakat18Service],
    }).compile();

    service = module.get<Bakat18Service>(Bakat18Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
