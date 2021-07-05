"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inc_1 = require("./inc");
describe('inc function', function () {
    it('should increment a number by one', function () {
        var expected = 5;
        var acutal = inc_1.inc(4);
        expect(acutal).toEqual(expected);
    });
});
