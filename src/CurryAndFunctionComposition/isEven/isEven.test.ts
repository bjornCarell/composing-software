import { isEven } from './isEven';

describe('isEven function', () => {
  it('should return true if number is even', () => {
    const even = isEven(2);
    expect(even).toBe(true);
  });

  it('should return false if number is odd', () => {
    const odd = isEven(3);
    expect(odd).toBe(false);
  });
});