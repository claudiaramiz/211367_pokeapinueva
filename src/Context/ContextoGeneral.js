import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ContextoGeneral = (props) => {

    const [ultimaBusqueda, setUltimaBusqueda] = useState('');
    const [ultimaPagina, setUltimaPagina] = useState('Pagina');
    const [mensaje, setMensaje] = useState('');


    return (
        <ThemeContext.Provider value={{ ultimaBusqueda, ultimaPagina, 
        setUltimaBusqueda, setUltimaPagina,
        mensaje, setMensaje }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ContextoGeneral;