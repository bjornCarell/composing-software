"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegate = void 0;
var objs_1 = require("../../objs");
var delegate = function (a, b) { return Object.assign(Object.create(a), b); };
exports.delegate = delegate;
var d = objs_1.objs.reduceRight(exports.delegate, {});
console.log('delegation', d, "enumerable keys: " + Object.keys(d));
