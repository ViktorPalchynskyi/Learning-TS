"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.id = 'asdf2e1254123hj14212423';
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        return this.id;
    }
    showInfo() {
        console.log(`${this.first} ${this.last} have score: ${this.score} and have id: ${this.secretMethod()}`);
    }
}
const player = new Player('Carl', 'Jonson');
player.showInfo();
// player.secretMethod()
// player.id
