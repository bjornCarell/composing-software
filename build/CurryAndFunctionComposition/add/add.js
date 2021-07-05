"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (a) { return function (b) { return a + b; }; };
exports.add = add;
var result = exports.add(2)(3);
