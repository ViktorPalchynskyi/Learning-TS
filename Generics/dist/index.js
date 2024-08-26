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
function getRandomElement(arr) {
    const randInd = Math.floor(Math.random() * arr.length);
    console.log(randInd);
    return arr[randInd];
}
console.log(getRandomElement([23, 4421, 42]));
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'some' }, { surname: 'any' });
