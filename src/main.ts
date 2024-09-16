import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const port = app.get(ConfigService).get<number>('PORT') || 3333;
  await app.listen(port);
  console.log(`>> Application is running on http://localhost:${port}`);
}
bootstrap();
