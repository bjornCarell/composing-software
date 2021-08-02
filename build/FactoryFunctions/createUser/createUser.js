"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWithDefaults = exports.createUser = void 0;
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
var createUserWithDefaults = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.username, username = _c === void 0 ? 'Anonymous' : _c, _d = _b.avatar, avatar = _d === void 0 ? 'anon.png' : _d;
    return ({
        username: username,
        avatar: avatar,
    });
};
exports.createUserWithDefaults = createUserWithDefaults;
