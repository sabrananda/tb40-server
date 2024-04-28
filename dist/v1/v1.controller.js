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
exports.V1Controller = void 0;
const common_1 = require("@nestjs/common");
const v1_service_1 = require("./v1.service");
let V1Controller = class V1Controller {
    constructor(v1Service) {
        this.v1Service = v1Service;
    }
    getResult() {
        return this.v1Service.getV1();
    }
};
exports.V1Controller = V1Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], V1Controller.prototype, "getResult", null);
exports.V1Controller = V1Controller = __decorate([
    (0, common_1.Controller)('v1'),
    __metadata("design:paramtypes", [v1_service_1.V1Service])
], V1Controller);
//# sourceMappingURL=v1.controller.js.map