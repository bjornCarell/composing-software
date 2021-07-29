import { delegate } from "./delegate"
import { objs } from "../../objs"

describe('delegate function', () => {
  it('should delegate one object to another', () => {
    const actual = objs.reduceRight(delegate, {});
    const expected = { a:'a', b: 'ab'};

    expect(actual).toEqual(expected);
  });
});