import { Test, TestingModule } from '@nestjs/testing';
import { Bakat40Controller } from './bakat40.controller';

describe('Bakat40Controller', () => {
  let controller: Bakat40Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Bakat40Controller],
    }).compile();

    controller = module.get<Bakat40Controller>(Bakat40Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
