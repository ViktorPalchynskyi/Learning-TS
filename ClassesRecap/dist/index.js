class Player {
    #score = 0;
    #numLives = 10;

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value; 
    }

    taunt() {
        console.log('BOOYAH!');
    }

    loseLive() {
        this.#numLives -= 1;
    }
}

const player = new Player('Murchik', 'Motroskin');
player.taunt();

console.log(player);

const player2 = new Player('Ogurchik', 'Motroskin');

player2.loseLive();
console.log(player2);

player.score = 10;

console.log(player.score);