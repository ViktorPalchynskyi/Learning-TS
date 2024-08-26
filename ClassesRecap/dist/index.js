"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     public score: number = 0;
//     private id: string = 'asdf2e1254123hj14212423';
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): string {
//         return this.id;
//     }
//     public showInfo(): void {
//         console.log(
//             `${this.first} ${this.last} have score: ${
//                 this.score
//             } and have id: ${this.secretMethod()}`
//         );
//     }
// }
class Player {
    constructor(first, last, _score = 0) {
        this.first = first;
        this.last = last;
        this._score = _score;
        // public readonly first: string;
        // public readonly last: string;
        // public score: number = 0;
        this.id = 'asdf2e1254123hj14212423';
    }
    secretMethod() {
        return this.id;
    }
    showInfo() {
        console.log(`${this.first} ${this.last} have score: ${this.score} and have id: ${this.secretMethod()}`);
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw Error('Score cannot be negartive');
        }
        this._score = value;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const player = new Player('Carl', 'Jonson');
player.showInfo();
// player.secretMethod()
// player.id
