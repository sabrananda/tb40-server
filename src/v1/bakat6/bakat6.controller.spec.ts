import { Test, TestingModule } from '@nestjs/testing';
import { Bakat6Controller } from './bakat6.controller';

describe('Bakat6Controller', () => {
  let controller: Bakat6Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Bakat6Controller],
    }).compile();

    controller = module.get<Bakat6Controller>(Bakat6Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
