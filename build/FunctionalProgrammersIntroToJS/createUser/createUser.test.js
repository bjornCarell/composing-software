"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser_1 = require("./createUser");
describe('createUser function', function () {
    it('should return default values when passed an empty object as argument', function () {
        var expected = {
            name: 'Anonymous',
            avatarThumbnail: '/avatars/anonymous.png'
        };
        var actual = createUser_1.createUser({});
        expect(actual).toEqual(expected);
    });
});
