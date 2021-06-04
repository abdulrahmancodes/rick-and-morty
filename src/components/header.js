import React, { useContext } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import AppContext from '../context/app-context';
import { Link } from 'gatsby';

const Header = ({ heading }) => {
    const { handleSearch } = (heading == null) && useContext(AppContext);

    return (
        <header className="header" >
            {(heading === null) ? <Link to="/" ><h3 className="heading" >Rick And Morty</h3></Link> : <h3>{heading}</h3> }
            {/* <h3 className="heading">{(heading === null) ? 'Rick and Morty Characters' : heading}</h3> */}
            {(heading === null) && <input type="text" placeholder="Search characters by name" className="search-box"  onChange={handleSearch} />}
        </header>
    )
}

Header.propTypes = {
    heading: PropTypes.string
}

export default Header;