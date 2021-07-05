"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
describe('stack as encapsulated object with pure functions', function () {
    it('should create a new stack', function () {
        var stringStack = stack_1.stackA('a', 'b', 'c');
        var expected = 'stack(a,b,c)';
        var actual = stringStack.toString();
        expect(actual).toEqual(expected);
    });
    it('should not mutate original stack', function () {
        var numberStack = stack_1.stackA(1, 2, 3);
        stack_1.push(4, numberStack);
        stack_1.push(5, numberStack);
        stack_1.push(6, numberStack);
        stack_1.pop(numberStack);
        var expected = 'stack(1,2,3)';
        var actual = numberStack.toString();
        expect(actual).toEqual(expected);
    });
});
