import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    // origin: "https://apartment-module.pages.dev",
    origin: "http://127.0.0.1:10880",
    optionsSuccessStatus: 200
  });
  await app.listen(666);
}

bootstrap();
