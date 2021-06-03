import React from 'react';
import './header.scss';

const Header = ( {heading} ) => {
    const isHome = (window.location.pathname === '/' );
    console.log(isHome)
    return (
        <header className="header" >
            <h3 className="heading">{ isHome ? 'Rick and Morty Characters' : heading }</h3>
        </header>
    )
}

export default Header;