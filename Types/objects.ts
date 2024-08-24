function printName(person: { first: string; second: string }): void {
    console.log(`${person.first} ${person.second}`);
}

printName({ first: 'Viktor', second: 'Palchynskyi' });

let coordiname: { x: number; y: number } = { x: 24, y: 2 };

function randomCoordiname(): { x: number; y: number } {
    return {
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
    };
}
