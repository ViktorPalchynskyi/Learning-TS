function logParam(
    target: any,
    methodName: string,
    paramIndex: number
): void {
    // const existingParam: any[] = target[methodName] || [];
    // existingParam.push(paramIndex);
    // target[methodName] = existingParam;

    console.log(
        `Parameter index ${paramIndex} in method ${methodName} was decorated.`
    );
}

class User {
    static greet(
        @logParam name: string,
        @logParam age: number
    ): void {
        console.log(`Hello, ${name} with age: ${age}`);
    }
}

User.greet('Viktor', 26);
