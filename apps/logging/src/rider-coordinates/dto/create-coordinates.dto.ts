import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinatesDto {
  @IsNumber()
  @IsNotEmpty()
  lng: string;

  @IsNumber()
  @IsNotEmpty()
  lat: string;

  @IsString()
  @IsNotEmpty()
  riderId: string;
}
