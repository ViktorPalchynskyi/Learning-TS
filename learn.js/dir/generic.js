"use strict";
let series;
let film;
function getProperty(obj, key) {
    return obj[key];
}
const movie = {
    title: '',
    releaseYear: 0,
    actors: [],
    duration: 0,
};
getProperty(movie, 'releaseYear');
