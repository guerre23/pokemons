//import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedPages from './pages/ProtectedPages';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemon';
import PokeCounter from './components/location/PokeCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedPages />} >
            <Route path='/pokedex' element={<PokemonList/>} />
            <Route path='/pokedex/:id' element={<Pokemon/>} />
            <Route path='/pokedex/:id/encounters' element={<PokeCounter/>} />
          </Route>
          <Route path='/settings' />
        </Routes>
      </header>
    </div>
  );
}

export default App;