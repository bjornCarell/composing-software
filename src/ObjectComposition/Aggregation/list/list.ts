import { Obj, objs } from '../../objs';

// https://mariusschulz.com/blog/the-unknown-type-in-typescript
export const pair = (x: Obj | unknown, y: Obj) => [y, x];


const l = objs.reduceRight(pair, []);

console.log(
  'linked l aggregation',
  l,
  `enumerable keys: ${ Object.keys(l) }`
);
