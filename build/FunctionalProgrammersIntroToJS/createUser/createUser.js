"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var createUser = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'Anonymous' : _b, _c = _a.avatarThumbnail, avatarThumbnail = _c === void 0 ? '/avatars/anonymous.png' : _c;
    return ({
        name: name,
        avatarThumbnail: avatarThumbnail,
    });
};
exports.createUser = createUser;
