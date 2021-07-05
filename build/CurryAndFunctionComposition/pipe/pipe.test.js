"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipe_1 = require("./pipe");
var trace_1 = require("../trace/trace");
describe('pipe function', function () {
    it('should be able to take arbitary number of functions as parameters', function () {
        var g = function (n) { return n + 1; };
        var f = function (n) { return n * 2; };
        var h = pipe_1.pipe(g, trace_1.trace('after g'), f, trace_1.trace('after f'));
        var expected = 42;
        var actual = h(20);
        expect(actual).toEqual(expected);
    });
});
