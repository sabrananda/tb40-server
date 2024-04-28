import { Test, TestingModule } from '@nestjs/testing';
import { Bakat3Service } from './bakat3.service';

describe('Bakat3Service', () => {
  let service: Bakat3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bakat3Service],
    }).compile();

    service = module.get<Bakat3Service>(Bakat3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
