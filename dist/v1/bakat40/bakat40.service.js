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
exports.Bakat40Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bakat40_entity_1 = require("./bakat40.entity");
let Bakat40Service = class Bakat40Service {
    constructor(database) {
        this.database = database;
    }
    async getBakat40() {
        return await this.database
            .createQueryBuilder('bakat40')
            .leftJoinAndSelect('bakat40.perbaikan', 'perbaikan')
            .addOrderBy('bakat40.id', 'ASC')
            .leftJoinAndSelect('perbaikan.bakat40_perbaikan', 'bakat40_perbaikan')
            .select([
            'bakat40',
            'perbaikan.id',
            'perbaikan.perbaikan',
            'bakat40_perbaikan.id',
            'bakat40_perbaikan.arab',
            'bakat40_perbaikan.latin',
        ])
            .addOrderBy('perbaikan.id', 'ASC')
            .getMany();
    }
    async getPernyataan() {
        return await this.database.find({
            select: {
                id: true,
                pernyataan: true,
            },
        });
    }
};
exports.Bakat40Service = Bakat40Service;
exports.Bakat40Service = Bakat40Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bakat40_entity_1.Bakat40Entity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Bakat40Service);
//# sourceMappingURL=bakat40.service.js.map