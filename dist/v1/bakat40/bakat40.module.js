"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakat40Module = void 0;
const common_1 = require("@nestjs/common");
const bakat40_service_1 = require("./bakat40.service");
const bakat40_controller_1 = require("./bakat40.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bakat40_entity_1 = require("./bakat40.entity");
let Bakat40Module = class Bakat40Module {
};
exports.Bakat40Module = Bakat40Module;
exports.Bakat40Module = Bakat40Module = __decorate([
    (0, common_1.Module)({
        providers: [bakat40_service_1.Bakat40Service],
        controllers: [bakat40_controller_1.Bakat40Controller],
        imports: [typeorm_1.TypeOrmModule.forFeature([bakat40_entity_1.Bakat40Entity])],
    })
], Bakat40Module);
//# sourceMappingURL=bakat40.module.js.map