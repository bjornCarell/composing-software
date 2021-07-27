"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curriedMap = void 0;
var ramda_1 = require("ramda");
exports.curriedMap = ramda_1.curry(function (fn, mappable) { return mappable.map(fn); });
