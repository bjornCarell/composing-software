"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pop = exports.push = exports.stackA = void 0;
var stackA = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return ({
        push: function (item) { return exports.stackA.apply(void 0, __spreadArrays(items, [item])); },
        pop: function () {
            var newItems = __spreadArrays(items);
            var item = newItems.splice(-1)[0];
            return [item, exports.stackA.apply(void 0, newItems)];
        },
        toString: function () { return "stack(" + items.join(',') + ")" || 'No stack'; }
    });
};
exports.stackA = stackA;
var push = function (item, stack) { return stack.push(item); };
exports.push = push;
var pop = function (stack) { return stack.pop(); };
exports.pop = pop;
