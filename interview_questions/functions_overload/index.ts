function multiply(a: string, b: number): string;
function multiply(a: number, b: number): number;
function multiply(a: string | number, b: number): string | number {
    if (typeof a === 'number') {
        return a * b;
    }

    return a.repeat(b);
}


const res1 = multiply(2, 3);
const res2 = multiply('hello', 5);
