"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var createUser = function (_a) {
    var username = _a.username, avatar = _a.avatar;
    return ({
        username: username,
        avatar: avatar,
        setUserName: function (username) {
            this.username = username;
            return this;
        }
    });
};
exports.createUser = createUser;
