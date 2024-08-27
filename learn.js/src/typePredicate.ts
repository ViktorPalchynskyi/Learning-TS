interface Cat {
    mew(): void;
}

interface Dog {
    bark(): void;
}

interface Wolf extends Dog {
    bite(): void;
}

const isWolf = (animal: unknown): animal is Wolf => {
    const wolf = animal as Wolf;

    return (
        wolf.bark !== undefined &&
        typeof wolf.bark === 'function' &&
        wolf.bite !== undefined &&
        typeof wolf.bite === 'function'
    );
};

function bite(animal: unknown): void {
    isWolf(animal) && animal.bite();
}