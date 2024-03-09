import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { userSchema } from "@/user/user.schema";
import { UserService } from "@/user/user.service";
import { UserController } from "@/user/user.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: userSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
