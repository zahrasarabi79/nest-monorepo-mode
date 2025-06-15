import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from 'apps/logging/src/rider-coordinates/dto/create-coordinates.dto';
import { RiderCoordinatesService } from 'apps/logging/src/rider-coordinates/rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private riderCoordinatesService: RiderCoordinatesService) {}
  @Get()
  getRiderCoordinates() {
    return this.riderCoordinatesService.getRiderCoordinates();
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return this.riderCoordinatesService.saveRiderCoordinates(
      createCoordinatesDto,
    );
  }
}
