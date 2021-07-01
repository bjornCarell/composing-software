export const pipe = <T>(...fns: ((arg: T) => T)[]) =>
  (x: T) =>
    fns.reduce((y, f) => f(y), x);