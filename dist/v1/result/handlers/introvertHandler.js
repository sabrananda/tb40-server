"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introvertAverageHandler = void 0;
const introvertIdArray = [
    13, 16, 18, 40, 4, 25, 8, 26, 14, 6, 11, 34, 15, 33, 10, 28, 37,
];
function introvertAverageHandler(bakat40Skor) {
    let skorAvg = 0;
    introvertIdArray.forEach((id) => {
        skorAvg += bakat40Skor[id - 1].skor;
    });
    skorAvg = skorAvg / introvertIdArray.length;
    return skorAvg;
}
exports.introvertAverageHandler = introvertAverageHandler;
//# sourceMappingURL=introvertHandler.js.map