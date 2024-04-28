"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bakat40Handler = void 0;
function bakat40Handler(bakat40Skor) {
    const ranks40 = [];
    bakat40Skor.sort(function (a, b) {
        return b.skor - a.skor;
    });
    bakat40Skor.map((skr) => {
        ranks40.push(skr.id);
    });
    return ranks40;
}
exports.bakat40Handler = bakat40Handler;
//# sourceMappingURL=bakat40Handler.js.map