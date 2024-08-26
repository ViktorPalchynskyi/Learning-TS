import React, { useRef } from 'react';

type ShoppingListForm = {
    onAddItem(item: string, quantity: number): void;
};

export default function ShoppingListForm({
    onAddItem,
}: ShoppingListForm): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = productInputRef.current!.value;
        const quantity = parseFloat(quantityInputRef.current!.value);
        onAddItem(newProduct, quantity);
        productInputRef.current!.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={productInputRef}
                type="text"
                placeholder="Product Name"
            />
            <input ref={quantityInputRef} type="number" min={0} />
            <button type="submit">Add Item</button>
        </form>
    );
}
