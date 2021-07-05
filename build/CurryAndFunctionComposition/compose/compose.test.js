"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./compose");
describe('compose function', function () {
    it('should take two functions as parameters, compose them, and return a number', function () {
        var addOne = function (n) { return n + 1; };
        var double = function (n) { return n * 2; };
        var addOneThenDouble = compose_1.compose(double, addOne);
        var expected = 42;
        var acutal = addOneThenDouble(20);
        expect(acutal).toEqual(expected);
    });
    it('should take two functions as parameters, compose them and return a string', function () {
        var i = function (s) { return 'Good day. ' + s; };
        var j = function (s) { return 'How are we today ' + s + '?'; };
        var k = compose_1.compose(i, j);
        var expected = 'Good day. How are we today sir?';
        var actual = k('sir');
        expect(actual).toEqual(expected);
    });
});
