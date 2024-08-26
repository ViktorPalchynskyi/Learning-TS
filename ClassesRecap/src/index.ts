class Player {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    private id: string = 'asdf2e1254123hj14212423';

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const player = new Player('Carl', 'Jonson');

// player.id