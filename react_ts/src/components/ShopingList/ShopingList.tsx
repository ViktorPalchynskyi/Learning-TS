import React from 'react';
import Header from '../Header/Header';

interface Item {
    id: number;
    product: string;
    quantity: number;
}

type ShopingListProps = {
    items: Item[];
};

export default function ShopingList({ items }: ShopingListProps): JSX.Element {
    return (
        <div>
            <Header>Shopping List</Header>
            <ul>
                {items.map(({ id, product, quantity }) => (
                    <li key={id}>
                        {product} - {quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
