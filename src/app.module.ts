import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppService } from "@/app.service";
import { UserModule } from "@/user/user.module";
import { AppController } from "@/app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env.local",
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(
      `${process.env.DASHBOARD_MONGODB_URI}/${process.env.DASHBOARD_DATABASE_NAME}?${process.env.DASHBOARD_MONGODB_CONFIG}`
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
