export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    sayHi() {
        console.log(`Hi, my name is ${this.username}`);
    }
}
