"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bakat6Handler = void 0;
function bakat6Handler(bakat40Skor) {
    const bakat6 = [
        { id: 1, average: 0 },
        { id: 2, average: 0 },
        { id: 3, average: 0 },
        { id: 4, average: 0 },
        { id: 5, average: 0 },
        { id: 6, average: 0 },
    ];
    bakat6[1 - 1].average =
        (bakat40Skor[13 - 1].skor +
            bakat40Skor[16 - 1].skor +
            bakat40Skor[18 - 1].skor +
            bakat40Skor[40 - 1].skor +
            bakat40Skor[4 - 1].skor +
            bakat40Skor[25 - 1].skor) /
            6;
    bakat6[2 - 1].average =
        (bakat40Skor[8 - 1].skor +
            bakat40Skor[26 - 1].skor +
            bakat40Skor[14 - 1].skor +
            bakat40Skor[6 - 1].skor +
            bakat40Skor[11 - 1].skor) /
            5;
    bakat6[3 - 1].average =
        (bakat40Skor[34 - 1].skor +
            bakat40Skor[15 - 1].skor +
            bakat40Skor[33 - 1].skor +
            bakat40Skor[10 - 1].skor +
            bakat40Skor[28 - 1].skor +
            bakat40Skor[37 - 1].skor) /
            6;
    bakat6[4 - 1].average =
        (bakat40Skor[35 - 1].skor +
            bakat40Skor[9 - 1].skor +
            bakat40Skor[22 - 1].skor +
            bakat40Skor[24 - 1].skor +
            bakat40Skor[7 - 1].skor +
            bakat40Skor[27 - 1].skor +
            bakat40Skor[19 - 1].skor) /
            7;
    bakat6[5 - 1].average =
        (bakat40Skor[36 - 1].skor +
            bakat40Skor[38 - 1].skor +
            bakat40Skor[1 - 1].skor +
            bakat40Skor[39 - 1].skor +
            bakat40Skor[23 - 1].skor +
            bakat40Skor[5 - 1].skor +
            bakat40Skor[30 - 1].skor +
            bakat40Skor[21 - 1].skor) /
            8;
    bakat6[6 - 1].average =
        (bakat40Skor[29 - 1].skor +
            bakat40Skor[17 - 1].skor +
            bakat40Skor[20 - 1].skor +
            bakat40Skor[31 - 1].skor +
            bakat40Skor[2 - 1].skor +
            bakat40Skor[3 - 1].skor +
            bakat40Skor[12 - 1].skor +
            bakat40Skor[32 - 1].skor) /
            8;
    bakat6.sort(function (a, b) {
        return b.average - a.average;
    });
    const ranks6 = [];
    bakat6.map((avg) => {
        ranks6.push(avg.id);
    });
    return ranks6;
}
exports.bakat6Handler = bakat6Handler;
//# sourceMappingURL=bakat6Handler.js.map