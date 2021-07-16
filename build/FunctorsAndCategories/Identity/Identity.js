"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trace = exports.Identity = void 0;
var Identity = function (value) { return ({
    map: function (fn) { return exports.Identity(fn(value)); }
}); };
exports.Identity = Identity;
var trace = function (x) {
    console.log(x);
    return x;
};
exports.trace = trace;
var u = exports.Identity(2);
// Identity law
var r1 = u;
var r2 = u.map(function (x) { return x; });
r1.map(exports.trace); // 2
r2.map(exports.trace); // 2
// Composition law
var f = function (n) { return n + 1; };
var g = function (n) { return n * 2; };
var r3 = u.map(function (x) { return f(g(x)); });
var r4 = u.map(g).map(f);
r3.map(exports.trace); // 5
r4.map(exports.trace); // 5
