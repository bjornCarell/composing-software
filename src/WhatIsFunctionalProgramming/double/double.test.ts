import { double, X } from './double';

describe('pure double function', () => {
  it('doubles the val poperty of an object', () => {
    const initalState: X = {
      val: 2,
    }

    const expected: X = {
      val: 4,
    }

    const actual: X = double(initalState);

    expect(actual).toEqual(expected);
  })
})