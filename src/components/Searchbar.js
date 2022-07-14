import React, { useState } from "react";
import { searchPokemon } from './../api';
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const { i18n, t } = useTranslation();


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
        <div className="searchbar-container">
            <div className="searchbar">
                <input className="searchbar-input" placeholder="Buscar pokémon"
                    onChange={onChange}
                ></input>
            </div>
            <div className="searchbar-btn"><button onClick={onClick}>{t("searchbutton")}</button></div>
        </div >
    );
};

export default Searchbar;