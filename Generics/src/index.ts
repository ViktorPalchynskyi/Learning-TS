// function doThing(thing: number | string): number | string {

// }

const nums: Array<number> = [];
const color: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username');
const btn = document.querySelector<HTMLButtonElement>('.btn');

if (inputEl) {
    inputEl.value = 'Viktor';
}

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<string>('string');
identity<number>(24);
