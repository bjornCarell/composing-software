import { addToCart, Cart } from './addToCart';

describe('addToCart function', () => {
  it('should add item (name and price), and quantity to cart', () => {
    const originalCart = {
      items: [],
    }

    const expected: Cart = {
      items: [ { 
        item: { name: 'Nikon DC3500', price: '567' }, 
        quantity: 1 
      } ]
    }

    const actual: Cart = addToCart(originalCart, { name: 'Nikon DC3500', price: '567' }, 1);
    
    expect(actual).toEqual(expected);
  });
});