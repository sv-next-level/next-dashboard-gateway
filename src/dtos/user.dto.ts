import { brokerSchema } from "@/schemas/broker.schema";
import { UserRoles } from "@/schemas/user.schema";
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsDate()
  readonly emailVerification?: Date;

  @IsOptional()
  @IsPhoneNumber("IN")
  readonly phone?: string;

  @IsOptional()
  @IsDate()
  readonly phoneVerification?: Date;

  @IsOptional()
  @IsDate()
  readonly twoFactorAuthentication?: Date;

  @IsOptional()
  @IsString()
  readonly password?: string;

  @IsArray()
  @IsEnum(UserRoles, { message: "Invalid user role!" })
  readonly roles: UserRoles[];

  @IsOptional()
  @IsArray()
  readonly brokers?: (typeof brokerSchema)[];
}

export class updateUserDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsDate()
  readonly emailVerification?: Date;

  @IsOptional()
  @IsPhoneNumber("IN")
  readonly phone?: string;

  @IsOptional()
  @IsDate()
  readonly phoneVerification?: Date;

  @IsOptional()
  @IsDate()
  readonly twoFactorAuthentication?: Date;

  @IsOptional()
  @IsString()
  readonly password?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(UserRoles, { message: "Invalid user role!" })
  readonly roles?: UserRoles[];

  @IsOptional()
  @IsArray()
  readonly brokers?: (typeof brokerSchema)[];
}
