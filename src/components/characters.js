import React from "react"
import { Link } from "gatsby"
import Character from "./character"
import "./characters.scss"
import PropTypes from "prop-types"

const Characters = ({ charactersArray }) => (
  <div className="characters">
    {charactersArray ? (
      charactersArray.map(characterData => (
        <Link to={`/characters/${characterData.id}`} key={characterData.id}>
          <Character characterData={characterData} />
        </Link>
      ))
    ) : (
      <h2 className="nothing-matched">Nothing matched your search!</h2>
    )}
  </div>
)

Characters.propTypes = {
  charactersArray: PropTypes.array,
}

export default Characters
