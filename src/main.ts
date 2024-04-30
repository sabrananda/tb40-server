import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    // app.enableCors({
    //   origin: [
    //     'https://tb40.vercel.app',
    //     'http://localhost:3000',
    //     'https://tb40-sabranandas-projects.vercel.app',
    //   ],
    //   methods: ['GET', 'POST'],
    //   credentials: true,
    //   //   allowedHeaders: ['Content-Type', 'Authorization'],
    // });
    app.enableCors({
      origin: 'https://tb40.vercel.app',
      allowedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST'],
      credentials: true,
    });
    await app.listen(3002);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
