import React, { useContext, useEffect } from "react";
import Informacion from './Informacion'
import './navbar.css';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../Context/ContextoGeneral';

const About = () => {
    const { i18n, t } = useTranslation();
    const { setUltimaPagina } = useContext(ThemeContext);

    useEffect(() => {
        setUltimaPagina('Acerca de');
    }, [])

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
                <h1>{t("about")}</h1>
            </div>
            <Informacion />
        </div>
    );
};

export default About;