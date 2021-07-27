import { trace } from "../../CurryAndFunctionComposition/trace/trace";

const composePromises = <T>(...ms: ((arg: T) => Promise<T>)[]) => (
  ms.reduce((f, g) => (x: T) => g(x).then(f))
);

const label = 'Promise composition';

const g = (n: number) => Promise.resolve(n + 1);
const f = (n: number) => Promise.resolve(n * 2);

const h = composePromises(f, g);

h(20).then(trace(label)); // Promise composition: 42
  
