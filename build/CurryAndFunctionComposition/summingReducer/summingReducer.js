"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summingReducer = exports.ADD_VALUE = exports.initialState = void 0;
exports.initialState = {
    value: 0,
};
exports.ADD_VALUE = 'ADD_VALUE';
var summingReducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case exports.ADD_VALUE:
            return state.value + payload.value;
        default: return state;
    }
};
exports.summingReducer = summingReducer;
// Does TypeScript make the default return statement reduntant? 
// We will never be able to call the summingReducer without parameters if typed as above
