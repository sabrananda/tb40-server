import { Test, TestingModule } from '@nestjs/testing';
import { PerbaikanController } from './perbaikan.controller';

describe('PerbaikanController', () => {
  let controller: PerbaikanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerbaikanController],
    }).compile();

    controller = module.get<PerbaikanController>(PerbaikanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
