import React, { useTransition } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './api';
import { useTranslation } from 'react-i18next';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

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
