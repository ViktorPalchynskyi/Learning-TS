// to compile need to set tsc globally by "npm install -g typescript" and use tsc variables.ts

let moviewTitle: string = 'Amadeus';

moviewTitle = 'Arrival';

let numCatLives: number = 9;
numCatLives++;

let gameOver: boolean = false;

let tvShow = 'Olover Kitteridge';
tvShow = 'The Ohter Two';
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = 22;

// let thing: any = 'hello';
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase();

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];

let founMovie: string;

for (const movie of movies) {
    if (movie === 'Amadeus') {
        founMovie = 'Amadeus';
    }
}