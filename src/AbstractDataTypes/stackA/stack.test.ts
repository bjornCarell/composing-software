import { stackA, push, pop } from "./stack";

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
});