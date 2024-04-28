"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakat18Module = void 0;
const common_1 = require("@nestjs/common");
const bakat18_controller_1 = require("./bakat18.controller");
const bakat18_service_1 = require("./bakat18.service");
let Bakat18Module = class Bakat18Module {
};
exports.Bakat18Module = Bakat18Module;
exports.Bakat18Module = Bakat18Module = __decorate([
    (0, common_1.Module)({
        controllers: [bakat18_controller_1.Bakat18Controller],
        providers: [bakat18_service_1.Bakat18Service],
    })
], Bakat18Module);
//# sourceMappingURL=bakat18.module.js.map