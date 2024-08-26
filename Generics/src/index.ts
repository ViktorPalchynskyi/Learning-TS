// function doThing(thing: number | string): number | string {

// }

const nums: Array<number> = [];
const color: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username');
const btn = document.querySelector<HTMLButtonElement>('.btn');

if (inputEl) {
    inputEl.value = 'Viktor';
}

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<string>('string');
identity<number>(24);

function getRandomElement<T>(arr: T[]): T {
    const randInd = Math.floor(Math.random() * arr.length);
    console.log(randInd);

    return arr[randInd];
}

console.log(getRandomElement<number>([23, 4421, 42]));

function merge<T, U>(object1: T, object2: U): T & U {
    return {
        ...object1,
        ...object2,
    };
}

const comboObj = merge({ name: 'some' }, { surname: 'any' });
