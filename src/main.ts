import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });
    //   app.enableCors({
    //     origin: ['http://127.0.0.1:3000', 'https://tb40.vercel.app'],
    //     // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //     // credentials: true,
    //   });
    await app.listen(3001);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
