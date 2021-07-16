"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringify_1 = require("../utils/stringify/stringify");
var stack_1 = require("./stack");
describe('stackB', function () {
    it('should return a pair of "b" and stack(a)', function () {
        var x = 1;
        var y = 2;
        var expected = [y, stack_1.stackB(x)];
        var actual = stack_1.pop(stack_1.push(y, stack_1.push(x, stack_1.stackB())));
        expect(stringify_1.stringify(actual)).toBe(stringify_1.stringify(expected));
    });
});
