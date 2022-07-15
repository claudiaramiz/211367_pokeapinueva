import React, { useState, Component } from "react";
import { searchPokemon } from './../api';
import './navbar.css';
import { useTranslation } from 'react-i18next';
import PokemonCard from "./PokemonCard";

function Searchbar() {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const { i18n, t } = useTranslation();
    const [searchpokemon, setSearchPokemon] = useState([]);


    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
        setSearchPokemon(search);
    }

    return (
        <div className="containerSearchBar">
            <div className="searchbar-container">
                <div className="searchbar">
                    <input className="searchbar-input" placeholder="Buscar pokémon"
                        onChange={onChange}></input>
                </div>
                <div className="searchbar-btn"><button onClick={onClick}>{t("searchbutton")}</button></div>
            </div >
            <div className="containerSearchBar"><br></br></div>
            <div className="containerSearchBar">
                <PokemonCard pokemon={searchpokemon}></PokemonCard>
            </div>
        </div>
    );
};

export default Searchbar;