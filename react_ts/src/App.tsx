import './App.css';
import Greeter from './components/Greeter/Greeter';

function App() {
    return (
        <div className="App">
            <Greeter person="Ira" />
            <Greeter person="Misha" />
            <Greeter person="Vitya" />
        </div>
    );
}

export default App;
