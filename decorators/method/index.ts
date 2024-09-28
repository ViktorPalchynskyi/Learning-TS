function logMethod(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    const originalMethod = descriptor.value as Function;

    descriptor.value = (...args: any[]): void => {
        console.log(
            `Method ${name} was called with args: ${args.join(
                ', '
            )}. Target is ${JSON.stringify(target)}`
        );

        return originalMethod.apply(descriptor, args);
    };

    return descriptor;
}

class Calculator {
    @logMethod
    add(a: number, b: number) {
        return a + b;
    }
}

const c = new Calculator();
console.log('res', c.add(2, 4));

function Get(path: string) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        console.log(
            `Register route: GET ${path} for ${propertyName}`
        );

        const originalMethod = descriptor.value as Function;

        descriptor.value = function (...args: any[]) {
            console.log(`Handling GET request for ${path}`);

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

class UserController {
    @Get('/users')
    getAllUsers() {
        return 'This will return a list of users';
    }
}

const controller = new UserController();
console.log(controller.getAllUsers());
