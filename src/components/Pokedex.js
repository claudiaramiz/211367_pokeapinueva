import React from "react";
import './navbar.css'
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {

    const { pokemons } = props;

    return (
        <div>
            <div className="header">
                <h1>Pokemones</h1>
                <Pagination 
                page={1}
                totalPages={112}
                onLeft={console.log}
                onRight={console.log}
                />
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />
                })}
            </div>
        </div>
    );
};

export default Pokedex;