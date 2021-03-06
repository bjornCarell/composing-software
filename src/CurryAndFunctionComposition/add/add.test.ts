import { add } from './add';

describe('add curried function', () => {
  it('should add two numbers and return the sum', () => {
    const expected = 5;
    const actual = add(2)(3);

    expect(actual).toEqual(expected);
  });

  it('should add 10 to any number', () => {
    const inc10 = add(10);

    const expected = 25;
    const actual = inc10(15);

    expect(actual).toEqual(expected);
  })
});
