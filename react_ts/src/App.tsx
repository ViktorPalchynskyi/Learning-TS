import { useState } from 'react';
import './App.css';
import ShopingList from './components/ShopingList/ShopingList';
import { Item } from './types';
import ShoppingListForm from './components/ShoppingListForm/ShoppingListForm';
import { v4 as getId } from 'uuid';

function App() {
    const [items, setItem] = useState<Item[]>([]);

    const addItem = (product: string, quantity: number) => {
        setItem([...items, { id: getId(), product, quantity }]);
    };

    return (
        <div className="App">
            <ShopingList items={items} />
            <ShoppingListForm onAddItem={addItem} />
        </div>
    );
}

export default App;
