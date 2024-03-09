import { AppModule } from "@/app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NEXT_DASHBOARD_SERVICE_PORT);
}
bootstrap();
