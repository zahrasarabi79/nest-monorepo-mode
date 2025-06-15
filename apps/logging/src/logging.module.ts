import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from 'apps/logging/src/rider-coordinates/rider-coordinates.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/logs_db?authSource=admin',
    ),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
