"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var summingReducer_1 = require("./summingReducer");
describe('summmingReducer function', function () {
    it('should increment state by 20', function () {
        var add20 = {
            type: summingReducer_1.ADD_VALUE,
            payload: {
                value: 20,
            }
        };
        var expected = 20;
        var actual = summingReducer_1.summingReducer(summingReducer_1.initialState, add20);
        expect(actual).toEqual(expected);
    });
});
