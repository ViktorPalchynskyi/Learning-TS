"use strict";
// function doThing(thing: number | string): number | string {
// }
const nums = [];
const color = [];
const inputEl = document.querySelector('#username');
const btn = document.querySelector('.btn');
if (inputEl) {
    inputEl.value = 'Viktor';
}
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity('string');
identity(24);
