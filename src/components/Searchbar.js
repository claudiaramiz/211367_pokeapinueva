import React, { useState } from "react";
import { searchPokemon } from './../api';
import './navbar.css'

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
        console.log(data);
    }

    return (
        <div>
            <div className="searchbar-container">
                <input className="searchbar-input" placeholder="Buscar pokemon..."
                    onChange={onChange}
                ></input>
            </div>
            <div className="searchbar-btn"><button onClick={onClick}>Buscar</button></div>
        </div>
    );
};

export default Searchbar;