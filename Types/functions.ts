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
