export const pipe = <T>(...fns: ((arg: T) => T)[]) =>
  (x: T) =>
    fns.reduce((y, f) => f(y), x);

// Make use of generic type T to avoid using (...fns: Function[])
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function