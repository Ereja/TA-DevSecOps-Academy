import './App.css';
import CardSearch from './components/cardSearch';

const CARDS = ['Card #1', 'Card #2', 'Alice', 'Bob'].map(title => ({title, description: Math.random().toString(36).slice(2)}));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardSearch 
          cards={CARDS}
        />
      </header>
    </div>
  );
}

export default App;
