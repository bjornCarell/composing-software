"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
var reduceArray_1 = require("../reduceArray/reduceArray");
var filter = function (fn, arr) { return reduceArray_1.reduceArrays(function (acc, curr) { return fn(curr) ?
    acc.concat([curr]) :
    acc; }, [], arr); };
exports.filter = filter;
