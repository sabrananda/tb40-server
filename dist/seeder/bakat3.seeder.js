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
exports.Bakat3Seeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bakat3_entity_1 = require("../v1/bakat3/bakat3.entity");
const bakat3Array_1 = require("./bakat3Array");
let Bakat3Seeder = class Bakat3Seeder {
    constructor(database) {
        this.database = database;
    }
    async seed() {
        try {
            const data = await this.database.insert(bakat3Array_1.bakat3Array);
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
exports.Bakat3Seeder = Bakat3Seeder;
exports.Bakat3Seeder = Bakat3Seeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bakat3_entity_1.Bakat3Entity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], Bakat3Seeder);
//# sourceMappingURL=bakat3.seeder.js.map