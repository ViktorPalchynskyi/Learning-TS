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
    // public readonly first: string;
    // public readonly last: string;
    // public score: number = 0;
    private id: string = 'asdf2e1254123hj14212423';

    constructor(
        public readonly first: string,
        public readonly last: string,
        protected _score: number = 0
    ) {}

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

    public get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    public get score(): number {
        return this._score;
    }

    public set score(value: number) {
        if (value < 0) {
            throw Error('Score cannot be negartive');
        }

        this._score = value;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    public maxScore() {
        this._score = 999999;
    }
}

const player = new Player('Carl', 'Jonson');

player.showInfo();
// player.secretMethod()
// player.id

interface Printable {
    print(): void;
}

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacker implements Colorful, Printable {
    constructor(public color: string, public brand: string) {}

    print(): void {
        console.log(
            `This ${this.brand} jacket have a ${this.color} color`
        );
    }
}

abstract class Employee {
    constructor(public first: string, public last: string) {}

    public abstract getPay(): number;

    greet() {
        console.log(`${this.first} ${this.last}`);
    }
}

interface MyWorker {
    work(): void;
    eat(): void;
}

class FulltimeEmployee extends Employee implements MyWorker {
    constructor(
        public first: string,
        public last: string,
        private salary: number
    ) {
        super(first, last);
    }

    public getPay(): number {
        return this.salary;
    }

    work(): void {
        console.log('Working');
    }

    eat(): void {
        console.log('Eating');
    }
}

class PartTimeEmployee extends Employee {
    public getPay(): number {
        return 11;
    }
}

const employee = new FulltimeEmployee(
    'Viktor',
    'Palchynskyi',
    550000
);
employee.greet();
employee.work();