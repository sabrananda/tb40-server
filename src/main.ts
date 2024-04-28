import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });
    //   app.enableCors
    await app.listen(3001);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
