import { pair } from './list';
import { objs } from '../../objs';


describe('linked list aggregation', () => {
  it('should generate a linked list', () => {
    const expected = [ { a: 'a', b: 'ab' }, [ { b: 'b' }, [ { c: 'c', b: 'cb' }, [] ] ] ];
    const actual = objs.reduceRight(pair, []);

    expect(actual).toEqual(expected);
  });
});