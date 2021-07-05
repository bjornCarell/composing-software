"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEven_1 = require("./isEven");
describe('isEven function', function () {
    it('should return true if number is even', function () {
        var even = isEven_1.isEven(2);
        expect(even).toBe(true);
    });
    it('should return false if number is odd', function () {
        var odd = isEven_1.isEven(3);
        expect(odd).toBe(false);
    });
});
