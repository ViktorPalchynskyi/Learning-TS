import _ from 'lodash';

function add(x: number, y: number): number {
    return _.add(x, y);
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    return x / y;
}

export { add, multiply, divide };
