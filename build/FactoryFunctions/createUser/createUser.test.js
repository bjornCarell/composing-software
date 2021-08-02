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
