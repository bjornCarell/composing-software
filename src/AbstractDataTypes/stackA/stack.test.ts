import { stackA, push, pop } from "./stack";
import { stringify } from '../utils/stringify/stringify';

describe('stack as encapsulated object with pure functions', () => {
  it('should create a new stack', () => {
    const stringStack = stackA('a','b','c');

    const expected = 'stack(a,b,c)';
    const actual = stringStack.toString();

    expect(actual).toEqual(expected);
  });

  it('should not mutate original stack', () => {
    const numberStack = stackA(1,2,3);
    push(4, numberStack);
    push(5, numberStack);
    push(6, numberStack);
    pop(numberStack);

    const expected = 'stack(1,2,3)';
    const actual = numberStack.toString();

    expect(actual).toEqual(expected);
  });

  it('should return a pair of "a" and stack()', () => {
    const a = 'a';

    const expected = [a, stackA()];
    const actual = pop(push(a, stackA()));

    expect(stringify(actual)).toBe(stringify(expected));
  });

  it('should return a pair of "b" and stack(a)', () => {
    const a = 'a';
    const b = 'b';

    const expected = [b, stackA(a)];
    const acutal = pop(push(b, push(a, stackA())));

    expect(stringify(acutal)).toBe(stringify(expected));
  });       
});