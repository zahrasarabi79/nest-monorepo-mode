import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinatesController } from 'apps/logging/src/rider-coordinates/rider-coordinates.controller';

describe('RiderCoordinatesController', () => {
  let controller: RiderCoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderCoordinatesController],
    }).compile();

    controller = module.get<RiderCoordinatesController>(
      RiderCoordinatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
