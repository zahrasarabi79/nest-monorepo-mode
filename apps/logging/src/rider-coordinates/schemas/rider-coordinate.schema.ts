import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderCoordinatesDocumants = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  riderId: string;
}
export const RiderCoordinatesSchema =
  SchemaFactory.createForClass(RiderCoordinates);
