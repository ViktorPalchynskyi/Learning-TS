interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 2, y: 5 };

interface Person {
    first: string;
    last: string;
    nickname?: string;
    readonly id: number;
    // sayHi: () => string;
    sayHi(): string;
}

const thomas: Person = {
    first: 'Thomas',
    last: 'Hardy',
    id: 33,
    sayHi() {
        return 'Hi';
    },
};

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;

        return this.price;
    },
};
