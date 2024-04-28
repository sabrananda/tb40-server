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
exports.Bakat6Entity = void 0;
const typeorm_1 = require("typeorm");
const bakat40_entity_1 = require("../bakat40/bakat40.entity");
let Bakat6Entity = class Bakat6Entity extends typeorm_1.BaseEntity {
};
exports.Bakat6Entity = Bakat6Entity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bakat6Entity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "arab", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "latin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "arti", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "label1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "berlebihan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "label2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "definisi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat6Entity.prototype, "bakat40_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bakat40_entity_1.Bakat40Entity, (bakat40) => bakat40.bakat6, {
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Bakat6Entity.prototype, "bakat40", void 0);
exports.Bakat6Entity = Bakat6Entity = __decorate([
    (0, typeorm_1.Entity)()
], Bakat6Entity);
//# sourceMappingURL=bakat6.entity.js.map