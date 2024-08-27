//5.57

export class Test {
    // @Logger
    calculate() {}
}

function Logger() {
    return (
        targer: Object,
        propertyName: string,
        descriptor: PropertyDescriptor
    ) => {
        const method = descriptor.value;

        descriptor.value = function (...args: any) {
            console.time(propertyName);
            const result = method.apply(this, args);
            console.timeEnd(propertyName);

            return result
        };
    };
}
