//5.57
export class Test {
    // @Logger
    calculate() { }
}
function Logger() {
    return (targer, propertyName, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            console.time(propertyName);
            const result = method.apply(this, args);
            console.timeEnd(propertyName);
            return result;
        };
    };
}
