import React from 'react'
import './navbar.css';

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (

        <nav>
            <div><img src={imgUrl}
                className="navbar-image"
                alt='Pokeapi logo'
            ></img></div>

        </nav>
    )
}

export default Navbar;