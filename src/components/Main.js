import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import { getPokemonData, getPokemons } from "../api";
import Pokeinfo from "./Pokeinfo";
import { useTranslation } from 'react-i18next';
import './navbar.css'

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [pokeDex, setPokedex] = useState();
    const { i18n, t } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(10, 10 * page);
            //console.log(data.results);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            });
            const results = await Promise.all(promises)
            setPokeData(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 10));
        }
        catch (error) { }
    }

    useEffect(() => {
        fetchPokemons();
    }, [page])

    return (
        <>
            <div className="container">
                <div className="left-content">
                    <div className="btn-group-lang">
                        <button onClick={changeLanguage} value='en' className='btn-lang'>English</button>
                        <button onClick={changeLanguage} value='es' className='btn-lang' >Español</button>
                        </div>
                    <Card pokemon={pokeData} loading={loading}
                        infoPokemon={poke => setPokedex(poke)}
                        page={page}
                        setPage={setPage}
                        total={total} />
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>

        </>
    )
}

export default Main;