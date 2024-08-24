let age: number | string = 21;
age = '21';
age = 26;

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 2, y: 44 };
coordinates = { lat: 42, long: 55 };
