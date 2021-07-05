"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var highpass_1 = require("./highpass");
describe('highpass function', function () {
    it('returns numbers above 3', function () {
        var gte3 = highpass_1.highpass(3);
        var expected = [3, 4];
        var actual = [1, 2, 3, 4].filter(gte3);
        expect(actual).toEqual(expected);
    });
});
