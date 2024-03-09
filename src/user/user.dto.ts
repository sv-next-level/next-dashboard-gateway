import { UserRoles } from "@/user/user.schema";

export class userDto {
  readonly name: string;
  readonly email: string;
  readonly emailVerified?: Date;
  readonly phone?: string;
  readonly phoneVerification?: Date;
  readonly twoFactorAuthentication?: Date;
  readonly password?: string;
  readonly roles: [UserRoles];
}
