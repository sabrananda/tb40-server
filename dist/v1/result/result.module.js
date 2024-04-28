"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultModule = void 0;
const common_1 = require("@nestjs/common");
const result_service_1 = require("./result.service");
const result_controller_1 = require("./result.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bakat40_entity_1 = require("../bakat40/bakat40.entity");
const bakat6_entity_1 = require("../bakat6/bakat6.entity");
const bakat3_entity_1 = require("../bakat3/bakat3.entity");
const perbaikan_entity_1 = require("../perbaikan/perbaikan.entity");
let ResultModule = class ResultModule {
};
exports.ResultModule = ResultModule;
exports.ResultModule = ResultModule = __decorate([
    (0, common_1.Module)({
        providers: [result_service_1.ResultService],
        controllers: [result_controller_1.ResultController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                bakat40_entity_1.Bakat40Entity,
                bakat6_entity_1.Bakat6Entity,
                bakat3_entity_1.Bakat3Entity,
                perbaikan_entity_1.PerbaikanEntity,
            ]),
        ],
    })
], ResultModule);
//# sourceMappingURL=result.module.js.map