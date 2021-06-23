import { filter } from './filter';

describe('filter function', () => {
  it('should filter an array from words of 4 characters', () => {
    const words = ['oops', 'gasp', 'shout', 'sun'];

    const expected = ['shout', 'sun'];

    const actual = filter(word => word.length !== 4, words);

    expect(actual).toEqual(expected);
  });

  it('should filter out words starting with "s"', () => {
    const words = ['sun','cake', 'steam', 'home', 'swag'];

    const expected = ['sun', 'steam', 'swag'];

    const actual = filter(word => word.startsWith('s'), words);

    expect(actual).toEqual(expected);
  });
});