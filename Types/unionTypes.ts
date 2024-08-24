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

// let coordinates: Point | Loc = { x: 2, y: 44 };
// coordinates = { lat: 42, long: 55 };

function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`);
}

function calculateTax(price: number | string, tax: number): number {
    // if (typeof price === 'string') {
    //     return ;
    // } else {
    //     return price * tax;
    // }

    if (typeof price === 'string') {
        price = parseFloat(price);
    }

    return price * tax;

    // return typeof price === 'string'
    //     ? parseFloat(price) * tax
    //     : price * tax;
}

// const nums: number[] | string[]= [123];
const stuff: (number | string)[] = ['string', 242];

const coordinates: (Point | Loc)[] = [];
coordinates.push({ lat: 42, long: 55 });
coordinates.push({ x: 42, y: 55 });

// let zero: 0 = 0;
// zero = 22

let hi: 'hi' = 'hi';

let mood: 'happy' | 'sad' = 'happy';
mood = 'sad';

type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

let today: DayOfWeek = 'Saturday';
