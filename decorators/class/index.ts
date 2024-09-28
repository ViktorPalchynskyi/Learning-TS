type Constructor = new (...args: any[]) => {};

function logClass(cosntructor: Constructor) {
    console.log(`Class ${cosntructor.name} was created.`);
}

function addTimestapm<T extends Constructor>(constructor: T) {
    return class extends constructor {
        timestamp: Date = new Date();
    };
}

@logClass
@addTimestapm
class Person {
    constructor(public name: string) {}
}

const person = new Person('Viktor');
console.log(person);

function LogClass(message: string) {
    return function (constructor: Constructor) {
        console.log(`${message}: ${constructor.name}`);
    };
}

@LogClass('I created a class with decorator fabric')
class MyClass {
    constructor() {
        console.log('Instance of MyClass created');
    }
}

const mc = new MyClass();