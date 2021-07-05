"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) {
        return fns.reduceRight(function (y, f) { return f(y); }, x);
    };
};
exports.compose = compose;
// https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
// https://2ality.com/2018/04/type-notation-typescript.html#rest-parameters
