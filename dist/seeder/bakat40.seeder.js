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
exports.Bakat40Seeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bakat40_entity_1 = require("../v1/bakat40/bakat40.entity");
const bakat40Array_1 = require("./bakat40Array");
let Bakat40Seeder = class Bakat40Seeder {
    constructor(database) {
        this.database = database;
    }
    async seed() {
        try {
            const data = await this.database.insert(bakat40Array_1.bakat40Array);
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
exports.Bakat40Seeder = Bakat40Seeder;
exports.Bakat40Seeder = Bakat40Seeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bakat40_entity_1.Bakat40Entity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], Bakat40Seeder);
//# sourceMappingURL=bakat40.seeder.js.map