"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highpass = void 0;
var highpass = function (cutoff) { return function (n) { return n >= cutoff; }; };
exports.highpass = highpass;
