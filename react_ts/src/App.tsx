import { useState } from 'react';
import './App.css';
import ShopingList from './components/ShopingList/ShopingList';
import { Item } from './types';
import ShoppingListForm from './components/ShoppingListForm/ShoppingListForm';

function App() {
    const [items, setItem] = useState<Item[]>([]);

    const addItem = (product: string) => {
      console.log(product);
    };

    //   const items = [
    //     { id: 1, product: 'Lemon', quantity: 3 },
    //     { id: 2, product: 'Banana', quantity: 3 },
    // ];

    return (
        <div className="App">
            <ShopingList items={items} />
            <ShoppingListForm onAddItem={addItem} />
        </div>
    );
}

export default App;
