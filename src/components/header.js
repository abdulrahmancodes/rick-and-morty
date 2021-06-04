import React, { useContext } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import AppContext from '../context/app-context';
import { Link } from 'gatsby';

const Header = ({ heading }) => {
    const { handleSearch } = (heading === null) && useContext(AppContext);

    return (
        <header className="header" >
            {(heading === null) ? <Link to="/" ><h3 className="heading" >Rick And Morty</h3></Link> : <h3 className="heading" >{heading}</h3> }
            {(heading === null) && <input type="text" placeholder="Search for any character from the page" className="search-box"  onChange={handleSearch} />}
            { !(heading === 'Search any characters from Rick and Morty') &&  <Link to="/search" ><span className="btn">Go to the Search Page</span></Link>}
        </header>
    )
}

Header.propTypes = {
    heading: PropTypes.string
}

export default Header;