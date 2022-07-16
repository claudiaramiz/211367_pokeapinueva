import React, { useContext } from "react";
import { ThemeContext } from '../Context/ContextoGeneral';
import './navbar.css'
import { useTranslation } from 'react-i18next';

const NavbarInferior = () => {
    const { ultimaPagina } = useContext(ThemeContext);
    const { ultimaBusqueda } = useContext(ThemeContext);
    const { t } = useTranslation();
    
    return (
        <div className="containerNav">
            <p>{t("lastPage")} {ultimaPagina}</p>
            <p>{t("lastSearch")} {ultimaBusqueda}</p>
        </div>
    );
}

export default NavbarInferior;