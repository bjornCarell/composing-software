"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pair = void 0;
var objs_1 = require("../../objs");
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
var pair = function (x, y) { return [y, x]; };
exports.pair = pair;
var l = objs_1.objs.reduceRight(exports.pair, []);
console.log('linked l aggregation', l, "enumerable keys: " + Object.keys(l));
