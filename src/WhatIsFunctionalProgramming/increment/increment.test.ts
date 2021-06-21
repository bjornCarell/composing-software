import { inc, X } from './increment';

describe('pure inc function', () => {
  it('increments the val property of an object with one', () => {
    const initalState: X = {
      val: 1,
    }

    const expected: X = {
      val: 2,
    }

    const actual: X = inc(initalState);
    
    expect(actual).toEqual(expected);
  });
});