import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoordinates,
  RiderCoordinatesSchema,
} from 'apps/logging/src/rider-coordinates/schemas/rider-coordinate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoordinates.name, schema: RiderCoordinatesSchema },
    ]),
    RiderCoordinatesModule,
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}
