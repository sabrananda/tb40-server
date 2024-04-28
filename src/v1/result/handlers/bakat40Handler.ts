import { Skor40DTO } from '../result.dto';

export function bakat40Handler(bakat40Skor: Skor40DTO[]) {
  const ranks40: number[] = [];
  bakat40Skor.sort(function (a, b) {
    return b.skor - a.skor;
  });
  bakat40Skor.map((skr) => {
    ranks40.push(skr.id);
  });
  return ranks40;
}
