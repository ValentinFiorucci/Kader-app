import {Navbar} from './components/NavBar';
import ItemList from "./components/ItemList"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemList/>
      </header>
    </div>
  );
}

export default App;
