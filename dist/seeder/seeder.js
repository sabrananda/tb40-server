"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_seeder_1 = require("nestjs-seeder");
const typeorm_sqlite_config_1 = require("../config/typeorm-sqlite.config");
const bakat40_entity_1 = require("../v1/bakat40/bakat40.entity");
const bakat40_seeder_1 = require("./bakat40.seeder");
const perbaikanBakat40Array_seeder_1 = require("./perbaikanBakat40Array.seeder");
const perbaikan_entity_1 = require("../v1/perbaikan/perbaikan.entity");
const bakat6_entity_1 = require("../v1/bakat6/bakat6.entity");
const bakat3_entity_1 = require("../v1/bakat3/bakat3.entity");
const bakat6_seeder_1 = require("./bakat6.seeder");
const bakat3_seeder_1 = require("./bakat3.seeder");
const bakat18_entity_1 = require("../v1/bakat18/bakat18.entity");
const clear_1 = require("./clear");
const bakat18_seeder_1 = require("./bakat18.seeder");
(0, nestjs_seeder_1.seeder)({
    imports: [
        typeorm_1.TypeOrmModule.forRoot(typeorm_sqlite_config_1.typeormConfig),
        typeorm_1.TypeOrmModule.forFeature([perbaikan_entity_1.PerbaikanEntity]),
        typeorm_1.TypeOrmModule.forFeature([bakat40_entity_1.Bakat40Entity]),
        typeorm_1.TypeOrmModule.forFeature([bakat18_entity_1.Bakat18Entity]),
        typeorm_1.TypeOrmModule.forFeature([bakat6_entity_1.Bakat6Entity]),
        typeorm_1.TypeOrmModule.forFeature([bakat3_entity_1.Bakat3Entity]),
    ],
}).run([
    clear_1.ClearTruncate,
    bakat6_seeder_1.Bakat6Seeder,
    bakat40_seeder_1.Bakat40Seeder,
    perbaikanBakat40Array_seeder_1.PerbaikanSeeder,
    bakat3_seeder_1.Bakat3Seeder,
    bakat18_seeder_1.Bakat18Seeder,
]);
//# sourceMappingURL=seeder.js.map