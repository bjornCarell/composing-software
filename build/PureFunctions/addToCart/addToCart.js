"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
var addToCart = function (cart, item, quantity) { return (__assign(__assign({}, cart), { items: cart.items.concat([{
            item: item,
            quantity: quantity,
        }]) })); };
exports.addToCart = addToCart;
var originalCart = {
    items: [],
};
var newCart = exports.addToCart(originalCart, {
    name: 'Nikon DC3500',
    price: '567',
}, 1);
