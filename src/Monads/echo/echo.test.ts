import { echo } from "./echo";

describe('echo function', () => {
  it('should echo a x value n times', () => {
    const arr = ['hej', 'hej']
    
    const expected = [['hej', 'hej'], ['hej', 'hej']];
    const actual = arr.map(echo(2)); 

    expect(actual).toEqual(expected);
  });

  it('should flatten an array of arrays', () => {
    const arr = [1, 2, 3];

    const expected = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    const actual = arr.flatMap(echo(3));

    expect(actual).toEqual(expected);
  });

  // FlatMap is the operation that defines a monad. It combines map and flatten
  // into a single operation used to compose the type lifing functions (a => M(b))
});