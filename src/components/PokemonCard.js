import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import './navbar.css'

const PokemonCard = ({ data }) => {
    const { t } = useTranslation();

    return (
        <>
            {
                (!data) ?  <h1>{t("pokemessage")}</h1> : (
                    <>
                        <div className="pokecontainer">
                            <h1>{data.name}</h1>
                            <div className="pokeLeft">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} alt={data.name} /></div>
                        </div>
                        <div className="pokeRight">
                            <div>Id: {data.id}</div>
                            <div>{t("pokename")}: {data.name}</div>
                            <div>{t("pokeweight")}: {data.weight}</div>
                            <div>{t("poketype")}:  {data.types.map((type, idx) => {
                                return (
                                    <div className="pokemon-type" key={idx}>{type.type.name}</div>
                                )
                            })}</div>
                        </div>
                    </>
                )}
        </>
    )
}

export default PokemonCard;