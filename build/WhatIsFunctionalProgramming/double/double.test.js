"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var double_1 = require("./double");
describe('pure double function', function () {
    it('doubles the val poperty of an object', function () {
        var initalState = {
            val: 2,
        };
        var expected = {
            val: 4,
        };
        var actual = double_1.double(initalState);
        expect(actual).toEqual(expected);
    });
});
