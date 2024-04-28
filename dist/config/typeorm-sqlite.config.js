"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
exports.typeormConfig = {
    type: 'postgres',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 5432,
    username: 'postgres.xnyvmyodwycaxalznecn',
    password: 'tafsirbakat40',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm-sqlite.config.js.map