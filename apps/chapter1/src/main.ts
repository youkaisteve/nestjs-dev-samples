import { NestFactory } from '@nestjs/core';
import { Chapter1Module } from './chapter1.module';

async function bootstrap() {
  const app = await NestFactory.create(Chapter1Module);
  await app.listen(3000);
  setTimeout(() => {
    app.close();
  }, 5000)
}
bootstrap();
