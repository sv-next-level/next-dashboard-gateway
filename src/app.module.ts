import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppService } from "@/app.service";
import { UserModule } from "@/user/user.module";
import { AppController } from "@/app.controller";
import { validate } from "@/config/env.validation";

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: ".env.local",
      // isGlobal: true,
      // cache: true,
      validate,
    }),
    UserModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri:
          configService.get<string>("DASHBOARD_MONGODB_URI") +
          "/" +
          configService.get<string>("DASHBOARD_DATABASE_NAME") +
          "?" +
          configService.get<string>("DASHBOARD_MONGODB_CONFIG"),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * 
      `${process.env.DASHBOARD_MONGODB_URI}/${process.env.DASHBOARD_DATABASE_NAME}?${process.env.DASHBOARD_MONGODB_CONFIG}`
      // ,
      // {
      //   connectionName: String(process.env.DASHBOARD_DATABASE_NAME),
      // }
 */
