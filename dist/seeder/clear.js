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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearTruncate = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bakat40_entity_1 = require("../v1/bakat40/bakat40.entity");
const bakat18_entity_1 = require("../v1/bakat18/bakat18.entity");
const bakat6_entity_1 = require("../v1/bakat6/bakat6.entity");
const bakat3_entity_1 = require("../v1/bakat3/bakat3.entity");
const perbaikan_entity_1 = require("../v1/perbaikan/perbaikan.entity");
let ClearTruncate = class ClearTruncate {
    constructor(database_bakat40, database_bakat18, database_bakat6, database_bakat3, database_perbaikan) {
        this.database_bakat40 = database_bakat40;
        this.database_bakat18 = database_bakat18;
        this.database_bakat6 = database_bakat6;
        this.database_bakat3 = database_bakat3;
        this.database_perbaikan = database_perbaikan;
    }
    async seed() {
        return;
    }
    async drop() {
        try {
            await this.database_bakat18.clear();
            await this.database_bakat3.clear();
            await this.database_perbaikan.clear();
            await this.database_bakat40.clear();
            await this.database_bakat6.clear();
        }
        catch (error) {
            console.log(error);
        }
        return;
    }
};
exports.ClearTruncate = ClearTruncate;
exports.ClearTruncate = ClearTruncate = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bakat40_entity_1.Bakat40Entity)),
    __param(1, (0, typeorm_2.InjectRepository)(bakat18_entity_1.Bakat18Entity)),
    __param(2, (0, typeorm_2.InjectRepository)(bakat6_entity_1.Bakat6Entity)),
    __param(3, (0, typeorm_2.InjectRepository)(bakat3_entity_1.Bakat3Entity)),
    __param(4, (0, typeorm_2.InjectRepository)(perbaikan_entity_1.PerbaikanEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ClearTruncate);
//# sourceMappingURL=clear.js.map