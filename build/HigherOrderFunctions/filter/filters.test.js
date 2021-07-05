"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
describe('filter function', function () {
    it('should filter an array from words of 4 characters', function () {
        var words = ['oops', 'gasp', 'shout', 'sun'];
        var expected = ['shout', 'sun'];
        var actual = filter_1.filter(function (word) { return word.length !== 4; }, words);
        expect(actual).toEqual(expected);
    });
    it('should filter out words starting with "s"', function () {
        var words = ['sun', 'cake', 'steam', 'home', 'swag'];
        var expected = ['sun', 'steam', 'swag'];
        var actual = filter_1.filter(function (word) { return word.startsWith('s'); }, words);
        expect(actual).toEqual(expected);
    });
});
