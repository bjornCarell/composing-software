"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var echo_1 = require("./echo");
describe('echo function', function () {
    it('should echo a x value n times', function () {
        var arr = ['hej', 'hej'];
        var expected = [['hej', 'hej'], ['hej', 'hej']];
        var actual = arr.map(echo_1.echo(2));
        expect(actual).toEqual(expected);
    });
    it('should flatten an array of arrays', function () {
        var arr = [1, 2, 3];
        var expected = [1, 1, 1, 2, 2, 2, 3, 3, 3];
        var actual = arr.flatMap(echo_1.echo(3));
        expect(actual).toEqual(expected);
    });
    // FlatMap is the operation that defines a monad. It combines map and flatten
    // into a single operation used to compose the type lifing functions (a => M(b))
});
