import React from "react";
import Informacion from './Informacion'
import './navbar.css';
import { useTranslation } from 'react-i18next';


const About = () => {
    const { i18n, t } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
      }

    return (
        <div>
            <div className="pagination-lang">
                <button onClick={changeLanguage} value='en' className='btn-primary'>English</button>
                <button onClick={changeLanguage} value='es' className='btn-primary' >Español</button>
            </div>
            <div className="header">
                <h1>{t("information")}</h1>
            </div>
            <Informacion />
        </div>
    );
};

export default About;