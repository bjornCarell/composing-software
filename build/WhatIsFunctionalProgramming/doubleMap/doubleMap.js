"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleMap = void 0;
var double = function (player) { return player.points * 2; };
var doubleMap = function (players) { return players.map(double); };
exports.doubleMap = doubleMap;
