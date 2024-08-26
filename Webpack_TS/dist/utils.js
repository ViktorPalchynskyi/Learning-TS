import _ from 'lodash';
function add(x, y) {
    return _.add(x, y);
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
export { add, multiply, divide };
