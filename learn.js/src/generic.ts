type Getters<Structure extends object> = {
    [Property in keyof Structure as `get${Capitalize<
        Property & string
    >}`]: Structure[Property];
};

type StringGetters = Getters<{ name: string; age: number }>;

interface MovieActor<Awards extends string = string> {
    name: string;
    surname: string;
    birthDate: string;
    awards: Awards[];
}

interface Movie<Duration = number, Actor = MovieActor> {
    title: string;
    releaseYear: number;
    actors: Actor[];
    duration: Duration;
}

interface TvSeriesDuration {
    seasonCount: number;
    seriesDuration: number;
}

let series: Movie<TvSeriesDuration>;
let film: Movie;

function getProperty<T extends object, K extends keyof T = keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const movie: Movie = {
    title: '',
    releaseYear: 0,
    actors: [],
    duration: 0,
};

getProperty(movie, 'releaseYear');
