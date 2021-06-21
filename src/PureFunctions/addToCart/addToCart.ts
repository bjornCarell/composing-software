type Item = {
  name: string,
  price: string,
}

type Quantity = number;

export type Items = {
  item: Item,
  quantity: Quantity
}

export type Cart = {
  items: Items[]
}

export const addToCart = (cart: Cart, item: Item, quantity: Quantity) => ({
    ...cart,
    items: cart.items.concat([{
      item,
      quantity,
    }]),
  });

const originalCart = {
  items: [],
}

const newCart = addToCart(
  originalCart,
  {
    name: 'Nikon DC3500',
    price: '567',
  },
  1,
);

