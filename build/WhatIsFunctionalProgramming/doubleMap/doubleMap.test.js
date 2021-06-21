"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doubleMap_1 = require("./doubleMap");
describe('double map functor', function () {
    it('doubles property point for a player', function () {
        var players = [
            { name: 'Susan', points: 3 },
            { name: 'Ahmed', points: 6 },
            { name: 'Jing', points: 9 },
        ];
        var expected = [6, 12, 18];
        var actual = doubleMap_1.doubleMap(players);
        expect(actual).toEqual(expected);
    });
});
