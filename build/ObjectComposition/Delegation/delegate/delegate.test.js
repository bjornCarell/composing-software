"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delegate_1 = require("./delegate");
var objs_1 = require("../../objs");
describe('delegate function', function () {
    it('should delegate one object to another', function () {
        var actual = objs_1.objs.reduceRight(delegate_1.delegate, {});
        var expected = { a: 'a', b: 'ab' };
        expect(actual).toEqual(expected);
    });
});
