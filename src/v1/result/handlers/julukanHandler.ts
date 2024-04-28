import { Julukan, LabelJulukan } from '../result.dto';

export function julukanHandler(
  ranks6: number[],
  labelJulukan: LabelJulukan[],
): Julukan {
  const julukan = {
    julukan1: '',
    julukan2: '',
  };

  julukan.julukan1 =
    labelJulukan[labelJulukan.findIndex((lbl) => lbl.id === ranks6[0])].label1;
  julukan.julukan2 =
    labelJulukan[labelJulukan.findIndex((lbl) => lbl.id === ranks6[1])].label2;

  // console.log(julukan);
  return julukan;
}
