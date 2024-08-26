function add(x: number, y: number): number {
    return x + y;
}

function sample<T>(arr: T[]): T {
    const inx = Math.floor(Math.random() * arr.length);

    return arr[inx];
}

export { add, sample };
