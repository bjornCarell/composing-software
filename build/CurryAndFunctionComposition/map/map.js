"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var map = function (fn) {
    return function (data) { return data.map(fn); };
};
exports.map = map;
