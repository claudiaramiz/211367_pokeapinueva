import React from "react";
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="footer-body">
                <h4>{t("footer")}</h4>
                <h4>Claudia Ramirez</h4>
                <h4>{t("created")}</h4>
                <h4>{t("date")}</h4>
                <h4></h4>
            </div>
        </div>
    );
};

export default Footer;