import React from "react"
import Layout from "../components/layout"
import "./character-details.scss"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

const CharacterDetails = ({ data }) => {
  const {
    name,
    gender,
    location,
    origin,
    status,
    episode,
    image,
    species,
  } = data.RickAndMorty.character

  return (
    <Layout isHome={false}>
      <div className="character-details">
        <img src={image} alt={name} className="character-details__image" />
        <ul className="character-details__list">
          <li>
            <strong>Species:</strong> {species}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Status:</strong> {status}
          </li>
          <li>
            <strong>Last Known Location:</strong> {location.name}
          </li>
          <li>
            <strong>Origin:</strong> {origin.name}
          </li>
          <li>
            <strong>First seen in:</strong> {episode[0].name}
          </li>
          <li>
            <strong>Last seen in:</strong> {episode[episode.length - 1].name}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Characters($slug: ID!) {
    RickAndMorty {
      character(id: $slug) {
        id
        name
        episode {
          name
        }
        gender
        image
        species
        type
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`

export default CharacterDetails

CharacterDetails.propTypes = {
  data: PropTypes.object,
}
