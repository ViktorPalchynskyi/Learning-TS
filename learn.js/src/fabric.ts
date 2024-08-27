export class Animal {
    feed(): void {}
}

class Horse extends Animal {}

type Constructor = new (...arg: any[]) => {};

function Movable<BaseConstructor extends Constructor>(
    Base: BaseConstructor
): BaseConstructor & {
    new (...args: any[]): { speed: number; move(): void };
} {
    return class BaseWithMove extends Base {
        speed: number = 0;
        move(): void {}
    };
}

const MovableHorse = Movable(Horse);

const horse = new MovableHorse();

