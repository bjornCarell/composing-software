export const map = <T, U>(fn: (arg: T) => U) =>
  (data: T[]) => data.map(fn);