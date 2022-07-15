import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const { i18n, t } = useTranslation();

    return (
        <nav className="navbar">
            <div>  <img src={imgUrl}
                className="navbar-image"
                alt='Pokeapi logo'
            ></img>
            </div>
            <div>
                <Link to="/" className="btn-primary">{t("inicio")}</Link>
                <Link to="/Home" className="btn-primary">{t("home")}</Link>
                <Link to="/About" className="btn-primary">{t("information")}</Link>
            </div>
        </nav>
        
    );
}

export default Navbar;