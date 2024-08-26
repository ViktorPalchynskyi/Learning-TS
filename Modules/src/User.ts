import type { Person } from './types';

export default class User implements Person {
    constructor(public username: string, public email: string) {}

    public sayHi(): void {
        console.log(`Hi, my name is ${this.username}`);
    }
}
