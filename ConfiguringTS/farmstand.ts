// to compile all files at the folder use tsc without file name. Same for watch mode, use it without file name tsc -w

interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProduct = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`);
};

printProduct({ name: 'some', price: 2, quantity: 22 });
