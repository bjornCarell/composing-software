export const compose = (...fns: Function[]) => (x: unknown): unknown =>
  fns.reduceRight((y, f) => f(y), x);


  // https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
  // https://2ality.com/2018/04/type-notation-typescript.html#rest-parameters
