"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Service = void 0;
const common_1 = require("@nestjs/common");
let V1Service = class V1Service {
    getV1() {
        console.log('tes');
        return 'here api version 1';
    }
};
exports.V1Service = V1Service;
exports.V1Service = V1Service = __decorate([
    (0, common_1.Injectable)()
], V1Service);
//# sourceMappingURL=v1.service.js.map