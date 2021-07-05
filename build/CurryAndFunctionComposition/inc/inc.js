"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inc = void 0;
var add_1 = require("../add/add");
var inc = function (num) { return add_1.add(num)(1); };
exports.inc = inc;
