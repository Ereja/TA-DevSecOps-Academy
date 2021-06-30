import './App.css';
import CardSearch from './components/CardSearch/CardSearch';

const CARDS = ['Card #1', 'Card #2', 'Alice', 'Bob'].map(title => ({title, description: Math.random().toString(36).slice(2)}));

const App = () => {
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
