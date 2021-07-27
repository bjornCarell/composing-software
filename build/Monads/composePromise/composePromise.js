"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trace_1 = require("../../CurryAndFunctionComposition/trace/trace");
var composePromises = function () {
    var ms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ms[_i] = arguments[_i];
    }
    return (ms.reduce(function (f, g) { return function (x) { return g(x).then(f); }; }));
};
var label = 'Promise composition';
var g = function (n) { return Promise.resolve(n + 1); };
var f = function (n) { return Promise.resolve(n * 2); };
var h = composePromises(f, g);
h(20).then(trace_1.trace(label)); // Promise composition: 42
// https://stackoverflow.com/questions/43881192/returning-a-promise-in-an-async-function-in-typescript
