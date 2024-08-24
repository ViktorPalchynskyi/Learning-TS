interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 2, y: 5 };

// interface Person {
//     first: string;
//     last: string;
//     nickname?: string;
//     readonly id: number;
//     // sayHi: () => string;
//     sayHi(): string;
// }

// const thomas: Person = {
//     first: 'Thomas',
//     last: 'Hardy',
//     id: 33,
//     sayHi() {
//         return 'Hi';
//     },
// };

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;

        return this.price;
    },
};

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): void;
}

const elton: Dog = {
    age: 12,
    breed: 'Hasky',
    name: 'Elton',
    bark() {
        console.log('Woof Woof!');
    },
};

interface ServiceDog extends Dog {
    job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
    age: 2,
    breed: 'Booldog',
    name: 'Chewy',
    bark() {
        console.log('Gav gav');
    },
    job: 'guide dog',
};

interface Person {
    name: string;
}

interface Employee {
    readonly id: string;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: 'Pierre',
    id: '2242e2424gadg2214421',
    email: 'some@some.com',
    languages: ['JS', 'TS'],
    level: 'junior',
};
