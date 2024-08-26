class Player {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    private id: string = 'asdf2e1254123hj14212423';

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): string {
        return this.id;
    }

    public showInfo(): void {
        console.log(
            `${this.first} ${this.last} have score: ${
                this.score
            } and have id: ${this.secretMethod()}`
        );
    }
}

const player = new Player('Carl', 'Jonson');

player.showInfo();
// player.secretMethod()
// player.id
