interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 2, y: 5 };

interface Person {
    first: string;
    last: string;
    nickname?: string;
    readonly age: number;
}

const thomas: Person = { first: 'Thomas', last: 'Hardy', age: 33 };
