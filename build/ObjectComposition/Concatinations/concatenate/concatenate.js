"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenate = void 0;
var objs_1 = require("../../objs");
var concatenate = function (a, b) { return (__assign(__assign({}, a), b)); };
exports.concatenate = concatenate;
var c = objs_1.objs.reduce(exports.concatenate, {});
console.log('concatenation', c, "enumerable keys: " + Object.keys(c));
