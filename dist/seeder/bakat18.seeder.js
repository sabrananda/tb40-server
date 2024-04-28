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
exports.Bakat18Seeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bakat18_entity_1 = require("../v1/bakat18/bakat18.entity");
const bakat18Array_1 = require("./bakat18Array");
let Bakat18Seeder = class Bakat18Seeder {
    constructor(database) {
        this.database = database;
    }
    async seed() {
        try {
            const data = await this.database.insert(bakat18Array_1.bakat18Array);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async drop() {
        return;
    }
};
exports.Bakat18Seeder = Bakat18Seeder;
exports.Bakat18Seeder = Bakat18Seeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bakat18_entity_1.Bakat18Entity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], Bakat18Seeder);
//# sourceMappingURL=bakat18.seeder.js.map