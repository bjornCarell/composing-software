"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myReducer_1 = require("./myReducer");
describe('my reducer function', function () {
    var action = {
        type: 'FOO',
        payload: {
            data: 'Some data',
            additionalData: 'Additional data',
        }
    };
    it('assigns payload to an empty object', function () {
        var expected = action.payload;
        var actual = myReducer_1.myReducer(action);
        expect(actual).toEqual(expected);
    });
    it('assigns payload and state to an empty object', function () {
        var state = {
            hello: 'world',
        };
        var expected = {
            additionalData: 'Additional data',
            data: 'Some data',
            hello: 'world',
        };
        var actual = myReducer_1.myReducer(action, state);
        expect(actual).toEqual(expected);
    });
});
