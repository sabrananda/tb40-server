import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  port: 5432,
  username: 'postgres.xnyvmyodwycaxalznecn',
  password: 'tafsirbakat40',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
// export const typeormConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '353444',
//   database: 'skobil-db',
//   entities: [__dirname + '/../**/*.entity.{ts,js}'],
//   synchronize: true,
// };

// export const typeormConfig: TypeOrmModuleOptions = {
//   type: 'sqlite',
//   database: 'data/tb40DB',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
//   migrations: ['dist/src/config/migrations/*{.ts,.js}'],
// };
