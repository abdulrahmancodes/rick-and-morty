import React, { useState } from 'react';
import './character.scss';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

const Character = ({ characterData }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <div className="character" >
            <img src={characterData.image} alt="" className="character__image" onLoad={() => setIsImageLoaded(true)} loading="lazy" />
            {!isImageLoaded && <div className="character__loader"><Loader type='Oval' color="black" width={60} height={60} /></div>}
            <h3 className="character__name" >{characterData.name}</h3>
        </div>
    )
}

Character.propTypes = {
    characterData: PropTypes.object
}

export default Character;