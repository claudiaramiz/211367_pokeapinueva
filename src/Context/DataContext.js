import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [busqueda, setBusqueda] = useState('');
    const [mensaje, setMensaje] = useState('');

    return (
        <DataContext.Provider value={{ busqueda, mensaje, setBusqueda, setMensaje }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;