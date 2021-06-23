import { reduceArrays } from '../reduceArray/reduceArray';

export const filter = <T>(
  fn: (item: T) => boolean,
  arr: T[],
) => reduceArrays((acc: T[], curr: T) => fn(curr) ? 
  acc.concat([curr]) :
  acc, [], arr
);