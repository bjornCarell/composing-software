import { reduce } from './reduce';

describe('simple reduce', () => {
  it('should reduce an array of numbers to their sum', () => {
    const expected = 6;
    
    const actual = reduce<number>((acc, curr) => acc + curr, 0, [1,2,3]);

    expect(actual).toEqual(expected);
  });

  it('should reduce an array of characters to a string', () => {
    const expected = 'hej';

    const actual = reduce((acc, curr) => acc + curr, '', ['h', 'e', 'j']);

    expect(actual).toEqual(expected);
  });

});