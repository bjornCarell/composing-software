"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser_1 = require("./createUser");
describe('create user function', function () {
    it('should set the name of a new user', function () {
        var myUser = createUser_1.createUser({ username: 'echo', avatar: 'echo.png' });
        var Nemo = myUser.setUserName('Nemo');
        var expected = 'Nemo';
        var actual = Nemo.username;
        expect(actual).toEqual(expected);
    });
});
describe('create user defaults function', function () {
    it('should generate a user with default values', function () {
        var expected = {
            username: 'Anonymous',
            avatar: 'anon.png',
        };
        var actual = createUser_1.createUserWithDefaults();
        expect(actual).toEqual(expected);
    });
});
