import React, { useRef } from 'react';

type ShoppingListForm = {
    onAddItem(item: string): void;
};

export default function ShoppingListForm({
    onAddItem,
}: ShoppingListForm): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = inputRef.current!.value;
        onAddItem(newProduct);
        inputRef.current!.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Product Name"
            />
            <button type="submit">Add Item</button>
        </form>
    );
}
