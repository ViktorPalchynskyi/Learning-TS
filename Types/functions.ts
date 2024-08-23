function square(num: number) {
    return num * num;
}

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
