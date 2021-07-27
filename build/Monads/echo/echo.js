"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.echo = void 0;
var echo = function (n) { return function (x) { return Array.from({ length: n }).fill(x); }; };
exports.echo = echo;
