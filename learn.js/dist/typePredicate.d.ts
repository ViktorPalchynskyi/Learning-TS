interface Cat {
    mew(): void;
}
interface Dog {
    bark(): void;
}
interface Wolf extends Dog {
    bite(): void;
}
declare const isWolf: (animal: unknown) => animal is Wolf;
declare function bite(animal: unknown): void;
