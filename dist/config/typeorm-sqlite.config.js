"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
exports.typeormConfig = {
    type: 'sqlite',
    database: 'data/tb40DB',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/src/config/migrations/*{.ts,.js}'],
};
//# sourceMappingURL=typeorm-sqlite.config.js.map