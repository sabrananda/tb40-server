import { Bakat40Entity } from 'src/v1/bakat40/bakat40.entity';
import { Repository } from 'typeorm';

export async function kekuatanKelemahanHandler(
  ranks40: number[],
  databaseBakat40: Repository<Bakat40Entity>,
) {
  const whereStatement: WhereStatement[] = [];
  for (let i = 0; i < 6; i++) {
    whereStatement.push({ id: ranks40[i] });
  }
  for (let i = 39; i > 33; i--) {
    whereStatement.push({ id: ranks40[i] });
  }
  const bakatUnsort: Bakat40Entity[] = await databaseBakat40.find({
    select: {
      id: true,
      label: true,
      arab: true,
      definisi: true,
      profesi: true,
      jurusan: true,
      latin: true,
      arti: true,
      berlebihan_arab: true,
      berlebihan_deskripsi: true,
      berlebihan_tulisan: true,
      berlebihan_perbaikan: true,
      lalai_tulisan: true,
      lalai_deskripsi: true,
      lalai_perbaikan: true,
      //   perbaikan: { id: true, perbaikan: true },
    },
    // relations: { perbaikan: { bakat40: true, bakat40_perbaikan: true } },
    where: whereStatement,
  });
  const bakatKekuatan: Bakat40Entity[] = [];
  const bakatKelemahan: Bakat40Entity[] = [];
  for (let i = 0; i < 6; i++) {
    const idx = bakatUnsort.findIndex((value) => value.id == ranks40[i]);
    bakatKekuatan.push(bakatUnsort[idx]);
  }
  for (let i = 39; i > 33; i--) {
    const idx = bakatUnsort.findIndex((value) => value.id == ranks40[i]);
    bakatKelemahan.push(bakatUnsort[idx]);
  }
  const kuatLemah = {
    bakatKekuatan,
    bakatKelemahan,
  };
  return kuatLemah;
}
interface WhereStatement {
  id: number;
}
