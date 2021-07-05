import { summingReducer, initialState, ADD_VALUE } from './summingReducer';

describe('summmingReducer function', () => {
  it('should increment state by 20', () => {
    const add20 = {
      type: ADD_VALUE,
      payload: {
        value: 20,
      }
    }

    const expected = 20;
    const actual = summingReducer(initialState, add20);

    expect(actual).toEqual(expected);
  });
});