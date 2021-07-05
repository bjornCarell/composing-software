"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
var stringify = function (value) { return Array.isArray(value) ?
    "[" + value.map(exports.stringify).join(',') + "]" :
    "{ value }"; };
exports.stringify = stringify;
