function logProperty(target: any, propertyKey: string): void {
    let value: string;

    function getter(): string {
        console.log(`Get value: ${propertyKey} - ${value}`);

        return value;
    }

    function setter(newValue: string): void {
        console.log(
            `Set value: ${propertyKey} from ${value} to ${newValue}`
        );

        value = newValue;
    }

    console.log(target);

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true,
    });
}

class NewPerson {
    @logProperty
    public name: string;

    @ReadOnly('Test message')
    public passportId: number = Math.round(Math.random() * 1e7);

    constructor(name: string) {
        this.name = name;
        // this.passportId ;
    }
}

const p = new NewPerson('Viktor');
p.name = 'Irina';
console.log(p.name);

function ReadOnly(message: string): Function {
    return function (target: any, propertyKey: string): void {
        console.log(
            `ReadOnly with message and target: ${message} - ${target}`
        );

        Object.defineProperty(target, propertyKey, {
            enumerable: false,
            writable: true,
        });
    };
}
