"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) {
        return fns.reduce(function (y, f) { return f(y); }, x);
    };
};
exports.pipe = pipe;
// Make use of generic type T to avoid using (...fns: Function[])
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function
