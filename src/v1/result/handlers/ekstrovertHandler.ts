import { Skor40DTO } from '../result.dto';

const ekstrovertIdArray: number[] = [
  35, 9, 22, 24, 7, 27, 19, 36, 38, 1, 39, 23, 5, 30, 21, 29, 17, 20, 31, 2, 3,
  12, 32,
];

export function introvertAverageHandler(bakat40Skor: Skor40DTO[]) {
  let skorAvg: number = 0;
  ekstrovertIdArray.forEach((id) => {
    skorAvg += bakat40Skor[id - 1].skor;
  });
  skorAvg = skorAvg / ekstrovertIdArray.length;
  return skorAvg;
}
