"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introvertAverageHandler = void 0;
const ekstrovertIdArray = [
    35, 9, 22, 24, 7, 27, 19, 36, 38, 1, 39, 23, 5, 30, 21, 29, 17, 20, 31, 2, 3,
    12, 32,
];
function introvertAverageHandler(bakat40Skor) {
    let skorAvg = 0;
    ekstrovertIdArray.forEach((id) => {
        skorAvg += bakat40Skor[id - 1].skor;
    });
    skorAvg = skorAvg / ekstrovertIdArray.length;
    return skorAvg;
}
exports.introvertAverageHandler = introvertAverageHandler;
//# sourceMappingURL=ekstrovertHandler.js.map