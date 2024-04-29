import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    // app.use(
    //   cors({
    //     origin: [
    //       'https://tb40.vercel.app/',
    //       'http://localhost:3000',
    //       'https://tb40-sabranandas-projects.vercel.app',
    //     ],
    //     methods: ['GET', 'POST'],
    //     credentials: true,
    //   }),
    // );
    app.enableCors({
      origin: [
        'https://tb40.vercel.app',
        'http://localhost:3000',
        'https://tb40-sabranandas-projects.vercel.app',
      ],
      methods: ['GET', 'POST'],
      credentials: true,
      //   allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await app.listen(3001);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
