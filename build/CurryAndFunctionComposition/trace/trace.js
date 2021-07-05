"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trace = void 0;
var trace = function (label) { return function (value) {
    console.log(label + " : " + value);
    return value;
}; };
exports.trace = trace;
