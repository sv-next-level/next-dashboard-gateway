import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { brokerSchema } from "./broker.schema";

export enum UserRoles {
  LOGS = "LOGS",
  USER = "USER",
  ADMIN = "ADMIN",
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ type: String, required: true })
  name?: String;

  @Prop({ type: String, required: true, unique: true })
  email?: String;

  @Prop({ type: Date })
  email_verification?: Date;

  @Prop({ type: String })
  phone?: String;

  @Prop({ type: Date })
  phone_verification?: Date;

  @Prop({ type: Date })
  two_factor_authentication?: Date;

  @Prop({ type: String })
  password?: String;

  @Prop({
    type: [String],
    enum: UserRoles,
    default: [UserRoles.USER],
  })
  roles?: UserRoles[];

  @Prop({
    type: [brokerSchema],
  })
  brokers?: (typeof brokerSchema)[];
}

export const userSchema = SchemaFactory.createForClass(User);
