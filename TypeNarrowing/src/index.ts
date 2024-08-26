function triple(value: number | string): number | string {
    if (typeof value === 'number') {
        return value * 3;
    }

    return value.repeat(3);
}

const el = document.getElementById('idk');

if (el) {
    el.innerHTML = 'Hello, there';
} else {
    const p = document.createElement('p');
    p.innerHTML = 'I was created by TS';
    document.body.append(p);
}

const printLetter = (word?: string): void => {
    if (word) {
        for (const char of word) {
            console.log(char);
        }
    }

    console.log('YOU DID NOT PASS IN A WORD!');
};

function someDemo(x: string | number, y: string | boolean): void {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }

    console.log(x, y);
}

interface Movie {
    title: string;
    duration: number;
}

interface TVSHow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVSHow): number {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }

    return media.duration;
}

function printFullDate(date: string | Date): string {
    if (date instanceof Date) {
        return date.toUTCString();
    }

    return new Date(date).toUTCString();
}

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        return 'Meow';
    }

    return 'Gav';
}

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: 'rooter';
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: 'cow';
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: 'pig';
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal): string {
    switch (animal.kind) {
        case 'pig':
            return 'Hryu';
        case 'rooter':
            return 'Coocarecoo';
        case 'cow':
            return 'Muu';
    }
}

console.log(
    getFarmAnimalSound({
        name: 'Stevie',
        weight: 2,
        age: 1.5,
        kind: 'rooter',
    })
);
