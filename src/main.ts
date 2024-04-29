import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: [
        'https://tb40.vercel.app',
        'http://localhost:3000',
        'https://tb40-sabranandas-projects.vercel.app',
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      //   allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await app.listen(3001);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
