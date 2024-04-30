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
      //   origin: true,
      origin: [
        'https://tb40.vercel.app',
        'http://192.168.110.198:3000',
        'https://tb40-8o264tsp5-sabranandas-projects.vercel.app',
      ],
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
