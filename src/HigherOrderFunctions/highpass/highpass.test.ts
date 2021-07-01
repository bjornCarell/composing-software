import { highpass } from './highpass';

describe('highpass function', () => {
  it('returns numbers above 3', () => {
    const gte3 = highpass(3);

    const expected = [3, 4];
    const actual = [1, 2, 3, 4].filter(gte3);

    expect(actual).toEqual(expected);
  });
});