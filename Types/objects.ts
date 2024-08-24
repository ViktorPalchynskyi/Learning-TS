function printName(person: { first: string; second: string }): void {
    console.log(`${person.first} ${person.second}`);
}

printName({ first: 'Viktor', second: 'Palchynskyi' });
