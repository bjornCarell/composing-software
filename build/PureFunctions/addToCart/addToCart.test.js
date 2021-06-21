"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addToCart_1 = require("./addToCart");
describe('addToCart function', function () {
    it('should add item (name and price), and quantity to cart', function () {
        var originalCart = {
            items: [],
        };
        var expected = {
            items: [{
                    item: { name: 'Nikon DC3500', price: '567' },
                    quantity: 1
                }]
        };
        var actual = addToCart_1.addToCart(originalCart, { name: 'Nikon DC3500', price: '567' }, 1);
        expect(actual).toEqual(expected);
    });
});
