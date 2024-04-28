"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.julukanHandler = void 0;
function julukanHandler(ranks6, labelJulukan) {
    const julukan = {
        julukan1: '',
        julukan2: '',
    };
    julukan.julukan1 =
        labelJulukan[labelJulukan.findIndex((lbl) => lbl.id === ranks6[0])].label1;
    julukan.julukan2 =
        labelJulukan[labelJulukan.findIndex((lbl) => lbl.id === ranks6[1])].label2;
    return julukan;
}
exports.julukanHandler = julukanHandler;
//# sourceMappingURL=julukanHandler.js.map