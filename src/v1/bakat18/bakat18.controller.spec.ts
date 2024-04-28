import { Test, TestingModule } from '@nestjs/testing';
import { Bakat18Controller } from './bakat18.controller';

describe('Bakat8Controller', () => {
  let controller: Bakat18Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Bakat18Controller],
    }).compile();

    controller = module.get<Bakat18Controller>(Bakat18Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
