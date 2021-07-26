import { curriedMap } from './curriedMap';

const double = (x: number) => x * 2;
const log = <T>(x: T) => x;

describe('curriedMap function', () => {
  it('should take a generic map with any functor', () => {
    const mdouble = curriedMap(double);

    const actual = mdouble([4]).map(log);
    const expected = [8];

    expect(actual).toEqual(expected);
  });
});