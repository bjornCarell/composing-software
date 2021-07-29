"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concatenate_1 = require("./concatenate");
var objs_1 = require("../../objs");
describe('concatenate function', function () {
    it('should concatenate two given objects', function () {
        var expected = { a: 'a', b: 'cb', c: 'c' };
        var actual = objs_1.objs.reduce(concatenate_1.concatenate, {});
        expect(actual).toEqual(expected);
    });
});
