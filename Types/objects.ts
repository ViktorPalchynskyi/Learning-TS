function printName(person: { first: string; second: string }): void {
    console.log(`${person.first} ${person.second}`);
}

printName({ first: 'Viktor', second: 'Palchynskyi' });

type Poin = {
    x: number;
    y: number;
    z?: number;
};

let coordiname: Poin = { x: 24, y: 2 };

function randomCoordiname(): Poin {
    return {
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
    };
}

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    };
};

function doublePoint(poin: Poin): Poin {
    return { x: poin.x * 2, y: poin.y * 2 };
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const myPoint: Poin = { x: 24, y: 42, z: 44 };

type User = {
    readonly id: number;
    name: string;
};

const user: User = {
    id: 42123,
    name: 'catgirl',
};

// user.id = 223;

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const cc: ColorfulCircle = { radius: 19, color: 'red' };

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type Animal = {
    color: string;
    isAlive: boolean;
    isMamel: boolean;
};

type CatDog = Cat &
    Dog & {
        age: number;
    };

type CatDogAnimal = CatDog & Animal;

const himera: CatDogAnimal = {
    numLives: 9,
    breed: 'psina',
    age: 22,
    color: 'red',
    isAlive: true,
    isMamel: true,
};
