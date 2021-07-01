import { pipe } from './pipe';
import { trace } from '../trace/trace';

describe('pipe function', () => {
  it('should be able to take arbitary number of functions as parameters', () => {
    const g = (n: number) => n + 1;
    const f = (n: number) => n * 2;
    const h = pipe(
      g,
      trace('after g'),
      f,
      trace('after f')
    )

    const expected = 42;
    const actual = h(20);

    expect(actual).toEqual(expected);
  });
});