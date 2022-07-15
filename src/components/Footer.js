import React from "react";
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n, t } = useTranslation();
    return (
        <div>
            <div className="footer">
                <h4>{t("footer")}</h4>
                <h4>Claudia Ramirez</h4>
            </div>
        </div>
    );
};

export default Footer;