"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bakat3Handler = void 0;
function bakat3Handler(bakat40Skor) {
    const bakat3 = [
        { id: 1, average: 0 },
        { id: 2, average: 0 },
        { id: 3, average: 0 },
    ];
    bakat3[1 - 1].average =
        (bakat40Skor[13 - 1].skor +
            bakat40Skor[16 - 1].skor +
            bakat40Skor[18 - 1].skor +
            bakat40Skor[40 - 1].skor +
            bakat40Skor[4 - 1].skor +
            bakat40Skor[25 - 1].skor +
            bakat40Skor[35 - 1].skor +
            bakat40Skor[9 - 1].skor +
            bakat40Skor[22 - 1].skor +
            bakat40Skor[24 - 1].skor +
            bakat40Skor[7 - 1].skor +
            bakat40Skor[27 - 1].skor +
            bakat40Skor[19 - 1].skor) /
            13;
    bakat3[2 - 1].average =
        (bakat40Skor[8 - 1].skor +
            bakat40Skor[26 - 1].skor +
            bakat40Skor[14 - 1].skor +
            bakat40Skor[6 - 1].skor +
            bakat40Skor[11 - 1].skor +
            bakat40Skor[36 - 1].skor +
            bakat40Skor[38 - 1].skor +
            bakat40Skor[1 - 1].skor +
            bakat40Skor[39 - 1].skor +
            bakat40Skor[23 - 1].skor +
            bakat40Skor[5 - 1].skor +
            bakat40Skor[30 - 1].skor +
            bakat40Skor[21 - 1].skor) /
            13;
    bakat3[3 - 1].average =
        (bakat40Skor[34 - 1].skor +
            bakat40Skor[15 - 1].skor +
            bakat40Skor[33 - 1].skor +
            bakat40Skor[10 - 1].skor +
            bakat40Skor[28 - 1].skor +
            bakat40Skor[37 - 1].skor +
            bakat40Skor[29 - 1].skor +
            bakat40Skor[17 - 1].skor +
            bakat40Skor[20 - 1].skor +
            bakat40Skor[31 - 1].skor +
            bakat40Skor[2 - 1].skor +
            bakat40Skor[3 - 1].skor +
            bakat40Skor[12 - 1].skor +
            bakat40Skor[32 - 1].skor) /
            14;
    bakat3.sort(function (a, b) {
        return b.average - a.average;
    });
    const ranks3 = [];
    bakat3.map((avg) => {
        ranks3.push(avg.id);
    });
    return ranks3;
}
exports.bakat3Handler = bakat3Handler;
//# sourceMappingURL=bakat3Handler.js.map