"use strict";
// to compile all files at the folder use tsc without file name. Same for watch mode, use it without file name tsc -w
const printProduct = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
printProduct({ name: 'some', price: 2, quantity: 22 });
