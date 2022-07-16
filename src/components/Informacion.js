import React from "react";
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Informacion = () => {

    const { t } = useTranslation();

    return (
        <div className="body">
            <div className="about-header">
                <h2>Claudia Melissa Ramirez Martinez 211367</h2>
            </div>
            <div>
                <br /><br />
            </div>
            <div className="information-text">
                <p>{t("aboutinformation1")}</p><br />
                <p>{t("aboutinformation2")}</p><br />
                <p>{t("aboutinformation3")}</p><br />
                <p>{t("aboutinformation4")}</p><br />
                <p>{t("aboutinformation5")}</p><br />
            </div>
        </div>
    );
}

export default Informacion;