import { Test, TestingModule } from '@nestjs/testing';
import { Bakat6Service } from './bakat6.service';

describe('Bakat6Service', () => {
  let service: Bakat6Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bakat6Service],
    }).compile();

    service = module.get<Bakat6Service>(Bakat6Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
