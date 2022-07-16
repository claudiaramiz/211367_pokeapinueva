import React from "react";
import './navbar.css'
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { useTranslation } from 'react-i18next';

const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading } = props;
    const { i18n, t } = useTranslation();

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage)
    }

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div>
            <div className="pagination-lang">
                <button onClick={changeLanguage} value='en' className='btn-lang'>English</button>
                <button onClick={changeLanguage} value='es' className='btn-lang' >Español</button>
            </div>
            <div className="header">
                <h1>{t("title")}</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {
                loading ? <div>Cargando pokemones ...</div>
                    : <div className="pokedex-grid">
                        {pokemons.map((pokemon, idx) => {
                            return <Pokemon pokemon={pokemon} key={pokemon.name} />
                        })}
                    </div>
            }

        </div>
    );
};

export default Pokedex;