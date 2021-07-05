"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
describe('simple reduce', function () {
    it('should reduce an array of numbers to their sum', function () {
        var expected = 6;
        var actual = reduce_1.reduce(function (acc, curr) { return acc + curr; }, 0, [1, 2, 3]);
        expect(actual).toEqual(expected);
    });
    it('should reduce an array of characters to a string', function () {
        var expected = 'hej';
        var actual = reduce_1.reduce(function (acc, curr) { return acc + curr; }, '', ['h', 'e', 'j']);
        expect(actual).toEqual(expected);
    });
});
