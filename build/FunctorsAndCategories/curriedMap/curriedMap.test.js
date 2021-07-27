"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curriedMap_1 = require("./curriedMap");
var double = function (x) { return x * 2; };
var log = function (x) { return x; };
describe('curriedMap function', function () {
    it('should take a generic map with any functor', function () {
        var mdouble = curriedMap_1.curriedMap(double);
        var actual = mdouble([4]).map(log);
        var expected = [8];
        expect(actual).toEqual(expected);
    });
});
