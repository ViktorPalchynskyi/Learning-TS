"use strict";
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}
const el = document.getElementById('idk');
if (el) {
    el.innerHTML = 'Hello, there';
}
else {
    const p = document.createElement('p');
    p.innerHTML = 'I was created by TS';
    document.body.append(p);
}
const printLetter = (word) => {
    if (word) {
        for (const char of word) {
            console.log(char);
        }
    }
    console.log('YOU DID NOT PASS IN A WORD!');
};
function someDemo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
    console.log(x, y);
}
