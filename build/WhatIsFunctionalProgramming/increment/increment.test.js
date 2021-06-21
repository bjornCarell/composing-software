"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var increment_1 = require("./increment");
describe('pure inc function', function () {
    it('increments the val property of an object with one', function () {
        var initalState = {
            val: 1,
        };
        var expected = {
            val: 2,
        };
        var actual = increment_1.inc(initalState);
        expect(actual).toEqual(expected);
    });
});
