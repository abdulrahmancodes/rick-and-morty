import React from 'react';
import './character.scss';
import PropTypes from 'prop-types';

const Character = ( {characterData} ) => (
    <div className="character" >
        <img src={characterData.image} alt="" className="character__image" />
        <h3 className="character__name" >{characterData.name}</h3>
    </div>
)

Character.propTypes = {
    characterData: PropTypes.object
}

export default Character;