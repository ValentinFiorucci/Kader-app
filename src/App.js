import {Navbar} from './components/NavBar';
import {ItemCount} from './components/ItemCount';
import {ItemList} from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemList/>
        <ItemCount/>
      </header>
    </div>
  );
}

export default App;
