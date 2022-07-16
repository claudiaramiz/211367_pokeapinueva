import React, { useState, Component } from "react";
import { searchPokemon } from './../api';
import { useTranslation } from 'react-i18next';
import PokemonCard from "./PokemonCard";
import './style.css'

function Searchbar(infoPokemon) {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const { i18n, t } = useTranslation();
    const [searchpokemon, setSearchPokemon] = useState([]);
    const [pokeDex, setPokedex] = useState();


    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        console.log(e.target.value.toLowerCase())
    }

    const onClick = async (e) => {
        try {
            const data = await searchPokemon(search);
            setPokemon(data);
            setPokedex(data);
            setSearchPokemon(search);
        }
        catch { }
    }

    return (
        <>
            <div className="container">
                <div className="left-content">
                    <div className="containerSearchBar">
                        <div className="searchbar-container">
                            <div className="searchbar">
                                <input className="searchbar-input" placeholder="Buscar pokémon"
                                    onChange={onChange}></input>
                            </div>
                            <div className="searchbar-btn"><button onClick={onClick}>{t("searchbutton")}</button></div>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <PokemonCard data={pokeDex} />
                </div>
            </div>
        </>
    );
};

export default Searchbar;