// function square(num: number) {
//     return num * num;
// }

function greet(person: string = 'stranger') {
    return `Hi there, ${person}`;
}

const doSomething = (
    person: string,
    age: number,
    isFunny: boolean
) => {};

greet();
console.log(greet('Viktor'));

function square(num: number): number {
    return num * num;
}

const add = (x: number, y: number): number => x + y;
const colors = ['red', 'orange', 'yellow'];

colors.map((color) => color.toUpperCase());

function printMessage(msg: string): void {
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while (true) {
        console.log('Endless game loop');
    }
}
