"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakat3Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bakat3_controller_1 = require("./bakat3.controller");
const bakat3_entity_1 = require("./bakat3.entity");
const bakat3_service_1 = require("./bakat3.service");
let Bakat3Module = class Bakat3Module {
};
exports.Bakat3Module = Bakat3Module;
exports.Bakat3Module = Bakat3Module = __decorate([
    (0, common_1.Module)({
        controllers: [bakat3_controller_1.Bakat3Controller],
        providers: [bakat3_service_1.Bakat3Service],
        imports: [typeorm_1.TypeOrmModule.forFeature([bakat3_entity_1.Bakat3Entity])],
    })
], Bakat3Module);
//# sourceMappingURL=bakat3.module.js.map