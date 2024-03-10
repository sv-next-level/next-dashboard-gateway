import { brokerSchema } from "@/schemas/broker.schema";
import { UserRoles } from "@/schemas/user.schema";
import mongoose from "mongoose";

export class mongoIdDto {
  readonly userId: string;
}

export const isMongoIdValid = (id: string): boolean => {
  return mongoose.isValidObjectId(id);
};
