const ages: number[] = [];

const gameBoard: string[][] = [];

type Product = {
    name: string;
    price: number;
};

function getTotal(products: Product[]): number {
    return products.reduce((sum, { price }) => sum + price, 0);
}
