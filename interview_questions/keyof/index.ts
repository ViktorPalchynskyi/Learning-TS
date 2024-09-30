namespace keyof {
    interface User {
        name: string;
        id: string;
        age: number;
    }

    type UserKeys = keyof User;

    function getProperty<T extends object, K extends keyof T>(
        obj: T,
        key: K
    ) {
        return obj[key];
    }

    const user = { id: 1, name: 'John Doe', age: 30 };
    const userName = getProperty(user, 'name'); // string
    const userAge = getProperty(user, 'age'); // number

    
    type UserType = typeof user;
}
