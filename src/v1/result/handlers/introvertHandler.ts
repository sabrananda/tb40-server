import { Skor40DTO } from '../result.dto';

const introvertIdArray: number[] = [
  13, 16, 18, 40, 4, 25, 8, 26, 14, 6, 11, 34, 15, 33, 10, 28, 37,
];

export function introvertAverageHandler(bakat40Skor: Skor40DTO[]) {
  let skorAvg: number = 0;
  introvertIdArray.forEach((id) => {
    skorAvg += bakat40Skor[id - 1].skor;
  });
  skorAvg = skorAvg / introvertIdArray.length;
  return skorAvg;
}
