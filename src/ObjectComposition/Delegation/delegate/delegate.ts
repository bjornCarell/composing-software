import { Obj, objs } from "../../objs";

export const delegate = (a: Obj, b: Obj) => Object.assign(Object.create(a), b);

const d = objs.reduceRight(delegate, {});

console.log(
  'delegation',
  d,
  `enumerable keys: ${ Object.keys(d) }`
);