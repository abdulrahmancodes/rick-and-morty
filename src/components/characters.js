import React from 'react';
import { Link } from "gatsby";
import Character from './character';
import './characters.scss';
import PropTypes from 'prop-types';

const Characters = ( {charactersArray} ) => {

    return (
        <div className="characters">
            {charactersArray.map(characterData => <Link to={`/characters/${characterData.id}`} ><Character characterData={characterData} key={characterData.id} /></Link>)}
            {/* {(charactersArray.length === 0) && <h2 className="nothing-found" >Nothing Here</h2>} */}
        </div>
    )
}

Characters.propTypes = {
    charactersArray: PropTypes.array,
} 

export default Characters;