export const Identity = <T>(value: T) => ({
  map: (fn: (value: T) => T) => Identity(fn(value))
});

export const trace = <T>(x: T) => {
  console.log(x);
  return x;
}

const u = Identity(2);

// Identity law
const r1 = u;
const r2 = u.map(x => x);

r1.map(trace); // 2
r2.map(trace); // 2

// Composition law
const f = (n: number) => n + 1;
const g = (n: number) => n * 2;

const r3 = u.map(x => f(g(x)));
const r4 = u.map(g).map(f);

r3.map(trace); // 5
r4.map(trace); // 5


