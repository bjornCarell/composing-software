import { Obj, objs } from '../../objs';

export const concatenate = (a: Obj , b: Obj ) => ( {...a, ...b} );

const c = objs.reduce(concatenate, {});

console.log(
  'concatenation',
  c,
  `enumerable keys: ${ Object.keys(c) }`
);