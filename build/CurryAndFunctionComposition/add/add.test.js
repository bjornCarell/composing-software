"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("./add");
describe('add curried function', function () {
    it('should add two numbers and return the sum', function () {
        var expected = 5;
        var actual = add_1.add(2)(3);
        expect(actual).toEqual(expected);
    });
    it('should add 10 to any number', function () {
        var inc10 = add_1.add(10);
        var expected = 25;
        var actual = inc10(15);
        expect(actual).toEqual(expected);
    });
});
