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
function getRuntime(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
function printFullDate(date) {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    return new Date(date).toUTCString();
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return 'Meow';
    }
    return 'Gav';
}
