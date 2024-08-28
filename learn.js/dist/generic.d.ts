type Getters<Structure extends object> = {
    [Property in keyof Structure as `get${Capitalize<Property & string>}`]: Structure[Property];
};
type StringGetters = Getters<{
    name: string;
    age: number;
}>;
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
declare let series: Movie<TvSeriesDuration>;
declare let film: Movie;
declare function getProperty<T extends object, K extends keyof T = keyof T>(obj: T, key: K): T[K];
declare const movie: Movie;
