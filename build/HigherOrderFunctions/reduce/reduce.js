"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
var reduce = function (reducer, initial, arr) {
    var acc = initial;
    for (var i = 0, length = arr.length; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};
exports.reduce = reduce;
