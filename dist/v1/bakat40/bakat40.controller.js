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
exports.Bakat40Controller = void 0;
const common_1 = require("@nestjs/common");
const bakat40_service_1 = require("./bakat40.service");
let Bakat40Controller = class Bakat40Controller {
    constructor(bakat40Service) {
        this.bakat40Service = bakat40Service;
    }
    getResult() {
        return this.bakat40Service.getBakat40();
    }
    getPernyataan() {
        return this.bakat40Service.getPernyataan();
    }
};
exports.Bakat40Controller = Bakat40Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Bakat40Controller.prototype, "getResult", null);
__decorate([
    (0, common_1.Get)('/pernyataan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Bakat40Controller.prototype, "getPernyataan", null);
exports.Bakat40Controller = Bakat40Controller = __decorate([
    (0, common_1.Controller)('v1/bakat40'),
    __metadata("design:paramtypes", [bakat40_service_1.Bakat40Service])
], Bakat40Controller);
//# sourceMappingURL=bakat40.controller.js.map