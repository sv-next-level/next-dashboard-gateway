import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { INestApplication, Logger } from "@nestjs/common";

import { AppModule } from "@/app.module";

async function bootstrap() {
  const logger: Logger = new Logger("main");

  const app: INestApplication<any> = await NestFactory.create(AppModule);
  const configService: ConfigService<unknown, boolean> = app.get(ConfigService);

  const PORT: number = configService.get<number>("PORT");
  const ENV: string = configService.get<string>("NODE_ENV");
  await app.listen(PORT);

  logger.verbose(`\nENV: ${ENV}\nPORT: ${PORT}\nURL: ${await app.getUrl()}\n`);
}

bootstrap();
