import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { userSchema } from "@/schemas/user.schema";
import { UserService } from "@/user/user.service";
import { UserController } from "@/user/user.controller";

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: "User", schema: userSchema }],
      process.env.DASHBOARD_DATABASE_NAME
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
