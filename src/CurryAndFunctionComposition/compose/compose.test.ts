import { compose } from './compose';

describe('compose function', () => {
  it('should take two functions as parameters, compose them, and return a number', () => {
    const addOne = (n: number) => n + 1;
    const double = (n: number) => n * 2;
    const addOneThenDouble = compose(double, addOne);

    const expected = 42;
    const acutal = addOneThenDouble(20);

    expect(acutal).toEqual(expected);
  });

  it('should take two functions as parameters, compose them and return a string', () => {
    const i = (s: string) => 'Good day. ' + s;
    const j = (s: string) => 'How are we today ' + s + '?';
    const k = compose(i, j);

    const expected = 'Good day. How are we today sir?'
    const actual = k('sir');

    expect(actual).toEqual(expected);
  });
});