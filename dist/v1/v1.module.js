"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Module = void 0;
const common_1 = require("@nestjs/common");
const v1_service_1 = require("./v1.service");
const v1_controller_1 = require("./v1.controller");
const result_module_1 = require("./result/result.module");
const bakat40_module_1 = require("./bakat40/bakat40.module");
const perbaikan_module_1 = require("./perbaikan/perbaikan.module");
const bakat6_module_1 = require("./bakat6/bakat6.module");
const bakat3_module_1 = require("./bakat3/bakat3.module");
const bakat18_module_1 = require("./bakat18/bakat18.module");
let V1Module = class V1Module {
};
exports.V1Module = V1Module;
exports.V1Module = V1Module = __decorate([
    (0, common_1.Module)({
        imports: [
            result_module_1.ResultModule,
            perbaikan_module_1.PerbaikanModule,
            bakat6_module_1.Bakat6Module,
            bakat3_module_1.Bakat3Module,
            bakat18_module_1.Bakat18Module,
            bakat40_module_1.Bakat40Module,
        ],
        providers: [v1_service_1.V1Service],
        controllers: [v1_controller_1.V1Controller],
    })
], V1Module);
//# sourceMappingURL=v1.module.js.map