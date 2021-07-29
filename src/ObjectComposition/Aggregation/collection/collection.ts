import { Obj, objs } from '../../objs';

export const collection = (toAggr: Obj[], e: Obj) => toAggr.concat([e]);

const a = objs.reduce(collection, []);

console.log(
  'collection aggregation',
  a,
  a[1].b,
  a[2].c,
  `enumerable keys: ${ Object.keys(a) }`
); 
// collection aggregation [ { a: 'a', b: 'ab' }, { b: 'b' }, { c: 'c', b: 'cb' } ] b c enumerable keys: 0,1,2

