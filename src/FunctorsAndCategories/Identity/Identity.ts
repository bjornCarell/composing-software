export const Identity = <T>(value: T) => ({
  map: (fn: (value: T) => T) => Identity(fn(value))
});

export const trace = <T>(x: T) => {
  console.log(x);
  return x;
}

const u = Identity(2);
const r1 = u;
const r2 = u.map(x => x);

r1.map(trace);
r2.map(trace);
