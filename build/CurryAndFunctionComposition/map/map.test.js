"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var isEven_1 = require("../isEven/isEven");
describe('map function', function () {
    it('should stripes a set of data', function () {
        var data = [1, 2, 3, 4];
        var stripe = function (n) { return isEven_1.isEven(n) ? 'light' : 'dark'; };
        var stripeAll = map_1.map(stripe);
        var expected = ['dark', 'light', 'dark', 'light'];
        var actual = stripeAll(data);
        expect(actual).toEqual(expected);
    });
});
