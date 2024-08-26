import './App.css';
import ShopingList from './components/ShopingList/ShopingList';

function App() {
  const items = [
    { id: 1, product: 'Lemon', quantity: 3 },
    { id: 2, product: 'Banana', quantity: 3 },
];

    return (
        <div className="App">
          <ShopingList items={items}/>
        </div>
    );
}

export default App;
