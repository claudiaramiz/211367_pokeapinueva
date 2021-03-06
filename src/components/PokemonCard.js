import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import './navbar.css';
import { ThemeContext } from '../Context/ContextoGeneral';

const PokemonCard = ({ data }) => {
    const { t } = useTranslation();
    const { mensaje } = useContext(ThemeContext);

    return (
        <>
            {
                (!data) ? <h3>{mensaje}</h3> : (
                    <>
                        <div className="pokecontainer">
                            <div>
                                <h1>{data.name}</h1>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} alt={data.name} />
                            </div>
                            <div>
                                <div>Id: {data.id}</div>
                                <div>{t("pokename")}: {data.name}</div>
                                <div>{t("pokeweight")}: {data.weight}</div>
                                <div>{t("poketype")}:  {data.types.map((type, idx) => {
                                    return (
                                        <div className="pokemon-type" key={idx}>{type.type.name}</div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </>
    )
}

export default PokemonCard;