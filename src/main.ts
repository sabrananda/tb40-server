import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.enableCors({
      origin: [
        'https://tb40.vercel.app',
        'http://192.168.110.198:3000',
        'http://localhost:3000',
        'https://tb40-8o264tsp5-sabranandas-projects.vercel.app',
      ],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      preflightContinue: true,
      //   credentials: true,
    });

    await app.listen(3000);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
