import { useState } from 'react';
import { Container } from './components/ItemListContainer';
import {Navbar} from './components/NavBar';
import {ItemCount} from './components/ItemCount'

function App() {
  const [container, setContainer] = useState('Ecommerce')
  const handleContainer = () => setContainer('KaderShop')
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Container className="centrar" greeting={container} onTitle={handleContainer}/>
        <ItemCount/>
      </header>
    </div>
  );
}

export default App;
