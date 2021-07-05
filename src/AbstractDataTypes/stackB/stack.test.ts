import { stringify } from '../utils/stringify/stringify';
import { stackB, push, pop } from './stack';

describe('stackB', () => {
  it('should return a pair of "b" and stack(a)', () => {
    const x = 1;
    const y = 2;
    
    const expected = [y, stackB(x)];
    const actual = pop(push(y, push(x, stackB())));

    expect(stringify(actual)).toBe(stringify(expected));
  });
});