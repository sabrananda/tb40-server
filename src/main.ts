import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.use((req: Request, res: Response) => {
      res.headers.set('Access-Control-Allow-Origin', 'https://tb40.vercel.app');
      res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
      res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    });
    app.enableCors({
      //   origin: true,
      origin: [
        'https://tb40.vercel.app',
        'http://192.168.110.198:3000',
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
      credentials: true,
    });

    await app.listen(3002);
  } catch (error) {
    throw new Error(error);
  }
}
bootstrap();
