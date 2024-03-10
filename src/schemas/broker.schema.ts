import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Brokers {
  ANGELONE = "ANGEL ONE",
  DHAN = "DHAN",
}

export enum BrokerUse {
  EQUITY = "EQUITY",
  OPTIONS = "OPTIONS",
}

@Schema({
  timestamps: true,
})
export class Broker {
  @Prop({ type: String, required: true, unique: true })
  name: String;

  @Prop({ type: String, required: true, unique: true })
  code: String;

  @Prop({
    type: String,
    enum: Brokers,
  })
  broker: Brokers;

  @Prop({
    type: [String],
    enum: BrokerUse,
  })
  use: BrokerUse[];
}

export const brokerSchema = SchemaFactory.createForClass(Broker);
