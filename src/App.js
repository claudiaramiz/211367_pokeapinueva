import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import { getPokemons } from './api';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    }
    catch (error) { }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <div>
      <div><Navbar />
        <div className='App'>
          <Searchbar />
          <Pokedex pokemons={pokemons} />
        </div>
      </div>
    </div>

  );
}

export default App;
