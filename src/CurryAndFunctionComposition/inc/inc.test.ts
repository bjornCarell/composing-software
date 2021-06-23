import { inc } from './inc';

describe('inc function', () => {
  it('should increment a number by one', () => {
    const expected = 5;

    const acutal = inc(4);

    expect(acutal).toEqual(expected);
  })
})