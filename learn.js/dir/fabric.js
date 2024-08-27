export class Animal {
    feed() { }
}
class Horse extends Animal {
}
function Movable(Base) {
    return class BaseWithMove extends Base {
        speed = 0;
        move() { }
    };
}
const MovableHorse = Movable(Horse);
const horse = new MovableHorse();
