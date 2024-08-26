import React from 'react';

export default function ShoppingListForm(): JSX.Element {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('Submited');
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" />
            <button type="submit">Add Item</button>
        </form>
    );
}
