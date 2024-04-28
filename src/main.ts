import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: [
        'https://tb40.vercel.app',
        'http://192.168.43.13:3000',
        'http://127.0.0.1:3000',
      ],
      methods: ['GET', 'POST'],
      credentials: true,
    });
    await app.listen(3001);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
