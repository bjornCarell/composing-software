"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rotate_1 = require("./rotate");
describe('rotate function', function () {
    it('should take an array and rotate its elements to the left', function () {
        var expected = [2, 3, 1];
        var actual = rotate_1.rotate([1, 2, 3]);
        expect(actual).toEqual(expected);
    });
});
