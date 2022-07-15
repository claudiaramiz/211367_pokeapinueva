import React, { useState } from "react";
import { searchPokemon } from "../api";

function PokemonCard(props) {

    const [pokemon, setPokemon] = useState()

    const buscarPokemon = async (pokemon) => {
        const data = await searchPokemon(pokemon);
        setPokemon(data);
        console.log(data);
    }

    return (
        <div>
            <div className="pokemon-card">
                <p onChange={buscarPokemon}>{props.pokemon ?? "No hay busqueda"}</p>
            </div>
            <div>
                {pokemon &&
                    <div>
                        <div>Id: {pokemon.id}</div>
                        <div>Nombre: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <div>Elemento:    {pokemon.types.map((type, idx) => {
                            return (
                                <div className="pokemon-type" key={idx}>{type.type.name}</div>
                            )
                        })}</div>
                        <div>
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                className="pokemon-img"
                            ></img>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default PokemonCard;