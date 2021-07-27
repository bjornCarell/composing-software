"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceArrays = void 0;
var reduceArrays = function (reducer, initial, arr) {
    var acc = initial;
    for (var i = 0, length = arr.length; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};
exports.reduceArrays = reduceArrays;
/*

The function is exactly the same as the one in reduce.ts
The only thing that differs is that the type is of T[]

How can I combine the types using type unions |
and still get it to work?

For example, if I use T | T[] I'm not able to use acc and curr
in the rudecer callback for mathematical operations like:

reduce((acc, curr) => acc + curr, 0, [1,2,3]); // ERROR

if acc is of type T[] I can't use it for addition

*/ 
