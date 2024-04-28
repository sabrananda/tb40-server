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
exports.Bakat40Entity = void 0;
const typeorm_1 = require("typeorm");
const bakat6_entity_1 = require("../bakat6/bakat6.entity");
const perbaikan_entity_1 = require("../perbaikan/perbaikan.entity");
let Bakat40Entity = class Bakat40Entity extends typeorm_1.BaseEntity {
};
exports.Bakat40Entity = Bakat40Entity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bakat40Entity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "arab", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "latin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "arti", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "definisi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "profesi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "jurusan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "lalai_arab", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "lalai_tulisan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "lalai_deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "lalai_perbaikan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "berlebihan_arab", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "berlebihan_tulisan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "berlebihan_deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "berlebihan_perbaikan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bakat40Entity.prototype, "pernyataan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => perbaikan_entity_1.PerbaikanEntity, (perbaikan) => perbaikan.bakat40, {
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Bakat40Entity.prototype, "perbaikan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bakat6_entity_1.Bakat6Entity, (bakat6) => bakat6.id, { nullable: true }),
    __metadata("design:type", bakat6_entity_1.Bakat6Entity)
], Bakat40Entity.prototype, "bakat6", void 0);
exports.Bakat40Entity = Bakat40Entity = __decorate([
    (0, typeorm_1.Entity)()
], Bakat40Entity);
//# sourceMappingURL=bakat40.entity.js.map