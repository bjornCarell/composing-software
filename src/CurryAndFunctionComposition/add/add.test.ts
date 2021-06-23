import { add } from './add';

describe('add curried function', () => {
  it('should add two numbers and return the sum', () => {
    const expected = 5;
    const actual = add(2)(3);

    expect(actual).toEqual(expected);
  });
});
