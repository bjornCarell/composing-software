"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var objs_1 = require("../../objs");
describe('linked list aggregation', function () {
    it('should generate a linked list', function () {
        var expected = [{ a: 'a', b: 'ab' }, [{ b: 'b' }, [{ c: 'c', b: 'cb' }, []]]];
        var actual = objs_1.objs.reduceRight(list_1.pair, []);
        expect(actual).toEqual(expected);
    });
});
