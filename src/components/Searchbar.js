import React, { useState, useContext } from "react";
import { searchPokemon } from './../api';
import { useTranslation } from 'react-i18next';
import PokemonCard from "./PokemonCard";
import './style.css';
import { ThemeContext } from '../Context/ContextoGeneral';

function Searchbar(infoPokemon) {
    const [search, setSearch] = useState('');
    const { t } = useTranslation();
    const [pokeDex, setPokedex] = useState();
    const [val, setVal] = useState();
    const { setUltimaBusqueda } = useContext(ThemeContext);
    const { setMensaje } = useContext(ThemeContext);

    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        console.log(e.target.value.toLowerCase())
        setVal(e.target.value);
    }

    const onClick = async (e) => {
        try {
            const data = await searchPokemon(search);
            if (!data)
                setMensaje(`La búsqueda ${search} no arrojó resultados.`);
            setPokedex(data);
            setUltimaBusqueda(search);
            setVal('');
        }
        catch { }
    }

    return (
        <>
            <div className="containersearch">
                <div className="left-contentsearch">
                    <div className="searchbar">
                        <input name="searchinput" className="searchbar-input" placeholder="Buscar pokémon"
                            onChange={onChange} value={val || ''}></input>
                    </div>
                    <div className="searchbar-btn"><button onClick={onClick}>{t("searchbutton")}</button></div>
                </div>
                <div className="right-contentsearch">
                    <PokemonCard data={pokeDex} />
                </div>
            </div>
        </>
    );
};

export default Searchbar;