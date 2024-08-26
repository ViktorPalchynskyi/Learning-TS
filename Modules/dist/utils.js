function add(x, y) {
    return x + y;
}
function sample(arr) {
    const inx = Math.floor(Math.random() * arr.length);
    return arr[inx];
}
export { add, sample };
