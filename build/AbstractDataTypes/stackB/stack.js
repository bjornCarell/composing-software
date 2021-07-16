"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pop = exports.push = exports.stackB = void 0;
var stackB = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return __spreadArrays(elements);
};
exports.stackB = stackB;
var push = function (a, stack) { return stack.concat([a]); };
exports.push = push;
var pop = function (stack) {
    var newStack = stack.slice(0);
    var item = newStack.pop();
    return [item, newStack];
};
exports.pop = pop;
