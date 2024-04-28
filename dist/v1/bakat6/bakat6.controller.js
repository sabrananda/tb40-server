"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bakat6Controller = void 0;
const common_1 = require("@nestjs/common");
const bakat6_service_1 = require("./bakat6.service");
let Bakat6Controller = class Bakat6Controller {
    constructor(bakat6Service) {
        this.bakat6Service = bakat6Service;
    }
    getBakat6() {
        return this.bakat6Service.getBakat6();
    }
};
exports.Bakat6Controller = Bakat6Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Bakat6Controller.prototype, "getBakat6", null);
exports.Bakat6Controller = Bakat6Controller = __decorate([
    (0, common_1.Controller)('v1/bakat6'),
    __metadata("design:paramtypes", [bakat6_service_1.Bakat6Service])
], Bakat6Controller);
//# sourceMappingURL=bakat6.controller.js.map