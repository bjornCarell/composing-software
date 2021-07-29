import { concatenate } from "./concatenate";
import { objs } from '../../objs';


describe('concatenate function', () => {
  it('should concatenate two given objects', () => {
    const expected = { a: 'a', b: 'cb', c: 'c'};
    const actual = objs.reduce(concatenate, {});

    expect(actual).toEqual(expected);
  });
});