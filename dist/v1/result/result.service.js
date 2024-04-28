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
exports.ResultService = void 0;
const common_1 = require("@nestjs/common");
const bakat40Handler_1 = require("./handlers/bakat40Handler");
const bakat18Handler_1 = require("./handlers/bakat18Handler");
const bakat6Handler_1 = require("./handlers/bakat6Handler");
const bakat3Handler_1 = require("./handlers/bakat3Handler");
const introvertHandler_1 = require("./handlers/introvertHandler");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bakat40_entity_1 = require("../bakat40/bakat40.entity");
const kekuatanKelemahanHandler_1 = require("./handlers/kekuatanKelemahanHandler");
const bakat6_entity_1 = require("../bakat6/bakat6.entity");
const julukanHandler_1 = require("./handlers/julukanHandler");
const bakat3_entity_1 = require("../bakat3/bakat3.entity");
const kepribadianHandler_1 = require("./handlers/kepribadianHandler");
const bakatHandler_1 = require("./handlers/bakatHandler");
const gayaBelajarHandler_1 = require("./handlers/gayaBelajarHandler");
const bahasaHatiHandler_1 = require("./handlers/bahasaHatiHandler");
const potensiSifatTercelaHandler_1 = require("./handlers/potensiSifatTercelaHandler");
const perbaikan_entity_1 = require("../perbaikan/perbaikan.entity");
let ResultService = class ResultService {
    constructor(databaseBakat40, databaseBakat6, databaseBakat3, databasePerbaikan) {
        this.databaseBakat40 = databaseBakat40;
        this.databaseBakat6 = databaseBakat6;
        this.databaseBakat3 = databaseBakat3;
        this.databasePerbaikan = databasePerbaikan;
    }
    async getAssessmentResult(body) {
        const nama = body.nama;
        const ranks40 = (0, bakat40Handler_1.bakat40Handler)(body.skor40);
        const ranks18 = (0, bakat18Handler_1.bakat18Handler)(body.skor40);
        const ranks6 = (0, bakat6Handler_1.bakat6Handler)(body.skor40);
        const ranks3 = (0, bakat3Handler_1.bakat3Handler)(body.skor40);
        const introvertAverage = (0, introvertHandler_1.introvertAverageHandler)(body.skor40);
        const ekstrovertAverage = (0, introvertHandler_1.introvertAverageHandler)(body.skor40);
        const kekuatanDanKelemahan = await (0, kekuatanKelemahanHandler_1.kekuatanKelemahanHandler)(ranks40, this.databaseBakat40);
        const labelJulukan = await this.databaseBakat6.find({
            where: [{ id: ranks6[0] }, { id: ranks6[1] }],
            select: { id: true, label1: true, label2: true, arab: true, latin: true },
        });
        const julukan = (0, julukanHandler_1.julukanHandler)(ranks6, labelJulukan);
        const bakat3 = await this.databaseBakat3.find({
            select: {
                id: true,
                arab: true,
                arti: true,
                deskripsiGayaBelajar1: true,
                deskripsiBahasa: true,
                tempatBelajar: true,
                gayaBelajar_arab: true,
                gayaBelajar_arti: true,
                bahasaHati: true,
            },
        });
        const bakat3SortByRanks3 = [];
        ranks3.map((rank3) => {
            const data = bakat3[bakat3.findIndex((bkt) => bkt.id === ranks3[rank3 - 1])];
            bakat3SortByRanks3.push(data);
        });
        const bakat3_first = bakat3[bakat3.findIndex((b3) => b3.id === ranks3[0])];
        const kepribadianComponent = (0, kepribadianHandler_1.kepribadianHandler)(bakat3_first, ranks6[0], ranks18[0], nama, introvertAverage, ekstrovertAverage, labelJulukan, kekuatanDanKelemahan, julukan);
        const bakatComponent = (0, bakatHandler_1.bakatHandler)(nama, kekuatanDanKelemahan);
        const gayaBelajarComponent = (0, gayaBelajarHandler_1.gayaBelajarHandler)(nama, bakat3SortByRanks3);
        const bahasaHatiComponent = (0, bahasaHatiHandler_1.bahasaHatiHandler)(nama, bakat3SortByRanks3);
        const potensiSifatTercelaComponent = await (0, potensiSifatTercelaHandler_1.potensiSifatTercelaHandler)(nama, kekuatanDanKelemahan, this.databasePerbaikan);
        const bakat40 = await this.databaseBakat40.find({
            select: { id: true, arti: true, arab: true },
        });
        const bakat6Raw = await this.databaseBakat6.find({
            select: { id: true, arab: true, bakat40_id: true },
        });
        const bakat6 = [];
        bakat6Raw.map(({ id, arab, bakat40_id }, idx) => {
            const newUrutan = [];
            bakat40_id
                .replace('[', '')
                .replace(']', '')
                .replace(' ', '')
                .split(',')
                .map((data) => {
                newUrutan.push(Number(data));
            });
            bakat6.push({
                id,
                arab,
                bakat40_id: newUrutan,
            });
        });
        try {
            return {
                identitas: { nama },
                kepribadian: kepribadianComponent,
                kekuatanDanKelemahan,
                bakat: bakatComponent,
                gayaBelajar: gayaBelajarComponent,
                bahasaHati: bahasaHatiComponent,
                potensiSifatTercela: potensiSifatTercelaComponent,
                ranks40,
                ranks18,
                ranks6,
                ranks3,
                bakat6,
                bakat3,
                bakat40,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getDefaultResultStates() {
        const bakat40 = await this.databaseBakat40.find({
            select: { id: true, arti: true, arab: true },
        });
        const bakat6Raw = await this.databaseBakat6.find({
            select: { id: true, arab: true, bakat40_id: true },
        });
        const bakat3 = await this.databaseBakat3.find({
            select: { id: true, arab: true },
        });
        const bakat6 = [];
        bakat6Raw.map(({ id, arab, bakat40_id }, idx) => {
            const newUrutan = [];
            bakat40_id
                .replace('[', '')
                .replace(']', '')
                .replace(' ', '')
                .split(',')
                .map((data) => {
                newUrutan.push(Number(data));
            });
            bakat6.push({
                id,
                arab,
                bakat40_id: newUrutan,
            });
        });
        return { bakat6, bakat3, bakat40 };
    }
};
exports.ResultService = ResultService;
exports.ResultService = ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bakat40_entity_1.Bakat40Entity)),
    __param(1, (0, typeorm_1.InjectRepository)(bakat6_entity_1.Bakat6Entity)),
    __param(2, (0, typeorm_1.InjectRepository)(bakat3_entity_1.Bakat3Entity)),
    __param(3, (0, typeorm_1.InjectRepository)(perbaikan_entity_1.PerbaikanEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ResultService);
//# sourceMappingURL=result.service.js.map