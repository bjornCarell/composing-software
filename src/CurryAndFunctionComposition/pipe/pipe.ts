export const pipe = (...fns: Function[]) =>
  (x: unknown) =>
    fns.reduce((y, f) => f(y), x);