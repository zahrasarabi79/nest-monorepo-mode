import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCoordinatesDto } from 'apps/logging/src/rider-coordinates/dto/create-coordinates.dto';
import { RiderCoordinates } from 'apps/logging/src/rider-coordinates/schemas/rider-coordinate.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinates.name)
    private readonly riderCoordinateModel: Model<RiderCoordinates>,
  ) {}
  async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinateDTO);
  }
  async getRiderCoordinates() {
    return await this.riderCoordinateModel.find();
  }
}
