"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakat6Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bakat6_controller_1 = require("./bakat6.controller");
const bakat6_entity_1 = require("./bakat6.entity");
const bakat6_service_1 = require("./bakat6.service");
let Bakat6Module = class Bakat6Module {
};
exports.Bakat6Module = Bakat6Module;
exports.Bakat6Module = Bakat6Module = __decorate([
    (0, common_1.Module)({
        controllers: [bakat6_controller_1.Bakat6Controller],
        providers: [bakat6_service_1.Bakat6Service],
        imports: [typeorm_1.TypeOrmModule.forFeature([bakat6_entity_1.Bakat6Entity])],
    })
], Bakat6Module);
//# sourceMappingURL=bakat6.module.js.map