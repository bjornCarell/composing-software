"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
var objs_1 = require("../../objs");
var collection = function (toAggr, e) { return toAggr.concat([e]); };
exports.collection = collection;
var a = objs_1.objs.reduce(exports.collection, []);
console.log('collection aggregation', a, a[1].b, a[2].c, "enumerable keys: " + Object.keys(a));
// collection aggregation [ { a: 'a', b: 'ab' }, { b: 'b' }, { c: 'c', b: 'cb' } ] b c enumerable keys: 0,1,2
