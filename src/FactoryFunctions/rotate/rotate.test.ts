import { rotate } from './rotate';

describe('rotate function', () => {
  it('should take an array and rotate its elements to the left', () => {
    const expected = [2, 3, 1];
    const actual = rotate([1,2,3]);

    expect(actual).toEqual(expected);
  });
});