function printName(person: { first: string; second: string }): void {
    console.log(`${person.first} ${person.second}`);
}

printName({ first: 'Viktor', second: 'Palchynskyi' });

type Poin = {
    x: number;
    y: number;
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
