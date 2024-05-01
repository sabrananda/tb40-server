import { BadRequestException, Injectable } from '@nestjs/common';
import { bakat40Handler } from './handlers/bakat40Handler';
import { Julukan, LabelJulukan, PostAssesmentDTO } from './result.dto';
import { bakat18Handler } from './handlers/bakat18Handler';
import { bakat6Handler } from './handlers/bakat6Handler';
import { bakat3Handler } from './handlers/bakat3Handler';
import { introvertAverageHandler } from './handlers/introvertHandler';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bakat40Entity } from '../bakat40/bakat40.entity';
import { kekuatanKelemahanHandler } from './handlers/kekuatanKelemahanHandler';
import { Bakat6Entity } from '../bakat6/bakat6.entity';
import { julukanHandler } from './handlers/julukanHandler';
import { Bakat3Entity } from '../bakat3/bakat3.entity';
import { kepribadianHandler } from './handlers/kepribadianHandler';
import { bakatHandler } from './handlers/bakatHandler';
import { gayaBelajarHandler } from './handlers/gayaBelajarHandler';
import { bahasaHatiHandler } from './handlers/bahasaHatiHandler';
import { potensiSifatTercelaHandler } from './handlers/potensiSifatTercelaHandler';
import { PerbaikanEntity } from '../perbaikan/perbaikan.entity';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Bakat40Entity)
    private databaseBakat40: Repository<Bakat40Entity>,
    @InjectRepository(Bakat6Entity)
    private databaseBakat6: Repository<Bakat6Entity>,
    @InjectRepository(Bakat3Entity)
    private databaseBakat3: Repository<Bakat3Entity>,
    @InjectRepository(PerbaikanEntity)
    private databasePerbaikan: Repository<PerbaikanEntity>,
  ) {}

  async getAssessmentResult(body: PostAssesmentDTO): Promise<any> {
    const nama = body.nama;
    try {
      // const nama = body.nama.charAt(0).toUpperCase() + body.nama.slice(1);
      const ranks40 = bakat40Handler(body.skor40);
      const ranks18 = bakat18Handler(body.skor40);
      const ranks6 = bakat6Handler(body.skor40);
      const ranks3 = bakat3Handler(body.skor40);
      const introvertAverage = introvertAverageHandler(body.skor40);
      const ekstrovertAverage = introvertAverageHandler(body.skor40);
      const kekuatanDanKelemahan = await kekuatanKelemahanHandler(
        ranks40,
        this.databaseBakat40,
      );

      const labelJulukan: LabelJulukan[] = await this.databaseBakat6.find({
        where: [{ id: ranks6[0] }, { id: ranks6[1] }],
        select: {
          id: true,
          label1: true,
          label2: true,
          arab: true,
          latin: true,
        },
      });
      const julukan: Julukan = julukanHandler(ranks6, labelJulukan);
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
      bakat3.sort((a, b) => a.id - b.id);
      const bakat3SortByRanks3: {
        deskripsiBahasa: string;
        id: number;
        arab: string;
        arti: string;
        deskripsiGayaBelajar1: string;
        tempatBelajar: string;
        gayaBelajar_arab: string;
        gayaBelajar_arti: string;
        bahasaHati: string;
      }[] = [];
      ranks3.map((rank3) => {
        const data =
          bakat3[bakat3.findIndex((bkt) => bkt.id === ranks3[rank3 - 1])];
        bakat3SortByRanks3.push(data);
      });
      const bakat3_first =
        bakat3[bakat3.findIndex((b3) => b3.id === ranks3[0])];
      const kepribadianComponent = kepribadianHandler(
        bakat3_first,
        ranks6[0],
        ranks18[0],
        nama,
        introvertAverage,
        ekstrovertAverage,
        labelJulukan,
        kekuatanDanKelemahan,
        julukan,
      );
      const bakatComponent = bakatHandler(nama, kekuatanDanKelemahan);
      const gayaBelajarComponent = gayaBelajarHandler(nama, bakat3SortByRanks3);
      const bahasaHatiComponent = bahasaHatiHandler(nama, bakat3SortByRanks3);
      const potensiSifatTercelaComponent = await potensiSifatTercelaHandler(
        nama,
        kekuatanDanKelemahan,
        this.databasePerbaikan,
      );
      const bakat40: { id: number; arti: string; arab: string }[] =
        await this.databaseBakat40.find({
          select: { id: true, arti: true, arab: true },
        });
      bakat40.sort((a, b) => a.id - b.id);
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
        bakat6.sort((a, b) => a.id - b.id);
      });
      // console.log(kekuatanDanKelemahan);
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
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async getDefaultResultStates(): Promise<any> {
    const bakat40: { id: number; arti: string; arab: string }[] =
      await this.databaseBakat40.find({
        select: { id: true, arti: true, arab: true },
      });
    bakat40.sort((a, b) => a.id - b.id);
    const bakat6Raw = await this.databaseBakat6.find({
      select: { id: true, arab: true, bakat40_id: true },
    });
    const bakat3 = await this.databaseBakat3.find({
      select: { id: true, arab: true },
    });
    bakat3.sort((a, b) => a.id - b.id);
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
    bakat6.sort((a, b) => a.id - b.id);
    return {
      bakat6,
      bakat3,
      bakat40,
    };
  }
}
