import React, { useContext } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api';
import { ThemeContext } from './Context/ContextoGeneral';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { setUltimaPagina } = useContext(ThemeContext);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(10, 10 * page);
      //console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
    }
    catch (error) { }
  }

  useEffect(() => {
    fetchPokemons();
    setUltimaPagina('Inicio');
  }, [page])

  return (
    <div>
      <div>
        <div className='App'>
          <Pokedex
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
