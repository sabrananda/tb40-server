import { NestFactory } from '@nestjs/core';
// import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
import cors from 'cors';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    // app.use((req: Request, res: Response, next: NextFunction) => {
    //   res.setHeader('Access-Control-Allow-Origin', 'https://tb40.vercel.app');
    //   res.setHeader('Access-Control-Allow-Methods', [
    //     'POST',
    //     'GET',
    //     'PUT',
    //     'DELETE',
    //   ]);
    //   res.setHeader('Access-Control-Allow-Headers', [
    //     'Origin',
    //     'Content-Type',
    //     'X-Auth-Token',
    //   ]);
    //   next();
    // });
    app.use(cors());
    // app.enableCors({
    //   origin: [
    //     'https://tb40.vercel.app',
    //     'http://192.168.110.198:3000',
    //     'http://localhost:3000',
    //     'https://tb40-8o264tsp5-sabranandas-projects.vercel.app',
    //   ],
    //   allowedHeaders: [
    //     'Content-Type',
    //     'Authorization',
    //     'X-Requested-With',
    //     'Accept',
    //     'Origin',
    //   ],
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   credentials: true,
    // });

    await app.listen(3002);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
