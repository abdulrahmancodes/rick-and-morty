import React from 'react';
import Layout from '../components/layout';
import './character-details.scss'
import { Link, graphql } from "gatsby";
import PropTypes from 'prop-types';

const CharacterDetails = ({ data }) => {
    const { name, gender, location, origin, status, episode, image } = data.RickAndMorty.charactersByIds[0];
    
    return (
        <Layout heading={name} >
            <Link to="/" ><span className="back-btn" >Back To Home</span></Link>
            <div className="character-details">
                <img src={image} alt={name} className="character-details__image" />
                    <ul className='character-details__list'>
                        <li><strong>Gender:</strong> {gender}</li>
                        <li><strong>Status:</strong> {status}</li>
                        <li><strong>Last Known Location:</strong> {location.name}</li>
                        <li><strong>Origin:</strong> {origin.name}</li>
                        <li><strong>First seen in:</strong> {episode[0].name}</li>
                        <li><strong>Last seen in:</strong> {episode[episode.length - 1].name}</li>
                    </ul>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery($id: [ID!]!) {
        RickAndMorty {
        charactersByIds(ids: $id) {
            name
            gender
            id
            image
            origin {
            name
            }
            species
            status
            type
            location {
                name
            }
            episode {
                name
            }
        }
        }
    }
`
export default CharacterDetails;

CharacterDetails.propTypes = {
    data: PropTypes.object
}