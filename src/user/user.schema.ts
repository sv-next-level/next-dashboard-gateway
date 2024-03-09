import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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
  name: String;

  @Prop({ type: String, required: true, unique: true })
  email: String;

  @Prop({ type: Date })
  emailVerified?: Date;

  @Prop({ type: String })
  phone?: String;

  @Prop({ type: Date })
  phoneVerification?: Date;

  @Prop({ type: Date })
  twoFactorAuthentication?: Date;

  @Prop({ type: String })
  password?: String;

  @Prop([
    {
      type: String,
      enum: Object.values(UserRoles),
      default: UserRoles.USER,
    },
  ])
  roles: [UserRoles];

  // brokers: [brokerSchema],
  // currentBroker: { type: String },
}

export const userSchema = SchemaFactory.createForClass(User);
