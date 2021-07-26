import { curry } from "ramda";

export const curriedMap = curry((fn, mappable) => mappable.map(fn));