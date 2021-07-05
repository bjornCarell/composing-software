"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myReducer = void 0;
var myReducer = function (action, state) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case 'FOO': return Object.assign({}, state, payload);
        default: return state;
    }
};
exports.myReducer = myReducer;
