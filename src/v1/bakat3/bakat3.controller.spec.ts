import { Test, TestingModule } from '@nestjs/testing';
import { Bakat3Controller } from './bakat3.controller';

describe('Bakat3Controller', () => {
  let controller: Bakat3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Bakat3Controller],
    }).compile();

    controller = module.get<Bakat3Controller>(Bakat3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
