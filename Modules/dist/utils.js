"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sample = sample;
function add(x, y) {
    return x + y;
}
function sample(arr) {
    const inx = Math.floor(Math.random() * arr.length);
    return arr[inx];
}
