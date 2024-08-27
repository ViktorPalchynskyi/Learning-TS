"use strict";
const isWolf = (animal) => {
    const wolf = animal;
    return (wolf.bark !== undefined &&
        typeof wolf.bark === 'function' &&
        wolf.bite !== undefined &&
        typeof wolf.bite === 'function');
};
function bite(animal) {
    isWolf(animal) && animal.bite();
}
