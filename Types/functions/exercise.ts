function twoFer(name: string = 'you'): string {
    return `one for ${name}, one for me`;
}

function isLeapyear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
