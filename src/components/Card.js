import React from "react";
import './style.css'
import { useTranslation } from 'react-i18next';
import Pagination from "./Pagination";

const Card = ({ pokemon, loading, infoPokemon, page, setPage, total }) => {

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
        <>
            <div className="btn-group" >
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                /></div>
            {
                loading ? <div>Cargando pokemones ...</div>
                    :
                    pokemon.map((item) => {
                        return (
                            <div key={item.name}>
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default} alt={item.name} />
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                        )

                    })
            }
        </>
    )
}

export default Card;