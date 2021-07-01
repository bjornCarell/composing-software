import { map } from './map';
import { isEven } from '../isEven/isEven';


describe('map function', () => {
  it('should stripes a set of data', () => {
    const data = [1, 2, 3, 4];

    const stripe = (n: number) => isEven(n) ? 'light' : 'dark';
    const stripeAll = map(stripe);

    const expected = ['dark', 'light', 'dark', 'light'];
    const actual = stripeAll(data);

    expect(actual).toEqual(expected);
  });
});